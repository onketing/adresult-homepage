import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoardArticleView } from "@/components/shared/BoardArticleView";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { getStory, STORY_ARTICLES } from "@/data/board-posts";

export const generateStaticParams = () => STORY_ARTICLES.map((a) => ({ slug: a.slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const a = getStory(slug);
	if (!a) return {};
	return {
		title: `${a.title} | 애드리절트 마포지사`,
		description: a.excerpt,
		alternates: { canonical: `/story/${a.slug}` },
		keywords: ["애드리절트 진심이", "애드리절트 스토리", "병원마케팅 회사 이야기"],
		openGraph: a.cover ? { images: [{ url: a.cover }] } : undefined,
	};
};

export const StoryDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const a = getStory(slug);
	if (!a) notFound();

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: a.title,
		image: a.cover ? `${siteConfig.url}${a.cover}` : undefined,
		author: { "@type": "Organization", name: "애드리절트(ADRESULT)" },
		publisher: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		mainEntityOfPage: `${siteConfig.url}/story/${a.slug}`,
		description: a.excerpt,
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "진심이 STORY", path: "/story" },
					{ name: a.title, path: `/story/${a.slug}` },
				]}
			/>
			<BoardArticleView
				article={a}
				articles={STORY_ARTICLES}
				basePath="/story"
				eyebrow="Jinsim Story"
				lead="애드리절트의 진심을 기록하는 이야기입니다."
				listLabel="진심이 STORY"
			/>
		</>
	);
};

export default StoryDetailPage;
