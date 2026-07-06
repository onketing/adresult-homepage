import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "병원 카페바이럴·후기바이럴 | 지역 커뮤니티 마케팅 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/services/cafe-viral" },
	description:
		"병원카페바이럴은 지역 커뮤니티에서 병원이 자연스럽게 회자되게 만드는 마케팅입니다. 병원맘카페마케팅·병원후기바이럴로 노출·신뢰·전환을 설계하는 애드리절트.",
	keywords: [
		"병원카페바이럴",
		"병원바이럴마케팅",
		"병원카페마케팅",
		"병원후기바이럴",
		"병원맘카페마케팅",
		"피부과카페바이럴",
		"성형외과카페바이럴",
		"네이버카페 병원마케팅",
		"지역 커뮤니티 마케팅",
		"병원 후기 마케팅",
	],
};

const cafeViralServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "병원 카페바이럴·후기바이럴 (지역 커뮤니티 마케팅)",
	url: "https://adresult.kr/services/cafe-viral",
	provider: {
		"@type": "Organization",
		name: "애드리절트(ADRESULT)",
		url: "https://adresult.kr",
	},
	description:
		"네이버 카페 등 지역 커뮤니티에서 병원이 자연스럽게 언급되도록 노출·신뢰·전환 구조를 설계하는 병원 카페바이럴 마케팅. 의료광고법을 준수하며 도배가 아닌 평판 설계로 운영합니다.",
	areaServed: "KR",
	serviceType: "병원 카페바이럴·후기바이럴 마케팅",
};

// 2. 환자들의 실제 질문 (커뮤니티 게시글 카드)
const PATIENT_QUESTIONS: { title: string; tag: string; meta: string }[] = [
	{ title: "여기 실제로 가본 분 있나요?", tag: "동네질문", meta: "댓글 12 · 조회 480" },
	{ title: "시술 받아보신 분 후기 궁금해요", tag: "정보공유", meta: "댓글 8 · 조회 356" },
	{ title: "과잉진료 없나요?", tag: "동네질문", meta: "댓글 15 · 조회 621" },
	{ title: "원장님 상담 꼼꼼한가요?", tag: "병원후기", meta: "댓글 6 · 조회 289" },
	{ title: "가격 대비 괜찮았나요?", tag: "정보공유", meta: "댓글 9 · 조회 402" },
];

// 3. 설계 구조 — 노출 + 신뢰 + 전환
const STRUCTURE_STEPS: { no: string; label: string; title: string; desc: string }[] = [
	{
		no: "01",
		label: "노출",
		title: "병원에 맞는 카페·타깃 분석",
		desc: "병원의 진료과목과 상권을 기준으로, 어떤 카페에서 어떤 환자에게 닿아야 하는지 먼저 분석합니다. 맘카페·지역 커뮤니티·관심사 카페 중 병원과 맞는 접점을 고릅니다.",
	},
	{
		no: "02",
		label: "신뢰",
		title: "환자가 실제 검색하는 키워드 반영",
		desc: "진료과목 키워드, 지역 키워드, 그리고 환자가 실제로 검색하는 질문형 키워드를 원고에 반영합니다. 광고 문구가 아니라 환자의 언어로 씁니다.",
	},
	{
		no: "03",
		label: "전환",
		title: "검색 접점까지 생각한 콘텐츠",
		desc: "단순 후기글이 아니라, 카페 글이 검색 결과에서 다시 발견되는 접점까지 생각해 콘텐츠를 설계합니다. 읽은 환자가 다음 행동으로 이어지도록 구성합니다.",
	},
];

// 5. 후기 원고 구조 (단계 흐름)
const REVIEW_FLOW: { step: string; title: string; desc: string }[] = [
	{ step: "1", title: "방문 전 고민", desc: "증상·불안·병원 선택 고민에서 시작합니다." },
	{ step: "2", title: "상담 과정", desc: "접수부터 상담까지의 경험을 구체적으로 담습니다." },
	{ step: "3", title: "원내 분위기", desc: "대기 공간·직원 응대 등 현장의 인상을 전합니다." },
	{ step: "4", title: "느낀 점", desc: "치료·시술 후 느낀 변화를 담백하게 적습니다." },
	{ step: "5", title: "추천 포인트", desc: "어떤 사람에게 맞을지 추천 이유로 마무리합니다." },
];

// 6. 카페 성향별 운영 방식
const OPERATION_TYPES: { title: string; desc: string }[] = [
	{
		title: "댓글 문의형",
		desc: "본문에는 병원명을 직접 쓰지 않고, 댓글 문의가 달리면 자연스럽게 안내하는 방식입니다.",
	},
	{
		title: "쪽지 안내형",
		desc: "홍보 제한이 엄격한 카페에서는 쪽지로 병원 정보를 안내해 규정을 지키며 운영합니다.",
	},
	{
		title: "본문 노출형",
		desc: "후기·정보 공유가 자유로운 카페에서는 본문에 병원명을 자연스럽게 녹여 노출합니다.",
	},
	{
		title: "댓글 유도형",
		desc: "질문 글을 먼저 올려 대화를 만들고, 댓글 흐름 속에서 병원이 언급되게 설계합니다.",
	},
	{
		title: "Q&A형",
		desc: "질문과 답변을 한 흐름으로 구성해, 검색한 환자가 답을 얻는 형태로 운영합니다.",
	},
];

// 7. 차별점 5가지
const DIFFERENTIATORS: { no: string; title: string; desc: string }[] = [
	{
		no: "01",
		title: "진료과목별 카페 전략 설계",
		desc: "피부과카페바이럴과 성형외과카페바이럴은 타깃도, 카페도, 말투도 다릅니다. 병원별 진료과목에 맞춰 카페 전략을 다르게 설계합니다.",
	},
	{
		no: "02",
		title: "노출 가능성을 고려한 키워드형 원고",
		desc: "지역·진료과목·질문형 키워드를 반영해, 검색에서 다시 발견될 가능성을 고려한 원고를 작성합니다.",
	},
	{
		no: "03",
		title: "카페 성향별 병원명 노출 방식 구분",
		desc: "카페마다 홍보 규정과 분위기가 다릅니다. 성향에 따라 본문 노출·댓글·쪽지 등 노출 방식을 다르게 운영합니다.",
	},
	{
		no: "04",
		title: "환자의 언어로 쓰는 원고 퀄리티",
		desc: "광고 문구를 그대로 옮긴 글은 오히려 신뢰를 깎습니다. 환자가 실제로 묻는 순서와 언어를 기준으로 원고를 씁니다.",
	},
	{
		no: "05",
		title: "체험단·사진·블로그·플레이스 연결 운영",
		desc: "카페 글 하나로 끝내지 않습니다. 체험단·원내 사진·블로그·플레이스와 연결해 전환 흐름을 함께 설계합니다.",
	},
];

// 8. 전환 흐름 설계
const CONVERSION_FLOW: { step: string; title: string; desc: string }[] = [
	{
		step: "01",
		title: "커뮤니티 접점",
		desc: "카페에서 병원이 자연스럽게 언급되고, 환자의 기억에 남습니다.",
	},
	{
		step: "02",
		title: "검색 확인",
		desc: "관심이 생긴 환자가 병원명·지역 키워드로 직접 검색합니다.",
	},
	{
		step: "03",
		title: "플레이스·블로그",
		desc: "플레이스 후기와 블로그 콘텐츠가 커뮤니티에서 본 이야기를 뒷받침합니다.",
	},
	{
		step: "04",
		title: "문의·예약",
		desc: "확인을 마친 환자가 전화·카카오톡·홈페이지로 문의합니다.",
	},
];

// 9. 안전 원칙
const SAFETY_PRINCIPLES: string[] = [
	"무분별한 댓글 도배를 하지 않습니다. 도배는 카페 제재와 병원 평판 훼손으로 이어집니다.",
	"과장 광고 표현을 사용하지 않습니다. 효과 보장·최상급 표현은 원고에서 배제합니다.",
	"의료법 제56조를 위반하는 표현을 쓰지 않습니다. 모든 원고는 발행 전 본사 검수 체계로 점검합니다.",
];

export const CafeViralPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(cafeViralServiceSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마케팅", path: "/services/aio" },
					{ name: "카페바이럴", path: "/services/cafe-viral" },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
						HOSPITAL CAFE VIRAL MARKETING
					</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						지역에서 먼저
						<br />
						회자되는 병원을 만듭니다<span className="text-[#C8102E]">.</span>
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						애드리절트의 병원카페바이럴은 저품질 도배가 아닙니다. 카페 규정과 의료법 제56조 안에서,
						네이버 카페와 지역 커뮤니티의 병원 인지도와 평판을 설계하는 병원바이럴마케팅
						서비스입니다.
					</p>
					<div className="mt-10 flex flex-wrap gap-3">
						<Link
							href="/contact"
							className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
						>
							병원 마케팅 진단 신청
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
						>
							카카오톡 문의
						</a>
					</div>
				</div>
			</section>

			{/* 2. 카페바이럴이란 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHAT IS CAFE VIRAL
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							환자는 결국 <span className="text-[#C8102E]">사람들의 이야기</span>를 확인합니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-6 md:grid-cols-2">
						<Reveal delay={0}>
							<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-11">
								<h3 className="font-extrabold text-[#111111] text-xl tracking-tight md:text-2xl">
									카페는 병원이 아닌, 환자가 말하는 공간입니다
								</h3>
								<p className="mt-4 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
									병원카페바이럴은 네이버 카페 같은 지역 커뮤니티에서 병원이 자연스럽게 언급되도록
									만드는 바이럴 활동입니다. 블로그·유튜브가 병원이 발신하는 콘텐츠라면, 카페는 실제
									환자들이 정보를 주고받는 공간이라 이야기의 신뢰도가 다릅니다.
								</p>
							</article>
						</Reveal>
						<Reveal delay={0.08}>
							<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-11">
								<h3 className="font-extrabold text-[#111111] text-xl tracking-tight md:text-2xl">
									검색 다음 단계에서 병원이 결정됩니다
								</h3>
								<p className="mt-4 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
									환자는 병원을 검색한 뒤, 광고가 아닌 다른 환자들의 경험담을 찾아봅니다. 이
									단계에서 병원 이야기가 없거나 부정적이면 문의로 이어지지 않습니다. 그래서
									병원카페마케팅은 검색 이후의 의사결정 구간을 다루는 작업입니다.
								</p>
							</article>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 3. 환자들의 실제 질문 흐름 — 커뮤니티 게시글 카드 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							REAL PATIENT QUESTIONS
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							환자들은 카페에서 이렇게 묻습니다.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							맘카페와 지역 카페에는 병원에 대한 질문이 매일 올라옵니다. 병원맘카페마케팅은 이
							질문들에 병원의 이야기가 자연스럽게 놓이도록 만드는 일입니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{PATIENT_QUESTIONS.map((q, i) => (
							<Reveal key={q.title} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-6 transition-colors hover:border-[#C8102E]/40">
									<div className="flex items-center gap-2">
										<span className="bg-[#F5F5F5] px-2.5 py-1 font-semibold text-[#555250] text-xs">
											{q.tag}
										</span>
										<span className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.06em]">
											익명
										</span>
									</div>
									<h3 className="mt-4 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										Q. {q.title}
									</h3>
									<p className="mt-4 font-mono text-[#A5A2A0] text-[11px] tracking-[0.06em]">
										{q.meta}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 4. 설계 구조 — 노출 + 신뢰 + 전환 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							STRUCTURE — EXPOSURE, TRUST, CONVERSION
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							<span className="text-[#C8102E]">노출 + 신뢰 + 전환</span>,
							<br />
							3단 구조로 설계합니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-6 md:grid-cols-3">
						{STRUCTURE_STEPS.map((s, i) => (
							<Reveal key={s.no} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-9">
									<div className="flex items-baseline gap-3">
										<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											{s.no}
										</span>
										<span className="font-extrabold text-[#111111] text-lg tracking-tight">
											{s.label}
										</span>
									</div>
									<h3 className="mt-5 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										{s.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{s.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.24}>
						<div className="mt-8 border border-[#E4E2DF] bg-white p-6 md:p-8">
							<div className="grid grid-cols-[64px_1fr] gap-x-5 gap-y-3">
								<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
									고지
								</span>
								<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
									카페 글의 노출은 카페 규정과 검색 알고리즘에 따라 달라질 수 있습니다. 그래서
									애드리절트는 상위노출을 약속하지 않습니다. 대신 노출 가능성을 높이는 원고 구조와
									계정 세팅 기준을 그대로 설명드립니다. 보장을 말하는 업체보다, 구조를 설명하는
									업체가 정직하다고 믿습니다.
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 5. 후기 원고 구조 — 단계 흐름 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							REVIEW CONTENT STRUCTURE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							병원후기바이럴 원고는
							<br />
							환자의 <span className="text-[#C8102E]">경험 순서</span>대로 씁니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-5">
						{REVIEW_FLOW.map((f, i) => (
							<Reveal key={f.step} delay={i * 0.08}>
								<article className="relative h-full border border-[#E4E2DF] bg-[#FAFAFA] p-6">
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										STEP {f.step}
									</span>
									<h3 className="mt-3 break-keep font-bold text-[#111111] text-[16px]">
										{f.title}
									</h3>
									<p className="mt-2 break-keep text-[#767370] text-[13.5px] leading-[1.7]">
										{f.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.4}>
						<p className="mt-8 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
							원고의 현장감을 위해 월 10장 내외의 원내 사진 전달을 권장합니다. 대기 공간·상담실·장비
							사진이 있으면 후기의 밀도가 달라집니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 6. 카페 성향별 운영 방식 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							OPERATION BY CAFE TYPE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							카페 성향에 따라
							<br />
							운영 방식을 <span className="text-[#C8102E]">다르게</span> 갑니다.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							모든 카페에 같은 글을 뿌리는 방식은 제재와 삭제로 끝납니다. 카페마다 규정과 분위기를
							읽고 노출 방식을 맞춥니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{OPERATION_TYPES.map((t, i) => (
							<Reveal key={t.title} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40">
									<h3 className="font-bold text-[#111111] text-[17px]">{t.title}</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{t.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 7. 차별점 5가지 — 번호 카드 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHY ADRESULT
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							애드리절트 카페바이럴
							<br />
							<span className="text-[#C8102E]">차별점 5가지</span>
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{DIFFERENTIATORS.map((d, i) => (
							<Reveal key={d.no} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-7 md:p-9">
									<span className="font-mono text-[#C8102E] text-[13px] tracking-[0.12em]">
										{d.no}
									</span>
									<h3 className="mt-4 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										{d.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{d.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 8. 전환 흐름 설계 — 흐름도 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							CONVERSION FLOW
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							카페에서 문의까지,
							<br />
							<span className="text-[#C8102E]">흐름</span>으로 연결합니다.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							카페 글은 시작점입니다. 체험단·원내 사진·블로그·플레이스를 연결해, 커뮤니티에서 생긴
							관심이 문의로 이어지는 동선을 설계합니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-4">
						{CONVERSION_FLOW.map((f, i) => (
							<Reveal key={f.step} delay={i * 0.08}>
								<div className="flex h-full items-stretch gap-3">
									<article className="h-full flex-1 border border-[#E4E2DF] bg-white p-6 md:p-7">
										<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											{f.step}
										</span>
										<h3 className="mt-3 break-keep font-bold text-[#111111] text-[16px]">
											{f.title}
										</h3>
										<p className="mt-2 break-keep text-[#767370] text-[13.5px] leading-[1.7]">
											{f.desc}
										</p>
									</article>
									{i < CONVERSION_FLOW.length - 1 && (
										<span
											aria-hidden="true"
											className="hidden items-center font-mono text-[#A5A2A0] md:flex"
										>
											→
										</span>
									)}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 9. 안전 원칙 — 다크 섹션 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] py-16 text-white md:py-24">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#8F8C89] text-[12px] tracking-[0.14em]">
							SAFETY PRINCIPLES
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl tracking-tight md:text-5xl">
							하지 않는 것이,
							<br />
							병원을 지킵니다.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-3">
						{SAFETY_PRINCIPLES.map((p, i) => (
							<Reveal key={p} delay={i * 0.08}>
								<div className="h-full border border-[#3A3835] p-7">
									<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
										PRINCIPLE {String(i + 1).padStart(2, "0")}
									</span>
									<p className="mt-4 break-keep text-[#B5B2AF] text-[14.5px] leading-[1.8]">{p}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<FinalCTA />
		</>
	);
};

export default CafeViralPage;
