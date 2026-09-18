'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { isInAppBrowser, getInAppBrowserName } from '@/lib/deepLink';
import { ExternalLink, X, Copy, Check } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

const subscribe = () => () => {};

export function InAppBrowserBanner() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  const inApp = isClient && isInAppBrowser();
  const browserName = isClient ? getInAppBrowserName() : null;

  if (!inApp || dismissed) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href || CREATOR_DATA.canonicalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full rounded-2xl bg-amber-500/15 border border-amber-500/40 p-3 flex flex-col gap-2 animate-in fade-in duration-300">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
          <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          <span>Open in Safari / Chrome</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-400/80 hover:text-amber-200 p-0.5 rounded cursor-pointer"
          aria-label="Dismiss warning"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] text-amber-200/90 leading-relaxed">
        You are currently viewing this inside {browserName || 'an in-app'} browser. External video embeds and live chat may be throttled.
      </p>

      <div className="flex items-center gap-2 pt-0.5">
        <button
          onClick={handleCopyLink}
          className="flex-1 py-1.5 px-2.5 rounded-lg bg-amber-500 text-neutral-950 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shadow-sm"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Link Copied!' : 'Copy Link for Safari/Chrome'}</span>
        </button>

        <span className="text-[10px] text-amber-300/80 font-mono">
          Tap ••• → &quot;Open in Browser&quot;
        </span>
      </div>
    </div>
  );
}
