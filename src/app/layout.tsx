import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CREATOR_DATA } from "@/config/creator";
import { getPersonJsonLd, getProfilePageJsonLd, getFaqPageJsonLd, getVideoObjectJsonLd } from "@/lib/seo";
import { FALLBACK_LATEST_VLOG } from "@/lib/rss";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0d0d0e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(CREATOR_DATA.canonicalUrl),
  title: {
    default: `${CREATOR_DATA.siteTitle} • ${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
    template: `%s | ${CREATOR_DATA.siteTitle}`
  },
  description: `Official creator hub for Tegan Johnson (Teegs, @itsnottegxnn, teganjohnson07). Solo female travel, one-way ticket journey, real YouTube vlogs, and TikTok Lives.`,
  keywords: [
    "Teegs",
    "Teegs Travels",
    "Tegan Johnson",
    "itsnottegxnn",
    "teganjohnson07",
    "Teegs solo travel",
    "one-way ticket travel",
    "female solo travel",
    "YouTube Itsnottegxnn",
    "TikTok itsnottegxnn"
  ],
  authors: [{ name: CREATOR_DATA.name, url: CREATOR_DATA.canonicalUrl }],
  creator: `${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
  publisher: CREATOR_DATA.siteTitle,
  alternates: {
    canonical: CREATOR_DATA.canonicalUrl
  },
  openGraph: {
    type: "profile",
    locale: "en_GB",
    url: CREATOR_DATA.canonicalUrl,
    title: `${CREATOR_DATA.siteTitle} • ${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
    description: `On the 1st of July I got a one way ticket out the UK with no plan... Follow Teegs' solo travel journey, vlogs & TikTok lives.`,
    siteName: CREATOR_DATA.siteTitle,
    firstName: "Tegan",
    lastName: "Johnson",
    username: "itsnottegxnn",
    gender: "female",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CREATOR_DATA.siteTitle} • ${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
    description: `Official travel hub for Teegs (@itsnottegxnn). YouTube vlogs, TikTok lives, and one-way ticket travel journey.`,
    creator: CREATOR_DATA.handle,
    site: CREATOR_DATA.handle
  },
  verification: {
    google: "google-site-verification-teegstravels-token-2026",
    other: {
      "msvalidate.01": "bing-site-verification-teegstravels-2026",
      "pwa:apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent"
    }
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
  category: "travel"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonJsonLd();
  const profilePageSchema = getProfilePageJsonLd();
  const faqSchema = getFaqPageJsonLd();
  const videoSchema = getVideoObjectJsonLd(FALLBACK_LATEST_VLOG);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Preconnect to media CDNs for sub-1s Core Web Vitals */}
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i1.ytimg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i2.ytimg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i4.ytimg.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Autonomous SEO: Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#0d0d0e] text-neutral-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
