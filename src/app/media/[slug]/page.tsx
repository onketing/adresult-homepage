import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoardArticleView } from "@/components/shared/BoardArticleView";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { getPress, PRESS_ARTICLES } from "@/data/board-posts";

export const generateStaticParams = () => PRESS_ARTICLES.map((a) => ({ slug: a.slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const a = getPress(slug);
	if (!a) return {};
	return {
		title: `${a.title} | 애드리절트 마포지사`,
		description: a.excerpt,
		alternates: { canonical: `/media/${a.slug}` },
		keywords: ["애드리절트 언론보도", "애드리절트 뉴스", "병원마케팅 회사 언론"],
		openGraph: a.cover ? { images: [{ url: a.cover }] } : undefined,
	};
};

export const PressDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const a = getPress(slug);
	if (!a) notFound();

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: a.title,
		image: a.cover ? `${siteConfig.url}${a.cover}` : undefined,
		author: { "@type": "Organization", name: "애드리절트(ADRESULT)" },
		publisher: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		mainEntityOfPage: `${siteConfig.url}/media/${a.slug}`,
		description: a.excerpt,
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "미디어·언론", path: "/media" },
					{ name: a.title, path: `/media/${a.slug}` },
				]}
			/>
			<BoardArticleView
				article={a}
				articles={PRESS_ARTICLES}
				basePath="/media"
				eyebrow="Press & Media"
				lead="언론에 기록된 애드리절트의 활동입니다."
				listLabel="미디어·언론"
			/>
		</>
	);
};

export default PressDetailPage;
