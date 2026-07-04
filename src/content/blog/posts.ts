import type { ComponentType } from "react";

export type FaqItem = { q: string; a: string };

export type Frontmatter = {
	title: string;
	description: string;
	date: string; // YYYY-MM-DD
	cover: string;
	tags: string[];
	category: string;
	naverUrl?: string;
	faq?: FaqItem[];
};

export type BlogPost = Frontmatter & { slug: string };

type RegistryEntry = {
	slug: string;
	frontmatter: Frontmatter;
	load: () => Promise<{ default: ComponentType }>;
};

// 새 글 추가 시: src/content/blog/{slug}.mdx 작성 후 아래 REGISTRY에 한 항목만 등록한다.
const REGISTRY: RegistryEntry[] = [];

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
