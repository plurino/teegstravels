'use client';

import React, { useState, useEffect, useCallback } from 'react';

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
  );
}
