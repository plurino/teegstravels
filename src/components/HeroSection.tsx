import React from 'react';
import Image from 'next/image';
import { CREATOR_DATA } from '@/config/creator';
import { TravelCounter } from './TravelCounter';
import { ShareButton } from './ShareButton';
import { Check } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-neutral-800/80 shadow-md">
      {/* Coastal Panoramic Banner */}
      <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-neutral-950">
        <Image
          src="/images/coastal-banner.png"
          alt="Coastal travel landscape"
          fill
          priority
          className="object-cover opacity-75 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#121214]" />
        
        {/* Top Floating Share Button */}
        <div className="absolute top-3 right-3 z-10">
          <ShareButton variant="icon" />
        </div>
      </div>

      {/* Profile Avatar Overlapping Banner */}
      <div className="relative -mt-14 mb-3 flex flex-col items-center">
        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-amber-400 to-rose-600 shadow-xl shadow-rose-950/50 transition-transform hover:scale-105">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neutral-950 bg-neutral-900">
            <Image
              src="/images/teegs-avatar.png"
              alt={`${CREATOR_DATA.name} (${CREATOR_DATA.handle})`}
              fill
              sizes="96px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="px-4 pb-5 flex flex-col items-center w-full">
        {/* Days on the Road Badge */}
        <TravelCounter />

        {/* Creator Name & Verified Handle */}
        <h1 className="text-2xl font-bold tracking-tight mt-2.5 text-neutral-100 flex items-center gap-1.5 justify-center">
          <span>{CREATOR_DATA.siteTitle}</span>
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-500 text-white text-[10px]" title="Verified">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        </h1>
        <p className="text-xs text-neutral-400 font-mono mt-0.5">
          {CREATOR_DATA.handle} <span className="text-neutral-600">•</span> {CREATOR_DATA.name}
        </p>

        {/* Verbatim Authentic Bio */}
        <div className="text-xs leading-relaxed text-neutral-300 mt-3 w-full bg-neutral-950/70 border border-neutral-800/80 rounded-2xl p-3.5 text-left shadow-inner">
          <p className="italic text-neutral-200">
            &ldquo;{CREATOR_DATA.heroBio}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
