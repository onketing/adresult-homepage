import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

// 단일 채널 상품 — 각각 독립 상품으로도 시작할 수 있다
const SINGLE_PRODUCTS: {
	no: string;
	name: string;
	keyword: string;
	desc: string;
	href: string;
}[] = [
	{
		no: "01",
		name: "AIO 마케팅",
		keyword: "AI 검색 노출 · GEO",
		desc: "검색되는 병원에서, AI가 추천할 수 있는 병원으로 만들기 위한 콘텐츠 구조화 상품입니다.",
		href: "/services/aio",
	},
	{
		no: "02",
		name: "끝장숏폼",
		keyword: "병원 숏폼 마케팅",
		desc: "조회수보다 상담 전환을 고려한 병원 숏폼 기획·촬영·편집·업로드 상품입니다.",
		href: "/services/shortform",
	},
	{
		no: "03",
		name: "스레드 마케팅",
		keyword: "원장님 브랜딩",
		desc: "원장님의 전문성과 진료 철학을 매일 읽히는 문장으로 쌓는 전문가 브랜딩 상품입니다.",
		href: "/services/threads",
	},
	{
		no: "04",
		name: "카페바이럴",
		keyword: "지역 커뮤니티 평판",
		desc: "지역 커뮤니티와 네이버 카페에서 병원의 인지도와 후기 접점을 만드는 상품입니다.",
		href: "/services/cafe-viral",
	},
];

// 상황별 조합 상품 — 병원 상황에 따라 필요한 만큼만
const COMBO_PRODUCTS: {
	name: string;
	target: string;
	mix: string;
	goal: string;
}[] = [
	{
		name: "검색 기반 강화형",
		target: "블로그·홈페이지 콘텐츠가 약한 병원",
		mix: "AIO + 블로그 + FAQ 콘텐츠",
		goal: "네이버·구글·AI 검색 접점 강화",
	},
	{
		name: "신뢰 형성형",
		target: "원장님 브랜딩이 필요한 병원",
		mix: "숏폼 + 스레드",
		goal: "원장님 전문성 · 진료 철학 · 병원 신뢰도 형성",
	},
	{
		name: "지역 평판 강화형",
		target: "지역 환자 유입이 중요한 병원",
		mix: "카페바이럴 + 블로그 + 플레이스·후기 관리",
		goal: "지역 커뮤니티 언급 · 후기 접점 · 검색 후 신뢰 보강",
	},
	{
		name: "피부과 경쟁 대응형",
		target: "피부과·성형외과 등 경쟁이 치열한 병원",
		mix: "숏폼 + AIO + 스레드 + 카페바이럴",
		goal: "시술별 검색 접점 · SNS 반복 노출 · 원장님 신뢰 · 지역 평판",
	},
	{
		name: "개원 초기 세팅형",
		target: "신규 개원 병원",
		mix: "블로그 + AIO + 카페바이럴 + 기본 숏폼",
		goal: "검색 기반 구축 · 지역 인지도 확보 · 초기 신뢰 형성",
	},
];

// 진료과별 추천 조합
const DEPT_COMBOS: {
	dept: string;
	href: string;
	mix: string;
	desc: string;
}[] = [
	{
		dept: "피부과",
		href: "/specialty/dermatology",
		mix: "숏폼 + AIO + 스레드 + 카페바이럴",
		desc: "시술 이해도, 원장님 신뢰, 지역 평판, AI 검색 접점이 모두 중요합니다.",
	},
	{
		dept: "성형외과",
		href: "/specialty/plastic-surgery",
		mix: "숏폼 + 스레드 + AIO + 후기 콘텐츠",
		desc: "상담 전 신뢰, 원장님 브랜딩, 시술 철학, 후기 탐색 흐름이 중요합니다.",
	},
	{
		dept: "정형외과 · 통증의학과",
		href: "/specialty/orthopedics",
		mix: "AIO + 블로그 + 카페바이럴 + 설명형 숏폼",
		desc: "질환·통증 키워드 검색과 지역 기반 문의 흐름이 중요합니다.",
	},
	{
		dept: "치과",
		href: "/specialty/dentistry",
		mix: "AIO + 블로그 + 숏폼 + 카페바이럴",
		desc: "비용·통증·치료 과정에 대한 불안을 줄이는 콘텐츠가 중요합니다.",
	},
	{
		dept: "한의원 · 한방병원",
		href: "/specialty/oriental-medicine",
		mix: "AIO + 블로그 + 카페바이럴",
		desc: "교통사고, 다이어트, 통증 등 질환별 검색 접점과 지역 신뢰가 중요합니다.",
	},
];

export const PackageSection = () => {
	return (
		<section id="products" className="scroll-mt-20 bg-[#FAFAFA]">
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
				<Reveal>
					<p className="mb-4 font-mono text-[#767370] text-xs tracking-[0.14em]">
						CUSTOMIZED CHANNEL MIX
					</p>
					<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
						병원 상황별
						<br />
						<span className="text-[#C8102E]">맞춤 마케팅 조합</span>
					</h2>
					<p className="mt-6 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
						모든 병원에 같은 상품을 제안하지 않습니다. 피부과, 성형외과, 정형외과, 치과, 한의원은
						환자가 검색하고 비교하고 문의하는 방식이 다릅니다. 애드리절트는 진료과, 지역 경쟁도,
						현재 운영 채널, 예산, 목표에 따라{" "}
						<strong className="font-bold text-[#111111]">
							AIO·숏폼·스레드·카페바이럴·블로그를 필요한 만큼 조합
						</strong>
						합니다. 제안서에는 각 채널을 고른 근거를 함께 적어 드립니다.
					</p>
				</Reveal>

				{/* 1. 단일 채널 상품 */}
				<Reveal delay={0.06}>
					<p className="mt-14 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
						SINGLE CHANNEL — 단일 채널 상품
					</p>
					<p className="mt-2 break-keep text-[#767370] text-sm leading-[1.75]">
						하나의 채널만 필요하다면 하나만 시작해도 됩니다. 각 상품은 독립적으로 운영되며, 확장
						여부는 성과를 확인한 뒤 결정하시면 됩니다.
					</p>
				</Reveal>
				<div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
					{SINGLE_PRODUCTS.map((c, i) => (
						<Reveal key={c.no} delay={i * 0.08}>
							<Link
								href={c.href}
								className="group flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]"
							>
								<span className="font-mono text-[#C8102E] text-xs tracking-[0.12em]">{c.no}</span>
								<h3 className="mt-4 font-extrabold text-[#111111] text-xl tracking-tight">
									{c.name}
								</h3>
								<p className="mt-1 font-mono text-[#A5A2A0] text-[11px] tracking-[0.08em]">
									{c.keyword}
								</p>
								<p className="mt-4 flex-1 break-keep text-[#767370] text-sm leading-[1.75]">
									{c.desc}
								</p>
								<span className="mt-6 font-semibold text-[#111111] text-sm transition-colors group-hover:text-[#C8102E]">
									자세히 보기 →
								</span>
							</Link>
						</Reveal>
					))}
				</div>

				{/* 2. 상황별 조합 상품 */}
				<Reveal delay={0.06}>
					<p className="mt-16 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
						SITUATION MIX — 상황별 조합 상품
					</p>
					<p className="mt-2 break-keep text-[#767370] text-sm leading-[1.75]">
						모든 채널을 한 번에 제안하지 않습니다. 병원 상황에 따라 단일 채널, 2개 채널 조합, 통합
						운영 중 적합한 방식을 제안합니다.
					</p>
				</Reveal>
				<div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
					{COMBO_PRODUCTS.map((c, i) => (
						<Reveal key={c.name} delay={Math.min(i, 3) * 0.08}>
							<article className="flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40">
								<h3 className="font-extrabold text-[#111111] text-lg tracking-tight">{c.name}</h3>
								<div className="mt-4 grid grid-cols-[52px_1fr] gap-x-3 gap-y-2.5">
									<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										대상
									</span>
									<span className="break-keep text-[#333333] text-sm leading-[1.7]">
										{c.target}
									</span>
									<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										구성
									</span>
									<span className="break-keep font-semibold text-[#111111] text-sm leading-[1.7]">
										{c.mix}
									</span>
									<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										목표
									</span>
									<span className="break-keep text-[#767370] text-sm leading-[1.7]">{c.goal}</span>
								</div>
							</article>
						</Reveal>
					))}
					{/* 예산이 제한적인 병원 안내 카드 */}
					<Reveal delay={0.24}>
						<div className="flex h-full flex-col justify-center border border-[#111111] bg-[#0B0B0B] p-7 text-white">
							<p className="font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
								LIMITED BUDGET
							</p>
							<h3 className="mt-3 break-keep font-extrabold text-lg tracking-tight">
								예산이 제한적이어도 괜찮습니다
							</h3>
							<p className="mt-3 break-keep text-[#B5B2AF] text-sm leading-[1.75]">
								예산 전부를 걸기 전에, 우선순위 1~2개 채널부터 시작합니다. 반응이 빠르게 확인되는
								접점부터 운영하고, 확장은 월별 보고에서 성과를 확인한 뒤 결정하시면 됩니다.
							</p>
							<Link
								href="/contact"
								className="mt-5 inline-block font-semibold text-sm text-white underline underline-offset-4 transition-colors hover:text-[#C8102E]"
							>
								우선순위 채널 진단받기 →
							</Link>
						</div>
					</Reveal>
				</div>

				{/* 상황별 안내 페이지 링크 */}
				<Reveal delay={0.06}>
					<div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border border-[#E4E2DF] bg-white px-6 py-4">
						<span className="font-mono text-[#767370] text-[11px] tracking-[0.12em]">
							상황별 자세히 보기
						</span>
						{[
							{ label: "개원 초기 병원", href: "/situations/new-opening" },
							{ label: "기존 대행사 교체", href: "/situations/agency-change" },
							{ label: "지역 기반 병원", href: "/situations/local-competition" },
							{ label: "경쟁 심한 상권", href: "/situations/high-competition" },
						].map((l) => (
							<Link
								key={l.href}
								href={l.href}
								className="font-semibold text-[#333333] text-sm underline-offset-4 transition-colors hover:text-[#C8102E] hover:underline"
							>
								{l.label} →
							</Link>
						))}
					</div>
				</Reveal>

				{/* 3. 진료과별 추천 조합 */}
				<Reveal delay={0.06}>
					<p className="mt-16 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
						BY SPECIALTY — 진료과별 추천 조합
					</p>
				</Reveal>
				<div className="mt-6 border border-[#E4E2DF] bg-white">
					{DEPT_COMBOS.map((d, i) => (
						<Reveal key={d.dept} delay={Math.min(i, 3) * 0.06}>
							<Link
								href={d.href}
								className={`group grid gap-x-6 gap-y-2 p-6 transition-colors hover:bg-[#FAFAFA] md:grid-cols-[180px_260px_1fr_90px] md:items-center md:p-7 ${
									i > 0 ? "border-[#E4E2DF] border-t" : ""
								}`}
							>
								<span className="font-extrabold text-[#111111] text-base tracking-tight">
									{d.dept}
								</span>
								<span className="break-keep font-semibold text-[#C8102E] text-sm">{d.mix}</span>
								<span className="break-keep text-[#767370] text-sm leading-[1.7]">{d.desc}</span>
								<span className="whitespace-nowrap font-semibold text-[#111111] text-sm transition-colors group-hover:text-[#C8102E]">
									자세히 →
								</span>
							</Link>
						</Reveal>
					))}
				</div>

				<Reveal delay={0.08}>
					<p className="mt-8 break-keep font-mono text-[#A5A2A0] text-[11.5px] leading-relaxed tracking-[0.04em]">
						* 위 조합은 예시입니다. 실제 제안은 병원 현황 진단 후 진료과·지역·예산·목표에 맞춰
						달라집니다. 조합 운영 시에는 채널 사이의 환자 여정(발견 → 확인 → 신뢰 → 문의)이 하나로
						이어지도록 함께 설계합니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
