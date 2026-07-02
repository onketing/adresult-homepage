"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { PulseBurstBackground } from "@/components/shared/PulseBurstBackground";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const spring = { type: "spring", stiffness: 280, damping: 18 } as const;

export const ShortformFinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 md:py-32">
			{/* 펄스 리플 + 스파크 배경 ("터지다" 모티프) */}
			<PulseBurstBackground />
			<div
				className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ef3c39] opacity-[0.12] blur-[120px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#ef3c39] opacity-[0.08] blur-[100px]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<Reveal>
					<h2 className="mb-4 font-bold text-4xl text-white tracking-tight md:text-6xl">
						숏폼 터뜨릴 준비 되셨습니까?
					</h2>
					<p className="mb-12 break-keep text-lg text-white/60 leading-relaxed md:text-xl">
						몸만 오세요. 다 준비해드립니다.
					</p>
				</Reveal>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.88 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: false }}
						transition={{ ...spring, delay: 0.15 }}
						whileHover={{ y: -5 }}
						whileTap={{ scale: 0.96 }}
						className="w-full sm:w-auto"
					>
						<Link
							href="/contact"
							className="gradient-brand block w-full rounded-md px-8 py-4 font-semibold text-base text-white transition-opacity hover:opacity-90"
						>
							마케팅 컨설팅
						</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.88 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: false }}
						transition={{ ...spring, delay: 0.25 }}
						whileHover={{ y: -5 }}
						whileTap={{ scale: 0.96 }}
						className="w-full sm:w-auto"
					>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full rounded-md bg-[#FAE100] px-8 py-4 font-semibold text-[#3A1D1D] text-base transition-opacity hover:opacity-90"
						>
							카카오톡 1:1 문의
						</a>
					</motion.div>
				</div>

				<Reveal direction="none" delay={0.5}>
					<p className="mt-8 font-mono text-white/30 text-xs tracking-[0.15em]">
						영업일 1일 내 회신 · 24시간 카카오 응답
					</p>
				</Reveal>
			</div>
		</section>
	);
};
