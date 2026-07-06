# 애드리절트 마포지사 홈페이지 — 배포 안내서 (담당자용)

이 압축 파일은 홈페이지 전체 소스코드입니다. Vercel 기준으로 배포하면 됩니다.
프로젝트 구조·컨벤션 상세는 `CLAUDE.md`와 `docs/` 폴더를 참고하세요.

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 스택 | Next.js 16 · React 19 · Tailwind v4 · TypeScript |
| 패키지 매니저 | **pnpm** (npm/yarn 사용 금지) · Node 22 이상 |
| 페이지 규모 | 정적 생성(SSG) 약 339페이지 · 사이트맵 332 URL |
| 기준 도메인 | **피부과마케팅.com** (punycode: `xn--vb0bs6vtzcc3x9secwd.com`) |
| 현재 임시 배포 | https://adresult-homepage.vercel.app |

## 2. 로컬 실행·빌드 검증

```bash
npm install -g pnpm             # pnpm이 없다면
pnpm install --ignore-scripts   # git 저장소가 아니면 --ignore-scripts 필수 (lefthook 오류 방지)
pnpm dev                        # 개발 서버 (http://localhost:3000)

# 배포 전 검증 — 아래 3개 모두 통과해야 함 (린트 경고는 CostBreakdown 1건만 허용)
pnpm lint
pnpm check-types
pnpm build
```

## 3. Vercel 배포 (권장)

1. GitHub에 새 저장소를 만들어 이 폴더 전체 업로드 → Vercel "Add New → Project"로 연결 (이후 push마다 자동 배포)
   - 또는 CLI로 직접: `npx vercel deploy --prod`
   - 프레임워크는 Next.js 자동 인식. 빌드 설정 변경 불필요.
2. **환경변수** (Vercel → Settings → Environment Variables):
   | 이름 | 값 | 비고 |
   |---|---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://xn--vb0bs6vtzcc3x9secwd.com` | 선택 — 코드 기본값과 동일 |
   | `NEXT_PUBLIC_GA_ID` | GA4 측정 ID (G-XXXXXXX) | 선택 — 설정 시에만 GA 로드 |
3. **도메인 연결**: 피부과마케팅.com(`xn--vb0bs6vtzcc3x9secwd.com`)을 프로젝트 Domains에 추가.
   ⚠️ 이 도메인은 현재 **다른(구버전) Vercel 프로젝트에 연결되어 옛 사이트를 서빙 중**입니다.
   도메인을 소유한 Vercel 계정에서 기존 프로젝트의 도메인을 먼저 제거해야 새 프로젝트에 붙습니다.

## 4. 배포 후 해야 할 일 (SEO)

1. **구글 서치콘솔 / 네이버 서치어드바이저 / Bing 웹마스터** 에 도메인 등록
   - 인증 메타 코드 교체 위치: `src/app/layout.tsx` 의 `verification` 항목 (현재 값은 구 사이트 것)
   - 사이트맵 제출: `https://피부과마케팅.com/sitemap.xml`
2. OG 공유 이미지 교체(선택): `public/og-image.png` (1200×630)

## 5. 운영 시 알아둘 것

- **문의 폼**: `/contact` 에 Tally 폼 임베드(`tally.so/embed/gDQkzJ`). 접수 내역은 해당 Tally 계정 대시보드에서 확인.
  폼 교체 시 `src/app/contact/page.tsx` 의 iframe src 수정 + `next.config.ts` CSP `frame-src` 확인.
- **자동 생성 파일 — 직접 수정 금지**:
  - `src/data/success-cases.ts` ← `scripts/port-cases.py` (성공사례 이식 절차: `docs/08-case-porting.md`)
  - `src/data/board-posts.ts` ← `scripts/port-boards.py` (본사 게시판 story/칼럼/미디어 이식)
- **콘텐츠 수정 위치**: 연락처·메뉴 = `src/config/site.ts` / 칼럼 = `src/data/columns/` / 그 외 매핑은 `docs/05-data-and-seo.md`
- **리다이렉트** (`next.config.ts`): `/column` → `/insights` (칼럼 통합) · `/549265113?idx=N` → `/cases/N` (구 임웹 URL)
- **변경 이력**: `docs/10-launch-checklist.md` (v1~v12) — 지금까지의 모든 구조·콘텐츠 변경 기록

## 6. 참고

- 사이트 소유: 애드리절트 마포지사 (wellbeinginus@gmail.com)
- 본사 사이트(adresult.kr, 임웹)와는 **별개의 사이트**입니다. 혼동 주의.
