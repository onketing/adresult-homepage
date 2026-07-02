"use client";

import { animate, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_HIGHLIGHTS, CASE_HIGHLIGHTS_SINGLE } from "@/data/case-highlight";

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

// 애니메이션 그래프(GIF) — public/exam{n}-{k}.gif
const CaseChart = ({ src }: { src: string }) => (
	<div className="overflow-hidden rounded-xl bg-slate-50">
		<Image
			src={src}
			alt="병원마케팅 성과 그래프"
			width={650}
			height={527}
			unoptimized
			className="h-auto w-full"
		/>
	</div>
);

// ── 사례 카드 (더블 차트: 사례 1·2) ──────────────────────────
type CaseItem = (typeof CASE_HIGHLIGHTS)[number];

const CaseCard = ({ item, caseNum }: { item: CaseItem; caseNum: number }) => {
	return (
		<Reveal>
			<div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_32px_rgba(15,23,42,0.06)]">
				<div className="p-8 md:p-12">
					{/* 사례 라벨 */}
					<div className="mb-5 flex items-center gap-2">
						<span className="font-bold text-base text-slate-800">{item.label}</span>
						<span className="font-medium text-base text-slate-500">{item.client}</span>
					</div>

					{/* 한마디 */}
					<blockquote className="mb-6 border-[#ef3c39]/30 border-l-4 pl-5">
						<p className="break-keep font-bold text-2xl text-[#0a0a0a] leading-snug md:text-3xl">
							&ldquo;{item.quote}&rdquo;
						</p>
						<footer className="mt-2 font-mono text-slate-500 text-sm">— {item.quoteAuthor}</footer>
					</blockquote>

					{/* 결과 요약 */}
					<p className="mb-9 break-keep text-slate-600 text-xl leading-relaxed md:text-2xl">
						애드리절트 병원마케팅 후, 월 신규 환자{" "}
						<span className="font-extrabold text-2xl text-[#ef3c39] md:text-3xl">
							<CountUp to={item.pct} />%
						</span>{" "}
						증가, 광고비{" "}
						<span className="font-extrabold text-2xl text-red-600 md:text-3xl">
							{item.adSavingAmount}만원
						</span>{" "}
						절감!
					</p>

					{/* 그래프 2개 */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<CaseChart src={`/exam${caseNum}-1.gif`} />
						<CaseChart src={`/exam${caseNum}-2.gif`} />
					</div>
				</div>
			</div>
		</Reveal>
	);
};

// ── 단일 차트 사례 카드 (사례 3·4) ──────────────────────────
type SingleCaseItem = (typeof CASE_HIGHLIGHTS_SINGLE)[number];

const SingleCaseCard = ({
	item,
	caseNum,
	index,
}: {
	item: SingleCaseItem;
	caseNum: number;
	index: number;
}) => {
	return (
		<Reveal delay={index * 0.1}>
			<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_32px_rgba(15,23,42,0.06)]">
				<div className="flex flex-1 flex-col p-8 md:p-10">
					{/* 사례 라벨 */}
					<div className="mb-4 flex items-center gap-2">
						<span className="font-bold text-base text-slate-800">{item.label}</span>
						<span className="font-medium text-base text-slate-500">{item.client}</span>
					</div>

					{/* 한마디 */}
					<blockquote className="mb-4 border-[#ef3c39]/30 border-l-4 pl-4">
						<p className="break-keep font-bold text-[#0a0a0a] text-xl leading-snug md:text-2xl">
							&ldquo;{item.quote}&rdquo;
						</p>
						<footer className="mt-1.5 font-mono text-slate-500 text-sm">
							— {item.quoteAuthor}
						</footer>
					</blockquote>

					{/* 결과 요약 */}
					<p className="mb-6 break-keep text-lg text-slate-600 leading-relaxed md:text-xl">
						{item.period} 후 월 신규 환자{" "}
						<span className="font-extrabold text-2xl text-[#ef3c39]">
							<CountUp to={item.pct} />%
						</span>{" "}
						증가!
					</p>

					{/* 그래프 1개 */}
					<div className="mt-auto">
						<CaseChart src={`/exam${caseNum}-1.gif`} />
					</div>
				</div>
			</div>
		</Reveal>
	);
};

// ── 메인 컴포넌트 ─────────────────────────────────────────────
export const CaseHighlight = () => {
	return (
		<section className="bg-slate-50 py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* 섹션 헤더 */}
				<Reveal className="mb-12">
					<p className="mb-3 font-bold text-[#ef3c39] text-xl md:text-2xl">성공 사례</p>
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-6xl">
						실제 병원마케팅 결과입니다.
					</h2>
				</Reveal>

				{/* 사례 1, 2 — 더블 차트 */}
				<div className="mb-6 flex flex-col gap-6">
					{CASE_HIGHLIGHTS.map((item, i) => (
						<CaseCard key={item.label} item={item} caseNum={i + 1} />
					))}
				</div>

				{/* 사례 3, 4 — 싱글 차트 2열 */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{CASE_HIGHLIGHTS_SINGLE.map((item, i) => (
						<SingleCaseCard key={item.label} item={item} caseNum={i + 3} index={i} />
					))}
				</div>
			</div>
		</section>
	);
};
