import { Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "AIO마케팅 | 애드리절트(ADRESULT)",
	description:
		"환자의 검색이 AI로 바뀌고 있습니다. AIO(AI Optimization)마케팅으로 ChatGPT·Gemini·Perplexity 등 AI가 우리 병원을 추천하게 만드세요.",
};

const HASHTAGS: { label: string; color: string }[] = [
	{ label: "#AIO(구글AI)", color: "#1a73e8" },
	{ label: "#Chat GPT", color: "#10a37f" },
	{ label: "#Gemini", color: "#ea4335" },
	{ label: "#Perplexity", color: "#20b8cd" },
	{ label: "#Grok", color: "#111111" },
];

const GRID_GIFS = [
	"/aio/gemini-2.gif",
	"/aio/gemini-3.gif",
	"/aio/gemini-4.gif",
	"/aio/gemini-5.gif",
];

const AIO_EXAMS = ["/aio/aio-exam-1.png", "/aio/aio-exam-2.png", "/aio/aio-exam-3.png"];

const EXPOSURES = [
	"/aio/google-exposure-1.png",
	"/aio/google-exposure-2.png",
	"/aio/google-exposure-3.png",
	"/aio/google-exposure-4.png",
	"/aio/google-exposure-5.png",
	"/aio/google-exposure-6.png",
];

const HOSPITAL_EXPOSURES = [
	"/aio/hospital-exposure-1.png",
	"/aio/hospital-exposure-2.png",
	"/aio/hospital-exposure-3.png",
	"/aio/hospital-exposure-4.png",
	"/aio/hospital-exposure-5.png",
	"/aio/hospital-exposure-6.png",
];

const AIRANK_CHECKS: {
	text: string;
	img: string;
	w: number;
	h: number;
	gif?: boolean;
	caption?: string;
}[] = [
	{
		text: "1. 매일 우리 병원이 어느 AI에서 언급되었는지 질의어 별로 체크합니다.",
		img: "/aio/aio-check-1.png",
		w: 1920,
		h: 1000,
		caption: "※실제 애드리절트 병원 고객사 AI 분석 자료",
	},
	{
		text: "2. 우리 병원과 경쟁 병원의 추천 추이를 확인할 수 있습니다.",
		img: "/aio/aio-check-2.png",
		w: 1660,
		h: 397,
	},
	{
		text: "3. 내가 원하는 질문에 답을 어디에서 참고하는지 확인할 수 있습니다.",
		img: "/aio/aio-check-3.png",
		w: 1415,
		h: 611,
	},
	{
		text: "4. 추천 및 언급되면 바로 캡쳐하여 저장하므로, 진짜 추천되었는지 확인할 수 있습니다.(정확도 최고!)",
		img: "/aio/aio-check-4.gif",
		w: 1280,
		h: 720,
		gif: true,
	},
];

const AIO_PROCESS: { no: string; title: string; desc: string }[] = [
	{ no: "01", title: "문의폼 작성", desc: "아래의 문의폼을 작성하여\n상담 신청을 합니다." },
	{
		no: "02",
		title: "AIO 마케팅 상담",
		desc: "AIO 마케팅에 대한 설명 및\n운영 방식을 안내 합니다.",
	},
	{
		no: "03",
		title: "계약 및 진행",
		desc: "최종적으로 계약이 이루어지면\n마케팅을 진행하게 됩니다.",
	},
];

const SEMINAR_BODY = [
	"애드리절트 AIO 마케팅에 큰 관심을 가져주셔서 감사합니다.",
	"한 분 한 분 직접 찾아뵙고 설명드리는 것이 가장 좋지만,\n많은 분들의 관심과 문의로 인해 이번에 관련 세미나를 개최하게 되었습니다.",
	"이번 세미나에서는 우리 병원이 어떻게 해야 AI에 추천받을 수 있는지,\n실질적인 전략과 사례를 아주 자세하게 들으실 수 있습니다.",
	"또 AI분석 프로그램 AIRANK를 개발한 개발자와의\nQnA 시간도 준비되어 있으니 AI에 대한 궁금증을 해결하시기 바랍니다.",
	"앞서나가는 병원 마케팅을 준비하고 싶다면,\n꼭 참석하시어 새로운 변화를 직접 경험해보시기 바랍니다.",
];

export const AioPage = () => {
	return (
		<>
			{/* 1. HERO — 왼쪽 설명 + 오른쪽 Gemini 검색 화면 */}
			<section className="bg-white px-4 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
					<Reveal direction="left">
						<p className="mb-5 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							AIO 마케팅
						</p>
						<p className="font-semibold text-2xl text-[#0a0a0a] md:text-3xl">
							우리 병원이 AI에 안뜨나요?
						</p>
						<p className="mt-2 font-extrabold text-5xl text-[#e11d29] leading-tight tracking-tight md:text-6xl">
							AIO마케팅이면 해결!
						</p>

						<p className="mt-12 text-lg text-slate-500 md:text-xl">
							“AI가 우리 병원을 추천 안해줘요. 옆 병원은 잘 나오는데..”
						</p>
						<h2 className="mt-4 break-keep font-extrabold text-2xl text-[#0a0a0a] md:text-3xl">
							AI가 우리 병원을 추천하게 하려면?
						</h2>
						<p className="mt-5 break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							환자의 검색이 AI로 바뀌고 있습니다. AIO(AI Optimization)마케팅은 이제 병원마케팅에
							필수입니다. 고민하면 늦습니다.
						</p>
						<p className="mt-3 break-keep font-bold text-[#0a0a0a] text-base leading-relaxed md:text-lg">
							지금 바로, AI가 우리 병원을 추천할 수 있게 준비하세요.
						</p>
					</Reveal>

					<Reveal direction="right">
						<Image
							src="/aio/gemini-search.png"
							alt="Gemini에게 병원 추천을 물어본 검색 화면"
							width={537}
							height={504}
							sizes="(max-width: 768px) 100vw, 50vw"
							className="mx-auto h-auto w-full max-w-xl rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-black/10"
						/>
					</Reveal>
				</div>
			</section>

			{/* 2. 대표 사례 선언 밴드 */}
			<section className="w-full bg-slate-50 px-4 py-20 text-center md:py-24">
				<Reveal>
					<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
						AIO마케팅 하면, <span className="text-[#e11d29]">정말 추천 되나</span>요?
					</h2>
					<h2 className="mt-4 break-keep font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
						<span className="text-[#e11d29]">네, 됩니다.</span> 애드리절트가 대표 사례입니다.
					</h2>
					<div className="mx-auto mt-8 max-w-2xl space-y-1.5 break-keep text-base text-slate-600 md:text-lg">
						<p>저희도 자사 광고 중 하나로 AIO마케팅을 합니다.</p>
						<p>검증된 방식으로 병원도 저희처럼 AI추천을 받을 수 있게 관리합니다.</p>
					</div>
				</Reveal>
			</section>

			{/* 3. 세미나 개최 — 레드 풀폭 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<p className="text-4xl" aria-hidden="true">
						📢
					</p>
					<h2 className="mt-5 break-keep font-extrabold text-2xl text-[#ffe14d] leading-snug md:text-4xl">
						26년 6월 21일(일) 오후 1시~4시
						<br />
						AI 병원마케팅 세미나 개최
					</h2>
					<div className="mx-auto mt-10 max-w-3xl space-y-7">
						{SEMINAR_BODY.map((p) => (
							<p
								key={p.slice(0, 16)}
								className="whitespace-pre-line break-keep text-base text-white/90 leading-relaxed md:text-lg"
							>
								{p}
							</p>
						))}
					</div>
				</Reveal>
			</section>

			{/* 4+5. BEST CASE gif + 고객사 AI 노출 사례 (하나의 연속 섹션) */}
			<section className="bg-slate-50 px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Best Case
						</p>
						<h2 className="break-keep font-extrabold text-2xl text-[#0a0a0a] tracking-tight md:text-4xl">
							AI가 애드리절트를 직접 추천합니다.
						</h2>
					</Reveal>
					<Reveal direction="scale" className="mt-12 md:mt-14">
						<Image
							src="/aio/gemini-1.gif"
							alt="AI가 애드리절트를 추천하는 화면"
							width={1280}
							height={720}
							unoptimized
							className="mx-auto h-auto w-full max-w-4xl rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-black/10"
						/>
					</Reveal>

					<Reveal className="mt-24 md:mt-32">
						<h2 className="break-keep font-extrabold text-[#0a0a0a] text-xl md:text-3xl">
							[AIO마케팅 진행하는 병원 고객사의 AI 노출 사례]
						</h2>
						<p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-bold text-base md:text-lg">
							{HASHTAGS.map((h) => (
								<span key={h.label} style={{ color: h.color }}>
									{h.label}
								</span>
							))}
						</p>
						<p className="mt-3 text-base text-slate-600 md:text-lg">
							애드리절트는 5개 AI엔진을 트래킹합니다.
						</p>
					</Reveal>

					<div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
						{GRID_GIFS.map((src, i) => (
							<Reveal key={src} delay={i * 0.08} direction="up">
								<Image
									src={src}
									alt="병원 고객사 AI 노출 사례"
									width={1920}
									height={918}
									unoptimized
									className="h-auto w-full rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/10"
								/>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 6. AI 추천 → 실제 문의 연결 + recommendation 이미지 + 전화 CTA */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-6xl">
					<Reveal>
						<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
							AI에서의 추천은
							<br />
							<span className="text-[#e11d29]">실제 문의로 연결</span>됩니다.
						</h2>
						<div className="mx-auto mt-6 max-w-2xl space-y-1.5 break-keep text-base text-slate-600 md:text-lg">
							<p>실제로 AI에서 병원마케팅 회사를 추천받아</p>
							<p>애드리절트에 문의주시는 분들이 급격히 증가하고 있습니다.</p>
						</div>
					</Reveal>

					<Reveal direction="scale" className="mt-12 md:mt-14">
						<Image
							src="/aio/recommendation.png"
							alt="AI 검색을 통해 애드리절트를 추천받고 문의한 실제 사례"
							width={1275}
							height={1268}
							sizes="(max-width: 1024px) 100vw, 896px"
							className="mx-auto h-auto w-full max-w-4xl rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-black/10"
						/>
					</Reveal>

					<Reveal className="mt-16">
						<p className="break-keep font-extrabold text-2xl text-[#0a0a0a] md:text-3xl">
							나도 애드리절트에 <span className="text-[#e11d29]">병원마케팅 문의</span>하기
						</p>
						<a
							href={`tel:${siteConfig.contact.tel}`}
							className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#ffe14d] px-6 py-3 font-extrabold text-[#0a0a0a] text-xl transition-transform hover:scale-[1.03] md:text-2xl"
						>
							<Phone className="h-6 w-6 fill-[#e11d29] text-[#e11d29]" />
							{siteConfig.contact.tel}
						</a>
					</Reveal>
				</div>
			</section>

			{/* 7. AI검색 유입 증가율 — 레드 풀폭 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<div className="mx-auto max-w-4xl">
					<Reveal>
						<div className="space-y-1.5 break-keep text-base text-white/90 leading-relaxed md:text-lg">
							<p>
								애드리절트에 AI검색을 통해 문의하시는 비율이 0%에서 60%로 단 시간에 급격히
								증가하였습니다.
							</p>
							<p>이는 애드리절트가 AIO마케팅을 잘 해서 AI에 추천이 많이 된 이유도 있지만,</p>
							<p>
								그만큼{" "}
								<span className="font-bold text-white">
									소비자의 검색 패턴이 기존 네이버, 구글 등 플랫폼 검색에서 AI로 빠르게 전환
								</span>
								되었음을 보여주는 증거입니다.
							</p>
						</div>
					</Reveal>

					<Reveal direction="scale" className="mt-12 md:mt-14">
						<Image
							src="/aio/rate-of-increase.png"
							alt="애드리절트 유입 경로 중 AI검색 유입의 증가율 추이 그래프"
							width={1280}
							height={783}
							sizes="(max-width: 768px) 100vw, 768px"
							className="mx-auto h-auto w-full max-w-3xl rounded-2xl bg-white"
						/>
						<p className="mt-4 text-sm text-white/85 md:text-base">
							[애드리절트 유입 경로 중 AI검색 유입의 증가율 추이]
						</p>
					</Reveal>

					<Reveal className="mt-14">
						<div className="space-y-1.5 break-keep text-base text-white/90 leading-relaxed md:text-lg">
							<p>AI에게 추천받기 까지는 보통 3~6개월이 소요되며,</p>
							<p>경쟁이 치열할 수록 오래걸립니다.</p>
						</div>
						<h2 className="mt-8 break-keep font-extrabold text-2xl text-white leading-snug md:text-4xl">
							그래서 AIO마케팅은
							<br />
							지금, 바로! 시작해야합니다.
						</h2>
					</Reveal>
				</div>
			</section>

			{/* 8. AIO마케팅 병원 사례 — 3개 카드 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-[1600px]">
					<Reveal>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
							애드리절트
							<br />
							<span className="text-[#e11d29]">AIO마케팅 병원 사례</span>
						</h2>
					</Reveal>
					<div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
						{AIO_EXAMS.map((src, i) => (
							<Reveal key={src} delay={i * 0.1} direction="up">
								<Image
									src={src}
									alt="애드리절트 AIO마케팅 병원 사례 (AI 추천율 증가)"
									width={1041}
									height={908}
									sizes="(max-width: 768px) 100vw, 33vw"
									className="h-auto w-full rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/10"
								/>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 9. 구글·네이버 노출 시너지 — google-exposure 6개 */}
			<section className="bg-slate-50 px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
							AIO마케팅을 했더니,
							<br />
							<span className="text-[#e11d29]">구글과 네이버 노출은 덤!</span>
						</h2>
						<div className="mx-auto mt-8 max-w-3xl space-y-1.5 break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							<p>애드리절트의 AIO마케팅은 SEO(검색엔진 최적화) 기술을 기반으로 설계되었습니다.</p>
							<p>검색 엔진 봇이 정보를 효율적으로 수집할 수 있도록 최적화하는 과정은</p>
							<p>곧 AI 응답 엔진에 반영되는 데이터의 품질을 높이는 작업이기도 합니다.</p>
							<p>따라서 AIO마케팅을 통해 구글과 네이버 등 주요 검색 포털에서</p>
							<p>다양한 세부 키워드 노출을 극대화하는 시너지 효과를 기대할 수 있습니다.</p>
						</div>
					</Reveal>

					<Reveal className="mt-12 md:mt-14">
						<p className="font-bold text-[#0a0a0a] text-base md:text-lg">
							[애드리절트 구글 키워드 노출 사례]
						</p>
					</Reveal>
					<div className="mt-6 grid gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
						{EXPOSURES.map((src, i) => (
							<Reveal key={src} delay={i * 0.06} direction="up">
								<Image
									src={src}
									alt="애드리절트 구글 키워드 노출 사례"
									width={852}
									height={464}
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="h-auto w-full rounded-lg shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-black/10"
								/>
							</Reveal>
						))}
					</div>

					<Reveal className="mt-16">
						<p className="font-bold text-[#0a0a0a] text-base md:text-lg">
							[AIO마케팅 진행하는 병원 고객사의 네이버 노출 사례]
						</p>
					</Reveal>
					<div className="mt-6 grid gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
						{HOSPITAL_EXPOSURES.map((src, i) => (
							<Reveal key={src} delay={i * 0.06} direction="up">
								<Image
									src={src}
									alt="애드리절트 병원 고객사 네이버 노출 사례"
									width={810}
									height={881}
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="h-auto w-full rounded-lg shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-black/10"
								/>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 10. 노출 비보장 고지 + 진짜 추천 시작 + 전화 CTA */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-4xl">
					<Reveal>
						<p className="text-slate-400 text-sm md:text-base">
							※구글 및 네이버 노출은 보장이 아닙니다.
						</p>
						<h2 className="mt-16 break-keep font-extrabold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:mt-24 md:text-4xl">
							애드리절트 <span className="text-[#e11d29]">AIO마케팅</span>을 하면
							<br />
							<span className="text-[#e11d29]">AI가 우리 병원을 진짜 추천</span>하기 시작합니다.
						</h2>
						<a
							href={`tel:${siteConfig.contact.tel}`}
							className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ffe14d] px-6 py-3 font-extrabold text-[#0a0a0a] text-lg transition-transform hover:scale-[1.03] md:text-xl"
						>
							<Phone className="h-5 w-5 fill-[#e11d29] text-[#e11d29]" />
							AIO마케팅 문의 : {siteConfig.contact.tel}
						</a>
					</Reveal>
				</div>
			</section>

			{/* 11. 혹시.. — 레드 풀폭 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<h2 className="font-extrabold text-2xl text-white md:text-3xl">혹시..</h2>
					<div className="mx-auto mt-10 max-w-3xl space-y-2 break-keep text-lg text-white/90 md:text-xl">
						<p>“노출 됐을 때만 캡처 한거아니야?”</p>
						<p>“종일 AI에 붙어있을 것도 아닌데 어떻게 확인해?”</p>
					</div>
					<p className="mt-8 text-lg text-white/90 md:text-xl">라고 생각하셨나요?</p>
					<p className="mt-8 break-keep font-extrabold text-2xl text-white md:text-3xl">
						그래서 준비했습니다.
					</p>
				</Reveal>
			</section>

			{/* 12. AIRANK — 유튜브 임베딩 */}
			<section className="bg-white px-4 pt-24 pb-16 text-center md:px-8 md:pt-32 md:pb-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-snug tracking-tight md:text-5xl">
							업계 최초! AI 분석 프로그램
							<br />
							<span className="text-[#e11d29]">AIRANK</span>
						</h2>
						<p className="mt-8 text-slate-500 text-sm md:text-base">▼ 영상으로 확인하세요</p>
					</Reveal>
					<Reveal direction="scale" className="mt-8 md:mt-10">
						<div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.18)] ring-1 ring-black/10">
							<iframe
								src="https://www.youtube.com/embed/bFVQBdZeTs4"
								title="병원마케팅, 아직도 AI로 글만 쓰시나요? | 제대로 된 AI분석 AIRANK"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="absolute inset-0 h-full w-full"
							/>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 13. AIRANK 기능 4가지 */}
			<section className="bg-white px-4 pb-24 text-center md:px-8 md:pb-32">
				<div className="mx-auto max-w-[1400px]">
					{AIRANK_CHECKS.map((c) => (
						<div key={c.img} className="mt-16 first:mt-0 md:mt-24">
							<Reveal>
								<h3 className="break-keep text-left font-extrabold text-[#0a0a0a] text-lg md:text-2xl">
									{c.text}
								</h3>
							</Reveal>
							<Reveal direction="scale" className="mt-8 md:mt-10">
								<Image
									src={c.img}
									alt={c.text}
									width={c.w}
									height={c.h}
									quality={90}
									unoptimized={c.gif}
									sizes="(max-width: 1400px) 100vw, 1400px"
									className="h-auto w-full rounded-2xl ring-1 ring-black/10"
								/>
								{c.caption && (
									<p className="mt-4 text-slate-500 text-sm md:text-base">{c.caption}</p>
								)}
							</Reveal>
						</div>
					))}
				</div>
			</section>

			{/* 14. AI 마케팅 지금 시작 — 레드 밴드 */}
			<section className="w-full bg-[#e11d29] px-4 py-24 text-center md:py-28">
				<Reveal>
					<h2 className="break-keep font-extrabold text-3xl text-white leading-relaxed md:text-5xl md:leading-relaxed">
						AI 마케팅
						<br />
						지금 하지 않으면 뒤처집니다.
						<br />
						애드리절트와 바로 시작하세요<span className="italic">!</span>
					</h2>
				</Reveal>
			</section>

			{/* 15. AIO 마케팅 진행절차 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-[1400px]">
					<Reveal>
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							ADRESULT Marketing Process
						</p>
						<h2 className="font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
							AIO 마케팅 <span className="text-[#e11d29]">진행절차</span>
						</h2>
					</Reveal>
					<div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
						{AIO_PROCESS.map((s, i) => (
							<Reveal key={s.no} delay={i * 0.1} direction="up">
								<div className="h-full rounded-2xl bg-slate-100 p-8 text-left ring-1 ring-black/5 md:p-10">
									<p className="font-bold text-[#e11d29] text-lg">{s.no}</p>
									<h3 className="mt-1 font-extrabold text-[#0a0a0a] text-xl md:text-2xl">
										{s.title}
									</h3>
									<p className="mt-4 whitespace-pre-line break-keep text-slate-500 leading-relaxed">
										{s.desc}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default AioPage;
