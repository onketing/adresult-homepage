# 06 — 이미지 자산 맵 (Images & Assets)

애드리절트(ADRESULT) 사이트의 정적 이미지·미디어 자산이 어느 페이지에서 쓰이는지 정리한 단일 출처.
자산 추가·교체 시 이 표를 함께 갱신한다.

---

## 0. 이미지 규격 — 먼저 읽는다 (2026-09-22)

**`next.config.ts` 가 `images.unoptimized: true` 다.** Vercel 이미지 최적화를 쓰지 않는다
(팀 Hobby 플랜의 캐시 쓰기 한도 100,000건이 소진됐다 — 배경은 `next.config.ts` 주석).
런타임 리사이즈가 없으므로 **넣는 파일이 곧 전송되는 파일**이다.

| 항목 | 규칙 |
|---|---|
| 포맷 | `.webp` — jpg q82 · png/gif 는 무손실과 q90(gif q80) 중 작은 쪽. gif 는 애니메이션 유지 |
| 크기 | 가로 상한: 게시판·사례 본문 1440px(표시 최대 960px) · 그 외 1920px. 세로는 줄이지 않는다 |
| 예외 | `og-image.png` · `icon-192/512.png` · `apple-icon.png` 는 png 유지(크롤러·PWA용) |

`unoptimized` 는 `srcset` 을 만들지 않는다. 그래서 **flex 줄 안에서 폭이 이미지 고유 크기로 정해지는 곳은
폭을 명시**해야 한다(`/services/shortform` step2·step3 — `w-[45%]` + `max-w`). 명시하지 않으면 원본 픽셀
폭으로 커져 모바일에서 가로 스크롤이 생긴다.

⚠️ `scripts/port-cases.py` · `scripts/port-boards.py` 는 아직 원본 확장자(png·jpg·gif)로 내려받고 데이터를
생성한다. 다시 돌리면 webp 로 재변환하고 데이터 경로도 바꿔야 한다.

---

## 1. 자산 인벤토리 (`public/`)

### 1-1. 루트 (브랜드·메타·영상·다운로드)
| 파일 | 용도 | 참조 위치 |
|------|------|-----------|
| `header-logo.png` (637×138) | 헤더 로고 | `components/shared/Logo.tsx` |
| `footer-logo.png` | 푸터 로고 | `components/layout/Footer.tsx` |
| `title-logo.webp` | About 층별 안내 카드 로고 | `app/about/page.tsx` |
| `blog-logo.webp` `instagram-logo.webp` `kakao-logo.webp` `youtube-logo.webp` | SNS 아이콘 | Footer, FloatingActions, ceo 페이지 |
| `og-image.png` (1200×630) | OG/트위터 카드 | `config/site.ts`, layout OG |
| `icon-192.png` / `icon-512.png` | PWA·JSON-LD logo | `app/manifest.ts`, layout jsonLd |
| `icon.png` / `apple-icon.png` (`src/app/`) | 파비콘·iOS 아이콘 (애드리절트 aL 마크) | Next.js 아이콘 컨벤션 |
| `favicon.ico` | 파비콘 폴백 | `app/manifest.ts` |
| `home-hero-video.mp4` (+`-poster.webp`) | 홈 Hero 배경 영상 | `components/sections/Hero.tsx` |
| `ceo/history/people-hero-video.mp4` (+`-poster.webp`) | 회사소개 하위 페이지 Hero 영상 | `CompanyHero`(각 페이지가 `videoSrc` 전달) |
| `adresult-diagram.webp` | 홈 CloseUpManagement 프로세스 다이어그램 | `CloseUpManagement.tsx` |
| `adresult-tmap.webp` | 홈 T-Map 파트너 | `TmapPartner.tsx` |
| `exam1-1.webp`~`exam4-1.webp` | 홈 CaseHighlight 사례 그래프 | `CaseHighlight.tsx` |
| `adresult-brochure.pdf` | 회사소개서 다운로드 | Header, AboutMidCTA, StickyCTA |
| `llms.txt` | AEO용 회사 정보 텍스트 | (정적 서빙) |
| `onketing-brochure.pptx` | ⚠️ 레거시 잔재 (코드 미참조) | — |
| `downloads/` | 기타 다운로드 (현재 비어 있음/보조) | — |

### 1-2. `public/images/` 및 페이지별 폴더
| 폴더 | 파일 | 내용 · 사용처 |
|------|------|--------------|
| `images/reviews-video/` | `review-01~06.webp` | 원장 영상 후기 세로 썸네일 — 홈 `ReviewVideos`(`data/adresult-reviews.ts`) + `/reviews`(`data/customer-reviews.ts`) |
| `images/cases/{idx}/` | `{n}.{ext}` (27개 사례 폴더) + `_footer/`(cta.webp·tv.webp) | 성공사례 본문 이미지 — `/cases/[slug]` (scripts/port-cases.py 생성) |
| `about/` | `about-1~4.webp`, `about-marketing/seo/contents/study.webp`, `review-1~11.webp`, `floor-information.webp` | `/about` 각 섹션 + `AboutReviewMarquee` |
| `ceo/` | `ceo.webp`, `book.webp` | `/ceo` 인사말·저서 |
| `people/` | `member-1~9.webp`, `organization.webp` | `/people` 조직도·구성원(`PeopleExecs`) |
| `history/` | `awards.webp` | `/history` 수상 |
| `aio/` | `gemini-search.webp`, `gemini-1~5.webp`, `hospital-exposure-1~6.webp`, `google-exposure-1~6.webp`, `aio-check-1~4`, `aio-exam-1~3.webp`, `rate-of-increase.webp`, `recommendation.webp`, `gemini-search.webp` | `/services/aio` (인라인) |
| `shortform/` | `background.webp`, `shortform-exam-1~4`, `direct-1.webp`·`direct-2.webp`, `step2-1~3.webp`, `step3-1~4.webp`, `step5-1~5.webp`, `calendar.webp`, `site.webp` | `/services/shortform` (인라인) |

---

## 2. 페이지 · 이미지 매핑

### `/` 홈
| 섹션 | 이미지 |
|---|---|
| `Hero` | `home-hero-video.mp4` (+poster) |
| `ReviewVideos` | `images/reviews-video/review-01~06.webp` (유튜브 라이트박스) |
| `CaseHighlight` | `exam1-1~exam4-1.webp` |
| `CloseUpManagement` | `adresult-diagram.webp` |
| `AdresultYouTube` | 유튜브 CDN 썸네일(i.ytimg.com) — 로컬 자산 없음 |
| `TmapPartner` | `adresult-tmap.webp` |
| ExcellentCompany / CustomStrategy / CostBreakdown / ProcessSteps / FinalCTA | (이미지 없음 — 텍스트·차트·아이콘) |

### `/about` · `/ceo` · `/people` · `/history`
공통: `CompanyHero`가 각 페이지 hero 영상(`home`/`ceo`/`people`/`history`-hero-video.mp4) 사용.
- `/about`: `about/*`, `title-logo.webp`, `AboutReviewMarquee`(`about/review-1~11.webp`)
- `/ceo`: `ceo/ceo.webp`, `ceo/book.webp`, `youtube-logo.webp`
- `/people`: `people/organization.webp`, `people/member-1~9.webp`
- `/history`: `history/awards.webp`

### `/services/aio`
`aio/*` (gemini 검색·gif, hospital-exposure, google-exposure, aio-check, rate-of-increase, recommendation) + AIRANK 유튜브 임베드.

### `/services/shortform`
`shortform/*` (background, shortform-exam, direct, step2/step3/step5, calendar, site).

### `/specialty/[slug]`
로컬 이미지 없음 — 텍스트·아이콘(lucide) 중심.

### `/cases` · `/cases/[slug]`
- 목록 카드 썸네일: 각 사례의 cover(본문 이미지)
- 상세 본문: `images/cases/{idx}/{n}.{ext}` + 하단 공통 CTA `images/cases/_footer/`

### `/reviews`
`images/reviews-video/review-*.png` (카드 썸네일).

### `/regulation` · `/faq`
이미지 없음 — 표·차트·아이콘·도장 비주얼(CSS).

---

## 3. 교체·추가 가이드

- **성공사례 이미지**: `scripts/port-cases.py`가 원문에서 자동 다운로드 → `images/cases/{idx}/`. (08-case-porting.md)
- **고객후기 썸네일**: `images/reviews-video/`에 추가 후 `data/customer-reviews.ts`·`data/adresult-reviews.ts`에서 참조.
- **AIO/숏폼 이미지**: `public/aio/`·`public/shortform/`에 넣고 해당 `page.tsx` 인라인 `src`에서 참조.
- **AboutMidCTA 배경 사진**: `public/images/about/desk.jpg` 준비 후 `AboutMidCTA.tsx`의 `DESK_PHOTO_READY`를 `true`로 (현재 `false` — 미렌더).
- 한글 파일명은 URL 인코딩 이슈가 있어 **ASCII 파일명** 사용.
