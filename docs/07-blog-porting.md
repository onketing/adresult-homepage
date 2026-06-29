# 07 — 네이버 블로그 → 사이트 블로그 이식 워크플로우

사용자가 **네이버 블로그 글 링크만** 주면, 그 내용을 읽고 사이트 블로그(`/blog/{slug}`)에 SEO/AEO 최적화된 MDX로 이식한다.
**매번 설명을 다시 받지 않는다.** 아래 절차를 그대로 따른다.

> 트리거: 사용자가 `https://blog.naver.com/onketing-/...` 또는 `PostView.naver?...logNo=...` 링크를 주며 "추가해줘 / 이식해줘 / 블로그에 올려줘" 류로 요청할 때.

---

## 1. 원문 가져오기 (WebFetch는 네이버 차단 → curl 모바일)

```sh
curl -sL -A "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1" \
  "https://m.blog.naver.com/onketing-/{logNo}" -o /tmp/post.html
```

- `{logNo}` = URL의 `logNo=` 값 (또는 `/onketing-/{logNo}` 경로).
- 제목: `og:title` 메타. 본문: `div.se-main-container` 텍스트.
- 본문 이미지(있으면): `mblogthumb-phinf.pstatic.net`의 `.png/.jpg`를 **문서 순서대로** 추출 (프로필 썸네일 `blogpfthumb`·placeholder 제외).

## 2. 중복·카니발라이제이션 체크

- `grep -rn "{logNo}" src/content/blog/` 로 이미 이식했는지 확인 (`naverUrl`).
- 기존 글과 **같은 1차 키워드로 경쟁하지 않게** 한다. 같은 직군 글이 이미 있으면 각도/키워드를 다르게 잡는다.
  (예: 기존 `labor-attorney-marketing`(노무사 일반) ↔ 신규 `labor-attorney-reels`(노무사 릴스)처럼 키워드 분리)

## 3. MDX 작성 — `src/content/blog/{slug}.mdx`

- `slug`: 영문 kebab-case (주제 기반). `date`: 기존 최신 글 이후 ~ 오늘 이내, logNo 순서와 일치.
- 맨 위 `export const frontmatter = { ... }` (타입: `src/content/blog/posts.ts`의 `Frontmatter`):
  - `title` (SEO: 1차 키워드 선두 + 자연 가치문구), `description`(키워드 포함 ~155자),
    `date`, `cover: "/images/blog/{slug}/1.png"`, `tags[]`, `category`, `naverUrl`, `faq` (질문 3개 — AEO 핵심).
- 본문 구조 (AEO 최적화):
  - 맨 위 **리드 콜아웃** = 1열 표 `| 한 문장 |` + `| --- |`
  - 인트로 1~2문단
  - `## 질문형/키워드형 H2` 여러 개, 각 섹션에 **표**(featured snippet·AEO에 강함)와 이미지
  - 마지막에 온케팅 CTA 문단
- FAQ 답변은 **각 답이 독립적으로 완결**되게 쓴다(답변엔진이 그대로 인용).

## 4. 등록 — `src/content/blog/posts.ts`

- 상단에 `import { frontmatter as xxxFm } from "./{slug}.mdx";` (import은 **알파벳 정렬** 유지 — biome).
- `REGISTRY` 배열 **맨 위(최신)**에 `{ slug, frontmatter: xxxFm, load: () => import("./{slug}.mdx") }` 추가.

## 5. 이미지

- `_imageMeta.ts`에 `"/images/blog/{slug}/{n}.png": { w, h }` 추가 (실측값. 최근 글은 보통 `966×966`).
- 원문 이미지 다운로드 (있을 때, 문서 순서대로 `1.png`부터, cover=`1.png`):

```sh
mkdir -p public/images/blog/{slug}
curl -sL -H "Referer: https://blog.naver.com/" \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36" \
  "{이미지URL}?type=w966" -o public/images/blog/{slug}/{n}.png
# sips -g pixelWidth -g pixelHeight 로 실측 → _imageMeta 반영
```

- 이미지가 없거나 못 받으면: 본문 `![]()` 없이 텍스트만으로 작성하고, 필요한 이미지 파일명을 사용자에게 알린다.

## 6. 톤 (SITE_GUIDE 준수)

- 금지어 피하기: `가장 / 최고의 / 완벽한 / 자연스럽게 / 압도적인 / 단 하나의 / 혁신적인` 등.
- 단정형 마침(`~합니다`), 한 문장 한 의미, 검증 가능한 숫자·고유명사 포함.

## 7. 검증 후 커밋

```sh
pnpm check-types && pnpm build   # 신규 라우트 /blog/{slug} 생성 확인
```

- 커밋: `feat(blog): 네이버 글 추가 — {주제}` (mdx + posts.ts + _imageMeta + 이미지).
- 자동 반영되는 것: BlogPosting·Breadcrumb·**FAQPage** JSON-LD, sitemap, "네이버 원문 보기" 링크(`naverUrl`).

---

## 자동 처리되는 SEO/AEO (작성자가 신경 안 써도 됨)

`src/app/blog/[slug]/page.tsx`가 frontmatter로부터 생성: `<title>`·OG·canonical·keywords, BlogPosting+Breadcrumb+FAQPage 구조화 데이터, 하단 네이버 원문 링크. `sitemap.ts`가 글을 자동 포함.
