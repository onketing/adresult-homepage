import { Phone } from "lucide-react";
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
						<p className="mb-4 font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
							{s.name} 병원마케팅
						</p>
						<h1 className="break-keep font-extrabold text-3xl text-[#111111] leading-tight tracking-tight md:text-5xl">
							{s.name} 신환은
							<br />
							<span className="text-[#C8102E]">검색·AI·숏폼</span>으로 만듭니다
						</h1>
						<p className="mx-auto mt-6 max-w-2xl break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							{s.heroSub}
						</p>
						<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="inline-flex items-center gap-2 bg-[#C8102E] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#A50D26]"
							>
								<Phone className="h-5 w-5" />
								{s.name} 마케팅 문의 {siteConfig.contact.tel}
							</a>
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 border border-[#D9D6D3] px-7 py-3.5 font-bold text-[#111111] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
							>
								카카오톡 상담
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* PAIN — 다크 밴드 */}
			<section className="w-full bg-[#0B0B0B] px-4 py-24 text-center md:px-8 md:py-28">
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
								<div className="rounded-xl bg-white px-6 py-5 text-center font-bold text-[#111111] text-base md:text-lg">
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
						<p className="mb-4 font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
							How we do
						</p>
						<h2 className="break-keep font-extrabold text-2xl text-[#111111] leading-snug tracking-tight md:text-4xl">
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
								<span className="font-mono text-[#C8102E] text-xs tracking-[0.12em]">01</span>
								<h3 className="mt-4 font-extrabold text-[#111111] text-xl md:text-2xl">
									{s.name} AIO마케팅
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									ChatGPT·Gemini·구글 AI 검색에서 {s.name}를 추천받는 AI 검색 노출(GEO). 5개 AI 엔진
									노출을 추적·관리합니다.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#C8102E] text-sm">
									자세히 보기 →
								</span>
							</Link>
						</Reveal>
						<Reveal direction="up" delay={0.08}>
							<Link
								href="/services/shortform"
								className="group block h-full rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-black/5 transition-transform hover:-translate-y-1 md:p-10"
							>
								<span className="font-mono text-[#C8102E] text-xs tracking-[0.12em]">02</span>
								<h3 className="mt-4 font-extrabold text-[#111111] text-xl md:text-2xl">
									{s.name} 끝장숏폼
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									{s.name} 숏폼·릴스·쇼츠를 현직 인플루언서가 기획·촬영·관리까지. 조회수가 아닌
									예약을 만드는 전환 중심 영상 마케팅.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#C8102E] text-sm">
									자세히 보기 →
								</span>
							</Link>
						</Reveal>
						<Reveal direction="up" delay={0.16}>
							<Link
								href="/services/threads"
								className="group block h-full rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-black/5 transition-transform hover:-translate-y-1 md:p-10"
							>
								<span className="font-mono text-[#C8102E] text-xs tracking-[0.12em]">03</span>
								<h3 className="mt-4 font-extrabold text-[#111111] text-xl md:text-2xl">
									{s.name} 스레드 마케팅
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									원장님의 전문성을 매일 읽히는 문장으로. 광고처럼 보이지 않는 전문가 채널에서
									댓글·DM 문의 전환을 만듭니다.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#C8102E] text-sm">
									자세히 보기 →
								</span>
							</Link>
						</Reveal>
						<Reveal direction="up" delay={0.24}>
							<Link
								href="/services/cafe-viral"
								className="group block h-full rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-black/5 transition-transform hover:-translate-y-1 md:p-10"
							>
								<span className="font-mono text-[#C8102E] text-xs tracking-[0.12em]">04</span>
								<h3 className="mt-4 font-extrabold text-[#111111] text-xl md:text-2xl">
									{s.name} 카페바이럴
								</h3>
								<p className="mt-3 break-keep text-slate-600 leading-relaxed">
									실제 환자들이 정보를 주고받는 지역 카페·맘카페에서 우리 {s.name} 이야기가
									자연스럽게 회자되도록 평판을 설계합니다.
								</p>
								<span className="mt-4 inline-flex items-center gap-1 font-bold text-[#C8102E] text-sm">
									자세히 보기 →
								</span>
							</Link>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 피부과 전용 — 핵심 랜딩 강화 */}
			{s.slug === "dermatology" && (
				<section className="border-[#E4E2DF] border-y bg-[#FAFAFA] px-4 py-24 md:px-8 md:py-28">
					<div className="mx-auto max-w-[1100px]">
						<Reveal>
							<p className="mb-4 font-mono text-[#767370] text-xs tracking-[0.14em]">
								DERMATOLOGY PLAYBOOK
							</p>
							<h2 className="break-keep font-extrabold text-2xl text-[#111111] leading-snug tracking-tight md:text-4xl">
								피부과 마케팅은
								<br />
								노출보다 <span className="text-[#C8102E]">설계</span>가 먼저입니다
							</h2>
							<p className="mt-5 max-w-2xl break-keep text-base text-slate-600 leading-relaxed">
								피부과는 광고비 경쟁이 심하고 비슷한 콘텐츠가 넘쳐, 가격 비교로만 소비되기 쉽습니다.
								애드리절트는 시술별 콘텐츠 매트릭스로 검색 접점을 만들고, 숏폼으로 시술 이해도와
								신뢰를 쌓고, 스레드로 원장님 브랜딩을 강화하고, 카페바이럴로 지역 인지도를 확보하는
								채널 조합을 설계합니다.
							</p>
						</Reveal>

						{/* 시술별 콘텐츠 매트릭스 */}
						<Reveal delay={0.08}>
							<div className="mt-12 border border-[#E4E2DF] bg-white p-7 md:p-10">
								<p className="font-mono text-[#767370] text-[11px] tracking-[0.14em]">
									TREATMENT CONTENT MATRIX — 시술별 콘텐츠 매트릭스
								</p>
								<div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
									{[
										"리프팅",
										"보톡스",
										"필러",
										"여드름",
										"색소",
										"제모",
										"피부관리",
										"안티에이징",
									].map((t) => (
										<div
											key={t}
											className="border border-[#E4E2DF] bg-[#FAFAFA] px-4 py-3.5 text-center font-bold text-[#111111] text-sm md:text-base"
										>
											{t}
										</div>
									))}
								</div>
								<p className="mt-5 break-keep text-slate-600 text-sm leading-relaxed">
									시술마다 검색 키워드 · 숏폼(피부과 릴스) 주제 · FAQ · 후기 콘텐츠를 한 세트로
									설계합니다. 같은 시술이라도 환자가 검색하는 언어에 맞춰 콘텐츠 각도를 나눕니다.
								</p>
							</div>
						</Reveal>

						{/* 전환 퍼널 */}
						<Reveal delay={0.12}>
							<div className="mt-6 border border-[#111111] bg-[#0B0B0B] p-7 text-white md:p-10">
								<p className="font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
									CHANNEL MIX & FUNNEL — 채널 믹스와 전환 퍼널
								</p>
								<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
									{[
										"AIO — AI 검색 접점 확보",
										"숏폼 — 시술 이해와 신뢰 형성",
										"스레드 — 원장님 브랜딩",
										"카페바이럴 — 지역 인지도",
										"블로그·홈페이지·후기 — 전환 보조",
									].map((step, i, arr) => (
										<span key={step} className="flex items-center gap-3">
											<span className="break-keep font-semibold text-sm md:text-[15px]">
												{step}
											</span>
											{i < arr.length - 1 && (
												<span aria-hidden="true" className="font-bold text-[#C8102E]">
													→
												</span>
											)}
										</span>
									))}
								</div>
								<p className="mt-5 break-keep text-[#B5B2AF] text-sm leading-relaxed">
									상담 문의는 있는데 내원 전환이 낮다면, 채널이 아니라 연결 구조의 문제일 수
									있습니다. 애드리절트는 문의 전환을 고려해 채널 사이의 흐름까지 설계합니다.
								</p>
							</div>
						</Reveal>
					</div>
				</section>
			)}

			{/* FAQ — AEO(FAQPage 스키마 + 본문 노출) */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-28">
				<div className="mx-auto max-w-3xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
							FAQ
						</p>
						<h2 className="break-keep text-center font-extrabold text-2xl text-[#111111] leading-snug tracking-tight md:text-4xl">
							{s.name} 마케팅, 자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 space-y-4">
						{s.faq.map((f, i) => (
							<Reveal key={f.q} delay={i * 0.06}>
								<div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-black/5 md:p-8">
									<h3 className="break-keep font-bold text-[#111111] text-lg md:text-xl">
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
					<h2 className="font-bold text-[#111111] text-lg md:text-xl">다른 진료과 병원마케팅</h2>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						{others.map((o) => (
							<Link
								key={o.slug}
								href={`/specialty/${o.slug}`}
								className="border border-[#D9D6D3] bg-white px-5 py-2.5 font-medium text-[#111111] text-sm transition-colors hover:border-[#C8102E] hover:text-[#C8102E] md:text-base"
							>
								{o.name} 마케팅
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA — 다크 밴드 */}
			<section className="relative w-full overflow-hidden bg-[#090909] px-4 py-24 text-center md:py-32">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<Reveal className="relative">
					<h2 className="break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
						{s.name} 신환, 지금 애드리절트와 시작하세요
					</h2>
					<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
						<a
							href={`tel:${siteConfig.contact.tel}`}
							className="inline-flex items-center gap-2 bg-[#C8102E] px-7 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] md:text-lg"
						>
							<Phone className="h-5 w-5" />
							{s.name} 마케팅 문의 : {siteConfig.contact.tel}
						</a>
						<Link
							href="/contact"
							className="border border-[#3A3835] px-7 py-4 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] md:text-lg"
						>
							병원 마케팅 진단 신청
						</Link>
					</div>
				</Reveal>
			</section>
		</>
	);
};

export default SpecialtyPage;
