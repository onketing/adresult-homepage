import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingActions } from "@/components/shared/FloatingActions";
import { PageTransition } from "@/components/shared/PageTransition";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { siteConfig } from "@/config/site";

const pretendard = localFont({
	src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "swap",
	weight: "45 920",
	adjustFontFallback: "Arial",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	variable: "--font-roboto-mono",
	display: "swap",
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [...siteConfig.authors],
	creator: siteConfig.creator,
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	alternates: {
		canonical: siteConfig.url,
	},
	verification: {
		google: "RHFjIItqXfDsghUkllvYdjx__JO2c9HTgLrsMAm_N4M",
		other: {
			"naver-site-verification": "d4226bbbaae73c2c62b9327693fac4b373595e3a",
		},
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/icon-192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icon-512.png", sizes: "512x512", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
	},
};

const DUMMY_TEL = "02-000-0000";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: siteConfig.nameKo,
	alternateName: "Onketing",
	description: siteConfig.description,
	url: siteConfig.url,
	logo: `${siteConfig.url}/icon-512.png`,
	foundingDate: "2024",
	...(siteConfig.contact.tel !== DUMMY_TEL && { telephone: siteConfig.contact.tel }),
	email: siteConfig.contact.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: siteConfig.contact.address,
		addressLocality: "화성시",
		addressRegion: "경기도",
		postalCode: "18469",
		addressCountry: "KR",
	},
	areaServed: "KR",
	serviceType: [
		"전문직 마케팅",
		"블로그 마케팅",
		"숏폼 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
	],
	knowsAbout: [
		"전문직 광고 규정",
		"변호사법 제23조",
		"의료법 제56조",
		"네이버 블로그 SEO",
		"숏폼 영상 마케팅",
		"검색 의도 기반 콘텐츠",
	],
	sameAs: [siteConfig.contact.naverBlog, siteConfig.contact.kakaoOpenChat],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "전문직 마케팅 서비스",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 블로그 마케팅",
					url: `${siteConfig.url}/services/blog`,
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 숏폼 마케팅",
					url: `${siteConfig.url}/services/shortform`,
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 통합 마케팅",
					url: `${siteConfig.url}/services/professional`,
				},
			},
		],
	},
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="ko"
			className={`${pretendard.variable} ${inter.variable} ${robotoMono.variable} h-full`}
			suppressHydrationWarning
		>
			<body
				className="flex min-h-full flex-col bg-background text-foreground antialiased"
				suppressHydrationWarning
			>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
				<Header />
				<main className="flex-1">
					<PageTransition>{children}</PageTransition>
				</main>
				<Footer />
				<StickyCTA />
				<FloatingActions />
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
