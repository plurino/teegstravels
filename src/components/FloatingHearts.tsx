'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Heart } from 'lucide-react';

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number; // percentage
  size: number;
  duration: number;
}

const EMOJIS = ['💖', '✈️', '🎒', '🌴', '✨', '🔥', '🛵', '🥥'];

export function dispatchVibesEvent() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('teegs-send-vibes'));
  }
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingEmoji[]>([]);
  const [vibeCount, setVibeCount] = useState(42);

  const spawnEmoji = useCallback(() => {
    // Haptic pulse if mobile
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([12]);
      } catch {
        // Ignore
      }
    }

    const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const newEmoji: FloatingEmoji = {
      id: Date.now() + Math.random(),
      emoji: randomEmoji,
      left: Math.floor(Math.random() * 60) + 20, // 20% to 80%
      size: Math.floor(Math.random() * 12) + 20, // 20px - 32px
      duration: Math.random() * 1.5 + 2.0 // 2s - 3.5s
    };

    setHearts((prev) => [...prev.slice(-25), newEmoji]);
    setVibeCount((prev) => prev + 1);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newEmoji.id));
    }, newEmoji.duration * 1000);
  }, []);

  useEffect(() => {
    const handleEvent = () => spawnEmoji();
    window.addEventListener('teegs-send-vibes', handleEvent);
    return () => window.removeEventListener('teegs-send-vibes', handleEvent);
  }, [spawnEmoji]);

  return (
    <>
      {/* Floating Emojis Canvas Layer */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="absolute bottom-16 select-none animate-float-fade"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${h.duration}s`
            }}
          >
            {h.emoji}
          </span>
        ))}
      </div>

      {/* Floating Action Button (TikTok Live Style) */}
      <div className="fixed bottom-5 right-4 z-40">
        <button
          onClick={spawnEmoji}
          aria-label="Send Vibes to Teegs"
          className="group relative flex items-center gap-1.5 px-3 py-2 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white shadow-xl shadow-rose-950/60 border border-white/20 backdrop-blur-md transition-all active:scale-90 hover:scale-105 cursor-pointer"
        >
          <Heart className="w-4 h-4 fill-current text-white animate-bounce" />
          <span className="text-[11px] font-bold font-mono">
            {vibeCount}
          </span>
        </button>
      </div>
    </>
  );
}
