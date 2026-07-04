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
- 공통 도메인 타입은 `src/types/index.ts` 에 모으고, 페이지 전용 데이터 타입은 해당 `src/data/*.ts` 파일 안에서 직접 정의(export)한다 (예: `Specialty`, `CaseArticle`, `Regulation`, `ProcessStep`).

### Import 규칙
- 폴더당 index.ts 없음 → 직접 경로로 import
  - ✅ `import { Reveal } from "@/components/shared/Reveal"`
  - ❌ `import { Reveal } from "@/components/shared"`
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
- 컴포넌트: PascalCase (`CompanyTabs.tsx`, `RegulationHero.tsx`)
- 설정/유틸/데이터: lowercase (`utils.ts`, `site.ts`, `faq.ts`)

---

## 디자인 토큰

### 폰트 (`src/app/layout.tsx` + `pretendard-subset.css`)
| 변수 | 폰트 | 용도 |
|------|------|------|
| `--font-pretendard` | Pretendard Variable (dynamic-subset, 자체 호스팅) | 기본 폰트, body, heading |
| `--font-inter` | Inter (next/font/google) | 보조 라틴 |
| `--font-roboto-mono` | Roboto Mono (next/font/google) | 모노 eyebrow·수치 |
| `--font-hand` | Nanum Pen Script (next/font/google) | 손글씨 강조 |

`@theme inline` 매핑 (`globals.css`):
```css
--font-sans:    var(--font-pretendard), "Pretendard Variable", Pretendard, ...
--font-inter:   var(--font-inter), "Inter", sans-serif
--font-mono:    var(--font-roboto-mono), ui-monospace, ...
--font-heading: var(--font-pretendard), "Pretendard Variable", Pretendard, sans-serif
```

### 브랜드 색상 (CSS 변수 — `src/app/globals.css` `:root`)

**테마 = 빨강.** (구 초록 테마는 폐기)

| 변수 | 값 | 용도 |
|------|----|------|
| `--brand-sage` | `#ef3c39` | 주 브랜드색(레드), gradient-text, ring, eyebrow, badge |
| `--brand-green` | `#e11d29` | gradient 중간, primary |
| `--brand-forest` | `#b3121e` | gradient 끝, 다크 강조 |
| `--primary` | `#e11d29` | 버튼·링크 |
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
| `--ring` | `#ef3c39` | focus ring |
| `--background` | `#ffffff` | |
| `--foreground` | `#0f172a` | |
| `--card` / `--card-foreground` | `#ffffff` / `#0f172a` | |
| `--radius` | `6px` | shadcn 기본 radius |
| `--bg-tinted-sage` | `#fef2f2` | 연레드 틴트 배경 |
| `--bg-tinted-slate` | `#f8fafc` | 연슬레이트 틴트 배경 |

> CSS 변수명은 과거 초록 테마 잔재(`--brand-sage`/`--brand-green`/`--brand-forest`, `.badge-purple`)를 그대로 쓰되 **값만 레드로 교체**돼 있다. 이름에 속지 말 것.

### 다크 섹션 배경값 (컴포넌트 내 하드코딩)
| 값 | 사용 위치 |
|----|----------|
| `#0a0a0a` | 다크 CTA·섹션 배경, `btn-solid-dark`, 성공사례 `pre` |
| `#0f172a` | Footer, RegulationHero 등 |

### 라디우스 토큰 (`@theme inline`)
| 토큰 | 값 |
|------|----|
| `--radius-sm` | `4px` |
| `--radius-md` | `6px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |
| `--radius-2xl` | `16px` |

### 유틸리티 클래스 (`globals.css`)

| 클래스 | 역할 | CSS 요약 |
|--------|------|----------|
| `.gradient-brand` | 그라데이션 배경 | `linear-gradient(135deg, #ef3c39 0%, #e11d29 50%, #b3121e 100%)` |
| `.gradient-text` | 텍스트 그라데이션 | `135deg #e11d29→#3a0509`, `background-clip: text`, `color: transparent` |
| `.gradient-soft` | 소프트 배경 | `radial-gradient(60% 50% at 50% 50%, rgba(239,60,57,0.12), transparent 70%)` |
| `.gradient-border` | 테두리 그라데이션 | `border-image: linear-gradient(135deg, #ef3c39→#e11d29→#b3121e) 1` |
| `.card-hover` | 카드 호버 | `transition 0.2s ease`, hover: `translateY(-4px)` + `box-shadow 0 6px 16px rgba(0,0,0,0.06)` |
| `.btn-solid-dark` | 검은 버튼 | `bg #0a0a0a`, `color #fff`, hover: `opacity 0.85` |
| `.badge-purple` | 레드 배지 | `bg rgb(239 60 57/0.1)`, `color #ef3c39`, `font-size 0.625rem`, `font-weight 700`, `border-radius 9999px` |
| `.eq-bar` | 숏폼 "재생 중" 이퀄라이저 바 | `@keyframes eq-bounce` scaleY 0.35↔1, reduce-motion 시 느리게 |
| `.case-preview` (`@layer components`) | 성공사례 본문/에디터 타이포그래피 | `/cases/[slug]` 렌더와 일치 (h1~h4·p·blockquote·mark 등) |
| `.ProseMirror` | Tiptap 에디터 포커스/placeholder 스타일 | `/cases/create` 전용 |

### 반응형 & 레이아웃
```
컨테이너:      mx-auto max-w-6xl px-4 md:px-8  (성공사례 상세는 max-w-5xl, 영상 max-w-2xl)
섹션 패딩:     py-20 md:py-28
Hero:          min-h-screen (일부)
헤더 높이:     h-16 (64px 모바일) / md:h-20 (80px)
scroll-padding-top: 64px (모바일) / 80px (md)
```

### 기타
- 다크모드: 미사용 (라이트 모드만)
- `word-break: keep-all` — body에 전역 적용 (한글 단어 잘림 방지)
- `html { overflow-x: hidden; scrollbar-gutter: stable }`
- 스크롤바: `width: 4px` thin, thumb `#e2e8f0`, hover `#cbd5e1`

---

## 애니메이션 토큰

### 공통 ease
```ts
const ease = [0.22, 1, 0.36, 1] as const
// 거의 모든 motion transition에 사용 (Reveal, Hero, 섹션 stagger 동일)
```

### Reveal 컴포넌트 (`src/components/shared/Reveal.tsx`)
```ts
type RevealProps = {
  children, className?,
  delay?: number,        // 기본 0
  direction?: "up" | "down" | "left" | "right" | "none" | "scale",  // 기본 "up"
  duration?: number,     // 기본 1.1
  margin?: string,       // 기본 "-120px" (뷰포트 진입 트리거 여백)
}
```

동작 규칙:
- `onViewportEnter` 시 재생. `onViewportLeave` 는 요소가 뷰포트 **아래쪽으로 확실히**(top > viewportH*0.5) 벗어났을 때만 리셋.
- → **아래로 스크롤해 다시 진입하면 재생**, 위로 스크롤해 진입할 땐 재생 안 함. (구버전의 `once:true` 1회 재생과 다름)
- `useReducedMotion()` 자동 대응 — opacity만으로, `duration: 0`.

direction별 초기 offset:
| direction | initial |
|-----------|---------|
| `up` | `y: 90` |
| `down` | `y: -90` |
| `left` | `x: 90` |
| `right` | `x: -90` |
| `scale` | `scale: 0.78` |
| `none` | opacity만 (`x: 0, y: 0`) |

### Hero (`src/components/sections/Hero.tsx`)
`motion/react` 스태거로 eyebrow/h1/sub/proof 순차 fade-in (`ease [0.22,1,0.36,1]`). 배경 영상(`home-hero-video.*`) + 스크롤 인디케이터 애니메이션 포함.

### 그리드 카드 스태거
```ts
delay={i * 0.08}   // 기본
delay={i * 0.12}   // 더 느린 경우
```

### CountUp (인라인 — 각 섹션 내부 정의)
공용 컴포넌트가 아니다. 필요한 섹션(ExcellentCompany·CaseHighlight·RegulationStats·RegulationBeforeAfter·RegulationChecklist·ProcessSteps 등)이 파일 안에서 작은 `CountUp` 컴포넌트를 직접 정의한다.
```ts
import { animate, useInView } from "motion/react";
// useInView(ref, { once: true }) → animate(0, to, { duration ~1.4-1.6, ease }) → Math.round
```

### Marquee (`react-fast-marquee`)
```ts
import Marquee from "react-fast-marquee"
// 사용처: ReviewVideos, AboutReviewMarquee
// speed 조절, gradient={false}, direction 교차
```

### 주요 hover 패턴
```ts
whileHover={{ y: -4 }}  // .card-hover와 동일 효과 (motion 버전)
```
