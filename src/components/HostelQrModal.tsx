'use client';

import React, { useState } from 'react';
import { QrCode, X, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { CREATOR_DATA } from '@/config/creator';

export function HostelQrModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // SVG QR Code pointing directly to teegstravels.com via public QR API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(CREATOR_DATA.canonicalUrl)}&color=ffffff&bgcolor=141416`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_DATA.canonicalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Connect QR Code"
        className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition active:scale-95 flex items-center justify-center cursor-pointer"
        title="Hostel & Traveler Connect QR"
      >
        <QrCode className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[340px] rounded-3xl bg-[#141416] border border-white/10 p-5 flex flex-col items-center gap-4 text-center shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center gap-1 mt-1">
              <span className="text-[10px] font-mono text-amber-400 font-semibold tracking-wider uppercase">
                Hostel & Traveler Connect
              </span>
              <h3 className="text-base font-bold text-white">
                Scan to Follow Teegs
              </h3>
            </div>

            {/* QR Frame with Avatar Center */}
            <div className="relative p-3 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-inner flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrUrl}
                alt="TeegsTravels QR Code"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <div className="absolute w-10 h-10 rounded-full border-2 border-neutral-950 overflow-hidden shadow-md">
                <Image
                  src="/images/teegs-avatar.png"
                  alt="Teegs"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Scan with your phone camera to instantly open TeegsTravels.com on mobile!
            </p>

            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-200 flex items-center justify-center gap-1.5 transition active:scale-98 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'Link Copied!' : 'Copy Website Link'}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
