import {
	ChevronRight,
	CircleCheck,
	Eye,
	Glasses,
	MessageCircle,
	MessageSquare,
	MonitorPlay,
	Search,
	User,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "병원 숏폼·릴스·쇼츠 마케팅 끝장숏폼 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/services/shortform" },
	description:
		"조회수가 아닌 예약을 만드는 병원 숏폼 마케팅. 릴스·쇼츠·틱톡·유튜브 숏폼을 현직 인플루언서가 기획·촬영·관리까지. 병원 SNS·영상 마케팅 애드리절트 끝장숏폼.",
	keywords: [
		"병원숏폼마케팅",
		"병원 숏폼 마케팅",
		"병원릴스마케팅",
		"병원쇼츠마케팅",
		"병원틱톡마케팅",
		"병원인스타마케팅",
		"병원유튜브쇼츠마케팅",
		"병원영상마케팅",
		"병원SNS마케팅",
		"병원숏폼제작업체",
		"끝장숏폼",
		"숏폼 올인원 마케팅",
		"피부과숏폼마케팅",
		"피부과릴스마케팅",
		"성형외과숏폼마케팅",
		"성형외과릴스마케팅",
		"성형외과쇼츠마케팅",
		"정형외과숏폼마케팅",
		"정형외과쇼츠마케팅",
		"치과숏폼마케팅",
		"치과릴스마케팅",
		"한의원숏폼마케팅",
		"한의원릴스마케팅",
	],
};

const shortformServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "끝장숏폼 — 병원 숏폼 올인원 마케팅",
	url: "https://adresult.kr/services/shortform",
	provider: {
		"@type": "Organization",
		name: "애드리절트(ADRESULT)",
		url: "https://adresult.kr",
	},
	description:
		"조회수에서 끝나는 영상이 아닌, 예약을 만드는 병원 숏폼. 현직 인플루언서가 후킹·행동유도·전환 중심으로 기획부터 촬영·편집·관리까지 전담합니다.",
	areaServed: "KR",
	serviceType: "병원 숏폼·릴스 올인원 마케팅 대행",
};

const PAIN_QUOTES = [
	"“조회수가 안나와요.”",
	"“문의 자체가 없어요.”",
	"“예약까지 전환되지 않아요.”",
	"“잘 노출되고 있는지 모르겠어요.”",
];

const PROBLEM_STEPS = ["기획없이\n찍고", "편집해서\n올리고", "조회수만\n기다리는 구조"];

const EXAM_THUMBS = [
	{ src: "/shortform/shortform-exam-1.png", w: 1112, h: 1980 },
	{ src: "/shortform/shortform-exam-2.png", w: 1118, h: 1950 },
	{ src: "/shortform/shortform-exam-3.png", w: 1108, h: 1978 },
	{ src: "/shortform/shortform-exam-4.jpg", w: 1080, h: 1920 },
];

const VS_GENERAL = ["편집 중심", "업로드 중심", "조회수 중심"];
const VS_KKEUTJANG = ["후킹 중심", "행동유도 중심", "전환 중심"];

const YT_CHIPS = ["증상 관련 키워드", "치료 과정", "FAQ 콘텐츠"];
const IG_CHIPS = ["알고리즘 노출", "짧은 정보 콘텐츠", "공감 콘텐츠"];

const SPECIALTY = [
	{ field: "피부과 / 성형외과", psych: "효과 기대 + 부작용 불안" },
	{ field: "치과", psych: "통증 + 비용 부담" },
	{ field: "산부인과", psych: "민감한 증상 + 불안" },
	{ field: "정형외과", psych: "애매한 통증 + 방치" },
];

const FUNNEL = [
	{ icon: Search, label: "증상인식" },
	{ icon: MonitorPlay, label: "콘텐츠발견" },
	{ icon: Glasses, label: "콘텐츠시청" },
	{ icon: User, label: "프로필방문" },
	{ icon: MessageCircle, label: "상담 문의" },
	{ icon: CircleCheck, label: "예약" },
];

const CHANNELS = [
	{ src: "/shortform/step5-1.png", w: 623, h: 623 },
	{ src: "/shortform/step5-2.png", w: 623, h: 623 },
	{ src: "/shortform/step5-3.png", w: 623, h: 623 },
	{ src: "/shortform/step5-4.png", w: 623, h: 623 },
	{ src: "/shortform/step5-5.png", w: 648, h: 623 },
];

const GROWTH = [
	{
		period: "1-2개월 차",
		active: false,
		items: ["계정 구조 설계", "초기 콘텐츠 누적", "알고리즘 학습 단계"],
	},
	{
		period: "3-4개월 차",
		active: false,
		items: ["노출 안정화", "검색 키워드 반영 확대", "콘텐츠 시리즈 고도화"],
	},
	{
		period: "5-6개월 차",
		active: true,
		items: ["브랜드 인지도 형성", "검색 + 영상 동시 노출 기반 확보", "상담 유입 구조 안정화"],
	},
];

export const ShortformServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(shortformServiceSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마케팅", path: "/services" },
					{ name: "끝장숏폼", path: "/services/shortform" },
				]}
			/>

			{/* 1. HERO */}
			<section className="bg-white px-4 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2 md:gap-16">
					<Reveal direction="left">
						<p className="mb-5 font-bold text-[#e11d29] text-sm tracking-tight md:text-base">
							숏폼올인원마케팅 끝장숏폼
						</p>
						<h1 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							조회수에서 끝나는 영상이 아닌
							<br />
							<span className="text-[#e11d29]">예약을 만드는</span> 숏폼
						</h1>
						<h2 className="mt-14 break-keep font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
							영상은 쌓이는데, <span className="text-[#e11d29]">왜 환자는 늘지 않을까요?</span>
						</h2>
						<div className="mt-6 space-y-1 text-base text-slate-500 md:text-lg">
							{PAIN_QUOTES.map((q) => (
								<p key={q}>{q}</p>
							))}
						</div>
						<p className="mt-8 whitespace-pre-line break-keep text-base text-slate-700 leading-relaxed md:text-lg">
							{
								"그동안 열심히 찍으며 숏폼 영상을 쌓았는데\n효과도 없고, 무의미 했다면\n확실하게 터뜨리는 애드리절트 숏폼올인원마케팅\n끝장숏폼을 시작하세요."
							}
						</p>
					</Reveal>
					<Reveal direction="right">
						<Image
							src="/shortform/background.png"
							alt="병원 원장이 숏폼을 촬영하는 현장"
							width={726}
							height={404}
							quality={90}
							sizes="(max-width: 768px) 100vw, 50vw"
							className="mx-auto h-auto w-full rounded-2xl"
						/>
					</Reveal>
				</div>
			</section>

			{/* 2. 문제는 영상만 — 레드 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="text-lg text-white/80 md:text-xl">기존 숏폼이 효과 없는 이유?</p>
					<h2 className="mt-3 break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
						문제는 “영상만” 만들고 있기 때문입니다
					</h2>
				</Reveal>
				<Reveal className="mt-14 md:mt-16">
					<div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
						{PROBLEM_STEPS.map((s, i) => (
							<Fragment key={s}>
								<div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-white md:h-56 md:w-56">
									<span className="whitespace-pre-line break-keep text-center font-bold text-2xl text-white md:text-3xl">
										{s}
									</span>
								</div>
								{i < PROBLEM_STEPS.length - 1 && (
									<ChevronRight className="h-8 w-8 shrink-0 text-white md:h-10 md:w-10" />
								)}
							</Fragment>
						))}
					</div>
				</Reveal>
				<Reveal className="mt-14 md:mt-16">
					<p className="break-keep text-white text-xl md:text-3xl">
						대부분 <span className="font-extrabold">병원 숏폼 마케팅</span>의 현실입니다
					</p>
				</Reveal>
			</section>

			{/* 3. 전환 중심의 숏폼 기획 — 사례 4컷 */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<p className="text-base text-slate-600 md:text-lg">
							영상편집 + 업로드만 하는 제작대행 시대는 끝!
						</p>
						<h2 className="mt-2 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
							애드리절트는 <span className="text-[#e11d29]">전환 중심의 숏폼을 기획</span>합니다
						</h2>
					</Reveal>
					<div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
						{EXAM_THUMBS.map((t, i) => (
							<Reveal key={t.src} delay={i * 0.08} direction="up">
								<Image
									src={t.src}
									alt="애드리절트 끝장숏폼 사례"
									width={t.w}
									height={t.h}
									quality={90}
									sizes="(max-width: 768px) 50vw, 25vw"
									className="h-auto w-full rounded-2xl ring-1 ring-black/10"
								/>
							</Reveal>
						))}
					</div>
					<Reveal className="mt-6">
						<p className="text-slate-400 text-sm md:text-base">
							*실제 애드리절트 끝장숏폼 사례입니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 4. 01 — 현직 인플루언서 */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<div className="flex items-start gap-5 text-left md:gap-8">
							<span className="shrink-0 font-extrabold text-5xl text-[#e11d29] leading-none md:text-7xl">
								01
							</span>
							<div>
								<p className="text-lg text-slate-500 md:text-xl">조회수 → 문의 → 예약까지</p>
								<h3 className="mt-2 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug md:text-4xl">
									<span className="text-[#e11d29]">전환을 만들어본 현직 인플루언서</span>가 기획부터
									관리까지!
								</h3>
							</div>
						</div>
					</Reveal>
					<div className="mt-12 flex flex-col items-center gap-5 md:mt-14 md:flex-row md:items-center md:gap-7">
						<Reveal direction="up" className="w-full md:w-[38%]">
							<Image
								src="/shortform/direct-1.jpg"
								alt="현직 인플루언서가 촬영을 코칭하는 현장"
								width={1000}
								height={750}
								quality={90}
								sizes="(max-width: 768px) 100vw, 43vw"
								className="h-auto w-full rounded-2xl ring-1 ring-black/10"
							/>
						</Reveal>
						<Reveal direction="up" delay={0.08} className="w-full md:w-[57%]">
							<Image
								src="/shortform/direct-2.gif"
								alt="촬영 현장 코칭 장면"
								width={600}
								height={338}
								unoptimized
								className="h-auto w-full rounded-2xl ring-1 ring-black/10"
							/>
						</Reveal>
					</div>
					<Reveal className="mt-12">
						<p className="whitespace-pre-line break-keep font-bold text-[#0a0a0a] text-base leading-relaxed md:text-xl">
							{
								"애드리절트의 끝장숏폼은 현직 인플루언서가 기획부터 관리까지 함께 합니다.\n터지는 숏폼을 위해 촬영 시 손동작 하나, 대사 하나까지 옆에서 코칭해 드립니다."
							}
						</p>
					</Reveal>
				</div>
			</section>

			{/* 5. VS — 접근 자체가 다릅니다 (레드 밴드) */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<h2 className="break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
						애드리절트 끝장숏폼은
						<br />
						기획 &amp; 제작 등{" "}
						<span className="underline underline-offset-4">접근 자체가 아예 다릅니다</span>
					</h2>
				</Reveal>
				<Reveal className="mt-14 md:mt-16">
					<div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-10">
						<div className="w-full max-w-md">
							<div className="rounded-xl bg-white px-8 py-5 text-center font-bold text-[#0a0a0a] text-lg md:text-xl">
								일반 영상 제작 대행
							</div>
							<ul className="mt-6 space-y-2 text-left text-lg text-white md:pl-10 md:text-xl">
								{VS_GENERAL.map((v) => (
									<li key={v}>● {v}</li>
								))}
							</ul>
						</div>
						<span className="font-extrabold text-4xl text-white md:mt-2 md:text-5xl">VS</span>
						<div className="w-full max-w-md">
							<div className="rounded-xl bg-white px-8 py-5 text-center font-bold text-[#e11d29] text-lg md:text-xl">
								끝장숏폼
							</div>
							<ul className="mt-6 space-y-2 text-left text-lg text-white md:pl-10 md:text-xl">
								{VS_KKEUTJANG.map((v) => (
									<li key={v}>● {v}</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>
				<Reveal className="mt-16">
					<p className="break-keep text-lg text-white/95 md:text-xl">
						현직 인플루언서가 <span className="font-bold">성공한 경험</span>을 토대로
						<br />
						검증된 방식으로 <span className="font-bold">영상 기획과 제작</span>이 이루어집니다
					</p>
				</Reveal>
			</section>

			{/* 6. 02 — 전환구조 + 스토리 연동 */}
			<section className="bg-slate-50 px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<div className="flex items-start gap-5 text-left md:gap-8">
							<span className="shrink-0 font-extrabold text-5xl text-[#e11d29] leading-none md:text-7xl">
								02
							</span>
							<div>
								<p className="text-lg text-slate-500 md:text-xl">노출 → 댓글유도 → 예약</p>
								<h3 className="mt-2 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug md:text-4xl">
									<span className="text-[#e11d29]">전환구조</span>를 만듭니다
								</h3>
							</div>
						</div>
					</Reveal>
					<Reveal direction="scale" className="mt-12 md:mt-14">
						<Image
							src="/shortform/step2-1.png"
							alt="댓글 유도 → 예약 전환 구조"
							width={866}
							height={526}
							quality={90}
							sizes="(max-width: 768px) 100vw, 700px"
							className="mx-auto h-auto w-full max-w-2xl"
						/>
					</Reveal>
					<Reveal className="mt-10">
						<p className="whitespace-pre-line break-keep font-bold text-[#0a0a0a] text-base leading-relaxed md:text-xl">
							{"노출과 댓글유도, 예약까지. 이 3단계가 끊기지 않도록\n처음부터 끝까지 설계합니다"}
						</p>
					</Reveal>
					<div className="mt-16 flex items-start justify-center gap-8 md:mt-20 md:gap-16">
						<Reveal direction="up">
							<Image
								src="/shortform/step2-2.png"
								alt="인스타그램 스토리 연동 사례 1"
								width={331}
								height={590}
								quality={90}
								sizes="(max-width: 768px) 45vw, 300px"
								className="h-auto w-full max-w-[300px]"
							/>
						</Reveal>
						<Reveal direction="up" delay={0.08}>
							<Image
								src="/shortform/step2-3.png"
								alt="인스타그램 스토리 연동 사례 2"
								width={331}
								height={590}
								quality={90}
								sizes="(max-width: 768px) 45vw, 300px"
								className="h-auto w-full max-w-[300px]"
							/>
						</Reveal>
					</div>
					<Reveal className="mt-10">
						<p className="break-keep font-bold text-[#0a0a0a] text-xl md:text-3xl">
							영상 1개당 스토리 2개 연동
						</p>
						<p className="mt-2 break-keep text-lg text-slate-600 md:text-xl">
							알고리즘 노출을 확장시키고 팔로워 반응을 끌어냅니다
						</p>
					</Reveal>
				</div>
			</section>

			{/* 7. 03 — 검색+알고리즘 기반 바이럴 구조 (※ step3-1~4 이미지 대기중) */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<div className="flex items-start gap-5 text-left md:gap-8">
							<span className="shrink-0 font-extrabold text-5xl text-[#e11d29] leading-none md:text-7xl">
								03
							</span>
							<div>
								<p className="text-lg text-slate-500 md:text-xl">다양한 숏폼 플랫폼을 운영하며</p>
								<h3 className="mt-2 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug md:text-4xl">
									<span className="text-[#e11d29]">검색+알고리즘 기반 바이럴 구조</span>를 만듭니다
								</h3>
							</div>
						</div>
					</Reveal>

					<Reveal direction="scale" className="mt-14 md:mt-16">
						<Image
							src="/shortform/step3-1.png"
							alt="검색+알고리즘 기반 유튜브·인스타그램 바이럴 구조"
							width={1300}
							height={521}
							quality={90}
							sizes="(max-width: 1024px) 100vw, 900px"
							className="mx-auto h-auto w-full max-w-4xl"
						/>
					</Reveal>

					<Reveal className="mt-20">
						<p className="font-extrabold text-2xl text-[#e11d29] md:text-3xl">유튜브</p>
						<p className="mt-1 font-bold text-[#0a0a0a] text-base md:text-lg">
							검색 + 알고리즘 기반 플랫폼
						</p>
						<div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-3 md:gap-4">
							{YT_CHIPS.map((c) => (
								<span
									key={c}
									className="break-keep rounded-xl bg-slate-100 px-4 py-5 text-center font-medium text-[#0a0a0a] text-base md:text-lg"
								>
									{c}
								</span>
							))}
						</div>
					</Reveal>
					<Reveal direction="scale" className="mt-10">
						<Image
							src="/shortform/step3-2.png"
							alt="유튜브 검색 노출 예시"
							width={862}
							height={371}
							quality={90}
							sizes="(max-width: 768px) 100vw, 680px"
							className="mx-auto h-auto w-full max-w-2xl"
						/>
						<p className="mt-4 text-slate-400 text-sm md:text-base">
							* 이해를 돕기 위한 예시입니다.
						</p>
					</Reveal>
					<Reveal className="mt-10">
						<p className="break-keep font-bold text-[#0a0a0a] text-lg md:text-2xl">
							환자가 정보를 찾을 때 키워드 검색과 알고리즘을 통해 노출됩니다
						</p>
					</Reveal>

					<Reveal className="mt-20">
						<p className="font-extrabold text-2xl text-[#e11d29] md:text-3xl">인스타그램</p>
						<p className="mt-1 font-bold text-[#0a0a0a] text-base md:text-lg">
							알고리즘 추천기반 플랫폼
						</p>
						<div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-3 md:gap-4">
							{IG_CHIPS.map((c) => (
								<span
									key={c}
									className="break-keep rounded-xl bg-slate-100 px-4 py-5 text-center font-medium text-[#0a0a0a] text-base md:text-lg"
								>
									{c}
								</span>
							))}
						</div>
					</Reveal>
					<Reveal direction="scale" className="mt-10">
						<div className="flex items-start justify-center gap-4 md:gap-6">
							<Image
								src="/shortform/step3-3.png"
								alt="인스타그램 알고리즘 노출 예시 1"
								width={296}
								height={528}
								quality={90}
								sizes="(max-width: 768px) 45vw, 260px"
								className="h-auto w-full max-w-[260px]"
							/>
							<Image
								src="/shortform/step3-4.png"
								alt="인스타그램 알고리즘 노출 예시 2"
								width={296}
								height={528}
								quality={90}
								sizes="(max-width: 768px) 45vw, 260px"
								className="h-auto w-full max-w-[260px]"
							/>
						</div>
						<p className="mt-4 text-slate-400 text-sm md:text-base">
							* 이해를 돕기 위한 예시입니다.
						</p>
					</Reveal>
					<Reveal className="mt-10">
						<p className="break-keep font-bold text-[#0a0a0a] text-base md:text-xl">
							새로운 환자가 알고리즘을 통해 우리 병원을 “발견”하게 됩니다
						</p>
					</Reveal>
				</div>
			</section>

			{/* 8. 04 — 진료과목별 콘텐츠 구조 + 환자 유입 퍼널 (레드 밴드) */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<div className="flex items-start gap-5 text-left md:gap-8">
							<span className="shrink-0 font-extrabold text-5xl text-white leading-none md:text-7xl">
								04
							</span>
							<div>
								<p className="text-lg text-white/85 md:text-xl">진료과목별 ‘환자 심리’에 맞춰</p>
								<h3 className="mt-2 break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
									콘텐츠 구조를 다르게 설계합니다
								</h3>
							</div>
						</div>
					</Reveal>
					<Reveal className="mt-12">
						<p className="break-keep font-bold text-white text-xl leading-relaxed md:text-2xl">
							모든 병원에 같은 콘텐츠를 쓰는 순간
							<br />
							전환은 절대 일어나지 않습니다
						</p>
					</Reveal>
					<div className="mx-auto mt-10 max-w-4xl space-y-3">
						{SPECIALTY.map((s, i) => (
							<Reveal key={s.field} delay={i * 0.06} direction="up">
								<div className="rounded-xl bg-white px-6 py-5 text-center font-bold text-[#0a0a0a] text-lg md:text-xl">
									{s.field} <span className="text-slate-400">→</span>{" "}
									<span className="text-[#e11d29]">{s.psych}</span>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal className="mt-20">
						<p className="font-extrabold text-white text-xl md:text-2xl">환자 유입 퍼널</p>
					</Reveal>
					<Reveal className="mt-10">
						<div className="flex flex-wrap items-start justify-center gap-x-4 gap-y-6 md:gap-x-8">
							{FUNNEL.map((f, i) => (
								<Fragment key={f.label}>
									<div className="flex w-20 flex-col items-center gap-2 md:w-24">
										<f.icon className="h-9 w-9 text-white md:h-10 md:w-10" />
										<span className="break-keep text-center font-medium text-sm text-white md:text-base">
											{f.label}
										</span>
									</div>
									{i < FUNNEL.length - 1 && (
										<ChevronRight className="mt-2 h-6 w-6 shrink-0 text-white/80 md:h-7 md:w-7" />
									)}
								</Fragment>
							))}
						</div>
					</Reveal>
					<Reveal className="mt-14">
						<p className="break-keep text-lg text-white/95 md:text-xl">
							콘텐츠는 <span className="font-bold">환자 유입의 전체 흐름과 신뢰형성을 고려</span>
							하여 설계됩니다
						</p>
					</Reveal>
				</div>
			</section>

			{/* 9. 05 — 브랜딩+전환 채널 통합 */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<div className="flex items-start gap-5 text-left md:gap-8">
							<span className="shrink-0 font-extrabold text-5xl text-[#e11d29] leading-none md:text-7xl">
								05
							</span>
							<div>
								<p className="text-lg text-slate-500 md:text-xl">
									전체 온라인 마케팅은 하나의 방향으로 설계해
								</p>
								<h3 className="mt-2 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug md:text-4xl">
									<span className="text-[#e11d29]">‘브랜딩+전환’</span>을 동시에 만듭니다
								</h3>
							</div>
						</div>
					</Reveal>
					<Reveal className="mt-12">
						<p className="break-keep font-bold text-[#0a0a0a] text-lg leading-relaxed md:text-2xl">
							하나의 메시지를 모든 채널에
							<br />
							<span className="text-[#e11d29]">일관되게 노출시킵니다</span>
						</p>
					</Reveal>
					<Reveal className="mt-14">
						<div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
							{CHANNELS.map((c) => (
								<Image
									key={c.src}
									src={c.src}
									alt="숏폼·SNS 채널"
									width={c.w}
									height={c.h}
									quality={90}
									className="h-32 w-32 object-contain md:h-52 md:w-52"
								/>
							))}
						</div>
					</Reveal>
				</div>
			</section>

			{/* 10. 신뢰형성 퍼널 (레드 밴드) */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="break-keep font-bold text-2xl text-white leading-snug md:text-4xl">
						일관성은 <span className="font-extrabold">신뢰</span>를 만들고
						<br />
						<span className="font-extrabold">신뢰는 예약으로 이어집니다</span>
					</p>
				</Reveal>
				<Reveal className="mt-14 md:mt-16">
					<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
						<div className="flex w-28 flex-col items-center gap-3 md:w-36">
							<Eye className="h-14 w-14 text-white md:h-16 md:w-16" />
							<span className="break-keep text-center font-medium text-lg text-white md:text-xl">
								콘텐츠 시청
							</span>
						</div>
						<ChevronRight className="h-8 w-8 shrink-0 text-white/80 md:h-11 md:w-11" />
						<div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-white md:h-52 md:w-52">
							<span className="break-keep text-center font-bold text-lg text-white md:text-2xl">
								반복 노출
							</span>
						</div>
						<ChevronRight className="h-8 w-8 shrink-0 text-white/80 md:h-11 md:w-11" />
						<div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-white md:h-52 md:w-52">
							<span className="break-keep text-center font-bold text-lg text-white md:text-2xl">
								의사 신뢰 형성
							</span>
						</div>
						<ChevronRight className="h-8 w-8 shrink-0 text-white/80 md:h-11 md:w-11" />
						<div className="flex w-28 flex-col items-center gap-3 md:w-36">
							<MessageSquare className="h-14 w-14 text-white md:h-16 md:w-16" />
							<span className="break-keep text-center font-medium text-lg text-white md:text-xl">
								상담문의
							</span>
						</div>
					</div>
				</Reveal>
			</section>

			{/* 11. 예약 마감 캘린더 */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<h2 className="break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
							우리 병원도 이제
							<br />
							<span className="text-[#e11d29]">숏폼으로 환자가 쌓이는 구조</span>를 만들 차례입니다
						</h2>
					</Reveal>
					<Reveal direction="scale" className="mt-14 md:mt-16">
						<Image
							src="/shortform/calendar.png"
							alt="26년 9월까지 예약 마감된 병원 캘린더"
							width={1488}
							height={570}
							quality={90}
							sizes="(max-width: 1024px) 100vw, 1000px"
							className="mx-auto h-auto w-full max-w-5xl"
						/>
					</Reveal>
					<Reveal className="mt-6">
						<p className="text-base text-slate-500 md:text-xl">
							26년 03월 20일 기준 26년 9월까지 실제 예약 마감된 병원
						</p>
					</Reveal>
				</div>
			</section>

			{/* 12. 채널 성장 흐름 */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<h2 className="font-extrabold text-3xl text-[#e11d29] tracking-tight md:text-4xl">
							채널 성장 흐름
						</h2>
						<p className="mt-3 text-base text-slate-600 md:text-lg">
							지금 시작하면 6개월 뒤 결과가 달라집니다
						</p>
					</Reveal>
					<div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
						{GROWTH.map((g, i) => (
							<Reveal key={g.period} delay={i * 0.1} direction="up">
								<p
									className={`font-extrabold text-xl md:text-2xl ${g.active ? "text-[#e11d29]" : "text-[#0a0a0a]"}`}
								>
									{g.period}
								</p>
								<div
									className={`mt-4 h-1.5 rounded-full ${g.active ? "bg-[#e11d29]" : "bg-[#f6c9cb]"}`}
								/>
								<div className="mt-6 space-y-1.5 text-base text-slate-600 md:text-lg">
									{g.items.map((it) => (
										<p key={it}>· {it}</p>
									))}
								</div>
							</Reveal>
						))}
					</div>
					<Reveal className="mt-16">
						<p className="break-keep text-lg text-slate-700 leading-relaxed md:text-2xl">
							콘텐츠가 꾸준히 축적될수록
							<br />
							<span className="font-bold text-[#e11d29]">
								채널의 노출과 환자 유입은 점점 안정적으로 이어질 가능성이 높습니다
							</span>
						</p>
					</Reveal>
				</div>
			</section>

			{/* 13. 월 최대 3곳 (레드 밴드) */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="break-keep text-white text-xl leading-relaxed md:text-3xl md:leading-relaxed">
						단순 제작이 아닌
						<br />
						환자를 만드는 구조를
						<br />
						직접 관리하기에
					</p>
					<p className="mt-8 break-keep font-extrabold text-2xl text-white md:text-4xl">
						월 최대 3곳만 진행합니다
					</p>
				</Reveal>
			</section>

			{/* 14. 끝장숏폼 촬영 현장 (site) */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-28">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<h2 className="break-keep font-bold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-4xl">
							기획부터 전환까지 <span className="font-extrabold">모든 과정을 하나로 설계하는</span>
							<br />
							<span className="font-extrabold text-[#e11d29]">숏폼 올인원 마케팅 [끝장 숏폼]</span>
						</h2>
					</Reveal>
					<Reveal direction="scale" className="mt-14 md:mt-16">
						<Image
							src="/shortform/site.png"
							alt="애드리절트 끝장숏폼 촬영 현장"
							width={1500}
							height={550}
							quality={90}
							sizes="(max-width: 1024px) 100vw, 1000px"
							className="mx-auto h-auto w-full max-w-5xl"
						/>
					</Reveal>
					<Reveal className="mt-8">
						<p className="break-keep font-bold text-[#0a0a0a] text-base md:text-lg">
							*T/O가 마감되었을 경우, 현재 진행 중인 계약이 종료될 때까지 추가 접수 절대 불가
						</p>
					</Reveal>
				</div>
			</section>
		</>
	);
};

export default ShortformServicePage;
