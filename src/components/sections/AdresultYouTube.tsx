"use client";

import { ArrowUpRight, Play, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import {
	ADRESULT_FEATURED_VIDEO,
	ADRESULT_VIDEOS,
	ADRESULT_YOUTUBE_CHANNEL,
} from "@/data/adresult-youtube";

const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const thumbUrl = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
// maxres가 없는 영상 대비 폴백 (mqdefault는 항상 존재하며 16:9 풀프레임)
const thumbFallback = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

const VideoCard = ({ id }: { id: string }) => {
	const [src, setSrc] = useState(thumbUrl(id));

	return (
		<a
			href={watchUrl(id)}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative block overflow-hidden rounded-xl shadow-sm ring-1 ring-[#ef3c39]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(239,60,57,0.18)] hover:ring-[#ef3c39]"
		>
			<div className="relative aspect-video bg-slate-100">
				<Image
					src={src}
					alt="애드리절트 고객사 병원마케팅 후기 영상"
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
					onError={() => setSrc(thumbFallback(id))}
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors group-hover:bg-black/10">
					<span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition-colors group-hover:bg-[#ef3c39]">
						<Play className="ml-0.5 h-6 w-6 fill-white text-white" aria-hidden="true" />
					</span>
				</div>
			</div>
		</a>
	);
};

export const AdresultYouTube = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-32">
			<div className="mx-auto max-w-6xl">
				{/* 헤더 */}
				<Reveal>
					<div className="mb-12 md:mb-16">
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							ADRESULT YOUTUBE
						</p>
						<h2 className="break-keep font-extrabold text-4xl text-[#0a0a0a] leading-[1.15] tracking-tight md:text-6xl">
							우리는 당신의 <span className="text-[#ef3c39]">마지막 병원마케팅 회사</span>
							입니다.
						</h2>
						<p className="mt-5 break-keep text-lg text-slate-600 leading-relaxed md:text-xl">
							고객사의 성장을 위해 최선을 다하는 애드리절트, 의사들이 검증해 주셨습니다. 클릭 후
							확인하세요.
						</p>
					</div>
				</Reveal>

				{/* 후기 영상 그리드 */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
					{ADRESULT_VIDEOS.map((id, i) => (
						<Reveal key={id} delay={(i % 3) * 0.08} direction="up">
							<VideoCard id={id} />
						</Reveal>
					))}
				</div>

				{/* 채널 CTA */}
				<Reveal className="mt-20 text-center md:mt-24">
					<p className="break-keep font-bold text-[#0a0a0a] text-xl md:text-2xl">
						국내 최다! <span className="text-[#ef3c39]">500여 개</span>의 병원마케팅 노하우 보유!
					</p>
					<p className="mt-2.5 text-base text-slate-600 md:text-lg">애드리절트TV에서 만나보세요.</p>
					<a
						href={ADRESULT_YOUTUBE_CHANNEL}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#ef3c39] px-7 py-4 font-bold text-base text-white shadow-[0_10px_30px_rgba(239,60,57,0.35)] transition-all hover:scale-[1.03] hover:bg-[#e11d29] md:text-lg"
					>
						<Youtube className="h-5 w-5" aria-hidden="true" />
						병원마케팅 주치의 애드리절트TV - @adresult
					</a>
				</Reveal>

				{/* 대표 영상 크게 임베드 */}
				<Reveal className="mt-16 md:mt-20">
					<div className="mx-auto max-w-5xl rounded-2xl bg-[#ef3c39] p-1.5 shadow-[0_24px_60px_rgba(239,60,57,0.25)]">
						<div className="relative aspect-video overflow-hidden rounded-xl bg-black">
							<iframe
								className="absolute inset-0 h-full w-full"
								src={`https://www.youtube.com/embed/${ADRESULT_FEATURED_VIDEO}`}
								title="애드리절트 병원마케팅 대표 영상"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
								loading="lazy"
							/>
						</div>
					</div>
				</Reveal>

				{/* 채널 링크 */}
				<Reveal className="mt-10 text-center">
					<a
						href={ADRESULT_YOUTUBE_CHANNEL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 font-semibold text-[#ef3c39] text-base transition-colors hover:text-[#b3121e]"
					>
						애드리절트TV에서 더 많은 후기 보기
						<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
					</a>
				</Reveal>
			</div>
		</section>
	);
};
