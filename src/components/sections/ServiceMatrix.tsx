"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SERVICE_MATRIX } from "@/data/service-matrix";
import { cn } from "@/lib/utils";

export const ServiceMatrix = () => {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<section className="bg-white px-4 py-14 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Channels
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						어떤 결과를 <span className="gradient-text">원하세요?</span>
					</h2>
					<p className="mx-auto mt-4 max-w-xl break-keep text-slate-500 leading-relaxed">
						채널마다 강점이 다릅니다. 원하는 결과부터 선택하세요.
					</p>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{SERVICE_MATRIX.map((card) => (
						<Reveal key={card.id} direction="up">
							<Link
								href={card.href}
								onMouseEnter={() => setHovered(card.id)}
								onMouseLeave={() => setHovered(null)}
								className={cn(
									"group flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-300",
									hovered === null || hovered === card.id
										? "border-slate-200 opacity-100 hover:-translate-y-1 hover:border-[#ef3c39]/50 hover:shadow-[0_12px_40px_rgba(239,60,57,0.1)]"
										: "scale-[0.98] border-slate-100 opacity-40",
								)}
							>
								<p className="mb-3 font-mono text-[#ef3c39] text-[10px] uppercase tracking-[0.3em]">
									{card.eyebrow}
								</p>

								{/* KPI */}
								<p className="mb-1 font-extrabold text-[56px] leading-none tracking-tighter">
									<span className="gradient-text">{card.kpi}</span>
								</p>
								<p className="mb-5 text-slate-500 text-xs">{card.kpiLabel}</p>

								<h3 className="mb-3 whitespace-pre-line font-bold text-[#0a0a0a] text-xl leading-snug tracking-tight">
									{card.title}
								</h3>

								<p className="mb-5 break-keep text-slate-500 text-sm leading-relaxed">
									{card.caseDesc}
								</p>

								<ul className="mb-6 flex-1 space-y-2">
									{card.bullets.map((b) => (
										<li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
											<span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef3c39]" />
											<span className="break-keep">{b}</span>
										</li>
									))}
								</ul>

								<span className="flex items-center gap-1.5 self-start font-semibold text-[#0a0a0a] text-sm">
									{card.cta}
									<ArrowRight
										className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
										aria-hidden="true"
									/>
								</span>
							</Link>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
