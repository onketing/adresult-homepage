import Link from "next/link";

export type RelatedPage = { label: string; href: string; desc?: string };

// 페이지 하단 관련 페이지 추천 — 내부 링크 구조 강화 (모든 주요 페이지에서 사용)
export const RelatedPages = ({ items }: { items: RelatedPage[] }) => {
	if (!items.length) return null;
	return (
		<section className="border-[#E4E2DF] border-t bg-white">
			<div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
				<p className="mb-5 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
					RELATED — 함께 보면 좋은 페이지
				</p>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((p) => (
						<Link
							key={p.href}
							href={p.href}
							className="group flex flex-col border border-[#E4E2DF] bg-[#FAFAFA] px-5 py-4 transition-colors hover:border-[#C8102E]"
						>
							<span className="break-keep font-bold text-[#111111] text-sm transition-colors group-hover:text-[#C8102E]">
								{p.label}
							</span>
							{p.desc && (
								<span className="mt-1 break-keep text-[#767370] text-xs leading-[1.6]">
									{p.desc}
								</span>
							)}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
