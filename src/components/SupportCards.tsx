'use client';

import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';
import { fireSupportConfetti } from '@/lib/confetti';

export function SupportCards() {
  const handleBmcClick = () => {
    fireSupportConfetti();
  };

  const handlePaypalClick = () => {
    fireSupportConfetti();
  };

  return (
    <section aria-label="Creator Funding" className="w-full flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Buy Me A Coffee */}
        <a
          href={CREATOR_DATA.funding.buyMeACoffee}
          target="_blank"
          rel="noreferrer"
          onClick={handleBmcClick}
          className="group relative flex items-center gap-3 p-3.5 rounded-3xl bg-neutral-900/60 border border-amber-500/20 text-amber-200 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all active:scale-[0.96] shadow-xl backdrop-blur-xl cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-300 group-hover:scale-110 transition-transform">
            <Coffee className="w-5 h-5" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs font-bold leading-tight truncate text-amber-200">
              Buy me a Coffee
            </div>
            <div className="text-[10px] text-amber-400/70 truncate mt-0.5">
              ☕ Buy me a coffee (£2)
            </div>
          </div>
        </a>

        {/* PayPal Tip */}
        <a
          href={CREATOR_DATA.funding.paypal}
          target="_blank"
          rel="noreferrer"
          onClick={handlePaypalClick}
          className="group relative flex items-center gap-3 p-3.5 rounded-3xl bg-neutral-900/60 border border-sky-500/20 text-sky-200 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all active:scale-[0.96] shadow-xl backdrop-blur-xl cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 text-sky-300 group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 text-sky-400" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs font-bold leading-tight truncate text-sky-200">
              Tip via PayPal
            </div>
            <div className="text-[10px] text-sky-400/70 truncate mt-0.5">
              ⛽ Scooter Fuel (£5)
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
