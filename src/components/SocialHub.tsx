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

  const ytSubLink = `${CREATOR_DATA.socials.youtube}?sub_confirmation=1`;
  const ytLink = isClient ? getSmartLink('youtube', ytSubLink) : ytSubLink;
  const ttLink = isClient ? getSmartLink('tiktok', CREATOR_DATA.socials.tiktok) : CREATOR_DATA.socials.tiktok;
  const igLink = isClient ? getSmartLink('instagram', CREATOR_DATA.socials.instagram) : CREATOR_DATA.socials.instagram;

  return (
    <section aria-label="Social Channels" className="grid grid-cols-3 gap-2 text-center">
      {/* YouTube with One-Click Sub */}
      <a
        href={ytLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3.5 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-red-500/40 hover:bg-red-500/5 transition-all active:scale-[0.95] shadow-xl backdrop-blur-xl"
        title="Subscribe to Teegs on YouTube"
      >
        <YouTubeIcon className="w-5 h-5 text-red-500 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-white">YouTube</span>
        <span className="text-[10px] text-red-400/80 font-mono mt-0.5">Subscribe 🔔</span>
      </a>

      {/* TikTok */}
      <a
        href={ttLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3.5 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all active:scale-[0.95] shadow-xl backdrop-blur-xl"
      >
        <TikTokIcon className="w-5 h-5 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-white">TikTok</span>
        <span className="text-[10px] text-neutral-400 font-mono mt-0.5">Videos & Lives</span>
      </a>

      {/* Instagram */}
      <a
        href={igLink}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center justify-center p-3.5 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all active:scale-[0.95] shadow-xl backdrop-blur-xl"
      >
        <InstagramIcon className="w-5 h-5 text-pink-500 mb-1 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-white">Instagram</span>
        <span className="text-[10px] text-neutral-400 font-mono mt-0.5">Photos & Stories</span>
      </a>
    </section>
  );
}
