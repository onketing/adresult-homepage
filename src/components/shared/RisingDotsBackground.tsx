"use client";

import { useEffect, useRef } from "react";

// 아래에서 위로 떠오르며 쌓이는 입자 — "누적/상승" 모티프
// 의존성 0, prefers-reduced-motion 대응. 밝은/어두운 배경 모두 사용

type Particle = {
	x: number;
	y: number;
	r: number;
	vy: number;
	swayAmp: number;
	swaySpeed: number;
	phase: number;
	life: number;
	maxLife: number;
	colorIdx: number;
	baseAlpha: number;
};

const COLORS = ["239, 60, 57", "45, 212, 191", "252, 165, 165", "255, 255, 255"];

export const RisingDotsBackground = ({ className }: { className?: string }) => {
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
		const MO = reduce ? 0.45 : 1; // 상승·흔들림 속도 배수
		const DENSITY = reduce ? 0.6 : 1; // 입자 수 배수

		let width = 0;
		let height = 0;
		let dpr = 1;
		let particles: Particle[] = [];
		let raf = 0;
		let running = false;
		let onScreen = true;
		let tabVisible = true;

		const makeParticle = (atBottom: boolean): Particle => {
			const maxLife = 320 + Math.random() * 320;
			return {
				x: Math.random() * width,
				y: atBottom ? height + Math.random() * 40 : Math.random() * height,
				r: Math.random() * 2.2 + 0.8,
				vy: 0.25 + Math.random() * 0.55,
				swayAmp: Math.random() * 18 + 6,
				swaySpeed: Math.random() * 0.015 + 0.005,
				phase: Math.random() * Math.PI * 2,
				life: atBottom ? 0 : Math.random() * maxLife,
				maxLife,
				colorIdx: Math.floor(Math.random() * COLORS.length),
				baseAlpha: Math.random() * 0.4 + 0.25,
			};
		};

		const build = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.round(
				Math.min(120, Math.max(40, Math.floor((width * height) / 14000))) * DENSITY,
			);
			particles = Array.from({ length: count }, () => makeParticle(false));
		};

		const draw = () => {
			ctx.clearRect(0, 0, width, height);

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.y -= p.vy * MO;
				p.phase += p.swaySpeed * MO;
				p.life += MO;
				const drawX = p.x + Math.sin(p.phase) * p.swayAmp;

				// 페이드 인/아웃
				const t = p.life / p.maxLife;
				let env = 1;
				if (t < 0.15) env = t / 0.15;
				else if (t > 0.7) env = (1 - t) / 0.3;
				const alpha = Math.max(0, p.baseAlpha * env);
				const col = COLORS[p.colorIdx];

				// 글로우
				const g = ctx.createRadialGradient(drawX, p.y, 0, drawX, p.y, p.r * 4);
				g.addColorStop(0, `rgba(${col}, ${alpha * 0.5})`);
				g.addColorStop(1, `rgba(${col}, 0)`);
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.arc(drawX, p.y, p.r * 4, 0, Math.PI * 2);
				ctx.fill();

				// 코어
				ctx.fillStyle = `rgba(${col}, ${alpha})`;
				ctx.beginPath();
				ctx.arc(drawX, p.y, p.r, 0, Math.PI * 2);
				ctx.fill();

				// 수명 끝 또는 화면 위로 → 바닥에서 재생성
				if (p.life >= p.maxLife || p.y < -10) {
					particles[i] = makeParticle(true);
				}
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
