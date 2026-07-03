#!/usr/bin/env python3
"""
adresult.kr 성공사례 게시판 글 → src/data/success-cases.ts 이식 스크립트.

사용법:
  1) python3 -m venv .venv && . .venv/bin/activate && pip install beautifulsoup4
  2) 아래 IDXS 배열에 이식할 글 idx를 "노출 순서대로" 넣는다. (맨 앞 = 목록 첫 글)
  3) python3 scripts/port-cases.py
  4) pnpm build 로 /cases, /cases/[slug] 생성 확인

동작:
  - 게시판 view 는 서버렌더 → curl(urllib)로 HTML 확보
  - 본문(.fr-view)을 run 단위로 파싱: 색상/굵기/기울임/밑줄/줄바꿈 보존
  - /upload/ 이미지 → public/images/cases/{idx}/ 로 다운로드(+실측 크기)
  - 유튜브 watch 링크 썸네일 → 영상 임베딩(video 블록)
  - 유튜브 채널(@/channel/c) 배너·가로로 넓은(비율≥2) 꼬리 배너 → 제거(상세 페이지 공통 하단이 대체)
  - og:title 과 같은 첫 블록(제목 중복) 제거
자세한 설명: docs/08-case-porting.md
"""
import json, os, re, subprocess, urllib.request
from bs4 import BeautifulSoup, NavigableString, Tag

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOARD = "https://adresult.kr/549265113/?bmode=view&t=board&idx="
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"

# ── 이식할 글 idx (추가/생성 순서대로 — 오래된 → 최신) ──
# 맨 뒤가 가장 최근에 추가한 글. 사이트에는 최신이 맨 앞에 노출되도록 출력 시 역순으로 뒤집는다.
# 새 글을 추가할 때는 이 배열의 "맨 끝"에 idx 를 붙이면 자동으로 목록 맨 앞에 노출된다.
IDXS = [
    "164425283",
    "164427329",
    "164429049",
]

# ── 카드 썸네일(cover) 지정 ──
# 기본값은 본문 "첫 이미지". 특정 글은 여기서 override 한다.
#   "last"  → 본문 마지막 이미지
#   정수 n  → 본문 n번째 이미지(1-based)
COVERS = {
    "164427329": "last",
}

# ── 리드 콜아웃(핵심 요약, 수치 포함) — idx → 1~2문장 ──
# AEO: 이미지 속 핵심 수치를 텍스트로도 노출해 답변엔진/크롤러가 읽게 한다.
LEADS = {
    "164429049": "기존 대행사에서 성과를 못 본 B의원은 애드리절트로 옮긴 뒤, 인터넷 신규환자 35명에서 광고 3개월 만에 목표였던 70명을 넘어 최대 130명까지 늘었습니다.",
    "164427329": "수술 정형외과 D의원은 월 2,800~3,000만원을 파워링크에 쓰고도 환자가 늘지 않았습니다. 애드리절트는 파워링크를 끄고 검색 의도 기반 콘텐츠로 전환해 전년 동기 대비 환자를 30% 늘렸습니다.",
    "164425283": "개원 후 6개월간 월 1,000~1,500만원을 쓰고도 인터넷 신규환자가 0명이던 U정형외과는, 애드리절트와 함께한 뒤 월 신규환자 80명을 달성했습니다.",
}

# ── FAQ(자주 묻는 질문) — idx → [{"q","a"}] ──
# AEO: 각 답변은 독립적으로 완결되게 쓴다(답변엔진이 그대로 인용).
FAQS = {
    "164429049": [
        {
            "q": "B의원은 얼마 만에 성과가 났나요?",
            "a": "광고 시작 3개월 만에 인터넷 신규환자가 35명에서 최대 130명까지 늘며 목표치였던 70명을 넘어섰습니다.",
        },
        {
            "q": "왜 대행사를 애드리절트로 바꿨나요?",
            "a": "기존 대행사는 환자가 줄어도 자사 광고에는 문제가 없다고만 하고 한 팀처럼 움직이지 않았습니다. 애드리절트는 병원에 필요한 것을 먼저 제안하며 한 팀으로 관리했습니다.",
        },
    ],
    "164427329": [
        {
            "q": "D의원의 기존 광고비 문제는 무엇이었나요?",
            "a": "월 2,800~3,000만원을 대부분 파워링크에 쓰고 있었고, 강남권 병원 수준의 비용에도 환자가 늘지 않았습니다.",
        },
        {
            "q": "애드리절트와 진행한 결과는 어땠나요?",
            "a": "파워링크를 끄고 검색 의도에 맞춘 콘텐츠로 전환한 뒤 전년 같은 시기 대비 환자가 30% 증가했습니다.",
        },
    ],
    "164425283": [
        {
            "q": "인터넷 신규환자가 얼마나 늘었나요?",
            "a": "인터넷 신규환자 0명에서 월 80명까지 증가했습니다.",
        },
        {
            "q": "기존에 광고비를 얼마나 쓰고 있었나요?",
            "a": "개원 후 6개월 동안 월 약 1,000만~1,500만원의 광고비를 쓰고 있었습니다.",
        },
    ],
}


def _get(url, referer="https://adresult.kr/"):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": referer})
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read()


def fetch_html(idx):
    cache = os.path.join(REPO, "scripts", ".cache")
    os.makedirs(cache, exist_ok=True)
    p = os.path.join(cache, f"case-{idx}.html")
    if not os.path.exists(p):
        open(p, "wb").write(_get(BOARD + idx))
    return p


def px(s, k):
    m = re.search(k + r"\s*:\s*([0-9.]+)px", s or "", re.I)
    return float(m.group(1)) if m else 0


def weight(s):
    m = re.search(r"font-weight\s*:\s*([a-z0-9]+)", s or "", re.I)
    if not m:
        return 0
    v = m.group(1).lower()
    return 700 if v in ("bold", "bolder") else (int(v) if v.isdigit() else 0)


def color(s):
    m = re.search(r"(?<!background-)color\s*:\s*(#[0-9a-fA-F]{3,6}|rgb\([^)]+\))", s or "", re.I)
    if not m:
        return None
    c = m.group(1)
    mm = re.match(r"rgb\((\d+),\s*(\d+),\s*(\d+)\)", c)
    if mm:
        c = "#%02x%02x%02x" % (int(mm.group(1)), int(mm.group(2)), int(mm.group(3)))
    return c.lower()


def is_dark(c):
    if not c or not c.startswith("#"):
        return True
    h = c[1:]
    h = "".join(x * 2 for x in h) if len(h) == 3 else h
    try:
        r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    except ValueError:
        return True
    return r < 70 and g < 70 and b < 70


def walk(node, st, runs, sizes):
    for ch in node.children:
        if isinstance(ch, NavigableString):
            t = str(ch).replace("\n", " ")
            if t:
                runs.append({**st, "t": t})
        elif isinstance(ch, Tag):
            if ch.name == "br":
                runs.append({"br": True})
                continue
            if ch.name in ("script", "style"):
                continue
            style = ch.get("style", "") or ""
            nst = dict(st)
            if ch.name in ("strong", "b") or weight(style) >= 600:
                nst["b"] = True
            if ch.name in ("em", "i") or re.search(r"font-style\s*:\s*italic", style, re.I):
                nst["i"] = True
            if ch.name == "u" or re.search(r"text-decoration[^;]*underline", style, re.I):
                nst["u"] = True
            c = color(style)
            if c and not is_dark(c):
                nst["c"] = c
            elif c:
                nst.pop("c", None)
            fs = px(style, "font-size")
            if fs:
                sizes.append(fs)
            walk(ch, nst, runs, sizes)


def clean_runs(runs):
    out = []
    for r in runs:
        if r.get("br"):
            if out and not out[-1].get("br"):
                out.append({"br": True})
            continue
        t = re.sub(r"[ \t]+", " ", r.get("t", ""))
        if t == "":
            continue
        rr = {"t": t}
        for k in ("b", "i", "u", "c"):
            if r.get(k):
                rr[k] = r[k]
        same = out and not out[-1].get("br") and {k: out[-1].get(k) for k in ("b", "i", "u", "c")} == {
            k: rr.get(k) for k in ("b", "i", "u", "c")
        }
        if same:
            out[-1]["t"] += rr["t"]
        else:
            out.append(rr)
    while out and out[0].get("br"):
        out.pop(0)
    while out and out[-1].get("br"):
        out.pop()
    if out and "t" in out[0]:
        out[0]["t"] = out[0]["t"].lstrip()
    if out and "t" in out[-1]:
        out[-1]["t"] = out[-1]["t"].rstrip()
    return out


def runs_text(runs):
    return "".join(r.get("t", "") for r in runs).strip()


def dims(p):
    try:
        o = subprocess.check_output(
            ["sips", "-g", "pixelWidth", "-g", "pixelHeight", p], stderr=subprocess.DEVNULL
        ).decode()
        w = re.search(r"pixelWidth: (\d+)", o)
        h = re.search(r"pixelHeight: (\d+)", o)
        return (int(w.group(1)), int(h.group(1))) if w and h else (1000, 1000)
    except Exception:
        return (1000, 1000)


def build(idx):
    soup = BeautifulSoup(open(fetch_html(idx), encoding="utf-8").read(), "html.parser")
    ogt = soup.find("meta", property="og:title")
    title = ogt["content"].split(" : ")[0].strip() if ogt else ""
    views = soup.select(".fr-view")
    best = (
        max(views, key=lambda e: len(e.get_text(strip=True)) + len(e.select('img[src*="/upload/"]')) * 50)
        if views
        else None
    )
    folder = f"{REPO}/public/images/cases/{idx}"
    os.makedirs(folder, exist_ok=True)
    blocks = []
    n = 0
    if best:
        for node in best.select('p, img[src*="/upload/"]'):
            if node.name == "img":
                src = node.get("src") or node.get("data-src") or ""
                if src.startswith("//"):
                    src = "https:" + src
                if "/upload/" not in src:
                    continue
                a = node.find_parent("a")
                href = a.get("href", "") if a else ""
                vm = re.search(r"(?:youtu\.be/|[?&]v=)([\w-]{11})", href)
                if vm and ("youtube.com/watch" in href or "youtu.be/" in href):
                    blocks.append({"type": "video", "videoId": vm.group(1)})
                    continue
                if re.search(r"youtube\.com/(@|channel/|c/)", href):
                    continue  # 채널 배너 → 공통 하단이 대체
                n += 1
                ext = (src.split("?")[0].rsplit(".", 1)[-1] or "png").lower()
                if ext not in ("png", "jpg", "jpeg", "gif", "webp"):
                    ext = "png"
                dest = f"{folder}/{n}.{ext}"
                try:
                    open(dest, "wb").write(_get(src))
                    w, h = dims(dest)
                except Exception as e:
                    print("IMGFAIL", src, e)
                    w, h = 1000, 1000
                blocks.append(
                    {
                        "type": "img",
                        "src": f"/images/cases/{idx}/{n}.{ext}",
                        "w": w,
                        "h": h,
                        "alt": node.get("alt", "") or title,
                    }
                )
                continue
            runs, sizes = [], []
            walk(node, {}, runs, sizes)
            runs = clean_runs(runs)
            if not runs_text(runs):
                continue
            blocks.append({"type": "h" if (max(sizes) if sizes else 0) >= 19 else "p", "runs": runs})

    def _n(x):
        return re.sub(r"\s+", "", x or "")

    while blocks:
        b0 = blocks[0]
        if not b0.get("runs"):
            break
        t0, tt = _n(runs_text(b0["runs"])), _n(title)
        if t0 and (t0 == tt or (len(t0) > 15 and (t0 in tt or tt in t0))):
            blocks.pop(0)
        else:
            break
    while blocks and blocks[-1]["type"] == "img" and blocks[-1].get("h") and blocks[-1]["w"] / blocks[-1]["h"] >= 2.0:
        blocks.pop()
    # 블록에서 제외된 이미지 파일(꼬리 배너·중복 등) 정리 → 고아 파일 방지
    used = {b["src"].rsplit("/", 1)[-1] for b in blocks if b["type"] == "img"}
    for f in os.listdir(folder):
        if f not in used:
            try:
                os.remove(os.path.join(folder, f))
            except OSError:
                pass
    for bi, b in enumerate(blocks):
        b["id"] = bi
        if b.get("runs"):
            for ri, r in enumerate(b["runs"]):
                r["k"] = ri
    img_blocks = [b for b in blocks if b["type"] == "img"]
    ov = COVERS.get(idx)
    if not img_blocks:
        cover_block = None
    elif ov == "last":
        cover_block = img_blocks[-1]
    elif isinstance(ov, int) and 1 <= ov <= len(img_blocks):
        cover_block = img_blocks[ov - 1]
    else:
        cover_block = img_blocks[0]
    cover = cover_block["src"] if cover_block else ""
    cwh = (cover_block["w"], cover_block["h"]) if cover_block else (1000, 1000)
    # 목록 카드 excerpt: 본문 문단(p)을 순서대로 이어붙여 ~160자 (카드는 line-clamp-3로 3줄+말줄임).
    body_text = " ".join(
        runs_text(b["runs"]) for b in blocks if b["type"] == "p" and len(runs_text(b["runs"])) > 4
    )
    excerpt = body_text[:160].rstrip()
    return {
        "slug": idx,
        "title": title,
        "excerpt": excerpt,
        "summary": LEADS.get(idx, ""),
        "faq": FAQS.get(idx, []),
        "cover": cover,
        "coverW": cwh[0],
        "coverH": cwh[1],
        "blocks": blocks,
    }


def main():
    arts = [build(i) for i in IDXS]
    for a in arts:
        imgs = len([b for b in a["blocks"] if b["type"] == "img"])
        txt = len([b for b in a["blocks"] if b["type"] != "img"])
        print(f'{a["slug"]}: {txt} text, {imgs} img | {a["title"][:45]}')
    # 사이트 노출은 최신(IDXS 맨 뒤)이 맨 앞 → 출력 배열을 역순으로 뒤집는다.
    display = list(reversed(arts))
    print("노출 순서:", " → ".join(a["slug"] for a in display))
    body = json.dumps(display, ensure_ascii=False, indent="\t")
    ts = (
        '''import type { CardItem } from "@/components/shared/PaginatedCards";

// 애드리절트 병원마케팅 성공사례 — adresult.kr 원문 이식(scripts/port-cases.py 자동 생성).
// 상단 브랜드 헤더/하단 CTA는 상세 페이지(src/app/cases/[slug])에서 공통 렌더.
export type CaseRun = { t?: string; b?: boolean; i?: boolean; u?: boolean; c?: string; br?: boolean; k?: number };
export type CaseBlock = {
	id?: number;
	type: "h" | "p" | "img" | "video";
	runs?: CaseRun[];
	src?: string;
	alt?: string;
	w?: number;
	h?: number;
	videoId?: string;
};
export type CaseFaq = { q: string; a: string };
export type CaseArticle = {
	slug: string;
	title: string;
	excerpt: string;
	summary?: string;
	faq?: CaseFaq[];
	cover: string;
	coverW: number;
	coverH: number;
	blocks: CaseBlock[];
};

export const CASE_ARTICLES: CaseArticle[] = %s as CaseArticle[];

export const SUCCESS_CASES: CardItem[] = CASE_ARTICLES.map((a) => ({
	id: a.slug,
	title: a.title,
	excerpt: a.excerpt,
	image: a.cover,
	href: `/cases/${a.slug}`,
}));

export const getCase = (slug: string) => CASE_ARTICLES.find((a) => a.slug === slug);
'''
        % body
    )
    open(f"{REPO}/src/data/success-cases.ts", "w", encoding="utf-8").write(ts)
    print("WROTE src/data/success-cases.ts")
    # biome 포맷에 맞춰 정리(생성물이 lint를 통과하도록)
    try:
        subprocess.run(
            ["pnpm", "exec", "biome", "format", "--write", "src/data/success-cases.ts"],
            cwd=REPO,
            check=False,
        )
    except Exception:
        pass


if __name__ == "__main__":
    main()
