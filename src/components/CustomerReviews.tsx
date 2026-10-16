import React from 'react';
import { ShieldCheck, Banknote, Car, Clock, CheckCircle, Navigation } from 'lucide-react';
import { SERVICE_STANDARDS } from '../data/taxiData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Our Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            COMMITTED TO RELIABLE SERVICE
          </h2>
          <p className="text-sm text-slate-300">
            Clear standards, straightforward rate cards, and direct communication for every trip.
          </p>
        </div>

        {/* Honest Service Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121A2E]/90 border border-amber-500/20 hover:border-amber-500/50 shadow-xl flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-400">
                Taxi Kaaran Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
