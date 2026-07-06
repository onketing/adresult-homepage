#!/usr/bin/env python3
"""
adresult.kr 공지 게시판 3종(진심이 story /108 · 마케팅칼럼 /93 · 미디어·언론 /94)
→ src/data/board-posts.ts 원문 이식 스크립트.

port-cases.py 의 파싱 유틸(runs/블록/이미지 규칙)을 그대로 재사용한다.
이미지: public/images/boards/{board}/{idx}/ 저장. 실측 크기는 PIL 사용(Windows 대응).
제외: og:title 에 "삼육고" 가 들어간 글.

실행: python scripts/port-boards.py
글 목록(idx)은 scratchpad 크롤 결과가 아니라 아래 BOARD_IDXS 에 고정(재현성).
"""
import importlib.util
import json
import os
import re
import subprocess
import sys

from bs4 import BeautifulSoup
from PIL import Image

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# port-cases.py 를 모듈로 로드 (파일명 하이픈 → importlib)
spec = importlib.util.spec_from_file_location("port_cases", os.path.join(REPO, "scripts", "port-cases.py"))
pc = importlib.util.module_from_spec(spec)
sys.modules["port_cases"] = pc
spec.loader.exec_module(pc)


def dims(p):  # sips(macOS) 대신 PIL
    try:
        with Image.open(p) as im:
            return im.size
    except Exception:
        return (1000, 1000)


pc.dims = dims

# 게시판별 노출 순서(최신 → 오래된, 목록 크롤 순서 그대로)
BOARD_IDXS = {
    "story": ("108", ["167659870", "168469554", "168469529", "167893401", "167893313", "167893269", "167893125", "167659604"]),
    "column": ("93", ["171084411", "171045644", "170936721", "170771161", "170706625", "170646791", "170641543", "170537457", "170523558", "169944848", "169939730", "169925170", "169923223", "169899556", "169886430", "169871267", "169840917", "169750627", "169750503", "169649905", "169640425", "169628194", "169590967", "169586411", "169557684", "169505149", "168600485", "167694049", "167573019", "167488478", "167382196", "167367530", "167323643", "167114689", "167005067", "166842790", "166635717", "166422838"]),
    "press": ("94", ["172039101", "170968387", "170968341", "170968273", "170968198", "170968141", "170968070", "170967947", "167764393", "167764301", "167764219", "167764101", "167763982", "167763923", "167763731", "167763625", "167759945", "167757745", "167757713", "167757555", "167757469", "167757280", "167757136", "167757001", "167756892", "167706408", "167706106", "167705976", "167705937", "167705198", "167704971", "167676547", "167676267", "167675874", "167570237", "167570093", "167569935"]),
}

EXCLUDE_TITLE = ["삼육고"]


def fetch_board_html(board_no, idx):
    cache = os.path.join(REPO, "scripts", ".cache")
    os.makedirs(cache, exist_ok=True)
    p = os.path.join(cache, f"board{board_no}-{idx}.html")
    if not os.path.exists(p):
        open(p, "wb").write(pc._get(f"https://adresult.kr/{board_no}/?bmode=view&t=board&idx={idx}"))
    return p


def build(board_key, board_no, idx):
    soup = BeautifulSoup(open(fetch_board_html(board_no, idx), encoding="utf-8").read(), "html.parser")
    ogt = soup.find("meta", property="og:title")
    title = ogt["content"].split(" : ")[0].strip() if ogt else ""
    if any(x in title for x in EXCLUDE_TITLE):
        print(f"SKIP({idx}): {title[:40]}")
        return None
    views = soup.select(".fr-view")
    best = (
        max(views, key=lambda e: len(e.get_text(strip=True)) + len(e.select('img[src*="/upload/"]')) * 50)
        if views
        else None
    )
    folder = f"{REPO}/public/images/boards/{board_key}/{idx}"
    os.makedirs(folder, exist_ok=True)
    blocks = []
    counter = {"n": 0}
    seen_hashes = []

    def emit_image(node):
        src = pc.norm_src(node)
        if not pc.img_host(src):
            return None
        a = node.find_parent("a")
        href = a.get("href", "") if a else ""
        vid = pc.watch_video_id(href)
        if vid:
            return {"type": "video", "videoId": vid}
        if pc.is_cta_banner(href):
            return None
        counter["n"] += 1
        n = counter["n"]
        ext = (src.split("?")[0].rsplit(".", 1)[-1] or "png").lower()
        if ext not in ("png", "jpg", "jpeg", "gif", "webp"):
            ext = "png"
        dest = f"{folder}/{n}.{ext}"
        referer = "https://blog.naver.com/" if pc.img_host(src) == "pstatic" else "https://adresult.kr/"
        try:
            open(dest, "wb").write(pc._get(src, referer=referer))
            w, h = dims(dest)
        except Exception as e:
            print("IMGFAIL", src, e)
            counter["n"] -= 1
            return None
        ih = pc.img_dhash(dest)
        if ih is not None and any((ih - s) <= 6 for s in seen_hashes):
            try:
                os.remove(dest)
            except OSError:
                pass
            counter["n"] -= 1
            return None
        if ih is not None:
            seen_hashes.append(ih)
        block = {
            "type": "img",
            "src": f"/images/boards/{board_key}/{idx}/{n}.{ext}",
            "w": w,
            "h": h,
            "alt": node.get("alt", "") or title,
        }
        if href and not href.startswith("#"):
            block["href"] = href
        return block

    def emit_text(node, kind=None):
        runs, sizes = [], []
        pc.walk(node, {}, runs, sizes)
        runs = pc.clean_runs(runs)
        if not pc.runs_text(runs):
            return None
        b = {"type": kind or ("h" if (max(sizes) if sizes else 0) >= 19 else "p"), "runs": runs}
        al = pc.node_align(node) or ("center" if kind == "callout" else None)
        if al:
            b["align"] = al
        if kind == "callout":
            td = node.find("td")
            cbg = pc.bg_color(td.get("style", "")) if td else None
            if cbg:
                b["boxBg"] = cbg
        return b

    if best:
        cbs = best.select('div[class*="_comment_body"]')
        body = cbs[0] if cbs else best
        gap = {"v": False}

        def take_gap(b):
            if gap["v"]:
                b["gap"] = True
                gap["v"] = False
            return b

        from bs4 import Tag

        for node in body.children:
            if not isinstance(node, Tag):
                continue
            if node.name in ("script", "style"):
                continue
            if node.name == "hr":
                gap["v"] = False
                blocks.append({"type": "hr"})
                continue
            iframes = node.select('iframe[src*="/embed/"]')
            imgs = node.select("img")
            if iframes:
                gap["v"] = False
                for ifr in iframes:
                    vid = pc.embed_video_id(ifr.get("src", ""))
                    if vid:
                        blocks.append({"type": "video", "videoId": vid})
                for im in imgs:
                    ib = emit_image(im)
                    if ib:
                        blocks.append(ib)
                continue
            if imgs:
                gap["v"] = False
                tb = emit_text(node)
                if tb:
                    blocks.append(tb)
                for im in imgs:
                    ib = emit_image(im)
                    if ib:
                        blocks.append(ib)
                continue
            if node.name == "table":
                tb = emit_text(node, kind="callout")
                if tb:
                    blocks.append(take_gap(tb))
                continue
            tb = emit_text(node)
            if tb is None:
                gap["v"] = True
                continue
            blocks.append(take_gap(tb))

    def _n(x):
        return re.sub(r"\s+", "", x or "")

    while blocks:
        b0 = blocks[0]
        if not b0.get("runs"):
            break
        t0, tt = _n(pc.runs_text(b0["runs"])), _n(title)
        if t0 and (t0 == tt or (len(t0) > 15 and (t0 in tt or tt in t0))):
            blocks.pop(0)
        else:
            break
    while blocks and blocks[-1]["type"] == "img" and blocks[-1].get("h") and blocks[-1]["w"] / blocks[-1]["h"] >= 2.0:
        blocks.pop()
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
    cover_block = img_blocks[0] if img_blocks else None
    cover = cover_block["src"] if cover_block else ""
    cwh = (cover_block["w"], cover_block["h"]) if cover_block else (1000, 1000)
    body_text = " ".join(
        pc.runs_text(b["runs"]) for b in blocks if b["type"] == "p" and len(pc.runs_text(b["runs"])) > 4
    )
    excerpt = body_text[:160].rstrip()
    return {
        "slug": idx,
        "title": title,
        "excerpt": excerpt,
        "cover": cover,
        "coverW": cwh[0],
        "coverH": cwh[1],
        "blocks": blocks,
    }


def main():
    out = {}
    for key, (board_no, idxs) in BOARD_IDXS.items():
        arts = []
        for idx in idxs:
            a = build(key, board_no, idx)
            if a:
                imgs = len([b for b in a["blocks"] if b["type"] == "img"])
                txt = len([b for b in a["blocks"] if b["type"] != "img"])
                print(f'{key}/{idx}: {txt} text, {imgs} img | {a["title"][:40]}')
                arts.append(a)
        out[key] = arts
    ts = (
        '''// 애드리절트 공지 게시판 원문 이식 — scripts/port-boards.py 자동 생성 (직접 편집 금지)
// story: 진심이 story(/108) · column: 마케팅칼럼(/93) · press: 미디어·언론(/94, 삼육고 글 제외)
import type { CaseBlock } from "@/data/success-cases";

export type BoardArticle = {
	slug: string;
	title: string;
	excerpt: string;
	cover: string;
	coverW: number;
	coverH: number;
	blocks: CaseBlock[];
};

export const STORY_ARTICLES: BoardArticle[] = %s as BoardArticle[];

export const COLUMN_ARTICLES: BoardArticle[] = %s as BoardArticle[];

export const PRESS_ARTICLES: BoardArticle[] = %s as BoardArticle[];

export const getStory = (slug: string) => STORY_ARTICLES.find((a) => a.slug === slug);
export const getBoardColumn = (slug: string) => COLUMN_ARTICLES.find((a) => a.slug === slug);
export const getPress = (slug: string) => PRESS_ARTICLES.find((a) => a.slug === slug);
'''
        % (
            json.dumps(out["story"], ensure_ascii=False, indent="\t"),
            json.dumps(out["column"], ensure_ascii=False, indent="\t"),
            json.dumps(out["press"], ensure_ascii=False, indent="\t"),
        )
    )
    open(f"{REPO}/src/data/board-posts.ts", "w", encoding="utf-8").write(ts)
    print("WROTE src/data/board-posts.ts")
    try:
        subprocess.run(
            ["pnpm", "exec", "biome", "format", "--write", "src/data/board-posts.ts"],
            cwd=REPO,
            check=False,
            shell=(os.name == "nt"),
        )
    except Exception:
        pass


if __name__ == "__main__":
    main()
