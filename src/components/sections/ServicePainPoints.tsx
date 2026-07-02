"use client";

import { Reveal } from "@/components/shared/Reveal";

type Props = {
	items: readonly string[];
};

const DIRS = ["left", "up", "up", "right"] as const;

export const ServicePainPoints = ({ items }: Props) => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Pain Points
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						이런 경험, <span className="gradient-text">있으시죠.</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{items.map((text, i) => (
						<Reveal key={text} direction={DIRS[i]} delay={i * 0.1}>
							<div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
								<span className="mt-0.5 select-none font-bold text-4xl text-[#ef3c39]/30 leading-none">
									{'"'}
								</span>
								<p className="break-keep text-[#0a0a0a] text-base leading-relaxed">{text}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
