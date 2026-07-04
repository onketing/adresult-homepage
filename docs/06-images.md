# 06 — 이미지 자산 맵 (Images & Assets)

애드리절트(ADRESULT) 사이트의 정적 이미지·미디어 자산이 어느 페이지에서 쓰이는지 정리한 단일 출처.
자산 추가·교체 시 이 표를 함께 갱신한다.

---

## 1. 자산 인벤토리 (`public/`)

### 1-1. 루트 (브랜드·메타·영상·다운로드)
| 파일 | 용도 | 참조 위치 |
|------|------|-----------|
| `header-logo.png` (637×138) | 헤더 로고 | `components/shared/Logo.tsx` |
| `footer-logo.png` | 푸터 로고 | `components/layout/Footer.tsx` |
| `title-logo.png` | About 층별 안내 카드 로고 | `app/about/page.tsx` |
| `blog-logo.png` `instagram-logo.png` `kakao-logo.png` `youtube-logo.png` | SNS 아이콘 | Footer, FloatingActions, ceo 페이지 |
| `og-image.png` (1200×630) | OG/트위터 카드 | `config/site.ts`, layout OG |
| `icon-192.png` / `icon-512.png` | PWA·JSON-LD logo | `app/manifest.ts`, layout jsonLd |
| `icon.png` / `apple-icon.png` (`src/app/`) | 파비콘·iOS 아이콘 (애드리절트 aL 마크) | Next.js 아이콘 컨벤션 |
| `favicon.ico` | 파비콘 폴백 | `app/manifest.ts` |
| `home-hero-video.mp4` (+`-poster.jpg`) | 홈 Hero 배경 영상 | `components/sections/Hero.tsx` |
| `ceo/history/people-hero-video.mp4` (+`-poster.jpg`) | 회사소개 하위 페이지 Hero 영상 | `CompanyHero`(각 페이지가 `videoSrc` 전달) |
| `adresult-diagram.png` | 홈 CloseUpManagement 프로세스 다이어그램 | `CloseUpManagement.tsx` |
| `adresult-tmap.png` | 홈 T-Map 파트너 | `TmapPartner.tsx` |
| `exam1-1.gif`~`exam4-1.gif` | 홈 CaseHighlight 사례 그래프 | `CaseHighlight.tsx` |
| `adresult-brochure.pdf` | 회사소개서 다운로드 | Header, AboutMidCTA, StickyCTA |
| `llms.txt` | AEO용 회사 정보 텍스트 | (정적 서빙) |
| `onketing-brochure.pptx` | ⚠️ 레거시 잔재 (코드 미참조) | — |
| `downloads/` | 기타 다운로드 (현재 비어 있음/보조) | — |

### 1-2. `public/images/` 및 페이지별 폴더
| 폴더 | 파일 | 내용 · 사용처 |
|------|------|--------------|
| `images/reviews-video/` | `review-01~06.png` | 원장 영상 후기 세로 썸네일 — 홈 `ReviewVideos`(`data/adresult-reviews.ts`) + `/reviews`(`data/customer-reviews.ts`) |
| `images/cases/{idx}/` | `{n}.{ext}` (27개 사례 폴더) + `_footer/`(cta.jpg·tv.jpg) | 성공사례 본문 이미지 — `/cases/[slug]` (scripts/port-cases.py 생성) |
| `about/` | `about-1~4.jpg`, `about-marketing/seo/contents/study.jpg`, `review-1~11.jpg`, `floor-information.jpg` | `/about` 각 섹션 + `AboutReviewMarquee` |
| `ceo/` | `ceo.jpg`, `book.png` | `/ceo` 인사말·저서 |
| `people/` | `member-1~9.jpg`, `organization.jpg` | `/people` 조직도·구성원(`PeopleExecs`) |
| `history/` | `awards.png` | `/history` 수상 |
| `aio/` | `gemini-search.png`, `gemini-1~5.gif`, `hospital-exposure-1~6.png`, `google-exposure-1~6.png`, `aio-check-1~4`, `aio-exam-1~3.png`, `rate-of-increase.png`, `recommendation.png`, `gemini-search.png` | `/services/aio` (인라인) |
| `shortform/` | `background.png`, `shortform-exam-1~4`, `direct-1.jpg`·`direct-2.gif`, `step2-1~3.png`, `step3-1~4.png`, `step5-1~5.png`, `calendar.png`, `site.png` | `/services/shortform` (인라인) |

---

## 2. 페이지 · 이미지 매핑

### `/` 홈
| 섹션 | 이미지 |
|---|---|
| `Hero` | `home-hero-video.mp4` (+poster) |
| `ReviewVideos` | `images/reviews-video/review-01~06.png` (유튜브 라이트박스) |
| `CaseHighlight` | `exam1-1~exam4-1.gif` |
| `CloseUpManagement` | `adresult-diagram.png` |
| `AdresultYouTube` | 유튜브 CDN 썸네일(i.ytimg.com) — 로컬 자산 없음 |
| `TmapPartner` | `adresult-tmap.png` |
| ExcellentCompany / CustomStrategy / CostBreakdown / ProcessSteps / FinalCTA | (이미지 없음 — 텍스트·차트·아이콘) |

### `/about` · `/ceo` · `/people` · `/history`
공통: `CompanyHero`가 각 페이지 hero 영상(`home`/`ceo`/`people`/`history`-hero-video.mp4) 사용.
- `/about`: `about/*`, `title-logo.png`, `AboutReviewMarquee`(`about/review-1~11.jpg`)
- `/ceo`: `ceo/ceo.jpg`, `ceo/book.png`, `youtube-logo.png`
- `/people`: `people/organization.jpg`, `people/member-1~9.jpg`
- `/history`: `history/awards.png`

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
