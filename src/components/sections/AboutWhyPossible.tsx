"use client";

import { Camera, PenLine, Scissors } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const INHOUSE = [
	{
		num: "01",
		icon: PenLine,
		title: "기획·콘텐츠",
		body: "키워드 분석부터 콘텐츠 초안까지 직접 씁니다. 검색 의도를 먼저 읽고 시작합니다.",
	},
	{
		num: "02",
		icon: Camera,
		title: "촬영",
		body: "현장에 직접 갑니다. 조명·사운드·디렉팅 모두 한 팀입니다.",
	},
	{
		num: "03",
		icon: Scissors,
		title: "편집·발행",
		body: "컷·자막·썸네일을 일관된 톤으로 다듬고 멀티 채널에 발행합니다.",
	},
];

export const AboutWhyPossible = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<Reveal className="mb-12 md:mb-16">
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						어떻게 이런 성과가 가능했냐고요?
					</h2>
					<p className="mt-6 break-keep text-slate-500 text-xl leading-relaxed">
						하나부터 열까지 온케팅의 손으로 만들기 때문입니다.
					</p>
					<p className="mt-6 font-mono text-slate-400 text-sm">외주 없음 · 한 팀 · 한 공간</p>
				</Reveal>

				{/* 3 Cards */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{INHOUSE.map((item, i) => (
						<Reveal key={item.title} delay={i * 0.12}>
							<div className="flex h-full flex-col gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow duration-300 hover:shadow-md">
								<div className="flex items-center gap-3">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#052e16]/8">
										<item.icon className="h-6 w-6 text-[#16a34a]" aria-hidden="true" />
									</div>
									<span className="font-mono text-[#58d68d]/60 text-xs tracking-widest">
										{item.num}
									</span>
								</div>
								<div>
									<p className="mb-2 font-bold text-[#0a0a0a] text-xl">{item.title}</p>
									<p className="break-keep text-base text-slate-600 leading-relaxed">{item.body}</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
