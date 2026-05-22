# 02. 코드 컨벤션 & 디자인/애니메이션 토큰

## 코드 컨벤션

### 컴포넌트 작성 방식
```ts
// ✅ 항상 이 방식
export const MySection = () => { ... }

// 페이지 파일만 default export 추가
export const AboutPage = () => { ... }
export default AboutPage
```

### Export 규칙
- 공용 컴포넌트(shared, sections, ui): named export만
- 페이지(app/**/page.tsx): named export + default export 동시

### 타입 정의
```ts
// ✅ type alias 위주
type Props = { ... }

// ❌ interface 거의 안 씀
```
- 도메인 타입은 `src/types/index.ts` 한 파일에 집중

### Import 규칙
- 폴더당 index.ts 없음 → 직접 경로로 import
  - ✅ `import { CTACard } from "@/components/shared/CTACard"`
  - ❌ `import { CTACard } from "@/components/shared"`
- framer-motion ❌ → `import { motion } from "motion/react"` ✅
- 아이콘: `import { ArrowRight } from "lucide-react"` (named)

### className 병합
```ts
import { cn } from "@/lib/utils"
// cn = clsx + tailwind-merge
<div className={cn("base-class", condition && "extra", props.className)} />
```

`src/lib/utils.ts`:
```ts
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
```

### "use client" 규칙
- motion, useState, useEffect, useRef, usePathname 등 사용 시에만 최상단에 선언
- 정적 섹션(데이터만 렌더)은 서버 컴포넌트로 유지

### 파일 네이밍
- 컴포넌트: PascalCase (`CTACard.tsx`, `SectionHeading.tsx`)
- 설정/유틸/데이터: lowercase (`utils.ts`, `site.ts`, `faq.ts`)

---

## 디자인 토큰

### 폰트 (`src/app/layout.tsx`)
| 변수 | 폰트 | 용도 |
|------|------|------|
| `--font-pretendard` | Pretendard Variable (local woff2) | 기본 폰트, body, heading |
| `--font-inter` | Inter (Google Fonts) | 보조 폰트 |

`@theme inline` 매핑:
```css
--font-sans:  var(--font-pretendard), "Pretendard Variable", ...
--font-inter: var(--font-inter), "Inter", sans-serif
--font-heading: var(--font-pretendard), "Pretendard Variable", ...
```

### 브랜드 색상 (CSS 변수 — `src/app/globals.css` `:root`)

| 변수 | 값 | 용도 |
|------|----|------|
| `--brand-sage` | `#58d68d` | 주 브랜드색, gradient-text, ring, eyebrow |
| `--brand-green` | `#16a34a` | gradient 중간, primary |
| `--brand-forest` | `#15803d` | gradient 끝, 다크 강조 |
| `--primary` | `#16a34a` | 버튼·링크 |
| `--primary-foreground` | `#ffffff` | |
| `--secondary` | `#f8fafc` | |
| `--secondary-foreground` | `#0f172a` | |
| `--muted` | `#f1f5f9` | |
| `--muted-foreground` | `#475569` | 설명 텍스트 |
| `--accent` | `#f1f5f9` | |
| `--accent-foreground` | `#0f172a` | |
| `--destructive` | `#ef4444` | |
| `--border` | `#e2e8f0` | 카드 테두리 |
| `--input` | `#e2e8f0` | |
| `--ring` | `#58d68d` | focus ring |
| `--background` | `#ffffff` | |
| `--foreground` | `#0f172a` | |
| `--card` | `#ffffff` | |
| `--card-foreground` | `#0f172a` | |
| `--radius` | `6px` | shadcn 기본 radius |
| `--bg-tinted-violet` | `#faf8ff` | 연보라 틴트 배경 |
| `--bg-tinted-slate` | `#f8fafc` | 연슬레이트 틴트 배경 |

### 다크 섹션 배경값 (컴포넌트 내 하드코딩)
| 값 | 사용 위치 |
|----|----------|
| `#0a0a0a` | WhyUsBold, FinalCTA dark bg, btn-solid-dark |
| `#0a0e2e` | AboutHero, WhyUsBold, RegulationHero, ShortformHero |
| `#0b1220` | AESlogan |
| `#0f172a` | Footer |
| `slate-950` | TeamStats |

### 라디우스 토큰 (`@theme inline`)
| 토큰 | 값 |
|------|----|
| `--radius-sm` | `4px` |
| `--radius-md` | `6px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |
| `--radius-2xl` | `16px` |

### 유틸리티 클래스 (`@layer` — `src/app/globals.css`)

| 클래스 | 역할 | CSS 요약 |
|--------|------|----------|
| `.gradient-brand` | 그라데이션 배경 | `linear-gradient(135deg, #58d68d 0%, #16a34a 50%, #15803d 100%)` |
| `.gradient-text` | 텍스트 그라데이션 | `135deg green→forest`, `background-clip: text`, `color: transparent` |
| `.gradient-soft` | 소프트 배경 | `radial-gradient(60% 50% at 50% 50%, rgba(88,214,141,0.12), transparent 70%)` |
| `.gradient-border` | 테두리 그라데이션 | `border-image: linear-gradient(135deg, sage→green→forest) 1` |
| `.card-hover` | 카드 호버 | `transition 0.2s ease`, hover: `translateY(-4px)` + `box-shadow 0 6px 16px rgba(0,0,0,0.06)` |
| `.btn-solid-dark` | 검은 버튼 | `bg #0a0a0a`, `color #fff`, hover: `opacity 0.85` |
| `.badge-purple` | 그린 배지 | `bg rgb(88 214 141/0.1)`, `color #58d68d`, `font-size 0.625rem`, `font-weight 700`, `border-radius 9999px` |

### 반응형 & 레이아웃
```
컨테이너:      mx-auto max-w-6xl px-4 md:px-8  (max-w-7xl은 일부 페이지)
섹션 패딩:     py-20 md:py-28
Hero:          min-h-screen
헤더 높이:     h-16 (64px 모바일) / md:h-20 (80px)
scroll-padding-top: 64px (모바일) / 80px (md)
```

### 기타
- 다크모드: 미사용 (라이트 모드만)
- `word-break: keep-all` — body에 전역 적용 (한글 단어 잘림 방지)
- 스크롤바: `width: 4px` thin, thumb `#e2e8f0`, hover `#cbd5e1`

---

## 애니메이션 토큰

### 공통 ease
```ts
const ease = [0.22, 1, 0.36, 1] as const
// 거의 모든 motion transition에 사용 (Reveal, PageHero, Hero 동일)
```

### Reveal 컴포넌트 기본값 (`src/components/shared/Reveal.tsx`)
```ts
duration: 1.1
delay: 0       // prop으로 주입
direction: "up"  // "up" | "down" | "left" | "right" | "scale" | "none"
viewport margin: "-120px"  // 뷰포트 안쪽 120px 진입 시 트리거
once: false    // 뷰포트 재진입 시 재실행 (스크롤 방향 감지로 제어)
```

동작 규칙:
- 아래로 스크롤 중 뷰포트 진입 → 애니메이션 실행
- 위로 스크롤 중 뷰포트 이탈 → 리셋 (다음 스크롤다운 대비)
- 아래로 스크롤 중 뷰포트 이탈(위로) → visible 유지 (경계 루프 방지)
- `useReducedMotion()` 자동 대응 — opacity만으로 축소

direction별 초기 offset:
| direction | initial |
|-----------|---------|
| `up` | `y: 90` |
| `down` | `y: -90` |
| `left` | `x: 90` |
| `right` | `x: -90` |
| `scale` | `scale: 0.78` |
| `none` | opacity만 (`x: 0, y: 0`) |

### Hero 스태거 패턴 (`src/components/sections/Hero.tsx`)
```ts
// eyebrow: duration 0.6,  delay 0     (y: 16→0)
// h1:      duration 0.75, delay 0.1   (y: 28→0)
// sub:     duration 0.6,  delay 0.22  (y: 20→0)
// proof:   duration 0.6,  delay 0.38  (y: 12→0)
```

### PageHero 스태거 패턴 (`src/components/shared/PageHero.tsx`)
```ts
// eyebrow:  duration 0.6,  delay 0    (y: 16→0)
// h1:       duration 0.75, delay 0.1  (y: 28→0)
// sub:      duration 0.65, delay 0.2  (y: 20→0)
// CTA:      duration 0.6,  delay 0.3  (y: 16→0)
// children: duration 0.5,  delay 0.4  (y: 12→0)
```

### 그리드 카드 스태거
```ts
delay={i * 0.08}   // 기본
delay={i * 0.12}   // 더 느린 경우
```

### CountUp 설정
```ts
duration: 1.4
ease: "easeOut"
useInView({ once: true })  // 뷰포트 진입 시 1회 실행
```

### Marquee 설정
```ts
import Marquee from "react-fast-marquee"
// speed: 30~40
// gradient={false}
// direction: "left" | "right" (행마다 교차)
```

### 주요 hover 패턴
```ts
whileHover={{ y: -4 }}  // .card-hover와 동일 효과 (motion 버전)
// spring: type: "spring", stiffness: 300  (일부 컴포넌트)
```
