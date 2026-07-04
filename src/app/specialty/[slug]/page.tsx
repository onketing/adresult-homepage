import { Phone, Search, Sparkles, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import { getSpecialty, SPECIALTIES, SPECIALTY_SLUGS } from "@/data/specialties";

export const generateStaticParams = () => SPECIALTY_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const s = getSpecialty(slug);
	if (!s) return {};
	return {
		title: s.metaTitle,
		description: s.metaDescription,
		keywords: s.keywords,
		alternates: { canonical: `/specialty/${s.slug}` },
	};
};

export const SpecialtyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const s = getSpecialty(slug);
	if (!s) notFound();

	const others = SPECIALTIES.filter((x) => x.slug !== s.slug);
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: `${s.name} 병원마케팅`,
		url: `${siteConfig.url}/specialty/${s.slug}`,
		provider: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		description: s.metaDescription,
		areaServed: "KR",
		serviceType: `${s.name} 병원마케팅 (숏폼·AIO)`,
	};
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: s.faq.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마케팅", path: "/services/aio" },
					{ name: `${s.name} 마케팅`, path: `/specialty/${s.slug}` },
				]}
			/>

			{/* HERO */}
			<section className="bg-white px-4 pt-28 pb-20 text-center md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto max-w-4xl">
					<Reveal>
						<p className="mb-4 font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
							{s.name} 병원마케팅
						</p>
						<h1 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							{s.name} 신환은
							<br />
							<span className="text-[#e11d29]">검색·AI·숏폼</span>으로 만듭니다
						</h1>
						<p className="mx-auto mt-6 max-w-2xl break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							{s.heroSub}
						</p>
						<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="inline-flex items-center gap-2 rounded-full bg-[#e11d29] px-7 py-3.5 font-bold text-white transition-transform hover:scale-[1.03]"
							>
								<Phone className="h-5 w-5" />
								{s.name} 마케팅 문의 {siteConfig.contact.tel}
							</a>
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 font-bold text-[#0a0a0a] transition-colors hover:bg-slate-50"
							>
								카카오톡 상담
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* PAIN — 레드 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-4xl">
					<Reveal>
						<p className="text-lg text-white/85 md:text-xl">환자 심리: {s.psych}</p>
						<h2 className="mt-3 break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
							{s.name} 원장님, 이런 고민 있으신가요?
						</h2>
					</Reveal>
					<div className="mt-12 space-y-3">
						{s.pains.map((p, i) => (
							<Reveal key={p} delay={i * 0.06} direction="up">
								<div className="rounded-xl bg-white px-6 py-5 text-center font-bold text-[#0a0a0a] text-base md:text-lg">
									{p}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* APPROACH */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1100px]">
					<Reveal>
						<p className="mb-4 font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
							How we do
						</p>
						<h2 className="break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
							{s.name} 맞춤 병원마케팅, 애드리절트는 이렇게 합니다
						</h2>
						<p className="mx-auto mt-5 max-w-2xl break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							진료과목별 환자 심리에 맞춰 콘텐츠 구조를 다르게 설계합니다. {s.name} 마케팅은 검색·AI
							노출과 영상 신뢰를 함께 쌓아야 신환으로 이어집니다.
						</p>
					</Reveal>
					<div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7">
						<Reveal direction="up">
							<Link
								href="/services/aio"
								className="group block h-full rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-black/5 transition-transform hover:-translate-y-1 md:p-10"
							>
								<Sparkles className="h-9 w-9 text-[#e11d29]" />
								<h3 className="mt-4 font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
									{s.name} AIO마케팅
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									ChatGPT·Gemini·구글 AI 검색에서 {s.name}를 추천받는 AI 검색 노출(GEO). 5개 AI 엔진
									노출을 추적·관리합니다.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#e11d29] text-sm">
									자세히 보기 <Search className="h-4 w-4" />
								</span>
							</Link>
						</Reveal>
						<Reveal direction="up" delay={0.08}>
							<Link
								href="/services/shortform"
								className="group block h-full rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-black/5 transition-transform hover:-translate-y-1 md:p-10"
							>
								<Zap className="h-9 w-9 text-[#e11d29]" />
								<h3 className="mt-4 font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
									{s.name} 끝장숏폼
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									{s.name} 숏폼·릴스·쇼츠를 현직 인플루언서가 기획·촬영·관리까지. 조회수가 아닌
									예약을 만드는 전환 중심 영상 마케팅.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#e11d29] text-sm">
									자세히 보기 <Search className="h-4 w-4" />
								</span>
							</Link>
						</Reveal>
					</div>
				</div>
			</section>

			{/* FAQ — AEO(FAQPage 스키마 + 본문 노출) */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-28">
				<div className="mx-auto max-w-3xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
							FAQ
						</p>
						<h2 className="break-keep text-center font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
							{s.name} 마케팅, 자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 space-y-4">
						{s.faq.map((f, i) => (
							<Reveal key={f.q} delay={i * 0.06}>
								<div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-black/5 md:p-8">
									<h3 className="break-keep font-bold text-[#0a0a0a] text-lg md:text-xl">
										Q. {f.q}
									</h3>
									<p className="mt-3 break-keep text-slate-600 leading-relaxed">{f.a}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 다른 진료과 (내부 링크) */}
			<section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
				<div className="mx-auto max-w-[1100px] text-center">
					<h2 className="font-bold text-[#0a0a0a] text-lg md:text-xl">다른 진료과 병원마케팅</h2>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						{others.map((o) => (
							<Link
								key={o.slug}
								href={`/specialty/${o.slug}`}
								className="rounded-full border border-slate-300 bg-white px-5 py-2.5 font-medium text-[#0a0a0a] text-sm transition-colors hover:border-[#e11d29] hover:text-[#e11d29] md:text-base"
							>
								{o.name} 마케팅
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA — 레드 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<h2 className="break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
						{s.name} 신환, 지금 애드리절트와 시작하세요
					</h2>
					<a
						href={`tel:${siteConfig.contact.tel}`}
						className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ffe14d] px-7 py-4 font-extrabold text-[#0a0a0a] text-lg transition-transform hover:scale-[1.03] md:text-xl"
					>
						<Phone className="h-6 w-6 fill-[#e11d29] text-[#e11d29]" />
						{s.name} 마케팅 문의 : {siteConfig.contact.tel}
					</a>
				</Reveal>
			</section>
		</>
	);
};

export default SpecialtyPage;
