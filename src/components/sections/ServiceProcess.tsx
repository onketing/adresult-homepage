"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

type Step = {
	step: string;
	title: string;
	desc: string;
};

type Props = {
	steps: readonly Step[];
	footnote?: string;
	eyebrow?: string;
};

export const ServiceProcess = ({ steps, footnote, eyebrow = "Process" }: Props) => {
	const gridRef = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(gridRef, { once: false, margin: "0px 0px -150px 0px" });
	const prefersReducedMotion = useReducedMotion();
	const [animState, setAnimState] = useState({ inView: false, shouldAnimate: false });

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

	useEffect(() => {
		if (isInView) {
			setAnimState({ inView: true, shouldAnimate: scrollDirRef.current === "down" });
		} else if (scrollDirRef.current === "up") {
			setAnimState({ inView: false, shouldAnimate: false });
		}
	}, [isInView]);

	const shouldAnimate = animState.shouldAnimate && !prefersReducedMotion;
	const gridColsClass = steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-5";

	return (
		<section className="bg-slate-50 px-6 py-16 md:px-10 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-14 text-center">
						<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
							{eyebrow}
						</p>
						<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
							이렇게 <span className="gradient-text">진행합니다</span>
						</h2>
					</div>
				</Reveal>

				<div ref={gridRef} className={`relative grid grid-cols-1 gap-10 md:gap-4 ${gridColsClass}`}>
					<motion.div
						className="absolute top-10 hidden h-0.5 rounded-full bg-linear-to-r from-[#ef3c39] to-[#e11d29] md:block"
						style={{ left: "10%", right: "10%", transformOrigin: "left" }}
						initial={{ scaleX: 0 }}
						animate={animState.inView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={
							shouldAnimate
								? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
								: { duration: 0, delay: 0 }
						}
						aria-hidden="true"
					/>

					{steps.map((item, i) => {
						const delay = 0.1 + i * 0.15;
						return (
							<motion.div
								key={item.step}
								className="relative flex flex-col items-center text-center"
								initial={{ opacity: 0, x: -30 }}
								animate={animState.inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
								transition={
									shouldAnimate
										? { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
										: { duration: 0, delay: 0 }
								}
							>
								<div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_8px_rgba(239,60,57,0.06)]">
									<span className="font-bold font-mono text-[#ef3c39] text-xl">{item.step}</span>
								</div>
								<h3 className="mb-2 font-bold text-[#0a0a0a] text-base">{item.title}</h3>
								<p className="max-w-[180px] break-keep text-slate-500 text-sm leading-relaxed">
									{item.desc}
								</p>
							</motion.div>
						);
					})}
				</div>

				{footnote && (
					<Reveal className="mt-12 text-center">
						<p className="font-mono text-slate-500 text-xs tracking-[0.2em]">{footnote}</p>
					</Reveal>
				)}
			</div>
		</section>
	);
};
