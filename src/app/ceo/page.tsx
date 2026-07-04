import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "CEO 인사말 | 애드리절트(ADRESULT)",
	description:
		"병원마케팅 대행사 애드리절트 이승민 대표 인사말입니다. 상품에 병원을 맞추지 않고 진료과별 1:1 맞춤 전략으로 신환을 늘려온 11년, 결과로 증명하는 병원마케팅 철학을 전합니다.",
};

const GREETING = [
	"마케팅의 ㅁ자도 모르던 제가, 강남 본사를 포함하여 전국 6개 지사와 함께하는 애드리절트의 대표가 되기까지, 밤새워 이야기해도 모자를 만큼 많은 시행착오를 겪어왔습니다.",
	"소상공인들의 가게를 방문하여 마케팅 코칭도 해보았고, 이름만 대면 다 알만한 큰 기업의 마케팅 자문도 여럿 맡아보았습니다. 제일 어렵다는 병원마케팅도 수백 곳 넘게 진행해보았지요. 마케팅 책도 써봤고, 마케팅 강의, 컨설팅도 참 많이 했습니다.",
	"이렇게 다양한 종류의 마케팅을 하면서 깨달은 점은 아이러니하게도 ‘결국은 기본!’이었습니다. 본질이 강하지 않은 상태에서는 마케팅이 아무리 강하게 들어가도 잠깐의 성공 밖에는 이룰 수가 없었습니다.",
	"결과로 말하는 광고회사, 애드리절트는 우리의 도움이 필요한 고객사들에게 늘 기본에 충실한 회사가 되기 위해 노력할 것입니다.",
];

const CEO_YOUTUBE = "https://www.youtube.com/channel/UC3zbXdPrlfmB26tgS5GVBIw";
const BOOK_VIDEOS: { id: string; title: string }[] = [
	{ id: "6FWXfNlwbpM", title: "온라인마케팅 최고의 책 — 하루 한 책 60회 특집" },
	{ id: "UzpUy7HdAQ0", title: "아마존 3년차 셀러가 추천하는 마케팅 책" },
];

export const CeoPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "CEO 인사말", path: "/ceo" },
				]}
			/>
			<CompanyHero videoSrc="/ceo-hero-video.mp4" />
			<CompanyTabs />

			{/* CEO'S GREETING — 사진 좌 + 텍스트 우 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-2 md:gap-20">
					<Reveal direction="left">
						<Image
							src="/ceo/ceo.jpg"
							alt="애드리절트 대표 이승민"
							width={891}
							height={1071}
							sizes="(max-width: 768px) 100vw, 50vw"
							className="mx-auto h-auto w-full max-w-lg rounded-2xl"
						/>
					</Reveal>

					<Reveal direction="right">
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							CEO&rsquo;s Greeting
						</p>
						<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
							CEO 인사말
						</h2>
						<p className="mt-8 break-keep font-bold text-[#0a0a0a] text-xl md:text-2xl">
							안녕하세요. 애드리절트 이승민입니다.
						</p>
						<div className="mt-6 space-y-5">
							{GREETING.map((p) => (
								<p
									key={p.slice(0, 12)}
									className="break-keep text-base text-slate-600 leading-relaxed md:text-lg"
								>
									{p}
								</p>
							))}
						</div>
						<div className="mt-10 border-slate-200 border-t pt-6">
							<p className="font-extrabold text-[#0a0a0a] text-xl">이승민 대표</p>
							<p className="mt-2 text-slate-500 text-sm leading-relaxed md:text-base">
								현) 애드리절트 CEO
								<br />
								현) 미다웍스 CMO
								<br />
								전) 인문계 고등학교 사회과 교사
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 대표 유튜브 채널 배너 */}
			<section className="w-full bg-[#e11d29] px-4 py-20 text-center md:py-24">
				<Reveal>
					<p className="text-lg text-white/85 md:text-xl">이승민 대표 - YouTube</p>
					<p className="mt-3 break-keep font-extrabold text-2xl text-white md:text-4xl">
						[ 이쌤의 마케팅 때문에 고민입니다 ]
					</p>
					<Link
						href={CEO_YOUTUBE}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-8 inline-flex min-w-[240px] items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 font-bold text-[#0a0a0a] text-lg transition-transform hover:scale-[1.03]"
					>
						<Image src="/youtube-logo.png" alt="" width={24} height={24} className="h-6 w-6" />{" "}
						바로가기
					</Link>
				</Reveal>
			</section>

			{/* CEO'S BOOK */}
			<section className="bg-white px-4 py-24 text-center md:px-8 md:py-32">
				<div className="mx-auto max-w-[1600px]">
					<Reveal>
						<p className="mb-3 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							CEO&rsquo;s Book
						</p>
						<p className="text-lg text-slate-500 md:text-xl">실전에서 바로 써먹는 마케팅 비법</p>
						<h2 className="mt-2 break-keep font-extrabold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
							마케팅 때문에 고민입니다
						</h2>
						<span className="mt-6 inline-flex rounded-full bg-[#e11d29] px-6 py-2.5 font-bold text-sm text-white md:text-base">
							교보문고 경제/경영부문 베스트셀러
						</span>
					</Reveal>

					<Reveal direction="scale" className="mt-12 md:mt-16">
						<Image
							src="/ceo/book.png"
							alt="이승민 대표 저서 『마케팅 때문에 고민입니다』"
							width={1200}
							height={925}
							sizes="(max-width: 1024px) 100vw, 1000px"
							className="mx-auto h-auto w-full max-w-4xl"
						/>
					</Reveal>

					{/* 추천사 */}
					<Reveal className="mx-auto mt-14 max-w-3xl md:mt-16">
						<p className="break-keep font-bold text-[#0a0a0a] text-xl md:text-2xl">
							많은 비용을 투자하고도 제대로 마케팅 효과를 보지 못한
							<br />
							소상공인들에게 등불 같은 책.
						</p>
						<p className="mt-6 break-keep text-left text-lg text-slate-700 leading-relaxed md:text-xl">
							시중에 출시된 마케팅 도서들이 매출을 올리기 위한 마케팅의 필요성에 대해 서술하고
							있다면, 이 책에선 좀 다른 것들을 기대해도 좋다. 오늘날 주된 마케팅으로 자리 잡은
							‘온라인마케팅’의 원리와 구조, 매출상승에 대한 실제 경험을 베이스로 한 노하우, 더불어
							잠재고객의 니즈에 맞춰 제품을 홍보하고, 차별화된 브랜딩을 하며, 누구나 쉽게 좋은
							콘텐츠를 만들어낼 수 있는 방법까지 상세히 담고 있다. 많은 비용을 투자하고도 제대로
							마케팅 효과를 보지 못한 소상공인들에게 등불 같은 책이 될 것이다.
						</p>
						<p className="mt-6 text-right font-medium text-base text-slate-600 md:text-lg">
							-인덕의료재단 이사장 이윤환
						</p>
					</Reveal>
				</div>
			</section>

			{/* 도서 리뷰 영상 */}
			<section className="bg-slate-50 px-4 py-20 md:px-8 md:py-24">
				<div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
					{BOOK_VIDEOS.map((v) => (
						<div
							key={v.id}
							className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-black/5"
						>
							<iframe
								src={`https://www.youtube.com/embed/${v.id}`}
								title={v.title}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="absolute inset-0 h-full w-full"
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default CeoPage;
