import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	highlight?: string;
	sub?: string;
	className?: string;
	align?: "left" | "center";
};

export const SectionHeading = ({
	eyebrow,
	title,
	highlight,
	sub,
	className,
	align = "center",
}: SectionHeadingProps) => {
	return (
		<div className={cn(align === "center" ? "text-center" : "text-left", className)}>
			{eyebrow && (
				<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
					{eyebrow}
				</p>
			)}
			<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-5xl">
				{title}
				{highlight && <span className="gradient-text"> {highlight}</span>}
			</h2>
			{sub && (
				<p className="mx-auto mt-4 max-w-2xl break-keep text-base text-muted-foreground leading-relaxed md:text-lg">
					{sub}
				</p>
			)}
		</div>
	);
};
