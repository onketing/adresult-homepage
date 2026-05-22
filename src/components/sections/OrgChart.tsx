import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DEPARTMENTS } from "@/data/org-structure";
import { cn } from "@/lib/utils";

const deptDirs = ["left", "scale", "right"] as const;

export const OrgChart = () => {
	return (
		<section className="relative overflow-hidden bg-white px-4 pt-0 pb-24 md:pb-28">
			<div className="gradient-soft pointer-events-none absolute inset-0" aria-hidden="true" />

			<div className="relative mx-auto max-w-4xl">
				<Reveal>
					<SectionHeading title="조직도" className="mb-12" />
				</Reveal>

				{/* CEO */}
				<Reveal direction="scale" delay={0.1}>
					<div className="flex justify-center">
						<div className="w-full max-w-xs">
							<div className="rounded-2xl bg-linear-to-br from-[#58d68d] to-[#15803d] px-8 py-7 text-center shadow-[0_4px_24px_rgba(88,214,141,0.3)]">
								<p className="font-bold text-lg text-white">대표</p>
								<p className="mt-1.5 text-sm text-white/70 leading-relaxed">
									전문직 마케팅 전략 총괄
								</p>
							</div>
						</div>
					</div>
				</Reveal>

				{/* Vertical stem from CEO */}
				<Reveal direction="none" delay={0.25}>
					<div className="flex justify-center" aria-hidden="true">
						<div className="h-6 w-px bg-slate-400" />
					</div>
				</Reveal>

				{/* Departments — gap-0 keeps connector math exact */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
					{DEPARTMENTS.map((dept, i) => (
						<Reveal key={dept.name} direction={deptDirs[i]} delay={0.35 + i * 0.1}>
							<div className="flex flex-col">
								{/* T-bar connector — desktop only */}
								<div className="relative hidden h-6 md:block" aria-hidden="true">
									<div
										className={cn(
											"absolute top-0 h-px bg-slate-400",
											i === 0 && "right-0 left-1/2",
											i === 1 && "inset-x-0",
											i === 2 && "right-1/2 left-0",
										)}
									/>
									<div className="absolute inset-y-0 left-1/2 w-px -translate-x-px bg-slate-400" />
								</div>

								{/* Card area — px-2 creates visual gap without breaking connectors */}
								<div className="flex flex-col md:px-2">
									<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#58d68d]/30 hover:shadow-md">
										<div className="mb-3 flex items-center gap-2">
											<div className="h-2.5 w-2.5 rounded-full bg-[#58d68d]" />
											<p className="font-bold text-foreground text-sm">{dept.name}</p>
										</div>
										<p className="text-muted-foreground text-xs leading-relaxed">{dept.desc}</p>
									</div>

									{/* Vertical drop to sub-teams */}
									<div className="flex justify-center" aria-hidden="true">
										<div className="h-4 w-px bg-slate-400" />
									</div>

									<div className="flex flex-col gap-2">
										{dept.subs.map((sub, j) => (
											<Reveal key={sub.name} direction="up" delay={0.5 + i * 0.1 + j * 0.08}>
												<div className="rounded-xl border border-slate-200 border-dashed bg-slate-50 p-4 transition-colors duration-200 hover:border-[#58d68d]/20 hover:bg-[#58d68d]/2">
													<p className="font-semibold text-foreground text-xs">{sub.name}</p>
													<p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">
														{sub.desc}
													</p>
												</div>
											</Reveal>
										))}
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
