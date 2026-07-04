"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { ADRESULT_REVIEWS } from "@/data/adresult-reviews";

const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const ReviewVideos = () => {
	return (
		<section className="overflow-hidden bg-white py-16 md:py-32">
			{/* 헤더 */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-7xl px-4 md:mb-16 md:px-8">
					<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						애드리절트 고객사 <span className="text-[#ef3c39]">의사들의 리얼 병원마케팅 후기</span>
					</h2>
					<p className="mt-5 break-keep text-lg text-slate-600 leading-relaxed md:text-xl">
						애드리절트 병원마케팅에 대한 의사들의 진심, 아래 영상으로 확인하세요.
					</p>
				</div>
			</Reveal>

			{/* 자동 회전 캐러셀 */}
			<div className="mask-[linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
				<Marquee speed={45} gradient={false} autoFill>
					{ADRESULT_REVIEWS.map((review) => (
						<a
							key={review.videoId}
							href={watchUrl(review.videoId)}
							target="_blank"
							rel="noopener noreferrer"
							className="group mr-6 block w-[280px] shrink-0 md:w-[340px]"
						>
							<div className="relative aspect-[5/7] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_rgba(239,60,57,0.2)]">
								<Image
									src={review.image}
									alt={`${review.author} 후기 영상`}
									fill
									sizes="(max-width: 768px) 280px, 340px"
									className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								/>
								<div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
									<span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm transition-colors group-hover:bg-[#ef3c39]">
										<Play
											className="ml-0.5 h-7 w-7 fill-[#0a0a0a] text-[#0a0a0a] transition-colors group-hover:fill-white group-hover:text-white"
											aria-hidden="true"
										/>
									</span>
								</div>
							</div>
							<p className="mt-5 break-keep text-center font-bold text-[#0a0a0a] text-lg leading-snug md:text-xl">
								&ldquo;{review.quote}&rdquo;
							</p>
							<p className="mt-1.5 text-center text-slate-500 text-sm md:text-base">
								-{review.author}
							</p>
						</a>
					))}
				</Marquee>
			</div>
		</section>
	);
};
