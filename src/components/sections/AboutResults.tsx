"use client";

import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 조회수는 이미지 안에 표기돼 있어 코드 오버레이를 두지 않는다.
const AFTER_REELS = [
	{
		src: "/images/shortform/shortform-6.png",
		alt: "몰래 녹음은 다 불법? — 온케팅 제작 변호사 릴스",
		rotate: -4,
	},
	{
		src: "/images/shortform/shortform-2.png",
		alt: "이사갈 때 100만원 받는 법 — 온케팅 제작 변호사 릴스",
		rotate: 3,
	},
	{
		src: "/images/shortform/shortform-3.png",
		alt: "모르는 돈 100만원이 통장에 입금된다면 — 온케팅 제작 변호사 릴스",
		rotate: 3.5,
	},
	{
		src: "/images/shortform/shortform-4.png",
		alt: "근로계약서에 이 조항 있으면 절대 싸인하지 마세요 — 온케팅 제작 변호사 릴스",
		rotate: -3,
	},
];

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutResults = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: false, margin: "-120px" });
	const [active, setActive] = useState<number | null>(null);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	return (
		<section className="overflow-hidden bg-white px-4 py-24 md:py-32">
			<div ref={ref} className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-16 md:mb-20">
					<motion.p
						className="mb-5 font-mono text-[#e11d29] text-base uppercase tracking-[0.25em]"
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
							<ArrowRight className="h-20 w-20 text-[#e11d29] md:h-24 md:w-24" strokeWidth={2} />
						</motion.div>
						<span className="font-bold text-[#e11d29] text-[11px] uppercase tracking-widest">
							온세상이마케팅이다
						</span>
					</motion.div>

					{/* After */}
					<div className="flex flex-col items-center">
						<motion.p
							className="mb-8 font-semibold text-[#e11d29] text-xs uppercase tracking-[0.25em]"
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
										className="cursor-pointer overflow-hidden rounded-2xl"
										style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.28)" }}
										onClick={() => setActive(i)}
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
											width={332}
											height={516}
											className="h-auto w-full"
											sizes="180px"
										/>
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
							<div className="flex items-center gap-2 rounded-full border border-[#e11d29]/20 bg-[#e11d29]/8 px-4 py-2.5">
								<span className="font-bold text-[#b3121e] text-sm">290만+</span>
								<span className="text-[#e11d29]/60 text-xs">총 조회수</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* 릴스 라이트박스 */}
			<AnimatePresence>
				{active !== null && (
					<motion.div
						className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={() => setActive(null)}
					>
						<button
							type="button"
							onClick={() => setActive(null)}
							aria-label="닫기"
							className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
						>
							<X className="h-5 w-5" />
						</button>
						<motion.div
							className="w-[min(80vw,360px)] overflow-hidden rounded-3xl shadow-2xl"
							initial={{ scale: 0.85, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ type: "spring", stiffness: 220, damping: 24 }}
							onClick={(e) => e.stopPropagation()}
						>
							<Image
								src={AFTER_REELS[active].src}
								alt={AFTER_REELS[active].alt}
								width={332}
								height={516}
								className="h-auto w-full"
								sizes="360px"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
