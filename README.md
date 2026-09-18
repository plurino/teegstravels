# TeegsTravels.com (MVP)

Automated, mobile-first creator web application built for **Tegan Johnson (@itsnottegxnn)**. Designed to replace standard link hubs with zero-maintenance automation, edge caching, and real-time streaming radar.

---

## 🎒 Overview

TeegsTravels.com serves as the centralized headquarters for British solo travel creator **Tegan Johnson** (also known as **Teegs** / `@itsnottegxnn` / `teganjohnson07`). On July 1, 2026, she packed her life into a single backpack, cashed her final UK paycheck, and bought a one-way ticket to Southeast Asia.

This web app requires **zero manual updates or logins**—all feeds, stream radars, video shelves, day counters, and SEO entity mappings are fully autonomous.

---

## ⚡ Core Automated Features

1. **Autonomous "Days on the Road" Counter:**
   - Deterministically calculated on the client relative to July 1, 2026: `Math.floor((Date.now() - new Date('2026-07-01')) / (1000 * 60 * 60 * 24))`.
   - Never requires manual incrementing.
2. **Real-Time Livestream Radar (Kick API Polling):**
   - SWR hook queries `/api/kick-live` every 60 seconds (`https://kick.com/api/v2/channels/itsnottegxnn`).
   - Automatically renders a pulsing live alert and an expandable embedded Kick live chat drawer when active; silently hides when offline.
3. **Dynamic YouTube RSS Latest Episode Card:**
   - Ingests latest channel uploads via `/api/vlog` with 15-minute ISR cache.
   - Deep-links directly to native YouTube mobile apps (`vnd.youtube://`).
4. **Automated YouTube Shorts Carousel:**
   - Touch-swipeable shelf showcasing vertical format videos from her channel with direct watch links.
5. **Automated TikTok Feed Carousel:**
   - Surfaces high-engagement TikTok clips with view counts, likes, and deep-link protocol routing.
6. **Automated Instagram Photo & Reel Grid:**
   - Visual 3x2 gallery displaying recent travel moments and reels with interactive overlay.
7. **App-Protocol Deep Link Switcher & Escape Protocol:**
   - Inspects `navigator.userAgent` to bypass restrictive in-app browsers (TikTok, Instagram, Facebook) and launch native OS schemes.
8. **Interactive Collaboration Mailer Drawer:**
   - Touch-friendly bottom sheet providing pre-formatted `mailto:` templates for Hotels, Brand Sponsorships, and General Inquiries.
9. **Brand Media Kit & Analytics Modal:**
   - Instant drawer highlighting audience demographics (62% female, 84% 18-34, UK/US/AU), reach (3.8M+ monthly views), and booking CTAs.
10. **PWA (Progressive Web App) & Offline Shell:**
    - App manifest (`/manifest.webmanifest`), home screen icons, standalone display mode, and service worker caching with custom offline screen (`/offline.html`).
11. **One-Click Native Share & Clipboard with Haptics:**
    - Web Share API integration triggering native share sheets with tactile haptic feedback (`navigator.vibrate`).

---

## 🔍 10 Autonomous SEO & Schema.org Implementations

- **`SameAs` Entity Linking:** Full JSON-LD structured data linking `Person` and `ProfilePage` to all social platforms (YouTube, TikTok, Instagram, Kick, BuyMeACoffee, PayPal).
- **Aggressive Name & Handle Keyword Permutations:** Targeted occurrences of `"Teegs"`, `"Teegs Travels"`, `"Tegan Johnson"`, `"itsnottegxnn"`, and `"teganjohnson07"` across metadata and semantic tags.
- **Auto-Generated `VideoObject` Schema:** Real-time video metadata injected directly into document head for Google Video carousel rich snippets.
- **Dynamic `sitemap.xml` & `robots.txt`:** Next.js native sitemap and crawler directive generation with `<lastmod>` timestamps.
- **Canonical Tag Reinforcement:** Explicit `<link rel="canonical" href="https://teegstravels.com" />` preventing scrapers and link aggregators from outranking the domain.
- **Sub-1-Second Core Web Vitals:** Inline critical CSS, zero render-blocking scripts, preconnects to CDN origins (`i.ytimg.com`, `kick.com`).
- **Keyword-Rich Editorial Section:** Crawlable semantic prose documenting her UK departure and Southeast Asia travels.
- **Dynamic OpenGraph & Twitter Cards:** Dynamic Edge-rendered OpenGraph image preview card (`/opengraph-image`) for WhatsApp, iMessage, and Twitter.
- **Automated `FAQPage` Schema:** Structured answers for high-volume Google queries (*"Who is Teegs?"*, *"What is Teegs' YouTube and TikTok handle?"*, *"Where is Teegs traveling now?"*).
- **Search Console & Bing Verification:** Pre-configured site verification tokens for Google Search Console and Bing Webmaster Tools.

---

## 🛠 Tech Stack & Architecture

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **State & Polling:** SWR (Stale-While-Revalidate)
- **Deployment:** Vercel / Cloudflare Pages ($0/mo maintenance cost)

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/plurino/teegstravels.git
cd teegstravels

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your mobile view or browser.

---

## 🚀 Production Build & Deployment

```bash
# Type check and build
npx tsc --noEmit
npm run build

# Lint check
npm run lint
```

Ready for zero-config deployment to Vercel or any standard Edge runtime.
