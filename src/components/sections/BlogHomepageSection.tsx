import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const BLOG_EXAMPLES = [
	{
		id: "blog-01",
		src: "/images/blog-examples/blog-01.png",
		label: "법무법인",
	},
	{
		id: "blog-02",
		src: "/images/blog-examples/blog-02.png",
		label: "의원",
	},
] as const;

const BrowserFrame = ({ src, label }: { src: string; label: string }) => (
	<div className="min-w-[260px] flex-1 overflow-hidden rounded-xl border border-slate-700 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
		{/* Browser chrome */}
		<div className="flex items-center gap-1.5 bg-[#1e1e1e] px-3 py-2.5">
			<span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
			<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
			<span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
			<div className="ml-2 flex-1 rounded bg-[#2a2a2a] px-2 py-0.5 text-[9px] text-slate-400">
				blog.naver.com
			</div>
		</div>
		{/* Screenshot */}
		<div className="relative aspect-4/3 w-full bg-slate-800">
			<Image
				src={src}
				alt={`${label} 홈페이지형 블로그 예시`}
				fill
				className="object-cover object-top"
				sizes="(max-width: 640px) 100vw, 50vw"
				quality={90}
			/>
		</div>
	</div>
);

export const BlogHomepageSection = () => {
	return (
		<section className="overflow-hidden bg-[#0a0a0a] px-4 py-16 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-10">
					<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
						Blog Design
					</p>
					<h2 className="break-keep font-bold text-3xl text-white tracking-tight md:text-5xl">
						홈페이지처럼 관리되는 블로그
					</h2>
					<p className="mt-4 break-keep text-base text-slate-400 leading-relaxed">
						단순한 글 발행이 아닙니다. 병의원·법무법인의 블로그를 브랜드 채널로 구성합니다.
					</p>
				</Reveal>

				{/* Screenshot row */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{BLOG_EXAMPLES.map((ex, i) => (
						<Reveal key={ex.id} delay={i * 0.12} direction="up">
							<BrowserFrame src={ex.src} label={ex.label} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
