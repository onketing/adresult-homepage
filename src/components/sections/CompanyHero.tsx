"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// 회사소개 하위 페이지 공용 히어로 — 영상 배경 + "Company introduction"
export const CompanyHero = ({ videoSrc = "/home-hero-video.mp4" }: { videoSrc?: string }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	// 브라우저 자동재생 정책상 초기엔 반드시 음소거 상태여야 한다.
	useEffect(() => {
		if (videoRef.current) videoRef.current.muted = true;
	}, []);

	const toggleMuted = () => {
		const v = videoRef.current;
		if (!v) return;
		const next = !muted;
		v.muted = next;
		// 소리를 켤 때 정지 상태면 재생(사용자 제스처라 오디오 허용됨)
		if (!next) v.play().catch(() => {});
		setMuted(next);
	};

	return (
		<section className="relative h-[calc(100svh-64px)] min-h-[420px] w-full overflow-hidden bg-[#0b1220] pt-16 md:h-[calc(100svh-65px)] md:pt-20">
			<video
				ref={videoRef}
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
			>
				<source src={videoSrc} type="video/mp4" />
				<track kind="captions" />
			</video>

			{/* 가독성 스크림 */}
			<div className="absolute inset-0 bg-black/25" aria-hidden="true" />

			{/* 소리 켜기/끄기 — 우측 상단 */}
			<button
				type="button"
				onClick={toggleMuted}
				aria-label={muted ? "소리 켜기" : "소리 끄기"}
				aria-pressed={!muted}
				className="absolute top-20 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 md:top-24 md:right-8"
			>
				{muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
			</button>

			{/* 텍스트 */}
			<div className="absolute inset-0 z-10 flex items-center">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-8">
					<h1 className="font-extrabold text-4xl text-white leading-[1.1] tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl lg:text-7xl">
						Company
						<br />
						introduction
					</h1>
					<p className="mt-4 font-bold text-white/90 text-xl md:text-2xl">회사소개</p>
				</div>
			</div>
		</section>
	);
};
