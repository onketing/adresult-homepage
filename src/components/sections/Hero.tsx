"use client";

import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
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
		<section className="relative w-full overflow-hidden bg-[#0b1220] pt-16 md:flex md:min-h-screen md:items-center md:justify-center md:pt-0">
			{/* 모바일: 헤더 아래 16:9 블록 / 데스크톱: 풀스크린 풀블리드 */}
			<div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
				<video
					ref={videoRef}
					className="absolute inset-0 h-full w-full object-contain"
					autoPlay
					loop
					playsInline
					preload="auto"
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
