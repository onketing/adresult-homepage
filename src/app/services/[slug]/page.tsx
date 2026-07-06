import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import { EXTRA_SERVICE_SLUGS, getExtraService } from "@/data/services-extra";

// aio·shortform·threads·cafe-viral 정적 폴더와 공존 — 이 라우트는 4개 slug만 생성한다.
export const dynamicParams = false;

export const generateStaticParams = () => EXTRA_SERVICE_SLUGS.map((slug) => ({ slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const s = getExtraService(slug);
	if (!s) return {};
	return {
		title: s.metaTitle,
		description: s.metaDescription,
		keywords: s.keywords,
		alternates: { canonical: `/services/${s.slug}` },
	};
};

export const ExtraServicePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const s = getExtraService(slug);
	if (!s) notFound();

	const pageUrl = `${siteConfig.url}/services/${s.slug}`;
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${pageUrl}#service`,
		name: s.name,
		url: pageUrl,
		provider: { "@id": `${siteConfig.url}/#organization` },
		areaServed: "KR",
		serviceType: `${s.name} (병원마케팅)`,
		description: s.metaDescription,
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
					{ name: s.name, path: `/services/${s.slug}` },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">{s.eyebrow}</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						{s.heroTitle.split("\n").map((line, i) => (
							<span key={line}>
								{i > 0 && <br />}
								{line}
							</span>
						))}
						<span className="text-[#C8102E]">.</span>
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
				</div>
			</section>

			{/* 2. 이 서비스가 필요한 이유 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHY THIS SERVICE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							{s.why.title}
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-6 lg:grid-cols-3">
						{s.why.paragraphs.map((p, i) => (
							<Reveal key={p} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-9">
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<p className="mt-4 break-keep text-[#333333] text-[15px] leading-[1.8]">{p}</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. 적합 / 비적합 병원 — 2컬럼 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							FIT CHECK — 우리 병원에 맞을까
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이런 병원에 <span className="text-[#C8102E]">적합</span>합니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-6 lg:grid-cols-2">
						<Reveal>
							<article className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-7 md:p-11">
								<p className="font-mono text-[#C8102E] text-[11px] tracking-[0.14em]">
									GOOD FIT — 이런 병원에 적합합니다
								</p>
								<ul className="mt-6 space-y-4">
									{s.fitFor.map((item) => (
										<li key={item} className="flex gap-3">
											<span
												aria-hidden="true"
												className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-[#C8102E]"
											/>
											<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
												{item}
											</span>
										</li>
									))}
								</ul>
							</article>
						</Reveal>
						{s.notFitFor && (
							<Reveal delay={0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-11">
									<p className="font-mono text-[#767370] text-[11px] tracking-[0.14em]">
										NOT YET — 이런 병원엔 먼저 권하지 않습니다
									</p>
									<ul className="mt-6 space-y-4">
										{s.notFitFor.map((item) => (
											<li key={item} className="flex gap-3">
												<span
													aria-hidden="true"
													className="mt-[9px] h-[7px] w-[7px] shrink-0 border border-[#A5A2A0]"
												/>
												<span className="break-keep text-[#767370] text-[14.5px] leading-[1.7]">
													{item}
												</span>
											</li>
										))}
									</ul>
									<p className="mt-6 break-keep border-[#E4E2DF] border-t pt-5 text-[#767370] text-[13.5px] leading-[1.7]">
										애드리절트는 진단 후 필요한 병원에만 제안합니다. 지금 이 서비스가 우선이
										아니라면 그 사실을 그대로 말씀드립니다.
									</p>
								</article>
							</Reveal>
						)}
					</div>
				</div>
			</section>

			{/* 4. 운영 방식 — 단계 타임라인 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							HOW WE OPERATE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							{s.name}, <span className="text-[#C8102E]">이렇게</span> 운영합니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{s.how.map((h, i) => (
							<Reveal key={h.step} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-9">
									<span className="font-mono text-[#C8102E] text-[13px] tracking-[0.12em]">
										STEP {h.step}
									</span>
									<h3 className="mt-4 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										{h.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{h.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 5. 콘텐츠 예시 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							CONTENT EXAMPLES
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이런 <span className="text-[#C8102E]">콘텐츠 구조</span>로 만듭니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-6 lg:grid-cols-2">
						{s.examples.map((g, i) => (
							<Reveal key={g.label} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-7 md:p-9">
									<p className="font-mono text-[#767370] text-[11px] tracking-[0.14em]">
										{g.label}
									</p>
									<ul className="mt-5 space-y-3">
										{g.items.map((item) => (
											<li
												key={item}
												className="break-keep border border-[#E4E2DF] bg-white px-4 py-3 font-semibold text-[#555250] text-[13.5px] leading-[1.6]"
											>
												{item}
											</li>
										))}
									</ul>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 6. 진료과별 적용 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							BY DEPARTMENT
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							진료과가 다르면
							<br />
							<span className="text-[#C8102E]">적용 방식</span>도 다릅니다.
						</h2>
					</Reveal>
					<div className="mt-12 divide-y divide-[#E4E2DF] border border-[#E4E2DF] bg-white">
						{s.byDept.map((d, i) => (
							<Reveal key={d.href} delay={i * 0.06} direction="none">
								<Link
									href={d.href}
									className="group flex flex-col gap-1.5 px-6 py-5 transition-colors hover:bg-[#FAFAFA] md:flex-row md:items-baseline md:gap-8 md:px-8"
								>
									<span className="w-28 shrink-0 font-extrabold text-[#111111] text-[16px] tracking-tight transition-colors group-hover:text-[#C8102E]">
										{d.dept}
									</span>
									<span className="flex-1 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{d.desc}
									</span>
									<span
										aria-hidden="true"
										className="hidden font-mono text-[#A5A2A0] transition-colors group-hover:text-[#C8102E] md:block"
									>
										→
									</span>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 7. 리포트·성과 점검 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							MONTHLY REPORT
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							매월, <span className="text-[#C8102E]">이 항목들</span>을 점검해 보고합니다.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							감으로 운영하지 않습니다. 리포트는 다음 달 운영 판단의 근거가 되도록 데이터 기반으로
							정리합니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{s.report.map((r, i) => (
							<Reveal key={r} delay={i * 0.08}>
								<div className="flex h-full gap-4 border border-[#E4E2DF] bg-[#FAFAFA] p-6">
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span className="break-keep font-semibold text-[#333333] text-[14.5px] leading-[1.7]">
										{r}
									</span>
								</div>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.1}>
						<p className="mt-8 break-keep font-mono text-[#A5A2A0] text-[11.5px] leading-relaxed tracking-[0.04em]">
							* 리포트는 조회수·키워드 노출 현황 등 채널 지표 중심으로 작성됩니다. 문의·예약·내원
							수치는 병원 내부에서만 확인 가능한 데이터로, 병원에서 공유해 주시면 채널 지표와 연결해
							함께 해석합니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 8. FAQ — 카드형 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">FAQ</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							{s.name}, 자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 lg:grid-cols-2">
						{s.faq.map((f, i) => (
							<Reveal key={f.q} delay={i * 0.06}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-9">
									<h3 className="break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										Q. {f.q}
									</h3>
									<p className="mt-4 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
										{f.a}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 9. 중간 CTA — 진단 신청 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] py-16 text-white md:py-24">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#8F8C89] text-[12px] tracking-[0.14em]">
							FREE DIAGNOSIS
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl tracking-tight md:text-5xl">
							{s.name},
							<br />
							우리 병원에 맞는지부터 진단받으세요.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							진단 결과 이 서비스가 우선이 아니라면, 지금 병원에 필요한 순서를 그대로 말씀드립니다.
						</p>
						<div className="mt-9 flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단 신청
							</Link>
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								전화 문의 {siteConfig.contact.tel}
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 10. 관련 페이지 */}
			<RelatedPages items={s.related} />

			{/* 11. 최종 CTA */}
			<FinalCTA />
		</>
	);
};

export default ExtraServicePage;
