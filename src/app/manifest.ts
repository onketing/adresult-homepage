import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const manifest = (): MetadataRoute.Manifest => {
	return {
		name: siteConfig.name,
		short_name: siteConfig.name,
		description: siteConfig.description,
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#58d68d",
		icons: [
			{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
			{ src: "/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icon-512.png", sizes: "512x512", type: "image/png" },
		],
	};
};

export default manifest;
