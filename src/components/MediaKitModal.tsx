'use client';

import React, { useState } from 'react';
import { Briefcase, X, BarChart3, Users, Globe2, Sparkles, Mail, CheckCircle } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function MediaKitModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-2.5 px-3 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200 text-xs font-mono flex items-center justify-center gap-2 transition active:scale-98 cursor-pointer"
      >
        <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
        <span>View Official Brand Media Kit & Stats (2026)</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[480px] bg-[#121214] border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[92vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-900/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100">Brand Media Kit</h3>
                  <p className="text-[10px] text-neutral-400 font-mono">
                    Teegs Travels • Verified Analytics
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 space-y-4 overflow-y-auto">
              {/* Highlight Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-base font-bold text-amber-300 font-mono">
                    {CREATOR_DATA.stats.monthlyImpressions}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Monthly Views</div>
                </div>

                <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-base font-bold text-rose-400 font-mono">
                    {CREATOR_DATA.stats.communitySize}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Community</div>
                </div>

                <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    {CREATOR_DATA.stats.engagementRate}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Engagement</div>
                </div>
              </div>

              {/* Audience Breakdown */}
              <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Audience Demographics</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[11px] text-neutral-300">
                    <span>Gender Split:</span>
                    <span className="font-mono text-neutral-200">
                      {CREATOR_DATA.stats.audienceDemographics.femalePercentage}% Female / {CREATOR_DATA.stats.audienceDemographics.malePercentage}% Male
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden flex">
                    <div
                      className="bg-pink-500 h-full"
                      style={{ width: `${CREATOR_DATA.stats.audienceDemographics.femalePercentage}%` }}
                    />
                    <div
                      className="bg-sky-500 h-full"
                      style={{ width: `${CREATOR_DATA.stats.audienceDemographics.malePercentage}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-neutral-300 pt-1">
                    <span>Core Age Bracket:</span>
                    <span className="font-mono text-amber-300 font-semibold">
                      {CREATOR_DATA.stats.audienceDemographics.topAgeGroup}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                  <span className="font-medium text-neutral-300 block mb-1">Top Geographies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {CREATOR_DATA.stats.audienceDemographics.topLocations.map((loc) => (
                      <span
                        key={loc}
                        className="px-2 py-0.5 rounded-md bg-neutral-800 text-[10px] text-neutral-300 font-mono"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partnership Offerings */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200 px-1">
                  <Globe2 className="w-4 h-4 text-amber-400" />
                  <span>Core Partnership Verticals</span>
                </div>

                <div className="space-y-2">
                  {CREATOR_DATA.partnershipCategories.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-left"
                    >
                      <div className="text-xs font-semibold text-neutral-100 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitch Summary */}
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Zero fake agency fluff: High-intent organic conversion with young travellers.</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800">
              <a
                href={`mailto:${CREATOR_DATA.businessEmail}?subject=${encodeURIComponent('[Brand Deck Request] ' + CREATOR_DATA.siteTitle)}`}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 transition active:scale-98 shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Request Custom Campaign Pitch & Rates</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
