import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const hrefOf = (p: number) => (p <= 1 ? "/blog" : `/blog/page/${p}`);

const cell =
	"flex h-10 w-10 items-center justify-center rounded-lg font-semibold text-sm transition-colors";

export const BlogPagination = ({
	current,
	totalPages,
}: {
	current: number;
	totalPages: number;
}) => {
	if (totalPages <= 1) return null;
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="mt-14 flex items-center justify-center gap-1.5" aria-label="페이지네이션">
			{current > 1 ? (
				<Link
					href={hrefOf(current - 1)}
					aria-label="이전 페이지"
					className={cn(cell, "text-slate-600 hover:bg-slate-100")}
				>
					<ChevronLeft className="h-5 w-5" />
				</Link>
			) : (
				<span className={cn(cell, "text-slate-300")} aria-hidden="true">
					<ChevronLeft className="h-5 w-5" />
				</span>
			)}

			{pages.map((p) =>
				p === current ? (
					<span
						key={p}
						aria-current="page"
						className={cn(cell, "bg-[#16a34a] text-white shadow-sm")}
					>
						{p}
					</span>
				) : (
					<Link key={p} href={hrefOf(p)} className={cn(cell, "text-slate-600 hover:bg-slate-100")}>
						{p}
					</Link>
				),
			)}

			{current < totalPages ? (
				<Link
					href={hrefOf(current + 1)}
					aria-label="다음 페이지"
					className={cn(cell, "text-slate-600 hover:bg-slate-100")}
				>
					<ChevronRight className="h-5 w-5" />
				</Link>
			) : (
				<span className={cn(cell, "text-slate-300")} aria-hidden="true">
					<ChevronRight className="h-5 w-5" />
				</span>
			)}
		</nav>
	);
};
