# 08 — adresult.kr 성공사례 → `/cases` 이식 플레이북

adresult.kr 성공사례 게시판 글을 **원문 그대로**(텍스트·색상·글자크기·형광펜·정렬·이미지·영상) `/cases/{idx}` 상세 페이지로 옮기는 절차. **다른 개발자도 이 문서만 보고 동일하게** 글을 추가할 수 있도록 정의한다.

- 자동화 스크립트: **`scripts/port-cases.py`**
- 생성물(자동, **손으로 편집 금지**): **`src/data/success-cases.ts`**
- 상세/목록 렌더러(수정 불필요): `src/app/cases/[slug]/page.tsx`, `src/components/shared/PaginatedCards.tsx`

핵심 원리: 원문을 파싱해 `blocks`/`runs` JSON으로 만들고, 빌드 시 정적 생성(SSG)한다. **개발자가 손으로 넣는 건 `port-cases.py`의 몇 개 dict 뿐**이고 나머지는 스크립트가 자동 처리한다.

---

## 0. 사용자가 주는 입력

보통 아래 3가지를 준다:

1. **게시판 view URL** — `https://adresult.kr/549265113/?...&bmode=view&idx={IDX}&t=board` → 여기서 `idx` 값만 쓴다.
2. **본문 HTML** (선택) — 검증용. 스크립트는 URL의 idx로 직접 다시 fetch 하므로 HTML이 없어도 된다.
3. **유튜브 임베드의 watch URL** (선택) — `<iframe embed>`는 스크립트가 자동 처리하므로 참고용.

> URL이 없고 HTML만 있으면: 게시판 목록에서 제목으로 idx를 찾는다(§6 참고).

---

## 1. 최초 1회 환경 설정

```sh
python3 -m venv .venv && . .venv/bin/activate
pip install beautifulsoup4 Pillow imagehash
```

- `beautifulsoup4` = 파싱, `Pillow`+`imagehash` = **중복 이미지 제거**용. 없으면 중복 제거만 생략된다.
- 이미지 실측 크기는 macOS `sips`를 쓴다(로컬 실행 전제).
- 이후 실행은 `.venv/bin/python3 scripts/port-cases.py`.

---

## 2. 글 하나 추가 — 체크리스트

`scripts/port-cases.py` 상단의 dict만 수정한다. **한 글 = 아래 순서**.

### ① `IDXS` 에 idx 추가 — **맨 끝에**
```python
IDXS = [ ..., "167542522", "167545669" ]   # ← 새 idx 를 배열 끝에 붙인다
```
- **정책**: `IDXS`는 오래된→최신 순(추가 순서). 사이트는 **최신이 맨 앞**에 오도록 출력을 역순으로 뒤집는다. → **끝에 붙이면 목록 맨 앞에 노출**된다.

### ② `LEADS[idx]` 채우기 — **필수**
```python
LEADS = { ..., "167545669": "네트워크를 탈퇴하고 독립 개원한 … 개원 3개월 만에 예약이 꽉 찼습니다." }
```
- **수치를 포함한 1~2문장 요약**. 상세 상단 **리드 콜아웃**(빨간 좌측 보더 박스) + 메타 `description`에 쓰인다.
- **이미지 속 핵심 수치**(신환 수·광고비·증가율 등)를 반드시 텍스트로 옮긴다 — 이미지 픽셀은 크롤러·답변엔진이 못 읽는다(AEO).

### ③ `FAQS[idx]` 채우기 — **필수**
```python
FAQS = { ..., "167545669": [
    {"q": "개원 3개월 만에 예약 마감이 어떻게 가능했나요?", "a": "개원 전부터 …"},
    {"q": "개원 병원은 언제부터 준비해야 하나요?", "a": "개원 초가 …"},
]}
```
- **2~3개 Q&A**. **각 답변은 독립적으로 완결**되게 쓴다(답변엔진이 그대로 인용). → 상세 하단 FAQ 섹션 + **FAQPage JSON-LD** 자동 생성.

### ④ (선택) `COVERS[idx]` — 카드 썸네일 지정
기본 썸네일은 **본문 첫 이미지**. 첫 이미지가 표지·배너·장식이라 부적절하면 지정한다.
```python
COVERS = {
    "164427329": "last",   # 본문 마지막 이미지
    "167232106": 3,         # 본문 n번째 이미지(1-based)
    "167246533": 2,
}
```
- 값: `"last"` 또는 **1-based 정수 n**.

### ⑤ (선택) `DROP_IMAGES[idx]` — 특정 이미지 제외
제목이 박힌 표지형 디자인 배너처럼 사이트 레이아웃(h1·리드)과 **중복되는 이미지**를 뺀다.
```python
DROP_IMAGES = { "167212324": {1, 2} }   # 본문 이미지 1·2번(문서 순서, 1-based) 제외
```

### ⑥ 스크립트 실행
```sh
.venv/bin/python3 scripts/port-cases.py
```
- 출력의 `{idx}: N text, M img | 제목` 과 `노출 순서:` 로 결과를 확인한다.
- 원문은 `scripts/.cache/case-{idx}.html`에 캐시된다(재실행 시 재사용). **원문이 실제로 바뀌었다면 해당 캐시 파일을 지우고** 다시 실행한다.

### ⑦ 썸네일 육안 확인
```sh
# cover 가 무엇인지 확인 후, 실제 이미지를 열어본다
# (첫 이미지가 장식/배너면 ④ COVERS 로 좋은 이미지 번호를 지정하고 다시 실행)
```
- 원문 목록 카드에서 보이는 대표 이미지와 맞추는 걸 권장(보통 결과 차트·후기 카톡).

### ⑧ 검증 → 커밋 → 배포 (§4, §5)

---

## 3. 스크립트가 자동 처리하는 것 (개발자가 신경 안 써도 됨)

- **본문 컨테이너**: `.fr-view` 중 텍스트·이미지가 가장 많은 것 → 그 안 `div[class*=_comment_body]`의 블록을 **문서 순서대로** 순회.
- **텍스트 → run**: 색상(어두운색 제외·rgb→hex)·굵기·기울임·밑줄·**글자크기(`fs`, 17px+)·형광펜 배경(`bg`, 흰색/투명 제외)**·`<br>` 보존.
- **`<table>` 콜아웃**: 표 텍스트를 박스(`callout` 블록)로 수집. **여러 행(`<tr>`)은 줄바꿈으로 각각 한 줄**이 되고, **셀 배경색은 박스 배경(`boxBg`)** 으로 반영(진회색·분홍 등 원문 띠 재현). 형광펜(`bg`)은 인라인 `<span>`에서만 잡아 셀 배경과 섞이지 않는다.
- **`<hr>`**: 구분선(`hr` 블록).
- **가운데/오른쪽 정렬**(`align`): `text-align` 보존.
- **문단 간격(gap)**: 각 `<p>`는 자기 블록. **빈 `<p><br></p>`는 다음 블록에 `gap`을 줘서 큰 간격**(mt-7), 연속 `<p>`는 작은 간격(mt-2). → 원문의 줄/문단 그룹 구조 재현. (20px+ 강조 줄은 `h`로 분류되며, 헤딩도 gap을 따른다: 연속이면 mt-3, 빈 줄 뒤 mt-10.)
- **이미지**: `cdn.imweb.me/upload/`(imweb) + `postfiles.pstatic.net`(네이버)만 다운로드 → `public/images/cases/{idx}/{n}.{ext}`(+실측 w/h). Referer: upload→adresult.kr, pstatic→blog.naver.com. 실패 시 `IMGFAIL` 로그 후 건너뜀.
- **중복 이미지 제거**: 같은 이미지를 imweb·naver 양쪽에 올린 경우, 지각 해시로 **글 내부** 중복(거리≤6)을 지운다.
- **영상**: `<iframe .../embed/{id}>`(fr-video) + 유튜브 watch/단축 링크 썸네일 → `video` 블록.
- **블로그/칼럼 링크 이미지**: `<a href>`로 감싼 이미지 중 blog.naver·adresult.kr 등은 **클릭 가능한 이미지로 유지**(제자리 복원).
- **제외되는 것**(상세 공통 하단이 대체):
  - `<a href>`가 **`pf.kakao.com`(카톡) / `map.naver.com`(지도) / `tel:`(전화) / 유튜브 채널(@,channel,c)** 로 향하는 배너
  - **가로세로비 ≥ 2.0** 꼬리 프로모 배너
  - **카카오/OGQ 이모티콘 스티커**(`storep-phinf`, `/ogq_`) 등 콘텐츠 아닌 이미지
  - `/upload/`·`pstatic` 이 아닌 이미지
  - **`og:title`과 동일한 첫 블록**(제목 중복)

---

## 4. 검증 (커밋 전 필수)

```sh
# 1) 타입·빌드·린트 (린트는 CostBreakdown 경고 1개만 허용)
pnpm check-types && pnpm build && pnpm lint

# 2) 새 글이 잘 들어갔는지 (영상 id·핵심 문구)
grep -o "embed/{VIDEO_ID}\|자주 묻는 질문\|{핵심문구}" .next/server/app/cases/{idx}.html

# 3) 중복 이미지 0 확인 (지각 해시 전수 스캔)
.venv/bin/python3 - <<'PY'
from PIL import Image; import imagehash, os
base="public/images/cases"; t=0
for idx in sorted(os.listdir(base)):
    d=os.path.join(base,idx)
    if not os.path.isdir(d) or idx=="_footer": continue
    seen=[]
    for f in sorted(os.listdir(d), key=lambda x:(len(x),x)):
        try: h=imagehash.dhash(Image.open(os.path.join(d,f)), hash_size=12)
        except Exception: continue
        if any((h-s)<=6 for s in seen): t+=1
        else: seen.append(h)
print("잔여 중복:", t)  # 0 이어야 함
PY
```

- **기존 글 회귀 확인**: 스크립트는 매 실행 시 IDXS 전체를 재생성한다. 기존 글의 핵심 문구가 그대로 있는지(예: `grep -c "0명 → 80명" src/data/success-cases.ts`) 스팟 체크.
- Vercel **프리뷰 URL은 접근보호(302)**라 curl로 본문 확인 불가 → 위처럼 로컬 `.next` prerender HTML로 검증한다.

---

## 5. 커밋 & 배포

```sh
git add scripts/port-cases.py src/data/success-cases.ts public/images/cases scripts/.cache
git commit -m "feat(cases): 성공사례 추가 — {주제}({idx})"
git push origin main   # Vercel 이 자동 빌드
```
- 커밋 subject는 **한글로 시작**(commitlint가 대문자 시작 거부).
- pre-commit(biome)·commit-msg(commitlint)·pre-push(knip) 훅이 자동 검사.

---

## 6. 부록

### idx를 모를 때 (목록에서 제목으로 찾기)
게시판 목록(`?page=N`)은 서버렌더라 curl 가능. `bmode=view` 앵커의 idx와 텍스트를 매칭해 제목으로 찾는다. (스크립트 예: 페이지 1~5 순회하며 제목 substring 매칭.)

### 데이터 구조 (`src/data/success-cases.ts` — 자동 생성)
```ts
CaseRun   = { t?, b?, i?, u?, c?(색상), fs?(px), bg?(형광펜 hex), br?, k? }
CaseBlock = { id?, type: "h"|"p"|"img"|"video"|"hr"|"callout", runs?, align?("center"|"right"), gap?, src?, href?, alt?, w?, h?, videoId? }
CaseArticle = { slug(=idx), title, excerpt, summary?, faq?: {q,a}[], cover, coverW, coverH, blocks[] }
CASE_ARTICLES / SUCCESS_CASES(카드) / getCase(slug)
```

### 렌더링 (자동, 수정 불필요)
- **`/cases`**: 카드 9개씩 + 페이지네이션. 페이지 번호는 **URL `?page=N`** 으로 관리(`PaginatedCards`).
- **`/cases/[slug]`**: 브랜드 헤더 → 제목 → **리드 콜아웃**(summary) → 본문(색상·글자크기·형광펜·정렬·구분선·콜아웃·이미지·영상) → **FAQ 섹션**(faq) → 이전/다음 글 네비 → 공통 CTA 배너. 컨테이너 `max-w-5xl`, 영상은 `max-w-2xl` 중앙.
- 이미지 `quality={90}`, 본문 이미지 `sizes` ~960px(업스케일 방지).

### 자동 SEO/AEO
- 전 글 **SSG**. 글별 `title`·`description`(summary 우선)·`canonical`.
- **Article + BreadcrumbList JSON-LD**, `faq` 있으면 **FAQPage JSON-LD** 자동.
- `sitemap.ts`가 개별 `/cases/{idx}` 자동 포함.
- 임웹 원문 view URL(`/549265113?idx=…`) → `/cases/{idx}` **301 리다이렉트**(`next.config.ts`).

### 자주 겪는 문제
- **중복 이미지가 남음** → venv에 `Pillow imagehash` 설치됐는지 확인(없으면 dedup 생략됨).
- **원문이 바뀌었는데 반영 안 됨** → `scripts/.cache/case-{idx}.html` 삭제 후 재실행(캐시 우선).
- **썸네일이 장식 이미지** → `COVERS[idx]`로 좋은 이미지 번호 지정.
- **표지/제목 배너가 본문에 중복** → `DROP_IMAGES[idx]`로 순번 제외.
- **naver 이미지 403** → Referer가 blog.naver.com인지 확인(스크립트 기본 처리).
