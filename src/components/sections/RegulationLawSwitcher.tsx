"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { REGULATIONS } from "@/data/regulations";

export const RegulationLawSwitcher = () => {
	const [selected, setSelected] = useState(0);
	const reg = REGULATIONS[selected];

	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				{/* 헤더 — 좌측 정렬 */}
				<div className="mb-10">
					<p className="mb-2 font-semibold text-slate-500 text-xs uppercase tracking-[0.2em]">
						Regulation
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
						12개 직군, 항목별 점검 기준입니다.
					</h2>
					<p className="mt-3 text-slate-600 text-sm">
						직군을 누르면 가능한 표현과 금지된 표현을 확인할 수 있습니다.
					</p>
				</div>

				{/* 데스크탑: 좌 chip + 우 panel */}
				<div className="hidden md:grid md:grid-cols-[260px_1fr] md:gap-6">
					{/* 좌측 chip list */}
					<div className="flex flex-col gap-1.5">
						{REGULATIONS.map((r, i) => (
							<button
								key={r.slug}
								type="button"
								onClick={() => setSelected(i)}
								className={`rounded-lg border px-4 py-2.5 text-left font-semibold text-sm transition-all ${
									selected === i
										? "border-[#58d68d] bg-[#58d68d] text-white"
										: "border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
								}`}
							>
								{r.profession}
							</button>
						))}
					</div>

					{/* 우측 detail panel */}
					<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
						<AnimatePresence mode="wait">
							<motion.div
								key={selected}
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.22, ease: "easeOut" }}
								className="p-7"
							>
								{/* meta */}
								<div className="mb-6 flex items-center gap-3">
									<div>
										<p className="font-bold text-[#0a0a0a] text-lg">{reg.profession}</p>
										<p className="mt-0.5 font-mono text-slate-500 text-xs tracking-[0.12em]">
											{reg.law} · {reg.rule}
										</p>
									</div>
								</div>

								{/* 2열 표 */}
								<div className="grid grid-cols-2 gap-4">
									{/* 가능 */}
									<div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
										<p className="mb-3 font-semibold text-emerald-700 text-xs uppercase tracking-[0.15em]">
											✓ 가능한 표현
										</p>
										<ul className="space-y-2">
											{reg.allowed.map((a) => (
												<li key={a} className="flex items-start gap-2">
													<span className="mt-0.5 shrink-0 text-emerald-500 text-xs">✓</span>
													<span className="break-keep text-[#0a0a0a] text-sm leading-relaxed">
														{a}
													</span>
												</li>
											))}
										</ul>
									</div>

									{/* 금지 */}
									<div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
										<p className="mb-3 font-semibold text-rose-600 text-xs uppercase tracking-[0.15em]">
											✕ 금지된 표현
										</p>
										<ul className="space-y-2">
											{reg.prohibited.map((p) => (
												<li key={p} className="flex items-start gap-2">
													<span className="mt-0.5 shrink-0 text-rose-400 text-xs">✕</span>
													<span className="break-keep text-slate-600 text-sm leading-relaxed">
														{p}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* 하단 라벨 */}
								<p className="mt-5 text-right font-mono text-slate-500 text-xs tracking-[0.12em]">
									발행 전 직접 검토 — 리스크 즉시 대응
								</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* 모바일: 아코디언 */}
				<div className="divide-y divide-slate-100 md:hidden">
					{REGULATIONS.map((r, _i) => (
						<details key={r.slug} className="group">
							<summary className="flex cursor-pointer list-none items-center justify-between py-4">
								<div>
									<span className="font-semibold text-[#0a0a0a] text-sm">{r.profession}</span>
									<span className="ml-2 font-mono text-[10px] text-slate-500">{r.law}</span>
								</div>
								<ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
							</summary>
							<div className="pb-4">
								<div className="grid grid-cols-1 gap-3">
									<div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
										<p className="mb-2 font-semibold text-[10px] text-emerald-700 uppercase tracking-[0.2em]">
											✓ 가능한 표현
										</p>
										<ul className="space-y-1.5">
											{r.allowed.map((a) => (
												<li key={a} className="flex items-start gap-1.5">
													<span className="mt-0.5 shrink-0 text-emerald-500 text-xs">✓</span>
													<span className="break-keep text-[#0a0a0a] text-xs leading-relaxed">
														{a}
													</span>
												</li>
											))}
										</ul>
									</div>
									<div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
										<p className="mb-2 font-semibold text-[10px] text-rose-600 uppercase tracking-[0.2em]">
											✕ 금지된 표현
										</p>
										<ul className="space-y-1.5">
											{r.prohibited.map((p) => (
												<li key={p} className="flex items-start gap-1.5">
													<span className="mt-0.5 shrink-0 text-rose-400 text-xs">✕</span>
													<span className="break-keep text-slate-600 text-xs leading-relaxed">
														{p}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	);
};
