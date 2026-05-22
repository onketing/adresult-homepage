"use client";

import { ArrowRight, Eye } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const AFTER_REELS = [
	{ views: "81.9만", src: "/images/results/reel-01.png", alt: "근로계약서 관련 릴스", rotate: -4 },
	{ views: "29.4만", src: "/images/results/reel-02.png", alt: "통장 입금 관련 릴스", rotate: 3 },
	{ views: "38.1만", src: "/images/results/reel-03.png", alt: "이사 관련 릴스", rotate: 3.5 },
	{ views: "16.6만", src: "/images/results/reel-04.png", alt: "깡값 관련 릴스", rotate: -3 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutResults = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: false, margin: "-120px" });

	return (
		<section className="overflow-hidden bg-white px-4 py-24 md:py-32">
			<div ref={ref} className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-16 md:mb-20">
					<motion.p
						className="mb-5 font-mono text-[#16a34a] text-base uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 16 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
						transition={{ duration: 0.6, ease }}
					>
						클라이언트 성과
					</motion.p>
					<motion.h2
						className="font-bold text-4xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl lg:text-6xl"
						initial={{ opacity: 0, scale: 0.92, y: 28 }}
						animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 28 }}
						transition={{ duration: 0.85, delay: 0.08, ease }}
					>
						온케팅이 직접 만들었습니다.
					</motion.h2>
				</div>

				{/* Comparison — true 3-col grid so arrow sits at exact center */}
				<div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start">
					{/* Before */}
					<motion.div
						className="flex flex-col items-center self-stretch"
						initial={{ opacity: 0, x: -70, rotate: -6 }}
						animate={
							isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -70, rotate: -6 }
						}
						transition={{ duration: 0.9, delay: 0.2, ease }}
					>
						<p className="mb-8 font-semibold text-slate-500 text-xs uppercase tracking-[0.25em]">
							마케팅 전
						</p>
						<div className="flex flex-1 items-center justify-center">
							<div className="relative w-[160px]" style={{ opacity: 0.7 }}>
								<div className="flex aspect-9/16 flex-col items-center justify-center gap-3 rounded-[22px] border-2 border-slate-300 bg-slate-100">
									<div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-300">
										<span className="text-2xl text-slate-500">?</span>
									</div>
									<div className="space-y-1 text-center">
										<p className="font-semibold text-slate-500 text-sm">채널 없음</p>
										<p className="text-slate-400 text-xs">조회수 0</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Arrow — self-center keeps it vertically centered */}
					<motion.div
						className="flex flex-col items-center justify-center gap-3 self-center px-8"
						initial={{ opacity: 0, scale: 0.2 }}
						animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
						transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.45 }}
					>
						<motion.div
							animate={{ x: [0, 8, 0] }}
							transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
						>
							<ArrowRight className="h-20 w-20 text-[#16a34a] md:h-24 md:w-24" strokeWidth={2} />
						</motion.div>
						<span className="font-bold text-[#16a34a] text-[11px] uppercase tracking-widest">
							온케팅
						</span>
					</motion.div>

					{/* After */}
					<div className="flex flex-col items-center">
						<motion.p
							className="mb-8 font-semibold text-[#16a34a] text-xs uppercase tracking-[0.25em]"
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							마케팅 후
						</motion.p>

						{/* Reels — dramatic stagger with spring physics */}
						<div className="grid w-full max-w-[360px] grid-cols-2 gap-3">
							{AFTER_REELS.map((reel, i) => {
								const initRotate = i % 2 === 0 ? -18 : 18;
								return (
									<motion.div
										key={reel.src}
										className="relative aspect-9/16 cursor-pointer overflow-hidden rounded-2xl"
										style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.28)" }}
										initial={{ opacity: 0, y: 80, rotate: initRotate, scale: 0.8 }}
										animate={
											isInView
												? { opacity: 1, y: 0, rotate: reel.rotate, scale: 1 }
												: { opacity: 0, y: 80, rotate: initRotate, scale: 0.8 }
										}
										transition={{
											type: "spring",
											stiffness: 130,
											damping: 18,
											delay: 0.6 + i * 0.14,
										}}
										whileHover={{
											rotate: 0,
											scale: 1.07,
											zIndex: 20,
											transition: { duration: 0.2, ease: "easeOut" },
										}}
									>
										<Image
											src={reel.src}
											alt={reel.alt}
											fill
											className="object-cover"
											sizes="180px"
										/>
										<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/40 to-transparent px-3 py-3">
											<div className="flex items-center gap-1.5">
												<Eye className="h-3.5 w-3.5 text-white/70" />
												<p className="font-bold text-white text-xl leading-none">{reel.views}</p>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Stats */}
						<motion.div
							className="mt-6 flex items-center gap-3"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 1.2, ease }}
						>
							<div className="flex items-center gap-2 rounded-full bg-[#0a0a0a] px-4 py-2.5">
								<span className="font-bold text-sm text-white">1.3만</span>
								<span className="text-white/50 text-xs">팔로워</span>
							</div>
							<div className="flex items-center gap-2 rounded-full border border-[#16a34a]/20 bg-[#16a34a]/8 px-4 py-2.5">
								<span className="font-bold text-[#15803d] text-sm">166만+</span>
								<span className="text-[#16a34a]/60 text-xs">총 조회수</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
