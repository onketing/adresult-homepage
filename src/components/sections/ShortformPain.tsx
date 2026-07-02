"use client";

import { Reveal } from "@/components/shared/Reveal";

const WORRIES = [
	"릴스같은거 해본 적이 없어서 어떻게 시작할지 모르겠어요.",
	"촬영 준비 할 게 너무 많아서 걱정돼요.",
	"카메라 앞에 설 생각에 엄청 부담돼요.",
] as const;

export const ShortformPain = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-2xl">
				<Reveal className="mb-12 text-center">
					<h2 className="font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
						이런 생각 해보셨나요?
					</h2>
				</Reveal>

				<div className="flex flex-col gap-5">
					{WORRIES.map((worry, i) => (
						<Reveal key={worry} delay={i * 0.1} direction="up">
							<div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-sm">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef3c39]/15">
									<span className="font-bold text-[#ef3c39] text-sm">{i + 1}</span>
								</div>
								<p className="break-keep text-base text-slate-700 leading-relaxed">{worry}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
