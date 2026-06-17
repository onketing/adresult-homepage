import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { BLOG_IMAGE_META } from "@/content/blog/_imageMeta";

// @next/mdx + App Router 필수 파일.
// 본문(MDX)의 기본 요소 타이포그래피는 글로벌 `.prose`(globals.css)가 담당하고,
// 여기서는 이미지·링크만 보강한다.
export function useMDXComponents(): MDXComponents {
	return {
		img: ({ src, alt }) => {
			const s = typeof src === "string" ? src : "";
			// width/height는 CLS 방지용. unoptimized로 원본을 그대로 서빙 → 재압축 없이 고화질 유지.
			const meta = BLOG_IMAGE_META[s] ?? { w: 1600, h: 1200 };
			return (
				<Image
					src={s}
					alt={alt ?? ""}
					width={meta.w}
					height={meta.h}
					unoptimized
					sizes="(max-width: 768px) 100vw, 768px"
					className="mx-auto my-7 h-auto w-full max-w-[560px]"
				/>
			);
		},
		table: (props) => (
			// 모바일에서 표가 넘칠 때 가로 스크롤
			<div className="my-6 overflow-x-auto">
				<table {...props} />
			</div>
		),
		a: ({ href, children, ...rest }) => {
			const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
			return (
				<a
					href={href}
					{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
					{...rest}
				>
					{children}
				</a>
			);
		},
	};
}
