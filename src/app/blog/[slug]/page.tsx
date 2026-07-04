import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTACard } from "@/components/shared/CTACard";
import { siteConfig } from "@/config/site";
import { getPostEntry, getPostMeta, POSTS } from "@/content/blog/posts";

export const dynamicParams = false;

export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const post = getPostMeta(slug);
	if (!post) return {};
	const url = `${siteConfig.url}/blog/${slug}`;
	const cover = `${siteConfig.url}${post.cover}`;
	return {
		title: `${post.title} | 애드리절트`,
		description: post.description,
		keywords: post.tags,
		alternates: { canonical: url },
		openGraph: {
			type: "article",
			url,
			title: post.title,
			description: post.description,
			publishedTime: post.date,
			images: [{ url: cover, alt: post.title }],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [cover],
		},
	};
};

const fmtDate = (d: string) => d.replaceAll("-", ".");

export const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const entry = getPostEntry(slug);
	const post = getPostMeta(slug);
	if (!entry || !post) notFound();

	const { default: Post } = await entry.load();
	const url = `${siteConfig.url}/blog/${slug}`;

	const blogPostingSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		image: `${siteConfig.url}${post.cover}`,
		datePublished: post.date,
		dateModified: post.date,
		keywords: post.tags.join(", "),
		articleSection: post.category,
		inLanguage: "ko-KR",
		mainEntityOfPage: { "@type": "WebPage", "@id": url },
		author: { "@id": `${siteConfig.url}/#organization` },
		publisher: { "@id": `${siteConfig.url}/#organization` },
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url },
			{ "@type": "ListItem", position: 2, name: "블로그", item: `${siteConfig.url}/blog` },
			{ "@type": "ListItem", position: 3, name: post.title, item: url },
		],
	};

	const faqSchema =
		post.faq && post.faq.length > 0
			? {
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: post.faq.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: { "@type": "Answer", text: f.a },
					})),
				}
			: null;

	return (
		<article className="bg-white">
			<script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
			{faqSchema ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}

			<div className="mx-auto max-w-[720px] px-4 pt-28 pb-16 md:px-6 md:pt-36">
				{/* Breadcrumb */}
				<nav aria-label="breadcrumb" className="text-slate-500 text-sm">
					<Link href="/blog" className="transition-colors hover:text-[#e11d29]">
						← 블로그
					</Link>
				</nav>

				{/* Header */}
				<header className="mt-6">
					<span className="inline-flex rounded-full bg-[#e11d29]/10 px-3 py-1 font-semibold text-[#e11d29] text-xs">
						{post.category}
					</span>
					<h1 className="mt-4 font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
						{post.title}
					</h1>
					<div className="mt-4 text-slate-400 text-sm">
						<time dateTime={post.date}>{fmtDate(post.date)}</time>
					</div>
				</header>

				{/* Body */}
				<div className="prose prose-slate mt-8 prose-h2:mt-12 max-w-none prose-h2:scroll-mt-24 prose-th:bg-slate-50 prose-a:font-medium prose-h2:font-bold prose-strong:font-medium prose-a:text-[#e11d29] prose-h2:text-2xl prose-h2:text-foreground prose-li:text-slate-700 prose-p:text-slate-700 prose-strong:text-[#e11d29] prose-table:text-sm prose-p:leading-relaxed prose-h2:tracking-tight prose-headings:tracking-tight hover:prose-a:text-[#b3121e]">
					<Post />
				</div>

				{/* 자주 묻는 질문 */}
				{post.faq && post.faq.length > 0 ? (
					<section className="mt-14 border-slate-100 border-t pt-10">
						<h2 className="font-bold text-2xl text-foreground tracking-tight">자주 묻는 질문</h2>
						<dl className="mt-6 space-y-6">
							{post.faq.map((item) => (
								<div key={item.q}>
									<dt className="font-semibold text-foreground">Q. {item.q}</dt>
									<dd className="mt-2 text-slate-700 leading-relaxed">{item.a}</dd>
								</div>
							))}
						</dl>
					</section>
				) : null}

				{/* 태그 (하단) */}
				<div className="mt-10 flex flex-wrap gap-2">
					{post.tags.map((t) => (
						<span
							key={t}
							className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 text-sm"
						>
							#{t}
						</span>
					))}
				</div>

				{/* 네이버 원문 + 목록으로 */}
				<div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-slate-100 border-t pt-8">
					<Link
						href="/blog"
						className="font-medium text-[#e11d29] text-sm transition-colors hover:text-[#b3121e]"
					>
						← 다른 글 보기
					</Link>
					{post.naverUrl ? (
						<a
							href={post.naverUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 font-medium text-slate-600 text-sm transition-colors hover:border-[#ef3c39]/50 hover:text-[#e11d29]"
						>
							네이버 블로그에서 원문 보기
							<ArrowUpRight className="h-4 w-4" />
						</a>
					) : null}
				</div>
			</div>

			{/* 전환 CTA (내부 링크) */}
			<CTACard
				variant="gradient"
				eyebrow="애드리절트 · 마케팅 컨설팅"
				headline="우리 직군엔 어떤 전략이 맞을까요?"
				sub="첫 상담은 무료입니다. 직군·채널·광고 규정까지 함께 봅니다."
			/>
		</article>
	);
};

export default BlogPostPage;
