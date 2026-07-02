import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";
import { ADRESULT_FEATURED_VIDEO } from "@/data/adresult-youtube";

export const metadata: Metadata = {
	title: "회사소개 | 애드리절트(ADRESULT)",
	description:
		"고객과 진심으로 소통하며 끊임없이 연구하는, 결과로 말하는 광고회사 애드리절트를 소개합니다.",
};

const VALUES = [
	{
		en: "Communication",
		ko: "고객과 진정성 있게 소통하며 그들의 마케팅 고민을 깊이 이해하고 함께 해결책을 찾습니다.",
	},
	{
		en: "Knowledge",
		ko: "고객의 목표 달성과 성장을 위해 끊임없이 연구하며, 그 과정에서 3,500여 개의 마케팅 지식을 축적한 전문가들입니다.",
	},
	{
		en: "Growth",
		ko: "고객의 목표를 함께 달성하기 위해 끊임없이 성장합니다.",
	},
	{
		en: "Result",
		ko: "경험과 노하우를 바탕으로 한 마케팅 전략은 고객의 지속적인 성장과 만족을 이끌어내며, 확실한 성과를 만들어냅니다.",
	},
];

export const IntroducePage = () => {
	return (
		<>
			<CompanyHero />
			<CompanyTabs />

			{/* INTRODUCE ADRESULT */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
					<Reveal>
						<p className="mb-5 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Introduce ADRESULT
						</p>
						<p className="break-keep text-2xl text-slate-600 leading-relaxed md:text-3xl">
							고객과 진심으로 소통하며 끊임없이 연구합니다.
							<br />
							멈추지 않고 성장하며, 당신의 성공을 함께 만들어가는
						</p>
						<p className="mt-4 break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
							결과로 말하는 광고회사
							<br />
							<span className="text-[#ef3c39]">애드리절트</span>입니다.
						</p>
					</Reveal>

					<Reveal direction="scale">
						<Link
							href={`https://www.youtube.com/watch?v=${ADRESULT_FEATURED_VIDEO}`}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative block aspect-video overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-1 ring-black/5"
						>
							<Image
								src={`https://i.ytimg.com/vi/${ADRESULT_FEATURED_VIDEO}/maxresdefault.jpg`}
								alt="애드리절트 소개 영상"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							/>
						</Link>
					</Reveal>
				</div>
			</section>

			{/* 4 VALUES */}
			<section className="bg-slate-50 px-4 py-24 md:px-8 md:py-28">
				<div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
					{VALUES.map((v, i) => (
						<Reveal key={v.en} delay={i * 0.08}>
							<div className="h-full rounded-2xl bg-white p-8 shadow-[0_2px_24px_rgba(15,23,42,0.05)] md:p-10">
								<p className="font-extrabold text-2xl text-[#ef3c39] tracking-tight md:text-3xl">
									{v.en}
								</p>
								<div className="mt-4 mb-5 h-px w-10 bg-[#ef3c39]/40" />
								<p className="break-keep text-base text-slate-600 leading-relaxed md:text-lg">
									{v.ko}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* KNOW-HOW */}
			<section className="bg-white px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
						ADRESULT Marketing Know-how
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						전국에서 가장 탁월한
						<br />
						<span className="text-[#ef3c39]">병원마케팅 노하우</span>
					</h2>
					<Link
						href="/services/professional"
						className="mt-8 inline-flex rounded-full bg-[#ef3c39] px-7 py-3.5 font-bold text-base text-white transition-all hover:scale-[1.03] hover:bg-[#e11d29]"
					>
						성공사례 자세히 보기
					</Link>
				</Reveal>
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

export default IntroducePage;
