"use client";

import { ConstellationBackground } from "@/components/shared/ConstellationBackground";
import { Reveal } from "@/components/shared/Reveal";

const CONSEQUENCES = [
	{
		num: "01",
		title: "검색해도 나오지 않습니다",
		body: "고객은 이미 온라인에서 비교하고 결정합니다. 발견되지 않으면 없는 것과 같습니다.",
	},
	{
		num: "02",
		title: "경쟁자가 그 자리를 채웁니다",
		body: "지금 이 순간에도 같은 직군의 누군가가 콘텐츠를 쌓고 있습니다.",
	},
	{
		num: "03",
		title: "한 번 뒤처지면 따라잡기 어렵습니다",
		body: "콘텐츠는 쌓일수록 격차가 벌어집니다. 6개월 먼저 시작한 사람과의 차이는 시간이 지날수록 커집니다.",
	},
	{
		num: "04",
		title: "나중에 시작하면 더 많이 써야 합니다",
		body: "지금 시작했다면 들지 않아도 됐을 광고비와 시간을 뒤늦게 써야 합니다.",
	},
];

export const AboutConsequences = () => {
	return (
		<section className="relative overflow-hidden bg-[#0b1220] px-4 py-24 md:py-32">
			<ConstellationBackground />
			{/* 분위기 orbs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#ef3c39] opacity-[0.07] blur-[130px]"
				style={{ top: "-120px", left: "-120px" }}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#ef3c39] opacity-[0.04] blur-[100px]"
				style={{ bottom: "-80px", right: "-80px" }}
			/>

			<div className="relative z-10 mx-auto max-w-6xl">
				{/* 헤더 */}
				<Reveal className="mb-16 md:mb-20">
					<h2 className="break-keep font-bold text-4xl text-white leading-tight tracking-tight md:text-6xl">
						마케팅을 계속 안한다면..?
					</h2>
				</Reveal>

				{/* 결과 리스트 */}
				<div className="divide-y divide-white/10">
					{CONSEQUENCES.map((item, i) => (
						<Reveal key={item.num} delay={i * 0.08} direction="up">
							<div className="flex gap-8 py-8 md:gap-12 md:py-10">
								<span className="mt-1 shrink-0 font-mono text-[#ef3c39]/50 text-xs tracking-widest md:text-sm">
									{item.num}
								</span>
								<div>
									<p className="mb-2 font-bold text-white text-xl leading-snug md:text-2xl">
										{item.title}
									</p>
									<p className="break-keep text-sm text-white/50 leading-relaxed md:text-base">
										{item.body}
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
