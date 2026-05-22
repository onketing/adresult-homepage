"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
	{
		id: "1",
		title: "금액은 엄청 비싼데,\n효과가 있을지 솔직히 모르겠어요.",
	},
	{
		id: "2",
		title: "카메라 앞에 서는 것부터\n걱정되고, 전부 낯설고\n부담돼요.",
	},
	{
		id: "3",
		title: "계약하기 전에는 연락이\n빨랐는데, 계약 후에는\n연락이 너무 느려요.",
	},
] as const;

// 세 카드 모두 윗공간 중앙에서 출발 → 각자 그리드 위치로 펼쳐짐
const X_OFFSETS = [260, 0, -260] as const;
const Y_OFFSET = -100;

export const PainPoints = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const inView = useInView(gridRef, { once: false, margin: "-100px" });

	return (
		<section className="overflow-hidden bg-slate-100 px-4 py-28 md:py-36">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<div className="mb-16">
						<p className="mb-5 font-semibold text-2xl text-slate-600 md:text-3xl">
							이런 경험 있으셨죠?
						</p>
						<h2 className="font-bold text-5xl text-[#0a0a0a] leading-tight tracking-tight md:text-6xl lg:text-7xl">
							<span className="gradient-text">일반 대행사</span>에 맡겨봤지만...
						</h2>
					</div>
				</Reveal>

				<div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
					{ITEMS.map((item, i) => (
						<motion.div
							key={item.id}
							initial={{ x: X_OFFSETS[i], y: Y_OFFSET, opacity: 0, scale: 0.85 }}
							animate={
								inView
									? { x: 0, y: 0, opacity: 1, scale: 1 }
									: { x: X_OFFSETS[i], y: Y_OFFSET, opacity: 0, scale: 0.85 }
							}
							transition={{
								duration: 0.75,
								delay: 0,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<div className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#58d68d]/20 hover:bg-[#f0fdf4] hover:shadow-[0_16px_48px_rgba(88,214,141,0.12)]">
								{/* 왼쪽 gradient 세로선 */}
								<div className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-linear-to-b from-[#58d68d] to-[#16a34a] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

								{/* 번호 */}
								<span className="gradient-text font-bold font-mono text-4xl leading-none">
									{String(i + 1).padStart(2, "0")}
								</span>

								{/* 제목 */}
								<p className="flex min-h-20 items-end whitespace-pre-line font-bold text-2xl text-[#0a0a0a] leading-snug tracking-tight">
									{item.title}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
