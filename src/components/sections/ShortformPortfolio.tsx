"use client";

import { Instagram, Play } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

// 직접 제작·운영한 법률 릴스. 조회수는 이미지 안에도 표기돼 있지만, 크롤러·답변엔진이 읽을 수 있도록
// 제목·조회수를 텍스트 캡션과 VideoObject 구조화 데이터로도 노출한다. 조회수 높은 순 정렬.
type Reel = {
	src: string;
	alt: string;
	href: string;
	title: string;
	views: string;
	viewCount: number;
};

const REELS: Reel[] = [
	{
		src: "/images/shortform/shortform-4.png",
		alt: "근로계약서에 이 조항 있으면 절대 싸인하지 마세요 — 123.6만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DYCAsVXR0He/",
		title: "근로계약서, 이 조항 있으면 싸인하지 마세요",
		views: "123.6만",
		viewCount: 1236000,
	},
	{
		src: "/images/shortform/shortform-3.png",
		alt: "모르는 돈 100만원이 통장에 입금된다면 — 53.6만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DX_Wp-CuN4g/",
		title: "모르는 돈 100만원이 통장에 입금된다면?",
		views: "53.6만",
		viewCount: 536000,
	},
	{
		src: "/images/shortform/shortform-2.png",
		alt: "이사갈 때 100만원 받는 법 — 47.2만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DWqqFv1kzCB/",
		title: "이사갈 때 100만원 받는 법",
		views: "47.2만",
		viewCount: 472000,
	},
	{
		src: "/images/shortform/shortform-5.png",
		alt: "맞으면 깡값, 받으면 된다? — 24.5만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DYGoMmtPR7j/",
		title: "맞으면 깡값, 받으면 된다?",
		views: "24.5만",
		viewCount: 245000,
	},
	{
		src: "/images/shortform/shortform-6.png",
		alt: "몰래 녹음은 다 불법? — 23.6만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DZ_8ib2BkNf/",
		title: "몰래 녹음은 다 불법일까?",
		views: "23.6만",
		viewCount: 236000,
	},
	{
		src: "/images/shortform/shortform-1.png",
		alt: "월세 내고도 호구 되는 법 — 12.8만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DW3b0EQkz5z/",
		title: "월세 내고도 호구 되는 법",
		views: "12.8만",
		viewCount: 128000,
	},
	{
		src: "/images/shortform/shortform-7.png",
		alt: "변호사 선임할 때 믿으면 안 되는 '이 말' — 4.9만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DYO2MtHJPF6/",
		title: "변호사 선임할 때 믿으면 안 되는 '이 말'",
		views: "4.9만",
		viewCount: 49000,
	},
	{
		src: "/images/shortform/shortform-8.png",
		alt: "소액피해 대처법, 변호사인 내가 돈 떼였다면 — 2.9만 조회 변호사 릴스",
		href: "https://www.instagram.com/reel/DaCyC57NEI3/",
		title: "소액피해, 변호사인 내가 돈 떼였다면",
		views: "2.9만",
		viewCount: 29000,
	},
];

// 각 릴스의 VideoObject 구조화 데이터 — 조회수(interactionStatistic)로 AEO 신호 강화.
const videoSchema = {
	"@context": "https://schema.org",
	"@graph": REELS.map((r) => ({
		"@type": "VideoObject",
		name: r.title,
		description: `${r.title} — 온세상이마케팅이다(온케팅)가 직접 기획·촬영·편집해 운영한 변호사 법률 숏폼 릴스입니다.`,
		thumbnailUrl: `${siteConfig.url}${r.src}`,
		contentUrl: r.href,
		embedUrl: r.href,
		inLanguage: "ko-KR",
		interactionStatistic: {
			"@type": "InteractionCounter",
			interactionType: "https://schema.org/WatchAction",
			userInteractionCount: r.viewCount,
		},
		publisher: { "@id": `${siteConfig.url}/#organization` },
	})),
};

export const ShortformPortfolio = () => {
	const ref = useRef<HTMLDivElement>(null);
	// 스크롤로 진입할 때마다 다시 재생 (once: false)
	const inView = useInView(ref, { margin: "-80px" });

	return (
		<section className="bg-white px-4 py-20 md:py-28">
			<script type="application/ld+json">{JSON.stringify(videoSchema)}</script>

			<div ref={ref} className="mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					className="mb-12 text-center md:mb-16"
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
					transition={{ duration: 0.7, ease }}
				>
					<p className="mb-3 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.25em]">
						포트폴리오
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						조회수로 <span className="gradient-text">증명합니다</span>
					</h2>
					<p className="mx-auto mt-3 max-w-xl break-keep text-base text-slate-500 leading-relaxed">
						변호사·법률 분야 숏폼(릴스·쇼츠)을 직접 기획·촬영·편집해 운영한 결과입니다. 썸네일을
						누르면 인스타그램 원본으로 이동합니다.
					</p>
				</motion.div>

				{/* Reel grid */}
				<motion.div
					className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				>
					{REELS.map((reel, i) => (
						<motion.a
							key={reel.src}
							href={reel.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${reel.title} — 인스타그램에서 보기 (조회수 ${reel.views})`}
							className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(15,23,42,0.16)]"
							variants={{
								hidden: { opacity: 0, y: 56, scale: 0.85, rotate: i % 2 === 0 ? -5 : 5 },
								show: {
									opacity: 1,
									y: 0,
									scale: 1,
									rotate: 0,
									transition: { type: "spring", stiffness: 130, damping: 16 },
								},
							}}
							whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25, ease } }}
						>
							<div className="relative overflow-hidden bg-slate-100">
								<Image
									src={reel.src}
									alt={reel.alt}
									width={332}
									height={516}
									sizes="(max-width: 768px) 50vw, 25vw"
									className="h-auto w-full transition-transform duration-700 group-hover:scale-110"
								/>
								{/* 호버 — 어둡게 + 재생 버튼 */}
								<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="flex h-14 w-14 scale-50 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
										<Play className="h-6 w-6 translate-x-0.5 fill-[#0a0a0a] text-[#0a0a0a]" />
									</div>
								</div>
								{/* 인스타그램 배지 */}
								<span className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors group-hover:bg-[#16a34a]">
									<Instagram className="h-4 w-4" />
								</span>
							</div>
							{/* 텍스트 캡션 — 크롤러·답변엔진이 읽는 제목·조회수 */}
							<div className="px-3 py-3">
								<p className="line-clamp-2 break-keep font-semibold text-foreground text-sm leading-snug">
									{reel.title}
								</p>
								<p className="mt-1 text-slate-400 text-xs">조회수 {reel.views}</p>
							</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
};
