"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none" | "scale";
	duration?: number;
	// 뷰포트 진입 트리거 여백. 음수일수록 더 안쪽에서, 작을수록 더 일찍 등장.
	margin?: string;
};

export const Reveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 1.1,
	margin = "-120px",
}: RevealProps) => {
	const prefersReducedMotion = useReducedMotion();
	// 뷰포트에 들어올 때마다 재생. 리셋(숨김)은 요소가 뷰포트 "아래"에 있을 때만.
	// → 아래로 스크롤해 다시 들어오면 재생 / 위로 스크롤해 다시 들어올 땐 재생 안 함.
	const [show, setShow] = useState(false);

	const directionMap = {
		up: { y: 90, x: 0 },
		down: { y: -90, x: 0 },
		left: { x: 90, y: 0 },
		right: { x: -90, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initial = prefersReducedMotion
		? { opacity: 0 }
		: direction === "scale"
			? { opacity: 0, scale: 0.78 }
			: { opacity: 0, ...directionMap[direction] };

	const visible =
		direction === "scale" ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 };

	const transition = prefersReducedMotion
		? { duration: 0 }
		: { duration, delay, ease: [0.22, 1, 0.36, 1] as const };

	return (
		<motion.div
			initial={initial}
			animate={show ? visible : initial}
			transition={transition}
			viewport={{ margin }}
			onViewportEnter={() => setShow(true)}
			onViewportLeave={(entry) => {
				if (entry && entry.boundingClientRect.top > 0) setShow(false);
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};
