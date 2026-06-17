"use client";

import { useEffect, useRef } from "react";

// 오디오 웨이브폼 + 이퀄라이저 — 숏폼(영상·사운드) 모티프
// 의존성 0, prefers-reduced-motion 대응. 밝은/어두운 배경 모두 사용 (밝은 스트로크 색)

type WaveDef = {
	amp: number; // 진폭 비율 (height 기준)
	freq: number; // 파장
	speed: number; // 위상 속도
	yRatio: number; // 세로 위치 비율
	color: string; // rgb
	alpha: number;
	width: number;
};

const WAVES: WaveDef[] = [
	{
		amp: 0.06,
		freq: 0.006,
		speed: 0.018,
		yRatio: 0.4,
		color: "88, 214, 141",
		alpha: 0.32,
		width: 2,
	},
	{
		amp: 0.05,
		freq: 0.009,
		speed: -0.024,
		yRatio: 0.52,
		color: "45, 212, 191",
		alpha: 0.24,
		width: 1.5,
	},
	{
		amp: 0.045,
		freq: 0.013,
		speed: 0.03,
		yRatio: 0.62,
		color: "129, 140, 248",
		alpha: 0.18,
		width: 1.5,
	},
];

const GREEN = "88, 214, 141";

export const WaveformBackground = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduce =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		// reduce-motion이어도 정지시키지 않고 모션을 약화해 계속 재생 (Windows 기본값 대응)
		const MO = reduce ? 0.4 : 1; // 웨이브·이퀄라이저 속도 배수

		let width = 0;
		let height = 0;
		let dpr = 1;
		let tick = 0;
		let bars = 0;
		let raf = 0;
		let running = false;
		let onScreen = true;
		let tabVisible = true;

		const build = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			bars = Math.max(24, Math.floor(width / 26));
		};

		const draw = () => {
			tick++;
			ctx.clearRect(0, 0, width, height);

			// ── 1. 흐르는 웨이브폼 라인 ──
			for (const w of WAVES) {
				const baseY = height * w.yRatio;
				const amp = height * w.amp;
				const phase = tick * w.speed * MO;
				ctx.strokeStyle = `rgba(${w.color}, ${w.alpha})`;
				ctx.lineWidth = w.width;
				ctx.beginPath();
				for (let x = 0; x <= width; x += 6) {
					// 가장자리로 갈수록 진폭 감쇠 (중앙 집중)
					const env = Math.sin((x / width) * Math.PI);
					const y = baseY + Math.sin(x * w.freq + phase) * amp * env;
					if (x === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}

			// ── 2. 하단 이퀄라이저 바 ──
			const gap = width / bars;
			const barW = gap * 0.42;
			const maxH = height * 0.16;
			const floorY = height * 0.92;
			for (let i = 0; i < bars; i++) {
				const x = i * gap + (gap - barW) / 2;
				// 막대마다 위상을 어긋나게 → 리듬감
				const wobble = Math.sin(tick * 0.05 * MO + i * 0.6) * 0.5 + 0.5;
				const wobble2 = Math.sin(tick * 0.09 * MO + i * 0.27) * 0.5 + 0.5;
				const h = maxH * (0.18 + wobble * 0.6 + wobble2 * 0.22);
				const g = ctx.createLinearGradient(0, floorY - h, 0, floorY);
				g.addColorStop(0, `rgba(${GREEN}, 0)`);
				g.addColorStop(1, `rgba(${GREEN}, 0.22)`);
				ctx.fillStyle = g;
				const r = barW / 2;
				const y = floorY - h;
				ctx.beginPath();
				ctx.moveTo(x, floorY);
				ctx.lineTo(x, y + r);
				ctx.quadraticCurveTo(x, y, x + r, y);
				ctx.lineTo(x + barW - r, y);
				ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
				ctx.lineTo(x + barW, floorY);
				ctx.closePath();
				ctx.fill();
			}

			if (running) raf = requestAnimationFrame(draw);
		};

		const start = () => {
			if (running || !onScreen || !tabVisible) return;
			running = true;
			raf = requestAnimationFrame(draw);
		};
		const stop = () => {
			running = false;
			cancelAnimationFrame(raf);
		};

		const onResize = () => {
			build();
		};
		const onVisibility = () => {
			tabVisible = document.visibilityState === "visible";
			if (tabVisible) start();
			else stop();
		};

		const io = new IntersectionObserver(
			([entry]) => {
				onScreen = entry.isIntersecting;
				if (onScreen) start();
				else stop();
			},
			{ threshold: 0 },
		);

		build();
		start();
		io.observe(canvas);
		window.addEventListener("resize", onResize);
		document.addEventListener("visibilitychange", onVisibility);

		return () => {
			stop();
			io.disconnect();
			window.removeEventListener("resize", onResize);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
		/>
	);
};
