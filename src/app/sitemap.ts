import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getTotalPages, POSTS } from "@/content/blog/posts";
import { SHORTFORM_PRO_SLUGS } from "@/data/shortform-professions";

const staticRoutes = [
	{ path: "", priority: 1.0, changeFrequency: "weekly" as const },
	{ path: "/history", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/ceo", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/people", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/services/aio", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/professional", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/blog", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/shortform", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/cases", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/reviews", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/regulation", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/team", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
];

export const sitemap = (): MetadataRoute.Sitemap => {
	const now = new Date();
	const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: now,
		changeFrequency,
		priority,
	}));

	// 페이지네이션 경로 (/blog/page/2 …)
	const pageEntries = Array.from({ length: getTotalPages() - 1 }, (_, i) => ({
		url: `${siteConfig.url}/blog/page/${i + 2}`,
		lastModified: now,
		changeFrequency: "weekly" as const,
		priority: 0.5,
	}));

	const postEntries = POSTS.map((post) => ({
		url: `${siteConfig.url}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// 직군별 숏폼 페이지 (/services/shortform/lawyer …)
	const proEntries = SHORTFORM_PRO_SLUGS.map((slug) => ({
		url: `${siteConfig.url}/services/shortform/${slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	return [...staticEntries, ...pageEntries, ...postEntries, ...proEntries];
};

export default sitemap;
