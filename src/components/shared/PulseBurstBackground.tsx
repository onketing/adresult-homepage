"use client";

import { useEffect, useRef } from "react";

// 중심에서 퍼지는 펄스 리플 + 바깥으로 튀는 스파크 — "터지다/폭발 직전" 모티프
// 의존성 0, prefers-reduced-motion 대응. 어두운 배경 권장

type Ring = { r: number; life: number; maxLife: number; lineWidth: number };
type Spark = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	life: number;
	maxLife: number;
	size: number;
};

const GREEN = "239, 60, 57";

export const PulseBurstBackground = ({ className }: { className?: string }) => {
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
		const MO = reduce ? 0.4 : 1; // 링 확산 속도 배수 (스파크는 reduce 시 생략)

		let width = 0;
		let height = 0;
		let dpr = 1;
		let tick = 0;
		let cx = 0;
		let cy = 0;
		let maxR = 0;
		const rings: Ring[] = [];
		const sparks: Spark[] = [];
		let nextRing = 0;
		let nextSpark = 30;
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
			cx = width / 2;
			cy = height / 2;
			maxR = Math.hypot(width, height) / 2;
		};

		const draw = () => {
			tick++;
			ctx.clearRect(0, 0, width, height);

			// 중심 글로우 맥동
			const pulse = Math.sin(tick * 0.03) * 0.5 + 0.5;
			const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.6);
			cg.addColorStop(0, `rgba(${GREEN}, ${0.05 + pulse * 0.05})`);
			cg.addColorStop(1, `rgba(${GREEN}, 0)`);
			ctx.fillStyle = cg;
			ctx.fillRect(0, 0, width, height);

			// 리플 링 스폰
			if (tick >= nextRing) {
				rings.push({ r: 0, life: 0, maxLife: 160, lineWidth: 1.5 });
				nextRing = tick + 90;
			}

			for (let i = rings.length - 1; i >= 0; i--) {
				const ring = rings[i];
				ring.life += MO;
				ring.r = (ring.life / ring.maxLife) * maxR;
				const fade = 1 - ring.life / ring.maxLife;
				ctx.strokeStyle = `rgba(${GREEN}, ${fade * 0.28})`;
				ctx.lineWidth = ring.lineWidth;
				ctx.beginPath();
				ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
				ctx.stroke();
				if (ring.life >= ring.maxLife) rings.splice(i, 1);
			}

			// 스파크 스폰 (바깥으로 튀는 점)
			if (!reduce && tick >= nextSpark) {
				const angle = Math.random() * Math.PI * 2;
				const speed = 1.4 + Math.random() * 2;
				sparks.push({
					x: cx,
					y: cy,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					life: 0,
					maxLife: 70 + Math.floor(Math.random() * 50),
					size: Math.random() * 1.6 + 0.8,
				});
				nextSpark = tick + 14 + Math.floor(Math.random() * 26);
			}

			for (let i = sparks.length - 1; i >= 0; i--) {
				const s = sparks[i];
				if (!reduce) {
					s.x += s.vx;
					s.y += s.vy;
					s.life++;
				}
				const fade = 1 - s.life / s.maxLife;
				const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
				g.addColorStop(0, `rgba(${GREEN}, ${fade * 0.85})`);
				g.addColorStop(1, `rgba(${GREEN}, 0)`);
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
				ctx.fill();
				if (s.life >= s.maxLife) sparks.splice(i, 1);
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
