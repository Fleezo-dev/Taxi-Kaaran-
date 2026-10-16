import React from 'react';
import { Compass, Clock, MapPin, ArrowRight, Sparkles, Navigation, BookOpen } from 'lucide-react';
import { TOP_DESTINATIONS, DestinationCard } from '../data/taxiData';

interface CoimbatoreDestinationsProps {
  onBookDestination: (dest: DestinationCard) => void;
  onViewAllDestinations: () => void;
  onViewDestinationDetail: (destId: string) => void;
}

export const CoimbatoreDestinations: React.FC<CoimbatoreDestinationsProps> = ({ 
  onBookDestination,
  onViewAllDestinations,
  onViewDestinationDetail
}) => {
  return (
    <section id="destinations" className="py-20 bg-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" /> Curated Travel Itineraries
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
              TOP DESTINATIONS FROM COIMBATORE
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              Complete individual travel itineraries with on-the-way sightseeing, nice hotels, clean restrooms, local food specialties, and transparent fixed cab fares.
            </p>
          </div>

          <button
            onClick={onViewAllDestinations}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 hover:text-white hover:border-amber-400 hover:bg-amber-500/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
          >
            <span>View All 10 Destinations & Itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Main Destination Cards Grid on Home Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TOP_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#121A2E]/90 rounded-3xl border border-amber-500/20 hover:border-amber-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {dest.distanceFromCbe} · {dest.driveTime}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {dest.isHillStation ? 'Hill Station Route' : 'Direct Highway Drop'}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-2xl font-black text-white font-display tracking-tight group-hover:text-amber-400 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs font-bold text-amber-500/90 mb-3">
                  {dest.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {dest.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Attractions:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {dest.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons: 1. View Full Itinerary (Individual Page) & 2. Request Quote */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onViewDestinationDetail(dest.id)}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-400 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>View Full Itinerary, Hotels & Food Guide</span>
                </button>

                <button
                  onClick={() => onBookDestination(dest)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-98 cursor-pointer"
                >
                  <span>Request Quote for {dest.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View More Card for 6 More Areas */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#121A2E] via-[#162038] to-[#121A2E] border-2 border-amber-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 glow-orange">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> 6 More Destinations Available
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
              Looking for Munnar, Pollachi, Palani, Siruvani, Mysore or Yercaud?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We have dedicated individual itinerary pages for 6 more popular routes with on-the-way sightseeing stops, clean highway restrooms, recommended hotels, and cultural guidance.
            </p>
          </div>

          <button
            onClick={onViewAllDestinations}
            className="shrink-0 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/25 flex items-center gap-3 transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <span>View 6 More Destinations</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
