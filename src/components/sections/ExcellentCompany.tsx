"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { KPI_SHOWCASE } from "@/data/kpi-showcase";

const CountUp = ({ to, duration = 1.6 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(to); // SSR·크롤러는 최종 수치를 읽는다 (뷰포트 진입 시 0부터 카운트업)
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val.toLocaleString("ko-KR")}</span>;
};

export const ExcellentCompany = () => {
	return (
		<section className="bg-white px-4 py-20 md:px-8 md:py-28">
			<div className="mx-auto max-w-7xl">
				{/* 헤더 */}
				<Reveal>
					<p className="mb-4 font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
						Excellent Company
					</p>
					<p className="mb-2 font-semibold text-slate-500 text-xl md:text-2xl">
						&ldquo;병원마케팅, 어디서 해요?&rdquo;
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-[#111111] leading-[1.2] tracking-tight md:text-5xl">
						잘 나가는 병원은 <span className="text-[#C8102E]">애드리절트</span>에서
						병원마케팅합니다.
					</h2>
				</Reveal>

				{/* 스탯 카드 */}
				<div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 md:gap-5 lg:grid-cols-4">
					{KPI_SHOWCASE.map((item, i) => (
						<Reveal key={item.index} delay={i * 0.08} direction="up">
							<div className="flex h-full min-h-[220px] flex-col rounded-2xl bg-slate-50 p-6 md:p-7">
								<h3 className="font-bold text-[#111111] text-lg tracking-tight md:text-xl">
									{item.label}
								</h3>
								<p className="mt-2.5 flex-1 break-keep text-slate-500 text-sm leading-relaxed">
									{item.description}
								</p>
								<p className="mt-6 text-right font-extrabold leading-none tracking-tighter">
									<span className="text-[#C8102E] text-[44px] md:text-[52px]">
										<CountUp to={item.value} />
									</span>
									<span className="ml-1 align-baseline font-bold text-[#C8102E] text-lg md:text-xl">
										{item.suffix}
									</span>
								</p>
							</div>
						</Reveal>
					))}
				</div>
				<p className="mt-8 break-keep font-mono text-[#A5A2A0] text-[11.5px] leading-relaxed tracking-[0.04em]">
					* 위 수치는 애드리절트 본사·전체 네트워크 기준입니다. 마포지사는 동일한 운영 시스템과
					지식뱅크를 기반으로 상담·운영을 진행합니다.
				</p>
			</div>
		</section>
	);
};
