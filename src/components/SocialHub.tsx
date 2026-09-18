'use client';

import React, { useSyncExternalStore } from 'react';
import { YouTubeIcon, InstagramIcon, TikTokIcon } from '@/components/BrandIcons';
import { CREATOR_DATA } from '@/config/creator';
import { getSmartLink } from '@/lib/deepLink';

const subscribe = () => () => {};

export function SocialHub() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const ytLink = isClient ? getSmartLink('youtube', CREATOR_DATA.socials.youtube) : CREATOR_DATA.socials.youtube;
  const ttLink = isClient ? getSmartLink('tiktok', CREATOR_DATA.socials.tiktok) : CREATOR_DATA.socials.tiktok;
  const igLink = isClient ? getSmartLink('instagram', CREATOR_DATA.socials.instagram) : CREATOR_DATA.socials.instagram;

  return (
    <section aria-label="Social Channels" className="grid grid-cols-3 gap-2 text-center">
      {/* YouTube */}
      <a
        href={ytLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 hover:bg-neutral-850 transition active:scale-95 shadow-sm"
      >
        <YouTubeIcon className="w-5 h-5 text-red-500 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-neutral-200">YouTube</span>
        <span className="text-[10px] text-neutral-400">Vlogs & Shorts</span>
      </a>

      {/* TikTok */}
      <a
        href={ttLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-cyan-400/50 hover:bg-neutral-850 transition active:scale-95 shadow-sm"
      >
        <TikTokIcon className="w-5 h-5 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-neutral-200">TikTok</span>
        <span className="text-[10px] text-neutral-400">Videos & Lives</span>
      </a>

      {/* Instagram */}
      <a
        href={igLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-850 transition active:scale-95 shadow-sm"
      >
        <InstagramIcon className="w-5 h-5 text-pink-500 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-neutral-200">Instagram</span>
        <span className="text-[10px] text-neutral-400">Photos & Updates</span>
      </a>
    </section>
  );
}
