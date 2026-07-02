"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SpotlightCard } from "@/components/shared/SpotlightCard";

const MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월"];

// Growth % above starting value (views: +500%, visitors: +495% at month 3)
const VIEWS_PCT = [0, 87, 200, 320, 420, 500];
const VISITORS_PCT = [0, 86, 200, 321, 418, 495];

const PAD_L = 56;
const PAD_T = 20;
const PAD_R = 20;
const PAD_B = 40;
const CHART_W = 520;
const CHART_H = 170;
const MAX_PCT = 550;

const xPos = (i: number) => PAD_L + (i / (MONTHS.length - 1)) * CHART_W;
const yPos = (pct: number) => PAD_T + CHART_H - (pct / MAX_PCT) * CHART_H;

const viewsPts = VIEWS_PCT.map((p, i) => ({ x: xPos(i), y: yPos(p) }));
const visitorsPts = VISITORS_PCT.map((p, i) => ({ x: xPos(i), y: yPos(p) }));

function toLinePath(pts: { x: number; y: number }[]): string {
	return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

function toAreaPath(pts: { x: number; y: number }[]): string {
	const bottom = PAD_T + CHART_H;
	return `${toLinePath(pts)} L ${pts[pts.length - 1].x.toFixed(1)},${bottom} L ${pts[0].x.toFixed(1)},${bottom} Z`;
}

const viewsLine = toLinePath(viewsPts);
const viewsArea = toAreaPath(viewsPts);
const visitorsLine = toLinePath(visitorsPts);
const visitorsArea = toAreaPath(visitorsPts);

const TOTAL_W = PAD_L + CHART_W + PAD_R;
const TOTAL_H = PAD_T + CHART_H + PAD_B;
const Y_TICKS = [0, 100, 200, 300, 400, 500];

export const BlogCaseChart = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: false, margin: "-100px" });

	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						운영 현황
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						운영 <span className="gradient-text">3개월</span>의 변화입니다.
					</h2>
				</Reveal>

				<SpotlightCard className="rounded-2xl">
					<div ref={ref} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-10">
						{/* Header */}
						<div className="mb-6 flex flex-wrap items-start justify-between gap-4">
							<div>
								<span className="mb-2 inline-block rounded-full bg-[#fef2f2] px-3 py-1 font-semibold text-[#ef3c39] text-xs">
									의원
								</span>
								<h3 className="font-bold text-[#0a0a0a] text-xl">H의원 블로그</h3>
								<p className="mt-1 text-slate-500 text-sm">네이버 블로그 운영 6개월 데이터</p>
							</div>
							<div className="flex gap-6">
								<div className="text-right">
									<p className="font-bold text-2xl text-[#ef3c39] md:text-3xl">+500%</p>
									<p className="text-slate-500 text-xs">조회수 3개월 증가</p>
								</div>
								<div className="text-right">
									<p className="font-bold text-2xl text-[#e11d29] md:text-3xl">+495%</p>
									<p className="text-slate-500 text-xs">방문자 3개월 증가</p>
								</div>
							</div>
						</div>

						{/* Legend */}
						<div className="mb-4 flex gap-5">
							<div className="flex items-center gap-1.5">
								<span className="h-2.5 w-2.5 rounded-full bg-[#ef3c39]" />
								<span className="text-slate-600 text-xs">조회수</span>
							</div>
							<div className="flex items-center gap-1.5">
								<span className="h-2.5 w-2.5 rounded-full bg-[#e11d29]" />
								<span className="text-slate-600 text-xs">방문자 수</span>
							</div>
						</div>

						{/* Chart */}
						<div className="overflow-x-auto">
							<svg
								viewBox={`0 0 ${TOTAL_W} ${TOTAL_H}`}
								className="w-full min-w-[360px]"
								aria-label="H의원 블로그 조회수 및 방문자 수 증가 차트"
							>
								<defs>
									<linearGradient id="blogViewsGrad" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#ef3c39" stopOpacity="0.22" />
										<stop offset="100%" stopColor="#ef3c39" stopOpacity="0.02" />
									</linearGradient>
									<linearGradient id="blogVisitorsGrad" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#e11d29" stopOpacity="0.14" />
										<stop offset="100%" stopColor="#e11d29" stopOpacity="0.02" />
									</linearGradient>
								</defs>

								{/* Grid lines + Y labels */}
								{Y_TICKS.map((tick) => {
									const y = yPos(tick);
									return (
										<g key={tick}>
											<line
												x1={PAD_L}
												y1={y}
												x2={PAD_L + CHART_W}
												y2={y}
												stroke="#e2e8f0"
												strokeWidth="1"
												strokeDasharray={tick === 0 ? undefined : "4 4"}
											/>
											<text x={PAD_L - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#94a3b8">
												{tick === 0 ? "0%" : `+${tick}%`}
											</text>
										</g>
									);
								})}

								{/* X labels */}
								{MONTHS.map((m, i) => (
									<text
										key={m}
										x={xPos(i)}
										y={PAD_T + CHART_H + 26}
										textAnchor="middle"
										fontSize="11"
										fill="#64748b"
									>
										{m}
									</text>
								))}

								{/* Area fills */}
								<path d={visitorsArea} fill="url(#blogVisitorsGrad)" />
								<path d={viewsArea} fill="url(#blogViewsGrad)" />

								{/* Lines */}
								<motion.path
									d={visitorsLine}
									fill="none"
									stroke="#e11d29"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
									transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
								/>
								<motion.path
									d={viewsLine}
									fill="none"
									stroke="#ef3c39"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
									transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
								/>

								{/* Dots — views */}
								{viewsPts.map((pt, i) => (
									<motion.circle
										key={`views-${MONTHS[i]}`}
										cx={pt.x}
										cy={pt.y}
										r="4"
										fill="#ef3c39"
										stroke="white"
										strokeWidth="2"
										initial={{ scale: 0, opacity: 0 }}
										animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
										transition={{ duration: 0.3, delay: 0.85 + i * 0.06 }}
									/>
								))}

								{/* Dots — visitors */}
								{visitorsPts.map((pt, i) => (
									<motion.circle
										key={`visitors-${MONTHS[i]}`}
										cx={pt.x}
										cy={pt.y}
										r="4"
										fill="#e11d29"
										stroke="white"
										strokeWidth="2"
										initial={{ scale: 0, opacity: 0 }}
										animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
										transition={{ duration: 0.3, delay: 0.95 + i * 0.06 }}
									/>
								))}
							</svg>
						</div>

						<p className="mt-2 text-center text-slate-400 text-xs">
							* 그래프는 운영 시작(1월) 대비 누적 증가율(%)을 나타냅니다.
						</p>
					</div>
				</SpotlightCard>
			</div>
		</section>
	);
};
