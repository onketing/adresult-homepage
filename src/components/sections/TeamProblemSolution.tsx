"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";

const PROBLEMS = [
	"외주 편집팀을 사용해서 편집 기간이 들쭉날쭉해요.",
	"AI가 대본을 쓰는 것 같아요.",
	"핸드폰 하나로 촬영하고 성의가 없는 느낌이에요.",
] as const;

const SOLUTIONS = [
	"편집팀이 상주하며 전문적으로 편집을 진행해요.",
	"대본은 노하우를 담아 인플루언서가 직접 작성해요.",
	"촬영 장비와 촬영팀이 방문해 전문적으로 촬영해요.",
] as const;

export const TeamProblemSolution = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-3xl">
				{/* Problems */}
				<Reveal className="mb-10">
					<p className="mb-5 font-semibold text-slate-400 text-xs uppercase tracking-[0.3em]">
						이런 문제들?
					</p>
					<div className="flex flex-col gap-3">
						{PROBLEMS.map((p, i) => (
							<motion.div
								key={p}
								className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{ delay: i * 0.1 }}
							>
								<XCircle className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
								<p className="break-keep text-slate-400 text-sm line-through">{p}</p>
							</motion.div>
						))}
					</div>
				</Reveal>

				{/* Divider */}
				<Reveal className="mb-10">
					<div className="flex items-center gap-6">
						<div className="h-px flex-1 bg-slate-200" />
						<h2 className="shrink-0 font-bold text-[#0a0a0a] text-xl tracking-tight md:text-3xl">
							이제 고민하지 마세요.
						</h2>
						<div className="h-px flex-1 bg-slate-200" />
					</div>
				</Reveal>

				{/* Solutions */}
				<Reveal>
					<div className="flex flex-col gap-3">
						{SOLUTIONS.map((s, i) => (
							<motion.div
								key={s}
								className="flex items-center gap-4 rounded-xl border border-[#ef3c39]/25 bg-[#fef2f2] px-6 py-4"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{ delay: i * 0.1 }}
							>
								<CheckCircle className="h-5 w-5 shrink-0 text-[#ef3c39]" aria-hidden="true" />
								<p className="break-keep font-medium text-[#0a0a0a] text-sm">{s}</p>
							</motion.div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};
