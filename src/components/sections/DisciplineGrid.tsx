"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { CLIENT_DISCIPLINES } from "@/data/client-disciplines";

export const DisciplineGrid = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						Coverage
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						12개 직군, <span className="gradient-text">규정별로 구분합니다</span>
					</h2>
					<p className="mx-auto mt-4 max-w-md break-keep text-base text-slate-500 leading-relaxed">
						직군마다 적용되는 법령이 다릅니다. 섞지 않습니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
					{CLIENT_DISCIPLINES.map((d, i) => (
						<SpotlightCard key={d.name} className="rounded-xl">
							<motion.div
								className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 px-5 py-5"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{ delay: i * 0.04, duration: 0.4 }}
								whileHover={{
									borderColor: "rgba(88,214,141,0.4)",
									boxShadow: "0 8px 24px rgba(88,214,141,0.1)",
									y: -4,
								}}
							>
								<p className="font-bold text-[#0a0a0a] text-base">{d.name}</p>
								<p className="mt-1 break-keep text-slate-500 text-xs">{d.caption}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};
