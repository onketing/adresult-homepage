import { ChevronLeft, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { CASE_ARTICLES, getCase } from "@/data/success-cases";
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
				<div className="mx-auto max-w-3xl">
					<Link
						href="/cases"
						className="inline-flex items-center gap-1 font-semibold text-[#e11d29] text-sm transition-colors hover:text-[#b3161f]"
					>
						<ChevronLeft className="h-4 w-4" />
						성공사례 목록
					</Link>
					<h1 className="mt-5 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
						{a.title}
					</h1>
					<div className="mt-8 border-slate-100 border-t pt-8">
						{a.blocks.map((b) => {
							if (b.type === "img") {
								return (
									<Image
										key={b.src}
										src={b.src ?? ""}
										alt={a.title}
										width={b.w ?? 800}
										height={b.h ?? 600}
										sizes="(max-width: 768px) 100vw, 720px"
										style={{ maxWidth: b.w }}
										className="mx-auto mt-6 mb-6 h-auto w-full rounded-xl"
									/>
								);
							}
							if (b.type === "h") {
								return (
									<h2
										key={b.text}
										className={cn(
											"mt-10 break-keep font-extrabold text-xl leading-snug md:text-2xl",
											b.red ? "text-[#e11d29]" : "text-[#0a0a0a]",
										)}
									>
										{b.text}
									</h2>
								);
							}
							return (
								<p
									key={b.text}
									className={cn(
										"mt-4 break-keep text-base leading-relaxed md:text-lg",
										b.red
											? "font-bold text-[#e11d29]"
											: b.bold
												? "font-bold text-[#0a0a0a]"
												: "text-slate-700",
									)}
								>
									{b.text}
								</p>
							);
						})}
					</div>

					{/* CTA */}
					<div className="mt-14 rounded-2xl bg-[#e11d29] px-6 py-10 text-center">
						<p className="break-keep font-extrabold text-white text-xl md:text-2xl">
							우리 병원도 이런 결과, 애드리절트와 시작하세요
						</p>
						<a
							href={`tel:${siteConfig.contact.tel}`}
							className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#ffe14d] px-6 py-3.5 font-extrabold text-[#0a0a0a] text-lg transition-transform hover:scale-[1.03]"
						>
							<Phone className="h-5 w-5 fill-[#e11d29] text-[#e11d29]" />
							병원마케팅 문의 : {siteConfig.contact.tel}
						</a>
					</div>
				</div>
			</article>
		</>
	);
};

export default CaseDetailPage;
