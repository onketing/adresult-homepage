"use client";

import {
	BarChart3,
	ChevronDown,
	ClipboardList,
	LogOut,
	ShieldCheck,
	Target,
	Wallet,
} from "lucide-react";
import { type ComponentType, type SVGProps, useEffect, useRef, useState } from "react";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/data/faq";
import { cn } from "@/lib/utils";
import type { FaqCategory } from "@/types";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const CATEGORY_SLUGS: Record<FaqCategory, string> = {
	비용: "cost",
	"진행 안내": "guide",
	광고규정: "regulation",
	운영보고: "operation",
	성과: "results",
	해지환불: "exit",
};

const CATEGORY_ICONS: Record<FaqCategory, IconType> = {
	비용: Wallet,
	"진행 안내": ClipboardList,
	광고규정: ShieldCheck,
	운영보고: BarChart3,
	성과: Target,
	해지환불: LogOut,
};

const categoryDomId = (cat: FaqCategory) => `faq-${CATEGORY_SLUGS[cat]}`;

export const FaqDirectory = () => {
	const [active, setActive] = useState<FaqCategory>(FAQ_CATEGORIES[0]);
	const ticking = useRef(false);

	useEffect(() => {
		const onScroll = () => {
			if (ticking.current) return;
			ticking.current = true;
			requestAnimationFrame(() => {
				const offset = 140;
				let current: FaqCategory = FAQ_CATEGORIES[0];
				for (const cat of FAQ_CATEGORIES) {
					const el = document.getElementById(categoryDomId(cat));
					if (el && el.getBoundingClientRect().top <= offset) {
						current = cat;
					}
				}
				setActive(current);
				ticking.current = false;
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (cat: FaqCategory) => {
		const el = document.getElementById(categoryDomId(cat));
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 100;
		window.scrollTo({ top, behavior: "smooth" });
	};

	return (
		<section className="bg-white py-20 md:py-28">
			{/* 모바일 sticky pill nav */}
			<div className="sticky top-16 z-30 border-slate-100 border-b bg-white/95 backdrop-blur-sm md:hidden">
				<div className="mx-auto max-w-6xl px-6">
					<div className="scrollbar-none flex gap-1 overflow-x-auto py-3">
						{FAQ_CATEGORIES.map((cat) => (
							<button
								key={cat}
								type="button"
								onClick={() => scrollTo(cat)}
								className={cn(
									"shrink-0 rounded-full px-4 py-1.5 font-semibold text-sm transition-all duration-200",
									active === cat
										? "bg-[#ef3c39] text-white"
										: "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900",
								)}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-6 md:px-10 md:pt-4">
				<div className="md:grid md:grid-cols-[240px_1fr] md:gap-12">
					{/* 데스크탑 sticky 사이드바 */}
					<aside className="hidden self-start md:sticky md:top-24 md:block">
						<p className="mb-4 font-mono text-[10px] text-slate-500 uppercase tracking-[0.25em]">
							CATEGORIES · {FAQ_ITEMS.length} ITEMS
						</p>
						<nav className="flex flex-col gap-0.5">
							{FAQ_CATEGORIES.map((cat) => {
								const Icon = CATEGORY_ICONS[cat];
								const isActive = active === cat;
								return (
									<button
										key={cat}
										type="button"
										onClick={() => scrollTo(cat)}
										className={cn(
											"flex items-center gap-3 border-l-2 px-3 py-2 text-left font-semibold text-sm transition-colors",
											isActive
												? "border-[#ef3c39] bg-[#ef3c39]/5 text-[#ef3c39]"
												: "border-transparent text-slate-600 hover:text-slate-900",
										)}
									>
										<Icon
											className={cn(
												"h-4 w-4 shrink-0",
												isActive ? "text-[#ef3c39]" : "text-slate-400",
											)}
											aria-hidden="true"
										/>
										{cat}
									</button>
								);
							})}
						</nav>
					</aside>

					{/* Q&A 리스트 */}
					<div>
						{FAQ_CATEGORIES.map((cat) => {
							const items = FAQ_ITEMS.filter((item) => item.category === cat);
							const Icon = CATEGORY_ICONS[cat];
							return (
								<div key={cat} id={categoryDomId(cat)} className="mb-14 scroll-mt-28 last:mb-0">
									<div className="mb-6 flex items-center justify-between">
										<div className="flex items-center gap-3">
											<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#ef3c39]/15 text-[#ef3c39]">
												<Icon className="h-5 w-5" aria-hidden="true" />
											</span>
											<div>
												<p className="mb-1 font-mono text-[#ef3c39] text-xs uppercase tracking-[0.25em]">
													{CATEGORY_SLUGS[cat]}
												</p>
												<h3 className="font-bold text-2xl text-slate-900 tracking-tight">{cat}</h3>
											</div>
										</div>
										<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
											{items.length} questions
										</span>
									</div>
									<div>
										{items.map((item) => (
											<details key={item.question} className="group border-slate-100 border-b">
												<summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
													<span className="break-keep font-semibold text-base text-slate-900 leading-snug">
														{item.question}
													</span>
													<ChevronDown
														className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
														aria-hidden="true"
													/>
												</summary>
												<div className="break-keep py-3 pr-8 text-slate-600 text-sm leading-relaxed">
													{item.answer}
												</div>
											</details>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
