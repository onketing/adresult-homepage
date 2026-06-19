"use client";

import {
	BarChart3,
	Calculator,
	Heart,
	type LucideIcon,
	MessageCircle,
	Play,
	Scale,
	Send,
	ShieldCheck,
	Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, LucideIcon> = {
	scale: Scale,
	stethoscope: Stethoscope,
	shield: ShieldCheck,
	calculator: Calculator,
	chart: BarChart3,
};

// 직군별 쇼츠/숏폼 페이지 히어로. 윈도우에서도 동일하게 동작(정지 없이 잔잔한 모션 유지).
// 구조·레이아웃은 모든 직군 공유. accent 컬러와 icon만 직군별로 다름.
export const ProShortformHero = ({
	eyebrow,
	titleLead,
	titleHighlight,
	sub,
	accent,
	icon,
}: {
	eyebrow: string;
	titleLead: string;
	titleHighlight: string;
	sub: string;
	accent: string;
	icon: string;
}) => {
	const Icon = ICONS[icon] ?? Scale;
	return (
		<section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_25%,#ffffff_0%,#eef2f7_60%,#e2e8f0_100%)] px-6 py-28 md:px-10 md:py-32">
			<motion.div
				className="pointer-events-none absolute h-[420px] w-[420px] rounded-full opacity-[0.18] blur-[130px]"
				style={{ top: "-90px", right: "-60px", backgroundColor: accent }}
				animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
				transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				{/* Left — copy */}
				<div>
					<motion.div
						className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
						style={{ backgroundColor: `${accent}1a`, border: `1px solid ${accent}33` }}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease }}
					>
						<Icon className="h-6 w-6" style={{ color: accent }} />
					</motion.div>
					<motion.p
						className="mb-4 font-semibold text-sm uppercase tracking-[0.25em]"
						style={{ color: accent }}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.05, ease }}
					>
						{eyebrow}
					</motion.p>
					<motion.h1
						className="font-bold text-[44px] text-slate-900 leading-[1.12] tracking-tight sm:text-[56px] md:text-[68px]"
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.08, ease }}
					>
						{titleLead}
						<br />
						<span style={{ color: accent }}>{titleHighlight}</span>
					</motion.h1>
					<motion.p
						className="mt-6 max-w-xl break-keep text-lg text-slate-600 leading-relaxed md:text-xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease }}
					>
						{sub}
					</motion.p>
					<motion.div
						className="mt-8 flex flex-wrap gap-3"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.32, ease }}
					>
						<Link
							href="/contact"
							className="rounded-md bg-linear-to-r from-[#58d68d] to-[#16a34a] px-6 py-3 font-semibold text-sm text-white shadow-sm transition-opacity hover:opacity-90"
						>
							마케팅 컨설팅
						</Link>
						<Link
							href="/services/shortform"
							className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-foreground text-sm transition-colors hover:bg-slate-50"
						>
							숏폼 마케팅 전체 보기
						</Link>
					</motion.div>
				</div>

				{/* Right — shorts phone mockup */}
				<div className="flex items-center justify-center">
					<motion.div
						className="relative h-[420px] w-52 rounded-[34px] border border-black/10 bg-[#0d0d0d] p-2 shadow-[0_30px_70px_rgba(15,23,42,0.30)]"
						initial={{ opacity: 0, y: 50, rotate: -4 }}
						animate={{ opacity: 1, y: [0, -10, 0], rotate: -4 }}
						transition={{
							opacity: { duration: 0.7, delay: 0.3, ease },
							rotate: { duration: 0.7, delay: 0.3, ease },
							y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 },
						}}
					>
						<div className="relative flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,#1f2937_0%,#0a0a0a_70%)]">
							<div className="absolute top-2.5 left-1/2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-black/40" />
							<span className="absolute top-4 left-3 z-10 rounded-md bg-black/30 px-2 py-0.5 font-bold text-[10px] text-white backdrop-blur-sm">
								쇼츠
							</span>
							<div className="flex flex-1 items-center justify-center">
								<div className="relative flex items-center justify-center">
									<motion.span
										className="absolute h-14 w-14 rounded-full border border-white/70"
										animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
										transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
									/>
									<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-md">
										<Play
											className="h-5 w-5 translate-x-px"
											style={{ color: accent }}
											fill={accent}
										/>
									</div>
								</div>
							</div>
							<div className="absolute right-3 bottom-16 z-10 flex flex-col items-center gap-3 text-white">
								<div className="flex flex-col items-center gap-0.5">
									<Heart className="h-5 w-5" fill="#fff" />
									<span className="font-semibold text-[9px]">2.4만</span>
								</div>
								<MessageCircle className="h-5 w-5" />
								<Send className="h-5 w-5" />
							</div>
							<div className="absolute bottom-7 left-3 z-10 space-y-1.5">
								<div className="h-2 w-24 rounded-full bg-white/80" />
								<div className="h-2 w-16 rounded-full bg-white/40" />
							</div>
							<div className="absolute right-3 bottom-3 left-3 h-1 overflow-hidden rounded-full bg-white/25">
								<motion.div
									className="h-full rounded-full"
									style={{ backgroundColor: accent }}
									animate={{ width: ["0%", "100%"] }}
									transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
