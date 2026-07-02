import { Award } from "lucide-react";
import type { Metadata } from "next";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "연혁·수상 | 애드리절트(ADRESULT)",
	description: "대외적으로 인정받은 우수기업, 애드리절트의 수상 및 인증 이력입니다.",
};

const AWARDS = [
	"CEO경영대상 온라인광고부문 수상",
	"2015 고객이 신뢰하는 브랜드대상 온라인마케팅부문 대상 (한국경제)",
	"2016 고객이 신뢰하는 브랜드대상 온라인마케팅부문 대상 (한경)",
	"소비자의 선택 온라인마케팅 부문 대상 (중앙일보)",
	"대한민국 인물 대상 수상",
	"한국브랜드선호도 서비스부문 1위",
	"동대문구청장 표창장 수상",
	"올해의 소비자 공감 브랜드 대상 (한국언론인협회)",
	"코리아 리더 대상 선정",
	"서울특별시 표창장 수상",
	"이노비즈(Inno-Biz) 인증기업 선정",
	"고용노동부 강소기업 선정",
];

export const HistoryPage = () => {
	return (
		<>
			<CompanyHero />
			<CompanyTabs />

			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-6xl">
					<Reveal>
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Excellent Company
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							대외적으로 인정받은 <span className="text-[#ef3c39]">우수기업</span>
						</h2>
						<p className="mt-5 break-keep text-lg text-slate-600 leading-relaxed">
							업력 11년, 애드리절트가 쌓아온 수상과 인증 이력입니다.
						</p>
					</Reveal>

					<div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
						{AWARDS.map((award, i) => (
							<Reveal key={award} delay={(i % 3) * 0.08}>
								<div className="flex h-full items-start gap-3 rounded-2xl bg-slate-50 p-6">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ef3c39]/10">
										<Award className="h-5 w-5 text-[#ef3c39]" aria-hidden="true" />
									</span>
									<p className="break-keep pt-1 font-semibold text-[#0a0a0a] text-sm leading-relaxed md:text-base">
										{award}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default HistoryPage;
