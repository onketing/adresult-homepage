import type { Metadata } from "next";
import { Inter, Nanum_Pen_Script, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

// 손글씨 강조용 (애드리절트 "맞춤 전략" 섹션 등)
const nanumPen = Nanum_Pen_Script({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-hand",
	display: "swap",
	preload: false,
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
		images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
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
		google: "cSZexxUigLS0oxD7ZRL4S7rhbPk52Yptqa7EkbBTD-I",
		other: {
			"naver-site-verification": "81ff776caa018aeef4adce150257d25546b9137a",
			"msvalidate.01": "FEADAB9A050D08C9269521AB466C6271",
		},
	},
	// 파비콘·아이콘은 src/app/icon.png · src/app/apple-icon.png(=애드리절트 aL) 컨벤션이 자동 처리
};

const DUMMY_TEL = "02-000-0000";

// GA4 측정 ID. Vercel/로컬 env에 NEXT_PUBLIC_GA_ID=G-XXXXXXXX 설정 시에만 로드된다.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
	"@context": "https://schema.org",
	"@type": ["Organization", "ProfessionalService"],
	"@id": `${siteConfig.url}/#organization`,
	name: siteConfig.nameKo,
	legalName: "애드리절트",
	alternateName: ["ADRESULT", "adresult", "애드리절트"],
	slogan: "결과로 말하는 광고회사",
	description: siteConfig.description,
	url: siteConfig.url,
	logo: {
		"@type": "ImageObject",
		url: `${siteConfig.url}/icon-512.png`,
		width: 512,
		height: 512,
	},
	foundingDate: "2015",
	...(siteConfig.contact.tel !== DUMMY_TEL && { telephone: siteConfig.contact.tel }),
	faxNumber: siteConfig.contact.fax,
	email: siteConfig.contact.email,
	founder: { "@type": "Person", name: siteConfig.contact.owner },
	address: {
		"@type": "PostalAddress",
		streetAddress: siteConfig.contact.address,
		addressLocality: "강남구",
		addressRegion: "서울특별시",
		addressCountry: "KR",
	},
	areaServed: { "@type": "Country", name: "대한민국" },
	serviceType: [
		"병원마케팅",
		"병원 AI마케팅",
		"병원 숏폼 마케팅",
		"병원 바이럴 마케팅",
		"병원 유튜브 마케팅",
		"병원 블로그 마케팅",
		"피부과 마케팅",
		"정형외과 마케팅",
		"성형외과 마케팅",
		"의료마케팅",
	],
	knowsAbout: [
		"병원마케팅",
		"진료과별 맞춤 마케팅",
		"병원 신규환자 유치",
		"의료광고법",
		"병원 AI마케팅",
		"숏폼 영상 마케팅",
		"유튜브 콘텐츠 마케팅",
		"검색 의도 기반 콘텐츠",
		"인스타그램 릴스",
		"유튜브 쇼츠",
	],
	sameAs: [
		siteConfig.contact.youtube,
		siteConfig.contact.instagram,
		siteConfig.contact.naverBlog,
		siteConfig.contact.kakaoOpenChat,
	],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "병원마케팅 서비스",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "병원 AIO마케팅",
					url: `${siteConfig.url}/services/aio`,
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "병원 숏폼·영상 마케팅",
					url: `${siteConfig.url}/services/shortform`,
				},
			},
		],
	},
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${siteConfig.url}/#website`,
	url: siteConfig.url,
	name: "애드리절트",
	alternateName: "ADRESULT",
	description: siteConfig.description,
	publisher: { "@id": `${siteConfig.url}/#organization` },
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="ko"
			className={`${pretendard.variable} ${inter.variable} ${robotoMono.variable} ${nanumPen.variable} h-full`}
			suppressHydrationWarning
		>
			<body
				className="flex min-h-full flex-col bg-background text-foreground antialiased"
				suppressHydrationWarning
			>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
				<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
				<Header />
				<main className="flex-1">
					<PageTransition>{children}</PageTransition>
				</main>
				<Footer />
				<StickyCTA />
				<FloatingActions />
				<Analytics />
				<SpeedInsights />
				{gaId ? <GoogleAnalytics gaId={gaId} /> : null}
			</body>
		</html>
	);
};

export default RootLayout;
