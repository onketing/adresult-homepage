// MDX 모듈 타입 선언 — `.mdx` import 시 default(컴포넌트) + frontmatter 노출
declare module "*.mdx" {
	import type { ComponentType } from "react";

	export const frontmatter: {
		title: string;
		description: string;
		date: string;
		cover: string;
		tags: string[];
		category: string;
		naverUrl?: string;
	};

	const MDXComponent: ComponentType;
	export default MDXComponent;
}
