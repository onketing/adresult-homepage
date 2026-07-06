import { Reveal } from "@/components/shared/Reveal";

type Slice = { label: string; pct: number; color: string; dark?: boolean };
type Plan = { name: string; situation: string; goal: string; slices: Slice[] };

// 채널별 색상 고정 (4개 차트에서 동일 채널 = 동일 색)
const CH = {
	shortform: { label: "숏폼", color: "#C8102E" },
	aio: { label: "AIO", color: "#111111" },
	blog: { label: "블로그", color: "#767370" },
	cafe: { label: "카페바이럴", color: "#A50D26" },
	threads: { label: "스레드", color: "#D9D6D3", dark: true },
} as const;

const PLANS: Plan[] = [
	{
		name: "강남 피부과",
		situation: "경쟁 병원 많음 · 시술 단가 높음 · 인스타 경쟁 심함",
		goal: "원장님 신뢰 형성 · 시술별 검색 접점 확보 · SNS 반복 노출",
		slices: [
			{ ...CH.shortform, pct: 40 },
			{ ...CH.aio, pct: 25 },
			{ ...CH.threads, pct: 20 },
			{ ...CH.cafe, pct: 15 },
		],
	},
	{
		name: "신도시 정형외과",
		situation: "지역 검색 중요 · 통증·질환 키워드 유입 필요",
		goal: "지역 질환 검색 노출 · 환자 질문형 콘텐츠 확보",
		slices: [
			{ ...CH.aio, pct: 35 },
			{ ...CH.blog, pct: 30 },
			{ ...CH.cafe, pct: 20 },
			{ ...CH.shortform, pct: 15 },
		],
	},
	{
		name: "개원 초기 치과",
		situation: "지역 인지도 부족 · 리뷰와 신뢰 부족",
		goal: "지역 내 인지도 형성 · 치료 전 불안 해소 · 상담 문의 확보",
		slices: [
			{ ...CH.blog, pct: 30 },
			{ ...CH.cafe, pct: 30 },
			{ ...CH.shortform, pct: 20 },
			{ ...CH.aio, pct: 20 },
		],
	},
	{
		name: "한의원 · 한방병원",
		situation: "교통사고·다이어트·통증 키워드 경쟁",
		goal: "질환별 검색 접점 확보 · 지역 커뮤니티 신뢰 형성",
		slices: [
			{ ...CH.aio, pct: 35 },
			{ ...CH.blog, pct: 30 },
			{ ...CH.cafe, pct: 25 },
			{ ...CH.shortform, pct: 10 },
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
		<svg viewBox="0 0 220 220" className="h-48 w-48 shrink-0 md:h-52 md:w-52" aria-hidden="true">
			{segments.map(({ s, start, end }) => {
				const [sx, sy] = point(start, R);
				const [ex, ey] = point(end, R);
				const large = end - start > 180 ? 1 : 0;
				const path = `M ${C} ${C} L ${sx.toFixed(2)} ${sy.toFixed(2)} A ${R} ${R} 0 ${large} 1 ${ex.toFixed(2)} ${ey.toFixed(2)} Z`;
				const [lx, ly] = point((start + end) / 2, 60);
				return (
					<g key={s.label}>
						<path d={path} fill={s.color} stroke="#ffffff" strokeWidth="2" />
						{s.pct >= 10 && (
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
		<section className="border-[#E4E2DF] border-y bg-white px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto max-w-7xl">
				{/* 헤더 */}
				<Reveal>
					<p className="mb-4 font-mono text-[#767370] text-xs tracking-[0.14em]">
						CUSTOMIZATION STRATEGIES
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-[#111111] leading-[1.25] tracking-tight md:text-5xl">
						같은 비용이어도
						<br />
						<span className="text-[#C8102E]">병원마케팅 상품 구성이 달라집니다</span>
					</h2>
					<p className="mt-6 max-w-3xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
						같은 비용이라도 어디에 배분하느냐에 따라 결과가 달라집니다. 애드리절트는 진료과, 지역
						경쟁도, 현재 운영 채널, 주요 환자층에 따라 채널 구성을 다르게 설계하고, 제안서에 채널별
						배분과 그 근거를 함께 적어 드립니다.{" "}
						<strong className="font-bold text-[#111111]">
							모든 병원에 같은 상품을 제안하지 않습니다.
						</strong>
					</p>
				</Reveal>

				{/* 진료과·상황별 구성 예시 4개 */}
				<div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
					{PLANS.map((plan, i) => (
						<Reveal key={plan.name} delay={Math.min(i, 3) * 0.08}>
							<div className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-7 md:p-9">
								<div className="flex items-baseline justify-between gap-3 border-[#E4E2DF] border-b pb-4">
									<p className="break-keep font-extrabold text-[#111111] text-lg md:text-xl">
										{plan.name}
									</p>
									<span className="whitespace-nowrap font-mono text-[#A5A2A0] text-[11px] tracking-[0.1em]">
										EXAMPLE {String(i + 1).padStart(2, "0")}
									</span>
								</div>
								<div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
									<PieChart slices={plan.slices} />
									<ul className="w-full space-y-2">
										{plan.slices.map((s) => (
											<li key={s.label} className="flex items-center gap-2.5 text-sm">
												<span
													className="h-3 w-3 shrink-0 ring-1 ring-black/10"
													style={{ backgroundColor: s.color }}
												/>
												<span className="text-[#333333]">{s.label}</span>
												<span className="ml-auto font-semibold text-[#767370]">{s.pct}%</span>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-5 grid grid-cols-[52px_1fr] gap-x-3 gap-y-2 border-[#E4E2DF] border-t pt-5">
									<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										상황
									</span>
									<span className="break-keep text-[#333333] text-sm leading-[1.7]">
										{plan.situation}
									</span>
									<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										목표
									</span>
									<span className="break-keep text-[#767370] text-sm leading-[1.7]">
										{plan.goal}
									</span>
								</div>
							</div>
						</Reveal>
					))}
				</div>

				<Reveal delay={0.08}>
					<p className="mt-8 break-keep font-mono text-[#A5A2A0] text-[11.5px] leading-relaxed tracking-[0.04em]">
						* 위 구성은 이해를 돕기 위한 예시입니다. 실제 채널 비중은 병원 현황 진단 후 예산과
						목표에 맞춰 제안드립니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
