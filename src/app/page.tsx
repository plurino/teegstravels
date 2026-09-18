import React from 'react';
import { InAppBrowserBanner } from '@/components/InAppBrowserBanner';
import { HeroSection } from '@/components/HeroSection';
import { SocialHub } from '@/components/SocialHub';
import { LatestVlogCard } from '@/components/LatestVlogCard';
import { ShortsCarousel } from '@/components/ShortsCarousel';
import { SupportCards } from '@/components/SupportCards';
import { ContactCard } from '@/components/ContactCard';
import { AboutSection } from '@/components/AboutSection';
import { FaqSection } from '@/components/FaqSection';
import { CREATOR_DATA } from '@/config/creator';
import { Heart, Compass, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0e] text-neutral-100 flex justify-center py-5 px-3 sm:px-4 selection:bg-rose-500/30">
      {/* Mobile-First Constrained Hub Container (max 440px width) */}
      <div className="w-full max-w-[440px] flex flex-col gap-4 pb-12">
        {/* In-App Browser Escape Banner */}
        <InAppBrowserBanner />

        {/* Hero Section with Uploaded Avatar, Coastal Banner & Verbatim Bio */}
        <HeroSection />

        {/* 3 Primary Social Channels: YouTube, TikTok, Instagram */}
        <SocialHub />

        {/* Direct Creator Funding: BuyMeACoffee & PayPal */}
        <SupportCards />

        {/* 100% Real YouTube Upload: Latest Vlog Card */}
        <LatestVlogCard />

        {/* 100% Real YouTube Shorts Shelf */}
        <ShortsCarousel />

        {/* Direct Business & Collaboration Outreach */}
        <ContactCard />

        {/* Search Engine Editorial Backstory (No Waffle) */}
        <AboutSection />

        {/* Accurate Search FAQ Accordion */}
        <FaqSection />

        {/* Footer */}
        <footer className="mt-2 pt-6 border-t border-neutral-900 flex flex-col items-center gap-3 text-center text-xs text-neutral-500">
          <div className="flex items-center gap-2 text-neutral-400 font-mono text-[11px]">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>TeegsTravels.com • Autonomous Creator Hub</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
            <span>Built for {CREATOR_DATA.name}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-rose-400">
              <Heart className="w-3 h-3 fill-current" />
              Solo Travel
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-neutral-600 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Zero-Maintenance Edge Architecture</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
