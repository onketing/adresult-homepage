import type { Metadata } from "next";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "조직도·구성원 | 애드리절트(ADRESULT)",
	description: "강남 본사를 포함한 전국 6개 지사, 애드리절트의 조직도와 구성원을 소개합니다.",
};

// TODO: 애드리절트 실제 본부 구성·임원진 사진 확보 후 교체
const DEPARTMENTS = ["마케팅본부", "콘텐츠·영상본부", "디자인본부", "경영지원본부"];

export const PeoplePage = () => {
	return (
		<>
			<CompanyHero />
			<CompanyTabs />

			{/* ORGANIZATION CHART */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-6xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Organization Chart
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
							애드리절트 <span className="text-[#ef3c39]">조직도</span>
						</h2>
						<p className="mt-5 text-center text-lg text-slate-600">
							강남 본사를 포함한 <span className="font-bold text-[#0a0a0a]">전국 6개 지사</span>가
							함께합니다.
						</p>
					</Reveal>

					<div className="mt-16 flex flex-col items-center">
						{/* CEO */}
						<Reveal>
							<div className="rounded-2xl bg-[#e11d29] px-10 py-6 text-center text-white shadow-[0_12px_30px_rgba(225,29,41,0.3)]">
								<p className="font-bold text-lg md:text-xl">대표이사 · CEO</p>
								<p className="mt-1 text-sm text-white/85">이승민</p>
							</div>
						</Reveal>

						{/* 연결선 */}
						<div className="h-10 w-px bg-slate-300" aria-hidden="true" />

						{/* 본부 */}
						<div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
							{DEPARTMENTS.map((dept, i) => (
								<Reveal key={dept} delay={i * 0.08} direction="up">
									<div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-7 text-center">
										<p className="break-keep font-bold text-[#0a0a0a] text-base md:text-lg">
											{dept}
										</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ADRESULT PEOPLE */}
			<section className="bg-slate-50 px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
						ADRESULT People
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
						결과로 증명하는 사람들
					</h2>
					<p className="mx-auto mt-5 max-w-2xl break-keep text-lg text-slate-600 leading-relaxed">
						기획부터 촬영·편집·발행까지, 각 분야 전문가들이 한 팀으로 고객의 성장을 만듭니다.
					</p>
				</Reveal>
			</section>
		</>
	);
};

export default PeoplePage;
