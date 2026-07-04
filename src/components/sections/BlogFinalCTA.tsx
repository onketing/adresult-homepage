"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const spring = { type: "spring", stiffness: 280, damping: 18 } as const;

export const BlogFinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#3a0509] px-4 py-16 md:py-32">
			{/* Grid overlay */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.07]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
				}}
			/>
			{/* Green orbs */}
			<div
				className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[#e11d29] opacity-[0.14] blur-[100px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute right-1/4 -bottom-40 h-96 w-96 rounded-full bg-[#ef3c39] opacity-[0.08] blur-[80px]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<Reveal>
					<p className="mb-4 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Blog Marketing
					</p>
					<h2 className="mb-4 break-keep font-bold text-4xl text-white tracking-tight md:text-6xl">
						당신만의 블로그를
						<br />
						키워보세요.
					</h2>
					<p className="mb-12 break-keep text-base text-white/60 leading-relaxed">
						광고비 더 태우기 전에, 위반 항목부터 점검하세요.
					</p>
				</Reveal>

				<motion.div
					initial={{ opacity: 0, scale: 0.9, y: 20 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ ...spring, delay: 0.15 }}
					whileHover={{ y: -5 }}
					whileTap={{ scale: 0.97 }}
					className="mb-14 inline-block"
				>
					<Link
						href="/contact"
						className="gradient-brand block rounded-xl px-12 py-5 font-semibold text-lg text-white shadow-[0_8px_32px_rgba(239,60,57,0.25)] transition-opacity hover:opacity-90"
					>
						문의하기
					</Link>
				</motion.div>
			</div>
		</section>
	);
};
