import { ChevronDown, ChevronUp } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { CASE_ARTICLES, type CaseFaq, type CaseRun, getCase } from "@/data/success-cases";
import { cn } from "@/lib/utils";

export const generateStaticParams = () => CASE_ARTICLES.map((a) => ({ slug: a.slug }));

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const { slug } = await params;
	const a = getCase(slug);
	if (!a) return {};
	return {
		title: `${a.title} | 애드리절트(ADRESULT)`,
		description: a.summary || a.excerpt,
		alternates: { canonical: `/cases/${a.slug}` },
		keywords: ["병원마케팅 성공사례", "병원마케팅 사례", "애드리절트 성공사례"],
		openGraph: a.cover ? { images: [{ url: a.cover }] } : undefined,
	};
};

const renderRuns = (runs?: CaseRun[]) =>
	runs?.map((r) =>
		r.br ? (
			<br key={r.k} />
		) : (
			<span
				key={r.k}
				style={r.c ? { color: r.c } : undefined}
				className={cn(r.b && "font-bold", r.i && "italic", r.u && "underline")}
			>
				{r.t}
			</span>
		),
	);

export const CaseDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const a = getCase(slug);
	if (!a) notFound();

	const idx = CASE_ARTICLES.findIndex((c) => c.slug === a.slug);
	const prev = idx > 0 ? CASE_ARTICLES[idx - 1] : null;
	const next = idx < CASE_ARTICLES.length - 1 ? CASE_ARTICLES[idx + 1] : null;

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: a.title,
		image: a.cover ? `${siteConfig.url}${a.cover}` : undefined,
		author: { "@type": "Organization", name: "애드리절트(ADRESULT)" },
		publisher: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		mainEntityOfPage: `${siteConfig.url}/cases/${a.slug}`,
		description: a.summary || a.excerpt,
	};

	const faqSchema = a.faq?.length
		? {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: a.faq.map((f: CaseFaq) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: { "@type": "Answer", text: f.a },
				})),
			}
		: null;

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
			{faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "성공사례", path: "/cases" },
					{ name: a.title, path: `/cases/${a.slug}` },
				]}
			/>

			<article className="bg-white px-4 pt-28 pb-24 md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto max-w-5xl">
					<p className="font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
						Portfolio
					</p>
					<p className="mt-4 text-lg text-slate-600 md:text-xl">
						애드리절트 병원마케팅 성공사례입니다.
					</p>
					<p className="mt-1 break-keep font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						결과로 말하는 <span className="text-[#e11d29]">애드리절트</span>
					</p>

					<div className="mt-14 border-slate-200 border-b pb-6">
						<h1 className="break-keep font-extrabold text-[#0a0a0a] text-xl leading-snug tracking-tight md:text-2xl">
							{a.title}
						</h1>
						<Link
							href="/cases"
							className="mt-3 inline-block text-slate-400 text-sm transition-colors hover:text-[#e11d29]"
						>
							성공사례
						</Link>
					</div>

					{a.summary && (
						<p className="mt-8 break-keep rounded-r-lg border-[#e11d29] border-l-4 bg-[#fef2f2] px-5 py-4 font-medium text-[#0a0a0a] leading-relaxed">
							{a.summary}
						</p>
					)}

					<div className="mt-8">
						{a.blocks.map((b) => {
							if (b.type === "img") {
								return (
									<Image
										key={b.id}
										src={b.src ?? ""}
										alt={b.alt ?? a.title}
										width={b.w ?? 800}
										height={b.h ?? 600}
										quality={90}
										sizes="(max-width: 768px) 100vw, 720px"
										style={{ maxWidth: b.w }}
										className="mx-auto mt-6 mb-6 h-auto w-full rounded-xl"
									/>
								);
							}
							if (b.type === "video") {
								return (
									<div
										key={b.id}
										className="relative mt-6 mb-6 aspect-video overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(15,23,42,0.15)] ring-1 ring-black/10"
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
											"my-6 break-keep rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-base text-slate-700 leading-relaxed md:text-lg",
											alignClass || "text-center",
										)}
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
											"mt-10 break-keep font-extrabold text-[#0a0a0a] text-xl leading-snug md:text-2xl",
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
										"mt-4 break-keep text-base text-slate-700 leading-relaxed md:text-lg",
										alignClass,
									)}
								>
									{renderRuns(b.runs)}
								</p>
							);
						})}
					</div>

					{a.faq?.length ? (
						<section className="mt-14">
							<h2 className="break-keep font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
								자주 묻는 질문
							</h2>
							{a.faq.map((f) => (
								<div key={f.q}>
									<h3 className="mt-6 break-keep font-bold text-[#0a0a0a]">{f.q}</h3>
									<p className="mt-2 break-keep text-slate-700 leading-relaxed">{f.a}</p>
								</div>
							))}
						</section>
					) : null}

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
								href={`/cases/${prev.slug}`}
								className="flex items-center gap-4 border-slate-200 border-b py-4 text-slate-600 transition-colors hover:text-[#e11d29]"
							>
								<ChevronUp className="h-4 w-4 shrink-0 text-slate-400" />
								<span className="line-clamp-1 break-keep text-sm md:text-base">{prev.title}</span>
							</Link>
						)}
						{next && (
							<Link
								href={`/cases/${next.slug}`}
								className="flex items-center gap-4 border-slate-200 border-b py-4 text-slate-600 transition-colors hover:text-[#e11d29]"
							>
								<ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
								<span className="line-clamp-1 break-keep text-sm md:text-base">{next.title}</span>
							</Link>
						)}
						<div className="mt-5">
							<Link
								href="/cases"
								className="inline-block rounded-full bg-[#e11d29] px-6 py-2.5 font-bold text-sm text-white transition-colors hover:bg-[#c11624]"
							>
								목록
							</Link>
						</div>
					</nav>
				</div>
			</article>
		</>
	);
};

export default CaseDetailPage;
