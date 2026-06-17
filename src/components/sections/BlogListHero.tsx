"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export const BlogListHero = ({ count }: { count: number }) => {
	return (
		<section className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,#ffffff_0%,#eef2f7_60%,#e2e8f0_100%)] px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
			{/* 브랜드 그린 오브 */}
			<motion.div
				className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#58d68d] opacity-[0.16] blur-[130px]"
				style={{ top: "-120px", right: "-60px" }}
				animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
				transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			{/* 미세 그리드 */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_0%,transparent_75%)]"
			/>

			<div className="relative z-10 mx-auto max-w-6xl">
				<motion.p
					className="font-semibold text-[#16a34a] text-sm uppercase tracking-[0.25em]"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease }}
				>
					Insights
				</motion.p>
				<motion.h1
					className="mt-4 font-bold text-4xl text-slate-900 leading-[1.12] tracking-tight md:text-6xl"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.08, ease }}
				>
					노출 말고 의뢰.
					<br />
					<span className="gradient-text">그 방법을 기록합니다.</span>
				</motion.h1>
				<motion.p
					className="mt-5 max-w-2xl break-keep text-base text-slate-600 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.18, ease }}
				>
					네이버 블로그와 숏폼까지, 12개 전문직 직군 마케팅을 직접 운영하며 쌓은 기록입니다.
				</motion.p>
				<motion.div
					className="mt-6 flex items-center gap-2 text-slate-400 text-sm"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.26, ease }}
				>
					<span className="inline-block h-1.5 w-1.5 rounded-full bg-[#58d68d]" />
					<span>총 {count}편의 글</span>
				</motion.div>
			</div>
		</section>
	);
};
