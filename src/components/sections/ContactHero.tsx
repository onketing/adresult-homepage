"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export const ContactHero = () => {
	const scrollToForm = () => {
		const el = document.getElementById("contact-form");
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 80;
		window.scrollTo({ top, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-28 md:px-10 md:py-36">
			{/* Soft green radial glow */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 55% 45% at 50% 50%, rgba(88,214,141,0.18), transparent 70%)",
				}}
				aria-hidden="true"
			/>

			{/* Outward ripple rings */}
			<div
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				aria-hidden="true"
			>
				{([0, 1, 2] as const).map((i) => (
					<motion.div
						key={i}
						className="absolute rounded-full border border-[#58d68d]"
						style={{ width: 160, height: 160, left: -80, top: -80 }}
						animate={{ scale: [1, 6], opacity: [0.35, 0] }}
						transition={{
							duration: 4,
							delay: i * 1.35,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeOut",
						}}
					/>
				))}
			</div>

			{/* Fine grid */}
			<div
				className="pointer-events-none absolute inset-0 opacity-25"
				style={{
					backgroundImage:
						"linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
				}}
			/>

			{/* Center content */}
			<div className="relative z-10 mx-auto w-full max-w-4xl text-center">
				<motion.h1
					className="mb-6 font-bold text-[#0a0a0a] text-[40px] leading-[1.1] tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[88px]"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
				>
					마케팅 진단
					<br />
					<span className="text-[#58d68d]">무료</span>로 받아보세요
				</motion.h1>

				<motion.p
					className="mx-auto mb-12 max-w-lg break-keep text-base text-slate-600 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					경쟁사들은 어떤 마케팅을 하고 있는지 알려드릴게요.
				</motion.p>

				{/* CTA */}
				<motion.button
					type="button"
					onClick={scrollToForm}
					className="gradient-brand relative inline-flex items-center gap-2 overflow-hidden rounded-md px-8 py-3.5 font-semibold text-base text-white shadow-[0_4px_28px_rgba(88,214,141,0.45)]"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{ scale: 1.03 }}
				>
					<motion.span
						aria-hidden="true"
						className="pointer-events-none absolute top-0 h-full w-10"
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent)",
							transform: "skewX(-15deg)",
						}}
						animate={{ left: ["-15%", "115%"] }}
						transition={{
							duration: 0.85,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 3.2,
							ease: "easeInOut",
							delay: 2,
						}}
					/>
					지금 물어보기
					<ArrowDown className="h-4 w-4" aria-hidden="true" />
				</motion.button>
			</div>
		</section>
	);
};
