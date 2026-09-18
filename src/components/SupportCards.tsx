import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function SupportCards() {
  return (
    <section aria-label="Creator Funding" className="grid grid-cols-2 gap-2.5">
      {/* Buy Me A Coffee */}
      <a
        href={CREATOR_DATA.funding.buyMeACoffee}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/25 text-amber-200 hover:border-amber-400/50 hover:bg-amber-500/15 transition active:scale-98 shadow-sm"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-300 group-hover:scale-110 transition-transform">
          <Coffee className="w-5 h-5" />
        </div>
        <div className="text-left min-w-0">
          <div className="text-xs font-bold leading-tight truncate text-amber-200">
            Buy a Coffee
          </div>
          <div className="text-[10px] text-amber-400/70 truncate mt-0.5">
            Fuel street food vlogs
          </div>
        </div>
      </a>

      {/* PayPal Tip */}
      <a
        href={CREATOR_DATA.funding.paypal}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/5 border border-sky-500/25 text-sky-200 hover:border-sky-400/50 hover:bg-sky-500/15 transition active:scale-98 shadow-sm"
      >
        <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 text-sky-300 group-hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 text-sky-400" />
        </div>
        <div className="text-left min-w-0">
          <div className="text-xs font-bold leading-tight truncate text-sky-200">
            Tip via PayPal
          </div>
          <div className="text-[10px] text-sky-400/70 truncate mt-0.5">
            Keep the journey going
          </div>
        </div>
      </a>
    </section>
  );
}
