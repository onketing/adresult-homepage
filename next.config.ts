import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────────────────────
// 보안 헤더 — 프로덕션 빌드 전용 (dev에서는 적용 안 함)
//
// CSP(Content Security Policy) 커스터마이징 가이드:
// - YouTube 섹션 사용 시: frame-src 에 'https://www.youtube.com' 이미 포함
// - Google Analytics 사용 시: script-src 에 'https://www.googletagmanager.com' 포함
// - 카카오맵 사용 시: script-src 에 't1.daumcdn.net' 포함, frame-src 에 'https://map.kakao.com' 추가
// - 네이버맵 임베드 사용 시: frame-src 에 'https://map.naver.com' 추가
// - 구글맵 임베드 사용 시: frame-src 에 'https://www.google.com/maps/embed' 추가
// - 외부 폰트/이미지 추가 시 해당 도메인을 CSP에 추가할 것
// ─────────────────────────────────────────────────────────────────────────────
const securityHeaders = [
	// 클릭재킹(Clickjacking) 방지
	{
		key: "X-Frame-Options",
		// DENY로 바꾸면 더 엄격. 카카오지도 iframe 등 사용 시 SAMEORIGIN 유지
		value: "SAMEORIGIN",
	},

	// MIME 타입 스니핑 방지
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},

	// Referrer 정책 — 외부 링크 이동 시 full URL 대신 origin만 전달
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},

	// 브라우저 기능 권한 제한 (결제 위젯 사용 시 payment 항목 제거)
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},

	// DNS 프리페치 허용 (성능 향상)
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},

	// HTTPS 강제 (배포 환경에서만 의미 있음)
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},

	// Content Security Policy
	{
		key: "Content-Security-Policy",
		value: [
			"default-src 'self'",
			// 스크립트: self + GA + Vercel Analytics + 카카오맵
			"script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com https://t1.daumcdn.net",
			// 스타일: self + inline (Tailwind, shadcn)
			"style-src 'self' 'unsafe-inline'",
			// 이미지: self + 모든 https + data URI (next/image 최적화)
			"img-src 'self' data: blob: https:",
			// 폰트: self (next/font가 빌드 시 자체 호스팅)
			"font-src 'self'",
			// 연결: self + GA(지역 수집 엔드포인트 포함) + GTM + Vercel Analytics
			"connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
			// iframe: YouTube + Tally(문의 폼 임베드). 지도 사용 시 위 가이드 참고해 도메인 추가
			"frame-src 'self' https://www.youtube.com https://tally.so",
			// 미디어: self + blob (영상 배경 등)
			"media-src 'self' blob:",
			// 워커: self + blob
			"worker-src 'self' blob:",
		].join("; "),
	},
];

const nextConfig: NextConfig = {
	async headers() {
		// dev에서는 CSP가 Turbopack HMR WebSocket을 차단하므로 비활성화
		if (process.env.NODE_ENV !== "production") return [];
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	},

	async redirects() {
		return [
			// 임웹 성공사례 view URL(?idx=…) → 새 개별 상세로 301
			// 목록 URL(?bmode=list 등, idx 없음)은 매칭되지 않음
			{
				source: "/549265113",
				has: [{ type: "query", key: "idx", value: "(?<idx>\\d+)" }],
				destination: "/cases/:idx",
				permanent: true,
			},
			// 칼럼 통합: /column 목록 → /insights (개별 글 /column/:slug 는 유지)
			{
				source: "/column",
				destination: "/insights",
				permanent: true,
			},
		];
	},

	images: {
		qualities: [75, 90, 95],
		remotePatterns: [
			{
				// TODO(배포 전): 모든 https 도메인 허용 → 실제 사용 도메인으로 좁힐 것
				// 예) { protocol: "https", hostname: "images.unsplash.com" }
				protocol: "https",
				hostname: "**",
			},
		],
		/**
		 * Vercel 이미지 최적화를 쓰지 않는다 (2026-09-22).
		 *
		 * 배경: 팀(onketings-projects) Hobby 플랜의 Image Optimization 캐시 쓰기 한도
		 * (100,000건)가 소진됐다. 칼럼·사례 330여 페이지를 크롤러가 훑을 때마다 이미지마다
		 * 폭별 변환본이 새로 만들어져 쓰기가 쌓였다. 한도가 막히면 `/_next/image` 가 402 를
		 * 반환하고 사이트 이미지가 전부 깨진다(같은 팀 onketing.kr 에서 2026-08 에 겪음).
		 *
		 * 그래서 자산 자체를 최적화했다: public 의 png·jpg·gif 630장을 WebP 로 재인코딩하고
		 * (gif 는 애니메이션 유지), 게시판·사례 본문은 가로 1440px · 그 외는 1920px 로 줄였다.
		 * OG 이미지와 PWA 아이콘만 png 로 남긴다.
		 *
		 * 주의: unoptimized 는 srcset 을 만들지 않는다. 새 이미지는 **WebP 로, 표시 크기에
		 * 맞춰 미리 리사이즈**해서 넣는다.
		 */
		unoptimized: true,
	},
};

export default nextConfig;
