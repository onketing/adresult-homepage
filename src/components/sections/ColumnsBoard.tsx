"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { COLUMN_CATEGORIES, type ColumnCategory } from "@/data/columns/index";
import { cn } from "@/lib/utils";

// 통합 칼럼 카드 — 자체 발행(/insights/*)과 본사 원문(/column/*)을 같은 형태로 렌더
export type ColumnCard = {
	href: string;
	category: ColumnCategory;
	date?: string;
	title: string;
	excerpt: string;
	readingMinutes: number;
};

const FILTERS = ["전체", ...COLUMN_CATEGORIES] as const;
const PER_PAGE = 12;

export const ColumnsBoard = ({ items }: { items: ColumnCard[] }) => {
	const [category, setCategory] = useState<"전체" | ColumnCategory>("전체");
	const [limit, setLimit] = useState(PER_PAGE);

	const filtered = items.filter((p) => category === "전체" || p.category === category);
	const posts = filtered.slice(0, limit);

	return (
		<section className="bg-[#FAFAFA]">
			<div className="mx-auto max-w-7xl px-4 py-14 pb-24 md:py-20 lg:px-8">
				{/* 분과 필터 */}
				<div className="flex flex-wrap items-center gap-2">
					<span className="w-16 shrink-0 font-mono text-[#767370] text-[11px] tracking-[0.12em]">
						분과
					</span>
					{FILTERS.map((f) => (
						<button
							key={f}
							type="button"
							onClick={() => {
								setCategory(f);
								setLimit(PER_PAGE);
							}}
							className={cn(
								"whitespace-nowrap border px-3.5 py-2 font-semibold text-[13px] transition-colors",
								category === f
									? "border-[#111111] bg-[#111111] text-white"
									: "border-[#D9D6D3] bg-white text-[#555250] hover:border-[#111111]",
							)}
						>
							{f}
						</button>
					))}
				</div>

				<p className="mt-6 mb-6 font-mono text-[#767370] text-xs tracking-[0.1em]">
					SHOWING {posts.length} / {filtered.length} COLUMNS
				</p>

				{/* 카드 그리드 */}
				<div className="grid gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
					{posts.map((p, i) => (
						<Reveal key={p.href} delay={Math.min(i % 3, 5) * 0.06}>
							<Link
								href={p.href}
								className="flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]"
							>
								<div className="flex items-center justify-between gap-3">
									<span className="bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs">
										{p.category}
									</span>
									{p.date && (
										<span className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.1em]">
											{p.date}
										</span>
									)}
								</div>
								<h3 className="mt-5 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
									{p.title}
								</h3>
								<p className="mt-3 flex-1 break-keep text-[#767370] text-sm leading-[1.75]">
									{p.excerpt}
								</p>
								<div className="mt-5 flex items-center justify-between border-[#E4E2DF] border-t pt-4">
									<span className="font-semibold text-[#C8102E] text-sm">칼럼 읽기 →</span>
									<span className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.08em]">
										{p.readingMinutes}분
									</span>
								</div>
							</Link>
						</Reveal>
					))}
				</div>

				{limit < filtered.length && (
					<div className="mt-10 text-center">
						<button
							type="button"
							onClick={() => setLimit((v) => v + PER_PAGE)}
							className="border border-[#D9D6D3] bg-white px-8 py-3.5 font-semibold text-[#444444] text-sm transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							칼럼 더 보기 ({filtered.length - limit}편 남음)
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
