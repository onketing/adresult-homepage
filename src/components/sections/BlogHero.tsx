"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const KEYWORD_SETS = [
	{
		query: "음주운전 초범 벌금 기준",
		results: [
			"음주운전 초범 벌금·면허정지 기준 총정리 (2024)",
			"초범인데 구속될 수 있나요? 변호사가 직접 답합니다",
			"음주운전 합의 없이 혼자 대응했다가 벌어지는 일",
		],
	},
	{
		query: "탈모 한의원 치료 효과 후기",
		results: [
			"탈모 한의원 치료, 몇 달이면 효과 나타나나요?",
			"M자·정수리 탈모에 한약이 효과 있는 이유",
			"한의원 탈모 치료 vs 병원 — 실제 차이는 이렇습니다",
		],
	},
	{
		query: "노무사 부당해고 구제신청 방법",
		results: [
			"부당해고 구제신청, 혼자 할 수 있을까? 노무사가 답합니다",
			"해고예고 없이 잘렸을 때 받을 수 있는 것들",
			"부당해고 인정 기준과 복직·손해배상 총정리",
		],
	},
	{
		query: "세무사 종합소득세 신고 비용",
		results: [
			"종합소득세 세무사 맡기면 얼마? 직접 신고와 비교",
			"프리랜서 종합소득세, 혼자 신고하다 놓치는 항목들",
			"세무사가 말하는 절세 가능한 경비처리 항목 정리",
		],
	},
] as const;

export const BlogHero = () => {
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIdx((prev) => (prev + 1) % KEYWORD_SETS.length), 3200);
		return () => clearInterval(id);
	}, []);

	const current = KEYWORD_SETS[idx];

	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 md:px-10 md:py-32">
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: "radial-gradient(ellipse at 20% 50%, #f0fdf4 0%, transparent 60%)",
				}}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div>
					<motion.h1
						className="mb-4 font-bold text-5xl text-[#0a0a0a] leading-none tracking-tight md:text-7xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						찾아오는 <span className="gradient-text">블로그</span>가 됩니다.
					</motion.h1>
				</div>

				<motion.div
					className="relative"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
						{/* Browser chrome */}
						<div className="flex items-center gap-2 border-slate-100 border-b bg-slate-50 px-4 py-3">
							<span className="h-3 w-3 rounded-full bg-red-400" />
							<span className="h-3 w-3 rounded-full bg-yellow-400" />
							<span className="h-3 w-3 rounded-full bg-green-400" />
							<div
								className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-slate-500 text-xs"
								aria-hidden="true"
							>
								search.naver.com
							</div>
						</div>

						{/* Search bar */}
						<div className="border-slate-100 border-b px-5 py-4">
							<div className="flex items-center gap-2 rounded-lg border border-[#58d68d]/30 bg-[#f0fdf4] px-4 py-2.5">
								<svg
									className="h-4 w-4 shrink-0 text-[#58d68d]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<title>검색</title>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.35-4.35" />
								</svg>
								<AnimatePresence mode="wait">
									<motion.span
										key={current.query}
										className="font-medium text-[#0a0a0a] text-sm"
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -6 }}
										transition={{ duration: 0.25 }}
									>
										{current.query}
									</motion.span>
								</AnimatePresence>
							</div>
						</div>

						{/* Results */}
						<div className="divide-y divide-slate-50 px-5 py-2">
							<AnimatePresence mode="wait">
								{current.results.map((title, i) => (
									<motion.div
										key={title}
										className="py-3"
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										transition={{ delay: i * 0.06, duration: 0.25 }}
									>
										<div className="mb-1 flex items-center gap-2">
											<span
												className={`rounded px-1.5 py-0.5 font-semibold text-[10px] ${
													i === 0 ? "bg-[#58d68d] text-white" : "bg-slate-100 text-slate-700"
												}`}
											>
												블로그
											</span>
										</div>
										<p
											className={`text-sm leading-snug ${
												i === 0 ? "font-semibold text-[#58d68d]" : "text-[#0a0a0a]"
											}`}
										>
											{title}
										</p>
									</motion.div>
								))}
							</AnimatePresence>
						</div>

						<div className="border-slate-100 border-t bg-[#f0fdf4] px-5 py-3">
							<p className="font-medium text-[#58d68d] text-xs">
								→ 1번 결과에서 상담 문의 클릭율 +3배
							</p>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-600"
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
