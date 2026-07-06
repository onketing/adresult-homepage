# 10 — 2026 리뉴얼 산출물 · 배포 체크리스트

2026-07 리뉴얼(디자인 전면 교체 + 신규 페이지 6종 + 키워드 반영) 결과 정리. 디자인 규칙은 `09-redesign.md` 참고.

## 1. 전체 사이트맵 (라우트)

| 경로 | 내용 | 상태 |
|---|---|---|
| `/` | 메인 — 통합 노출 패키지 메시지 + 시장 변화 + 기존 섹션 | 리뉴얼 |
| `/about` `/history` `/ceo` `/people` | 회사소개 4종 | 팔레트 교체 |
| `/services/aio` | AIO 마케팅 | 키워드·카피 보강 |
| `/services/shortform` | 끝장숏폼 | 키워드·카피 보강 |
| `/services/threads` | **스레드 마케팅 (신규)** | 신규 |
| `/services/cafe-viral` | **카페바이럴 (신규)** | 신규 |
| `/specialty/{6종}` | 진료과 랜딩 (피부과는 강화 랜딩) | 보강 |
| `/cases` | **필터형 케이스 스터디 허브 (첨부 디자인 재현)** | 리뉴얼 |
| `/cases/{27편}` | 성공사례 원문 상세 | 유지 |
| `/reviews` | 고객후기 | 팔레트 교체 |
| `/insights` | **병원마케팅 인사이트 허브 (신규)** | 신규 (샘플 카드) |
| `/regulation` `/faq` | 규정·FAQ | 팔레트 교체 |
| `/contact` | **병원 마케팅 진단 신청 (신규 — Tally 리다이렉트 제거)** | 신규 |

## 2. 키워드 → 페이지 매핑 (전수 검증: 누락 0)

- 메인: 병원마케팅회사·대행사·업체·전문업체 / 병원온라인마케팅 / 병원광고회사 / 병원홍보대행사 / 병원신규환자마케팅 / 병원마케팅성공사례·비용 / 병원 신규환자 통합 노출 패키지
- AIO: 병원AIO마케팅 / 병원AI검색마케팅 / 병원GEO마케팅 / 병원AI노출마케팅 + 진료과별 AIO·AI검색 키워드 13종
- 숏폼: 병원숏폼·릴스·쇼츠·틱톡·인스타·유튜브쇼츠·영상·SNS마케팅 / 병원숏폼제작업체 + 진료과별 숏폼 키워드 21종
- 카페바이럴: 병원카페바이럴 / 병원바이럴마케팅 / 병원카페마케팅 / 병원후기바이럴 / 병원맘카페마케팅 / 피부과·성형외과카페바이럴
- 스레드: 병원스레드마케팅 / 병원스레드광고 / 피부과스레드마케팅 / 원장님 브랜딩 / 전문가 채널 / 하루 2회 발행 / 하루 20회 댓글
- 진료과 6종: 각 specialty 페이지 metadata + 본문 (교통사고한의원·다이어트한의원·한방병원·통증의학과 포함)

검증 스크립트: 빌드 후 `.next/server/app/*.html` 전수 매칭 (공백 무시). 최종 결과 누락 0건.

## 3. 기존 사이트에서 가져와 유지한 콘텐츠

- 성공사례 27편 원문(수치 포함), 고객 영상 후기, KPI(11년·1,272곳·132개월·3,800개), CEO·조직·연혁·수상, 의료광고 규정 데이터, FAQ 25문항, T-Map 파트너, 유튜브 채널
- `/cases` 허브의 케이스 19건은 전부 **원문 27편 + 기존 case-highlight 데이터에서 추출한 실제 수치**로 작성 (`src/data/case-studies.ts`) — 창작 수치 없음

## 4. 새로 만든 데이터/컴포넌트 (수정 위치)

| 수정하고 싶은 것 | 파일 |
|---|---|
| 케이스 허브 카드 | `src/data/case-studies.ts` |
| 인사이트 글 추가 | `src/data/insights.ts` (파일 상단 주석에 추가 방법) |
| 진단 신청 폼 항목 | `src/components/sections/DiagnosisForm.tsx` |
| 메인 시장변화/패키지 섹션 | `src/components/sections/MarketShift.tsx` / `PackageSection.tsx` |
| 공용 최종 CTA | `src/components/sections/FinalCTA.tsx` |
| 필터 보드 | `CaseStudyBoard.tsx` / `InsightsBoard.tsx` |

## 5. 사용자가 직접 채워야 할 것 (TODO)

1. **문의 폼 백엔드**: 현재 제출 시 메일 클라이언트(mailto) + 내용 복사 방식. Tally(기존 `https://tally.so/r/gDQkzJ`)나 Formspree 연동 권장 — `DiagnosisForm.tsx` 상단 TODO 주석 참고
2. **인사이트 실제 칼럼**: 현재 전부 "샘플" 배지. 실제 글 발행 시 `/insights/[slug]` 상세 라우트 구현 필요
3. **회사소개서 PDF**: 새 디자인에 맞춘 리뉴얼 검토 (`public/adresult-brochure.pdf`)
4. **케이스 허브 수치 검수**: `case-studies.ts` 요약이 원문과 일치하는지 대표님 최종 확인
5. **OG 이미지**: `public/og-image.png` 를 새 디자인 톤으로 교체 검토
6. **홈 히어로 영상**: 유지 중 — 새 톤에 맞는 영상으로 교체 가능
7. **GA4**: `NEXT_PUBLIC_GA_ID` 환경변수 설정 시 자동 활성화

## 6. 검증 결과

- `pnpm lint` ✅ (허용된 CostBreakdown 경고 1건만) · `pnpm check-types` ✅ · `pnpm build` ✅ (전 페이지 SSG)
- 키워드 누락 0건 (섹션 2 스크립트)
- 의료광고법 금지 표현 스캔 ✅ ("보장하지 않습니다" 등 선언 맥락만 존재)
- 모바일: 하단 고정 CTA 바(StickyCTA) 전 페이지 노출, 히어로 모바일 전용 CTA 3종
- SEO: 전 신규 페이지 metadata(title/description/keywords/canonical) + Service/FAQPage/Breadcrumb JSON-LD, sitemap 4개 라우트 추가(총 48 URL), llms.txt 갱신

## 7. 배포 전 체크리스트

- [ ] `pnpm build && pnpm start` 로컬 최종 확인 (모바일 375px 포함)
- [ ] 문의 폼 백엔드 연동 (또는 mailto 방식 유지 결정)
- [ ] Vercel 환경변수: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`
- [ ] 도메인 연결 후 Search Console/네이버 서치어드바이저 sitemap 재제출
- [ ] `next.config.ts` 이미지 remotePatterns 좁히기 (기존 TODO)
- [ ] og-image·브로슈어 새 디자인 교체

## 8. 유지보수 방법 (비개발자용)

1. 수정 후 항상: `pnpm lint:fix && pnpm check-types && pnpm build`
2. 텍스트 수정: 대부분 `src/data/*.ts` 또는 각 `page.tsx` 상단의 상수 배열
3. 성공사례 추가: `docs/08-case-porting.md` 절차 + `case-studies.ts`에 요약 카드 1건 추가
4. 새 페이지 추가: `docs/09-redesign.md` 디자인 규칙 + `docs/03-components.md` 체크리스트
5. 색상 변경 금지 목록: `#C8102E`(포인트) / `#0B0B0B`(다크) / `#FAFAFA`(배경) — 일관성 유지

---

# 2026-07-05 v3 — 애드리절트 마포지사 확장 (총 82 URL)

## 추가된 라우트 (v2 대비 +34)
- 지사: /branch, /branch/director, /branch/philosophy, /branch/process
- 서비스 +4: /services/blog, /services/homepage-content, /services/place-review, /services/integrated (데이터: src/data/services-extra.ts)
- 상황별 4: /situations/{new-opening,agency-change,local-competition,high-competition} (src/data/situations.ts)
- 키워드 가이드 19: /guide + /guide/{18종} (src/data/guides.ts)
- 진료과 +3: /specialty/{obgyn,pediatrics,internal-medicine} (specialties.ts 9종)
- 인사이트 25편(insights.ts), FAQ 39개·12카테고리(faq.ts + types)

## 하룹(haroop.com) 대비
하룹: 서비스 7종·성공사례 15+·추정 50~80페이지(블로그 포함). 본 사이트: 콘텐츠 라우트 82 URL(사례 원문 27편 포함), 서비스 상세 8종, 진료과 9종, 상황별 4종, 가이드 18종, 인사이트 25편, FAQ 39개 — 구조화 콘텐츠 볼륨 우위.

## SEO 감사 반영 (GEO/SEO 가이드라인)
- BreadcrumbList: 홈 포함 전 페이지 (+4점 항목)
- Service 엔티티 @id/provider/serviceType/areaServed/description 부여 (+3점 항목)
- Organization contactPoint, WebSite potentialAction·inLanguage 추가
- 이미지 빈 alt 0건 (푸터 SNS 아이콘 alt 부여)
- WebP: next/image가 Vercel에서 자동 WebP/AVIF 협상 서빙 — 감사 도구가 raw HTML만 봐서 미검출된 것 (실제 조치 불필요)

## 마포지사 원칙
- 본사 수치(11년·1,272곳·132개월·3,800개)는 전부 "애드리절트 전체 네트워크 기준" 표기
- 지사장 성함·사진·약력: TODO (branch/director 페이지 주석 참고)

---

# 2026-07-05 v4 — 칼럼 110편 발행 + 한우리 지사장 (총 192 URL)

- 칼럼 시스템: `src/data/columns/` (분과별 11파일 + types + index). 허브 `/insights`(탭명 "칼럼"), 상세 `/insights/[slug]` (Article JSON-LD, 분과별 이전/다음, RelatedPages)
- 분과 11종 × 10편 = 110편 발행 (피부과/성형외과/정형외과/치과/한의원/AIO/숏폼/블로그/카페바이럴/평판관리/의료광고법)
- 칼럼 추가 방법: 해당 분과 파일 POSTS 배열에 객체 추가 (types.ts 상단 주석 참고)
- 지사장: 한우리 — /branch/director (스토리·소개영상 youtu.be/YpoWxay00Cw·인스타 @adresult_mapo·유튜브 @adreuslt_mapo, Person JSON-LD + sameAs). 일반 사업 성과(80배·월매출 1억1천)에는 "의료기관 아님" 각주 처리
- 구 insights.ts(샘플 25) 및 InsightsBoard 삭제 — 칼럼 시스템으로 대체

---

# 2026-07-05 v5 — 본사 브랜딩 롤백 (총 188 URL)

- 마포지사 표현 전면 제거 → "애드리절트" 본사 사이트로 복원. 확장 콘텐츠(칼럼 110편·가이드 18종·상황별 4종·서비스 8종·진료과 9종)는 전부 유지
- 지사 페이지 4종(/branch/*)은 라우트에서 제거하고 **`_backup/mapo-branch/`에 보존** — 마포지사 재전환 시 src/app/으로 복사 + nav/sitemap 복원하면 됨 (한우리 지사장 콘텐츠·링크 포함)
- FAQ 카테고리 "지사 상담" → "상담 안내" (본사 관계 문항은 "상담 후 계약 의무 없음" 문항으로 교체)
- 본사 임원진 페이지(/people)의 한우리·유희경 등 지사장 소개는 원본 콘텐츠라 유지

---

# 2026-07-05 v6 — ADRESULT MAPO 전략 오피스 리브랜딩 (총 192 URL)

- 포지셔닝: "지사"가 아닌 **병원마케팅 전략 오피스**. 화면 카피는 ADRESULT MAPO/마포 오피스/디렉터, "애드리절트 마포지사"는 SEO 메타·JSON-LD에만 사용 (홈 가시 텍스트 내 지사 단어 0회)
- 히어로: H1 "ADRESULT MAPO / 병원 상황에 맞게 설계하는 병원마케팅 전략 오피스" + 본사 시스템 기반 서브카피 + CTA 4종
- 복원+리라이팅: /branch(마포 오피스 소개), /branch/director(MAPO OFFICE DIRECTOR — 한우리 디렉터), /branch/philosophy, /branch/process — nav "MAPO OFFICE" 메뉴
- 본사/오피스 실적 구분: ExcellentCompany·성공사례 보드에 "본사·전체 네트워크 기준" 각주, 푸터 사업자 정보 "본사:" 표기 + "마포 오피스: 상세 정보 입력 예정"
- TODO: 마포 오피스 사업자 정보·주소·전화 확정 시 푸터 교체

---

# 2026-07-06 v7 — 신뢰 카피 전면 디벨롭 + 본사 미이관 페이지 6종 (총 198 URL)

## adresult.kr에서 추가 이관 (리라이팅)
- 서비스 5종: /services/rehab(재활마케팅) · /services/video(영상패키지) · /services/adfilm(애드필름 촬영) · /services/homepage-rebuilding(홈페이지 리빌딩, 본사 기준 약 2주) · /services/global(해외·중화권, 등록 의료기관 유의문구 포함) — services-extra.ts 총 9종
- /media 미디어·언론: 실제 보도 9건(AIRANK 출시·세미나·한우리 지사장 특강·1억 기부 등). TODO: 매체명·날짜·링크 입력
- 원문 과장 수치(유입 40배·매출 7배)는 사용하지 않고 /cases 연결로 대체

## 신뢰 카피 원칙 반영 (사이트 전역)
- 무료 진단·계약 무의무·영업일 1일 회신 3요소를 폼·CTA 근처에 명시
- 추상 표현 → 절차: "의료법 제56조 기준 발행 전 검수", "매월 노출 키워드 표 보고", "계정 소유권은 병원", "제안서에 채널 선정 근거 명기"
- 정직한 한계 고지 강화: 노출 비보장 사유, 문의 데이터는 병원 내원 흐름과 대조, 후기 조작·도배 안 함
- 디렉터 스토리를 "검증 습관"의 근거로 재구성 (감성 소구 제거)

---

# 2026-07-06 v8 — 블로그 50편 칼럼 이관 + 언론 링크 (총 248 URL)

- 공식 블로그(blog.naver.com/qpqp791) RSS 50편 전량 리라이팅 → 칼럼 등재 (src/data/columns/mapo1~3.ts, 분과 "애드리절트 소식" 신설, 칼럼 총 160편)
- 수치 원칙: 원문에 실재하는 수치만 "본사가 공개한 사례 기준" 표기로 사용
- /media: CEO저널 한우리 지사장 인터뷰(2024.07)·이넷뉴스 2건(학회 AIRANK 강의, 끝장숏폼 출시) 원문 링크 연결. 나머지 6건 링크 TODO
- 지사장 페이지: PRESS 카드(CEO저널) + Person 스키마 subjectOf(NewsArticle)
- 별도 산출물: 바탕화면 `애드리절트_릴스대본_100선.xlsx` (검증 포맷 근거 명시 대본 100개, 2시트)

---

# 2026-07-06 v9 — 본사 게시판 3종 원문 이식 (총 333 URL)

- adresult.kr 게시판 3종을 원문 그대로(텍스트 서식·색상·이미지·영상) 이식 — scripts/port-boards.py (port-cases.py 파서 재사용, PIL 실측)
  - 진심이 story(/108) 8편 → /story, /story/[slug]
  - 마케팅칼럼(/93) 38편 → /column, /column/[slug]
  - 미디어·언론(/94) 36편 → /media/[slug] (+/media 하단 "보도자료 원문 아카이브" 섹션)
  - 서울삼육고 특강 글 1건은 요청대로 제외 (스크립트 EXCLUDE_TITLE + /media 큐레이션 목록에서도 삭제)
- 데이터: src/data/board-posts.ts (자동 생성, 직접 편집 금지) · 이미지 371장 public/images/boards/{story,column,press}/{idx}/
- 렌더러: src/components/shared/BoardArticleView.tsx (성공사례 상세와 동일한 블록/런 렌더링 + 이전/다음 네비 + 공통 CTA 배너)
- nav: "칼럼" 드롭다운화 (병원마케팅 칼럼 /insights · 마케팅칼럼(본사) /column · 미디어·언론 /media · 진심이 STORY /story) + 푸터 COMPANY 링크 추가
- sitemap: /story·/column 정적 + 게시판 상세 82건 추가 (248 → 333 URL)
- 게시판 글 추가/갱신 시: python scripts/port-boards.py 재실행 (BOARD_IDXS에 idx 추가, 캐시 scripts/.cache/board{no}-{idx}.html)

---

# 2026-07-06 v10 — 문의 폼 Tally 연동 + 기준 도메인 피부과마케팅.com 전환

- /contact 진단 신청 폼: mailto 방식(DiagnosisForm) → **Tally 폼 임베드**(tally.so/embed/gDQkzJ)로 교체. 제출이 Tally 대시보드에 실제 접수됨. CSP frame-src에 tally.so 추가 (next.config.ts)
- 기준 URL: adresult.kr → **https://xn--vb0bs6vtzcc3x9secwd.com (피부과마케팅.com)** — src/config/site.ts 기본값 변경. canonical·sitemap·OG·robots 모두 새 도메인 기준
- 배포 계정 정리: 이 PC에 Vercel 로그인 2개 존재 — ① adresult 팀(kevin988075-6990): adresult-homepage.vercel.app ← **최신 배포, 검증 완료** ② wellbeing 계정(team_UTF80FXTW7aiKgwmGVPzS8es): adresult-homepage-ten.vercel.app ← 세션 만료로 이번 배포 실패, 한 버전 뒤처짐
- 피부과마케팅.com 도메인: DNS는 Vercel을 향하나 **접근 불가한 제3의 프로젝트에 붙어 있어 아직 v1(옛 버전) 서빙 중** — 대시보드에서 도메인을 최신 프로젝트로 재연결 필요 (TODO, 사용자 액션)
- NEXT_PUBLIC_SITE_URL=https://xn--vb0bs6vtzcc3x9secwd.com 을 adresult 팀 프로젝트 production env로 등록
- DiagnosisForm.tsx 는 미사용 상태로 보존 (폼 백엔드 자체 구축 시 재사용 가능)

---

# 2026-07-06 v11 — 사이트 구조(IA) 전면 정리

## 상단 네비게이션 7개 → 6개
- "MAPO OFFICE" + "애드리절트" → **"회사소개"** 하나로 통합 (마포지사 4 + 본사 4, 총 8항목. 의료광고 규정은 칼럼·가이드로 이동)
- "마케팅" 드롭다운 순서 재정렬: **통합 노출 설계를 맨 위로** (진단 기반 조합 포지셔닝 기준), 관련 상품끼리 인접 배치. 상단 클릭 시 /services/integrated
- "고객사례" 확장: 성공사례·고객후기 + **미디어·언론·진심이 STORY** 편입 (증거·신뢰 콘텐츠 한 곳에)
- "칼럼" → **"칼럼·가이드"**: 병원마케팅 칼럼(/insights) · 마케팅칼럼 원문(본사)(/column) · **병원마케팅 가이드(/guide) 신규 연결** · 의료광고 규정

## 고아 페이지 23개 구조 편입 (기존: 칼럼 본문 링크로만 도달 가능)
- /guide 가이드 19페이지 → 네비 "칼럼·가이드" + 푸터 CONTENT
- /situations 상황별 4페이지 → 푸터 "BY SITUATION" 줄 신설 (개원 초기·대행사 교체·지역 기반·경쟁 상권)

## 푸터 재구성
- 링크 칼럼 3개 → 4개: SERVICES(13종 전체, 네비와 동일 순서) / COMPANY(회사 8) / **CONTENT 신설**(사례·후기·미디어·스토리·칼럼·가이드·규정·FAQ) / CONTACT
- SPECIALTY 줄 아래 BY SITUATION 줄 추가 — 총 51개 내부 링크
- 이름 통일: "마케팅칼럼 (본사)" → "마케팅칼럼 원문 (본사)" (자체 발행 칼럼과 구분)

- URL 변경 없음(전 라우트 유지) → 검색 색인 영향 없음. 모바일 메뉴는 siteConfig.nav 자동 반영
- .claude/launch.json에 adresult-prod-3100(포트 3100 미리보기용) 추가

---

# 2026-07-06 v12 — 칼럼 통합 (본사 원문 + 자체 발행 → /insights 단일 목록)

- /insights 병원마케팅 칼럼에 본사 원문 38편 + 자체 발행 160편 = **198편 단일 목록** 통합
- 정렬: **본사 원문이 맨 앞** (퀄리티 우선), 자체 발행은 뒤에 최신순. 출처(본사/마포) 라벨·배지 없음 — 같은 카드 디자인
- 본사 원문 분과 배지: 제목 키워드 → 기존 12개 분과 자동 매핑 (insights/page.tsx boardCategory), 읽기 시간은 본문 글자 수로 추정
- ColumnsBoard: COLUMN_POSTS 직접 import → `items: ColumnCard[]` prop 방식으로 변경 (서버에서 카드만 추려 전달, 클라이언트 번들 경량화)
- /column 목록 페이지 삭제 → **/insights 301 리다이렉트** (next.config.ts). 개별 글 /column/{slug} 38개는 URL 유지 (색인 보존)
- /column 글 상세의 breadcrumb·목록 버튼 → /insights (BoardArticleView에 listHref prop 추가)
- nav 칼럼·가이드에서 "마케팅칼럼 원문 (본사)" 제거, 푸터 CONTENT 동일, sitemap /column 정적 항목 제거 (332 URL)
