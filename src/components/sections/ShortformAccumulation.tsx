"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { RisingDotsBackground } from "@/components/shared/RisingDotsBackground";
import { SHORTFORM_ACCUMULATION } from "@/data/service-shortform";

export const ShortformAccumulation = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

	return (
		<section className="relative overflow-hidden bg-[#0b1220] px-4 py-16 md:py-20">
			<RisingDotsBackground />
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-12 text-center">
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-5xl">
						광고는 멈추면 0, <span className="gradient-text">숏폼은 누적됩니다</span>
					</h2>
					<p className="mx-auto mt-4 max-w-md break-keep text-base text-white/50 leading-relaxed">
						한 편이 6-12개월 동안 검색에서 발견됩니다.
					</p>
				</Reveal>

				<div ref={ref} className="space-y-4">
					<div className="mb-6 flex items-center gap-6">
						<div className="flex items-center gap-2">
							<div className="h-3 w-3 rounded-full bg-[#ef3c39]" />
							<span className="text-sm text-white/60">숏폼 누적 효과</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="h-3 w-3 rounded-full bg-slate-600" />
							<span className="text-sm text-white/60">광고 의존도</span>
						</div>
					</div>

					{SHORTFORM_ACCUMULATION.map((item, i) => (
						<motion.div
							key={item.period}
							className="grid grid-cols-[80px_1fr] items-center gap-4 md:grid-cols-[100px_1fr]"
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
						>
							<span className="text-right font-mono text-sm text-white/50">{item.period}</span>
							<div className="space-y-1.5">
								<div className="flex items-center gap-3">
									<div className="h-5 flex-1 overflow-hidden rounded-full bg-white/5">
										<motion.div
											className="h-full rounded-full bg-linear-to-r from-[#ef3c39] to-[#fca5a5]"
											initial={{ width: "0%" }}
											animate={isInView ? { width: `${item.shortform}%` } : { width: "0%" }}
											transition={{
												delay: 0.3 + i * 0.1,
												duration: 0.8,
												ease: [0.22, 1, 0.36, 1],
											}}
										/>
									</div>
									<span className="w-10 text-right font-mono text-sm text-white/60">
										{item.shortform}%
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="h-5 flex-1 overflow-hidden rounded-full bg-white/5">
										<motion.div
											className="h-full rounded-full bg-slate-600"
											initial={{ width: "0%" }}
											animate={isInView ? { width: `${item.ads}%` } : { width: "0%" }}
											transition={{
												delay: 0.35 + i * 0.1,
												duration: 0.8,
												ease: [0.22, 1, 0.36, 1],
											}}
										/>
									</div>
									<span className="w-10 text-right font-mono text-sm text-white/60">
										{item.ads}%
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
