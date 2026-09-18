import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CREATOR_DATA } from "@/config/creator";
import { getPersonJsonLd, getProfilePageJsonLd, getFaqPageJsonLd, getVideoObjectJsonLd, getBreadcrumbJsonLd, getWebSiteJsonLd } from "@/lib/seo";
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

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = isGithubActions 
  ? 'https://plurino.github.io/teganjohnson' 
  : CREATOR_DATA.canonicalUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CREATOR_DATA.siteTitle} (@itsnottegxnn) • Official Hub`,
    template: `%s | ${CREATOR_DATA.siteTitle}`
  },
  description: `Official creator hub for Teegs (@itsnottegxnn). Daily YouTube vlogs, TikTok Lives, and life adventures.`,
  keywords: [
    "Tegan Johnson",
    "Teegs",
    "itsnottegxnn",
    "teganjohnson07",
    "Tegan Johnson vlogs",
    "Tegan Johnson YouTube",
    "Tegan Johnson TikTok"
  ],
  authors: [{ name: CREATOR_DATA.name, url: siteUrl }],
  creator: `${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
  publisher: CREATOR_DATA.siteTitle,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "profile",
    locale: "en_GB",
    url: siteUrl,
    title: `${CREATOR_DATA.siteTitle} (@itsnottegxnn)`,
    description: `Follow Teegs (@itsnottegxnn) on her journey! Daily YouTube vlogs, TikTok Lives, and candid updates.`,
    siteName: CREATOR_DATA.siteTitle,
    images: [
      {
        url: `${siteUrl}/images/teegs-avatar.png`,
        width: 800,
        height: 800,
        alt: `${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
        type: 'image/png'
      }
    ],
    firstName: "Tegan",
    lastName: "Johnson",
    username: "itsnottegxnn",
    gender: "female",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CREATOR_DATA.siteTitle} (@itsnottegxnn)`,
    description: `Official creator hub for Teegs (@itsnottegxnn). Daily YouTube vlogs & TikTok Lives.`,
    creator: CREATOR_DATA.handle,
    site: CREATOR_DATA.handle,
    images: [`${siteUrl}/images/teegs-avatar.png`]
  },
  verification: {
    google: "google-site-verification-teegstravels-token-2026",
    other: {
      "msvalidate.01": "bing-site-verification-teegstravels-2026",
      "pwa:apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent"
    }
  },
  manifest: `${basePath}/manifest.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/icons/icon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/icon.svg`, type: "image/svg+xml" }
    ],
    apple: `${basePath}/icons/apple-touch-icon.png`,
    shortcut: `${basePath}/icons/icon.svg`,
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
  const breadcrumbSchema = getBreadcrumbJsonLd();
  const websiteSchema = getWebSiteJsonLd();

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
        <link rel="icon" type="image/svg+xml" href={`${basePath}/icons/icon.svg`} />
        <link rel="icon" href={`${basePath}/icons/icon.svg`} />
        <link rel="shortcut icon" href={`${basePath}/icons/icon.svg`} />
        <link rel="apple-touch-icon" href={`${basePath}/icons/apple-touch-icon.png`} />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* WhatsApp & Social Media Preview Meta */}
        <meta property="og:image" content={`${siteUrl}/images/teegs-avatar.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/images/teegs-avatar.png`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/png" />

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#0d0d0e] text-neutral-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
