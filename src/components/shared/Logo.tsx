import Image from "next/image";

type LogoProps = {
	variant?: "dark" | "light";
	className?: string;
};

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
	return (
		<Image
			src="/header-logo.png"
			alt="애드리절트 ADRESULT"
			width={637}
			height={138}
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
