# 08 — adresult.kr 성공사례 → `/cases` 이식 워크플로우

사용자가 **adresult.kr 성공사례 게시판 글 링크**(`bmode=view&idx=...`)를 주며 "이식/가져와" 요청하면, 원문을 그대로(텍스트·색상·굵기·기울임·이미지·영상) `/cases`에 옮긴다. 매번 다시 설명받지 않고 아래 절차를 따른다.

> 자동화 스크립트: **`scripts/port-cases.py`**. 결과물: **`src/data/success-cases.ts`** (자동 생성 — 손으로 blocks 편집 금지).

---

## 1. 이식 실행

```sh
python3 -m venv .venv && . .venv/bin/activate && pip install beautifulsoup4
# scripts/port-cases.py 의 IDXS 배열에 idx를 "노출 순서대로" 추가 (맨 앞 = 목록 첫 글)
python3 scripts/port-cases.py
pnpm build   # /cases, /cases/[slug] 생성 확인
```

- 게시판 view는 **서버렌더**라 `urllib`(curl)로 HTML을 받는다. (홈은 SPA라 안 됨 — view URL만 됨)
- HTML은 `scripts/.cache/case-{idx}.html`에 캐시된다(재실행 시 재사용).

## 2. 파싱 규칙 (스크립트가 자동 처리)

- **본문 컨테이너**: `.fr-view` 중 텍스트·이미지가 가장 많은 것.
- **텍스트 → run 단위**: `<p>`를 순회하며 **색상(어두운색 제외)·굵기(`strong`/`font-weight`)·기울임(`em`/`font-style`)·밑줄·`<br>`**를 보존. `rgb(...)`는 hex로 변환.
- **헤딩**: span `font-size ≥ 19px` → `h`(제목), 그 외 `p`.
- **이미지**: `/upload/` 이미지 → `public/images/cases/{idx}/{n}.{ext}` 다운로드 + `sips`로 실측 `w/h`.
- **유튜브 watch 링크 썸네일** → `video` 블록(iframe 임베딩).
- **제외되는 것**(상세 페이지 공통 요소가 대체):
  - 유튜브 **채널(@/channel/c) 링크 배너**(애드리절트 TV 등)
  - **가로세로비 ≥ 2.0 인 꼬리 프로모 배너**(하단 CTA/광고 이미지)
  - **`og:title`과 동일한 첫 블록**(제목 중복)

## 3. 데이터 구조 (`src/data/success-cases.ts`)

- `CASE_ARTICLES: CaseArticle[]` — `{ slug(=idx), title, excerpt, cover, coverW/H, blocks[] }`
  - `blocks`: `{ type: "h"|"p"|"img"|"video", runs?, src?, w?, h?, alt?, videoId?, id }`
  - `runs`: `{ t, b(굵게), i(기울임), u(밑줄), c(색상), br, k }`
- `SUCCESS_CASES: CardItem[]` — 목록 카드(제목·발췌·cover 썸네일·`/cases/{slug}` 링크)
- `getCase(slug)`
- **순서** = `IDXS` 배열 순서 = 목록 노출 순서.

## 4. 렌더링 (수정 불필요, 자동)

- **`/cases`**: 카드 9개씩 + 페이지네이션(`PaginatedCards`).
- **`/cases/[slug]`**: 상단 **브랜드 헤더**(PORTFOLIO / 애드리절트 병원마케팅 성공사례입니다. / 결과로 말하는 애드리절트) → 글 제목(h1) + "성공사례" → 본문(runs 색상·강조 그대로, 이미지, 영상) → 하단 **공통 CTA**.
- 컨테이너 `max-w-5xl`. `runs`의 색상은 인라인 `style`, 굵기/기울임/밑줄은 클래스.

## 5. 자동 SEO/AEO

- `generateStaticParams`로 전 글 **정적 생성(SSG)**.
- 글별 `title`·`description(발췌)`·`canonical`, **Article + BreadcrumbList JSON-LD**.
- `sitemap.ts`는 `/cases`를 정적 라우트로 포함(개별 글은 필요 시 추가).

## 6. 검증

```sh
# prerender HTML에서 본문·색상·이미지·영상 확인
grep -oE "youtube.com/embed/|color:#|/images/cases/{idx}/" .next/server/app/cases/{idx}.html
```

> 참고: Vercel **프리뷰 URL은 접근보호(302)**라 `curl`로 본문 확인이 안 됨 → 위처럼 로컬 prerender HTML로 검증한다.
