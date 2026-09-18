'use client';

import { useSyncExternalStore } from 'react';
import { CREATOR_DATA } from '@/config/creator';

const subscribe = () => () => {};

function getDaysSnapshot(): number {
  const departure = new Date(CREATOR_DATA.departureDate).getTime();
  return Math.floor(Math.max(0, Date.now() - departure) / (1000 * 60 * 60 * 24));
}

function getServerSnapshot(): number | null {
  return null;
}

export function TravelCounter() {
  const days = useSyncExternalStore(subscribe, getDaysSnapshot, getServerSnapshot);

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium tracking-wide shadow-sm hover:bg-amber-500/15 transition-colors">
      <span className="text-sm">🎒</span>
      <span>
        {days !== null ? `Day ${days} of Traveling The World` : 'On The Road'} • One-Way Ticket
      </span>
    </div>
  );
}
