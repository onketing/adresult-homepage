import type { ComponentType } from "react";
import { frontmatter as aeoSeoFm } from "./aeo-seo-marketing.mdx";
import { frontmatter as laborFm } from "./labor-attorney-marketing.mdx";
import { frontmatter as lawyerFm } from "./lawyer-shortform-marketing.mdx";
import { frontmatter as exclusionFm } from "./naver-blog-exclusion.mdx";
import { frontmatter as smartplaceFm } from "./naver-smartplace-setup.mdx";
import { frontmatter as introFm } from "./onketing-intro.mdx";
import { frontmatter as taxFm } from "./tax-accountant-marketing.mdx";

export type Frontmatter = {
	title: string;
	description: string;
	date: string; // YYYY-MM-DD
	cover: string;
	tags: string[];
	category: string;
	naverUrl?: string;
};

export type BlogPost = Frontmatter & { slug: string };

type RegistryEntry = {
	slug: string;
	frontmatter: Frontmatter;
	load: () => Promise<{ default: ComponentType }>;
};

// 새 글 추가 시: src/content/blog/{slug}.mdx 작성 후 아래에 한 항목만 등록한다.
const REGISTRY: RegistryEntry[] = [
	{ slug: "onketing-intro", frontmatter: introFm, load: () => import("./onketing-intro.mdx") },
	{
		slug: "naver-blog-exclusion",
		frontmatter: exclusionFm,
		load: () => import("./naver-blog-exclusion.mdx"),
	},
	{
		slug: "lawyer-shortform-marketing",
		frontmatter: lawyerFm,
		load: () => import("./lawyer-shortform-marketing.mdx"),
	},
	{
		slug: "tax-accountant-marketing",
		frontmatter: taxFm,
		load: () => import("./tax-accountant-marketing.mdx"),
	},
	{
		slug: "aeo-seo-marketing",
		frontmatter: aeoSeoFm,
		load: () => import("./aeo-seo-marketing.mdx"),
	},
	{
		slug: "naver-smartplace-setup",
		frontmatter: smartplaceFm,
		load: () => import("./naver-smartplace-setup.mdx"),
	},
	{
		slug: "labor-attorney-marketing",
		frontmatter: laborFm,
		load: () => import("./labor-attorney-marketing.mdx"),
	},
];

// 목록 페이지당 글 수 (페이지네이션)
export const PAGE_SIZE = 6;

// 최신순 정렬 (목록·sitemap 용)
export const POSTS: BlogPost[] = REGISTRY.map((r) => ({ slug: r.slug, ...r.frontmatter })).sort(
	(a, b) => (a.date < b.date ? 1 : -1),
);

export const getTotalPages = (): number => Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE));

export const getPagePosts = (page: number): BlogPost[] =>
	POSTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

export const getPostEntry = (slug: string): RegistryEntry | undefined =>
	REGISTRY.find((r) => r.slug === slug);

export const getPostMeta = (slug: string): BlogPost | undefined =>
	POSTS.find((p) => p.slug === slug);
