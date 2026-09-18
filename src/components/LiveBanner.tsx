'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { Radio, MessageSquare, X, ExternalLink, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

interface KickStatus {
  isLive: boolean;
  title: string;
  viewers: number;
  category?: string;
  slug?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function LiveBanner() {
  const [showChatModal, setShowChatModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const { data, error } = useSWR<KickStatus>('/api/kick-live', fetcher, {
    refreshInterval: 60000, // Query every 60s
    revalidateOnFocus: true,
    fallbackData: { isLive: false, title: '', viewers: 0 }
  });

  if (error || !data || !data.isLive) {
    return null; // Auto-hides when offline
  }

  return (
    <>
      {/* Real-time radar alert banner */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-red-950/80 via-rose-900/60 to-red-950/80 border border-red-500/50 p-3.5 shadow-lg shadow-red-950/40 backdrop-blur-md flex flex-col gap-2.5 animate-in fade-in duration-300">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-red-400" />
              Live Now on Kick
            </span>
          </div>

          {data.viewers > 0 && (
            <div className="flex items-center gap-1 text-[11px] font-mono text-red-200/90 bg-red-900/50 px-2 py-0.5 rounded-full border border-red-500/30">
              <Users className="w-3 h-3 text-red-400" />
              <span>{data.viewers.toLocaleString()}</span>
            </div>
          )}
        </div>

        <p className="text-xs font-medium text-white truncate">
          {data.title || 'Solo Travel IRL Stream with Teegs'}
        </p>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2 pt-1">
          <a
            href={CREATOR_DATA.socials.kick}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition active:scale-98 shadow-sm"
          >
            <span>Join Kick Stream</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setShowChatModal(true)}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-neutral-900/90 border border-red-500/40 hover:bg-neutral-800 text-neutral-200 text-xs font-medium transition active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-red-400" />
            <span>Chat</span>
          </button>

          <button
            onClick={() => setShowPlayer(!showPlayer)}
            className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 transition active:scale-98 cursor-pointer"
            title={showPlayer ? 'Hide Player' : 'Watch Here'}
          >
            {showPlayer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Embedded Live Video Player Accordion */}
        {showPlayer && (
          <div className="mt-2 w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black">
            <iframe
              src="https://player.kick.com/itsnottegxnn?muted=true&autoplay=true"
              className="w-full h-full border-0"
              allowFullScreen
              title="Kick Live Stream"
            />
          </div>
        )}
      </div>

      {/* Embedded Live Chat Drawer/Modal */}
      {showChatModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[460px] h-[80vh] sm:h-[650px] bg-[#121214] border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800/80 bg-neutral-900/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-sm font-bold text-neutral-100">Live Kick Chat</span>
                <span className="text-[10px] text-neutral-400 font-mono">@itsnottegxnn</span>
              </div>
              <button
                onClick={() => setShowChatModal(false)}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Kick Chatroom iframe */}
            <div className="flex-1 w-full bg-neutral-950 relative">
              <iframe
                src="https://kick.com/itsnottegxnn/chatroom"
                className="w-full h-full border-0"
                title="Kick Chatroom"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>

            {/* Footer */}
            <div className="p-3 bg-neutral-900/60 border-t border-neutral-800 text-center">
              <a
                href={CREATOR_DATA.socials.kick}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-red-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Open in full Kick App / Web</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
