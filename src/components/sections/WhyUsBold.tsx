import { Check, Database, ShieldCheck, Target, X } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { WHY_US_BOLD_CARDS } from "@/data/why-us";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	ShieldCheck,
	Database,
	Target,
};

export const WhyUsBold = () => {
	return (
		<section className="relative bg-[#3a0509] px-4 py-14 md:py-24">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
				aria-hidden="true"
				style={{
					background: "radial-gradient(50% 100% at 50% 0%, rgba(239,60,57,0.14), transparent 70%)",
				}}
			/>
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#fca5a5] text-sm uppercase tracking-[0.25em]">
							Why Us
						</p>
						<h2 className="font-bold text-3xl text-white leading-tight tracking-tight md:text-4xl">
							대부분의 대행사는 노출 수에 집착합니다.
						</h2>
						<p className="mt-4 text-lg text-white/60">수임 전환, 그것만 봅니다.</p>
					</div>
				</Reveal>

				{/* 3 카드 */}
				<div className="mb-12 grid gap-6 md:grid-cols-3">
					{WHY_US_BOLD_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? ShieldCheck;
						const directions = ["left", "up", "right"] as const;
						return (
							<Reveal key={card.title} delay={i * 0.1} direction={directions[i]} className="h-full">
								<SpotlightCard className="h-full rounded-md">
									<div className="flex h-full flex-col rounded-md bg-white p-8">
										<span className="mb-5 block font-mono text-[#0a0a0a]/30 text-[11px] tracking-[0.2em]">
											{String(i + 1).padStart(2, "0")}
										</span>
										<Icon className="mb-4 h-5 w-5 text-[#ef3c39]" aria-hidden="true" />
										<div className="mb-2 flex items-center gap-3">
											<h3 className="font-bold text-foreground text-lg">{card.title}</h3>
										</div>
										<p className="mb-4 text-muted-foreground text-sm leading-relaxed">
											{card.description}
										</p>
										<div className="mt-auto flex min-h-[3.25rem] items-center rounded-md bg-[#ef3c39]/[0.08] px-4 py-3">
											<span className="font-semibold text-[#ef3c39] text-sm">{card.stat}</span>
										</div>
									</div>
								</SpotlightCard>
							</Reveal>
						);
					})}
				</div>

				{/* Before / After 비교 */}
				<Reveal>
					<div className="overflow-hidden rounded-md border border-white/[0.12]">
						{/* Header */}
						<div className="grid grid-cols-2">
							<div className="flex items-center gap-2.5 bg-white/6 px-4 py-3 md:px-8 md:py-5">
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
									<X className="h-3 w-3 text-white/60" />
								</div>
								<p className="font-semibold text-sm text-white/40">일반 대행사</p>
							</div>
							<div className="gradient-brand flex items-center gap-2.5 border-white/20 border-l px-4 py-3 md:px-8 md:py-5">
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25">
									<Check className="h-3 w-3 text-white" />
								</div>
								<p className="font-semibold text-sm text-white">온세상이마케팅이다</p>
							</div>
						</div>
						{/* Rows */}
						{WHY_US_BOLD_CARDS.map((card) => (
							<div
								key={`compare-${card.title}`}
								className="grid grid-cols-2 border-white/[0.07] border-t"
							>
								<div className="bg-white/3 px-4 py-3 md:px-8 md:py-5">
									<p className="text-sm text-white/40">{card.before}</p>
								</div>
								<div className="border-[#ef3c39]/50 border-l bg-[#ef3c39]/10 px-4 py-3 md:px-8 md:py-5">
									<p className="font-semibold text-sm text-white">{card.after}</p>
								</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};
