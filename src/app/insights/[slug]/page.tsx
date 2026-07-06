import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import { COLUMN_POSTS, COLUMN_SLUGS, getColumn } from "@/data/columns/index";

export const dynamicParams = false;

export const generateStaticParams = () => COLUMN_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const p = getColumn(slug);
	if (!p) return {};
	return {
		title: `${p.title} | 애드리절트 칼럼`,
		description: p.excerpt,
		alternates: { canonical: `/insights/${p.slug}` },
		keywords: [p.category, "병원마케팅 칼럼", "병원온라인마케팅", "애드리절트"],
	};
};

export const ColumnDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const p = getColumn(slug);
	if (!p) notFound();

	// 같은 분과의 다른 칼럼 (이전/다음 탐색용)
	const siblings = COLUMN_POSTS.filter((c) => c.category === p.category && c.slug !== p.slug);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${siteConfig.url}/insights/${p.slug}#article`,
		headline: p.title,
		description: p.excerpt,
		articleSection: p.category,
		inLanguage: "ko-KR",
		author: {
			"@type": "Organization",
			name: "애드리절트",
			url: siteConfig.url,
		},
		publisher: { "@id": `${siteConfig.url}/#organization` },
		mainEntityOfPage: `${siteConfig.url}/insights/${p.slug}`,
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원마케팅 칼럼", path: "/insights" },
					{ name: p.title, path: `/insights/${p.slug}` },
				]}
			/>

			{/* HERO */}
			<section className="relative overflow-hidden bg-[#0B0B0B] pt-16 text-white md:pt-20">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24 lg:px-8">
					<p className="mb-5 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
						COLUMN — {p.category} · {p.date} · {p.readingMinutes}분
					</p>
					<h1 className="break-keep font-extrabold text-3xl leading-[1.25] tracking-[-0.02em] md:text-5xl">
						{p.title}
					</h1>
					<p className="mt-6 break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						{p.excerpt}
					</p>
				</div>
			</section>

			{/* 본문 */}
			<article className="bg-white">
				<div className="mx-auto max-w-3xl px-4 py-14 md:py-20 lg:px-8">
					<Reveal>
						<div className="space-y-6">
							{p.intro.map((para) => (
								<p
									key={para.slice(0, 40)}
									className="break-keep text-[#333333] text-[15px] leading-[1.9] md:text-[17px]"
								>
									{para}
								</p>
							))}
						</div>
					</Reveal>

					{p.sections.map((s, i) => (
						<Reveal key={s.h2} delay={0.04}>
							<section className="mt-12">
								<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight md:text-3xl">
									<span className="mr-3 font-mono text-[#C8102E] text-base tracking-[0.08em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									{s.h2}
								</h2>
								<div className="mt-5 space-y-5">
									{s.paragraphs.map((para) => (
										<p
											key={para.slice(0, 40)}
											className="break-keep text-[#333333] text-[15px] leading-[1.9] md:text-[17px]"
										>
											{para}
										</p>
									))}
								</div>
								{s.bullets && s.bullets.length > 0 && (
									<ul className="mt-6 flex flex-col gap-3 border border-[#E4E2DF] bg-[#FAFAFA] p-6">
										{s.bullets.map((b) => (
											<li key={b} className="flex items-start gap-2.5">
												<span
													aria-hidden="true"
													className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 bg-[#C8102E]"
												/>
												<span className="break-keep text-[#333333] text-sm leading-[1.75]">
													{b}
												</span>
											</li>
										))}
									</ul>
								)}
							</section>
						</Reveal>
					))}

					<Reveal delay={0.04}>
						<p className="mt-12 break-keep border-[#C8102E] border-l-2 bg-[#FAFAFA] p-6 text-[#333333] text-[15px] leading-[1.9] md:text-[17px]">
							{p.conclusion}
						</p>
					</Reveal>

					{/* 중간 CTA */}
					<Reveal delay={0.04}>
						<div className="mt-12 border border-[#111111] bg-[#0B0B0B] p-8 text-center text-white">
							<p className="break-keep font-extrabold text-xl md:text-2xl">
								우리 병원에는 어떻게 적용해야 할까요?
							</p>
							<p className="mt-3 break-keep text-[#B5B2AF] text-sm leading-[1.75]">
								진료과·지역·현재 채널 기준으로 병원 상황을 진단해 드립니다.
							</p>
							<div className="mt-6 flex flex-wrap justify-center gap-3">
								<Link
									href="/contact"
									className="bg-[#C8102E] px-7 py-3.5 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
								>
									병원 마케팅 진단받기
								</Link>
								<Link
									href="/insights"
									className="border border-[#3A3835] px-7 py-3.5 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
								>
									칼럼 목록으로
								</Link>
							</div>
						</div>
					</Reveal>

					{/* 같은 분과 다른 칼럼 */}
					{siblings.length > 0 && (
						<div className="mt-14 border-[#E4E2DF] border-t pt-8">
							<p className="mb-4 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
								{p.category} 분과의 다른 칼럼
							</p>
							<ul className="flex flex-col gap-2.5">
								{siblings.slice(0, 5).map((c) => (
									<li key={c.slug}>
										<Link
											href={`/insights/${c.slug}`}
											className="group flex items-baseline gap-2.5"
										>
											<span
												aria-hidden="true"
												className="mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-[#C8102E]"
											/>
											<span className="break-keep text-[#333333] text-sm leading-[1.7] transition-colors group-hover:text-[#C8102E]">
												{c.title}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</article>

			{p.related && p.related.length > 0 && <RelatedPages items={p.related} />}
			<FinalCTA />
		</>
	);
};

export default ColumnDetailPage;
