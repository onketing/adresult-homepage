import { Equal, Plus } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "회사소개 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/about" },
	description:
		"고객과 진심으로 소통하며 끊임없이 연구하는, 결과로 말하는 광고회사 애드리절트를 소개합니다.",
};

type ValueBlock = {
	img: string;
	w: number;
	h: number;
	alt: string;
	en: string;
	desc: ReactNode;
	op?: "plus" | "equal";
	red?: boolean;
};

const VALUE_BLOCKS: ValueBlock[] = [
	{
		img: "/about/about-1.jpg",
		w: 1920,
		h: 1119,
		alt: "고객과 소통하는 애드리절트",
		en: "Communication",
		op: "plus",
		desc: (
			<>
				고객과 진정성 있게 소통하며
				<br />
				그들의 마케팅 고민을 깊이 이해하고{" "}
				<strong className="font-bold text-[#0a0a0a]">함께 해결책을 찾습니다.</strong>
			</>
		),
	},
	{
		img: "/about/about-2.jpg",
		w: 1512,
		h: 938,
		alt: "마케팅 지식을 축적하는 애드리절트",
		en: "Knowledge",
		op: "plus",
		desc: (
			<>
				우리는 고객의 목표 달성과 성장을 위해 끊임없이 연구하며
				<br />그 과정에서{" "}
				<strong className="font-bold text-[#0a0a0a]">
					3,500여 개의 마케팅 지식을 축적한 전문가들
				</strong>
				입니다.
			</>
		),
	},
	{
		img: "/about/about-3.jpg",
		w: 1874,
		h: 1010,
		alt: "함께 성장하는 애드리절트",
		en: "Growth",
		op: "equal",
		desc: (
			<>
				우리는 고객의 목표를 함께 달성하기 위해{" "}
				<strong className="font-bold text-[#0a0a0a]">끊임없이 성장합니다.</strong>
			</>
		),
	},
	{
		img: "/about/about-4.jpg",
		w: 1541,
		h: 888,
		alt: "확실한 성과를 만드는 애드리절트",
		en: "Result",
		red: true,
		desc: (
			<>
				우리의 경험과 노하우를 바탕으로 한 마케팅 전략은
				<br />
				고객의 지속적인 성장과 만족을 이끌어내며{" "}
				<strong className="font-bold text-[#0a0a0a]">확실한 성과를 만들어냅니다.</strong>
			</>
		),
	},
];

const KNOWHOW_CARDS: { img: string; alt: string; desc: string; offset: string }[] = [
	{
		img: "/about/about-seo.jpg",
		alt: "탁월한 S.E.O 실력",
		desc: "고객이 검색할 때 우리 브랜드를 쉽게 찾을 수 있도록, 다양한 온라인 매체를 활용해 검색 노출을 최적화합니다.",
		offset: "lg:mt-0",
	},
	{
		img: "/about/about-marketing.jpg",
		alt: "마케팅 관련 지식 3,500여 개 보유",
		desc: "고객과 끊임없이 소통하며 발견한 마케팅 지식만 3,500여 개. 이를 바탕으로 우리 병원을 더욱 빠르고 효과적으로 관리합니다.",
		offset: "lg:mt-24",
	},
	{
		img: "/about/about-contents.jpg",
		alt: "구매전환을 높이는 콘텐츠 기획력",
		desc: "수많은 브랜드 중에서 왜 우리여야 하는지 ‘Why Me’를 고민하며 차별화된 콘텐츠를 기획합니다.",
		offset: "lg:mt-10",
	},
	{
		img: "/about/about-study.jpg",
		alt: "대행사를 가르치는 대행사",
		desc: "애드리절트는 마케팅 실행사이자 대행사로서 소상공인, 마케팅 대행사, 의사 등을 대상으로 마케팅 교육을 제공할 만큼 검증된 실력을 갖추고 있습니다.",
		offset: "lg:mt-28",
	},
];

export const AboutPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "회사소개", path: "/about" },
				]}
			/>
			<CompanyHero />
			<CompanyTabs />

			{/* INTRODUCE — 왼쪽 고정(sticky) / 오른쪽 스크롤 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
					{/* LEFT — sticky */}
					<div>
						<div className="md:sticky md:top-28">
							<p className="mb-5 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
								Introduce ADRESULT
							</p>
							<p className="break-keep text-slate-600 text-xl leading-relaxed md:text-2xl">
								고객과 진심으로 소통하며 끊임없이 연구합니다.
								<br />
								멈추지 않고 성장하며, 당신의 성공을 함께 만들어가는
							</p>
							<p className="mt-4 break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
								결과로 말하는 광고회사
								<br />
								<span className="text-[#ef3c39]">애드리절트</span>입니다.
							</p>
						</div>
					</div>

					{/* RIGHT — 스크롤되는 이미지 스택 (1 + 2 + 3 = 4) */}
					<div className="flex flex-col gap-8">
						{VALUE_BLOCKS.map((b) => (
							<div key={b.en}>
								<Reveal direction="scale">
									<Image
										src={b.img}
										alt={b.alt}
										width={b.w}
										height={b.h}
										sizes="(max-width: 768px) 100vw, 50vw"
										className="h-auto w-full rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.1)] ring-1 ring-black/5"
									/>
									<p
										className={cn(
											"mt-5 font-extrabold text-2xl tracking-tight md:text-3xl",
											b.red ? "text-[#ef3c39]" : "text-[#0a0a0a]",
										)}
									>
										{b.en}
									</p>
									<p className="mt-2 break-keep text-base text-slate-500 leading-relaxed md:text-lg">
										{b.desc}
									</p>
								</Reveal>
								{b.op === "plus" && (
									<div className="flex justify-center pt-8">
										<Plus className="h-10 w-10 text-[#e11d29]" strokeWidth={4} aria-hidden="true" />
									</div>
								)}
								{b.op === "equal" && (
									<div className="flex justify-center pt-8">
										<Equal
											className="h-10 w-10 text-[#e11d29]"
											strokeWidth={4}
											aria-hidden="true"
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* MARKETING KNOW-HOW */}
			<section className="bg-white px-4 pb-28 md:px-8 md:pb-32">
				<div className="mx-auto max-w-6xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							ADRESULT Marketing Know-how
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							전국에서 가장 탁월한 <span className="text-[#ef3c39]">병원마케팅 노하우</span>
						</h2>
					</Reveal>

					<div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
						{KNOWHOW_CARDS.map((card, i) => (
							<Reveal key={card.img} delay={(i % 4) * 0.08} className={card.offset}>
								<div className="group relative aspect-[640/950] overflow-hidden rounded-2xl">
									<Image
										src={card.img}
										alt={card.alt}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60" />
									<div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
										<p className="break-keep font-semibold text-sm text-white leading-relaxed md:text-base">
											{card.desc}
										</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* CUSTOMIZED STRATEGY */}
			<section className="bg-[#e11d29] px-4 py-24 text-center md:py-32">
				<Reveal>
					<p className="mb-4 font-bold text-sm text-white/80 uppercase tracking-[0.25em] md:text-base">
						Customized Strategy
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-white leading-tight tracking-tight md:text-5xl">
						병원마케팅 맞춤 전략
					</h2>
					<p className="mt-5 break-keep font-semibold text-lg text-white/90 md:text-2xl">
						리스크 최소화, 목표 달성 극대화
					</p>
				</Reveal>
			</section>
		</>
	);
};

export default AboutPage;
