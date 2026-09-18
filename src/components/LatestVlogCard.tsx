'use client';

import React, { useSyncExternalStore } from 'react';
import useSWR from 'swr';
import { Play, Calendar, Clock, Share2 } from 'lucide-react';
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

  const { data: video, isLoading } = useSWR<YouTubeVideoItem>('/api/vlog', fetcher, {
    fallbackData: FALLBACK_LATEST_VLOG,
    revalidateOnFocus: false,
  });

  if (isLoading && !video) {
    return <VideoCardSkeleton />;
  }

  const currentVideo = video || FALLBACK_LATEST_VLOG;
  const deepLink = isClient
    ? getSmartLink('youtube', currentVideo.link, currentVideo.id)
    : currentVideo.link;

  const formattedDate = currentVideo.published
    ? new Date(currentVideo.published).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : 'Recent Vlog';

  return (
    <div className="group w-full rounded-2xl bg-neutral-900/90 border border-neutral-800/90 overflow-hidden shadow-md hover:border-red-500/40 transition-all">
      {/* Header label */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5 text-red-400 font-semibold">
          <YouTubeIcon className="w-3.5 h-3.5" />
          <span>LATEST YOUTUBE DROP</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-400">
          <Calendar className="w-3 h-3" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Video Thumbnail with Play Badge */}
      <a
        href={deepLink}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-video w-full overflow-hidden bg-neutral-950"
      >
        {/* Thumbnail image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentVideo.thumbnail}
          alt={currentVideo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-black/20" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        {currentVideo.duration && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-neutral-200 flex items-center gap-1 border border-white/10">
            <Clock className="w-2.5 h-2.5" />
            <span>{currentVideo.duration}</span>
          </div>
        )}
      </a>

      {/* Title & Actions */}
      <div className="p-3.5 flex flex-col gap-2">
        <a
          href={deepLink}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-neutral-100 hover:text-red-400 transition-colors line-clamp-2 leading-snug"
        >
          {currentVideo.title}
        </a>

        {currentVideo.description && (
          <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
            {currentVideo.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-1 border-t border-neutral-800/60">
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
                    text: `Check out Teegs' latest travel vlog!`,
                    url: currentVideo.link
                  });
                } catch {
                  // Fallback
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
