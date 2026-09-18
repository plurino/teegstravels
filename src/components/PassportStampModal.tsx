'use client';

import React, { useState } from 'react';
import { Award, X, Sparkles } from 'lucide-react';

export function PassportStampModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [stamped, setStamped] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setStamped(true), 300);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Passport Stamp"
        className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition active:scale-95 flex items-center justify-center cursor-pointer"
        title="View Official Passport Stamp"
      >
        <Award className="w-4 h-4 text-amber-400" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[340px] rounded-3xl bg-[#1c1a17] border border-amber-900/40 p-5 flex flex-col items-center gap-4 text-center shadow-2xl relative">
            <button
              onClick={() => {
                setIsOpen(false);
                setStamped(false);
              }}
              className="absolute top-3.5 right-3.5 p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Passport</span>
            </div>

            {/* Passport Stamp Graphic */}
            <div className="w-full p-4 rounded-2xl bg-[#151311] border border-dashed border-amber-500/30 flex flex-col items-center justify-center min-h-[170px] relative overflow-hidden">
              <div
                className={`transition-all duration-500 transform ${
                  stamped
                    ? 'scale-100 opacity-100 rotate-[-6deg]'
                    : 'scale-150 opacity-0 rotate-12'
                }`}
              >
                <div className="border-4 border-dashed border-rose-500/80 rounded-2xl p-3 text-center text-rose-400 font-mono select-none">
                  <div className="text-[10px] uppercase font-bold tracking-widest">
                    ★ IMMIGRATION STATUS ★
                  </div>
                  <div className="text-sm font-black tracking-wider text-rose-300 my-1">
                    ONE-WAY TICKET
                  </div>
                  <div className="text-[11px] font-bold text-amber-300">
                    TEEGS TRAVELS CLUB
                  </div>
                  <div className="text-[9px] text-neutral-400 mt-1">
                    CERTIFIED WANDERER • 2026
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              You&apos;ve unlocked the official <strong>One-Way Ticket Club</strong> stamp! Screenshot this badge to share on your story.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-semibold hover:bg-amber-500/30 transition active:scale-98 cursor-pointer"
            >
              Keep Traveling 🎒
            </button>
          </div>
        </div>
      )}
    </>
  );
}
