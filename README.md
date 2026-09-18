# TeegsTravels.com

Automated, mobile-first creator web application built for **Tegan Johnson (@itsnottegxnn)**. Designed with modern Apple-inspired aesthetics, interactive micro-features for the TikTok generation, live YouTube ingestion, and zero manual maintenance.

---

## 🎒 Overview

TeegsTravels.com serves as the centralized headquarters for British solo travel creator **Tegan Johnson** (known online as **Teegs** / `@itsnottegxnn` / `teganjohnson07`). On July 1, 2026, she packed her life into a single backpack, cashed her final UK paycheck, and bought a one-way ticket to explore the world.

---

## ⚡ 25 Live Features & Enhancements

### 🎨 Visual Atmosphere & Apple-Inspired Design
1. **Interactive Topographic Contour Mesh:** Subtle SVG topographic contour lines and glowing radar points in the background that elevate the site beyond a flat black screen.
2. **Dynamic Ambient Travel Glows:** Smooth radial gradient orbs (sunset rose, golden hour amber, tropical cyan) creating an immersive, high-end feel.
3. **Animated Flight Path Arc:** A dashed flight route curve with an animated airplane icon gliding across the panoramic coastal header.
4. **Frosted Glass Bento Elevation:** Apple-style translucent glass cards (`backdrop-blur-xl bg-neutral-900/60 border border-white/10 shadow-2xl`).
5. **Drifting Stardust / Embers:** Subtle glowing particles drifting upward like night market lanterns.

### 📱 TikTok-Gen Interactive Micro-Features
6. **TikTok Live Floating Hearts Blast:** Double-tapping her avatar or clicking the floating "Send Vibes 💖" action button fires an animated stream of travel emojis (💖, ✈️, 🎒, 🌴, ✨) with haptic feedback.
7. **Live Session Vibe Counter:** Displays how many vibes have been sent during the current session.
8. **Digital Boarding Pass Card:** Apple Wallet-styled boarding pass (`LON ➔ WRLD`, Flight: TEEGS-01, Seat: 1A YOLO, Class: ONE-WAY) with faux barcode and tap-to-flip travel mantra.
9. **Interactive Passport Stamp Collector:** Tapping the passport icon stamps a retro ink badge: *"Teegs Travels • One-Way Club • Certified Wanderer"*.
10. **Offline Hostel Meetup QR Code:** Quick modal generating a crisp QR code for in-person backpacker connects.
11. **Travel Chaos Meter:** An interactive badge displaying *"Chaos Level: 110%"* with tap-to-reveal quotes from her journey.
12. **Playful Tab Title Switcher:** Switches browser tab title to *"🎒 Teegs is still traveling... ✈️"* when inactive.

### 🎬 Real-Time YouTube Engine
13. **Direct YouTube Scraper & Parser:** Bypasses legacy RSS 15-item limits by directly querying `@Itsnottegxnn/videos` so brand-new uploads like **Ep 33** are always surfaced.
14. **NEW DROP 🔥 Glowing Badge:** Automatically tags the latest video with a pulsing badge.
15. **Recent Episode Quick Switcher:** Allows users to switch between recent episodes (Ep 33, Ep 32, Ep 31, Ep 30) directly on the vlog card without navigating away.
16. **YouTube Shorts Shelf:** Horizontal swipeable carousel with momentum scroll-snapping.

### 🔍 Search & Social Sharing
17. **Dynamic OpenGraph Card with Real-Time Day Count:** Edge-rendered preview card (`/opengraph-image`) computing the exact current day on the road for iMessage, WhatsApp, Twitter, and Discord.
18. **Google Breadcrumbs Schema (`BreadcrumbList`):** Structured hierarchy mapping for rich search result snippets.
19. **Google WebSite Entity Schema:** Explicit knowledge graph binding for "Teegs Travels".
20. **Auto-Generated `VideoObject` Schema:** Real video metadata injected into document `<head>`.
21. **Automated `FAQPage` Schema:** Answers for high-volume Google queries (*"Who is Teegs?"*, *"Where is Teegs traveling now?"*).
22. **One-Click Native Share with Haptics:** System share sheet integration via Web Share API with tactile vibration.

### 💖 Friendly Contact & Creator Support
23. **Safe Direct Contact:** Friendly outreach card routing to `contact@teegstravels.com` with 1-tap email launch and clipboard copying. Zero commercial solicitation.
24. **Playful Tip Presets:** Support cards featuring *"🥭 Mango Smoothie (£2)"* and *"⛽ Scooter Fuel (£5)"*.
25. **PWA Standalone & Offline Shell:** Installable on iOS/Android home screens with custom offline screen (`/offline.html`).

---

## 🛠 Tech Stack & Architecture

- **Framework:** Next.js 16+ (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **State & Polling:** SWR (5-minute edge cache)
- **Deployment:** Zero-config deploy to Vercel ($0/mo upkeep)

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
