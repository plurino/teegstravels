'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([15]);
      } catch {
        // Ignore
      }
    }

    try {
      await navigator.clipboard.writeText(CREATOR_DATA.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section aria-label="Get in Touch" className="w-full rounded-3xl bg-neutral-900/60 border border-white/10 p-4 flex flex-col gap-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-white">Contact Teegs</h2>
            <p className="text-[10px] text-neutral-400 font-mono">
              Direct Inquiries & Messages
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-neutral-300 leading-relaxed">
        Got a question, recommendation for the road, or just want to send friendly vibes? Drop an email below:
      </p>

      {/* Email Display & Actions */}
      <div className="flex items-center gap-2 pt-0.5">
        <a
          href={`mailto:${CREATOR_DATA.contactEmail}?subject=Hey%20Teegs!%20-%20From%20TeegsTravels.com`}
          className="flex-1 py-3 px-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.97] shadow-lg shadow-rose-950/40 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send an Email</span>
        </a>

        <button
          onClick={handleCopy}
          className="py-3 px-3.5 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 border border-white/10 text-neutral-200 text-xs font-mono flex items-center gap-1.5 transition-all active:scale-[0.97] cursor-pointer"
          title="Copy Email Address"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
          <span className="text-[11px]">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="text-[10px] text-neutral-400 font-mono text-center">
        {CREATOR_DATA.contactEmail}
      </div>
    </section>
  );
}
