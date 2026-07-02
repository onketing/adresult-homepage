"use client";

import { Reveal } from "@/components/shared/Reveal";

type Case = {
	discipline: string;
	metric: string;
	before: string;
	after: string;
	caption: string;
	testimonial: string;
	author: string;
};

type Props = {
	cases: readonly Case[];
	dark?: boolean;
};

export const CaseTestimonial = ({ cases, dark = false }: Props) => {
	return (
		<section className={`px-4 py-16 md:py-20 ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}>
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p
						className={`mb-3 font-semibold text-sm uppercase tracking-[0.25em] ${dark ? "text-[#fca5a5]" : "text-[#ef3c39]"}`}
					>
						성공 사례
					</p>
					<h2
						className={`font-bold text-3xl tracking-tight md:text-4xl ${dark ? "text-white" : "text-[#0a0a0a]"}`}
					>
						직접 확인한 결과입니다.
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{cases.map((c, i) => (
						<Reveal key={c.discipline} delay={i * 0.1} direction="up">
							<div
								className={`flex h-full flex-col overflow-hidden rounded-2xl border ${dark ? "border-white/20" : "border-slate-100"} ${dark ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "shadow-[0_2px_16px_rgba(0,0,0,0.06)]"}`}
							>
								{/* 상단: 수치 */}
								<div className="bg-[#3a0509] px-6 py-6">
									<span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 font-semibold text-white/70 text-xs">
										{c.discipline}
									</span>
									<p className="mb-1 text-white/50 text-xs">{c.metric}</p>
									<div className="flex items-baseline gap-2">
										<span className="text-sm text-white/30 line-through">{c.before}</span>
										<span className="text-white/50 text-xs">→</span>
										<span className="font-bold text-[#fca5a5] text-xl">{c.after}</span>
									</div>
									<p className="mt-2 text-white/30 text-xs">{c.caption}</p>
								</div>

								{/* 하단: 후기 */}
								<div className="flex flex-1 flex-col bg-white px-6 py-5">
									<p className="flex-1 break-keep text-slate-600 text-sm leading-relaxed">
										<span className="mr-1 font-bold text-2xl text-[#ef3c39]/40 leading-none">
											{'"'}
										</span>
										{c.testimonial}
									</p>
									<p className="mt-4 border-slate-50 border-t pt-4 font-medium text-slate-500 text-xs">
										— {c.author}
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
