"use client";

import { useEffect, useRef } from "react";

// 별 필드 + 성운 + 유성 + 회전 허브 + 반짝임 십자
// 의존성 0, prefers-reduced-motion 대응

type Node = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	r: number;
	pulse: number;
	pulseSpeed: number;
	hubLinked: boolean;
};

type Star = {
	x: number;
	y: number;
	r: number;
	baseOpacity: number;
	phase: number;
	twinkleSpeed: number;
	colorIdx: number;
	sparkle: boolean; // 십자 광선 여부
};

type ShootingStar = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	opacity: number;
	life: number;
	maxLife: number;
};

const GREEN = "88, 214, 141";

const STAR_COLORS = [
	"255, 255, 255", // 흰색
	"186, 230, 253", // 하늘
	"196, 181, 253", // 연보라
	"167, 243, 208", // 에메랄드
	"253, 230, 138", // 따뜻한 노란별
];

// 성운 정의 (위치는 비율, 애니메이션은 tick으로 맥동)
const NEBULA_DEF = [
	{ cx: 0.08, cy: 0.12, rBase: 360, color: [88, 214, 141], alpha: 0.08 },
	{ cx: 0.88, cy: 0.82, rBase: 430, color: [139, 92, 246], alpha: 0.09 },
	{ cx: 0.62, cy: 0.22, rBase: 290, color: [6, 182, 212], alpha: 0.07 },
	{ cx: 0.25, cy: 0.72, rBase: 330, color: [99, 102, 241], alpha: 0.07 },
	{ cx: 0.5, cy: 0.5, rBase: 200, color: [88, 214, 141], alpha: 0.04 }, // 중앙 미세 글로우
];

export const ConstellationBackground = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const reduce =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		let width = 0;
		let height = 0;
		let dpr = 1;
		let nodes: Node[] = [];
		let stars: Star[] = [];
		const shootingStars: ShootingStar[] = [];
		let tick = 0;
		let nextShoot = 180;
		const mouse = { x: 0, y: 0, active: false };
		let raf = 0;
		let running = false;
		let onScreen = true;
		let tabVisible = true;

		const LINK_DIST = 160;
		const HUB_DIST = 340;

		const build = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			mouse.x = width / 2;
			mouse.y = height / 2;

			const count = Math.min(88, Math.max(36, Math.floor((width * height) / 18000)));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.28,
				vy: (Math.random() - 0.5) * 0.28,
				r: Math.random() * 1.8 + 0.8,
				pulse: Math.random(),
				pulseSpeed: Math.random() * 0.004 + 0.002,
				hubLinked: false,
			}));

			const starCount = Math.min(280, Math.max(140, Math.floor((width * height) / 6500)));
			stars = Array.from({ length: starCount }, () => {
				const r = Math.random() * 1.8 + 0.15;
				return {
					x: Math.random() * width,
					y: Math.random() * height,
					r,
					baseOpacity: Math.random() * 0.5 + 0.12,
					phase: Math.random() * Math.PI * 2,
					twinkleSpeed: Math.random() < 0.6 ? Math.random() * 0.011 + 0.003 : 0,
					colorIdx: Math.floor(Math.random() * STAR_COLORS.length),
					sparkle: r > 1.3 && Math.random() < 0.3, // 큰 별의 30%만
				};
			});
		};

		const spawnShootingStar = () => {
			const fromTop = Math.random() < 0.55;
			const sx = fromTop ? Math.random() * width * 0.85 : -(20 + Math.random() * 50);
			const sy = fromTop ? -(20 + Math.random() * 30) : Math.random() * height * 0.45;
			const angle = 0.62 + (Math.random() - 0.5) * 0.45;
			const speed = 8 + Math.random() * 6;
			shootingStars.push({
				x: sx,
				y: sy,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				opacity: 0.75 + Math.random() * 0.25,
				life: 0,
				maxLife: 45 + Math.floor(Math.random() * 45),
			});
		};

		const draw = () => {
			tick++;
			const hubX = width / 2;
			const hubY = height * 0.46;
			const px = mouse.active ? (mouse.x - width / 2) * 0.025 : 0;
			const py = mouse.active ? (mouse.y - height / 2) * 0.025 : 0;
			// 성운 맥동 — 약 52초 주기
			const nebPulse = Math.sin(tick * 0.0022) * 0.14 + 1; // 0.86 ~ 1.14

			ctx.clearRect(0, 0, width, height);

			// ── 1. 성운 네뷸라 (맥동) ──
			for (const n of NEBULA_DEF) {
				const cx = n.cx * width;
				const cy = n.cy * height;
				const r = n.rBase * nebPulse;
				const [r2, g, b] = n.color;
				const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
				g2.addColorStop(0, `rgba(${r2},${g},${b},${n.alpha * nebPulse})`);
				g2.addColorStop(0.5, `rgba(${r2},${g},${b},${n.alpha * 0.3})`);
				g2.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = g2;
				ctx.beginPath();
				ctx.arc(cx, cy, r, 0, Math.PI * 2);
				ctx.fill();
			}

			// ── 2. 별 필드 + 십자 광선 ──
			for (const s of stars) {
				if (!reduce && s.twinkleSpeed > 0) s.phase += s.twinkleSpeed;
				const twinkle = s.twinkleSpeed > 0 ? Math.sin(s.phase) * 0.3 + 0.7 : 1;
				const alpha = s.baseOpacity * twinkle;
				const col = STAR_COLORS[s.colorIdx];

				// 십자 광선 (큰 별만)
				if (s.sparkle) {
					const crossLen = s.r * 5.5;
					ctx.strokeStyle = `rgba(${col}, ${alpha * 0.3})`;
					ctx.lineWidth = 0.5;
					ctx.beginPath();
					ctx.moveTo(s.x - crossLen, s.y);
					ctx.lineTo(s.x + crossLen, s.y);
					ctx.moveTo(s.x, s.y - crossLen);
					ctx.lineTo(s.x, s.y + crossLen);
					ctx.stroke();
					// 대각 (더 짧고 흐릿)
					const diagLen = crossLen * 0.55;
					ctx.strokeStyle = `rgba(${col}, ${alpha * 0.14})`;
					ctx.beginPath();
					ctx.moveTo(s.x - diagLen, s.y - diagLen);
					ctx.lineTo(s.x + diagLen, s.y + diagLen);
					ctx.moveTo(s.x + diagLen, s.y - diagLen);
					ctx.lineTo(s.x - diagLen, s.y + diagLen);
					ctx.stroke();
				}

				ctx.fillStyle = `rgba(${col}, ${alpha})`;
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				ctx.fill();
			}

			// ── 3. 노드 이동 + 허브 판정 ──
			for (const n of nodes) {
				if (!reduce) {
					n.x += n.vx;
					n.y += n.vy;
					if (n.x < 0) n.x = width;
					if (n.x > width) n.x = 0;
					if (n.y < 0) n.y = height;
					if (n.y > height) n.y = 0;
				}
				n.hubLinked = Math.hypot(n.x - hubX, n.y - hubY) < HUB_DIST;
			}

			// ── 4. 노드끼리 연결선 ──
			for (let i = 0; i < nodes.length; i++) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length; j++) {
					const b = nodes[j];
					const d = Math.hypot(a.x - b.x, a.y - b.y);
					if (d < LINK_DIST) {
						ctx.strokeStyle = `rgba(${GREEN}, ${(1 - d / LINK_DIST) * 0.22})`;
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(a.x + px, a.y + py);
						ctx.lineTo(b.x + px, b.y + py);
						ctx.stroke();
					}
				}
			}

			// ── 5. 허브 연결선 + 패킷 ──
			for (const n of nodes) {
				if (!n.hubLinked) continue;
				const d = Math.hypot(n.x - hubX, n.y - hubY);
				ctx.strokeStyle = `rgba(${GREEN}, ${(1 - d / HUB_DIST) * 0.45})`;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(n.x + px, n.y + py);
				ctx.lineTo(hubX + px, hubY + py);
				ctx.stroke();

				if (!reduce) {
					n.pulse += n.pulseSpeed;
					if (n.pulse > 1) n.pulse -= 1;
				}
				const t = n.pulse;
				ctx.fillStyle = `rgba(${GREEN}, ${(1 - t) * 0.75})`;
				ctx.beginPath();
				ctx.arc(n.x + (hubX - n.x) * t + px, n.y + (hubY - n.y) * t + py, 1.8, 0, Math.PI * 2);
				ctx.fill();
			}

			// ── 6. 노드 점 ──
			for (const n of nodes) {
				ctx.fillStyle = `rgba(${GREEN}, ${n.hubLinked ? 0.9 : 0.55})`;
				ctx.beginPath();
				ctx.arc(n.x + px, n.y + py, n.r, 0, Math.PI * 2);
				ctx.fill();
			}

			// ── 7. 허브 (강화 글로우 + 회전 링) ──
			const hx = hubX + px;
			const hy = hubY + py;

			// 최외곽 후광
			const outerG = ctx.createRadialGradient(hx, hy, 80, hx, hy, 260);
			outerG.addColorStop(0, `rgba(${GREEN}, 0.07)`);
			outerG.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = outerG;
			ctx.beginPath();
			ctx.arc(hx, hy, 260, 0, Math.PI * 2);
			ctx.fill();

			// 내부 코어
			const innerG = ctx.createRadialGradient(hx, hy, 0, hx, hy, 120);
			innerG.addColorStop(0, `rgba(${GREEN}, 0.65)`);
			innerG.addColorStop(0.3, `rgba(${GREEN}, 0.18)`);
			innerG.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = innerG;
			ctx.beginPath();
			ctx.arc(hx, hy, 120, 0, Math.PI * 2);
			ctx.fill();

			// 회전 점선 링
			if (!reduce) {
				ctx.save();
				ctx.translate(hx, hy);
				ctx.rotate(tick * 0.006);
				ctx.strokeStyle = `rgba(${GREEN}, 0.14)`;
				ctx.lineWidth = 1;
				ctx.setLineDash([6, 14]);
				ctx.beginPath();
				ctx.arc(0, 0, 68, 0, Math.PI * 2);
				ctx.stroke();
				ctx.setLineDash([]);
				ctx.restore();

				// 반대 방향 느린 링
				ctx.save();
				ctx.translate(hx, hy);
				ctx.rotate(-tick * 0.003);
				ctx.strokeStyle = `rgba(${GREEN}, 0.07)`;
				ctx.lineWidth = 1;
				ctx.setLineDash([3, 20]);
				ctx.beginPath();
				ctx.arc(0, 0, 90, 0, Math.PI * 2);
				ctx.stroke();
				ctx.setLineDash([]);
				ctx.restore();
			}

			// 허브 코어 점
			ctx.fillStyle = `rgba(${GREEN}, 0.95)`;
			ctx.beginPath();
			ctx.arc(hx, hy, 3.5, 0, Math.PI * 2);
			ctx.fill();

			// ── 8. 유성 ──
			if (!reduce) {
				if (tick >= nextShoot && shootingStars.length < 3) {
					spawnShootingStar();
					nextShoot = tick + 120 + Math.floor(Math.random() * 240);
				}

				for (let i = shootingStars.length - 1; i >= 0; i--) {
					const ss = shootingStars[i];
					ss.x += ss.vx;
					ss.y += ss.vy;
					ss.life++;

					const fade = 1 - ss.life / ss.maxLife;
					const alpha = ss.opacity * fade;
					const spd = Math.hypot(ss.vx, ss.vy);
					const tailLen = 80 + (ss.life / ss.maxLife) * 40;
					const tx = ss.x - (ss.vx / spd) * tailLen;
					const ty = ss.y - (ss.vy / spd) * tailLen;

					const g = ctx.createLinearGradient(tx, ty, ss.x, ss.y);
					g.addColorStop(0, "rgba(255,255,255,0)");
					g.addColorStop(0.5, `rgba(200,235,255,${alpha * 0.45})`);
					g.addColorStop(1, `rgba(255,255,255,${alpha})`);

					ctx.strokeStyle = g;
					ctx.lineWidth = 1.8;
					ctx.beginPath();
					ctx.moveTo(tx, ty);
					ctx.lineTo(ss.x, ss.y);
					ctx.stroke();

					// 유성 머리 글로우
					const hg = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 6);
					hg.addColorStop(0, `rgba(255,255,255,${alpha * 0.8})`);
					hg.addColorStop(1, "rgba(255,255,255,0)");
					ctx.fillStyle = hg;
					ctx.beginPath();
					ctx.arc(ss.x, ss.y, 6, 0, Math.PI * 2);
					ctx.fill();

					if (ss.life >= ss.maxLife || ss.x > width + 120 || ss.y > height + 120) {
						shootingStars.splice(i, 1);
					}
				}
			}

			if (!reduce && running) raf = requestAnimationFrame(draw);
		};

		const start = () => {
			if (reduce || running || !onScreen || !tabVisible) return;
			running = true;
			raf = requestAnimationFrame(draw);
		};
		const stop = () => {
			running = false;
			cancelAnimationFrame(raf);
		};

		const onMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
			mouse.active = true;
		};
		const onResize = () => {
			build();
			if (reduce) draw();
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
		if (reduce) {
			draw(); // 정지 상태 단일 프레임
		} else {
			start();
		}
		io.observe(canvas);
		window.addEventListener("mousemove", onMove, { passive: true });
		window.addEventListener("resize", onResize);
		document.addEventListener("visibilitychange", onVisibility);

		return () => {
			stop();
			io.disconnect();
			window.removeEventListener("mousemove", onMove);
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
