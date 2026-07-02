"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const DOCS = [
	{
		slug: "violation",
		lawLabel: "변호사법 §23",
		lines: [
			{ id: "v1", w: "w-full" },
			{ id: "v2", w: "w-4/5" },
			{ id: "v3", w: "w-full" },
			{ id: "v4", w: "w-3/5" },
			{ id: "v5", w: "w-full" },
			{ id: "v6", w: "w-4/5" },
		],
		stamp: "위반",
		stampColor: "text-rose-400",
		stampBorder: "border-rose-500/40",
		stampBg: "bg-[#1a0a0e]",
		accentBar: "bg-rose-500/30",
		rotate: -8,
		stampRotate: "-rotate-12",
		delay: 0.35,
		z: 1,
		mt: "mt-5",
	},
	{
		slug: "pass",
		lawLabel: "의료법 §56",
		lines: [
			{ id: "p1", w: "w-4/5" },
			{ id: "p2", w: "w-full" },
			{ id: "p3", w: "w-3/5" },
			{ id: "p4", w: "w-full" },
			{ id: "p5", w: "w-4/5" },
			{ id: "p6", w: "w-full" },
		],
		stamp: "통과",
		stampColor: "text-red-400",
		stampBorder: "border-red-500/40",
		stampBg: "bg-[#230505]",
		accentBar: "bg-red-500/30",
		rotate: 0,
		stampRotate: "-rotate-6",
		delay: 0.2,
		z: 10,
		mt: "mt-0",
	},
	{
		slug: "revise",
		lawLabel: "세무사법 §22",
		lines: [
			{ id: "r1", w: "w-full" },
			{ id: "r2", w: "w-3/5" },
			{ id: "r3", w: "w-4/5" },
			{ id: "r4", w: "w-full" },
			{ id: "r5", w: "w-3/5" },
			{ id: "r6", w: "w-4/5" },
		],
		stamp: "보완",
		stampColor: "text-amber-400",
		stampBorder: "border-amber-500/40",
		stampBg: "bg-[#1a1400]",
		accentBar: "bg-amber-500/30",
		rotate: 7,
		stampRotate: "rotate-6",
		delay: 0.5,
		z: 1,
		mt: "mt-3",
	},
] as const;

const STATS = [
	{ value: "12개", label: "직군" },
	{ value: "200+", label: "누적 콘텐츠" },
	{ value: "즉시", label: "리스크 대응" },
] as const;

export const RegulationHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[#3a0509] px-6 py-24 md:px-10 md:py-32">
			{/* 우상단 orb */}
			<motion.div
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#ef3c39] opacity-[0.14] blur-[140px]"
				style={{ top: "-120px", right: "-120px" }}
				animate={{ x: [0, -40, 20, 0], y: [0, 50, -20, 0] }}
				transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			{/* 좌하단 orb */}
			<motion.div
				className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#4f46e5] opacity-[0.08] blur-[100px]"
				style={{ bottom: "-80px", left: "-60px" }}
				animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
				{/* 좌측 텍스트 */}
				<div>
					<motion.p
						className="mb-5 font-semibold text-[#fca5a5] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Ad Regulation Compliance
					</motion.p>
					<motion.h1
						className="mb-5 font-bold text-5xl text-white leading-[1.08] tracking-tight md:text-[68px]"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<span className="gradient-text">규정</span>에 걸려도,
						<br />
						바로 잡습니다.
					</motion.h1>
					<motion.p
						className="mb-10 max-w-sm break-keep text-base text-white/75 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						12개 직군 법령을 발행 전 직접 검토합니다.
					</motion.p>

					{/* 신뢰 지표 스트립 */}
					<motion.div
						className="flex items-center gap-6"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						{STATS.map((s, i) => (
							<div key={s.label} className="flex items-center gap-6">
								<div>
									<p className="font-bold text-white text-xl leading-none">{s.value}</p>
									<p className="mt-0.5 font-mono text-white/65 text-xs tracking-[0.12em]">
										{s.label}
									</p>
								</div>
								{i < STATS.length - 1 && <div className="h-8 w-px bg-white/10" />}
							</div>
						))}
					</motion.div>
				</div>

				{/* 우측 문서 카드 */}
				<div className="hidden items-end justify-center py-8 md:flex">
					<div className="flex items-end">
						{DOCS.map((doc) => (
							<motion.div
								key={doc.slug}
								className={`relative w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-[0_24px_64px_rgba(0,0,0,0.6)] ${doc.mt}`}
								style={{
									marginLeft: doc.slug === "violation" ? 0 : -28,
									zIndex: doc.z,
									rotate: doc.rotate,
								}}
								initial={{ opacity: 0, y: 70, rotate: doc.rotate }}
								animate={{ opacity: 1, y: 0, rotate: doc.rotate }}
								transition={{
									delay: doc.delay,
									duration: 0.65,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								{/* 상단 컬러 accent bar */}
								<div className={`h-1 w-full ${doc.accentBar}`} />

								{/* 헤더 */}
								<div className="border-white/[0.07] border-b px-4 py-3">
									<div className="mb-1.5 h-1.5 w-16 rounded-full bg-white/20" />
									<p className="font-mono text-[10px] text-white/55 tracking-[0.12em]">
										{doc.lawLabel}
									</p>
								</div>

								{/* 본문 라인 */}
								<div className="space-y-2 px-4 py-5">
									{doc.lines.map((line) => (
										<div key={line.id} className={`h-1.5 rounded-full bg-white/8 ${line.w}`} />
									))}
								</div>

								{/* 스탬프 오버레이 */}
								<div className="px-4 pb-5">
									<div
										className={`${doc.stampRotate} rounded-lg border-2 ${doc.stampBorder} ${doc.stampBg} px-3 py-2 text-center`}
									>
										<p className={`font-bold text-sm tracking-widest ${doc.stampColor}`}>
											{doc.stamp}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* 더 알아보기 */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.9 }}
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
