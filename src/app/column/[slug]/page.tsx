import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoardArticleView } from "@/components/shared/BoardArticleView";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { COLUMN_ARTICLES, getBoardColumn } from "@/data/board-posts";

export const generateStaticParams = () => COLUMN_ARTICLES.map((a) => ({ slug: a.slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const a = getBoardColumn(slug);
	if (!a) return {};
	return {
		title: `${a.title} | 애드리절트 마포지사`,
		description: a.excerpt,
		alternates: { canonical: `/column/${a.slug}` },
		keywords: ["병원마케팅 칼럼", "애드리절트 칼럼", "병원마케팅 노하우"],
		openGraph: a.cover ? { images: [{ url: a.cover }] } : undefined,
	};
};

export const BoardColumnDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const a = getBoardColumn(slug);
	if (!a) notFound();

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: a.title,
		image: a.cover ? `${siteConfig.url}${a.cover}` : undefined,
		author: { "@type": "Organization", name: "애드리절트(ADRESULT)" },
		publisher: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		mainEntityOfPage: `${siteConfig.url}/column/${a.slug}`,
		description: a.excerpt,
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원마케팅 칼럼", path: "/insights" },
					{ name: a.title, path: `/column/${a.slug}` },
				]}
			/>
			<BoardArticleView
				article={a}
				articles={COLUMN_ARTICLES}
				basePath="/column"
				eyebrow="Marketing Column"
				lead="애드리절트가 발행하는 병원마케팅 실무 칼럼입니다."
				listLabel="병원마케팅 칼럼"
				listHref="/insights"
			/>
		</>
	);
};

export default BoardColumnDetailPage;
