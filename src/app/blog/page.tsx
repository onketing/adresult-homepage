import type { Metadata } from "next";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { BlogListHero } from "@/components/sections/BlogListHero";
import { BlogPagination } from "@/components/sections/BlogPagination";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { getPagePosts, getTotalPages, POSTS } from "@/content/blog/posts";

export const metadata: Metadata = {
	title: "블로그 | 애드리절트",
	description:
		"전문직 마케팅·네이버 블로그·숏폼 운영 인사이트. 변호사·의사·한의사 등 12개 직군 마케팅 노하우를 애드리절트가 공유합니다.",
	alternates: { canonical: `${siteConfig.url}/blog` },
	openGraph: {
		type: "website",
		url: `${siteConfig.url}/blog`,
		title: "블로그 | 애드리절트",
		description: "전문직 마케팅·네이버 블로그·숏폼 운영 인사이트를 애드리절트가 공유합니다.",
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

export const BlogIndexPage = () => {
	const posts = getPagePosts(1);

	return (
		<div className="min-h-screen bg-white">
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "블로그", path: "/blog" },
				]}
			/>
			<BlogListHero count={POSTS.length} />

			<section className="px-4 pt-4 pb-20 md:px-8 md:pb-28">
				<div className="mx-auto max-w-6xl">
					{POSTS.length === 0 ? (
						<p className="py-20 text-center text-muted-foreground">
							첫 글을 준비하고 있습니다. 곧 공개합니다.
						</p>
					) : (
						<>
							<BlogGrid posts={posts} priorityCount={3} />
							<BlogPagination current={1} totalPages={getTotalPages()} />
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default BlogIndexPage;
