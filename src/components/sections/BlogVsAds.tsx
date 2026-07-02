"use client";

import { Reveal } from "@/components/shared/Reveal";
import { BLOG_VS_ADS } from "@/data/service-blog";

export const BlogVsAds = () => {
	return (
		<section className="bg-slate-50 px-4 py-16 md:py-24">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-10">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Blog vs Ads
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
						퍼포먼스 VS <span className="gradient-text">블로그</span>
					</h2>
					<p className="mt-3 break-keep text-slate-500 text-sm leading-relaxed">
						광고는 멈추면 0이 됩니다. 블로그는 쌓입니다.
					</p>
				</Reveal>

				<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
					<div className="grid grid-cols-3 border-slate-100 border-b bg-slate-50">
						<div className="px-6 py-4" />
						<div className="border-slate-100 border-l px-6 py-4 text-center">
							<span className="font-bold text-[#0a0a0a] text-sm">퍼포먼스 마케팅</span>
						</div>
						<div className="border-[#ef3c39]/20 border-l bg-[#fef2f2] px-6 py-4 text-center">
							<span className="font-bold text-[#ef3c39] text-sm">블로그 마케팅</span>
						</div>
					</div>

					{BLOG_VS_ADS.map((row, i) => (
						<Reveal key={row.axis} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
							<div className="grid grid-cols-3 border-slate-100 border-b last:border-0">
								<div className="flex items-center px-6 py-4">
									<span className="font-semibold text-[#0a0a0a] text-sm">{row.axis}</span>
								</div>
								<div className="flex items-center border-slate-100 border-l px-6 py-4">
									<span className="break-keep text-slate-500 text-sm leading-relaxed">
										{row.ads}
									</span>
								</div>
								<div className="flex items-center border-[#ef3c39]/20 border-l bg-[#fef2f2] px-6 py-4">
									<span className="break-keep font-medium text-[#ef3c39] text-sm leading-relaxed">
										{row.blog}
									</span>
								</div>
							</div>
						</Reveal>
					))}

					{/* Summary footer */}
					<div className="grid grid-cols-3 border-slate-100 border-t bg-slate-50">
						<div className="px-6 py-4" />
						<div className="border-slate-100 border-l px-6 py-3 text-center">
							<span className="text-slate-400 text-xs">단기 유입 확보</span>
						</div>
						<div className="border-[#ef3c39]/20 border-l bg-[#fef2f2] px-6 py-3 text-center">
							<span className="font-semibold text-[#ef3c39] text-xs">장기 매출 자산화</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
