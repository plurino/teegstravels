'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([20, 20]);
      } catch {
        // Ignore
      }
    }

    try {
      await navigator.clipboard.writeText(CREATOR_DATA.businessEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section aria-label="Business & Collabs" className="w-full rounded-2xl bg-neutral-900/80 border border-neutral-800 p-4 flex flex-col gap-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-neutral-200">Business & Collabs</h2>
            <p className="text-[10px] text-neutral-400 font-mono">
              Direct Inquiries
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-neutral-300 leading-relaxed">
        For brand partnerships, hotel stays, and collaborative inquiries, reach out directly via email:
      </p>

      {/* Email Display & Actions */}
      <div className="flex items-center gap-2 pt-0.5">
        <a
          href={`mailto:${CREATOR_DATA.businessEmail}?subject=Collaboration%20Inquiry%20-%20Teegs%20Travels`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-98 shadow-sm"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Email Teegs</span>
        </a>

        <button
          onClick={handleCopy}
          className="py-2.5 px-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 text-neutral-200 text-xs font-mono flex items-center gap-1.5 transition active:scale-98 cursor-pointer"
          title="Copy Email Address"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
          <span className="text-[11px]">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="text-[10px] text-neutral-400 font-mono text-center">
        {CREATOR_DATA.businessEmail}
      </div>
    </section>
  );
}
