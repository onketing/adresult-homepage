import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "병원 스레드 마케팅 | 원장님 브랜딩 전문 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/services/threads" },
	description:
		"병원스레드마케팅 전문 애드리절트. 노출만 사는 병원스레드광고가 아니라, 사람이 보이는 전문가 채널로 원장님 브랜딩을 만듭니다. 신뢰가 중요한 피부과스레드마케팅부터 기획·작성·발행·댓글 응대까지 통합 대행합니다.",
	keywords: [
		"병원스레드마케팅",
		"병원 스레드 마케팅",
		"병원스레드광고",
		"피부과스레드마케팅",
		"스레드 마케팅 대행",
		"스레드 운영 대행",
		"원장님 브랜딩",
		"의사 브랜딩",
		"전문가 채널",
		"병원 SNS 마케팅",
	],
};

const threadsServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "병원 스레드 마케팅 (원장님 브랜딩)",
	url: "https://adresult.kr/services/threads",
	provider: {
		"@type": "Organization",
		name: "애드리절트(ADRESULT)",
		url: "https://adresult.kr",
	},
	description:
		"원장님의 전문성을 스레드에서 잠재 고객의 신뢰로 연결하는 병원 스레드 마케팅. 기획·작성·발행·댓글 응대까지 통합 대행하며, 사람이 보이는 전문가 채널로 원장님 브랜딩을 만듭니다.",
	areaServed: "KR",
	serviceType: "병원 스레드 마케팅·원장님 브랜딩",
};

const WHY_THREADS: { title: string; desc: string }[] = [
	{
		title: "초기 계정에서도 반응이 나오는 채널",
		desc: "유튜브는 채널이 자리 잡기까지 반응이 오래 걸릴 수 있습니다. 스레드는 관심사 기반으로 글이 도달해, 초기 계정에서도 반응이 나올 수 있는 채널입니다.",
	},
	{
		title: "광고처럼 보이지 않는 도달 구조",
		desc: "노출을 사서 밀어내는 병원스레드광고 방식이 아닙니다. “진짜 전문가의 솔직한 이야기”가 피드에 자연스럽게 도달하는 구조라, 읽는 사람의 거부감이 낮습니다.",
	},
	{
		title: "신뢰가 중요한 진료과에 특히 적합",
		desc: "피부과처럼 선택 전에 신뢰를 먼저 따지는 분야일수록 잘 맞습니다. 피부과스레드마케팅이 주목받는 이유도, 시술 홍보가 아니라 의사의 관점이 전달되기 때문입니다.",
	},
	{
		title: "사람이 보이는 전문가 채널",
		desc: "병원 공식 계정이 아니라, 원장님이라는 사람이 보이는 전문가 채널로 운영합니다. 얼굴 없는 홍보 계정보다 한 명의 전문가가 남기는 문장이 더 오래 신뢰를 만듭니다.",
	},
];

const CONTENT_FLOW: { label: string; desc: string }[] = [
	{
		label: "시작",
		desc: "공감과 궁금증으로 문을 엽니다. 잠재 고객이 평소 품고 있던 고민·질문에서 첫 문장을 시작합니다.",
	},
	{
		label: "전개",
		desc: "원장님의 진료 경험과 관점으로 이야기를 풀어갑니다. 홍보 문구가 아니라 사람의 언어로 씁니다.",
	},
	{
		label: "마무리",
		desc: "원장님의 전문성으로 끝맺습니다. 읽고 나면 “이 사람은 믿을 만한 전문가”라는 인상이 남는 구조입니다.",
	},
	{
		label: "전환",
		desc: "문의·예약 전환은 댓글과 DM에서 일어납니다. 글에서 쌓인 신뢰가 대화로 이어지도록 응대까지 설계합니다.",
	},
];

const OPERATION_SPECS: { value: string; suffix: string; label: string }[] = [
	{ value: "2", suffix: "회/일", label: "콘텐츠 발행 (일요일 제외)" },
	{ value: "20", suffix: "회/일", label: "댓글 응대 (일요일 제외)" },
	{ value: "2", suffix: "시간", label: "기획 단계 오프라인 인터뷰 1회" },
	{ value: "1", suffix: "회/월", label: "월간 성과 리포트 공유" },
];

const INTEGRATED_STEPS = ["기획", "작성", "발행", "댓글 응대"];

const CONTENT_TYPES: { name: string; desc: string }[] = [
	{ name: "정보성 글", desc: "잠재 고객이 검색하던 궁금증에 답하는 글" },
	{ name: "스토리텔링 글", desc: "원장님의 인생·진료 이야기를 서사로 푸는 글" },
	{ name: "팔로잉 유도 글", desc: "계속 읽고 싶게 만들어 팔로우로 잇는 글" },
	{ name: "전문성 콘텐츠", desc: "의사의 관점과 판단 기준을 보여주는 글" },
	{ name: "공감·일상 콘텐츠", desc: "사람이 보이는 일상으로 거리감을 줄이는 글" },
	{ name: "정보·Q&A 콘텐츠", desc: "자주 받는 질문에 문답 형식으로 답하는 글" },
	{ name: "전환 콘텐츠", desc: "댓글·DM 문의로 자연스럽게 잇는 글" },
];

const THREAD_SAMPLES: { type: string; point: string; text: string }[] = [
	{
		type: "솔직한 조언형",
		point: "권하기 전에 말리는 글이 신뢰를 만듭니다.",
		text: "비용이 큰 시술일수록, 저는 먼저 “지금 꼭 필요한지”부터 같이 따져봅니다. 진료실에서 늘 드리는 이야기를 오늘은 글로 남겨봅니다.",
	},
	{
		type: "내부자 시점형",
		point: "진료실 안에서만 보이는 관점을 보여줍니다.",
		text: "진료실에서만 보이는 것들이 있습니다. 같은 고민으로 오시는 분들께 매번 드리는 말이 있는데, 밖에서는 잘 알려지지 않은 이야기입니다.",
	},
	{
		type: "공감+정보형",
		point: "고민에 공감한 뒤 기준을 알려줍니다.",
		text: "“집에서 관리만 잘해도 좋아질까요?” 진료실에서 가장 자주 듣는 질문입니다. 절반은 맞고, 절반은 아쉬운 답이라 오늘은 그 기준을 정리해봅니다.",
	},
	{
		type: "솔직 비교형",
		point: "정답 대신 판단 기준을 주는 글입니다.",
		text: "A와 B 중 뭐가 낫냐는 질문에는 “상태에 따라 다릅니다”가 정직한 답입니다. 어떤 경우에 무엇을 고려해야 하는지, 기준을 말씀드릴게요.",
	},
];

const PROCESS_STEPS: { no: string; title: string; desc: string }[] = [
	{
		no: "01",
		title: "전략 기획 & 오프라인 인터뷰 1회",
		desc: "약 2시간의 오프라인 인터뷰로 원장님의 철학·인생 스토리·진료 경험을 깊이 듣고, 계정의 방향과 콘텐츠 전략을 설계합니다.",
	},
	{
		no: "02",
		title: "계정 & 프로필 세팅",
		desc: "전문가 채널에 맞는 프로필·소개·연동 구조를 세팅합니다. 기존 인스타그램 계정 연동 상태도 함께 점검합니다.",
	},
	{
		no: "03",
		title: "콘텐츠 제작 & 업로드",
		desc: "인터뷰 내용을 바탕으로 원고를 작성하고, 본사 검수를 거쳐 일요일을 제외하고 하루 2회 발행합니다.",
	},
	{
		no: "04",
		title: "댓글 작업 & 커뮤니케이션",
		desc: "일요일을 제외하고 하루 20회 댓글을 응대하며, 댓글·DM에서 문의로 이어지는 대화를 관리합니다.",
	},
	{
		no: "05",
		title: "월간 운영 결과 리포트 공유",
		desc: "발행 내역, 도달·반응 추이, 댓글·DM 문의 흐름을 매월 리포트로 정리해 공유합니다. 리포트의 데이터를 근거로 다음 달 콘텐츠 방향을 함께 정합니다.",
	},
];

const NOTES: string[] = [
	"계정 소유권은 처음부터 끝까지 원장님(병원)에게 있습니다. 대행을 해지해도 계정과 발행된 글은 그대로 병원의 자산으로 남습니다.",
	"기존 인스타그램 계정 연동 상태를 먼저 점검한 뒤 시작합니다. 연동 구조에 따라 세팅 방식이 달라집니다.",
	"메타 정책상 도달량 변동이나 일시적 제한이 발생할 수 있습니다. 발생 시 원인과 대응을 투명하게 공유합니다.",
	"의료법 제56조 의료광고 규정을 기준으로 발행 전 표현을 점검합니다. 자극적인 문구 대신 규정 안에서 신뢰를 만드는 문장을 씁니다.",
	"단기 성과를 보장하는 채널이 아닙니다. 글이 쌓일수록 힘이 커지는 누적형 자산으로 운영합니다.",
	"원장님의 인터뷰와 검수가 콘텐츠 품질을 만듭니다. 본사 검수와 별개로, 기획 인터뷰와 발행 전 확인에는 원장님의 참여가 필요합니다.",
];

export const ThreadsPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(threadsServiceSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마케팅", path: "/services/aio" },
					{ name: "스레드 마케팅", path: "/services/threads" },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-44 md:pb-32 lg:px-8">
					<Reveal direction="none">
						<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							HOSPITAL THREADS MARKETING
						</p>
						<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
							원장님의 전문성을,
							<br />
							스레드에서 <span className="text-[#C8102E]">잠재 고객의 신뢰</span>로
						</h1>
						<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							의사의 전문성을, 매일 읽히는 문장으로 만듭니다.
						</p>
						<p className="mt-3 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							애드리절트의 병원스레드마케팅은 병원 공식 계정이 아닌, 사람이 보이는 전문가 채널로
							원장님 브랜딩을 설계합니다.
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
					</Reveal>
				</div>
			</section>

			{/* 2. 스레드가 병원마케팅에 맞는 이유 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHY THREADS
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							병원스레드마케팅,
							<br />왜 지금 스레드인가
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							팔로워를 모으는 SNS가 아니라, 전문가의 문장이 잠재 고객에게 읽히는 채널입니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{WHY_THREADS.map((item, i) => (
							<Reveal key={item.title} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-11">
									<span aria-hidden="true" className="block h-[7px] w-[7px] bg-[#C8102E]" />
									<h3 className="mt-5 break-keep font-extrabold text-[#111111] text-lg md:text-xl">
										{item.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
										{item.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. 콘텐츠 설계 구조 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
						<Reveal>
							<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
								CONTENT DESIGN
							</p>
							<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
								공감으로 시작해,
								<br />
								<span className="text-[#C8102E]">전문성</span>으로 끝납니다
							</h2>
							<p className="mt-5 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
								모든 글은 공감과 궁금증으로 문을 열고, 원장님의 전문성으로 마무리하는 구조로
								설계합니다. 문의와 예약은 글 안의 링크가 아니라 댓글과 DM의 대화에서 일어납니다.
							</p>
						</Reveal>
						<Reveal delay={0.08}>
							<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
								<div className="space-y-6">
									{CONTENT_FLOW.map((row) => (
										<div key={row.label} className="grid grid-cols-[64px_1fr] gap-x-5">
											<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
												{row.label}
											</span>
											<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
												{row.desc}
											</span>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 4. 운영 스펙 — 메트릭 블록 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							OPERATION SPEC
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							매일 쌓이는 운영량이
							<br />
							채널의 힘을 만듭니다
						</h2>
					</Reveal>
					<div className="mt-12 grid grid-cols-2 gap-px border border-[#E4E2DF] bg-[#E4E2DF] lg:grid-cols-4">
						{OPERATION_SPECS.map((spec, i) => (
							<div key={spec.label} className="bg-white p-7 md:p-10">
								<Reveal delay={i * 0.08}>
									<div className="font-extrabold text-3xl text-[#111111] tracking-[-0.02em] md:text-4xl">
										{spec.value}
										<span className="ml-0.5 font-bold text-[#C8102E] text-[0.5em]">
											{spec.suffix}
										</span>
									</div>
									<p className="mt-2 break-keep font-mono text-[#767370] text-[11px] tracking-[0.1em]">
										{spec.label}
									</p>
								</Reveal>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 5. 원장님은 진료에만 집중 — 통합 대행 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							ALL-IN-ONE OPERATION
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							원장님은 <span className="text-[#C8102E]">진료에만</span> 집중하세요
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							기획부터 댓글 응대까지, 스레드 운영의 전 과정을 애드리절트가 통합 대행합니다. 원장님이
							하실 일은 기획 인터뷰와 발행 전 검수뿐입니다.
						</p>
					</Reveal>
					<Reveal delay={0.08} className="mt-10">
						<div className="flex flex-wrap items-center gap-3">
							{INTEGRATED_STEPS.map((step, i) => (
								<div key={step} className="flex items-center gap-3">
									<span className="bg-[#F5F5F5] px-4 py-2.5 font-semibold text-[#555250] text-sm">
										{step}
									</span>
									{i < INTEGRATED_STEPS.length - 1 && (
										<span aria-hidden="true" className="font-mono text-[#A5A2A0] text-xs">
											→
										</span>
									)}
								</div>
							))}
						</div>
					</Reveal>
					<Reveal delay={0.16} className="mt-10">
						<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
							<div className="grid grid-cols-[64px_1fr] gap-x-5 gap-y-3">
								<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
									인터뷰
								</span>
								<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
									약 2시간의 오프라인 인터뷰에서 원장님의 철학, 인생 스토리, 진료 경험을 깊이
									듣습니다. 이 이야기가 이후 매일 발행되는 콘텐츠의 원천이 됩니다. 대필된 홍보 글이
									아니라, 원장님이라는 사람에게서 나온 문장이기에 읽는 사람이 다르게 느낍니다.
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 6. 콘텐츠 유형 7종 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							CONTENT TYPES
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							7가지 유형으로
							<br />
							채널의 결을 만듭니다
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{CONTENT_TYPES.map((type, i) => (
							<Reveal key={type.name} delay={i * 0.06}>
								<article className="h-full border border-[#E4E2DF] bg-white p-6 transition-colors hover:border-[#C8102E]/40 md:p-7">
									<div className="flex items-center gap-3">
										<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											{String(i + 1).padStart(2, "0")}
										</span>
										<h3 className="font-extrabold text-[#111111] text-base md:text-lg">
											{type.name}
										</h3>
									</div>
									<p className="mt-3 break-keep text-[#767370] text-[14px] leading-[1.7]">
										{type.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 7. 잘 반응하는 콘텐츠 예시 — 스레드 피드 카드 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							SAMPLE FEED
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이런 글이 <span className="text-[#C8102E]">반응</span>을 만듭니다
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							아래 문장은 구조를 보여드리기 위한 샘플입니다. 실제 콘텐츠는 원장님 인터뷰를 바탕으로
							병원마다 새로 씁니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-2">
						{THREAD_SAMPLES.map((sample, i) => (
							<Reveal key={sample.type} delay={i * 0.08}>
								<article className="flex h-full flex-col border border-[#E4E2DF] bg-white p-6 md:p-7">
									<div className="flex items-start gap-3">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] font-mono text-[11px] text-white">
											Dr
										</div>
										<div className="min-w-0 flex-1">
											<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
												<span className="font-bold text-[#111111] text-sm">원장님 전문가 계정</span>
												<span className="font-mono text-[#A5A2A0] text-[10px] tracking-[0.1em]">
													SAMPLE
												</span>
											</div>
											<p className="mt-2.5 break-keep text-[#333333] text-[14.5px] leading-[1.8]">
												{sample.text}
											</p>
											<div aria-hidden="true" className="mt-4 flex items-center gap-5">
												<Heart className="h-4 w-4 text-[#A5A2A0]" />
												<MessageCircle className="h-4 w-4 text-[#A5A2A0]" />
												<Repeat2 className="h-4 w-4 text-[#A5A2A0]" />
												<Send className="h-4 w-4 text-[#A5A2A0]" />
											</div>
										</div>
									</div>
									<div className="mt-5 flex flex-wrap items-center gap-3 border-[#E4E2DF] border-t pt-4">
										<span className="bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs">
											{sample.type}
										</span>
										<span className="break-keep text-[#767370] text-[13px]">{sample.point}</span>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 8. 진행 순서 5단계 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">PROCESS</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							이렇게 진행합니다
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{PROCESS_STEPS.map((step, i) => (
							<Reveal key={step.no} delay={i * 0.08}>
								<article className="border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-9">
									<div className="grid gap-x-8 gap-y-3 md:grid-cols-[96px_1fr]">
										<span className="font-mono text-[#C8102E] text-sm tracking-[0.12em]">
											{step.no}
										</span>
										<div>
											<h3 className="break-keep font-extrabold text-[#111111] text-lg md:text-xl">
												{step.title}
											</h3>
											<p className="mt-2 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
												{step.desc}
											</p>
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 9. 시작 전 참고사항 — 정직한 안내 */}
			<section className="border-[#E4E2DF] border-t bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							BEFORE WE START
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							시작 전, 정직하게
							<br />
							안내드립니다
						</h2>
					</Reveal>
					<Reveal delay={0.08} className="mt-12">
						<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
							<ul className="space-y-6">
								{NOTES.map((note, i) => (
									<li key={note} className="grid grid-cols-[40px_1fr] gap-x-4">
										<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span className="break-keep text-[#333333] text-[14.5px] leading-[1.8]">
											{note}
										</span>
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				</div>
			</section>

			<FinalCTA />
		</>
	);
};

export default ThreadsPage;
