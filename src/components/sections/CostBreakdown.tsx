import { Reveal } from "@/components/shared/Reveal";

type Slice = { label: string; pct: number; color: string; dark?: boolean };
type Plan = { name: string; budget: string; slices: Slice[] };

const PLANS: Plan[] = [
	{
		name: "A병원",
		budget: "500만원",
		slices: [
			{ label: "블로그", pct: 25, color: "#22c55e" },
			{ label: "유튜브", pct: 45, color: "#ef3c39" },
			{ label: "카페바이럴", pct: 10, color: "#15803d" },
			{ label: "평판관리", pct: 10, color: "#e5e7eb", dark: true },
			{ label: "SNS", pct: 5, color: "#9ca3af" },
			{ label: "기타", pct: 5, color: "#111827" },
		],
	},
	{
		name: "B병원",
		budget: "500만원",
		slices: [
			{ label: "블로그", pct: 50, color: "#22c55e" },
			{ label: "유튜브", pct: 35, color: "#ef3c39" },
			{ label: "평판관리", pct: 10, color: "#e5e7eb", dark: true },
			{ label: "기타", pct: 5, color: "#111827" },
		],
	},
];

const R = 100;
const C = 110;

const point = (deg: number, radius: number): [number, number] => {
	const a = ((deg - 90) * Math.PI) / 180;
	return [C + radius * Math.cos(a), C + radius * Math.sin(a)];
};

const PieChart = ({ slices }: { slices: Slice[] }) => {
	// 누적 각도를 미리 계산 (렌더 중 변수 재할당 없이 불변으로 구성)
	const segments = slices.reduce<Array<{ s: Slice; start: number; end: number }>>((acc, s) => {
		const start = acc.length ? acc[acc.length - 1].end : 0;
		return [...acc, { s, start, end: start + (s.pct / 100) * 360 }];
	}, []);
	return (
		<svg viewBox="0 0 220 220" className="h-52 w-52 shrink-0 md:h-60 md:w-60" aria-hidden="true">
			{segments.map(({ s, start, end }) => {
				const [sx, sy] = point(start, R);
				const [ex, ey] = point(end, R);
				const large = end - start > 180 ? 1 : 0;
				const path = `M ${C} ${C} L ${sx.toFixed(2)} ${sy.toFixed(2)} A ${R} ${R} 0 ${large} 1 ${ex.toFixed(2)} ${ey.toFixed(2)} Z`;
				const [lx, ly] = point((start + end) / 2, 60);
				return (
					<g key={s.label}>
						<path d={path} fill={s.color} stroke="#ffffff" strokeWidth="2" />
						{s.pct >= 8 && (
							<text
								x={lx}
								y={ly}
								textAnchor="middle"
								dominantBaseline="middle"
								fontSize="14"
								fontWeight="700"
								fill={s.dark ? "#334155" : "#ffffff"}
							>
								{s.pct}%
							</text>
						)}
					</g>
				);
			})}
		</svg>
	);
};

export const CostBreakdown = () => {
	return (
		<section className="bg-white px-4 py-24 md:px-8 md:py-32">
			<div className="mx-auto max-w-6xl">
				{/* 헤더 */}
				<Reveal>
					<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
						Customization Strategies
					</p>
					<h2 className="break-keep font-extrabold text-4xl text-[#0a0a0a] leading-[1.25] tracking-tight md:text-6xl">
						같은 비용이어도
						<br />
						<span className="text-[#ef3c39]">병원마케팅 상품 구성이 달라집니다!</span>
					</h2>
					<p className="mt-6 max-w-4xl break-keep text-lg text-slate-600 leading-relaxed md:mt-8 md:text-2xl">
						애드리절트는 같은 비용이더라도 병원의 위치, 규모, 특성, 주요 환자층의 연령대 등
						<br className="hidden md:block" />
						다양한 요소를 고려하여{" "}
						<span className="font-bold text-[#0a0a0a]">최적화된 병원마케팅 전략을 제공</span>
						합니다.
					</p>
				</Reveal>

				{/* 파이 차트 2개 */}
				<div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-8">
					{PLANS.map((plan, i) => (
						<Reveal key={plan.name} delay={i * 0.1}>
							<div className="flex flex-col items-center gap-8 rounded-2xl bg-slate-50 p-8 sm:flex-row md:p-10">
								<PieChart slices={plan.slices} />
								<div className="w-full">
									<p className="mb-4 font-bold text-[#0a0a0a] text-xl md:text-2xl">
										{plan.name} <span className="ml-1 text-[#ef3c39]">{plan.budget}</span>
									</p>
									<ul className="space-y-2.5">
										{plan.slices.map((s) => (
											<li key={s.label} className="flex items-center gap-2.5 text-sm md:text-base">
												<span
													className="h-3.5 w-3.5 shrink-0 rounded-sm ring-1 ring-black/10"
													style={{ backgroundColor: s.color }}
												/>
												<span className="text-slate-700">{s.label}</span>
												<span className="ml-auto font-semibold text-slate-500">{s.pct}%</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
