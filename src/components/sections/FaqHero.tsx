"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const CATEGORY_CHIPS = [
	{ label: "비용", slug: "cost" },
	{ label: "진행 안내", slug: "guide" },
	{ label: "광고규정", slug: "regulation" },
	{ label: "운영보고", slug: "operation" },
	{ label: "성과", slug: "results" },
	{ label: "해지환불", slug: "exit" },
] as const;

const scrollToCategory = (slug: string) => {
	const el = document.getElementById(`faq-${slug}`);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 100;
	window.scrollTo({ top, behavior: "smooth" });
};

export const FaqHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[#fafbfc] px-6 py-28 md:px-10 md:py-36">
			{/* Soft tinted blobs */}
			<div
				className="pointer-events-none absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#ef3c39] opacity-[0.05] blur-[160px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute right-[-8%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#fca5a5] opacity-[0.05] blur-[140px]"
				aria-hidden="true"
			/>

			{/* Fine grid pattern + radial mask */}
			<div
				className="pointer-events-none absolute inset-0 opacity-50"
				style={{
					backgroundImage:
						"linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
				}}
			/>

			{/* SVG fine noise */}
			<svg
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-multiply"
			>
				<filter id="faq-hero-noise-light">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="2"
						stitchTiles="stitch"
					/>
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.4  0 0 0 0 0.4  0 0 0 0 0.5  0 0 0 0.15 0"
					/>
				</filter>
				<rect width="100%" height="100%" filter="url(#faq-hero-noise-light)" />
			</svg>

			{/* Top hairline + mono credit */}
			<div className="absolute top-24 right-0 left-0 z-10 mx-auto flex max-w-4xl items-center gap-3 px-6 md:top-28 md:px-10">
				<div className="h-px flex-1 bg-slate-200" />
				<p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">
					ADRESULT · Knowledge — 2026
				</p>
				<div className="h-px flex-1 bg-slate-200" />
			</div>

			{/* Center content */}
			<div className="relative z-10 mx-auto w-full max-w-4xl text-center">
				<motion.p
					className="mb-6 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					FAQ
				</motion.p>

				<motion.h1
					className="mb-6 font-bold text-[40px] text-slate-900 leading-[1.08] tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[92px]"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
				>
					묻기 전에,
					<br />
					<span className="gradient-text">답</span>을 봅니다.
				</motion.h1>

				<motion.p
					className="mx-auto mb-10 max-w-xl break-keep text-base text-slate-600 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.25 }}
				>
					자주 묻는 질문을 여섯 카테고리로 정리했습니다.
				</motion.p>

				{/* Category chips */}
				<motion.div
					className="flex flex-wrap items-center justify-center gap-2"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.35 }}
				>
					{CATEGORY_CHIPS.map((chip, i) => (
						<motion.button
							key={chip.slug}
							type="button"
							onClick={() => scrollToCategory(chip.slug)}
							className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-medium text-slate-700 text-sm transition-all duration-200 hover:border-[#ef3c39] hover:text-[#ef3c39] hover:shadow-[0_4px_12px_rgba(239,60,57,0.12)]"
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
						>
							{chip.label}
						</motion.button>
					))}
				</motion.div>
			</div>

			{/* Bottom stat line */}
			<motion.div
				className="absolute right-0 bottom-24 left-0 z-10 mx-auto flex max-w-4xl items-center gap-3 px-6 md:bottom-28 md:px-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7, delay: 0.6 }}
			>
				<div className="h-px flex-1 bg-slate-200" />
				<p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">
					6 Categories · 25 Q&amp;A
				</p>
				<div className="h-px flex-1 bg-slate-200" />
			</motion.div>

			{/* Scroll indicator */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute right-6 bottom-10 z-10 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-800 md:right-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				aria-label="scroll"
			>
				<span className="font-mono text-[10px] uppercase tracking-[0.25em]">scroll</span>
				<motion.div
					className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<ChevronDown className="h-4 w-4" />
				</motion.div>
			</motion.button>
		</section>
	);
};
