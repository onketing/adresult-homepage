import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import { GUIDE_SLUGS, getGuide } from "@/data/guides";

export const dynamicParams = false;

export const generateStaticParams = () => GUIDE_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const g = getGuide(slug);
	if (!g) return {};
	return {
		title: g.metaTitle,
		description: g.metaDescription,
		keywords: g.keywords,
		alternates: { canonical: `/guide/${g.slug}` },
	};
};

export const GuidePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const g = getGuide(slug);
	if (!g) notFound();

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: g.title,
		description: g.metaDescription,
		author: {
			"@type": "Organization",
			name: "애드리절트",
			url: siteConfig.url,
		},
		publisher: { "@id": `${siteConfig.url}/#organization` },
		mainEntityOfPage: `${siteConfig.url}/guide/${g.slug}`,
		inLanguage: "ko",
	};
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: g.faq.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원마케팅 가이드", path: "/guide" },
					{ name: g.title, path: `/guide/${g.slug}` },
				]}
			/>

			{/* HERO — 다크(작게) */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
					<p className="mb-5 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">{g.eyebrow}</p>
					<h1 className="max-w-4xl break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
						{g.title}
					</h1>
					<p className="mt-6 max-w-2xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						{g.heroSub}
					</p>
					<p className="mt-8 font-mono text-[11px] text-white/30 tracking-[0.12em]">
						HOSPITAL MARKETING GUIDE — ADRESULT
					</p>
				</div>
			</section>

			{/* 도입 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<div className="space-y-6">
							{g.intro.map((p) => (
								<p
									key={p}
									className="break-keep text-[#333333] text-[15px] leading-[1.9] md:text-[17px]"
								>
									{p}
								</p>
							))}
						</div>
					</Reveal>
				</div>
			</section>

			{/* 본문 섹션 */}
			<section className="border-[#E4E2DF] border-t bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<div className="space-y-16 md:space-y-20">
						{g.sections.map((sec, i) => (
							<Reveal key={sec.h2} delay={i * 0.08}>
								<article>
									<p className="mb-3 font-mono text-[#C8102E] text-[11px] tracking-[0.14em]">
										{String(i + 1).padStart(2, "0")}
									</p>
									<h2 className="break-keep font-extrabold text-2xl text-[#111111] leading-snug tracking-tight md:text-3xl">
										{sec.h2}
									</h2>
									<div className="mt-6 space-y-5">
										{sec.body.map((p) => (
											<p key={p} className="break-keep text-[#555250] text-[15px] leading-[1.9]">
												{p}
											</p>
										))}
									</div>
									{sec.bullets && (
										<ul className="mt-6 space-y-3 border border-[#E4E2DF] bg-[#FAFAFA] p-6 md:p-8">
											{sec.bullets.map((b) => (
												<li key={b} className="grid grid-cols-[14px_1fr] gap-x-3">
													<span
														aria-hidden="true"
														className="mt-[9px] h-[7px] w-[7px] bg-[#C8102E]"
													/>
													<span className="break-keep text-[#333333] text-[14.5px] leading-[1.8]">
														{b}
													</span>
												</li>
											))}
										</ul>
									)}
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-[#E4E2DF] border-t bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">FAQ</p>
						<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight md:text-4xl">
							자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-10 space-y-4">
						{g.faq.map((f, i) => (
							<Reveal key={f.q} delay={i * 0.08}>
								<div className="border border-[#E4E2DF] bg-white p-7 md:p-9">
									<h3 className="break-keep font-extrabold text-[#111111] text-base md:text-lg">
										Q. {f.q}
									</h3>
									<p className="mt-3 break-keep text-[#555250] text-[14.5px] leading-[1.8]">
										{f.a}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 중간 CTA — 진단 신청 */}
			<section className="border-[#E4E2DF] border-t bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							FREE DIAGNOSIS
						</p>
						<h2 className="break-keep font-extrabold text-2xl text-[#111111] leading-snug tracking-tight md:text-4xl">
							우리 병원에 맞는 전략이 궁금하다면
						</h2>
						<p className="mx-auto mt-5 max-w-xl break-keep text-[#767370] text-[15px] leading-[1.8]">
							가이드의 내용을 병원의 진료과·상권·경쟁 환경에 대입해 진단해 드립니다. 제안 전 계약
							요구는 없습니다.
						</p>
						<div className="mt-9 flex flex-wrap justify-center gap-3">
							<Link
								href="/contact"
								className="w-full bg-[#C8102E] px-8 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단 신청
							</Link>
							<Link
								href="/cases"
								className="w-full border border-[#D9D6D3] px-8 py-4 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								성공사례 보기
							</Link>
						</div>
					</Reveal>
				</div>
			</section>

			<RelatedPages items={g.related} />
			<FinalCTA />
		</>
	);
};

export default GuidePage;
