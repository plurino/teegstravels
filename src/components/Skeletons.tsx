import React from 'react';

export function CardSkeleton({ height = "h-48", className = "" }: { height?: string; className?: string }) {
  return (
    <div className={`w-full ${height} rounded-2xl bg-neutral-900/80 border border-neutral-800/80 p-4 relative overflow-hidden animate-pulse ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
    </div>
  );
}

export function LiveBannerSkeleton() {
  return (
    <div className="w-full h-12 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 animate-pulse flex items-center px-4 gap-3">
      <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
      <div className="h-3 w-40 bg-neutral-800 rounded-full" />
    </div>
  );
}

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
