import React from 'react';
import { Phone, MessageSquare, Car, ArrowRight } from 'lucide-react';

interface BottomCTABarProps {
  onOpenBooking: () => void;
}

export const BottomCTABar: React.FC<BottomCTABarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/919080082942?text=${encodeURIComponent(
    'Hello Taxi Kaaran! I would like to book a taxi service in Coimbatore.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none">
      <div className="max-w-xl mx-auto pointer-events-auto">
        <div className="bg-[#0A101E]/95 backdrop-blur-xl border-2 border-amber-500/40 rounded-2xl p-2 sm:p-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] glow-orange flex items-center justify-between gap-2 sm:gap-3">
          
          {/* CTA 1: Direct Call Button */}
          <a
            href="tel:+919080082942"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-500 rounded-xl text-amber-400 font-bold transition-all active:scale-95 shadow-sm"
            title="Call Taxi Kaaran Dispatch"
          >
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium leading-none">
                Call Now
              </span>
              <span className="text-xs sm:text-sm font-black font-mono text-white leading-tight">
                90800 82942
              </span>
            </div>
          </a>

          {/* CTA 2: Direct WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-md shadow-emerald-600/30"
            title="Chat on WhatsApp"
          >
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-medium leading-none">
                Instant Chat
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wide leading-tight">
                WhatsApp
              </span>
            </div>
          </a>

          {/* CTA 3: Book / Request Quote Action Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center justify-center gap-1.5 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-md shadow-orange-500/20 shrink-0 cursor-pointer"
          >
            <Car className="w-3.5 h-3.5" />
            <span>Book Cab</span>
          </button>

        </div>
      </div>
    </div>
  );
};

// Also export as MobileQuickBar for backward compatibility
export const MobileQuickBar = BottomCTABar;
