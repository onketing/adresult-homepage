import type { Metadata } from "next";
import Image from "next/image";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "연혁·수상 | 애드리절트(ADRESULT)",
	description: "대외적으로 인정받은 우수기업, 애드리절트의 연혁과 수상·인증 이력입니다.",
};

const AWARDS_TIMELINE: { year: string; items: string[] }[] = [
	{
		year: "2015",
		items: [
			"CEO경영대상 온라인광고부문 수상",
			"2015 고객이 신뢰하는 브랜드대상 온라인마케팅부문 대상 (한국경제)",
		],
	},
	{
		year: "2016",
		items: [
			"2016 고객이 신뢰하는 브랜드대상 온라인마케팅부문 대상 (한경)",
			"소비자의 선택 온라인마케팅 부문 대상 (중앙일보)",
		],
	},
	{
		year: "2017",
		items: [
			"대한민국 인물 대상 수상",
			"한국브랜드선호도 서비스부문 1위",
			"동대문구청장 표창장 수상",
		],
	},
	{ year: "2018", items: ["올해의 소비자 공감 브랜드 대상 (한국언론인협회)"] },
	{ year: "2019", items: ["코리아 리더 대상 선정"] },
	{ year: "2021", items: ["서울특별시장 표창장 수상"] },
	{ year: "2022", items: ["이노비즈 인증기업 선정"] },
	{ year: "2023", items: ["고용노동부 강소기업 선정"] },
];

const HISTORY_MILESTONES: { year: string; items: string[] }[] = [
	{ year: "2014", items: ["애드리절트 설립", "SNS마케팅 전문 페이지샵 설립"] },
	{
		year: "2015",
		items: [
			"주식회사로 법인 변경",
			"강남 반포동 사무실 이전",
			"업계최초 병원마케팅 세부키워드 솔루션 개발",
			"CEO경영대상 온라인광고부문 수상",
			"2015 고객이 신뢰하는 브랜드대상 수상",
		],
	},
	{
		year: "2016",
		items: [
			"2016 고객이 신뢰하는 브랜드대상 수상",
			"중앙일보 소비자의 선택 온라인마케팅 부문 대상",
		],
	},
	{
		year: "2017",
		items: [
			"동대문구청장 표창장 수상",
			"한국브랜드선호도 1위 선정",
			"대한민국 인물 대상 수상",
			"키워드 매니저 앱 개발 수상",
		],
	},
	{ year: "2018", items: ["올해의 소비자공감 브랜드 대상 수상", "애드리절트 인트라넷 개발"] },
	{
		year: "2019",
		items: [
			"코리아 리더 대상 선정",
			"마케팅 책 「마케팅 때문에 고민입니다」 출간 (교보문고 베스트 셀러)",
		],
	},
	{ year: "2021", items: ["서울특별시장 표창장 수상", "유명 프랜차이즈 CMO 역임"] },
	{
		year: "2022",
		items: [
			"이노비즈(기술혁신형 중소기업) 인증기업 선정",
			"누적 고객 1,000곳 돌파",
			"마케팅 지식뱅크 오픈",
		],
	},
	{
		year: "2023",
		items: [
			"고용노동부 강소기업 선정",
			"강남 본사 사옥 설립",
			"애드리절트 마포, 서초, 부산, 이룸지사 오픈",
			"지식뱅크 2,000건 돌파",
			"병원세미나 개최",
		],
	},
	{
		year: "2024",
		items: ["애드리절트 중부지사 오픈", "광고대행사 ERP 개발", "지식뱅크 3,000개 돌파"],
	},
];

export const HistoryPage = () => {
	return (
		<>
			<CompanyHero />
			<CompanyTabs />

			{/* EXCELLENT COMPANY — 이미지 + 수상 타임라인 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-[1600px]">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Excellent Company
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							대외적으로 인정받은 우수기업
						</h2>
					</Reveal>

					<div className="mt-16 grid items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-20">
						<Reveal direction="left">
							<Image
								src="/history/awards.png"
								alt="애드리절트 수상·인증 이력"
								width={686}
								height={547}
								sizes="(max-width: 768px) 100vw, 50vw"
								className="h-auto w-full"
							/>
						</Reveal>

						<div className="space-y-7">
							{AWARDS_TIMELINE.map((t, i) => (
								<Reveal key={t.year} direction="right" delay={i * 0.1} className="flex gap-6">
									<span className="w-16 shrink-0 font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
										{t.year}
									</span>
									<div className="space-y-1.5 pt-0.5">
										{t.items.map((it) => (
											<p
												key={it}
												className="break-keep text-base text-slate-600 leading-relaxed md:text-lg"
											>
												{it}
											</p>
										))}
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ADRESULT HISTORY — 풀폭 연혁 타임라인 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 md:px-8 md:py-32">
				<Reveal>
					<p className="mb-4 text-center font-bold text-sm text-white/80 uppercase tracking-[0.25em] md:text-base">
						ADRESULT History
					</p>
					<h2 className="text-center font-extrabold text-3xl text-white leading-tight tracking-tight md:text-5xl">
						애드리절트 연혁
					</h2>
				</Reveal>

				<div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
					{/* 중앙 점선 */}
					<div
						className="absolute inset-y-0 left-6 border-white/45 border-l-2 border-dashed md:left-1/2 md:-translate-x-1/2"
						aria-hidden="true"
					/>
					<ul className="space-y-14 md:space-y-20">
						{HISTORY_MILESTONES.map((h, i) => {
							const leftSide = i % 2 === 1;
							return (
								<li
									key={h.year}
									className="relative grid grid-cols-1 md:grid-cols-2 md:items-start"
								>
									{/* 노드 */}
									<span
										className="absolute top-1.5 left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#e11d29] bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.25)] md:left-1/2"
										aria-hidden="true"
									/>
									{/* 커넥터 */}
									<span
										className={cn(
											"absolute top-3 hidden h-0.5 w-8 bg-white/60 md:block",
											leftSide ? "right-1/2 mr-2" : "left-1/2 ml-2",
										)}
										aria-hidden="true"
									/>
									<Reveal
										direction={leftSide ? "right" : "left"}
										className={cn(
											"pl-16 md:pl-0",
											leftSide
												? "md:col-start-1 md:pr-14 md:text-right"
												: "md:col-start-2 md:pl-14 md:text-left",
										)}
									>
										<p className="font-extrabold text-3xl text-white md:text-4xl">{h.year}</p>
										<div className="mt-3 space-y-2">
											{h.items.map((it) => (
												<p
													key={it}
													className="break-keep font-medium text-base text-white leading-relaxed md:text-lg"
												>
													{it}
												</p>
											))}
										</div>
									</Reveal>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};

export default HistoryPage;
