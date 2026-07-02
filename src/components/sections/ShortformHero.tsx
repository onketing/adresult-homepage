"use client";

import { ChevronDown, Heart, MessageCircle, Play, Send } from "lucide-react";
import { motion } from "motion/react";
import { WaveformBackground } from "@/components/shared/WaveformBackground";

const PHONES = [
	{
		platform: "릴스",
		accent: "#ee2a7b",
		gradient: "linear-gradient(160deg,#f9ce34 0%,#ee2a7b 48%,#6228d7 100%)",
		likes: "2.4만",
		delay: 0.35,
		rotate: -8,
		marginLeft: 0,
		progress: 5.5,
	},
	{
		platform: "쇼츠",
		accent: "#ff0000",
		gradient: "linear-gradient(160deg,#ff5a52 0%,#ff0000 55%,#9e1414 100%)",
		likes: "1.8만",
		delay: 0.2,
		rotate: 0,
		marginLeft: -36,
		progress: 4.5,
	},
	{
		platform: "틱톡",
		accent: "#25f4ee",
		gradient: "linear-gradient(160deg,#2b2b2b 0%,#0a0a0a 65%)",
		likes: "3.1만",
		delay: 0.5,
		rotate: 8,
		marginLeft: -36,
		progress: 6,
	},
] as const;

export const ShortformHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,#ffffff_0%,#eef2f7_60%,#e2e8f0_100%)] px-6 py-24 md:px-10 md:py-32">
			{/* 사운드 웨이브폼 배경 (숏폼 모티프) */}
			<WaveformBackground />

			<motion.div
				className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#ef3c39] opacity-[0.18] blur-[120px]"
				style={{ top: "-80px", right: "-80px" }}
				animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
				transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div>
					<motion.p
						className="mb-4 font-semibold text-[#e11d29] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Shortform Marketing
					</motion.p>
					<motion.h1
						className="mb-4 font-bold text-[52px] text-slate-900 leading-tight tracking-tight sm:text-[64px] md:text-[80px] lg:text-[96px]"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						숏폼 촬영이 <span className="gradient-text">어려우세요?</span>
					</motion.h1>
					<motion.p
						className="mb-8 max-w-xl break-keep text-slate-600 text-xl leading-relaxed md:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						대본부터 손동작까지 전부 책임져 드립니다.
					</motion.p>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="relative flex items-end justify-center">
						{PHONES.map((phone, i) => (
							<motion.div
								key={phone.platform}
								className="relative h-72 w-36 rounded-[28px] border border-black/10 bg-[#0d0d0d] p-1.5 shadow-[0_24px_60px_rgba(15,23,42,0.28)]"
								style={{
									marginLeft: phone.marginLeft,
									zIndex: phone.rotate === 0 ? 10 : 0,
									rotate: phone.rotate,
								}}
								initial={{ opacity: 0, y: 60, rotate: phone.rotate }}
								animate={{
									opacity: 1,
									y: [0, i % 2 === 0 ? -10 : -6, 0],
									rotate: phone.rotate,
								}}
								transition={{
									opacity: { delay: phone.delay, duration: 0.6 },
									rotate: { delay: phone.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
									y: {
										delay: phone.delay,
										duration: 4 + i * 0.6,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									},
								}}
							>
								{/* 영상 화면 */}
								<div
									className="relative flex h-full w-full flex-col overflow-hidden rounded-[22px]"
									style={{ background: phone.gradient }}
								>
									{/* 노치 */}
									<div className="absolute top-2 left-1/2 z-20 h-1 w-9 -translate-x-1/2 rounded-full bg-black/30" />

									{/* 플랫폼 배지 */}
									<span className="absolute top-3.5 left-2.5 z-10 rounded-md bg-black/25 px-1.5 py-0.5 font-bold text-[9px] text-white backdrop-blur-sm">
										{phone.platform}
									</span>

									{/* 중앙 재생 버튼 (펄스 링) */}
									<div className="flex flex-1 items-center justify-center">
										<div className="relative flex items-center justify-center">
											<motion.span
												className="absolute h-11 w-11 rounded-full border border-white/70"
												animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
												transition={{
													duration: 2,
													repeat: Number.POSITIVE_INFINITY,
													ease: "easeOut",
													delay: phone.delay,
												}}
											/>
											<div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-md">
												<Play
													className="h-4 w-4 translate-x-px"
													style={{ color: phone.accent }}
													fill={phone.accent}
												/>
											</div>
										</div>
									</div>

									{/* 우측 인게이지먼트 레일 */}
									<div className="absolute right-2 bottom-12 z-10 flex flex-col items-center gap-2.5 text-white">
										<div className="flex flex-col items-center gap-0.5">
											<Heart className="h-4 w-4" fill="#fff" />
											<span className="font-semibold text-[8px]">{phone.likes}</span>
										</div>
										<MessageCircle className="h-4 w-4" />
										<Send className="h-4 w-4" />
									</div>

									{/* 하단 캡션 */}
									<div className="absolute bottom-5 left-2.5 z-10 space-y-1">
										<div className="h-1.5 w-16 rounded-full bg-white/75" />
										<div className="h-1.5 w-11 rounded-full bg-white/40" />
									</div>

									{/* 진행바 */}
									<div className="absolute right-2.5 bottom-2.5 left-2.5 h-0.5 overflow-hidden rounded-full bg-white/25">
										<motion.div
											className="h-full rounded-full bg-white"
											initial={{ width: "0%" }}
											animate={{ width: ["0%", "100%"] }}
											transition={{
												duration: phone.progress,
												repeat: Number.POSITIVE_INFINITY,
												ease: "linear",
												delay: phone.delay,
											}}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-slate-600"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				aria-label="더 알아보기"
			>
				<motion.div
					className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300"
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
