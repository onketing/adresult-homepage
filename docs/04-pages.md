# 04 — Pages Reference

애드리절트(ADRESULT) 병원마케팅 사이트의 각 페이지 섹션 순서·주요 카피·메타·JSON-LD·데이터 출처를 정리한다.

**표기 규칙**
- 카피는 코드 문자열 그대로 (verbatim). `\n`/`<br />` = 줄바꿈.
- *(highlight: "…")* = 레드 강조 span (`text-[#ef3c39]` 또는 `text-[#e11d29]`).
- `{siteConfig.xxx}` = 런타임 주입값. `[DATA: path]` = 데이터 파일 출처.
- 서비스·진료과 페이지는 **인라인 JSX**가 많아 별도 섹션 컴포넌트로 분리돼 있지 않다.

## 라우트 트리

```
/                       홈
/about /history /ceo /people   회사소개 (CompanyHero + CompanyTabs 공유)
/services/aio           병원 AIO·AI검색(GEO) 마케팅
/services/shortform     끝장숏폼 (숏폼·릴스·쇼츠 올인원)
/specialty/[slug]       진료과 랜딩 6종 (SSG)
/cases                  성공사례 목록
/cases/[slug]           성공사례 상세 27편 (SSG)
/cases/create           관리자 케이스 에디터 (robots noindex)
/reviews                고객후기
/regulation             의료광고 규정 가이드
/faq                    자주 묻는 질문
(/contact → 외부 Tally 폼으로 302 리다이렉트, 실제 라우트 없음)
(기타: sitemap.ts, robots.ts, manifest.ts, icon.png, apple-icon.png)
```

전역: RootLayout이 Header · Footer · StickyCTA · FloatingActions · PageTransition · Organization/WebSite JSON-LD · GA4를 마운트.

---

## / — 홈

**metadata:** `title: "병원마케팅 애드리절트(ADRESULT) | 결과로 말하는 광고회사"`
**JSON-LD:** 페이지 자체 `homeFaqSchema`(FAQPage, Q&A 5개: 회사 소개 / 비용 / 계약 기간 / 의료광고법 / 효과).

**섹션 순서:**
Hero → ExcellentCompany → ReviewVideos → CustomStrategy → CaseHighlight → CostBreakdown → CloseUpManagement → AdresultYouTube → ProcessSteps → TmapPartner → FinalCTA

| # | 섹션 (file) | bg | 카피·데이터·이미지 |
|---|---|---|---|
| 1 | `Hero` | `#0b1220` (영상 배경) | h1 `"결과로 말하는 광고회사 / 애드리절트 ADRESULT"`. 배경 영상 `home-hero-video.mp4`(+poster), 소리 토글, 스크롤 인디케이터 |
| 2 | `ExcellentCompany` | white | eyebrow `Excellent Company`, 리드 `"병원마케팅, 어디서 해요?"`, h2 `"잘 나가는 병원은 애드리절트에서 병원마케팅합니다."`, 스탯 4카드 CountUp `[DATA: kpi-showcase.ts]` (132개월/200+/1,272곳/3,800+) |
| 3 | `ReviewVideos` | white | h2 `"애드리절트 고객사 의사들의 리얼 병원마케팅 후기"`. Marquee 캐러셀 `[DATA: adresult-reviews.ts → ADRESULT_REVIEWS]`, 유튜브 영상 라이트박스, 썸네일 `images/reviews-video/review-*.png` |
| 4 | `CustomStrategy` | `#e11d29` (레드) | 손글씨(`--font-hand`) 강조 + h2 `"… 맞춤 전략을 제시 합니다"`. Win-Win 전략 서술 |
| 5 | `CaseHighlight` | slate-50 | h2 `"실제 병원마케팅 결과입니다."`. CountUp 바 차트 `[DATA: case-highlight.ts → CASE_HIGHLIGHTS(2) + CASE_HIGHLIGHTS_SINGLE(1)]` (U의원 40%↑ · D의원 20%↑ · B의원 333%↑) |
| 6 | `CostBreakdown` | white | eyebrow `Customization Strategies`, h2 `"같은 비용이어도 병원마케팅 상품 구성이 달라집니다!"`. 비용 구성 비교 (인라인 데이터) |
| 7 | `CloseUpManagement` | white | eyebrow `Close-up Management`, 리드 `"애드리절트는 결과에 집착합니다."`, h2 `"결과로 말하는 병원마케팅"`. 이미지 `adresult-diagram.png` |
| 8 | `AdresultYouTube` | white | eyebrow `ADRESULT YOUTUBE`, h2 `"우리는 당신의 마지막 병원마케팅 회사입니다."`. 유튜브 그리드 + 대표 영상 임베드 `[DATA: adresult-youtube.ts]`, 채널 링크 |
| 9 | `ProcessSteps` | slate-50 | eyebrow `진행방식`, h2 `"이렇게 진행합니다."`. 4단계 `[DATA: process-steps.ts → PROCESS_STEPS]` (마케팅 상담 → 병원 맞춤 전략 → 콘텐츠 발행 → 성과 점검) |
| 10 | `TmapPartner` | white | h2 `"애드리절트는 T-Map 공식 파트너사입니다."`. 이미지 `adresult-tmap.png` |
| 11 | `FinalCTA` | `#140505` (다크) | eyebrow `문의하기`, h2 `"잘나가는 병원은, 애드리절트에서 합니다."`. 버튼: 문의하기(`/contact`) + 카카오톡(`{siteConfig.contact.kakaoOpenChat}`) |

---

## /about — 회사소개

**metadata:** `title: "회사소개 | 애드리절트(ADRESULT)"` · BreadcrumbJsonLd
**섹션 순서:** CompanyHero → CompanyTabs → 다음 인라인 섹션들

| 섹션 | bg | 카피·이미지 |
|---|---|---|
| Intro | white | eyebrow `Introduce ADRESULT` — 회사 소개 블록 (이미지 `about/about-*.jpg`, `AboutOperator` +/= 애니메이션 포함) |
| Know-how | white | eyebrow `ADRESULT Marketing Know-how` — 마케팅 노하우 카드(`about/about-marketing.jpg`·`about-seo.jpg`·`about-contents.jpg`·`about-study.jpg`) |
| Customized Strategy | white | eyebrow `Customized Strategy` — 원형 스텝 플로우 |
| Customer Review | white | eyebrow `Customer Review`, h2 `"애드리절트의 병원마케팅 실력"` → `AboutReviewMarquee`(`about/review-1~11.jpg` 롤링) |
| Floor Information | white | eyebrow `Floor Information`, h2 `"애드리절트 층별 안내"` (`title-logo.png` + 주소, `floor-information.jpg`) |
| 참고 note | white | `"참고해주세요!"` 안내 |

**서브 컴포넌트:** `AboutOperator`(Plus/Equal 아이콘 모션), `AboutReviewMarquee`(리뷰 이미지 마퀴).

---

## /history — 연혁·수상

**metadata:** `title: "연혁·수상 | 애드리절트(ADRESULT)"`
**섹션:** CompanyHero(`history-hero-video.mp4`) → CompanyTabs → 수상(white, eyebrow `Excellent Company`, h2 `"대외적으로 인정받은 우수기업"`, 이미지 `history/awards.png`) → 연혁 타임라인(레드 `#e11d29`, eyebrow `ADRESULT History`, h2 `"애드리절트 연혁"`, 인라인 타임라인 데이터).

---

## /ceo — CEO 인사말

**metadata:** `title: "CEO 인사말 | 애드리절트(ADRESULT)"`
**섹션:** CompanyHero(`ceo-hero-video.mp4`) → CompanyTabs → 인사말(white, 좌 사진 `ceo/ceo.jpg` + 우 eyebrow `CEO's Greeting` / h2 `"CEO 인사말"`) → 레드 밴드(`#e11d29`, 유튜브 링크 버튼 `youtube-logo.png`) → CEO 저서(white, eyebrow `CEO's Book`, h2 `"마케팅 때문에 고민입니다"`, 이미지 `ceo/book.png`) → slate-50 마무리 섹션.

---

## /people — 조직도·구성원

**metadata:** `title: "조직도·구성원 | 애드리절트(ADRESULT)"`
**섹션:** CompanyHero(`people-hero-video.mp4`) → CompanyTabs → 조직도(white, eyebrow `Organization Chart`, h2 `"애드리절트 조직도"`, 이미지 `people/organization.jpg`) → `PeopleExecs`(eyebrow `ADRESULT People`, h2 `"임원진"`, 구성원 9명 카드 `people/member-1~9.jpg`, 인라인 데이터).

---

## /services/aio — 병원 AIO·AI검색(GEO) 마케팅

**metadata:** `title: "병원 AIO마케팅·AI 검색 노출(GEO) | 애드리절트(ADRESULT)"`, `canonical: /services/aio`, 키워드 다수.
**JSON-LD:** BreadcrumbJsonLd (홈 → 마케팅(/services/aio) → …).

**섹션(인라인, 약 15개):**
1. HERO (white, 2컬럼) — eyebrow `AIO 마케팅`, 리드 `"우리 병원이 AI에 안뜨나요?"` + 대형 `"AIO마케팅이면 해결!"`(레드), h2 `"AI가 우리 병원을 추천하게 하려면?"`. 이미지 `aio/gemini-search.png`
2. 대표 사례 선언 밴드 (slate-50)
3. 세미나 개최 (레드 `#e11d29`, 강조 `#ffe14d`)
4~5. BEST CASE gif + 고객사 AI 노출 사례 (slate-50) — `aio/gemini-1~5.gif`
6. AI 추천 → 문의 연결 (white) — `aio/recommendation.png` + 전화 CTA(`#ffe14d`)
7. AI검색 유입 증가율 (레드) — `aio/rate-of-increase.png`
8. AIO 병원 사례 3카드 (white) — `aio/hospital-exposure-1~6.png`
9. 구글·네이버 노출 시너지 (slate-50) — `aio/google-exposure-1~6.png`
10. 노출 비보장 고지 + 전화 CTA (white)
11. `"혹시.."` 밴드 (레드)
12. AIRANK 유튜브 임베드 (white)
13. AIRANK 기능 4가지 (white) — `aio/aio-check-1~4`
14. AI 마케팅 지금 시작 (레드)
15. AIO 마케팅 진행절차 (white) — eyebrow `ADRESULT Marketing Process`, h2 `"AIO 마케팅 진행절차"` (인라인 `AIO_PROCESS`)

이미지 자산: `public/aio/*` (gemini/hospital-exposure/google-exposure/aio-check/aio-exam/rate-of-increase/recommendation 등).

---

## /services/shortform — 끝장숏폼

**metadata:** `title: "병원 숏폼·릴스·쇼츠 마케팅 끝장숏폼 | 애드리절트(ADRESULT)"`, `canonical: /services/shortform`.
**JSON-LD:** `shortformServiceSchema`(Service) + BreadcrumbJsonLd(홈 → 마케팅(/services/aio) → …).

**섹션(인라인, 약 14개):**
1. HERO (white, 2컬럼) — eyebrow `숏폼올인원마케팅 끝장숏폼`, h1 `"조회수에서 끝나는 영상이 아닌 / 예약을 만드는 숏폼"`, h2 `"영상은 쌓이는데, 왜 환자는 늘지 않을까요?"`. 이미지 `shortform/background.png`, PAIN_QUOTES 인라인
2. 문제는 영상만 (레드) — PROBLEM_STEPS `["기획없이 찍고","편집해서 올리고","조회수만 기다리는 구조"]`
3. 전환 중심 숏폼 기획 4컷 (white) — `shortform/shortform-exam-1~4`
4. 01 현직 인플루언서 (white) — `shortform/direct-1.jpg`·`direct-2.gif`
5. VS 접근 자체가 다릅니다 (레드) — 일반(편집/업로드/조회수) vs 끝장(후킹/행동유도/전환)
6. 02 전환구조 + 스토리 연동 (slate-50) — `shortform/step2-1~3.png`
7. 03 검색+알고리즘 바이럴 (white) — `shortform/step3-1~4.png`, YT/IG 칩
8. 04 진료과목별 콘텐츠 + 유입 퍼널 (레드) — SPECIALTY/FUNNEL 인라인
9. 05 브랜딩+전환 채널 통합 (white) — `shortform/step5-1~5.png`, CHANNELS
10. 신뢰형성 퍼널 (레드)
11. 예약 마감 캘린더 (white) — `shortform/calendar.png`
12. 채널 성장 흐름 (white) — GROWTH
13. 월 최대 3곳 (레드)
14. 촬영 현장 (white) — `shortform/site.png` + `"T/O 마감 시 추가 접수 불가"` 고지

이미지 자산: `public/shortform/*`.

---

## /specialty/[slug] — 진료과 랜딩 (SSG)

**데이터:** `[DATA: specialties.ts → SPECIALTIES]` 6종 — `dermatology`(피부과) · `plastic-surgery`(성형외과) · `orthopedics`(정형외과) · `pain-medicine`(통증의학과) · `dentistry`(치과) · `oriental-medicine`(한의원).
**generateStaticParams:** `SPECIALTY_SLUGS`. **generateMetadata:** `s.metaTitle` / `s.metaDescription` / `s.keywords` / `canonical: /specialty/{slug}`.
**JSON-LD:** `Service`(provider 애드리절트) + BreadcrumbJsonLd(홈 → 마케팅 → `{name} 마케팅`).

**섹션(공통 템플릿, `{name}`/`{heroSub}`/`{psych}`/`{pains}` 주입):**
1. HERO (white) — eyebrow `"{name} 병원마케팅"`, h1 `"{name} 신환은 검색·AI·숏폼으로 만듭니다"`, sub `{s.heroSub}`, 전화 + 카카오 CTA
2. PAIN (레드 `#e11d29`) — `"환자 심리: {psych}"`, h2 `"{name} 원장님, 이런 고민 있으신가요?"`, `{pains}` 카드
3. APPROACH (white) — eyebrow `How we do`, h2 `"{name} 맞춤 병원마케팅, 애드리절트는 이렇게 합니다"`. AIO(`/services/aio`) + 끝장숏폼(`/services/shortform`) 카드
4. 다른 진료과 내부 링크 (slate-50)
5. CTA 밴드 (레드) — h2 `"{name} 신환, 지금 애드리절트와 시작하세요"`, 전화 CTA(`#ffe14d`)

---

## /cases — 성공사례 목록

**metadata:** `title: "병원마케팅 성공사례 | 애드리절트(ADRESULT)"` · BreadcrumbJsonLd(홈 → 고객사례 → 성공사례)
**본문:** eyebrow(레드) + h1 + `<PaginatedCards items={SUCCESS_CASES} />` (9개씩, `?page=N`). `[DATA: success-cases.ts → SUCCESS_CASES]` (27편, `scripts/port-cases.py`로 생성 — 08-case-porting.md 참고).

## /cases/[slug] — 성공사례 상세 (SSG)

**generateStaticParams:** `CASE_ARTICLES`. **generateMetadata:** `title: "{a.title} | 애드리절트(ADRESULT)"`, `description: a.summary || a.excerpt`, `canonical`.
**JSON-LD:** `Article` + (있으면) `FAQPage` + BreadcrumbJsonLd.
**본문:** 제목 → 리드 콜아웃(`summary`, 레드 좌측 보더) → blocks 렌더(텍스트/이미지/영상/hr/callout) → FAQ 섹션(`a.faq`) → 이전/다음 글 네비 → 공통 CTA. `.case-preview` 타이포그래피. 컨테이너 `max-w-5xl`.

## /cases/create — 관리자 케이스 에디터

**metadata:** `robots: { index: false, follow: false }`. `CaseEditorGate`(비밀번호 클라이언트 상수 비교 — 실보안 아님) → 통과 시 `CaseEditor`(Tiptap 리치 에디터). robots.ts에서도 `/cases/create` disallow.

---

## /reviews — 고객후기

**metadata:** `title: "병원마케팅 고객후기 | 애드리절트(ADRESULT)"` · BreadcrumbJsonLd(홈 → 고객사례 → 고객후기)
**본문:** eyebrow(레드) + sub `"애드리절트 고객후기입니다."` + h1 + `<PaginatedCards items={CUSTOMER_REVIEWS} />`. `[DATA: customer-reviews.ts → CUSTOMER_REVIEWS]` (원장 영상 후기 텍스트화, 썸네일 `images/reviews-video/review-*.png`).

---

## /regulation — 의료광고 규정 가이드

**metadata:** `title: "의료광고 규정 가이드 | 애드리절트"`
**JSON-LD:** `regulationSchema`(WebPage) + BreadcrumbJsonLd.
**섹션 순서:** RegulationHero → RegulationStats → RegulationLawSwitcher → RegulationBeforeAfter → RegulationChecklist → RegulationPledge → AboutMidCTA

| 섹션 | bg | 내용 |
|---|---|---|
| `RegulationHero` | `#3a0509` (딥 레드, min-h-screen) | eyebrow(영문) + h1 + 도장 문서 비주얼 (위반/통과/보완) |
| `RegulationStats` | `#0d0202` (다크) | 3스탯 CountUp `[DATA: regulation-stats.ts → REGULATION_STATS, TREND_DATA]` (366건 / 60% / 5천만원) + 트렌드 차트 |
| `RegulationLawSwitcher` | white | 진료과 탭 + 허용/금지 표현 `[DATA: regulations.ts → REGULATIONS]` (피부과·성형외과·정형외과·치과·한의원 등, 의료법 §56) |
| `RegulationBeforeAfter` | white | eyebrow(레드) + before/after 카드 `[DATA: regulation-cases.ts → REGULATION_CASES]` |
| `RegulationChecklist` | white | 발행 전 체크리스트 (인라인) |
| `RegulationPledge` | `#3a0509` | 애드리절트 약속 리스트 |
| `AboutMidCTA` | `#3a0509` | 공통 다크 CTA (문의/카카오/소개서) |

---

## /faq — 자주 묻는 질문

**metadata:** `title: "병원마케팅 자주 묻는 질문(FAQ) | 애드리절트(ADRESULT)"`
**JSON-LD:** `faqSchema`(FAQPage, `[DATA: faq.ts → FAQ_ITEMS]`) + BreadcrumbJsonLd.
**섹션 순서:** FaqHero → FaqSpotlight → FaqDirectory → FAQContact

| 섹션 | bg | 내용 |
|---|---|---|
| `FaqHero` | `#fafbfc` (min-h-screen, orb) | 히어로 + 카테고리 칩 |
| `FaqSpotlight` | slate-50 | `featured: true` 항목(5개) 스포트라이트 |
| `FaqDirectory` | white | 카테고리별 그룹 아코디언 + sticky 사이드바. `[DATA: faq.ts → FAQ_ITEMS(25), FAQ_CATEGORIES(6): 비용·진행 안내·광고규정·운영보고·성과·해지환불]` |
| `FAQContact` | slate-50 | eyebrow(레드) + h2 `"답을 못 찾으셨나요?"` — 카카오/전화/이메일/문의 타일 |

---

## 데이터 파일 색인

| 파일 | Export | 사용처 |
|------|--------|--------|
| `kpi-showcase.ts` | `KPI_SHOWCASE` | 홈 ExcellentCompany |
| `adresult-reviews.ts` | `ADRESULT_REVIEWS` | 홈 ReviewVideos |
| `adresult-youtube.ts` | `ADRESULT_YOUTUBE_CHANNEL`, `ADRESULT_FEATURED_VIDEO`, `ADRESULT_VIDEOS` | 홈 AdresultYouTube |
| `case-highlight.ts` | `CASE_HIGHLIGHTS`, `CASE_HIGHLIGHTS_SINGLE` | 홈 CaseHighlight |
| `process-steps.ts` | `PROCESS_STEPS` | 홈 ProcessSteps |
| `specialties.ts` | `SPECIALTIES`, `SPECIALTY_SLUGS`, `getSpecialty` | /specialty/[slug], sitemap |
| `success-cases.ts` | `CASE_ARTICLES`, `SUCCESS_CASES`, `getCase` | /cases, /cases/[slug], sitemap |
| `customer-reviews.ts` | `CUSTOMER_REVIEWS` | /reviews |
| `regulations.ts` | `REGULATIONS` | RegulationLawSwitcher |
| `regulation-stats.ts` | `REGULATION_STATS`, `TREND_DATA` | RegulationStats |
| `regulation-cases.ts` | `REGULATION_CASES` | RegulationBeforeAfter |
| `faq.ts` | `FAQ_ITEMS`, `FAQ_CATEGORIES` | /faq (+ 홈은 자체 FAQPage 스키마) |
| `src/config/site.ts` | `siteConfig` | 전 페이지 (연락처·메타·nav) |

> `/services/aio`·`/services/shortform`·`/specialty/[slug]` 및 대부분의 회사소개 섹션은 데이터를 **페이지/컴포넌트 파일 내 인라인 상수**로 둔다.
