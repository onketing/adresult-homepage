"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { ENGAGEMENT_POLICY } from "@/data/engagement-policy";
import { SIGNATURE_POINTS } from "@/data/signature-points";

export const ServiceEngagementPolicy = () => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
					<Reveal direction="left">
						<p className="mb-2 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
							Engagement Policy
						</p>
						<h2 className="mb-2 font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
							{ENGAGEMENT_POLICY.heading}
						</h2>
						<p className="mb-6 text-slate-500 text-sm">{ENGAGEMENT_POLICY.sub}</p>
						<ul className="space-y-3">
							{ENGAGEMENT_POLICY.items.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span className="mt-0.5 font-semibold text-[#ef3c39] text-lg leading-none">
										—
									</span>
									<span className="break-keep text-[#0a0a0a] text-sm leading-relaxed">{item}</span>
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal direction="right">
						<p className="mb-2 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
							Our Signature
						</p>
						<h2 className="mb-6 font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
							대신, 이것은 반드시 합니다.
						</h2>
						<div className="grid grid-cols-2 gap-4">
							{SIGNATURE_POINTS.map((pt, i) => (
								<motion.div
									key={pt.num}
									className="rounded-xl border border-slate-200 bg-white p-5"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: false }}
									transition={{ delay: 0.1 + i * 0.07 }}
									whileHover={{ borderColor: "rgba(239,60,57,0.4)", y: -4 }}
								>
									<span className="mb-2 block font-bold font-mono text-[#ef3c39] text-xs tracking-[0.15em]">
										{pt.num}
									</span>
									<h3 className="mb-1 font-semibold text-[#0a0a0a] text-sm">{pt.title}</h3>
									<p className="break-keep text-slate-500 text-xs leading-relaxed">{pt.body}</p>
								</motion.div>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
