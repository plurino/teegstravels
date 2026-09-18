'use client';

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  variant?: 'pill' | 'icon' | 'compact';
  label?: string;
}

export function ShareButton({
  title = `Tegan Johnson 🎒`,
  text = `🎒 ✈️ Follow Teegs (@itsnottegxnn) on her solo one-way ticket journey around the world! Check out her latest vlogs & live updates:`,
  url,
  variant = 'pill',
  label = 'Share Hub'
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const getEffectiveUrl = () => {
    if (url) return url;
    if (typeof window !== 'undefined' && window.location.href) {
      return window.location.href.split('#')[0];
    }
    return CREATOR_DATA.canonicalUrl;
  };

  const handleShare = async () => {
    const shareUrl = getEffectiveUrl();

    // Haptic feedback if supported
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([20, 30, 20]);
      } catch {
        // Ignore vibration errors
      }
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to clipboard
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Manual fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleShare}
        aria-label="Share Tegan Johnson"
        className="relative p-2 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition active:scale-95 flex items-center justify-center cursor-pointer"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        {copied && (
          <span className="absolute -top-7 right-0 text-[10px] font-medium bg-emerald-500/90 text-black px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 transition active:scale-95 cursor-pointer"
      >
        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
        <span>{copied ? 'Copied!' : 'Share'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white text-xs font-medium transition active:scale-95 cursor-pointer shadow-sm"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
      <span>{copied ? 'Link Copied!' : label}</span>
    </button>
  );
}
