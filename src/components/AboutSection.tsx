import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section aria-label="About Teegs Travels" className="w-full rounded-2xl bg-neutral-900/60 border border-neutral-800/80 p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
        <Compass className="w-4 h-4 text-amber-400" />
        <h2>About Teegs</h2>
      </div>

      <div className="text-xs text-neutral-300 leading-relaxed space-y-2.5">
        <p>
          On the 1st of July 2026, <strong>Tegan Johnson</strong> (known online as <strong>Teegs</strong> / <em>@itsnottegxnn</em>) packed a backpack, left the UK with a one-way ticket, and decided to give social media a go.
        </p>
        <p>
          Traveling solo with no fixed master plan, she documents the real highs and lows of life on the road. She shares unfiltered <strong>YouTube vlogs</strong>, goes live on <strong>TikTok Lives</strong>, and shares occasional photo updates on <strong>Instagram</strong> as she figures life out one day at a time.
        </p>
      </div>

      <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <span>EST. JULY 2026</span>
        <span className="flex items-center gap-1 text-amber-400/90">
          <Sparkles className="w-3 h-3" />
          <span>One-Way Ticket Journey</span>
        </span>
      </div>
    </section>
  );
}
