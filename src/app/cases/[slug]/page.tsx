import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { CASE_ARTICLES, type CaseRun, getCase } from "@/data/success-cases";
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
		description: a.excerpt,
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

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: a.title,
		image: a.cover ? `${siteConfig.url}${a.cover}` : undefined,
		author: { "@type": "Organization", name: "애드리절트(ADRESULT)" },
		publisher: { "@type": "Organization", name: "애드리절트(ADRESULT)", url: siteConfig.url },
		mainEntityOfPage: `${siteConfig.url}/cases/${a.slug}`,
		description: a.excerpt,
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
							if (b.type === "h") {
								return (
									<h2
										key={b.id}
										className="mt-10 break-keep font-extrabold text-[#0a0a0a] text-xl leading-snug md:text-2xl"
									>
										{renderRuns(b.runs)}
									</h2>
								);
							}
							return (
								<p
									key={b.id}
									className="mt-4 break-keep text-base text-slate-700 leading-relaxed md:text-lg"
								>
									{renderRuns(b.runs)}
								</p>
							);
						})}
					</div>

					{/* 공통 하단 배너 — 매 글 마무리 (CTA + 애드리절트 TV) */}
					<div className="mt-14 space-y-4">
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
								sizes="(max-width: 1024px) 100vw, 1024px"
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
								sizes="(max-width: 1024px) 100vw, 1024px"
								className="h-auto w-full"
							/>
						</a>
					</div>
				</div>
			</article>
		</>
	);
};

export default CaseDetailPage;
