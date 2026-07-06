import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { GUIDE_CATEGORIES, GUIDES } from "@/data/guides";

export const metadata: Metadata = {
	title: "병원마케팅 가이드 — 진료과·채널·운영 실무 가이드 18편 | 애드리절트(ADRESULT)",
	description:
		"병원마케팅 실무 가이드 모음. 피부과·성형외과·정형외과·치과·한의원 등 진료과별 전략부터 릴스·쇼츠·인스타·맘카페 채널 운영, 비용·체크리스트·의료광고법까지 18편으로 정리했습니다.",
	keywords: [
		"병원마케팅 가이드",
		"병원마케팅",
		"병원 마케팅 전략",
		"진료과별 마케팅",
		"병원 숏폼 마케팅",
		"병원마케팅비용",
	],
	alternates: { canonical: "/guide" },
};

const CATEGORY_DESC: Record<(typeof GUIDE_CATEGORIES)[number], string> = {
	진료과별: "피부과·성형외과·정형외과·치과·한의원 — 진료과와 채널의 조합 전략",
	채널별: "릴스·쇼츠·인스타그램·맘카페·후기 — 채널이 작동하는 원리와 운영법",
	"운영 가이드": "비용·상담 준비·우선순위·의료광고법 — 원장님의 의사결정을 돕는 가이드",
};

export const GuideHubPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원마케팅 가이드", path: "/guide" },
				]}
			/>

			{/* HERO — 다크 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
						HOSPITAL MARKETING GUIDE
					</p>
					<h1 className="max-w-4xl break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						병원마케팅 가이드
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						진료과별 전략, 채널별 운영법, 비용과 규정까지. 병원 원장님이 마케팅을 판단하는 데 필요한
						실무 지식을 18편의 가이드로 정리했습니다.
					</p>
				</div>
			</section>

			{/* 카테고리별 카드 그리드 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<div className="space-y-16 md:space-y-20">
						{GUIDE_CATEGORIES.map((cat) => {
							const items = GUIDES.filter((g) => g.category === cat);
							return (
								<div key={cat}>
									<Reveal>
										<div className="flex items-baseline gap-x-4">
											<span aria-hidden="true" className="h-[7px] w-[7px] bg-[#C8102E]" />
											<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight md:text-4xl">
												{cat} 가이드
											</h2>
											<span className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.12em]">
												{String(items.length).padStart(2, "0")}
											</span>
										</div>
										<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
											{CATEGORY_DESC[cat]}
										</p>
									</Reveal>
									<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
										{items.map((g, i) => (
											<Reveal key={g.slug} delay={i * 0.08} className="h-full">
												<Link
													href={`/guide/${g.slug}`}
													className="group flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-8"
												>
													<p className="font-mono text-[#A5A2A0] text-[10px] tracking-[0.14em]">
														{g.eyebrow}
													</p>
													<h3 className="mt-3 break-keep font-extrabold text-[#111111] text-lg leading-snug transition-colors group-hover:text-[#C8102E] md:text-xl">
														{g.title}
													</h3>
													<p className="mt-3 break-keep text-[#767370] text-[13.5px] leading-[1.7]">
														{g.heroSub}
													</p>
													<span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-bold text-[#C8102E] text-[13px]">
														가이드 읽기
														<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
													</span>
												</Link>
											</Reveal>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<FinalCTA />
		</>
	);
};

export default GuideHubPage;
