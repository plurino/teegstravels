'use client';

import React from 'react';

export function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#0c0c0e]" />

      {/* Ambient Gradient Glow Orbs (Golden Hour & Tropical Rose/Cyan) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-600/10 blur-[120px] animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-500/10 blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[160px]" />

      {/* Subtle Topographic Contour Grid Pattern (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="contour-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 40 Q 30 10, 60 40 T 120 40 M0 80 Q 30 50, 60 80 T 120 80 M0 120 Q 30 90, 60 120 T 120 120 M0 0 Q 30 -30, 60 0 T 120 0"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            <circle cx="30" cy="40" r="1.5" fill="#f59e0b" opacity="0.4" />
            <circle cx="90" cy="80" r="1.5" fill="#fb7185" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contour-pattern)" />
      </svg>

      {/* Floating Stardust / Night Market Embers */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { top: '15%', left: '10%', delay: '0s', size: 'w-1 h-1' },
          { top: '35%', left: '85%', delay: '2s', size: 'w-1.5 h-1.5' },
          { top: '55%', left: '20%', delay: '4s', size: 'w-1 h-1' },
          { top: '75%', left: '80%', delay: '1s', size: 'w-1.5 h-1.5' },
          { top: '90%', left: '40%', delay: '3s', size: 'w-1 h-1' },
        ].map((ember, i) => (
          <div
            key={i}
            className={`absolute ${ember.size} rounded-full bg-amber-400/40 blur-[0.5px] animate-ping`}
            style={{
              top: ember.top,
              left: ember.left,
              animationDuration: '6s',
              animationDelay: ember.delay
            }}
          />
        ))}
      </div>
    </div>
  );
}
