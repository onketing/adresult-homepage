"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

export type CardItem = {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	href?: string;
};

const CardGrid = ({ items }: { items: CardItem[] }) => (
	<div className="grid gap-6 md:grid-cols-3 md:gap-7">
		{items.map((it) => {
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
);

// 페이지 번호를 URL searchParams(?page=N)로 관리 — 공유·새로고침·뒤로가기 지원.
const PaginatedCardsInner = ({ items, perPage }: { items: CardItem[]; perPage: number }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const totalPages = Math.max(1, Math.ceil(items.length / perPage));
	const raw = Number(searchParams.get("page"));
	const page = Number.isInteger(raw) && raw >= 1 && raw <= totalPages ? raw : 1;
	const start = (page - 1) * perPage;
	const visible = items.slice(start, start + perPage);

	const goTo = (p: number) => {
		const clamped = Math.min(totalPages, Math.max(1, p));
		const params = new URLSearchParams(searchParams.toString());
		if (clamped === 1) params.delete("page");
		else params.set("page", String(clamped));
		const qs = params.toString();
		router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
	};

	return (
		<div>
			<CardGrid items={visible} />

			<div className="mt-14 flex items-center justify-center gap-6 md:gap-8">
				<button
					type="button"
					onClick={() => goTo(page - 1)}
					disabled={page === 1}
					aria-label="이전 페이지"
					className="text-slate-300 transition-colors hover:text-slate-500 disabled:pointer-events-none disabled:opacity-40"
				>
					<ChevronLeft className="h-5 w-5" />
				</button>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
					<button
						type="button"
						key={p}
						onClick={() => goTo(p)}
						aria-current={p === page ? "page" : undefined}
						className={cn(
							"text-base transition-colors",
							p === page ? "font-bold text-[#0a0a0a]" : "text-slate-400 hover:text-slate-600",
						)}
					>
						{p}
					</button>
				))}
				<button
					type="button"
					onClick={() => goTo(page + 1)}
					disabled={page === totalPages}
					aria-label="다음 페이지"
					className="text-slate-300 transition-colors hover:text-slate-500 disabled:pointer-events-none disabled:opacity-40"
				>
					<ChevronRight className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
};

export const PaginatedCards = ({ items, perPage = 9 }: { items: CardItem[]; perPage?: number }) => (
	// useSearchParams는 정적 렌더 시 Suspense 경계가 필요 → 첫 페이지 그리드를 폴백으로.
	<Suspense fallback={<CardGrid items={items.slice(0, perPage)} />}>
		<PaginatedCardsInner items={items} perPage={perPage} />
	</Suspense>
);
