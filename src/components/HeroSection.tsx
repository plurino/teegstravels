'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CREATOR_DATA } from '@/config/creator';
import { TravelCounter } from './TravelCounter';
import { ShareButton } from './ShareButton';
import { HostelQrModal } from './HostelQrModal';
import { StoryStickerModal } from './StoryStickerGenerator';
import { dispatchVibesEvent } from './FloatingHearts';
import { Check, Plane, Camera } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

export function HeroSection() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const handleAvatarClick = () => {
    dispatchVibesEvent();
  };

  return (
    <section className="flex flex-col items-center text-center relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-white/10 shadow-2xl backdrop-blur-xl">
      {/* Coastal Panoramic Banner with Animated Flight Path */}
      <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-neutral-950">
        <Image
          src={getAssetPath('/images/coastal-banner.png')}
          alt="Coastal travel landscape"
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#121214]" />

        {/* Subtle Animated Flight Arc */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 120">
            <path
              d="M 10 100 Q 200 -20 390 90"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-amber-300 animate-pulse">
            <Plane className="w-3.5 h-3.5 rotate-45" />
          </div>
        </div>

        {/* Top Action Bar (Hostel QR, Story Sticker & Share) */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <button
            onClick={() => setIsStoryOpen(true)}
            aria-label="Generate Story Sticker"
            className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition active:scale-95 flex items-center justify-center cursor-pointer"
            title="Create Instagram / TikTok Story Sticker"
          >
            <Camera className="w-4 h-4 text-rose-400" />
          </button>
          <HostelQrModal />
          <ShareButton variant="icon" />
        </div>
      </div>

      <StoryStickerModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />

      {/* Profile Avatar Overlapping Banner */}
      <div className="relative -mt-14 mb-2.5 flex flex-col items-center">
        <button
          onClick={handleAvatarClick}
          aria-label="Tap to send vibes to Teegs"
          className="group relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-amber-400 to-rose-600 shadow-2xl shadow-rose-950/60 transition-transform active:scale-90 hover:scale-105 cursor-pointer"
          title="Tap for floating hearts!"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neutral-950 bg-neutral-900">
            <Image
              src={getAssetPath('/images/teegs-avatar.png')}
              alt={`${CREATOR_DATA.name} (${CREATOR_DATA.handle})`}
              fill
              sizes="96px"
              priority
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </button>
      </div>

      {/* Content Section */}
      <div className="px-4 pb-5 flex flex-col items-center w-full">
        {/* Days on the Road Badge */}
        <TravelCounter />

        {/* Verified Creator Name & Handle */}
        <h1 className="text-2xl font-bold tracking-tight mt-2.5 text-white flex items-center gap-1.5 justify-center">
          <span>{CREATOR_DATA.siteTitle}</span>
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-500 text-white text-[10px]" title="Verified">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        </h1>
        <p className="text-xs text-neutral-400 font-mono mt-0.5">
          {CREATOR_DATA.handle} <span className="text-neutral-600">•</span> {CREATOR_DATA.name}
        </p>

        {/* Verbatim Authentic Bio */}
        <div className="text-xs leading-relaxed text-neutral-300 mt-3 w-full bg-black/40 border border-white/5 rounded-2xl p-3.5 text-left shadow-inner backdrop-blur-md">
          <p className="italic text-neutral-200">
            &ldquo;{CREATOR_DATA.heroBio}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
