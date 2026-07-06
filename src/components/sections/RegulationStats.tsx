"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { REGULATION_STATS, TREND_DATA } from "@/data/regulation-stats";

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(to); // SSR·크롤러는 최종 수치를 읽는다 (뷰포트 진입 시 0부터 카운트업)
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView || to === 0) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

const CELL_META = [
	{ numClass: "text-[#fca5a5]", borderClass: "border-b border-white/10 md:border-b-0" },
	{ numClass: "text-rose-400", borderClass: "border-l border-b border-white/10 md:border-b-0" },
	{ numClass: "text-[#fca5a5]", borderClass: "md:border-l md:border-white/10" },
] as const;

const maxVal = Math.max(...TREND_DATA.bars.map((b) => b.value));

export const RegulationStats = () => {
	const barRef = useRef<HTMLDivElement>(null);
	const barsInView = useInView(barRef, { once: true, margin: "-60px" });

	return (
		<section className="bg-[#090909] py-14 md:py-28">
			<div className="mx-auto max-w-5xl px-4 md:px-8">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#fca5a5] text-sm uppercase tracking-[0.25em]">
						Why it matters
					</p>
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-5xl">
						규정 위반, 생각보다 <span className="text-rose-400">가깝습니다</span>
					</h2>
					<p className="mx-auto mt-4 max-w-xl break-keep text-white/70 leading-relaxed">
						광고 위반은 행정처분·징계·형사처벌로 이어집니다. 아래 수치는 모두 공식 출처입니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 md:grid-cols-3">
					{REGULATION_STATS.map((item, i) => {
						const meta = CELL_META[i];
						return (
							<Reveal key={item.id} delay={i * 0.1} direction="up" className={meta.borderClass}>
								<div className="flex flex-col px-5 py-8 md:px-8 md:py-10">
									<p className="font-extrabold leading-none tracking-tighter">
										<span className={`text-[52px] sm:text-[60px] md:text-[68px] ${meta.numClass}`}>
											<CountUp to={item.value} />
										</span>
										<span className={`ml-0.5 align-top text-2xl ${meta.numClass}`}>
											{item.suffix}
										</span>
									</p>
									<h3 className="mt-3 break-keep font-bold text-base text-white tracking-tight md:text-lg">
										{item.label}
									</h3>
									<p className="mt-1.5 font-mono text-white/50 text-xs tracking-[0.12em]">
										출처: {item.source}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>

				{/* Trend Bar Chart */}
				<Reveal className="mt-14">
					<div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10">
						<div className="mb-6 flex items-start justify-between">
							<div>
								<p className="font-bold text-lg text-white tracking-tight">10년 새 25배 증가</p>
								<p className="mt-0.5 text-sm text-white/70">의료광고 위반 적발 건수</p>
							</div>
							<p className="font-mono text-white/50 text-xs tracking-[0.12em]">
								출처: {TREND_DATA.source}
							</p>
						</div>

						<div ref={barRef} className="flex items-end gap-3 md:gap-6">
							{TREND_DATA.bars.map((bar, i) => {
								const heightPx = Math.round((bar.value / maxVal) * 96);
								const isLast = i === TREND_DATA.bars.length - 1;
								return (
									<div key={bar.year} className="flex flex-1 flex-col items-center gap-2">
										<motion.div
											className="w-full rounded-t-md"
											style={{
												height: heightPx,
												transformOrigin: "bottom",
												background: isLast
													? "rgb(248 113 113)"
													: `rgba(248,113,113,${0.2 + i * 0.15})`,
											}}
											initial={{ scaleY: 0 }}
											animate={barsInView ? { scaleY: 1 } : { scaleY: 0 }}
											transition={{
												delay: i * 0.1,
												duration: 0.6,
												ease: [0.22, 1, 0.36, 1],
											}}
											aria-label={`${bar.year}년 ${bar.value}건`}
											role="img"
										/>
										<span className="font-mono text-white/60 text-xs">{bar.year}</span>
									</div>
								);
							})}
						</div>

						<div className="mt-4 flex justify-between">
							<span className="font-mono text-white/60 text-xs">{TREND_DATA.startLabel}</span>
							<span className="font-mono text-rose-400 text-xs">{TREND_DATA.endLabel}</span>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
