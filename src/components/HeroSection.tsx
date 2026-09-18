import React from 'react';
import { CREATOR_DATA } from '@/config/creator';
import { TravelCounter } from './TravelCounter';
import { ShareButton } from './ShareButton';
import { Sparkles, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center pt-2 relative">
      {/* Top action bar: Quick share button */}
      <div className="w-full flex justify-between items-center mb-4 px-1">
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
          <MapPin className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span>Southeast Asia (IRL)</span>
        </div>
        <ShareButton variant="icon" />
      </div>

      {/* Story Ring Avatar */}
      <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-amber-400 to-violet-600 mb-3.5 shadow-xl shadow-rose-500/10 transition-transform hover:scale-105">
        <div className="w-full h-full rounded-full bg-neutral-900 border-2 border-neutral-950 flex items-center justify-center font-bold text-3xl text-amber-200 select-none shadow-inner">
          <span className="bg-gradient-to-br from-amber-200 via-rose-300 to-amber-400 bg-clip-text text-transparent">
            T
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-rose-600 border-2 border-[#0d0d0e] text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow">
          <Sparkles className="w-2.5 h-2.5" />
          <span>IRL</span>
        </div>
      </div>

      {/* Autonomous Counter */}
      <TravelCounter />

      {/* Verified Titles & Identifiers */}
      <h1 className="text-2xl font-bold tracking-tight mt-3 text-neutral-100 flex items-center gap-1.5 justify-center">
        <span>{CREATOR_DATA.siteTitle}</span>
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-500 text-white text-[10px]" title="Verified Creator">
          ✓
        </span>
      </h1>
      <p className="text-xs text-neutral-400 font-mono mt-0.5">
        {CREATOR_DATA.handle} <span className="text-neutral-600">•</span> {CREATOR_DATA.name}
      </p>

      {/* Word-for-Word Authentic Bio */}
      <div className="text-xs leading-relaxed text-neutral-300 mt-3.5 w-full bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4 text-left shadow-sm backdrop-blur-sm relative">
        <div className="text-neutral-500 text-xs font-mono mb-1 flex items-center justify-between">
          <span>ORIGINAL BIO</span>
          <span className="text-[10px] text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            One-Way Ticket
          </span>
        </div>
        <p className="italic text-neutral-200">
          &ldquo;{CREATOR_DATA.heroBio}&rdquo;
        </p>
      </div>
    </section>
  );
}
