import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { BlogListHero } from "@/components/sections/BlogListHero";
import { BlogPagination } from "@/components/sections/BlogPagination";
import { siteConfig } from "@/config/site";
import { getPagePosts, getTotalPages, POSTS } from "@/content/blog/posts";

export const dynamicParams = false;

// 2페이지부터 정적 생성 (1페이지는 /blog)
export const generateStaticParams = () => {
	const total = getTotalPages();
	return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }));
};

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ page: string }>;
}): Promise<Metadata> => {
	const { page } = await params;
	const n = Number(page);
	const url = `${siteConfig.url}/blog/page/${n}`;
	return {
		title: `블로그 (${n}페이지) | 애드리절트`,
		description:
			"전문직 마케팅·네이버 블로그·숏폼 운영 인사이트. 12개 직군 마케팅 노하우를 애드리절트가 공유합니다.",
		alternates: { canonical: url },
		openGraph: {
			type: "website",
			url,
			title: `블로그 (${n}페이지) | 애드리절트`,
			images: [
				{
					url: `${siteConfig.url}/og-image.png`,
					width: 1200,
					height: 630,
					alt: "애드리절트",
				},
			],
		},
	};
};

export const BlogPagedPage = async ({ params }: { params: Promise<{ page: string }> }) => {
	const { page } = await params;
	const n = Number(page);
	const total = getTotalPages();
	if (!Number.isInteger(n) || n < 2 || n > total) notFound();

	const posts = getPagePosts(n);

	return (
		<div className="min-h-screen bg-white">
			<BlogListHero count={POSTS.length} />

			<section className="px-4 pt-4 pb-20 md:px-8 md:pb-28">
				<div className="mx-auto max-w-6xl">
					<BlogGrid posts={posts} priorityCount={3} />
					<BlogPagination current={n} totalPages={total} />
				</div>
			</section>
		</div>
	);
};

export default BlogPagedPage;
