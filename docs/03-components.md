# 03. 공통 컴포넌트 카탈로그

## 의사결정 트리 — 어떤 컴포넌트를 쓸까

| 상황 | 사용할 것 |
|------|-----------|
| 페이지 최하단 CTA | `CTACard` variant="gradient" 또는 "dark" |
| 섹션 중간 CTA | `AboutMidCTA` (src/components/sections/AboutMidCTA.tsx) |
| 섹션 제목 (eyebrow + h2 + sub) | `SectionHeading` |
| 표준 서브페이지 Hero | `PageHero` |
| 풀스크린 비주얼 Hero (다크/비디오) | 페이지 전용 Hero 컴포넌트 직접 작성 |
| 카드·리스트 진입 스크롤 모션 | `Reveal` |
| 무한루프·hover·page transition | motion 직접 사용 |
| 폼 UI 요소 | shadcn/ui (src/components/ui/*) |
| 숫자 카운트업 | `CountUp` |
| 섹션 사이 웨이브 | `WaveDivider` |

---

## shared/ 컴포넌트

### CTACard
**파일**: src/components/shared/CTACard.tsx

```ts
type CTACardProps = {
  headline?: ReactNode;      // 기본값: "마케팅 컨설팅으로 시작하세요"
  sub?: string;              // 기본값: "진행 의무 없음 · 영업일 1일 내 회신"
  buttonText?: string;       // 기본값: "마케팅 컨설팅" (variant="dark"에서만 렌더)
  eyebrow?: string;          // 기본값: "{siteConfig.nameKo} · 마케팅 컨설팅" (variant="gradient"에서만 렌더)
  variant?: "dark" | "gradient";  // 기본값: "dark"
};
```

**동작 차이**:
- `variant="gradient"`: `gradient-brand` 배경 + noise/grid 오버레이 + trust stats 3개 (1일/0원/없음) 표시. 버튼 없음 — 섹션 전체가 CTA임.
- `variant="dark"`: `bg-[#0a0a0a]` 카드 + `/contact` 링크 버튼.

**사용**:
- DO: 페이지 최하단 final CTA
- DO: `variant="gradient"` — gradient-brand 배경, trust stats 포함
- DO: `variant="dark"` — #0a0a0a 배경
- DON'T: 페이지 중간에 배치 (그 땐 `AboutMidCTA` 사용)

**예시**:
```tsx
<CTACard
  variant="gradient"
  eyebrow="마케팅 컨설팅"
  headline="광고비, 더 태우기 전에."
  sub="3분이면 컨설팅 요청이 끝납니다."
/>
```

---

### SectionHeading
**파일**: src/components/shared/SectionHeading.tsx

```ts
type SectionHeadingProps = {
  eyebrow?: string;          // 그린(#58d68d) 소문자 레이블
  title: string;             // h2 텍스트 (필수)
  highlight?: string;        // title 뒤에 gradient-text로 붙는 단어/구
  sub?: string;              // h2 아래 설명 (max-w-2xl 자동 센터 정렬)
  className?: string;
  align?: "left" | "center"; // 기본값: "center"
};
```

**사용**:
- DO: 거의 모든 비-Hero 섹션의 제목
- DO: `highlight` prop으로 특정 단어에 gradient-text 적용
- DON'T: Hero 섹션 제목 (Hero는 자체 마크업 사용)

**예시**:
```tsx
<SectionHeading
  eyebrow="Services"
  title="전문직 마케팅, 세 가지로 합니다."
  highlight="세 가지"
  sub="채널마다 강점이 다릅니다."
  align="center"
/>
```

---

### PageHero
**파일**: src/components/shared/PageHero.tsx

```ts
type PageHeroProps = {
  eyebrow: string;              // 필수. 보라색 소문자 레이블
  title: string;                // 필수. h1 텍스트
  titleHighlight?: string;      // title 다음 줄에 gradient-text로 렌더
  sub: string;                  // 필수. h1 아래 설명
  ctaText?: string;             // 기본값: "마케팅 컨설팅"
  ctaHref?: string;             // 기본값: "/contact"
  secondaryText?: string;       // 보조 버튼 텍스트 (없으면 버튼 미렌더)
  secondaryHref?: string;       // 보조 버튼 href
  secondaryDownload?: boolean;  // true이면 <a download> 렌더 (기본값: false)
  children?: React.ReactNode;   // Hero 하단 추가 콘텐츠 (지연 0.4s fade-in)
  className?: string;
};
```

**동작**: 라이트 배경(`bg-[radial-gradient(ellipse_at_top_right,...)]`). 모든 요소 stagger animate (motion). `"use client"` 컴포넌트.

**사용**:
- DO: /services 같이 표준적인 상단 Hero (라이트 배경)
- DON'T: 풀스크린 다크 Hero가 필요한 경우 (AboutHero, ContactHero처럼 전용 작성)

**예시**:
```tsx
<PageHero
  eyebrow="Services"
  title="전문직 마케팅,"
  titleHighlight="세 가지로 합니다."
  sub="채널마다 강점이 다릅니다."
  secondaryText="회사소개서"
  secondaryHref="/growthwave-brochure.pdf"
  secondaryDownload
/>
```

---

### Reveal
**파일**: src/components/shared/Reveal.tsx

```ts
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;                                          // 기본값: 0 (초)
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";  // 기본값: "up"
  duration?: number;                                       // 기본값: 1.1 (초)
};
```

**동작**:
- `useInView` margin `-120px`, `once: false` — 뷰포트 재진입 시 재실행
- 위로 스크롤 중 뷰포트 아래로 벗어나면 상태 리셋 → 다음 스크롤다운에서 재생
- 아래로 스크롤 중 뷰포트 위로 벗어나면 visible 유지 (루프 방지)
- `prefers-reduced-motion` 감지 시 위치 이동 없이 opacity만 변환
- transition ease: `[0.22, 1, 0.36, 1]`

**사용**:
- DO: 카드 그리드, 섹션 헤더, 리스트 아이템 진입 모션
- DO: `delay={i * 0.08}`로 그리드 스태거 효과
- DON'T: hover 효과 (whileHover는 motion 직접 사용)
- DON'T: 무한 반복 애니메이션

**예시**:
```tsx
{items.map((item, i) => (
  <Reveal key={item.id} delay={i * 0.08} direction="up">
    <Card>{item.title}</Card>
  </Reveal>
))}
```

---

### StickyCTA
**파일**: src/components/shared/StickyCTA.tsx

props 없음 (RootLayout에서 1회만 마운트)

**동작**:
- 우하단 고정 원형 버튼(h-20 w-20, animate-ping 글로우) → 클릭 시 상담 카드 팝업
- 카드 팝업: 그라디언트 헤더 + `/contact` 링크 + 전화 링크 + 영업시간
- `/contact`로 시작하는 경로에서 `null` 반환 (자동 숨김)
- ESC 키로 닫기 지원
- 초기 상태: `open = true` (진입 즉시 팝업 열림)

**주의**: RootLayout에 이미 포함 — 절대 섹션/페이지에서 추가 마운트 금지

---

### FloatingActions
**파일**: src/components/shared/FloatingActions.tsx

props 없음 (RootLayout에서 1회만 마운트)

**동작**:
- 우측 세로 중앙 고정 (`top-1/2`, `right-6 md:right-8`)
- 네이버 블로그 (녹색 #03c75a) + 카카오톡 채널 (노랑 #fee500) + 위로가기 버튼
- 위로가기는 `scrollY > 400`일 때만 표시
- `hidden md:flex` — 데스크탑 전용 (모바일 미표시)

**주의**: RootLayout에 이미 포함 — 중복 마운트 금지

---

### PageTransition
**파일**: src/components/shared/PageTransition.tsx

```ts
// props
{ children: React.ReactNode }
```

**동작**:
- pathname 변경 시 `window.scrollTo({ top: 0, behavior: "instant" })` 실행
- 시각적 전환 효과 없음 — 스크롤 위치 초기화만 담당
- RootLayout의 `<main>` 안에서 children 래핑

---

### Logo
**파일**: src/components/shared/Logo.tsx

```ts
type LogoProps = {
  variant?: "dark" | "light";  // 기본값: "dark"
  className?: string;
};
```

**동작**:
- `variant="dark"`: `text-foreground` (어두운 배경 아닌 곳)
- `variant="light"`: `text-white` (다크 배경용 — Header 투명 모드, Footer)
- 렌더: `<span>` 텍스트 "Growth Wave" (font-bold, 20px, tracking-[-0.02em])

---

### WaveDivider
**파일**: src/components/shared/WaveDivider.tsx

```ts
type WaveDividerProps = {
  className?: string;
  fillColor?: string;  // 기본값: "#ffffff" — 다음 섹션 배경색과 일치시킬 것
  flip?: boolean;      // 기본값: false — true이면 rotate-180
  height?: number;     // 기본값: 60 (px)
};
```

**동작**: SVG path로 웨이브 곡선. `aria-hidden="true"`. `fillColor`가 다음 섹션 배경색과 일치해야 자연스럽게 이어짐.

**주 용도**: Footer 상단 (`<WaveDivider fillColor="#0f172a" />`)

**예시**:
```tsx
// 섹션 사이 — 다음 섹션이 bg-[#0f172a]일 때
<WaveDivider fillColor="#0f172a" />
```

---

### CountUp
**파일**: src/components/shared/CountUp.tsx

```ts
type CountUpProps = {
  to: number;          // 목표 숫자 (필수)
  suffix?: string;     // 기본값: "" — 숫자 뒤 단위 (예: "+", "%", "억")
  duration?: number;   // 기본값: 1.4 (초)
};
```

**동작**:
- `useInView({ once: true })` — 최초 뷰포트 진입 시 1회만 실행
- `animate(0, to)` easeOut, `Math.round`로 정수 표시
- `to === 0`이면 실행 안 함

**사용처**: KPIShowcase, AboutTrustCounter, RegulationStats 등 수치 강조 섹션

**예시**:
```tsx
<CountUp to={500} suffix="+" duration={1.8} />
```

---

### TeamCard
**파일**: src/components/shared/TeamCard.tsx

```ts
type Props = { member: TeamMember }
// TeamMember는 src/types/index.ts 참조
// 주요 필드: nameKo, nameEn, role, bio, photo?, careers?
```

**동작**:
- `card-hover` CSS (border + shadow 호버 효과)
- `photo` 있으면 Next.js `<Image>` 렌더 — grayscale → grayscale-0 on hover (transition 500ms)
- `photo` 없으면 이름 첫 글자를 아이콘으로 대체
- `careers` 배열 있으면 border-t 구분선 후 리스트 렌더

---

## layout/ 컴포넌트

### Header
**파일**: src/components/layout/Header.tsx

```ts
// 투명 Hero 대상 경로 — 실제 배열
const TRANSPARENT_HERO_PATHS = [
  "/about",
  "/services/professional",
  "/services/shortform",
  "/regulation",
];
```

**동작**:
- `fixed top-0`, `h-16 md:h-20`, `z-50`
- 스크롤 전(`scrollY <= 8`): `border-transparent bg-transparent`
- 스크롤 후: `border-slate-200 bg-white/95 shadow backdrop-blur-sm`
- `TRANSPARENT_HERO_PATHS` 경로 + 스크롤 전: Logo `variant="light"`, 텍스트 흰색
- 그 외: Logo `variant="dark"`, 텍스트 slate-600

**메뉴 구조**:
- 단순 링크: 회사소개(`/about`), 광고 규정(`/regulation`), 팀(`/team`), FAQ(`/faq`)
- 드롭다운 "마케팅": 전문직 마케팅(`/services/professional`), 블로그 마케팅(`/services/blog`), 숏폼 마케팅(`/services/shortform`)
- CTA 버튼: "마케팅 컨설팅" → `/contact`
- 다운로드: "회사소개서" → `/growthwave-brochure.pdf` (download 속성)

**⚠️ 신규 풀스크린 다크 Hero 페이지 추가 시**:
`TRANSPARENT_HERO_PATHS` 배열에 해당 경로 추가 필수. 누락 시 라이트 배경인 채로 Hero 위에 헤더가 렌더됨.

---

### Footer
**파일**: src/components/layout/Footer.tsx

props 없음.

**구조**:
- `bg-[#0f172a] text-white`
- 최상단: `<WaveDivider fillColor="#0f172a" />`
- 좌: Logo variant="light" + 슬로건 + SNS 아이콘(네이버 블로그 N, 카카오톡 MessageCircle)
- 우: 회사명, 사업자등록번호, 주소, TEL, EMAIL (siteConfig에서 읽음)
- 최하단: `Copyright © 2026 Growth Wave. All rights reserved.`

---

### MobileMenu
**파일**: src/components/layout/MobileMenu.tsx

props 없음. Header 내부에서 렌더.

**구조**:
- `Sheet` (shadcn/ui) — side="right", `w-[85vw] sm:w-72`
- 트리거: 햄버거 아이콘 (`lg:hidden` — 데스크탑 숨김)
- Sheet 내부: Logo → 상단 CTA 버튼 → Accordion 네비게이션 → 하단 CTA 버튼
- 드롭다운 항목은 `Accordion` 사용, 현재 경로가 matchPrefix 하위이면 자동 열림
- 링크 클릭 시 Sheet 닫힘

---

## ui/ 컴포넌트 (shadcn/ui)

신규 설치: `pnpm shadcn add {component-name}`

현재 설치된 컴포넌트:
- accordion, badge, button, card, checkbox, input, label
- navigation-menu, select, separator, sheet, tabs, textarea

---

## 신규 페이지 추가 체크리스트

```
[ ] src/app/{slug}/page.tsx 생성
    → export const {Name}Page = () => { ... }
    → export default {Name}Page
[ ] export const metadata: Metadata = { title: "제목 | Growth Wave", description: "..." }
[ ] 풀스크린 다크 Hero라면 Header.tsx의 TRANSPARENT_HERO_PATHS에 경로 추가
[ ] src/app/sitemap.ts에 라우트 추가
[ ] src/config/site.ts의 nav에 링크 추가 (해당 시)
[ ] pnpm lint && pnpm check-types 통과
```

## 신규 섹션 추가 체크리스트

```
[ ] src/components/sections/{SectionName}.tsx (PascalCase, named export)
[ ] "use client" 선언 (motion/useState 사용 시에만)
[ ] SectionHeading 컴포넌트로 섹션 제목 처리
[ ] Reveal로 카드/리스트 감싸기, delay={i * 0.08}
[ ] ease [0.22, 1, 0.36, 1] 통일
[ ] cn() 사용 — 조건부 className에 직접 문자열 합치기 금지
[ ] 데이터는 src/data/{name}.ts로 분리, 타입은 src/types/index.ts에
[ ] import from "motion/react" (framer-motion 아님)
[ ] lucide 아이콘 named import
```
