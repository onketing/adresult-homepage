"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const DESK_PHOTO_READY = false; // /public/images/about/desk.jpg 준비 시 true로 변경
const spring = { type: "spring", stiffness: 280, damping: 18 } as const;

export const AboutMidCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#052e16] px-4 py-20 md:py-24">
			{DESK_PHOTO_READY && (
				<>
					<Image
						src="/images/about/desk.jpg"
						alt="온세상이마케팅이다 업무 환경"
						fill
						className="object-cover object-center"
					/>
					<div className="absolute inset-0 bg-[#052e16]/85" />
					<div
						className="pointer-events-none absolute inset-0"
						style={{
							background: "linear-gradient(135deg, #052e1630 0%, transparent 60%)",
						}}
					/>
				</>
			)}
			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<Reveal>
					<p className="mb-4 font-semibold text-[#86efac] text-sm uppercase tracking-[0.25em]">
						Direct Contact
					</p>
					<h2 className="mb-3 font-bold text-3xl text-white tracking-tight md:text-4xl">
						마케팅 컨설팅
					</h2>
					<p className="mb-10 break-keep text-white/60 leading-relaxed">
						광고비 더 태우기 전에, 위반 항목부터 점검하세요.
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

					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.88 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: false }}
						transition={{ ...spring, delay: 0.35 }}
						whileHover={{ y: -5 }}
						whileTap={{ scale: 0.96 }}
						className="w-full sm:w-auto"
					>
						<a
							href="/onketing-brochure.pptx"
							download="온케팅 회사소개서.pptx"
							className="block w-full rounded-md border border-white/30 px-8 py-4 font-semibold text-base text-white transition-colors hover:border-white/60 hover:bg-white/5"
						>
							회사소개서
						</a>
					</motion.div>
				</div>

				<Reveal direction="none" delay={0.5}>
					<p className="mt-8 font-mono text-white/30 text-xs tracking-[0.15em]">
						영업일 1일 내 회신 · 24시간 카카오 응답 · 즉시 다운로드
					</p>
				</Reveal>
			</div>
		</section>
	);
};
