# 01. 프로젝트 개요

**애드리절트(ADRESULT)** — 병원마케팅 대행사 홈페이지. "결과로 말하는 광고회사".

## 스택

| 항목 | 값 |
|------|-----|
| Next.js | 16.2.1 |
| React | 19.2.4 |
| 라우팅 | App Router |
| TypeScript | strict mode |
| Tailwind CSS | v4 (PostCSS 기반, tailwind.config.js 없음 — `@theme inline` in globals.css) |
| 모션 | motion@12.38.0 (패키지명 `motion`, import from `"motion/react"`) |
| 폰트 | Pretendard **dynamic-subset**(자체 호스팅 woff2 + `@font-face`) + Inter / Roboto Mono / Nanum Pen Script (next/font/google) |
| 리치 에디터 | Tiptap 3 (`@tiptap/*`) — `/cases/create` 관리자 에디터에서만 사용 |
| 분석 | `@vercel/analytics`, `@vercel/speed-insights`, `@next/third-parties`(GA4) |
| 패키지 매니저 | pnpm@10.33.0 |
| Node | >=22 |
| 기타 라이브러리 | lucide-react, @base-ui/react, react-fast-marquee, class-variance-authority, clsx, tailwind-merge, pretendard, shadcn, tw-animate-css, @tailwindcss/typography |

> **주의**: MDX(@mdx-js·@next/mdx)는 **제거됨**. 블로그 기능·글도 없음.
> Resend·Supabase·react-email 등 폼/DB 백엔드 의존성도 **없음** (문의는 외부 Tally 폼 리다이렉트).

## 경로 alias

```
@/* → ./src/*   (tsconfig.json paths)
```

## 디렉토리 구조

```
src/
├── app/                        # App Router — 라우트·레이아웃·글로벌 스타일
│   ├── layout.tsx              # RootLayout: Header·Footer·StickyCTA·FloatingActions·PageTransition 마운트, Metadata, JSON-LD(Organization+WebSite), GA4
│   ├── globals.css             # Tailwind import + :root CSS 변수 + @theme inline + @layer + .case-preview
│   ├── pretendard-subset.css   # Pretendard dynamic-subset @font-face 정의 (subset .0~.N woff2)
│   ├── page.tsx                # / 홈
│   ├── about/page.tsx          # 회사소개 (CompanyHero + CompanyTabs)
│   ├── ceo/page.tsx            # 대표 (CompanyTabs)
│   ├── people/page.tsx         # 팀·조직 (CompanyTabs)
│   ├── history/page.tsx        # 연혁·수상 (CompanyTabs)
│   ├── services/
│   │   ├── aio/page.tsx        # 병원 AIO·AI검색 마케팅
│   │   └── shortform/page.tsx  # 끝장숏폼
│   ├── specialty/[slug]/page.tsx   # 진료과 랜딩 6종 (SSG)
│   ├── cases/
│   │   ├── page.tsx            # 성공사례 목록 (페이지네이션)
│   │   ├── [slug]/page.tsx     # 성공사례 상세 (SSG, Article+FAQPage JSON-LD)
│   │   └── create/            # 관리자 케이스 에디터 (Tiptap) — robots disallow
│   ├── faq/page.tsx
│   ├── reviews/page.tsx        # 고객후기
│   ├── regulation/page.tsx     # 의료광고법 가이드
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── icon.png                # 파비콘 (애드리절트 aL 마크)
│   └── apple-icon.png          # iOS 아이콘 (애드리절트 aL 마크)
├── components/
│   ├── layout/                 # Header, Footer, MobileMenu
│   ├── sections/               # 페이지 섹션 컴포넌트 (named export)
│   ├── shared/                 # 재사용 공용 컴포넌트 (Reveal, CompanyTabs, PaginatedCards, StickyCTA, FloatingActions, PageTransition, WaveDivider, Logo, BreadcrumbJsonLd)
│   └── ui/                     # shadcn/ui 기반 컴포넌트
├── data/                       # 정적 콘텐츠 데이터 (named export TS 파일)
├── lib/
│   └── utils.ts                # cn() — clsx + tailwind-merge
├── config/
│   └── site.ts                 # siteConfig (nav, contact, metadata 기반값)
└── types/
    └── index.ts                # 도메인 타입 정의 (type alias 위주)
```

## 빌드 & 스크립트

```bash
pnpm dev          # rm -rf .next && next dev (개발)
pnpm build        # next build (프로덕션 빌드)
pnpm start        # next start
pnpm lint         # biome check . && eslint
pnpm lint:fix     # biome check --fix --unsafe . && eslint --fix
pnpm format       # biome format --fix .
pnpm check-types  # tsc --noEmit
pnpm prepare      # lefthook install (git hooks, CI 제외)
```

## 포매팅 & 린트

- **Biome**: tab indent, line width 100, `cn()/clsx()/cva()` 클래스 자동 정렬 (`nursery.useSortedClasses`)
- **ESLint**: Next.js core rules만 (`eslint-config-next`)
- **commitlint**: conventional commits (`@commitlint/config-conventional`, subject 한글 시작 허용·대문자 시작 거부)
- **lefthook**: git hooks (pre-commit: biome / commit-msg: commitlint / pre-push: knip)
- **knip**: 미사용 export·의존성 탐지
- **검증 명령**: 작업 후 반드시 `pnpm lint && pnpm check-types` 통과 확인 (린트는 CostBreakdown 경고 1개만 허용)

## 환경변수

```
NEXT_PUBLIC_SITE_URL   # 기본: https://adresult.kr (trailing slash 자동 제거)
NEXT_PUBLIC_GA_ID      # G-XXXXXXXX 설정 시에만 GA4 로드 (선택)
```

라이브 도메인은 **피부과마케팅.com** (punycode `xn--vb0bs6vtzcc3x9secwd.com`). 메타·JSON-LD·sitemap 기준 URL은 `siteConfig.url`(기본 `https://adresult.kr`).

## next.config.ts 핵심 설정

- **redirects**:
  - `/contact` → 외부 Tally 폼 `https://tally.so/r/gDQkzJ` (302, temporary). 모든 문의 CTA가 여기로 향한다.
  - 임웹 원문 성공사례 view URL `/549265113?idx={n}` → `/cases/{n}` (301, permanent)
- **이미지**: `qualities: [75, 90, 95]`, `remotePatterns: [{ protocol: "https", hostname: "**" }]` (모든 https 허용 — 배포 전 좁힐 TODO)
- **보안 헤더** (production only): X-Frame-Options SAMEORIGIN, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy(camera/microphone/geolocation 차단), X-DNS-Prefetch-Control on, HSTS, CSP
  - CSP `script-src`: self + `unsafe-inline` + `googletagmanager.com` + `va.vercel-scripts.com` + `t1.daumcdn.net`(카카오맵)
  - CSP `frame-src`: self + `https://www.youtube.com`
  - CSP `connect-src`: self + google-analytics/analytics.google.com + googletagmanager + Vercel Analytics/insights
  - CSP `font-src`: self (자체 호스팅 폰트)
- 개발환경(dev)에서는 CSP·보안 헤더 비활성화 (`process.env.NODE_ENV !== "production"` → 빈 배열, Turbopack HMR WebSocket 차단 방지)
- 신규 외부 도메인(지도·영상 등) 추가 시 CSP `script-src`/`frame-src` 업데이트 필요 (next.config.ts 상단 주석에 가이드 있음)

## 폰트 설정

### Pretendard — dynamic subset (자체 호스팅)

next/font의 `localFont`가 **아니다**. `public/fonts/pretendard/`에 subset woff2 조각(`PretendardVariable.subset.0.woff2` …)을 두고, `src/app/pretendard-subset.css`가 조각마다 `@font-face`(font-family: `"Pretendard Variable"`, weight `45 920`, `font-display: swap`, `unicode-range`)를 선언한다. `layout.tsx`에서 `import "./pretendard-subset.css"`로 로드한다.

`globals.css` `:root`에서 `--font-pretendard: "Pretendard Variable"` 로 매핑하고, `body`·`@theme inline --font-sans`가 이를 첫 폴백으로 사용한다.

### next/font/google (src/app/layout.tsx)

```ts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono", display: "swap", weight: ["400","500","700"] });
const nanumPen = Nanum_Pen_Script({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap", preload: false });
// html className: `${inter.variable} ${robotoMono.variable} ${nanumPen.variable} h-full`
```

| 변수 | 폰트 | 용도 |
|------|------|------|
| `--font-pretendard` | Pretendard Variable (dynamic subset) | 기본 폰트, body, heading |
| `--font-inter` | Inter | 보조 라틴 |
| `--font-roboto-mono` | Roboto Mono | 모노(eyebrow·수치) |
| `--font-hand` | Nanum Pen Script | 손글씨 강조 (맞춤 전략 섹션 등) |
