import { Reveal } from "@/components/shared/Reveal";

const PLEDGES = [
	"결과·승소율을 보장하지 않습니다.",
	"비교 광고를 쓰지 않습니다.",
	"검증되지 않은 후기를 인용하지 않습니다.",
	"출처 없는 수치를 쓰지 않습니다.",
	"사전 심의 대상은 심의 없이 발행하지 않습니다.",
] as const;

export const RegulationPledge = () => {
	return (
		<section className="bg-[#3a0509] px-4 py-16 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
						{/* 좌측 */}
						<div>
							<p className="mb-4 select-none font-mono text-7xl text-[#ef3c39] leading-none">
								&ldquo;
							</p>
							<h2 className="font-bold text-3xl text-white tracking-tight md:text-4xl">
								이런 카피는 쓰지 않습니다.
							</h2>
							<p className="mt-4 font-semibold text-[#fca5a5] text-sm tracking-[0.15em]">
								Onketing 약속
							</p>
							<p className="mt-8 font-mono text-white/60 text-xs tracking-[0.15em]">
								대표 검수 — 김태훈
							</p>
						</div>

						{/* 우측 약속 리스트 */}
						<div className="flex flex-col">
							{PLEDGES.map((pledge, i) => (
								<div
									key={pledge}
									className="flex items-start gap-5 border-white/10 border-b py-5 last:border-0"
								>
									<span className="shrink-0 font-mono text-[#fca5a5] text-sm tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<p className="break-keep text-base text-white/90 leading-relaxed">{pledge}</p>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
