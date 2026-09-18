'use client';

import React, { useSyncExternalStore } from 'react';
import useSWR from 'swr';
import { Play, Share2, Flame } from 'lucide-react';
import { YouTubeIcon } from '@/components/BrandIcons';
import { YouTubeVideoItem, FALLBACK_LATEST_VLOG } from '@/lib/rss';
import { getSmartLink } from '@/lib/deepLink';
import { VideoCardSkeleton } from './Skeletons';

const subscribe = () => () => {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function LatestVlogCard() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { data: video, isLoading } = useSWR<YouTubeVideoItem>(`${basePath}/api/vlog`, fetcher, {
    fallbackData: FALLBACK_LATEST_VLOG,
    refreshInterval: 120000, // Background auto-poll every 2 minutes for new uploads
    revalidateOnFocus: true,
  });

  if (isLoading && !video) {
    return <VideoCardSkeleton />;
  }

  const currentVideo = video || FALLBACK_LATEST_VLOG;

  const deepLink = isClient
    ? getSmartLink('youtube', currentVideo.link, currentVideo.id)
    : currentVideo.link;

  return (
    <div className="group w-full rounded-3xl bg-neutral-900/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl transition-all hover:border-white/20">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5 text-red-400 font-semibold">
          <YouTubeIcon className="w-3.5 h-3.5" />
          <span>LATEST YOUTUBE VLOG</span>
        </div>

        {/* Dynamic New Drop Badge */}
        <div className="flex items-center gap-1 text-[10px] text-amber-300 font-bold bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full animate-pulse">
          <Flame className="w-3 h-3 text-amber-400 fill-current" />
          <span>NEW DROP</span>
        </div>
      </div>

      {/* Video Hero Thumbnail */}
      <a
        href={deepLink}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-video w-full overflow-hidden bg-neutral-950 cursor-pointer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentVideo.thumbnail}
          alt={currentVideo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-black/20 to-transparent" />

        {/* Play Button Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 group-active:scale-95 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      </a>

      {/* Title & Actions */}
      <div className="p-4 flex flex-col gap-2.5">
        <a
          href={deepLink}
          target="_blank"
          rel="noreferrer"
          className="text-xs sm:text-sm font-semibold text-neutral-100 hover:text-red-400 transition-colors line-clamp-2 leading-snug"
        >
          {currentVideo.title}
        </a>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <a
            href={deepLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-red-400 hover:text-red-300 inline-flex items-center gap-1.5"
          >
            <span>Watch on YouTube App</span>
            <Play className="w-3 h-3 fill-current" />
          </a>

          <button
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: currentVideo.title,
                    text: `🎒 Watch Teegs' latest travel vlog ✈️:`,
                    url: currentVideo.link
                  });
                } catch {
                  // Ignore
                }
              } else {
                navigator.clipboard.writeText(currentVideo.link);
              }
            }}
            className="text-neutral-400 hover:text-neutral-200 p-1.5 rounded-lg hover:bg-neutral-800 transition cursor-pointer"
            title="Share Video"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
