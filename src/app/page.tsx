import React from 'react';
import { InAppBrowserBanner } from '@/components/InAppBrowserBanner';
import { LiveBanner } from '@/components/LiveBanner';
import { HeroSection } from '@/components/HeroSection';
import { SocialHub } from '@/components/SocialHub';
import { LatestVlogCard } from '@/components/LatestVlogCard';
import { ShortsCarousel } from '@/components/ShortsCarousel';
import { TikTokCarousel } from '@/components/TikTokCarousel';
import { InstagramGrid } from '@/components/InstagramGrid';
import { SupportCards } from '@/components/SupportCards';
import { AboutSection } from '@/components/AboutSection';
import { FaqSection } from '@/components/FaqSection';
import { CollabDrawer } from '@/components/CollabDrawer';
import { MediaKitModal } from '@/components/MediaKitModal';
import { CREATOR_DATA } from '@/config/creator';
import { Heart, Compass, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0e] text-neutral-100 flex justify-center py-5 px-3 sm:px-4 selection:bg-rose-500/30">
      {/* Mobile-First Constrained Hub Container (max 440px width) */}
      <div className="w-full max-w-[440px] flex flex-col gap-5 pb-12">
        {/* In-App Browser Escape Banner */}
        <InAppBrowserBanner />

        {/* Real-Time Livestream Radar (Kick SWR Poller + In-App Chat) */}
        <LiveBanner />

        {/* Hero Section with Verbatim Bio, Days Counter & Avatar */}
        <HeroSection />

        {/* 4-Pill Primary Social Channels with Native Mobile Deep-Linking */}
        <SocialHub />

        {/* Direct Creator Funding: BuyMeACoffee & PayPal */}
        <SupportCards />

        {/* Automated YouTube Drop: Latest Vlog Card */}
        <LatestVlogCard />

        {/* Automated YouTube Shorts Swipeable Carousel */}
        <ShortsCarousel />

        {/* Automated TikTok Trending Clips Carousel */}
        <TikTokCarousel />

        {/* Automated Instagram Snaps & Reels Grid */}
        <InstagramGrid />

        {/* In-App Collaboration Mailer Drawer */}
        <CollabDrawer />

        {/* Brand Media Kit & Analytics Modal */}
        <MediaKitModal />

        {/* Search Engine Optimized Editorial Backstory */}
        <AboutSection />

        {/* Search Intent FAQ Accordion */}
        <FaqSection />

        {/* Footer & PWA Status */}
        <footer className="mt-4 pt-6 border-t border-neutral-900 flex flex-col items-center gap-3 text-center text-xs text-neutral-500">
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
            <span>Zero-Maintenance Edge Architecture • 2026</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
