'use client';

import React, { useState } from 'react';
import { Plane, Sparkles, Ticket } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function BoardingPassCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group relative w-full rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/70 to-neutral-950/90 border border-white/10 p-4 shadow-xl backdrop-blur-xl transition-all hover:border-amber-500/40 active:scale-[0.98] cursor-pointer overflow-hidden"
    >
      {/* Perforated Notches */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0c0c0e] border-r border-white/10" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0c0c0e] border-l border-white/10" />

      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/10 text-[10px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
          <Ticket className="w-3.5 h-3.5" />
          <span>OFFICIAL BOARDING PASS</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
          ONE-WAY ONLY
        </span>
      </div>

      {/* Origin -> Destination Banner */}
      <div className="py-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-neutral-400 block">ORIGIN</span>
          <span className="text-xl font-black text-white tracking-wider">LON</span>
          <span className="text-[10px] text-neutral-400 block">United Kingdom</span>
        </div>

        <div className="flex flex-col items-center px-3">
          <div className="flex items-center gap-1 text-amber-400">
            <span className="w-8 h-[1px] bg-dashed border-t border-dashed border-neutral-600" />
            <Plane className="w-4 h-4 rotate-90" />
            <span className="w-8 h-[1px] bg-dashed border-t border-dashed border-neutral-600" />
          </div>
          <span className="text-[9px] font-mono text-neutral-400 mt-1">NON-STOP SOLO</span>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-neutral-400 block">DESTINATION</span>
          <span className="text-xl font-black text-amber-300 tracking-wider">WRLD</span>
          <span className="text-[10px] text-neutral-400 block">Open Itinerary</span>
        </div>
      </div>

      {/* Passenger & Flight Details */}
      <div className="pt-2 border-t border-dashed border-white/10 grid grid-cols-3 gap-2 text-left text-[10px] font-mono">
        <div>
          <span className="text-neutral-400 block">PASSENGER</span>
          <span className="text-neutral-200 font-semibold truncate block">{CREATOR_DATA.name}</span>
        </div>
        <div>
          <span className="text-neutral-400 block">DEPARTURE</span>
          <span className="text-neutral-200 font-semibold block">01 JUL 2026</span>
        </div>
        <div className="text-right">
          <span className="text-neutral-400 block">SEAT</span>
          <span className="text-amber-300 font-semibold block">1A (YOLO)</span>
        </div>
      </div>

      {/* Secret Mantra Reveal on Tap */}
      {flipped && (
        <div className="mt-3 p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs italic text-center animate-in fade-in duration-200">
          &ldquo;I have no idea what’s going on 110% of the time, but we&apos;re doing it anyway!&rdquo; 🎒✨
        </div>
      )}

      {/* Faux Barcode Footer */}
      <div className="mt-3 pt-2.5 flex items-center justify-between opacity-50 text-[9px] font-mono text-neutral-400">
        <div className="tracking-widest select-none">
          ||| | |||| | ||| |||| | || | |||| |||
        </div>
        <span className="flex items-center gap-1 group-hover:text-amber-300 transition-colors">
          <Sparkles className="w-3 h-3" />
          <span>Tap to flip</span>
        </span>
      </div>
    </div>
  );
}
