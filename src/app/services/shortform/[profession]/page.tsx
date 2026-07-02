import { ArrowRight, Check, X } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProShortformHero } from "@/components/sections/ProShortformHero";
import { CTACard } from "@/components/shared/CTACard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { siteConfig } from "@/config/site";
import { REGULATIONS } from "@/data/regulations";
import { getShortformPro, SHORTFORM_PRO_SLUGS } from "@/data/shortform-professions";

export const dynamicParams = false;

export const generateStaticParams = () => SHORTFORM_PRO_SLUGS.map((profession) => ({ profession }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ profession: string }>;
}): Promise<Metadata> => {
	const { profession } = await params;
	const pro = getShortformPro(profession);
	if (!pro) return {};
	const url = `${siteConfig.url}/services/shortform/${pro.slug}`;
	return {
		title: pro.title,
		description: pro.description,
		keywords: pro.keywords,
		alternates: { canonical: url },
		openGraph: {
			type: "website",
			url,
			title: pro.title,
			description: pro.description,
			images: [
				{
					url: `${siteConfig.url}/og-image.png`,
					width: 1200,
					height: 630,
					alt: "온세상이마케팅이다",
				},
			],
		},
	};
};

export const ProShortformPage = async ({ params }: { params: Promise<{ profession: string }> }) => {
	const { profession } = await params;
	const pro = getShortformPro(profession);
	if (!pro) notFound();

	const reg = REGULATIONS.find((r) => r.slug === pro.regulationSlug);
	const url = `${siteConfig.url}/services/shortform/${pro.slug}`;

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: `${pro.profession} 마케팅`,
		serviceType: `${pro.profession} 숏폼·블로그·SNS 마케팅 대행`,
		url,
		areaServed: "KR",
		provider: { "@id": `${siteConfig.url}/#organization` },
		description: pro.description,
	};
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url },
			{
				"@type": "ListItem",
				position: 2,
				name: "숏폼 마케팅",
				item: `${siteConfig.url}/services/shortform`,
			},
			{ "@type": "ListItem", position: 3, name: `${pro.profession} 마케팅`, item: url },
		],
	};
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: pro.faq.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

			<ProShortformHero
				eyebrow={pro.eyebrow}
				titleLead={pro.titleLead}
				titleHighlight={pro.titleHighlight}
				sub={pro.heroSub}
				accent={pro.accent}
				icon={pro.icon}
			/>

			{/* Why */}
			<section className="bg-slate-50 px-4 py-20 md:px-8 md:py-28">
				<div className="mx-auto max-w-6xl">
					<SectionHeading eyebrow="Why" title={pro.whyTitle} highlight={pro.whyHighlight} />
					<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{pro.why.map((w, i) => (
							<Reveal key={w.title} delay={i * 0.08}>
								<div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
									<h3 className="font-bold text-foreground text-lg tracking-tight">{w.title}</h3>
									<p className="mt-3 text-muted-foreground leading-relaxed">{w.body}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* What to film */}
			<section className="bg-white px-4 py-20 md:px-8 md:py-28">
				<div className="mx-auto max-w-6xl">
					<SectionHeading
						eyebrow="Content"
						title={`${pro.profession} 숏폼, `}
						highlight="무엇을 찍나"
						sub="신뢰를 쌓는 포맷으로 기획합니다."
					/>
					<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
						{pro.contentTypes.map((c, i) => (
							<Reveal key={c.title} delay={i * 0.06}>
								<SpotlightCard className="h-full rounded-2xl" glow={`${pro.accent}2e`}>
									<div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
										<h3 className="font-bold text-lg tracking-tight" style={{ color: pro.accent }}>
											{c.title}
										</h3>
										<p className="mt-2 text-muted-foreground leading-relaxed">{c.body}</p>
									</div>
								</SpotlightCard>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Ad regulation (differentiator) */}
			{reg ? (
				<section className="bg-slate-50 px-4 py-20 md:px-8 md:py-28">
					<div className="mx-auto max-w-5xl">
						<SectionHeading
							eyebrow="Ad Regulation"
							title={`${pro.profession} 광고, `}
							highlight="되는 것과 안 되는 것"
							sub={`발행 전 ${reg.law}을 직접 검토합니다.`}
						/>
						<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
							<Reveal direction="left">
								<div className="h-full rounded-2xl border border-[#e11d29]/25 bg-white p-7">
									<p className="font-semibold text-[#e11d29] text-sm">가능한 표현</p>
									<ul className="mt-4 space-y-3">
										{reg.allowed.map((a) => (
											<li key={a} className="flex gap-2.5 text-slate-700 leading-relaxed">
												<Check className="mt-0.5 h-5 w-5 shrink-0 text-[#e11d29]" />
												<span>{a}</span>
											</li>
										))}
									</ul>
								</div>
							</Reveal>
							<Reveal direction="right">
								<div className="h-full rounded-2xl border border-rose-200 bg-white p-7">
									<p className="font-semibold text-rose-500 text-sm">금지되는 표현</p>
									<ul className="mt-4 space-y-3">
										{reg.prohibited.map((p) => (
											<li key={p} className="flex gap-2.5 text-slate-700 leading-relaxed">
												<X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
												<span>{p}</span>
											</li>
										))}
									</ul>
								</div>
							</Reveal>
						</div>
					</div>
				</section>
			) : null}

			{/* Process */}
			<section className="bg-white px-4 py-20 md:px-8 md:py-28">
				<div className="mx-auto max-w-4xl">
					<SectionHeading eyebrow="Process" title="이렇게 " highlight="만듭니다" />
					<div className="mt-12 space-y-4">
						{pro.process.map((s, i) => (
							<Reveal key={s.step} delay={i * 0.06}>
								<div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
									<span className="font-bold text-2xl" style={{ color: pro.accent }}>
										{s.step}
									</span>
									<div>
										<h3 className="font-bold text-foreground tracking-tight">{s.title}</h3>
										<p className="mt-1.5 text-muted-foreground leading-relaxed">{s.body}</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-slate-50 px-4 py-20 md:px-8 md:py-28">
				<div className="mx-auto max-w-3xl">
					<SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
					<dl className="mt-10 space-y-7">
						{pro.faq.map((item) => (
							<div key={item.q} className="border-slate-200 border-b pb-6">
								<dt className="font-semibold text-foreground text-lg">Q. {item.q}</dt>
								<dd className="mt-2.5 text-slate-700 leading-relaxed">{item.a}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* 관련 인사이트 (내부링크 — 토픽 클러스터) */}
			{pro.relatedLinks && pro.relatedLinks.length > 0 ? (
				<section className="bg-white px-4 py-16 md:px-8 md:py-20">
					<div className="mx-auto max-w-4xl">
						<SectionHeading
							eyebrow="More"
							title={`${pro.profession} 마케팅, `}
							highlight="더 알아보기"
						/>
						<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
							{pro.relatedLinks.map((l, i) => (
								<Reveal key={l.href} delay={i * 0.06}>
									<Link
										href={l.href}
										className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#ef3c39]/50"
									>
										<span className="break-keep font-medium text-foreground text-sm leading-snug">
											{l.label}
										</span>
										<ArrowRight className="h-4 w-4 shrink-0 text-[#e11d29] transition-transform group-hover:translate-x-1" />
									</Link>
								</Reveal>
							))}
						</div>
					</div>
				</section>
			) : null}

			<CTACard
				variant="gradient"
				eyebrow="온세상이마케팅이다 · 마케팅 컨설팅"
				headline={`${pro.profession} 마케팅, 지금 시작하세요.`}
				sub="첫 상담은 무료입니다. 광고 규정 검토부터 함께 봅니다."
			/>
		</>
	);
};

export default ProShortformPage;
