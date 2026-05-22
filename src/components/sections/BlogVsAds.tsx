"use client";

import { Reveal } from "@/components/shared/Reveal";
import { BLOG_VS_ADS } from "@/data/service-blog";

export const BlogVsAds = () => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-20">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-8">
					<h2 className="font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
						광고비와 블로그의 차이 → 퍼포먼스 VS 블로그
					</h2>
				</Reveal>

				<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
					<div className="grid grid-cols-3 border-slate-100 border-b">
						<div className="px-6 py-4" />
						<div className="border-slate-100 border-l px-6 py-4 text-center">
							<span className="font-bold text-[#0a0a0a] text-base">퍼포먼스 마케팅</span>
						</div>
						<div className="border-[#58d68d]/20 border-l bg-[#f0fdf4] px-6 py-4 text-center">
							<span className="font-bold text-[#58d68d] text-base">블로그 마케팅</span>
						</div>
					</div>

					{BLOG_VS_ADS.map((row, i) => (
						<Reveal key={row.axis} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
							<div className="grid grid-cols-3 border-slate-100 border-b last:border-0">
								<div className="flex items-center px-6 py-4">
									<span className="font-semibold text-[#0a0a0a] text-sm">{row.axis}</span>
								</div>
								<div className="flex items-center border-slate-100 border-l px-6 py-4">
									<span className="break-keep text-slate-500 text-sm leading-relaxed">
										{row.ads}
									</span>
								</div>
								<div className="flex items-center border-[#58d68d]/20 border-l bg-[#f0fdf4] px-6 py-4">
									<span className="break-keep font-medium text-[#58d68d] text-sm leading-relaxed">
										{row.blog}
									</span>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
