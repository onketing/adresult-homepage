import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { SPECIALTIES } from "@/data/specialties";

// 홈 — 진료과별 마케팅 진입 섹션 (SPECIALTIES 데이터를 그대로 사용해 진료과가 늘면 자동 반영)
export const DepartmentsSection = () => {
	return (
		<section className="border-[#E4E2DF] border-y bg-white">
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
				<Reveal>
					<p className="mb-4 font-mono text-[#767370] text-xs tracking-[0.14em]">BY SPECIALTY</p>
					<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
						병원마다
						<br />
						<span className="text-[#C8102E]">다른 마케팅</span>이 필요합니다
					</h2>
					<p className="mt-6 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
						피부과 환자는 시술을 비교하고, 정형외과 환자는 증상을 검색하고, 소아과는 보호자가
						맘카페에서 확인합니다. 진료과마다 환자가 병원을 찾는 경로가 다릅니다. 애드리절트는 이
						경로를 기준으로 진료과별 콘텐츠 구조와 채널 조합을 다르게 설계합니다.
					</p>
				</Reveal>
				<div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{SPECIALTIES.map((s, i) => (
						<Reveal key={s.slug} delay={Math.min(i, 5) * 0.05}>
							<Link
								href={`/specialty/${s.slug}`}
								className="group flex h-full flex-col border border-[#E4E2DF] bg-[#FAFAFA] p-6 transition-colors hover:border-[#C8102E]"
							>
								<div className="flex items-baseline justify-between gap-3">
									<span className="break-keep font-extrabold text-[#111111] text-lg tracking-tight transition-colors group-hover:text-[#C8102E]">
										{s.name} 마케팅
									</span>
									<span
										aria-hidden="true"
										className="font-bold text-[#C8102E] opacity-0 transition-opacity group-hover:opacity-100"
									>
										→
									</span>
								</div>
								<p className="mt-1 font-mono text-[#A5A2A0] text-[11px] tracking-[0.06em]">
									환자 심리: {s.psych}
								</p>
								<p className="mt-3 break-keep text-[#767370] text-sm leading-[1.7]">{s.heroSub}</p>
							</Link>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
