# 05. 데이터·SEO

애드리절트(ADRESULT) 병원마케팅 사이트의 데이터 파일·siteConfig·SEO/AEO 구성.

## 콘텐츠 수정 원칙

> **홈·회사소개·FAQ·규정 등 정적 콘텐츠 = `src/data/*.ts` 수정.**
> `/services/aio`·`/services/shortform`·`/specialty/[slug]` 및 대부분의 회사소개 섹션은 데이터가 **페이지/컴포넌트 파일 안 인라인 상수**라 해당 `.tsx`를 직접 고친다.
> 연락처·nav·메타 기반값 = `src/config/site.ts`.

| 수정하고 싶은 것 | 위치 |
|----------------|------|
| 홈 Hero 카피 | `src/components/sections/Hero.tsx` (하드코딩) |
| 홈 KPI 수치 (132개월·1,272곳 등) | `src/data/kpi-showcase.ts` |
| 홈 리얼 후기 캐러셀 | `src/data/adresult-reviews.ts` |
| 홈 유튜브 영상 목록 | `src/data/adresult-youtube.ts` |
| 홈 사례 하이라이트 수치 | `src/data/case-highlight.ts` |
| 홈 진행 4단계 | `src/data/process-steps.ts` |
| 진료과 랜딩 데이터 (6종) | `src/data/specialties.ts` |
| 성공사례 (27편) | `src/data/success-cases.ts` (자동 생성 — 직접 편집 금지, 08-case-porting.md) |
| 고객후기 목록 | `src/data/customer-reviews.ts` |
| 의료광고 규정 (허용/금지) | `src/data/regulations.ts` |
| 규정 위반→수정 사례 | `src/data/regulation-cases.ts` |
| 규정 통계·트렌드 | `src/data/regulation-stats.ts` |
| FAQ 항목·카테고리 | `src/data/faq.ts` |
| AIO/숏폼 페이지 카피·이미지 | `src/app/services/aio/page.tsx`, `src/app/services/shortform/page.tsx` (인라인) |
| 회사소개 4개 페이지 카피 | `src/app/about|ceo|people|history/page.tsx` (인라인) + `PeopleExecs.tsx`(구성원)·`AboutReviewMarquee.tsx`(리뷰 이미지) |
| 전화·이메일·주소·SNS | `src/config/site.ts` → `siteConfig.contact` |
| 네비게이션 메뉴 | `src/config/site.ts` → `siteConfig.nav` |

---

## src/data/ 파일 카탈로그

| 파일 | Export | 비고 |
|------|--------|------|
| `kpi-showcase.ts` | `KPI_SHOWCASE` | 홈 스탯 4개 (index/value/suffix/label/description) |
| `adresult-reviews.ts` | `ADRESULT_REVIEWS` (`ReviewVideo[]`) | videoId + 인용 + 저자 + 썸네일 |
| `adresult-youtube.ts` | `ADRESULT_YOUTUBE_CHANNEL`, `ADRESULT_FEATURED_VIDEO`, `ADRESULT_VIDEOS` | 유튜브 영상 id 목록(썸네일은 i.ytimg.com) |
| `case-highlight.ts` | `CASE_HIGHLIGHTS`(2), `CASE_HIGHLIGHTS_SINGLE`(1) | 홈 병원마케팅 결과 카드 (before/after·광고비 절감) |
| `process-steps.ts` | `PROCESS_STEPS` (`ProcessStep[]`) | 상담→맞춤 전략→발행→성과 4단계 (icon·badge) |
| `specialties.ts` | `SPECIALTIES`(6), `SPECIALTY_SLUGS`, `getSpecialty` | 진료과 랜딩 (slug/name/psych/heroSub/pains/meta/keywords). 타입 `Specialty` 파일 내 정의 |
| `success-cases.ts` | `CASE_ARTICLES`(27), `SUCCESS_CASES`, `getCase` | 성공사례 원문 이식(blocks/runs). 타입 `CaseRun`·`CaseBlock`·`CaseFaq`·`CaseArticle` 파일 내 정의. **자동 생성** |
| `customer-reviews.ts` | `CUSTOMER_REVIEWS` (`CardItem[]`) | 고객후기 카드 (원장 영상 텍스트화) |
| `regulations.ts` | `REGULATIONS` (`Regulation[]`) | 진료과별 허용/금지 표현 (의료법 §56). 타입 파일 내 정의 |
| `regulation-cases.ts` | `REGULATION_CASES` (`RegulationCase[]`) | 위반→수정 카피 |
| `regulation-stats.ts` | `REGULATION_STATS`, `TREND_DATA` | 의료광고 통계 + 연도 트렌드 |
| `faq.ts` | `FAQ_ITEMS`(25), `FAQ_CATEGORIES`(6) | category + featured. 타입은 `src/types` |

> 홈 FAQPage 스키마는 `src/app/page.tsx` 안 `homeFaqSchema` 상수(faq.ts와 별개).

---

## 타입 정의 (src/types/index.ts)

공통 도메인 타입 중 **현재 사용되는 것**은 `NavItem`/`NavChild`, `ComparisonRow`, `FaqItem`/`FaqCategory` 등이다. (`PainPoint`·`WhyUsCard`·`ServiceStep`·`Service`·`Case`·`Testimonial`·`TeamMember`는 파일에 남아 있으나 현 페이지에서 미사용에 가깝다 — 신규 작업 시 파일 내 인라인 타입 정의를 우선한다.)

```ts
export type ComparisonRow = { general: string; adresult: string };

export type FaqCategory = "비용" | "진행 안내" | "광고규정" | "운영보고" | "성과" | "해지환불";
export type FaqItem = { question: string; answer: string; category: FaqCategory; featured?: boolean };

export type NavChild = { label: string; href: string; description?: string; icon: string; flagship?: boolean };
export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; matchPrefix?: string; children: NavChild[] };
```

페이지 전용 타입(`Specialty`, `CaseArticle`, `Regulation`, `ProcessStep`, `ReviewVideo`, `CardItem`)은 각 `src/data/*.ts` 또는 `PaginatedCards.tsx`에서 정의·export.

---

## siteConfig (src/config/site.ts)

```ts
export const siteConfig = {
  name: "애드리절트",
  nameKo: "애드리절트",
  nameEn: "ADRESULT",
  title: "병원마케팅 대행사 애드리절트(ADRESULT) | 결과로 말하는 광고회사",
  description: "병원마케팅 대행사 애드리절트 — 진료과별 1:1 맞춤 AIO·숏폼·바이럴 마케팅으로 신환을 늘립니다. 업력 11년·누적 1,272곳.",
  keywords: [ /* 병원마케팅·진료과·서비스 유형 등 다수 */ ],
  url,               // NEXT_PUBLIC_SITE_URL, 기본 "https://adresult.kr" (trailing slash 제거)
  ogImage: `${url}/og-image.png`,
  locale: "ko_KR",
  authors: [{ name: "애드리절트", url }],
  creator: "애드리절트",
  contact: {
    tel: "1661-4829",
    email: "mail@adresult.kr",
    address: "서울 강남구 헌릉로618길 9 (세곡동) 1층",
    owner: "이승민",
    businessName: "애드리절트",
    businessNumber: "889-88-00231",
    fax: "070-8622-5300",
    youtube: "https://www.youtube.com/channel/UCrmK0tiaWRuZYlrm5CabtBA",
    kakaoOpenChat: "https://pf.kakao.com/_nPghV/chat",
    naverBlog: "https://blog.naver.com/9fdc_8190",
    instagram: "https://www.instagram.com/jinsim_ii/",
    businessHours: "24시간 문의 접수 · 연중무휴",
  },
  nav: NavItem[],
};
```

> 라이브 도메인은 **피부과마케팅.com** (punycode `xn--vb0bs6vtzcc3x9secwd.com`). 메타·JSON-LD·sitemap의 기준 URL은 `siteConfig.url`.

### nav 구조 (실제)

| label | href | matchPrefix | children |
|-------|------|-------------|----------|
| 회사소개 | `/about` | `/about` | ABOUT(/about) · HISTORY(/history) · CEO(/ceo) · PEOPLE(/people) |
| 마케팅 | `/services/aio` | `/services` | AIO마케팅(/services/aio) · 끝장숏폼(/services/shortform) |
| 고객사례 | `/cases` | `/cases` | 성공사례(/cases) · 고객후기(/reviews) |
| FAQ | `/faq` | — | (단순 링크) |

CTA(nav 밖, Header에서 직접): 회사소개서(`/adresult-brochure.pdf` download) · 문의하기(`/contact` → Tally).

---

## SEO & Metadata

### RootLayout 기본 메타 (src/app/layout.tsx)

- `metadataBase: new URL(siteConfig.url)`, title/description/keywords/authors/creator = siteConfig.
- `openGraph`: type website, locale ko_KR, images `[{ url: ogImage, 1200×630 }]` (og-image=footer 로고 계열).
- `twitter`: summary_large_image.
- `robots`: index·follow, googleBot `max-image-preview: large`.
- `alternates.canonical`: siteConfig.url.
- `verification`: google `cSZexxUigLS0oxD7ZRL4S7rhbPk52Yptqa7EkbBTD-I` / naver `81ff776caa018aeef4adce150257d25546b9137a` / bing(msvalidate.01) `FEADAB9A050D08C9269521AB466C6271`.
- 파비콘·아이콘: `src/app/icon.png` · `src/app/apple-icon.png` (애드리절트 aL 마크) 컨벤션 자동 처리.
- GA4: `NEXT_PUBLIC_GA_ID` 설정 시에만 `<GoogleAnalytics>` 로드.

### 페이지별 메타 오버라이드

```ts
// src/app/{slug}/page.tsx
export const metadata: Metadata = {
  title: "페이지 제목 | 애드리절트(ADRESULT)",
  description: "…",
  alternates: { canonical: "/{slug}" },
};
```
동적 라우트(`specialty/[slug]`, `cases/[slug]`)는 `generateMetadata`로 데이터 기반 생성. 페이지 metadata는 RootLayout과 깊은 병합.

### JSON-LD 구조화 데이터

- **layout.tsx (전역)**: `jsonLd`(`["Organization","ProfessionalService"]`, `@id #organization` — legalName·slogan·logo·foundingDate 2015·telephone(DUMMY_TEL 가드)·fax·email·founder(이승민)·address·serviceType·knowsAbout·sameAs·hasOfferCatalog) + `websiteSchema`(WebSite, `@id #website`).
- **홈**: `homeFaqSchema` (FAQPage, Q&A 5).
- **specialty/[slug]**: `Service`.
- **regulation**: `regulationSchema` (WebPage).
- **faq**: `faqSchema` (FAQPage, FAQ_ITEMS 전체).
- **cases/[slug]**: `Article` + (faq 있으면) `FAQPage`.
- **BreadcrumbJsonLd**: 내부 페이지 대부분에서 `BreadcrumbList` 렌더.

### sitemap (src/app/sitemap.ts)

`staticRoutes` + `SPECIALTY_SLUGS`(6, priority 0.8) + `CASE_ARTICLES`(27, priority 0.7) 자동 결합 → 총 **44 URL**.

| path | priority | changeFrequency |
|------|----------|----------------|
| `/` | 1.0 | weekly |
| `/history` `/ceo` `/people` | 0.6 | monthly |
| `/about` | 0.8 | monthly |
| `/services/aio` `/services/shortform` | 0.9 | weekly |
| `/cases` `/reviews` | 0.8 | weekly |
| `/regulation` `/faq` | 0.7 | monthly |
| `/specialty/{slug}` ×6 | 0.8 | monthly |
| `/cases/{idx}` ×27 | 0.7 | monthly |

신규 정적 라우트 추가 시 `staticRoutes`에 함께 추가.

### robots (src/app/robots.ts)

- `*`: allow `/`, disallow `/api/`, `/cases/create`.
- **AI 크롤러 명시 허용**: OAI-SearchBot·ChatGPT-User·GPTBot·PerplexityBot·Claude-Web·anthropic-ai·Google-Extended·Applebot·cohere-ai·YouBot·Diffbot·Googlebot·Bingbot 등.
- `Sitemap: {siteConfig.url}/sitemap.xml`.

### AEO 보조 자산

- `public/llms.txt` — 회사 정보·서비스·진료과 페이지 링크를 텍스트로 정리(답변엔진용). 브랜드/도메인 변경 시 함께 갱신.

---

## 문의(폼) 처리

이 사이트에는 **폼 컴포넌트·서버 액션·API 라우트가 없다.** 모든 "문의하기"/CTA(`/contact`, StickyCTA, AboutMidCTA 등)는 `next.config.ts`의 redirect로 **외부 Tally 폼 `https://tally.so/r/gDQkzJ`** 로 302 이동한다. 전화(`tel:1661-4829`)·카카오톡 채널(`siteConfig.contact.kakaoOpenChat`) 직접 연결도 병행.
