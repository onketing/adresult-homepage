import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { COLUMN_ARTICLES, PRESS_ARTICLES, STORY_ARTICLES } from "@/data/board-posts";
import { COLUMN_SLUGS } from "@/data/columns/index";
import { SPECIALTY_SLUGS } from "@/data/specialties";
import { CASE_ARTICLES } from "@/data/success-cases";

const staticRoutes = [
	{ path: "", priority: 1.0, changeFrequency: "weekly" as const },
	{ path: "/history", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/ceo", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/people", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/branch", priority: 0.9, changeFrequency: "monthly" as const },
	{ path: "/branch/director", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/branch/philosophy", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/branch/process", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/services/aio", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/shortform", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/threads", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/cafe-viral", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/blog", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/homepage-content", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/services/place-review", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/services/integrated", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/video", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services/adfilm", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/services/homepage-rebuilding", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services/rehab", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services/global", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/media", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/story", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/situations/new-opening", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/situations/agency-change", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/situations/local-competition", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/situations/high-competition", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/guide", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/cases", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/reviews", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/regulation", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
];

export const sitemap = (): MetadataRoute.Sitemap => {
	const now = new Date();
	const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: now,
		changeFrequency,
		priority,
	}));

	const specialtyEntries = SPECIALTY_SLUGS.map((slug) => ({
		url: `${siteConfig.url}/specialty/${slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	// 키워드 토픽 가이드 (/guide/{slug}) — src/data/guides.ts 의 slug와 일치해야 함
	const guideSlugs = [
		"derma-shortform",
		"derma-aio",
		"derma-cafe",
		"derma-threads",
		"plastic-branding",
		"ortho-keywords",
		"dental-local",
		"oriental-accident",
		"oriental-diet",
		"reels",
		"youtube-shorts",
		"instagram",
		"mom-cafe",
		"review-viral",
		"cost",
		"checklist",
		"owners-guide",
		"medical-ad-law",
	];
	const guideEntries = guideSlugs.map((slug) => ({
		url: `${siteConfig.url}/guide/${slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// 칼럼 상세 (/insights/{slug})
	const columnEntries = COLUMN_SLUGS.map((slug) => ({
		url: `${siteConfig.url}/insights/${slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	// 개별 성공사례 상세 (/cases/{idx})
	const caseEntries = CASE_ARTICLES.map((a) => ({
		url: `${siteConfig.url}/cases/${a.slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// 게시판 원문 이식 글 (/story, /column, /media 상세)
	const boardEntries = [
		...STORY_ARTICLES.map((a) => ({ base: "story", slug: a.slug })),
		...COLUMN_ARTICLES.map((a) => ({ base: "column", slug: a.slug })),
		...PRESS_ARTICLES.map((a) => ({ base: "media", slug: a.slug })),
	].map(({ base, slug }) => ({
		url: `${siteConfig.url}/${base}/${slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [
		...staticEntries,
		...specialtyEntries,
		...guideEntries,
		...columnEntries,
		...caseEntries,
		...boardEntries,
	];
};

export default sitemap;
