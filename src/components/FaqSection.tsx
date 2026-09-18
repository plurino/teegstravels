'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { CREATOR_DATA } from '@/config/creator';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="Frequently Asked Questions" className="w-full flex flex-col gap-2.5">
      <div className="flex items-center gap-1.5 px-1 text-xs font-semibold text-neutral-200">
        <HelpCircle className="w-4 h-4 text-sky-400" />
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="flex flex-col gap-2">
        {CREATOR_DATA.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-neutral-900/60 border border-white/10 overflow-hidden transition-all backdrop-blur-xl shadow-xl hover:border-white/20"
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs font-medium text-neutral-200 hover:text-white transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-2 animate-in fade-in duration-150">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
