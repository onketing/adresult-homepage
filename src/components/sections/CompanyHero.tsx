"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

// 회사소개 하위 페이지 공용 히어로 — 영상 배경 + "Company introduction"
export const CompanyHero = ({ videoSrc = "/home-hero-video.mp4" }: { videoSrc?: string }) => {
	// LCP 대비 히어로 poster를 우선순위로 프리로드
	preload(videoSrc.replace(/\.mp4$/, "-poster.jpg"), { as: "image", fetchPriority: "high" });
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	// 자동재생 정책상 항상 음소거로 시작하되, 사용자가 켜둔 상태는 페이지 이동에도 유지한다.
	// effect 본문은 외부 시스템(video)만 갱신하고, muted 상태는 volumechange 콜백에서 동기화한다.
	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;
		const sync = () => setMuted(v.muted);
		v.addEventListener("volumechange", sync);
		// 이전에 소리를 켜뒀으면 복원. 자동재생 정책으로 막히면 다시 음소거로 폴백.
		v.muted = localStorage.getItem("heroSound") !== "on";
		if (!v.muted) {
			v.play().catch(() => {
				v.muted = true;
			});
		}
		return () => v.removeEventListener("volumechange", sync);
	}, []);

	const toggleMuted = () => {
		const v = videoRef.current;
		if (!v) return;
		const next = !v.muted;
		v.muted = next; // volumechange 이벤트가 muted 상태를 동기화한다
		// 소리를 켤 때 정지 상태면 재생(사용자 제스처라 오디오 허용됨)
		if (!next) v.play().catch(() => {});
		localStorage.setItem("heroSound", next ? "off" : "on");
	};

	return (
		<section className="relative h-[calc(100svh-64px)] min-h-[420px] w-full overflow-hidden bg-[#0B0B0B] pt-16 md:h-[calc(100svh-65px)] md:pt-20">
			<video
				ref={videoRef}
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				poster={videoSrc.replace(/\.mp4$/, "-poster.jpg")}
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
