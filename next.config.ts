import createMDX from "@next/mdx";
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
			// iframe: YouTube만 기본 포함. 지도 사용 시 위 가이드 참고해 도메인 추가
			"frame-src 'self' https://www.youtube.com",
			// 미디어: self + blob (영상 배경 등)
			"media-src 'self' blob:",
			// 워커: self + blob
			"worker-src 'self' blob:",
		].join("; "),
	},
];

const nextConfig: NextConfig = {
	// MDX(.md/.mdx)를 모듈로 처리 — 블로그 글은 src/content/blog/*.mdx
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

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

	// 문의하기 → 외부 Tally 폼으로 이동 (기존 /contact 링크 전부 여기로 리다이렉트)
	async redirects() {
		return [
			{
				source: "/contact",
				destination: "https://tally.so/r/gDQkzJ",
				permanent: false,
			},
			// 임웹 성공사례 view URL(?idx=…) → 새 개별 상세로 301
			// 목록 URL(?bmode=list 등, idx 없음)은 매칭되지 않음
			{
				source: "/549265113",
				has: [{ type: "query", key: "idx", value: "(?<idx>\\d+)" }],
				destination: "/cases/:idx",
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
	},
};

// 표(GFM) 등 마크다운 확장 지원. Turbopack 호환을 위해 플러그인은 문자열로 지정한다.
const withMDX = createMDX({
	options: {
		remarkPlugins: [["remark-gfm"]],
	},
});

export default withMDX(nextConfig);
