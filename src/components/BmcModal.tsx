'use client';

import React, { useState } from 'react';
import { Coffee, X, ExternalLink, Loader2 } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

interface BmcModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BmcModal({ isOpen, onClose }: BmcModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg h-[85vh] max-h-[700px] flex flex-col rounded-3xl bg-neutral-900 border border-amber-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-950/80">
          <div className="flex items-center gap-2 text-amber-300 font-medium text-sm">
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>Buy Teegs a Coffee (£2)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href={CREATOR_DATA.funding.buyMeACoffee}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition text-xs flex items-center gap-1"
              title="Open full page"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 top-12 flex flex-col items-center justify-center bg-neutral-950/90 z-10 gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
            <span className="text-xs text-neutral-400 font-mono">Loading Buy Me a Coffee...</span>
          </div>
        )}

        {/* Embedded BMC Frame */}
        <div className="w-full flex-1 relative bg-neutral-950">
          <iframe
            src="https://buymeacoffee.com/teegs"
            className="w-full h-full border-0"
            title="Buy Teegs A Coffee"
            onLoad={() => setIsLoading(false)}
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}
