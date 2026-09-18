# TeganJohnson.com

Automated, mobile-first creator web application built for **Tegan Johnson (@itsnottegxnn)** — known online as **Teegs**. Designed with modern Apple-inspired aesthetics, interactive micro-features for the TikTok generation, live YouTube ingestion, and zero manual maintenance.

The domain (`TeganJohnson.com`) is intentionally person-based rather than niche-based, giving the project long-term flexibility beyond any single vertical.

---

## 🎒 Overview

TeganJohnson.com serves as the centralized headquarters for British solo travel creator **Tegan Johnson** (known online as **Teegs** / `@itsnottegxnn` / `teganjohnson07`). On July 1, 2026, she packed her life into a single backpack, cashed her final UK paycheck, and bought a one-way ticket to explore the world.

---

## 🌐 Live Site

**Custom domain:** [https://TeganJohnson.com](https://TeganJohnson.com)

**GitHub Pages fallback:** [https://plurino.github.io/teganjohnson/](https://plurino.github.io/teganjohnson/)

---

## ⚡ 25 High-Impact Features & Enhancements

### 🎨 Visual Atmosphere & Apple-Inspired Design
1. **Interactive Topographic Contour Mesh:** Subtle SVG topographic contour lines and glowing radar points in the background elevating the site beyond a flat black screen.
2. **Dynamic Ambient Travel Glows:** Smooth radial gradient orbs (sunset rose, golden hour amber, tropical cyan) creating an immersive, high-end feel.
3. **Animated Flight Path Arc:** A dashed flight route curve with an animated airplane icon gliding across the panoramic coastal header.
4. **Frosted Glass Bento Elevation:** Apple-style translucent glass cards (`backdrop-blur-xl bg-neutral-900/60 border border-white/10 shadow-2xl`).
5. **Drifting Stardust / Embers:** Subtle glowing particles drifting upward like night market lanterns.

### 📱 TikTok-Gen Interactive Micro-Features
6. **TikTok Live Floating Hearts Blast:** Double-tapping her avatar or clicking the floating "Send Vibes 💖" action button fires an animated stream of travel emojis (💖, ✈️, 🎒, 🌴, ✨) with haptic feedback.
7. **Live Session Vibe Counter:** Real-time counter showing how many vibes have been sent during the current session.
8. **Digital Boarding Pass Card:** Apple Wallet-styled boarding pass (`LON ➔ WRLD`, Flight: TEEGS-01, Seat: 1A SOLO, Class: ONE-WAY) with faux barcode.
9. **Interactive Airplane Favicon:** Custom vector airplane browser icon reflecting the solo travel journey.
10. **Offline Hostel Meetup QR Code:** Quick modal generating a crisp QR code for in-person backpacker connects.
11. **Mobile-First Touch Architecture:** 44px+ touch targets, haptic feedback triggers, and smooth iOS spring-like transitions.
12. **Playful Tab Title Switcher:** Switches browser tab title to *"🎒 Teegs is still traveling... ✈️"* when inactive.

### 🎬 Real-Time YouTube Engine
13. **Direct YouTube Scraper & Parser:** Queries `@Itsnottegxnn/videos` so brand-new uploads are automatically surfaced.
14. **NEW DROP 🔥 Glowing Badge:** Automatically tags the latest vlog with a pulsing badge.
15. **Smart Deep-Linking:** Automatically opens videos directly in the native YouTube app on mobile (iOS/Android) or in the browser.
16. **YouTube Shorts Shelf:** Horizontal swipeable carousel with momentum scroll-snapping.

### 🔍 Search & Social Sharing
17. **Dynamic OpenGraph Card with Real-Time Day Count:** Automated preview card (`/opengraph-image`) computing the exact current day on the road for iMessage, WhatsApp, Twitter, and Discord.
18. **Google Breadcrumbs Schema (`BreadcrumbList`):** Structured hierarchy mapping for rich search result snippets.
19. **Google WebSite Entity Schema:** Explicit knowledge graph binding for "Tegan Johnson".
20. **Auto-Generated `VideoObject` Schema:** Real video metadata injected into document `<head>`.
21. **Automated `FAQPage` Schema:** Answers for high-volume Google queries (*"Who is Teegs?"*, *"Where is Teegs traveling now?"*).
22. **One-Click Native Share with Haptics:** System share sheet integration via Web Share API with tactile vibration.

### 💖 Friendly Contact & Creator Support
23. **Safe Direct Contact:** Friendly outreach card routing to `contact@teganjohnson.com` with 1-tap email launch and clipboard copying. Zero commercial solicitation.
24. **Playful Tip Presets:** Support cards featuring *"☕ Buy a coffee (£2)"* and *"⛽ Scooter Fuel (£5)"*.
25. **PWA Standalone & Offline Shell:** Installable on iOS/Android home screens with custom offline screen (`/offline.html`).

---

## 🛠 Tech Stack & CI/CD

- **Framework:** Next.js 16+ (App Router, Turbopack, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Automated Refresh:** Scheduled 6-hour cron rebuild to automatically ingest new YouTube vlogs ($0/mo upkeep)

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

---

## 🚀 Production Verification

```bash
npx tsc --noEmit
npm run lint
npm run build
```
