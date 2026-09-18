# TeegsTravels.com

Automated, mobile-first creator web application built for **Tegan Johnson (@itsnottegxnn)**. Designed as an authentic, zero-maintenance creator hub featuring live YouTube RSS feeds, automated YouTube Shorts shelves, deep-link protocol routing, and direct collaboration tools.

---

## 🎒 Overview

TeegsTravels.com serves as the centralized headquarters for British solo travel creator **Tegan Johnson** (known online as **Teegs** / `@itsnottegxnn` / `teganjohnson07`). On July 1, 2026, she packed her life into a single backpack, cashed her final UK paycheck, and bought a one-way ticket to see the world.

The site is built for **100% authenticity and zero manual maintenance**:
- **Real YouTube RSS Ingestion:** Directly connected to her verified channel (`UCaEPHBE_WrG58Uf2nj2sLgg`).
- **No Fake Feeds or Mocks:** Only genuine public feeds and direct social channels are presented.
- **Autonomous Days Counter:** Deterministically calculated from `2026-07-01` on the client.
- **No Hardcoded Locations:** The site never assumes or fakes her current location; visitors are pointed to her latest YouTube vlogs and TikTok Lives to see where she is in real time.

---

## ⚡ Core Features

1. **Autonomous "Days on the Road" Counter:**
   - Deterministically calculated on the client relative to July 1, 2026: `Math.floor((Date.now() - new Date('2026-07-01')) / (1000 * 60 * 60 * 24))`.
   - Never requires manual incrementing.
2. **Dynamic Real YouTube Episode Card:**
   - Automatically parses uploads from her verified YouTube channel (`UCaEPHBE_WrG58Uf2nj2sLgg`) via `/api/vlog` on a 15-minute ISR edge cache.
   - Deep-links directly to native mobile YouTube apps (`vnd.youtube://`).
3. **Automated YouTube Shorts Carousel:**
   - Touch-swipeable shelf showcasing her vertical format shorts with direct watch links and views.
4. **Authentic Profile & Panoramic Banner:**
   - Features her authentic photo with her dog and coastal backdrop.
5. **App-Protocol Deep Link Switcher & Escape Protocol:**
   - Inspects `navigator.userAgent` to bypass restrictive in-app browsers (TikTok, Instagram, Facebook) and launch native OS schemes.
6. **Direct Business & Collab Card:**
   - Simple, direct outreach via `collabs@teegstravels.com` with 1-tap email launch and clipboard copying. Zero fake forms or rate cards.
7. **Direct Creator Funding:**
   - Direct support cards for BuyMeACoffee (`buymeacoffee.com/teegs`) and PayPal (`paypal.me/teganjohnsonnxo`).
8. **PWA (Progressive Web App) & Offline Shell:**
   - App manifest (`/manifest.webmanifest`), home screen icons, standalone display mode, and service worker caching with custom offline screen (`/offline.html`).
9. **One-Click Native Share & Clipboard with Haptics:**
   - Web Share API integration triggering native share sheets with tactile haptic feedback (`navigator.vibrate`).

---

## 🔍 SEO & Schema.org Implementations

- **`SameAs` Entity Linking:** Full JSON-LD structured data linking `Person` and `ProfilePage` to her verified channels (YouTube, TikTok, Instagram, BuyMeACoffee, PayPal).
- **Exact Name & Handle Keyword Permutations:** Targeted occurrences of `"Teegs"`, `"Teegs Travels"`, `"Tegan Johnson"`, and `"@itsnottegxnn"` across metadata and semantic tags.
- **Auto-Generated `VideoObject` Schema:** Real video metadata injected into document head for Google Video rich snippets.
- **Dynamic `sitemap.xml` & `robots.txt`:** Next.js native sitemap and crawler directives with `<lastmod>` timestamps.
- **Canonical Tag Reinforcement:** Explicit `<link rel="canonical" href="https://teegstravels.com" />`.
- **Sub-1-Second Core Web Vitals:** Zero render-blocking scripts, preconnects to CDN origins (`i.ytimg.com`).
- **Keyword-Rich Editorial Section:** Concise, authentic narrative documenting her UK departure.
- **Dynamic OpenGraph & Twitter Cards:** Edge-rendered OpenGraph image preview card (`/opengraph-image`).
- **Automated `FAQPage` Schema:** Accurate answers for high-volume Google queries (*"Who is Teegs?"*, *"What is Teegs' social handles?"*, *"Where is Teegs traveling now?"*).
- **Search Console & Bing Verification:** Pre-configured site verification tokens.

---

## 🛠 Tech Stack & Architecture

- **Framework:** Next.js 16+ (App Router)
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
npx tsc --noEmit
npm run lint
npm run build
```
