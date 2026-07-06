"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS_STEPS } from "@/data/process-steps";

export const ProcessSteps = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(gridRef, { once: false, margin: "0px 0px -150px 0px" });
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			scrollDirRef.current = y > lastY ? "down" : "up";
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Reveal.tsx와 동일한 패턴 — ref는 렌더 중 읽어도 안전하나 eslint-disable 필요
	// eslint-disable-next-line react-hooks/refs
	const shouldAnimate = isInView && scrollDirRef.current === "down" && !prefersReducedMotion;

	return (
		<section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto max-w-[1440px]">
				<Reveal>
					<div className="mb-14 text-center md:mb-16">
						<p className="mb-4 font-semibold text-[#C8102E] text-lg uppercase tracking-[0.25em] md:text-xl">
							진행방식
						</p>
						<h2 className="font-bold text-5xl text-foreground leading-tight tracking-tight md:text-6xl lg:text-7xl">
							이렇게 진행합니다.
						</h2>
						<p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-xl leading-relaxed md:text-2xl">
							모든 채널을 한 번에 시작하지 않습니다. 진단으로 우선순위를 정하고, 필요한 채널부터
							단계별로 도입합니다.
						</p>
					</div>
				</Reveal>

				<div ref={gridRef} className="relative grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6">
					{/* 연결선 — 왼쪽에서 오른쪽으로 드로우 (그린 그라데이션) */}
					<motion.div
						className="absolute top-10 hidden h-0.5 rounded-full bg-linear-to-r from-[#C8102E] to-[#C8102E] md:block"
						style={{ left: "10%", right: "10%", transformOrigin: "left" }}
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={
							shouldAnimate
								? { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
								: { duration: 0, delay: 0 }
						}
						aria-hidden="true"
					/>
					{/* 흐르는 펄스 — 라인을 따라 이동 */}
					{shouldAnimate && (
						<motion.div
							className="absolute top-[38px] hidden h-2 w-2 rounded-full bg-[#C8102E] shadow-[0_0_10px_2px_rgba(200,16,46,0.6)] md:block"
							initial={{ left: "10%", opacity: 0 }}
							animate={{ left: ["10%", "90%"], opacity: [0, 1, 1, 0] }}
							transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, delay: 0.9 }}
							aria-hidden="true"
						/>
					)}

					{PROCESS_STEPS.map((step, i) => {
						const delay = 0.1 + i * 0.18;

						return (
							<motion.div
								key={step.title}
								className="relative flex flex-col items-center text-center"
								initial={{ opacity: 0, x: -40 }}
								animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
								transition={
									shouldAnimate
										? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
										: { duration: 0, delay: 0 }
								}
							>
								<motion.div
									className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border bg-white"
									initial={{
										borderColor: "#e2e8f0",
										boxShadow: "0 2px 8px rgba(200, 16, 46,0.06)",
									}}
									animate={
										isInView
											? {
													borderColor: "#C8102E",
													boxShadow: "0 0 0 4px rgba(200, 16, 46,0.12)",
												}
											: { borderColor: "#e2e8f0", boxShadow: "0 2px 8px rgba(200, 16, 46,0.06)" }
									}
									transition={{ duration: 0.4, delay: shouldAnimate ? delay + 0.2 : 0 }}
								>
									<span className="font-bold font-mono text-[#C8102E] text-xl">
										{String(i + 1).padStart(2, "0")}
									</span>
								</motion.div>

								<h3 className="mb-3 font-bold text-foreground text-xl tracking-tight md:text-2xl">
									{step.title}
								</h3>
								<p className="max-w-[260px] break-keep text-[15px] text-slate-500 leading-relaxed md:text-base">
									{step.description}
								</p>
								{step.badge && (
									<span className="mt-4 inline-block w-fit rounded-full bg-[#C8102E]/10 px-3 py-1 font-semibold text-[#C8102E] text-xs">
										{step.badge}
									</span>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
