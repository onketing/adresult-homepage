import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { SPECIALTY_SLUGS } from "@/data/specialties";
import { CASE_ARTICLES } from "@/data/success-cases";

const staticRoutes = [
	{ path: "", priority: 1.0, changeFrequency: "weekly" as const },
	{ path: "/history", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/ceo", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/people", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/services/aio", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/services/shortform", priority: 0.9, changeFrequency: "weekly" as const },
	{ path: "/cases", priority: 0.8, changeFrequency: "weekly" as const },
	{ path: "/reviews", priority: 0.8, changeFrequency: "weekly" as const },
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

	// 개별 성공사례 상세 (/cases/{idx})
	const caseEntries = CASE_ARTICLES.map((a) => ({
		url: `${siteConfig.url}/cases/${a.slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticEntries, ...specialtyEntries, ...caseEntries];
};

export default sitemap;
