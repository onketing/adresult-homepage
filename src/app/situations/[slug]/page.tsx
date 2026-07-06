import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import { getSituation, SITUATION_SLUGS } from "@/data/situations";

export const dynamicParams = false;

export const generateStaticParams = () => SITUATION_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const s = getSituation(slug);
	if (!s) return {};
	return {
		title: s.metaTitle,
		description: s.metaDescription,
		keywords: s.keywords,
		alternates: { canonical: `/situations/${s.slug}` },
	};
};

export const SituationPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const s = getSituation(slug);
	if (!s) notFound();

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
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "상황별 마케팅", path: `/situations/${s.slug}` },
					{ name: `${s.name} 마케팅`, path: `/situations/${s.slug}` },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-44 md:pb-32 lg:px-8">
					<Reveal direction="none">
						<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">{s.eyebrow}</p>
						<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
							{s.heroTitle.split("\n").map((line, i) => (
								<span key={line}>
									{i > 0 && <br />}
									{line}
								</span>
							))}
						</h1>
						<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							{s.heroSub}
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단 신청
							</Link>
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								카카오톡 문의
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 2. 이런 고민이 있다면 — pains */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							PAIN POINTS
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이런 고민이 있다면
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							{s.name} 원장님들이 상담에서 가장 자주 꺼내는 이야기입니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{s.pains.map((pain, i) => (
							<Reveal key={pain} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-9">
									<span aria-hidden="true" className="block h-[7px] w-[7px] bg-[#C8102E]" />
									<p className="mt-5 break-keep font-bold text-[#111111] text-[15px] leading-[1.7] md:text-[17px]">
										{pain}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. 먼저 점검할 것 — checkpoints */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							CHECK FIRST
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							채널보다 먼저,
							<br />
							<span className="text-[#C8102E]">점검</span>부터 시작합니다
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							어떤 채널을 할지보다, 지금 무엇이 비어 있는지 확인하는 것이 먼저입니다. {s.name}
							이라면 아래 항목부터 함께 점검합니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{s.checkpoints.map((cp, i) => (
							<Reveal key={cp.title} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-11">
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="mt-4 break-keep font-extrabold text-[#111111] text-lg md:text-xl">
										{cp.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
										{cp.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 4. 추천 채널 조합 — mix */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							CHANNEL MIX
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							{s.name}에 자주 제안하는
							<br />
							채널 조합
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							모든 채널을 한 번에 권하지 않습니다. 진단에서 확인된 우선순위에 따라, 필요한 채널부터
							순서대로 시작합니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{s.mix.map((m, i) => (
							<Reveal key={m.channel} delay={i * 0.08}>
								<Link
									href={m.href}
									className="group flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E] md:p-11"
								>
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="mt-4 break-keep font-extrabold text-[#111111] text-lg transition-colors group-hover:text-[#C8102E] md:text-xl">
										{m.channel}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
										{m.role}
									</p>
									<span className="mt-5 font-semibold text-[#444444] text-sm transition-colors group-hover:text-[#C8102E]">
										자세히 보기 →
									</span>
								</Link>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.16}>
						<p className="mt-8 break-keep text-[#A5A2A0] text-[13px] leading-[1.7]">
							* 위 조합은 예시이며, 진단 결과에 따라 채널 구성과 우선순위가 달라집니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 5. 진행 순서 — steps */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">PROCESS</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이렇게 진행합니다
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{s.steps.map((step, i) => (
							<Reveal key={step.step} delay={i * 0.08}>
								<article className="border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-9">
									<div className="grid gap-x-8 gap-y-3 md:grid-cols-[96px_1fr]">
										<span className="font-mono text-[#C8102E] text-sm tracking-[0.12em]">
											{step.step}
										</span>
										<div>
											<h3 className="break-keep font-extrabold text-[#111111] text-lg md:text-xl">
												{step.title}
											</h3>
											<p className="mt-2 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
												{step.desc}
											</p>
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 6. FAQ — FAQPage 스키마 + 본문 노출 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">FAQ</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							{s.name} 마케팅,
							<br />
							자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{s.faq.map((f, i) => (
							<Reveal key={f.q} delay={i * 0.06}>
								<article className="border border-[#E4E2DF] bg-white p-7 md:p-9">
									<h3 className="break-keep font-extrabold text-[#111111] text-lg md:text-xl">
										Q. {f.q}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
										{f.a}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 7. 중간 CTA — 진단 신청 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24 lg:px-8">
					<Reveal>
						<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							DIAGNOSIS FIRST
						</p>
						<h2 className="mx-auto max-w-3xl break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
							{s.name}, 지금 무엇이
							<br />
							비어 있는지부터 확인하세요
						</h2>
						<p className="mx-auto mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							진료과·상권·현재 채널 상태를 기준으로 진단한 뒤, 필요한 채널부터 우선순위로
							제안합니다.
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단받기
							</Link>
						</div>
					</Reveal>
				</div>
			</section>

			<RelatedPages items={s.related} />

			<FinalCTA />
		</>
	);
};

export default SituationPage;
