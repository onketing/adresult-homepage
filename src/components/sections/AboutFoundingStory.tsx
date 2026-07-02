"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { FOUNDING_STORY } from "@/data/founding-story";

export const AboutFoundingStory = () => {
	return (
		<section className="bg-slate-50 px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				{/* 슬로건 헤더 */}
				<Reveal className="mb-14">
					<p className="mb-6 font-mono text-2xl text-[#e11d29] tracking-[0.25em]">주변을 보세요.</p>
					<h2 className="font-bold text-4xl text-[#0a0a0a] leading-tight tracking-tight md:text-6xl lg:text-7xl">
						이미 온 세상이 마케팅입니다!
					</h2>
				</Reveal>

				{/* 창업 스토리 */}
				<Reveal direction="left">
					<motion.div
						className="mb-6 select-none font-serif text-[#e11d29]/40 text-[96px] leading-none"
						initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
						whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
						viewport={{ once: false, margin: "-80px" }}
						transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					>
						&ldquo;
					</motion.div>

					<div className="space-y-5">
						{FOUNDING_STORY.paragraphs.map((para) => (
							<p
								key={para}
								className="break-keep text-base text-slate-700 leading-relaxed md:text-lg"
							>
								{para}
							</p>
						))}
					</div>

					<blockquote className="mt-8 border-[#ef3c39]/30 border-l-2 pl-5">
						<p className="break-keep font-semibold text-[#0a0a0a] text-lg leading-snug md:text-xl">
							&ldquo;{FOUNDING_STORY.quote}&rdquo;
						</p>
						<footer className="mt-2 font-mono text-slate-500 text-xs">
							— {FOUNDING_STORY.quoteAuthor}
						</footer>
					</blockquote>
				</Reveal>
			</div>
		</section>
	);
};
