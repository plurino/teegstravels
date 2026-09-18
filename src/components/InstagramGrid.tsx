'use client';

import React from 'react';
import useSWR from 'swr';
import { Heart, Video } from 'lucide-react';
import { InstagramIcon } from '@/components/BrandIcons';
import { InstagramPostItem, FALLBACK_IG_POSTS } from '@/app/api/instagram/route';
import { CREATOR_DATA } from '@/config/creator';
import { CardSkeleton } from './Skeletons';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function InstagramGrid() {
  const { data: posts, isLoading } = useSWR<InstagramPostItem[]>('/api/instagram', fetcher, {
    fallbackData: FALLBACK_IG_POSTS,
    revalidateOnFocus: false
  });

  if (isLoading && !posts) {
    return <CardSkeleton height="h-64" />;
  }

  const items = posts || FALLBACK_IG_POSTS;

  return (
    <section aria-label="Instagram Gallery" className="w-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
          <InstagramIcon className="w-4 h-4 text-pink-500" />
          <span>Instagram Snaps & Reels</span>
        </div>
        <a
          href={CREATOR_DATA.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-pink-400 hover:underline font-mono"
        >
          {CREATOR_DATA.handle} →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {items.slice(0, 6).map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-pink-500/40 transition-all active:scale-95 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />

            {/* Reel badge if video */}
            {post.type === 'reel' && (
              <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/60 backdrop-blur-sm text-white border border-white/10">
                <Video className="w-2.5 h-2.5" />
              </div>
            )}

            {/* Hover details overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
              <div className="flex items-center gap-1 text-pink-300 text-xs font-bold font-mono">
                <Heart className="w-3 h-3 fill-current" />
                <span>{post.likes}</span>
              </div>
              <p className="text-[9px] text-neutral-300 line-clamp-2 mt-1">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
