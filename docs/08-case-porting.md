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

- **본문 컨테이너**: `.fr-view` 중 텍스트·이미지가 가장 많은 것. 그 안의 `div[class*=_comment_body]` 블록을 **문서 순서대로** 순회한다(없으면 `.fr-view` 자체).
- **텍스트 → run 단위**: 블록을 순회하며 **색상(어두운색 제외)·굵기(`strong`/`font-weight`)·기울임(`em`/`font-style`)·밑줄·`<br>`**를 보존. `rgb(...)`는 hex로 변환. **`<table>` 콜아웃 박스 텍스트도 동일 규칙으로 수집**(font-size로 h/p 판별).
- **헤딩**: span `font-size ≥ 19px` → `h`(제목), 그 외 `p`.
- **이미지**: 컨텐츠 이미지(`cdn.imweb.me/upload/` **또는** 네이버 `postfiles.pstatic.net`)만 채택 → `public/images/cases/{idx}/{n}.{ext}` 다운로드 + `sips`로 실측 `w/h`.
  - **Referer**: `/upload/` → `adresult.kr`, `pstatic` → `blog.naver.com`(네이버는 adresult referer 로 403).
  - 네이버 URL의 `?type=w966` 쿼리는 받을 때는 유지, 확장자 판별 때만 제거(`src.split("?")[0]`).
  - **다운로드 실패 시**: `IMGFAIL` 로그를 남기고 해당 이미지만 건너뛴다(실행은 중단하지 않음).
  - 한 `<p>`에 이미지·텍스트가 함께 있으면 **텍스트 먼저, 이미지 다음** 순으로 방출(기존 순서 유지).
- **영상**: `<iframe src=.../embed/{id}>`(보통 `<span class=fr-video>` 래핑) → `video` 블록. 기존 **유튜브 watch/단축 링크 썸네일**(`<a href=…watch><img>`)도 `video` 블록으로 계속 처리. id 는 11자.
- **제외되는 것**(상세 페이지 공통 요소가 대체):
  - 유튜브 **채널(@/channel/c) 링크 배너**(애드리절트 TV 등)
  - `<img>` 를 감싼 `<a href>` 가 **`pf.kakao.com` / `map.naver.com` / 유튜브 채널**로 향하는 꼬리 배너
  - **가로세로비 ≥ 2.0 인 꼬리 프로모 배너**(하단 CTA/광고 이미지)
  - **추적/프로필/1x1 등 `/upload/`·`pstatic` 이 아닌 이미지**
  - **`og:title`과 동일한 첫 블록**(제목 중복)

## 3. 데이터 구조 (`src/data/success-cases.ts`)

- `CASE_ARTICLES: CaseArticle[]` — `{ slug(=idx), title, excerpt, summary?, faq?, cover, coverW/H, blocks[] }`
  - `blocks`: `{ type: "h"|"p"|"img"|"video", runs?, src?, w?, h?, alt?, videoId?, id }`
  - `runs`: `{ t, b(굵게), i(기울임), u(밑줄), c(색상), br, k }`
  - `summary`: 리드 콜아웃(핵심 요약, 수치 포함). `LEADS[idx]`에서 주입 → 상세 상단·`description`에 사용.
  - `faq`: `CaseFaq[]`(`{ q, a }`). `FAQS[idx]`에서 주입 → 상세 하단 FAQ + FAQPage JSON-LD에 사용.
- `SUCCESS_CASES: CardItem[]` — 목록 카드(제목·발췌·cover 썸네일·`/cases/{slug}` 링크)
- `getCase(slug)`
- **순서** = `IDXS` 배열 순서 = 목록 노출 순서.

## 4. 렌더링 (수정 불필요, 자동)

- **`/cases`**: 카드 9개씩 + 페이지네이션(`PaginatedCards`).
- **`/cases/[slug]`**: 상단 **브랜드 헤더**(PORTFOLIO / 애드리절트 병원마케팅 성공사례입니다. / 결과로 말하는 애드리절트) → 글 제목(h1) + "성공사례" → **리드 콜아웃**(`summary` 있을 때, 빨간 좌측 보더 박스) → 본문(runs 색상·강조 그대로, 이미지, 영상) → **FAQ 섹션**(`faq` 있을 때, 아코디언 없는 상시 노출 텍스트 — 크롤러 친화) → 하단 **공통 CTA**.
- 컨테이너 `max-w-5xl`. `runs`의 색상은 인라인 `style`, 굵기/기울임/밑줄은 클래스.

## 5. 자동 SEO/AEO

- `generateStaticParams`로 전 글 **정적 생성(SSG)**.
- 글별 `title`·`description(summary 있으면 summary, 없으면 발췌)`·`canonical`, **Article + BreadcrumbList JSON-LD**.
- `faq`가 있으면 **FAQPage JSON-LD**를 Article·Breadcrumb와 함께 자동 출력.
- `sitemap.ts`는 `/cases`(목록)와 **개별 `/cases/{idx}`를 모두 자동 포함**(`CASE_ARTICLES` 매핑).
- 임웹 원문 view URL(`/549265113?idx=…`)은 `next.config.ts`가 **301로 `/cases/{idx}`에 자동 리다이렉트**.

---

## SEO/AEO 강화 (글 추가 시 필수)

새 글을 이식할 때 `IDXS` 끝에 idx를 넣는 것 외에, **아래 두 dict도 함께 채운다**. 안 채우면 리드 콜아웃·FAQ·FAQPage가 비어 나온다.

- `LEADS[idx]` — **수치를 포함한 1~2문장 요약**. 상세 상단 리드 콜아웃과 메타 `description`에 쓰인다.
- `FAQS[idx]` — **2~3개 Q&A**. **각 답변은 독립적으로 완결**되게 쓴다(답변엔진이 그대로 인용).
- **이미지 속 핵심 수치(신환 수·광고비·증가율 등)는 반드시 `LEADS`/`FAQS` 또는 본문 텍스트로도 적는다.** 이미지 픽셀은 크롤러·답변엔진이 못 읽는다.
- `alt`는 가능하면 **서술형**으로 채운다(현재는 원문 alt 또는 제목 fallback).
- 개별 `/cases/{idx}`는 sitemap이 자동 포함하고, 임웹 원문 URL은 `next.config`가 301로 자동 리다이렉트한다(별도 작업 불필요).

## 6. 검증

```sh
# prerender HTML에서 본문·색상·이미지·영상 확인
grep -oE "youtube.com/embed/|color:#|/images/cases/{idx}/" .next/server/app/cases/{idx}.html
```

> 참고: Vercel **프리뷰 URL은 접근보호(302)**라 `curl`로 본문 확인이 안 됨 → 위처럼 로컬 prerender HTML로 검증한다.
