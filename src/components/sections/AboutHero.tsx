"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const HERO_PHOTO_READY = false; // /public/images/about/office-main.jpg 준비 시 true로 변경

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden">
			<div className="absolute inset-0 bg-[#3a0509]">
				{HERO_PHOTO_READY ? (
					<Image
						src="/images/about/office-main.jpg"
						alt="온세상이마케팅이다 사무실"
						fill
						className="object-cover object-center"
						priority
					/>
				) : (
					<div className="h-full w-full" />
				)}
			</div>

			{/* Floating gradient orbs */}
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[#ef3c39] opacity-[0.18] blur-[130px]"
				style={{ top: "-200px", left: "-200px" }}
				animate={{ x: [0, 60, -30, 0], y: [0, -50, 80, 0] }}
				transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#b3121e] opacity-[0.10] blur-[110px]"
				style={{ bottom: "-100px", right: "-100px" }}
				animate={{ x: [0, -50, 30, 0], y: [0, 40, -60, 0] }}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
			/>

			{/* 대각선 보라 오버레이 (isanghan 대각 분할 패턴) */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: "linear-gradient(135deg, #3a0509 0%, #b3121e 60%, #ef3c39 100%)",
					clipPath: "polygon(0 0, 62% 0, 44% 100%, 0 100%)",
				}}
			/>

			{/* 우측 어두운 오버레이 — 사진 위 가독성 */}
			<div className="pointer-events-none absolute inset-0 bg-black/40" />

			{/* 콘텐츠 */}
			<div className="relative z-10 mx-auto w-full max-w-6xl px-8 py-32 md:px-12">
				<div className="max-w-xl">
					<motion.h1
						className="mb-10 font-bold text-[48px] text-white leading-[1.15] tracking-tight md:text-[64px] lg:text-[80px]"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.1, ease }}
					>
						아직도 마케팅
						<br />
						<span className="text-[#ef3c39]">안하고</span> 계신가요?
					</motion.h1>

					<motion.p
						className="font-semibold text-2xl text-white/50 md:text-3xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3, ease }}
					>
						온 세상이 마케팅입니다.
					</motion.p>
				</div>
			</div>

			{/* 스크롤 인디케이터 */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8, ease }}
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
