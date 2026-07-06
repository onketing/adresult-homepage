import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { BoardArticle } from "@/data/board-posts";
import type { CaseRun } from "@/data/success-cases";
import { cn } from "@/lib/utils";

const renderRuns = (runs?: CaseRun[]) =>
	runs?.map((r) =>
		r.br ? (
			<br key={r.k} />
		) : (
			<span
				key={r.k}
				style={{
					color: r.c || undefined,
					fontSize: r.fs ? `${r.fs}px` : undefined,
					backgroundColor: r.bg || undefined,
				}}
				className={cn(r.b && "font-bold", r.i && "italic", r.u && "underline")}
			>
				{r.t}
			</span>
		),
	);

type BoardArticleViewProps = {
	article: BoardArticle;
	articles: BoardArticle[];
	basePath: string; // "/story" | "/column" | "/media" — 이전/다음 글 링크 기준
	eyebrow: string; // 상단 모노 라벨 (예: "JINSIM STORY")
	lead: string; // 제목 위 리드 문장
	listLabel: string; // 목록으로 돌아가는 링크 라벨
	listHref?: string; // 목록 링크 경로 (기본 basePath — /column 글은 /insights 통합 목록으로)
};

export const BoardArticleView = ({
	article: a,
	articles,
	basePath,
	eyebrow,
	lead,
	listLabel,
	listHref = basePath,
}: BoardArticleViewProps) => {
	const idx = articles.findIndex((c) => c.slug === a.slug);
	const prev = idx > 0 ? articles[idx - 1] : null;
	const next = idx >= 0 && idx < articles.length - 1 ? articles[idx + 1] : null;

	return (
		<article className="bg-white px-4 pt-28 pb-24 md:px-8 md:pt-36 md:pb-28">
			<div className="mx-auto max-w-5xl">
				<p className="font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
					{eyebrow}
				</p>
				<p className="mt-4 text-lg text-slate-600 md:text-xl">{lead}</p>
				<p className="mt-1 break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
					결과로 말하는 <span className="text-[#C8102E]">애드리절트</span>
				</p>

				<div className="mt-14 border-slate-200 border-b pb-6">
					<h1 className="break-keep font-extrabold text-[#111111] text-xl leading-snug tracking-tight md:text-2xl">
						{a.title}
					</h1>
					<Link
						href={listHref}
						className="mt-3 inline-block text-slate-400 text-sm transition-colors hover:text-[#C8102E]"
					>
						{listLabel}
					</Link>
				</div>

				<div className="mt-8">
					{a.blocks.map((b) => {
						if (b.type === "img") {
							const img = (
								<Image
									src={b.src ?? ""}
									alt={b.alt ?? a.title}
									width={b.w ?? 800}
									height={b.h ?? 600}
									quality={90}
									sizes="(max-width: 768px) 100vw, 960px"
									className="h-auto w-full rounded-xl"
								/>
							);
							if (b.href) {
								return (
									<a
										key={b.id}
										href={b.href}
										target="_blank"
										rel="noopener noreferrer"
										className="mx-auto mt-6 mb-6 block w-full transition-opacity hover:opacity-90"
										style={{ maxWidth: b.w }}
									>
										{img}
									</a>
								);
							}
							return (
								<div key={b.id} className="mx-auto mt-6 mb-6 w-full" style={{ maxWidth: b.w }}>
									{img}
								</div>
							);
						}
						if (b.type === "video") {
							return (
								<div
									key={b.id}
									className="relative mx-auto mt-6 mb-6 aspect-video max-w-2xl overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(15,23,42,0.15)] ring-1 ring-black/10"
								>
									<iframe
										src={`https://www.youtube.com/embed/${b.videoId}`}
										title={a.title}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
										className="absolute inset-0 h-full w-full"
									/>
								</div>
							);
						}
						if (b.type === "hr") {
							return <hr key={b.id} className="my-10 border-slate-200" />;
						}
						const alignClass = cn(
							b.align === "center" && "text-center",
							b.align === "right" && "text-right",
						);
						if (b.type === "callout") {
							return (
								<div
									key={b.id}
									className={cn(
										"my-6 break-keep rounded-xl px-6 py-5 text-base leading-relaxed md:text-lg",
										b.boxBg
											? "text-[#111111]"
											: "border border-slate-200 bg-slate-50 text-slate-700",
										alignClass || "text-center",
									)}
									style={b.boxBg ? { backgroundColor: b.boxBg } : undefined}
								>
									{renderRuns(b.runs)}
								</div>
							);
						}
						if (b.type === "h") {
							return (
								<h2
									key={b.id}
									className={cn(
										"break-keep font-extrabold text-[#111111] text-xl leading-snug md:text-2xl",
										b.gap ? "mt-10" : "mt-3",
										alignClass,
									)}
								>
									{renderRuns(b.runs)}
								</h2>
							);
						}
						return (
							<p
								key={b.id}
								className={cn(
									"break-keep text-base text-slate-700 leading-relaxed md:text-lg",
									b.gap ? "mt-7" : "mt-2",
									alignClass,
								)}
							>
								{renderRuns(b.runs)}
							</p>
						);
					})}
				</div>

				{/* 공통 하단 배너 — 매 글 마무리 (CTA + 애드리절트 TV) */}
				<div className="mx-auto mt-14 max-w-xl space-y-4">
					<a
						href={`tel:${siteConfig.contact.tel}`}
						className="block overflow-hidden rounded-2xl transition-transform hover:scale-[1.01]"
					>
						<Image
							src="/images/cases/_footer/cta.jpg"
							alt={`애드리절트 병원마케팅 문의 ${siteConfig.contact.tel}`}
							width={700}
							height={300}
							quality={90}
							sizes="(max-width: 640px) 100vw, 576px"
							className="h-auto w-full"
						/>
					</a>
					<a
						href="https://www.youtube.com/@adresult"
						target="_blank"
						rel="noopener noreferrer"
						className="block overflow-hidden rounded-2xl transition-transform hover:scale-[1.01]"
					>
						<Image
							src="/images/cases/_footer/tv.jpg"
							alt="애드리절트 TV 바로가기"
							width={700}
							height={262}
							quality={90}
							sizes="(max-width: 640px) 100vw, 576px"
							className="h-auto w-full"
						/>
					</a>
				</div>

				{/* 이전/다음 글 네비게이션 */}
				<nav className="mt-16 border-slate-200 border-t">
					{prev && (
						<Link
							href={`${basePath}/${prev.slug}`}
							className="flex items-center gap-4 border-slate-200 border-b py-4 text-slate-600 transition-colors hover:text-[#C8102E]"
						>
							<ChevronUp className="h-4 w-4 shrink-0 text-slate-400" />
							<span className="line-clamp-1 break-keep text-sm md:text-base">{prev.title}</span>
						</Link>
					)}
					{next && (
						<Link
							href={`${basePath}/${next.slug}`}
							className="flex items-center gap-4 border-slate-200 border-b py-4 text-slate-600 transition-colors hover:text-[#C8102E]"
						>
							<ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
							<span className="line-clamp-1 break-keep text-sm md:text-base">{next.title}</span>
						</Link>
					)}
					<div className="mt-5">
						<Link
							href={listHref}
							className="inline-block bg-[#C8102E] px-6 py-2.5 font-bold text-sm text-white transition-colors hover:bg-[#A50D26]"
						>
							목록
						</Link>
					</div>
				</nav>
			</div>
		</article>
	);
};
