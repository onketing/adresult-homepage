import Image from "next/image";

type LogoProps = {
	variant?: "dark" | "light";
	className?: string;
};

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
	return (
		<Image
			src="/header-logo.png"
			alt="온케팅"
			width={1593}
			height={323}
			style={{
				width: "auto",
				height: "42px",
				filter: variant === "light" ? "brightness(0) invert(1)" : "none",
			}}
			className={className}
			priority
		/>
	);
};
