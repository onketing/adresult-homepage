"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroProps = {
	eyebrow: string;
	title: string;
	titleHighlight?: string;
	sub: string;
	ctaText?: string;
	ctaHref?: string;
	secondaryText?: string;
	secondaryHref?: string;
	secondaryDownload?: boolean;
	children?: React.ReactNode;
	className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export const PageHero = ({
	eyebrow,
	title,
	titleHighlight,
	sub,
	ctaText = "마케팅 컨설팅",
	ctaHref = "/contact",
	secondaryText,
	secondaryHref,
	secondaryDownload = false,
	children,
	className,
}: PageHeroProps) => {
	return (
		<section
			className={cn(
				"bg-[radial-gradient(ellipse_at_top_right,rgba(239,60,57,0.06),transparent_60%)] px-4 py-16 pt-28 text-center md:py-32 md:pt-40",
				className,
			)}
		>
			<div className="mx-auto max-w-4xl">
				<motion.p
					className="mb-5 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease }}
				>
					{eyebrow}
				</motion.p>

				<motion.h1
					className="mb-5 font-bold text-[32px] text-foreground leading-[1.2] tracking-tight sm:text-[44px] md:text-[68px] md:leading-[1.12] lg:text-[88px]"
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, delay: 0.1, ease }}
				>
					{titleHighlight ? (
						<>
							{title}
							<br />
							<span className="gradient-text">{titleHighlight}</span>
						</>
					) : (
						title
					)}
				</motion.h1>

				<motion.p
					className="mb-10 break-keep text-lg text-muted-foreground leading-relaxed md:text-xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.2, ease }}
				>
					{sub}
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease }}
				>
					<Link
						href={ctaHref}
						className="gradient-brand rounded-md px-8 py-3.5 font-semibold text-base text-white transition-opacity hover:opacity-80"
					>
						{ctaText}
					</Link>
					{secondaryText &&
						secondaryHref &&
						(secondaryDownload ? (
							<a
								href={secondaryHref}
								download
								className="flex items-center gap-2 rounded-md border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
							>
								<Download className="h-4 w-4" aria-hidden="true" />
								{secondaryText}
							</a>
						) : (
							<Link
								href={secondaryHref}
								className="rounded-md border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
							>
								{secondaryText}
							</Link>
						))}
				</motion.div>

				{children && (
					<motion.div
						className="mt-12"
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4, ease }}
					>
						{children}
					</motion.div>
				)}
			</div>
		</section>
	);
};
