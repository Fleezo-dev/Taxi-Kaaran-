import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/taxiData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#090D16] via-[#0E1528] to-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-sm text-slate-300">
            Clear answers on rates, driver allowances, hill station permits, and booking policies.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121A2E]/90 border border-amber-500/20 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-amber-400 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3">
          <h4 className="text-lg font-bold text-white font-display">Have a custom tour route or group requirement?</h4>
          <p className="text-xs text-slate-300">Speak directly to our 24/7 Coimbatore cab dispatch counter.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919080082942"
              className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 90800 82942</span>
            </a>
            <a
              href={`https://wa.me/919080082942?text=${encodeURIComponent('Hello Taxi Kaaran! I have a custom route query.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
