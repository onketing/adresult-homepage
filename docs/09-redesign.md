# 09 — 2026 리디자인 디자인 시스템 (신규 페이지 필수 준수)

첨부 디자인(성공사례 템플릿) 기준의 **고급 B2B 컨설팅 톤** 디자인 시스템. 신규/리뉴얼 페이지는 이 문서를 단일 출처로 따른다. (docs/02 컨벤션·docs/03 컴포넌트 규칙은 그대로 유효 — 이 문서는 시각 언어를 갱신한다.)

## 컬러

| 용도 | 값 |
|---|---|
| 페이지 배경 | `#FAFAFA` |
| 카드 배경 | `#FFFFFF` + `border border-[#E4E2DF]` |
| 본문 제목/텍스트 | `#111111` (제목) · `#333333` (본문 강조) · `#444444` (링크) |
| 보조 텍스트 | `#767370` (뮤트) · `#A5A2A0` (라벨/캡션) · `#555250` (칩 텍스트) |
| 포인트 레드 | `#C8102E` (accent·CTA·강조 span) · hover `#A50D26` |
| 다크 섹션 | `#0B0B0B` (히어로) · `#090909` (최종 CTA) — 텍스트 `#FFFFFF`, 뮤트 `#B5B2AF`, 라벨 `#8F8C89` |
| 칩 배경 | `#F5F5F5` |
| 필터 버튼 | 기본: `border-[#D9D6D3] bg-white text-[#555250]` / active: `border-[#111111] bg-[#111111] text-white` |

**금지**: 노란색 CTA, 밝은 빨강(#ef3c39/#e11d29), 레드 풀폭 밴드 남발, 그라데이션 배경.
레드는 **면적을 아껴서** 포인트로만 (7px 사각 점, 라벨, 강조 span, 주요 CTA 버튼 1개).

## 타이포그래피

- **Eyebrow(모노 라벨)**: `font-mono text-[12px] tracking-[0.14em] text-[#8F8C89]`(다크) / `text-[#767370]`(라이트) — 영문 대문자 (예: `CASE STUDY ARCHIVE`, `HOSPITAL THREADS MARKETING`)
- **H1**: `font-extrabold tracking-[-0.03em] text-4xl md:text-6xl leading-[1.12]`
- **H2**: `font-extrabold tracking-tight text-3xl md:text-5xl`
- **본문**: `text-[15px] md:text-[17px] leading-[1.8] text-[#767370]` (다크 위: `text-[#B5B2AF]`)
- 손글씨(`--font-hand`) 사용 금지 (구 디자인 잔재)

## 핵심 패턴 (첨부 디자인 그대로)

### 다크 히어로 (모든 서비스/허브 페이지 상단)
```tsx
<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
  {/* 88px 그리드 패턴 오버레이 */}
  <div aria-hidden className="pointer-events-none absolute inset-0
    bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
    bg-[size:88px_88px]" />
  <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
    <p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">EYEBROW LABEL</p>
    <h1 className="font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">제목</h1>
    <p className="mt-6 max-w-xl text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">부제</p>
  </div>
</section>
```

### 화이트 카드 (직각·보더)
```tsx
<article className="border border-[#E4E2DF] bg-white p-7 md:p-11">…</article>
```
- 그림자 없음. hover 시 `hover:border-[#C8102E]/40` 정도만.

### 라벨-내용 그리드 (문제/전략/실행/결과 등)
```tsx
<div className="grid grid-cols-[64px_1fr] gap-x-5 gap-y-3">
  <span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">문제</span>
  <span className="text-[#333333] text-[14.5px] leading-[1.7]">…내용…</span>
</div>
```

### 메트릭 블록 (큰 숫자)
```tsx
<div>
  <div className="font-extrabold text-3xl tracking-[-0.02em] md:text-4xl">
    +40<span className="ml-0.5 font-bold text-[#C8102E] text-[0.5em]">%</span>
  </div>
  <p className="mt-2 font-mono text-[#767370] text-[11px] tracking-[0.1em]">신규 환자 (3개월)</p>
</div>
```

### 칩/태그
```tsx
<span className="bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs">피부과</span>
<span className="border border-[#C8102E] px-2.5 py-1 font-semibold text-[#C8102E] text-xs">문의 증가</span>
```

### 최종 CTA 섹션 (전 페이지 하단 공통) — `FinalCTA` 컴포넌트 사용
`import { FinalCTA } from "@/components/sections/FinalCTA"` — 페이지 맨 아래 `<FinalCTA />` 한 줄. (자체 CTA 섹션을 새로 만들지 말 것)

### CTA 버튼
```tsx
{/* 주 CTA */}
<Link href="/contact" className="bg-[#C8102E] px-8 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]">병원 마케팅 진단 신청</Link>
{/* 보조 (다크 위) */}
<a className="border border-[#3A3835] px-8 py-4 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]">카카오톡 문의</a>
{/* 보조 (라이트 위) */}
<Link className="border border-[#D9D6D3] px-8 py-4 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]">성공사례 보기</Link>
```

## 레이아웃

- 컨테이너: `mx-auto max-w-7xl px-4 lg:px-8` (본문 좁은 곳 `max-w-3xl`)
- 섹션 패딩: `py-16 md:py-24` (히어로 `py-20 md:py-32`, 최종 CTA `py-24 md:py-40`)
- 섹션 배경 교차: `#FAFAFA` ↔ `#FFFFFF`(bordered) ↔ 드물게 `#0B0B0B`
- 반응형: 모바일 375px 기준 1컬럼, `md:` 2~3컬럼. CTA 버튼은 모바일 풀폭 허용.

## 콘텐츠·카피 규칙

- 단정형("~합니다"), 한 문장 한 의미, `break-keep`.
- **의료광고법 금지**: 무조건 1위 보장 / 매출·환자 폭증 / 효과·치료 보장 / 최고 / 유일 / 무조건 성공 / 100% / 완치.
- **대신**: 문의 전환을 고려한 설계 · 병원별 맞춤 전략 · 검색 접점 강화 · 콘텐츠 기반 신뢰 형성 · 데이터 기반 점검 · 노출 가능성을 고려한 콘텐츠 구조.
- 실제 수치·사례를 지어내지 말 것. 기존 데이터(`src/data/*`)에 있는 것만 인용. 부족하면 "샘플" 표기 또는 구조만.
- 키워드는 자연스럽게: H1/H2/본문/FAQ/카드 제목/CTA 근처/meta에 분산. 나열·반복 금지.

## 신규 페이지 체크리스트 (docs/03 체크리스트에 추가)

- [ ] `export const metadata: Metadata` — title은 `"… | 애드리절트(ADRESULT)"`, description에 페이지 핵심 키워드, `alternates.canonical`
- [ ] `BreadcrumbJsonLd` + 필요시 Service/FAQPage JSON-LD
- [ ] 페이지 맨 아래 `<FinalCTA />`
- [ ] 모션은 `Reveal` 사용 (`delay={i * 0.08}`), 서버 컴포넌트 우선
- [ ] sitemap/nav 등록은 통합 단계에서 일괄 처리 (개별 작업자는 건드리지 말 것)
