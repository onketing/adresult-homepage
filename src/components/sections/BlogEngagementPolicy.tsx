"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { BLOG_ENGAGEMENT_POLICY, BLOG_SIGNATURE_POINTS } from "@/data/service-blog";

export const BlogEngagementPolicy = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-24">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{/* Left: dark rejection card */}
					<Reveal direction="left">
						<div className="flex h-full flex-col rounded-2xl bg-[#0a0a0a] p-8 md:p-10">
							<p className="mb-4 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
								Engagement Policy
							</p>
							<h2 className="mb-8 font-bold text-2xl text-white tracking-tight md:text-3xl">
								{BLOG_ENGAGEMENT_POLICY.heading}
							</h2>
							<ul className="flex flex-col gap-0 divide-y divide-slate-800">
								{BLOG_ENGAGEMENT_POLICY.items.map((item, i) => (
									<motion.li
										key={item.title}
										className="flex flex-col gap-1.5 py-5 first:pt-0 last:pb-0"
										initial={{ opacity: 0, x: -16 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: false }}
										transition={{ delay: 0.05 + i * 0.08 }}
									>
										<div className="flex items-start gap-2.5">
											<span className="mt-0.5 shrink-0 font-bold text-[#ef3c39] text-sm leading-none">
												—
											</span>
											<span className="break-keep font-semibold text-sm text-white">
												{item.title}
											</span>
										</div>
										<p className="break-keep pl-5 text-slate-500 text-sm leading-relaxed">
											{item.body}
										</p>
									</motion.li>
								))}
							</ul>
						</div>
					</Reveal>

					{/* Right: signature promise card */}
					<Reveal direction="right">
						<div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-8 md:p-10">
							<p className="mb-4 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
								Our Signature
							</p>
							<h2 className="mb-8 font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
								대신, 이것만큼은 끝까지 지키겠습니다.
							</h2>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								{BLOG_SIGNATURE_POINTS.map((pt, i) => (
									<motion.div
										key={pt.num}
										className="rounded-xl border border-slate-200 bg-white p-5"
										initial={{ opacity: 0, y: 16 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: false }}
										transition={{ delay: 0.1 + i * 0.08 }}
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
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
