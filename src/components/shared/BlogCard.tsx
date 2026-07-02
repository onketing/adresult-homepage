import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog/posts";

const fmtDate = (d: string) => d.replaceAll("-", ".");

export const BlogCard = ({ post, priority = false }: { post: BlogPost; priority?: boolean }) => {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ef3c39]/40 hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)]"
		>
			<div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
				<Image
					src={post.cover}
					alt={post.title}
					fill
					quality={90}
					priority={priority}
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
				/>
				<span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 font-semibold text-[#e11d29] text-xs shadow-sm backdrop-blur-sm">
					{post.category}
				</span>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<h3 className="line-clamp-2 font-bold text-foreground text-lg leading-snug tracking-tight transition-colors group-hover:text-[#e11d29]">
					{post.title}
				</h3>
				<p className="mt-2 line-clamp-2 flex-1 text-muted-foreground text-sm leading-relaxed">
					{post.description}
				</p>
				<div className="mt-4 flex items-center justify-between border-slate-100 border-t pt-4">
					<div className="flex items-center gap-2 text-slate-400 text-xs">
						<time dateTime={post.date}>{fmtDate(post.date)}</time>
						<span aria-hidden="true">·</span>
						<span className="truncate">{post.tags[0]}</span>
					</div>
					<span className="flex items-center gap-1 font-semibold text-[#e11d29] text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100">
						읽기
						<ArrowUpRight className="h-3.5 w-3.5" />
					</span>
				</div>
			</div>
		</Link>
	);
};
