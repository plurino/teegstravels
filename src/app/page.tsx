import React from 'react';
import { BackgroundAtmosphere } from '@/components/BackgroundAtmosphere';
import { FloatingHearts } from '@/components/FloatingHearts';
import { TabTitleSwitcher } from '@/components/TabTitleSwitcher';
import { InAppBrowserBanner } from '@/components/InAppBrowserBanner';
import { HeroSection } from '@/components/HeroSection';
import { SocialHub } from '@/components/SocialHub';
import { BoardingPassCard } from '@/components/BoardingPassCard';
import { LatestVlogCard } from '@/components/LatestVlogCard';
import { ShortsCarousel } from '@/components/ShortsCarousel';
import { SupportCards } from '@/components/SupportCards';
import { ContactCard } from '@/components/ContactCard';
import { AboutSection } from '@/components/AboutSection';
import { FaqSection } from '@/components/FaqSection';
import { Heart, Compass } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen text-neutral-100 flex justify-center py-5 px-3 sm:px-4 selection:bg-rose-500/30 overflow-x-hidden">
      {/* Visual Travel Atmosphere Background (Contours, Glows, Stardust) */}
      <BackgroundAtmosphere />

      {/* Interactive Micro-Interactions */}
      <FloatingHearts />
      <TabTitleSwitcher />

      {/* Mobile-First Apple-Inspired Bento Container (max 440px width) */}
      <div className="relative z-10 w-full max-w-[440px] flex flex-col gap-4 pb-16">
        {/* In-App Browser Escape Banner */}
        <InAppBrowserBanner />

        {/* Hero Section with Avatar, Coastal Banner & Verbatim Bio */}
        <HeroSection />

        {/* 3 Primary Social Channels: YouTube, TikTok, Instagram */}
        <SocialHub />

        {/* Direct Creator Funding: BuyMeACoffee & PayPal with Tip Presets */}
        <SupportCards />

        {/* Apple Wallet Style Digital Boarding Pass */}
        <BoardingPassCard />

        {/* 100% Real YouTube Upload: Latest Vlog Card */}
        <LatestVlogCard />

        {/* 100% Real YouTube Shorts Shelf */}
        <ShortsCarousel />

        {/* Direct Contact (Contact Teegs) */}
        <ContactCard />

        {/* Search Engine Editorial Backstory (No Waffle) */}
        <AboutSection />

        {/* Accurate Search FAQ Accordion */}
        <FaqSection />

        {/* Clean Footer */}
        <footer className="mt-2 pt-6 border-t border-white/5 flex flex-col items-center gap-2 text-center text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-neutral-300 font-mono text-[11px]">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '14s' }} />
            <span>TeegsTravels.com</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
            <span>Follow Teegs (@itsnottegxnn)</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-rose-400">
              <Heart className="w-3 h-3 fill-current" />
              Solo Travel Diaries
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
