import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: 애드리절트 공식 OG 이미지(public/og-image.png) 확보 시 이미지 렌더로 교체.
// 현재는 한글 폰트 번들 없이 안전하게 렌더되도록 라틴 텍스트 기반 브랜드 카드로 생성.
export default function OgImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#ffffff",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					fontSize: 26,
					letterSpacing: 8,
					fontWeight: 700,
					color: "#ef3c39",
					marginBottom: 24,
				}}
			>
				RESULT-DRIVEN AD AGENCY
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					fontSize: 148,
					fontWeight: 800,
					letterSpacing: -4,
					color: "#0a0a0a",
					lineHeight: 1,
				}}
			>
				ADRESULT<span style={{ color: "#ef3c39" }}>.</span>
			</div>
			<div
				style={{
					marginTop: 20,
					height: 6,
					width: 220,
					borderRadius: 999,
					backgroundColor: "#ef3c39",
				}}
			/>
			<div style={{ marginTop: 32, fontSize: 34, fontWeight: 600, color: "#475569" }}>
				Hospital Marketing Agency · Since 2015
			</div>
		</div>,
		{ ...size },
	);
}
