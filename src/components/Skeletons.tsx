import React from 'react';

export function VideoCardSkeleton() {
  return (
    <div className="w-full rounded-2xl bg-neutral-900/90 border border-neutral-800 p-3 flex flex-col gap-3 animate-pulse">
      <div className="w-full aspect-video rounded-xl bg-neutral-800" />
      <div className="space-y-2">
        <div className="h-4 bg-neutral-800 rounded w-5/6" />
        <div className="h-3 bg-neutral-800 rounded w-1/2" />
      </div>
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <div className="flex gap-3 overflow-x-hidden py-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="min-w-[140px] h-[220px] rounded-2xl bg-neutral-900/80 border border-neutral-800 animate-pulse flex-shrink-0" />
      ))}
    </div>
  );
}
