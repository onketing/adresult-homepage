# 03. 공통 컴포넌트 카탈로그

애드리절트(ADRESULT) 병원마케팅 사이트의 현존 컴포넌트만 정리한다.

> 리브랜딩 이전의 공용 CTA/PageHero/섹션 헤딩/팀 카드/공용 CountUp 컴포넌트 등은 **삭제됨**. 이 문서에 없는 컴포넌트는 존재하지 않는다.

## 의사결정 트리 — 어떤 컴포넌트를 쓸까

| 상황 | 사용할 것 |
|------|-----------|
| 회사소개 하위 페이지 상단 히어로 (영상 배경) | `CompanyHero` (`videoSrc` prop) |
| 회사소개 하위 페이지 탭 네비 | `CompanyTabs` |
| 페이지 섹션 중간 다크 CTA | `AboutMidCTA` (src/components/sections/AboutMidCTA.tsx) |
| 카드 목록 + 페이지네이션 (성공사례·후기) | `PaginatedCards` |
| 카드·리스트 진입 스크롤 모션 | `Reveal` |
| 무한루프·hover·page transition | motion 직접 사용 |
| 마퀴(무한 롤링) | `react-fast-marquee` 직접 사용 |
| 폼 UI 요소 | shadcn/ui (src/components/ui/*) |
| 리치 텍스트 에디터 (관리자) | Tiptap (`/cases/create`) |
| 섹션 사이 웨이브 | `WaveDivider` |
| 빵부스러기 구조화 데이터 | `BreadcrumbJsonLd` |
| 로고 | `Logo` |

> 섹션 제목에는 공용 `SectionHeading` 컴포넌트가 없다. 각 섹션이 `<p className="... text-[#ef3c39] ... uppercase tracking-[0.25em]">EYEBROW</p>` + `<h2>` 마크업을 **직접** 쓴다 (아래 §섹션 공통 패턴 참고).

---

## shared/ 컴포넌트

### CompanyTabs
**파일**: src/components/shared/CompanyTabs.tsx · `"use client"`

props 없음. sticky(`top-16 md:top-20`) 하단 보더 탭 네비. 4개 탭: `ABOUT`(/about) · `HISTORY`(/history) · `CEO`(/ceo) · `PEOPLE`(/people). 현재 경로 탭은 `bg-[#e11d29] text-white`, 나머지는 hover 시 레드. `/about`·`/ceo`·`/people`·`/history` 4개 페이지가 `CompanyHero` 바로 아래에 함께 마운트한다.

---

### Reveal
**파일**: src/components/shared/Reveal.tsx · `"use client"`

```ts
type RevealProps = {
  children, className?,
  delay?: number,        // 기본 0
  direction?: "up" | "down" | "left" | "right" | "none" | "scale",  // 기본 "up"
  duration?: number,     // 기본 1.1
  margin?: string,       // 기본 "-120px"
};
```
- `onViewportEnter` 재생. `onViewportLeave` 는 요소가 뷰포트 아래쪽으로 확실히 벗어났을 때만 리셋 → 아래로 재진입 시 재생, 위로 진입 시 재생 안 함.
- `useReducedMotion()` 대응(opacity만, `duration: 0`), ease `[0.22, 1, 0.36, 1]`.
- 사용: 카드 그리드·섹션 헤더 진입 모션, `delay={i * 0.08}` 스태거. hover/무한반복에는 쓰지 않음.

---

### PaginatedCards
**파일**: src/components/shared/PaginatedCards.tsx · `"use client"`(내부 Suspense)

```ts
export type CardItem = { id: string; title: string; excerpt: string; image: string; href?: string };
// <PaginatedCards items={CardItem[]} perPage={9} />  // perPage 기본 9
```
- 카드 그리드 + 페이지네이션. 페이지 번호를 URL `?page=N`으로 관리(공유·새로고침·뒤로가기 지원).
- `href`가 있으면 `Link`, 없으면 `div` 카드. 이미지 + 제목 + excerpt.
- 사용처: `/cases`(SUCCESS_CASES), `/reviews`(CUSTOMER_REVIEWS).

---

### BreadcrumbJsonLd
**파일**: src/components/shared/BreadcrumbJsonLd.tsx (서버 컴포넌트)

```ts
type Crumb = { name: string; path: string };  // path는 siteConfig.url 기준 상대경로("" = 홈)
// <BreadcrumbJsonLd items={[{ name: "홈", path: "" }, ...]} />
```
`BreadcrumbList` JSON-LD `<script>`를 렌더. 거의 모든 내부 페이지 상단에서 사용.

---

### Logo
**파일**: src/components/shared/Logo.tsx

```ts
type LogoProps = { variant?: "dark" | "light"; className?: string };  // 기본 "dark"
```
- `public/header-logo.png`(637×138, height 42px 고정)을 `next/image`로 렌더.
- `variant="light"` 시 `filter: brightness(0) invert(1)`(흰색). Header는 항상 `variant="dark"`로 쓴다.

---

### WaveDivider
**파일**: src/components/shared/WaveDivider.tsx

```ts
type WaveDividerProps = { className?, fillColor?: string /*기본 #ffffff*/, flip?: boolean, height?: number /*기본 60*/ };
```
SVG 웨이브 곡선. `aria-hidden`. `fillColor`를 다음 섹션 배경과 맞춘다. 주 용도: Footer 상단(`<WaveDivider fillColor="#1a0505" />`).

---

### StickyCTA
**파일**: src/components/shared/StickyCTA.tsx · `"use client"` (RootLayout에서 1회 마운트)

props 없음. 우하단 고정 상담 CTA. 클릭 시 카드 팝업 — "병원 마케팅 문의"(`/contact` → Tally 리다이렉트) + 회사소개서 PDF 다운로드. `/contact` 경로에서는 `null`(자동 숨김).

---

### FloatingActions
**파일**: src/components/shared/FloatingActions.tsx · `"use client"` (RootLayout에서 1회 마운트)

props 없음. 우측 세로 중앙 고정(`hidden md:flex` — 데스크톱 전용). 소셜 4개(유튜브 `youtube-logo.png` / 네이버 블로그 `blog-logo.png` / 인스타그램 `instagram-logo.png` / 카카오톡 `kakao-logo.png`, 링크는 `siteConfig.contact`) + 위로가기(`scrollY > 400`일 때만).

---

### PageTransition
**파일**: src/components/shared/PageTransition.tsx · `"use client"`

`{ children }`. pathname 변경 시 `window.scrollTo({ top: 0 })`로 스크롤 초기화. 시각 전환 없음. RootLayout `<main>` 안에서 children 래핑.

---

## sections/ 재사용 컴포넌트

### AboutMidCTA
**파일**: src/components/sections/AboutMidCTA.tsx

다크 레드(`bg-[#3a0509]`) 중간 CTA. eyebrow `"Direct Contact"` + h2 + 버튼 3개: 문의하기(`/contact`) / 카카오톡(노란 버튼, `siteConfig.contact.kakaoOpenChat`) / 회사소개서 PDF(`/adresult-brochure.pdf`). note `"영업일 1일 내 회신 · 24시간 카카오 응답 · 즉시 다운로드"`.
- `DESK_PHOTO_READY = false` 플래그 — `/public/images/about/desk.jpg` 준비 시 `true`로 바꾸면 배경 사진 노출.
- 사용처: `/regulation`(하단). (그 외 서비스 페이지들은 자체 레드 밴드 CTA를 직접 씀)

---

## layout/ 컴포넌트

### Header
**파일**: src/components/layout/Header.tsx · `"use client"`

```ts
const TRANSPARENT_HERO_PATHS = ["/", "/history", "/ceo", "/people", "/about", "/regulation"];
```
- `fixed top-0`, `h-16 md:h-20`, `z-50`.
- 스크롤 전(`scrollY <= 8`) + TRANSPARENT_HERO_PATHS 경로: `bg-transparent`, 링크 흰색(`isLight`). 그 외/스크롤 후: `bg-white/95 shadow backdrop-blur`.
- Logo는 항상 `variant="dark"` (배경이 투명 다크 히어로여도 로고는 다크 마크 사용).
- **메뉴 (siteConfig.nav)**:
  - 회사소개(드롭다운, `/about` matchPrefix): ABOUT / HISTORY / CEO / PEOPLE
  - 마케팅(드롭다운, `/services`): AIO마케팅(`/services/aio`) / 끝장숏폼(`/services/shortform`)
  - 고객사례(드롭다운, `/cases`): 성공사례(`/cases`) / 고객후기(`/reviews`)
  - FAQ(`/faq`, 단순 링크)
- CTA: "회사소개서"(`/adresult-brochure.pdf` download) + "문의하기"(`/contact` → Tally).

> **신규 풀스크린/다크 히어로 페이지 추가 시** `TRANSPARENT_HERO_PATHS`에 경로 추가.

---

### Footer
**파일**: src/components/layout/Footer.tsx (서버 컴포넌트)

- 다크 배경, 최상단 `<WaveDivider fillColor="#1a0505" />`.
- 좌: `footer-logo.png` + 소셜 4개(유튜브/네이버 블로그/인스타그램/카카오톡, `siteConfig.contact`).
- 우: 사업자명·대표자(이승민)·사업자등록번호(889-88-00231)·주소·TEL(1661-4829)·EMAIL(mail@adresult.kr) — 모두 `siteConfig.contact`.
- 최하단: `Copyright © 2026 ADRESULT. All rights reserved.`

---

### MobileMenu
**파일**: src/components/layout/MobileMenu.tsx · `"use client"`

`Sheet`(shadcn/ui) 기반 우측 슬라이드 메뉴. Header 내부에서 렌더(`lg:hidden` 트리거). 드롭다운 항목은 Accordion. siteConfig.nav 구조를 따른다.

---

## ui/ 컴포넌트 (shadcn/ui)

신규 설치: `pnpm shadcn add {component-name}`

현재 설치: accordion, badge, button, card, input, label, select, separator, sheet.

---

## 섹션 공통 패턴 (헤더 마크업)

공용 `SectionHeading`이 없으므로 섹션마다 아래 패턴을 직접 쓴다.

```tsx
<Reveal>
  <p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
    Eyebrow (영문 라벨)
  </p>
  <h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
    한글 제목 <span className="text-[#ef3c39]">강조</span>
  </h2>
</Reveal>
```

- **강조색**: `#ef3c39`(밝은 레드, eyebrow·강조 span) / `#e11d29`(진한 레드, CTA·버튼·탭 active).
- **다크 섹션**: `#0a0a0a`(제목 텍스트/일반 다크) · `#3a0509`·`#0d0202`·`#140505`·`#0b1220`(히어로/CTA 딥 다크 레드/네이비 계열).
- **레드 풀폭 밴드**: `bg-[#e11d29]` 섹션(서비스·specialty 페이지에서 리듬 앵커로 반복 사용).
- **CTA 버튼**: 노란 강조 버튼 `bg-[#ffe14d]`/`bg-[#FAE100]` + 전화(`tel:{siteConfig.contact.tel}`)/카카오/Tally 조합.

---

## 신규 페이지 추가 체크리스트

```
[ ] src/app/{slug}/page.tsx 생성
    → export const {Name}Page = () => { ... }
    → export default {Name}Page
[ ] export const metadata: Metadata = { title: "... | 애드리절트(ADRESULT)", description: "...", alternates: { canonical: "/{slug}" } }
[ ] 필요하면 페이지 상단 JSON-LD <script>(Service/WebPage/FAQPage 등) + <BreadcrumbJsonLd items={...} />
[ ] 풀스크린/다크 Hero라면 Header.tsx의 TRANSPARENT_HERO_PATHS에 경로 추가
[ ] src/app/sitemap.ts staticRoutes에 라우트 추가
[ ] src/config/site.ts의 nav에 링크 추가 (해당 시)
[ ] pnpm lint && pnpm check-types 통과
```

## 신규 섹션 추가 체크리스트

```
[ ] src/components/sections/{SectionName}.tsx (PascalCase, named export)
[ ] "use client" 선언 (motion/useState 사용 시에만 — 정적이면 서버 컴포넌트)
[ ] 섹션 제목은 위 "섹션 공통 패턴" 마크업으로 직접 작성
[ ] Reveal로 카드/리스트 감싸기, delay={i * 0.08}
[ ] ease [0.22, 1, 0.36, 1] 통일
[ ] cn() 사용 — 조건부 className 직접 문자열 합치기 금지
[ ] 데이터는 src/data/{name}.ts로 분리(가능하면), 타입은 파일 내 또는 src/types/index.ts
[ ] import from "motion/react" (framer-motion 아님)
[ ] lucide 아이콘 named import
```
