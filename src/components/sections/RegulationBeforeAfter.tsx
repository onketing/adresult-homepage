"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { REGULATION_CASES } from "@/data/regulation-cases";

const ArrowPath = ({ inView }: { inView: boolean }) => (
	<svg
		viewBox="0 0 40 24"
		className="mx-auto my-1 hidden w-8 sm:block md:mx-0 md:my-0 md:w-6"
		aria-hidden="true"
	>
		<motion.path
			d="M2 12 H34 M26 4 L38 12 L26 20"
			stroke="#ef3c39"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			initial={{ pathLength: 0, opacity: 0 }}
			animate={inView ? { pathLength: 1, opacity: 1 } : {}}
			transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
		/>
	</svg>
);

export const RegulationBeforeAfter = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });

	return (
		<section className="bg-white px-4 py-20 md:py-28">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Before / After
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						이런 카피는 <span className="text-rose-500">위반</span>입니다
					</h2>
					<p className="mx-auto mt-4 max-w-xl break-keep text-slate-500 leading-relaxed">
						실제 위반 사례와 수정 카피를 직접 비교합니다.
					</p>
				</Reveal>

				<div ref={ref} className="space-y-5">
					{REGULATION_CASES.map((c, i) => (
						<Reveal key={c.id} delay={i * 0.08}>
							<div className="grid grid-cols-1 items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:p-6">
								{/* Before */}
								<div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
									<p className="mb-1.5 font-mono text-[10px] text-rose-500 uppercase tracking-[0.2em]">
										위반 카피
									</p>
									<p className="break-keep font-medium text-rose-700 text-sm leading-relaxed">
										&ldquo;{c.before}&rdquo;
									</p>
								</div>

								{/* Arrow */}
								<ArrowPath inView={inView} />

								{/* After */}
								<div className="rounded-xl border border-red-200 bg-red-50 p-4">
									<p className="mb-1.5 font-mono text-[10px] text-red-600 uppercase tracking-[0.2em]">
										통과 카피
									</p>
									<p className="break-keep font-medium text-red-700 text-sm leading-relaxed">
										&ldquo;{c.after}&rdquo;
									</p>
								</div>
							</div>

							<div className="mt-2 flex flex-wrap gap-2 px-1">
								<span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[10px] text-slate-500 tracking-[0.15em]">
									{c.field}
								</span>
								<span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[10px] text-slate-500 tracking-[0.15em]">
									{c.law}
								</span>
								<span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] text-slate-500">
									{c.reason}
								</span>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
