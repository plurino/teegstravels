'use client';

import React from 'react';
import useSWR from 'swr';
import { Heart, Play } from 'lucide-react';
import { TikTokFeedItem, FALLBACK_TIKTOK_POSTS } from '@/app/api/tiktok/route';
import { CarouselSkeleton } from './Skeletons';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TikTokCarousel() {
  const { data: posts, isLoading } = useSWR<TikTokFeedItem[]>('/api/tiktok', fetcher, {
    fallbackData: FALLBACK_TIKTOK_POSTS,
    revalidateOnFocus: false
  });

  if (isLoading && !posts) {
    return <CarouselSkeleton />;
  }

  const items = posts || FALLBACK_TIKTOK_POSTS;

  return (
    <section aria-label="TikTok Feed" className="w-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
          <span className="text-sm">🎵</span>
          <span>TikTok Trending Clips</span>
        </div>
        <a
          href="https://www.tiktok.com/@itsnottegxnn"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-cyan-400 hover:underline font-mono"
        >
          @itsnottegxnn →
        </a>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-2 pt-0.5 scrollbar-none snap-x snap-mandatory">
        {items.map((post) => (
          <a
            key={post.id}
            href={post.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex-shrink-0 w-[130px] h-[210px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-400/40 snap-start transition-all active:scale-95 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* TikTok Badge */}
            <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[9px] font-mono text-cyan-300 border border-cyan-500/20">
              TikTok
            </div>

            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
              <Play className="w-3 h-3 fill-current ml-0.5 text-cyan-400" />
            </div>

            {/* Meta */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[10px] text-neutral-300 font-mono">
                <span className="text-cyan-300 font-medium">{post.views}</span>
                <span className="flex items-center gap-0.5 text-rose-400">
                  <Heart className="w-2.5 h-2.5 fill-current" />
                  {post.likes}
                </span>
              </div>
              <p className="text-[10px] text-neutral-100 font-medium line-clamp-2 leading-tight">
                {post.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
