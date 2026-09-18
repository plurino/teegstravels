'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Download, Share2, X, Check, Loader2 } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';
import { getAssetPath } from '@/lib/assets';
import { fireSupportConfetti } from '@/lib/confetti';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoryStickerModal({ isOpen, onClose }: StoryModalProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [downloaded, setDownloaded] = useState(false);
  const isGenerating = !dataUrl;

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const departure = new Date(CREATOR_DATA.departureDate).getTime();
    const days = Math.floor(Math.max(0, Date.now() - departure) / (1000 * 60 * 60 * 24));

    // Load Avatar Image
    const avatar = new window.Image();
    avatar.crossOrigin = 'anonymous';
    avatar.src = getAssetPath('/images/teegs-avatar.png');

    const renderCanvas = () => {
      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
      bgGrad.addColorStop(0, '#0d0d0e');
      bgGrad.addColorStop(0.35, '#191124');
      bgGrad.addColorStop(0.7, '#13111c');
      bgGrad.addColorStop(1, '#0d0d0e');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      // Glowing Ambient Orbs
      const rad1 = ctx.createRadialGradient(250, 400, 50, 250, 400, 500);
      rad1.addColorStop(0, 'rgba(244, 63, 94, 0.35)');
      rad1.addColorStop(1, 'transparent');
      ctx.fillStyle = rad1;
      ctx.fillRect(0, 0, 1080, 1920);

      const rad2 = ctx.createRadialGradient(850, 1400, 50, 850, 1400, 600);
      rad2.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
      rad2.addColorStop(1, 'transparent');
      ctx.fillStyle = rad2;
      ctx.fillRect(0, 0, 1080, 1920);

      // Outer Rounded Story Frame
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 14;
      ctx.strokeRect(40, 40, 1000, 1840);

      // Header Tag Pill
      ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.beginPath();
      ctx.roundRect(240, 140, 600, 80, 40);
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#fcd34d';
      ctx.font = 'bold 34px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🎒 DAY ${days} OF TRAVELING THE WORLD`, 540, 192);

      // Avatar Circle (Center)
      const cx = 540;
      const cy = 520;
      const radius = 180;

      // Glow Ring
      const ringGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
      ringGrad.addColorStop(0, '#f43f5e');
      ringGrad.addColorStop(0.5, '#f59e0b');
      ringGrad.addColorStop(1, '#ec4899');

      ctx.beginPath();
      ctx.arc(cx, cy, radius + 12, 0, Math.PI * 2);
      ctx.fillStyle = ringGrad;
      ctx.fill();

      // Draw Avatar
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();
      try {
        ctx.drawImage(avatar, cx - radius, cy - radius, radius * 2, radius * 2);
      } catch {
        // Fallback color
        ctx.fillStyle = '#27272a';
        ctx.fill();
      }
      ctx.restore();

      // Verified Creator Name
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 68px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText(CREATOR_DATA.siteTitle, 540, 800);

      // Handle
      ctx.fillStyle = '#fb7185';
      ctx.font = '600 42px monospace';
      ctx.fillText(`${CREATOR_DATA.handle} • ${CREATOR_DATA.name}`, 540, 865);

      // Story Sticker Central Quote Box
      ctx.fillStyle = 'rgba(24, 24, 27, 0.75)';
      ctx.beginPath();
      ctx.roundRect(140, 960, 800, 420, 48);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Quote Text
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 38px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('✈️ ONE-WAY TICKET JOURNEY', 540, 1050);

      ctx.fillStyle = '#e4e4e7';
      ctx.font = '400 34px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('"Solo traveling, figuring my life out &', 540, 1140);
      ctx.fillText('living on 110% chaos energy." 😂', 540, 1200);

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '500 28px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('Daily Vlogs on YouTube • TikTok Lives', 540, 1290);

      // Bottom Link Callout
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.roundRect(220, 1580, 640, 100, 50);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 40px monospace';
      ctx.fillText('🔗 teegstravels.com', 540, 1645);

      ctx.fillStyle = '#71717a';
      ctx.font = '30px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('Tap or visit to watch latest episode', 540, 1740);

      const url = canvas.toDataURL('image/png');
      if (isMounted) {
        setDataUrl(url);
      }
    };

    avatar.onload = renderCanvas;
    avatar.onerror = renderCanvas;

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (!dataUrl) return;
    fireSupportConfetti();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'teegstravels-story.png';
    a.click();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleNativeShare = async () => {
    if (!dataUrl) return;
    try {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], 'teegstravels-story.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Teegs Travels Story',
          text: 'Check out Teegs Travels! 🎒✈️ https://plurino.github.io/teegstravels'
        });
        fireSupportConfetti();
      } else {
        handleDownload();
      }
    } catch {
      handleDownload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm flex flex-col rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl p-4 gap-3.5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
            <Camera className="w-4 h-4 text-rose-400" />
            <span>Story Sticker Generator</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Story Preview Card (9:16 aspect ratio) */}
        <div className="relative aspect-[9/16] w-full max-h-[380px] mx-auto rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 flex items-center justify-center shadow-inner">
          {isGenerating ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin text-rose-400" />
              <span className="text-[11px] text-neutral-400 font-mono">Generating Story Sticker...</span>
            </div>
          ) : (
            dataUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dataUrl}
                alt="Teegs Travels Story Sticker"
                className="w-full h-full object-contain"
              />
            )
          )}
        </div>

        <p className="text-[11px] text-neutral-400 text-center leading-tight">
          Ready to share to your Instagram or TikTok Story! 📸
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={handleNativeShare}
            disabled={isGenerating}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium text-xs shadow-lg active:scale-95 transition cursor-pointer disabled:opacity-50"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Story</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-medium text-xs border border-white/10 active:scale-95 transition cursor-pointer disabled:opacity-50"
          >
            {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
            <span>{downloaded ? 'Saved!' : 'Save Image'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
