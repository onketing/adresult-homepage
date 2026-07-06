"use client";

import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

export const Hero = () => {
	// LCP 요소인 히어로 poster를 우선순위로 프리로드 (영상 다운로드보다 먼저 페인트)
	preload("/home-hero-video-poster.jpg", { as: "image", fetchPriority: "high" });
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);
	const [showHint, setShowHint] = useState(true);

	// 브라우저 정책상 "소리 있는 자동재생"은 사용자 동작이 있어야만 허용된다.
	// 1) 진입 즉시 소리와 함께 재생을 먼저 시도 — 다른 페이지에서 클릭으로 넘어온 경우(활성화 유지)엔 바로 소리가 난다.
	// 2) 막히면 음소거로 재생하고, 첫 클릭/탭/키 입력에서 소리를 켠다.
	//    (scroll·wheel은 브라우저가 '사용자 동작'으로 인정하지 않아 unmute가 거부되므로 제외한다)
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const events: (keyof WindowEventMap)[] = ["pointerdown", "touchstart", "keydown"];

		const removeListeners = () => {
			for (const e of events) window.removeEventListener(e, onInteract);
		};

		// 소리와 함께 재생 시도 → 성공 시 true. 차단되면 음소거로 재생 유지하고 false.
		const enableSound = () => {
			video.muted = false;
			return video
				.play()
				.then(() => {
					if (video.muted) return false; // 브라우저가 강제 음소거함
					setMuted(false);
					setShowHint(false);
					return true;
				})
				.catch(() => {
					video.muted = true;
					video.play().catch(() => {}); // 영상은 멈추지 않게 음소거로 계속
					return false;
				});
		};

		const onInteract = () => {
			if (!video.muted) {
				removeListeners();
				return;
			}
			void enableSound().then((ok) => {
				if (ok) removeListeners();
			});
		};

		// 진입 즉시 소리와 함께 시도 (막히면 내부에서 음소거 재생으로 폴백)
		void enableSound();

		for (const e of events) {
			window.addEventListener(e, onInteract, { passive: true });
		}

		// 안내 문구 자동 숨김 (소리가 켜지면 enableSound에서 이미 숨김 처리)
		const hintTimer = window.setTimeout(() => setShowHint(false), 6000);

		return () => {
			window.clearTimeout(hintTimer);
			removeListeners();
		};
	}, []);

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;

		setShowHint(false);
		const next = !video.muted;
		video.muted = next;
		setMuted(next);
		if (!next) video.play().catch(() => {});
	};

	return (
		<section className="relative w-full overflow-hidden bg-[#0B0B0B] pt-16 md:flex md:min-h-screen md:items-center md:justify-center md:pt-0">
			{/* 모바일: 헤더 아래 16:9 블록 / 데스크톱: 풀스크린 풀블리드 */}
			<div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
				<video
					ref={videoRef}
					className="absolute inset-0 h-full w-full object-cover"
					autoPlay
					loop
					playsInline
					preload="metadata"
					poster="/home-hero-video-poster.jpg"
					onEnded={(e) => {
						// loop 속성이 동작하지 않는 브라우저 대비 — 끝나면 처음으로 되감아 재생
						const v = e.currentTarget;
						v.currentTime = 0;
						void v.play();
					}}
				>
					{/* H.264 1080p — 전 브라우저 호환 */}
					<source src="/home-hero-video.mp4" type="video/mp4" />
					<track kind="captions" />
				</video>

				{/* 좌측 중앙 텍스트 오버레이 */}
				<div className="pointer-events-none absolute inset-0 z-20 flex items-center">
					<div className="px-5 sm:px-8 md:px-16 lg:px-24">
						<p className="mb-4 hidden font-mono text-white/60 text-xs tracking-[0.16em] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:block">
							ADRESULT MAPO — 본사 직영
						</p>
						<h1 className="font-extrabold text-2xl text-white leading-[1.2] tracking-[-0.02em] [text-shadow:0_2px_18px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-6xl">
							결과로 말하는 회사
							<br />
							애드리절트
						</h1>
						<p className="mt-4 hidden max-w-xl text-base text-white/85 leading-[1.8] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:block md:text-lg">
							마포지사 — 본사의 병원마케팅 시스템으로,
							<br />
							병원 상황에 맞는 채널 조합을 설계합니다.
						</p>
						<div className="pointer-events-auto mt-6 hidden flex-wrap gap-3 md:flex">
							<Link
								href="/contact"
								className="whitespace-nowrap bg-[#C8102E] px-7 py-3.5 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
							>
								병원 마케팅 진단받기
							</Link>
							<Link
								href="/#products"
								className="whitespace-nowrap border border-white/40 bg-black/20 px-7 py-3.5 font-semibold text-[15px] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/40"
							>
								우리 병원에 맞는 상품 보기
							</Link>
							<Link
								href="/cases"
								className="whitespace-nowrap border border-white/40 bg-black/20 px-7 py-3.5 font-semibold text-[15px] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/40"
							>
								성공사례 보기
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* 모바일 전용 서브카피 + CTA (영상 아래) */}
			<div className="relative z-20 px-5 pt-6 pb-8 md:hidden">
				<p className="break-keep text-sm text-white/80 leading-[1.8]">
					마포지사 — 본사의 병원마케팅 시스템으로, 병원 상황에 맞는{" "}
					<strong className="font-bold text-white">채널 조합</strong>을 설계합니다.
				</p>
				<p className="mt-2.5 font-semibold text-white/70 text-xs">
					우리 병원에 지금 필요한 마케팅만 먼저 진단받아보세요.
				</p>
				<div className="mt-5 flex flex-col gap-2.5">
					<Link
						href="/contact"
						className="bg-[#C8102E] px-6 py-3.5 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
					>
						병원 마케팅 진단받기
					</Link>
					<div className="grid grid-cols-2 gap-2.5">
						<Link
							href="/#products"
							className="border border-white/30 px-4 py-3 text-center font-semibold text-sm text-white"
						>
							맞는 상품 보기
						</Link>
						<Link
							href="/cases"
							className="border border-white/30 px-4 py-3 text-center font-semibold text-sm text-white"
						>
							성공사례 보기
						</Link>
					</div>
				</div>
			</div>

			{/* 상단 스크림 — 헤더(흰 글자) 가독성 (데스크톱 풀스크린 전용) */}
			<div
				className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 bg-[linear-gradient(180deg,rgba(11,18,32,0.55)_0%,rgba(11,18,32,0)_100%)] md:block"
				aria-hidden="true"
			/>

			{/* 하단 비네팅 — 컨트롤 가독성 (데스크톱 풀스크린 전용) */}
			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-[linear-gradient(180deg,rgba(11,18,32,0)_0%,rgba(11,18,32,0.55)_100%)] md:block"
				aria-hidden="true"
			/>

			{/* 소리 재생 힌트 — 첫 진입 시 살짝, 소리 켜지면 사라짐 */}
			<AnimatePresence>
				{showHint && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96 }}
						transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
						className="pointer-events-none absolute top-20 left-1/2 z-30 -translate-x-1/2 md:top-28"
						aria-hidden="true"
					>
						<motion.div
							animate={{ opacity: [1, 0.55, 1] }}
							transition={{
								duration: 2.4,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
							className="flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
						>
							<Volume2 className="h-4 w-4" />
							<span className="font-medium">화면을 클릭하면 소리가 재생됩니다</span>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* 음소거 토글 버튼 */}
			<button
				type="button"
				onClick={toggleMute}
				aria-label={muted ? "소리 켜기" : "소리 끄기"}
				className="absolute top-18 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 md:top-24 md:right-8"
			>
				{muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
			</button>
		</section>
	);
};
