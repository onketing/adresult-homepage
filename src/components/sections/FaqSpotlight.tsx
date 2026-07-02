"use client";

import { BarChart3, ClipboardList, LogOut, ShieldCheck, Target, Wallet } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { FAQ_ITEMS } from "@/data/faq";
import type { FaqCategory } from "@/types";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const CATEGORY_MAP: Record<FaqCategory, { slug: string; Icon: IconType }> = {
	비용: { slug: "cost", Icon: Wallet },
	"진행 안내": { slug: "guide", Icon: ClipboardList },
	광고규정: { slug: "regulation", Icon: ShieldCheck },
	운영보고: { slug: "operation", Icon: BarChart3 },
	성과: { slug: "results", Icon: Target },
	해지환불: { slug: "exit", Icon: LogOut },
};

const SPOTLIGHT_ITEMS = FAQ_ITEMS.filter((item) => item.featured)
	.slice(0, 5)
	.map((item) => ({
		...item,
		...CATEGORY_MAP[item.category],
	}));

export const FaqSpotlight = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<p className="mb-3 font-mono text-slate-500 text-xs uppercase tracking-[0.25em]">
						Most asked
					</p>
					<h2 className="font-bold text-3xl text-slate-900 tracking-tight md:text-4xl">
						이런 질문을 가장 많이 받습니다.
					</h2>
					<p className="mt-3 break-keep text-slate-600 text-sm md:text-base">
						자주 묻는 항목은 미리 정리했습니다.
					</p>
				</Reveal>

				<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
					{SPOTLIGHT_ITEMS.map((item, i) => {
						const Icon = item.Icon;
						return (
							<Reveal key={item.question} delay={i * 0.08}>
								<a
									href={`#faq-${item.slug}`}
									className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#ef3c39]/40 hover:shadow-[0_8px_24px_rgba(239,60,57,0.08)]"
								>
									<p className="mb-3 flex items-center gap-1.5 font-mono text-[#ef3c39] text-xs uppercase tracking-[0.2em]">
										<Icon className="h-3.5 w-3.5" aria-hidden="true" />
										{item.category}
									</p>
									<p className="mb-3 break-keep font-bold text-base text-slate-900 leading-snug lg:text-lg">
										{item.question}
									</p>
									<p className="line-clamp-3 break-keep text-slate-600 text-sm leading-relaxed">
										{item.answer}
									</p>
									<p className="mt-5 text-right font-semibold text-[#ef3c39] text-sm">
										전체 보기{" "}
										<span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
											→
										</span>
									</p>
								</a>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
