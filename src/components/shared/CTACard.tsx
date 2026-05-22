import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const TRUST_STATS = [
	{ value: "1일", label: "영업일 내 회신" },
	{ value: "0원", label: "컨설팅 비용" },
] as const;

type CTACardProps = {
	headline?: ReactNode;
	sub?: string;
	buttonText?: string;
	eyebrow?: string;
	variant?: "dark" | "gradient";
	triggerContactOnView?: boolean;
};

export const CTACard = ({
	headline = "마케팅 컨설팅으로 시작하세요",
	sub = "진행 의무 없음 · 영업일 1일 내 회신",
	buttonText = "마케팅 컨설팅",
	eyebrow,
	variant = "dark",
	triggerContactOnView = false,
}: CTACardProps) => {
	if (variant === "gradient") {
		return (
			<section
				id={triggerContactOnView ? "final-cta" : undefined}
				className="gradient-brand relative overflow-hidden px-4 py-24 md:py-32"
			>
				{/* Radial glow */}
				<div
					className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white opacity-[0.07] blur-[120px]"
					aria-hidden="true"
				/>

				{/* Subtle grid */}
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>

				{/* Noise texture */}
				<svg
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1] mix-blend-overlay"
				>
					<title>texture</title>
					<filter id="cta-noise">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.9"
							numOctaves="2"
							stitchTiles="stitch"
						/>
						<feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.15 0" />
					</filter>
					<rect width="100%" height="100%" filter="url(#cta-noise)" />
				</svg>

				<div className="relative z-10 mx-auto max-w-3xl text-center">
					<Reveal>
						{/* Eyebrow */}
						<p className="mb-6 font-mono text-[10px] text-white/50 uppercase tracking-[0.4em]">
							{eyebrow ?? `${siteConfig.nameKo} · 마케팅 컨설팅`}
						</p>

						{/* Headline */}
						<h2 className="mb-4 font-extrabold text-[40px] text-white leading-[1.08] tracking-tight md:text-[56px] lg:text-[68px]">
							{headline}
						</h2>

						{/* Sub */}
						<p className="mb-14 font-semibold text-white/90 text-xl leading-relaxed md:text-2xl">{sub}</p>

						{/* Trust stats */}
						<div className="flex items-center justify-center border-white/15 border-t pt-10">
							{TRUST_STATS.map((stat, i) => (
								<div key={stat.label} className="flex items-center">
									{i > 0 && <div className="mx-8 h-8 w-px bg-white/20" aria-hidden="true" />}
									<div className="flex flex-col items-center gap-1.5">
										<span className="font-bold text-2xl text-white sm:text-3xl">{stat.value}</span>
										<span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.18em]">
											{stat.label}
										</span>
									</div>
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</section>
		);
	}

	return (
		<section className="px-4 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal>
					<div className="rounded-md bg-[#052e16] p-6 sm:p-12">
						<h2 className="mb-3 font-bold text-3xl text-white leading-tight tracking-tight md:text-4xl">
							{headline}
						</h2>
						<p className="mb-8 text-white/60">{sub}</p>
						<Link
							href="/contact"
							className="block rounded-md border border-white/20 bg-white px-8 py-3.5 font-semibold text-[#0a0a0a] text-base transition-opacity hover:opacity-90 sm:inline-block"
						>
							{buttonText}
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
