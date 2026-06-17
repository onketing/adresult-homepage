import { BlogCard } from "@/components/shared/BlogCard";
import { Reveal } from "@/components/shared/Reveal";
import type { BlogPost } from "@/content/blog/posts";

export const BlogGrid = ({
	posts,
	priorityCount = 0,
}: {
	posts: BlogPost[];
	priorityCount?: number;
}) => {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
			{posts.map((post, i) => (
				<Reveal key={post.slug} delay={i * 0.05} duration={0.7} margin="-30px">
					<BlogCard post={post} priority={i < priorityCount} />
				</Reveal>
			))}
		</div>
	);
};
