'use client';

import React from 'react';
import useSWR from 'swr';
import { Play, Flame } from 'lucide-react';
import { YouTubeVideoItem, FALLBACK_SHORTS } from '@/lib/rss';
import { CarouselSkeleton } from './Skeletons';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ShortsCarousel() {
  const { data: shorts, isLoading } = useSWR<YouTubeVideoItem[]>('/api/shorts', fetcher, {
    fallbackData: FALLBACK_SHORTS,
    revalidateOnFocus: false
  });

  if (isLoading && !shorts) {
    return <CarouselSkeleton />;
  }

  const items = shorts || FALLBACK_SHORTS;

  return (
    <section aria-label="YouTube Shorts" className="w-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
          <Flame className="w-4 h-4 text-red-500" />
          <span>YouTube Shorts</span>
        </div>
        <a
          href="https://www.youtube.com/@Itsnottegxnn/shorts"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-neutral-400 hover:text-red-400 font-mono transition"
        >
          View All →
        </a>
      </div>

      {/* Horizontal Swipeable Container */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 pt-0.5 scrollbar-none snap-x snap-mandatory">
        {items.map((short) => (
          <a
            key={short.id}
            href={short.link}
            target="_blank"
            rel="noreferrer"
            className="group relative flex-shrink-0 w-[124px] h-[200px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-500/40 snap-start transition-all active:scale-95 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={short.thumbnail}
              alt={short.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Play badge */}
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
              <Play className="w-3 h-3 fill-current ml-0.5 text-red-400" />
            </div>

            {/* Content info */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-0.5">
              {short.views && (
                <span className="text-[10px] font-mono text-amber-300 font-medium">
                  {short.views}
                </span>
              )}
              <p className="text-[11px] text-white font-medium line-clamp-2 leading-tight drop-shadow">
                {short.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
