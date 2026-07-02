"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const REVIEWS: { src: string; w: number; h: number }[] = [
	{ src: "/about/review-1.jpg", w: 1080, h: 1200 },
	{ src: "/about/review-2.jpg", w: 364, h: 408 },
	{ src: "/about/review-3.jpg", w: 364, h: 408 },
	{ src: "/about/review-4.jpg", w: 364, h: 408 },
	{ src: "/about/review-5.jpg", w: 364, h: 497 },
	{ src: "/about/review-6.jpg", w: 364, h: 408 },
	{ src: "/about/review-7.jpg", w: 364, h: 408 },
	{ src: "/about/review-8.jpg", w: 364, h: 408 },
	{ src: "/about/review-9.jpg", w: 364, h: 408 },
	{ src: "/about/review-10.jpg", w: 364, h: 408 },
	{ src: "/about/review-11.jpg", w: 364, h: 408 },
];

export const AboutReviewMarquee = () => {
	return (
		<div className="mask-[linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
			<Marquee speed={40} gradient={false} autoFill pauseOnHover={false}>
				{REVIEWS.map((r) => (
					<Image
						key={r.src}
						src={r.src}
						alt="애드리절트 고객 후기"
						width={r.w}
						height={r.h}
						sizes="(max-width: 768px) 60vw, 360px"
						className="mx-3 h-[340px] w-auto rounded-xl shadow-[0_10px_28px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70 md:h-[420px]"
					/>
				))}
			</Marquee>
		</div>
	);
};
