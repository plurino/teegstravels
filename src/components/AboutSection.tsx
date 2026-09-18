import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section aria-label="About Teegs Travels" className="w-full rounded-2xl bg-neutral-900/60 border border-neutral-800/80 p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
        <Compass className="w-4 h-4 text-amber-400" />
        <h2>About Teegs (Tegan Johnson)</h2>
      </div>

      <div className="text-xs text-neutral-300 leading-relaxed space-y-2.5">
        <p>
          On the 1st of July 2026, <strong>Tegan Johnson</strong> (known online as <strong>Teegs</strong>, <em>@itsnottegxnn</em>, and <em>teganjohnson07</em>) took the biggest leap of her life. Armed with her final UK paycheck, a solitary travel backpack, and a one-way ticket to Southeast Asia, she set out to sort her life out and document the raw, unfiltered truth of solo female travel.
        </p>
        <p>
          From navigating bustling night markets in Bangkok and surviving sleeper trains across Thailand to impromptu scooter journeys through coastal Vietnam, <strong>Teegs Travels</strong> is not a curated influencer brochure—it is an authentic, chaotic, and heartwarming 110% real adventure.
        </p>
        <p>
          Through daily YouTube vlogs, viral TikTok moments, live IRL Kick broadcasts, and candid Instagram diaries, Teegs brings hundreds of thousands of supporters along for every passport stamp, hostel friendship, and unexpected detour.
        </p>
      </div>

      <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <span>EST. JULY 2026</span>
        <span className="flex items-center gap-1 text-amber-400/90">
          <Sparkles className="w-3 h-3" />
          <span>Zero Itinerary. Full Send.</span>
        </span>
      </div>
    </section>
  );
}
