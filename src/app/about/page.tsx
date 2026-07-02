import { ChevronRight, Equal, Plus } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { type CSSProperties, Fragment, type ReactNode } from "react";
import { AboutReviewMarquee } from "@/components/sections/AboutReviewMarquee";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "회사소개 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/about" },
	description:
		"고객과 진심으로 소통하며 끊임없이 연구하는, 결과로 말하는 광고회사 애드리절트를 소개합니다.",
};

type ValueBlock = {
	img: string;
	w: number;
	h: number;
	alt: string;
	en: string;
	desc: ReactNode;
	op?: "plus" | "equal";
	red?: boolean;
};

const VALUE_BLOCKS: ValueBlock[] = [
	{
		img: "/about/about-1.jpg",
		w: 1920,
		h: 1119,
		alt: "고객과 소통하는 애드리절트",
		en: "Communication",
		op: "plus",
		desc: (
			<>
				고객과 진정성 있게 소통하며
				<br />
				그들의 마케팅 고민을 깊이 이해하고{" "}
				<strong className="font-bold text-[#0a0a0a]">함께 해결책을 찾습니다.</strong>
			</>
		),
	},
	{
		img: "/about/about-2.jpg",
		w: 1512,
		h: 938,
		alt: "마케팅 지식을 축적하는 애드리절트",
		en: "Knowledge",
		op: "plus",
		desc: (
			<>
				우리는 고객의 목표 달성과 성장을 위해 끊임없이 연구하며
				<br />그 과정에서{" "}
				<strong className="font-bold text-[#0a0a0a]">
					3,500여 개의 마케팅 지식을 축적한 전문가들
				</strong>
				입니다.
			</>
		),
	},
	{
		img: "/about/about-3.jpg",
		w: 1874,
		h: 1010,
		alt: "함께 성장하는 애드리절트",
		en: "Growth",
		op: "equal",
		desc: (
			<>
				우리는 고객의 목표를 함께 달성하기 위해{" "}
				<strong className="font-bold text-[#0a0a0a]">끊임없이 성장합니다.</strong>
			</>
		),
	},
	{
		img: "/about/about-4.jpg",
		w: 1541,
		h: 888,
		alt: "확실한 성과를 만드는 애드리절트",
		en: "Result",
		red: true,
		desc: (
			<>
				우리의 경험과 노하우를 바탕으로 한 마케팅 전략은
				<br />
				고객의 지속적인 성장과 만족을 이끌어내며{" "}
				<strong className="font-bold text-[#0a0a0a]">확실한 성과를 만들어냅니다.</strong>
			</>
		),
	},
];

const KNOWHOW_CARDS: { img: string; alt: string; desc: string; offset: string }[] = [
	{
		img: "/about/about-seo.jpg",
		alt: "탁월한 S.E.O 실력",
		desc: "고객이 검색할 때 우리 브랜드를 쉽게 찾을 수 있도록, 다양한 온라인 매체를 활용해 검색 노출을 최적화합니다.",
		offset: "lg:mt-0",
	},
	{
		img: "/about/about-marketing.jpg",
		alt: "마케팅 관련 지식 3,500여 개 보유",
		desc: "고객과 끊임없이 소통하며 발견한 마케팅 지식만 3,500여 개. 이를 바탕으로 우리 병원을 더욱 빠르고 효과적으로 관리합니다.",
		offset: "lg:mt-24",
	},
	{
		img: "/about/about-contents.jpg",
		alt: "구매전환을 높이는 콘텐츠 기획력",
		desc: "수많은 브랜드 중에서 왜 우리여야 하는지 ‘Why Me’를 고민하며 차별화된 콘텐츠를 기획합니다.",
		offset: "lg:mt-10",
	},
	{
		img: "/about/about-study.jpg",
		alt: "대행사를 가르치는 대행사",
		desc: "애드리절트는 마케팅 실행사이자 대행사로서 소상공인, 마케팅 대행사, 의사 등을 대상으로 마케팅 교육을 제공할 만큼 검증된 실력을 갖추고 있습니다.",
		offset: "lg:mt-28",
	},
];

const STRATEGY_STEPS: { icon: string; no: string; title: string; lines: [string, string] }[] = [
	{
		icon: "/about/hospital.png",
		no: "1",
		title: "병원 분석",
		lines: ["온라인 경쟁 및 현황 등", "다양한 시선으로 브랜드 분석"],
	},
	{
		icon: "/about/strategy.png",
		no: "2",
		title: "병원마케팅 맞춤 전략 수립",
		lines: ["병원에 최적화된", "통합 마케팅 전략 제공"],
	},
	{
		icon: "/about/camera.png",
		no: "3",
		title: "병원마케팅 실행",
		lines: ["마케팅 전략에 따른", "콘텐츠 제작 후 실행"],
	},
	{
		icon: "/about/target.png",
		no: "4",
		title: "고객의 목표 달성",
		lines: ["마케팅 전략으로 인한", "고객 목표 달성"],
	},
];

const iconMask = (src: string): CSSProperties => ({
	maskImage: `url(${src})`,
	WebkitMaskImage: `url(${src})`,
	maskRepeat: "no-repeat",
	WebkitMaskRepeat: "no-repeat",
	maskPosition: "center",
	WebkitMaskPosition: "center",
	maskSize: "contain",
	WebkitMaskSize: "contain",
});

const FLOORS: { no: string; desc: string; top: string }[] = [
	{ no: "3F", desc: "미팅룸, CEO룸, 경영지원팀", top: "22%" },
	{ no: "2F", desc: "본사 마케팅센터", top: "45%" },
	{ no: "1F", desc: "세미나실, 구내식당, 로비, 스튜디오", top: "67%" },
];

const BRANCHES: { name: string; address: string; tel: string }[] = [
	{ name: "강남본사", address: "서울시 강남구 헌릉로618길 9", tel: "1661-4829" },
	{ name: "서초지사", address: "서울시 서초구 양재동 215", tel: "1555-4829" },
	{ name: "마포지사", address: "서울시 마포구 서교동 395-131", tel: "1600-4805" },
	{ name: "이룸지사", address: "서울시 강서구 마곡동 797-14", tel: "0507-1419-8037" },
	{ name: "중부지사", address: "대전 서구 둔산동 1091", tel: "1522-4805" },
	{ name: "부산지사", address: "부산 남구 대연동 72-7", tel: "0507-1317-5916" },
];

export const AboutPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "회사소개", path: "/about" },
				]}
			/>
			<CompanyHero />
			<CompanyTabs />

			{/* INTRODUCE — 왼쪽 고정(sticky) / 오른쪽 스크롤 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
					{/* LEFT — sticky */}
					<div>
						<div className="md:sticky md:top-40">
							<p className="mb-5 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
								Introduce ADRESULT
							</p>
							<p className="break-keep text-slate-600 text-xl leading-relaxed md:text-2xl">
								고객과 진심으로 소통하며 끊임없이 연구합니다.
								<br />
								멈추지 않고 성장하며, 당신의 성공을 함께 만들어가는
							</p>
							<p className="mt-4 break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
								결과로 말하는 광고회사
								<br />
								<span className="text-[#ef3c39]">애드리절트</span>입니다.
							</p>
						</div>
					</div>

					{/* RIGHT — 스크롤되는 이미지 스택 (1 + 2 + 3 = 4) */}
					<div className="flex flex-col gap-8">
						{VALUE_BLOCKS.map((b) => (
							<div key={b.en}>
								<Reveal direction="scale">
									<Image
										src={b.img}
										alt={b.alt}
										width={b.w}
										height={b.h}
										sizes="(max-width: 768px) 100vw, 50vw"
										className="h-auto w-full rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.1)] ring-1 ring-black/5"
									/>
									<p
										className={cn(
											"mt-5 font-extrabold text-2xl tracking-tight md:text-3xl",
											b.red ? "text-[#ef3c39]" : "text-[#0a0a0a]",
										)}
									>
										{b.en}
									</p>
									<p className="mt-2 break-keep text-base text-slate-500 leading-relaxed md:text-lg">
										{b.desc}
									</p>
								</Reveal>
								{b.op === "plus" && (
									<div className="flex justify-center pt-8">
										<Plus className="h-10 w-10 text-[#e11d29]" strokeWidth={4} aria-hidden="true" />
									</div>
								)}
								{b.op === "equal" && (
									<div className="flex justify-center pt-8">
										<Equal
											className="h-10 w-10 text-[#e11d29]"
											strokeWidth={4}
											aria-hidden="true"
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* MARKETING KNOW-HOW */}
			<section className="bg-white px-4 pb-28 md:px-8 md:pb-32">
				<div className="mx-auto max-w-7xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							ADRESULT Marketing Know-how
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							전국에서 가장 탁월한 <span className="text-[#ef3c39]">병원마케팅 노하우</span>
						</h2>
					</Reveal>

					<div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
						{KNOWHOW_CARDS.map((card, i) => (
							<Reveal key={card.img} delay={(i % 4) * 0.08} className={card.offset}>
								<div className="group relative aspect-[640/950] overflow-hidden rounded-2xl">
									<Image
										src={card.img}
										alt={card.alt}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60" />
									<div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
										<p className="break-keep font-semibold text-sm text-white leading-relaxed md:text-base">
											{card.desc}
										</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* CUSTOMIZED STRATEGY — 4단계 프로세스 */}
			<section className="border-slate-100 border-t bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-7xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Customized Strategy
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							<span className="text-[#ef3c39]">병원마케팅 맞춤 전략</span>으로
							<br />
							리스크 최소화 및 목표 달성 극대화
						</h2>
					</Reveal>

					<div className="mt-16 flex flex-col items-center gap-12 lg:mt-24 lg:flex-row lg:items-start lg:justify-center lg:gap-2">
						{STRATEGY_STEPS.map((step, i) => (
							<Fragment key={step.icon}>
								<Reveal
									delay={i * 0.1}
									className="flex w-full max-w-xs flex-col items-center text-center lg:w-56"
								>
									<div className="group flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#e11d29] bg-[#e11d29] transition-colors duration-300 hover:bg-white md:h-40 md:w-40">
										<span
											aria-hidden="true"
											style={iconMask(step.icon)}
											className="h-12 w-12 bg-white transition-colors duration-300 group-hover:bg-[#e11d29] md:h-16 md:w-16"
										/>
									</div>
									<p className="mt-6 font-bold text-[#e11d29] text-lg md:text-xl">
										{step.no}. {step.title}
									</p>
									<p className="mt-2 break-keep text-slate-500 text-sm leading-relaxed md:text-base">
										{step.lines[0]}
										<br />
										{step.lines[1]}
									</p>
								</Reveal>
								{i < STRATEGY_STEPS.length - 1 && (
									<ChevronRight
										className="hidden h-8 w-8 shrink-0 text-[#e11d29] lg:mt-16 lg:block"
										strokeWidth={3}
										aria-hidden="true"
									/>
								)}
							</Fragment>
						))}
					</div>
				</div>
			</section>

			{/* CUSTOMER REVIEW — 무한 스크롤 후기 */}
			<section className="border-slate-100 border-t bg-white py-24 md:py-28">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Customer Review
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							애드리절트의 병원마케팅 실력
							<br />
							수많은 후기가 검증합니다.
						</h2>
					</Reveal>
				</div>
				<div className="mt-14 md:mt-16">
					<AboutReviewMarquee />
				</div>
			</section>

			{/* FLOOR INFORMATION — 사옥 층별 안내 (풀블리드) */}
			<section className="border-slate-100 border-t bg-white pt-24 pb-16 md:pt-28 md:pb-20">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Floor Information
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							애드리절트 층별 안내
						</h2>
					</Reveal>
				</div>

				<div className="relative mt-12 w-full md:mt-16">
					<Image
						src="/about/floor-information.jpg"
						alt="애드리절트 사옥 전경"
						width={1920}
						height={850}
						sizes="100vw"
						className="h-auto w-full"
					/>
					{/* 데스크톱 오버레이 라벨 */}
					<div className="absolute inset-0 hidden md:block">
						{FLOORS.map((f) => (
							<div key={f.no} className="absolute" style={{ top: f.top, left: "30%", right: "4%" }}>
								<div className="flex items-end justify-end gap-2 pr-1 pb-1.5">
									<span className="font-extrabold text-[#ef3c39] text-xl lg:text-2xl">{f.no}</span>
									<span className="font-semibold text-[#0a0a0a] text-base lg:text-xl">
										{f.desc}
									</span>
								</div>
								<div className="flex items-center">
									<span className="h-3 w-3 shrink-0 rounded-full bg-[#ef3c39]" />
									<span className="h-0.5 flex-1 bg-[#ef3c39]" />
								</div>
							</div>
						))}
					</div>
				</div>

				{/* 모바일 리스트 */}
				<div className="mx-auto mt-8 max-w-md space-y-3 px-6 md:hidden">
					{FLOORS.map((f) => (
						<div key={f.no} className="flex items-baseline gap-2 border-slate-100 border-b pb-2">
							<span className="font-extrabold text-[#ef3c39]">{f.no}</span>
							<span className="break-keep font-medium text-[#0a0a0a]">{f.desc}</span>
						</div>
					))}
				</div>
			</section>

			{/* BRANCH-OFFICE INFORMATION — 지사안내 */}
			<section className="border-slate-100 border-t bg-white px-4 py-24 md:px-8 md:py-28">
				<div className="mx-auto max-w-7xl">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Branch-Office Information
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							애드리절트 지사안내
						</h2>
					</Reveal>

					<div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
						{BRANCHES.map((b, i) => (
							<Reveal key={b.name} delay={(i % 3) * 0.08}>
								<div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_2px_20px_rgba(15,23,42,0.04)]">
									<div className="flex items-center gap-2.5">
										<Image
											src="/title-logo.png"
											alt=""
											width={28}
											height={28}
											className="h-7 w-7 object-contain"
										/>
										<p className="font-bold text-[#0a0a0a] text-lg">{b.name}</p>
									</div>
									<p className="mt-6 break-keep text-slate-500 text-sm md:text-base">{b.address}</p>
									<p className="mt-2 text-slate-500 text-sm md:text-base">
										Tel : <span className="font-bold text-[#0a0a0a]">{b.tel}</span>
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 참고해주세요 */}
			<section className="border-slate-100 border-t bg-white px-4 py-20 md:px-8 md:py-24">
				<div className="mx-auto max-w-7xl">
					<Reveal>
						<p className="font-bold text-[#ef3c39] text-lg">참고해주세요!</p>
						<p className="mt-8 break-keep font-bold text-[#0a0a0a] text-base md:text-lg">
							- 애드리절트는 무조건 원장님과의 직접 만나 충분히 병원마케팅 상담 후 계약합니다.
						</p>
						<p className="mt-3 break-keep text-slate-500 text-sm leading-relaxed md:text-base">
							병원 경영에 중요한 요소인 병원마케팅을 담당할 회사인데, 얼굴 한번 안보고 계약하는
							위험한 일은 하지 않는것이 좋습니다. 그리고 가급적 직접 방문하시어 정말 그들이 실력있는
							병원마케팅 업체인지, 안정적 규모를 가진 곳인지도 꼭 확인하십시오. 그 한번의 검증을
							게을리하여 몇달 동안 괴로워하며 피해를 보는 원장님들이 참 많습니다.
						</p>
						<p className="mt-8 break-keep font-bold text-[#0a0a0a] text-base md:text-lg">
							- 애드리절트의 병원마케팅은 저가형 상품이 아닌, 효율성 높은 상품입니다. 단순히 저렴한
							상품을 찾으신다면 문의를 남기지 말아주십시오.
						</p>
					</Reveal>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
