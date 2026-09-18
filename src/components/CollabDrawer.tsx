'use client';

import React, { useState } from 'react';
import { Mail, X, Send, Hotel, Briefcase, HelpCircle, CheckCircle2 } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

type CollabType = 'hotel' | 'brand' | 'general';

export function CollabDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [collabType, setCollabType] = useState<CollabType>('hotel');
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const getSubjectAndBody = () => {
    let subject = `[Collaboration] Inquiry for ${CREATOR_DATA.siteTitle}`;
    let bodyIntro = `Hi Tegan and Team,`;

    if (collabType === 'hotel') {
      subject = `[Hotel / Stay Collab] ${organization || 'Property Host'} x Teegs Travels`;
      bodyIntro = `Hi Teegs,\n\nWe would love to host you at our property for content creation and social media features.\n\nProperty / Destination: ${organization || '[Property Name]'}\nProposed Dates: [Enter dates]\nDeliverables: [e.g. TikTok room tour, IG Reels, YouTube shoutout]\n`;
    } else if (collabType === 'brand') {
      subject = `[Brand Sponsorship] ${organization || 'Brand'} x @itsnottegxnn`;
      bodyIntro = `Hi Teegs,\n\nWe love your authentic travel journey and would love to partner with you for an upcoming campaign.\n\nBrand / Product: ${organization || '[Brand Name]'}\nCampaign Budget: [Enter range]\nKey Objectives: [Brand awareness, sales, product showcase]\n`;
    } else {
      subject = `[General Inquiry] Message from ${senderName || 'Fan/Collaborator'}`;
      bodyIntro = `Hi Teegs,\n\nReaching out regarding:\n`;
    }

    const fullBody = `${bodyIntro}\n${message ? `Additional Details:\n${message}\n\n` : ''}Best regards,\n${senderName || 'Partner'}\n${organization ? `${organization}\n` : ''}`;

    return {
      subject: encodeURIComponent(subject),
      body: encodeURIComponent(fullBody)
    };
  };

  const handleLaunchEmail = () => {
    const { subject, body } = getSubjectAndBody();
    window.location.href = `mailto:${CREATOR_DATA.businessEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Primary Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3.5 px-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 text-neutral-200 text-xs font-semibold flex items-center justify-between transition active:scale-98 shadow-sm cursor-pointer group"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <span>Collaborate with Teegs</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">
          Hotels • Brands • Collabs →
        </span>
      </button>

      {/* Touch-Friendly Bottom Sheet Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[460px] bg-[#121214] border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800/80 bg-neutral-900/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100">Work with Teegs</h3>
                  <p className="text-[10px] text-neutral-400 font-mono">
                    Direct routing to {CREATOR_DATA.businessEmail}
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

            {/* Body Form */}
            <div className="p-4 space-y-4 overflow-y-auto">
              {/* Type Selectors */}
              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-2">
                  Select Collaboration Type:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCollabType('hotel')}
                    className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition cursor-pointer ${
                      collabType === 'hotel'
                        ? 'bg-rose-500/15 border-rose-500/50 text-rose-300'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <Hotel className="w-4 h-4" />
                    <span className="text-[11px] font-semibold leading-tight">Hotel & Stays</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCollabType('brand')}
                    className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition cursor-pointer ${
                      collabType === 'brand'
                        ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[11px] font-semibold leading-tight">Brand Sponsor</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCollabType('general')}
                    className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition cursor-pointer ${
                      collabType === 'general'
                        ? 'bg-sky-500/15 border-sky-500/50 text-sky-300'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-[11px] font-semibold leading-tight">General</span>
                  </button>
                </div>
              </div>

              {/* Input fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Your Name / Contact</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-rose-500/60"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">
                    {collabType === 'hotel' ? 'Property / Resort Name' : 'Company / Brand / Handle'}
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder={collabType === 'hotel' ? 'e.g. Sunset Eco-Resort Koh Phangan' : 'e.g. Osprey Packs'}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-rose-500/60"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Proposed Collaboration Details</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe dates, location, deliverables, or questions..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-rose-500/60 resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Opens directly in your device email client with formatted subject.</span>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex gap-2">
              <button
                type="button"
                onClick={handleLaunchEmail}
                className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition active:scale-98 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
