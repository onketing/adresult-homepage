"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type CardItem = {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	href?: string;
};

export const PaginatedCards = ({ items, perPage = 9 }: { items: CardItem[]; perPage?: number }) => {
	const [page, setPage] = useState(1);
	const totalPages = Math.max(1, Math.ceil(items.length / perPage));
	const start = (page - 1) * perPage;
	const visible = items.slice(start, start + perPage);

	return (
		<div>
			<div className="grid gap-6 md:grid-cols-3 md:gap-7">
				{visible.map((it) => {
					const cardClass =
						"group block overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition-transform hover:-translate-y-1";
					const inner = (
						<>
							<div className="relative aspect-[4/3] bg-slate-100">
								<Image
									src={it.image}
									alt={it.title}
									fill
									quality={90}
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover object-top"
								/>
							</div>
							<div className="p-5 text-left md:p-6">
								<h3 className="line-clamp-2 break-keep font-bold text-[#0a0a0a] text-base md:text-lg">
									{it.title}
								</h3>
								<p className="mt-2 line-clamp-3 break-keep text-slate-500 text-sm leading-relaxed">
									{it.excerpt}
								</p>
							</div>
						</>
					);
					return it.href ? (
						<Link key={it.id} href={it.href} className={cardClass}>
							{inner}
						</Link>
					) : (
						<article key={it.id} className={cardClass}>
							{inner}
						</article>
					);
				})}
			</div>

			<div className="mt-14 flex items-center justify-center gap-5 md:gap-6">
				<button
					type="button"
					onClick={() => setPage((p) => Math.max(1, p - 1))}
					disabled={page === 1}
					aria-label="이전 페이지"
					className="text-slate-300 transition-colors hover:text-slate-500 disabled:pointer-events-none disabled:opacity-40"
				>
					<ChevronLeft className="h-4 w-4" />
				</button>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
					<button
						type="button"
						key={p}
						onClick={() => setPage(p)}
						aria-current={p === page ? "page" : undefined}
						className={cn(
							"text-sm transition-colors",
							p === page ? "font-bold text-[#0a0a0a]" : "text-slate-400 hover:text-slate-600",
						)}
					>
						{p}
					</button>
				))}
				<button
					type="button"
					onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
					disabled={page === totalPages}
					aria-label="다음 페이지"
					className="text-slate-300 transition-colors hover:text-slate-500 disabled:pointer-events-none disabled:opacity-40"
				>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
};
