import { Reveal } from "@/components/shared/Reveal";
import { COMPARISON_CHANNELS, SERVICE_COMPARISON } from "@/data/service-comparison";

const ScoreDots = ({ score }: { score: number }) => (
	<div className="flex items-center gap-1">
		{Array.from({ length: 5 }).map((_, i) => (
			<span
				// biome-ignore lint/suspicious/noArrayIndexKey: static list
				key={i}
				className={
					i < score ? "h-2 w-2 rounded-full bg-[#ef3c39]" : "h-2 w-2 rounded-full bg-slate-200"
				}
			/>
		))}
	</div>
);

export const ServiceComparison = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Comparison
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						채널별 <span className="gradient-text">비교</span>
					</h2>
				</Reveal>

				<div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-[0_2px_24px_rgba(15,23,42,0.06)]">
					<table className="w-full min-w-[480px]">
						<thead>
							<tr className="border-slate-100 border-b">
								<th className="px-6 py-5 text-left font-medium text-slate-600 text-sm">기준</th>
								{COMPARISON_CHANNELS.map((ch) => (
									<th
										key={ch}
										className="px-4 py-5 text-center font-bold text-[#0a0a0a] text-sm md:px-6"
									>
										{ch}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{SERVICE_COMPARISON.map((row, i) => (
								<tr
									key={row.axis}
									className={
										i < SERVICE_COMPARISON.length - 1
											? "border-slate-100 border-b transition-colors hover:bg-slate-50/60"
											: "transition-colors hover:bg-slate-50/60"
									}
								>
									<td className="px-6 py-5 font-medium text-[#0a0a0a] text-sm">{row.axis}</td>
									{[row.blog, row.shortform, row.professional].map((cell, ci) => (
										<td
											// biome-ignore lint/suspicious/noArrayIndexKey: static channels
											key={ci}
											className="px-4 py-5 md:px-6"
										>
											<div className="flex flex-col items-center gap-2">
												<ScoreDots score={cell.score} />
												<span className="hidden break-keep text-center text-slate-500 text-xs leading-snug md:block">
													{cell.note}
												</span>
											</div>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};
