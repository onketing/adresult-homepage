"use client";

import { ChevronDown } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CLIENT_DISCIPLINES } from "@/data/client-disciplines";

export const ProfessionalHero = () => {
	const chipsRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(chipsRef, { once: false, margin: "0px 0px -50px 0px" });

	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[#3a0509] px-6 py-24 md:px-10 md:py-32">
			<motion.div
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#ef3c39] opacity-[0.18] blur-[130px]"
				style={{ bottom: "-100px", left: "-100px" }}
				animate={{ x: [0, 40, -20, 0], y: [0, -30, 50, 0] }}
				transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div>
					<motion.p
						className="mb-4 font-semibold text-[#fca5a5] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Professional Marketing
					</motion.p>
					<motion.h1
						className="mb-4 font-bold text-5xl text-white leading-none tracking-tight md:text-7xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						전문직 마케팅으로 <span className="gradient-text">의뢰</span>가 옵니다.
					</motion.h1>
					<motion.p
						className="mb-8 max-w-xl break-keep text-base text-white/60 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						12개 직군 법령을 직접 검토합니다.
					</motion.p>
				</div>

				<div ref={chipsRef} className="grid grid-cols-3 gap-2 md:grid-cols-4">
					{CLIENT_DISCIPLINES.map((d, i) => (
						<motion.div
							key={d.name}
							className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
							transition={{ delay: i * 0.04, duration: 0.4 }}
							whileHover={{
								borderColor: "rgba(239,60,57,0.4)",
								backgroundColor: "rgba(239,60,57,0.1)",
							}}
						>
							<p className="font-semibold text-sm text-white">{d.name}</p>
							<p className="mt-0.5 text-white/60 text-xs">{d.caption}</p>
						</motion.div>
					))}
				</div>
			</div>

			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				aria-label="더 알아보기"
			>
				<motion.div
					className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<ChevronDown className="h-5 w-5" />
				</motion.div>
				<span className="font-semibold text-xs tracking-[0.15em]">더 알아보기</span>
			</motion.button>
		</section>
	);
};
