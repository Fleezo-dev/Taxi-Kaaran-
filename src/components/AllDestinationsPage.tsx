import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Compass, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  Search,
  Car
} from 'lucide-react';
import { ALL_DESTINATIONS, DestinationDetail } from '../data/destinationsData';

interface AllDestinationsPageProps {
  onBack: () => void;
  onSelectDestination: (destId: string) => void;
  initialFilter?: 'all' | 'more6';
}

const HOME_DESTINATION_IDS = ['ooty', 'adiyogi', 'valparai', 'kodaikanal'];

export const AllDestinationsPage: React.FC<AllDestinationsPageProps> = ({
  onBack,
  onSelectDestination,
  initialFilter = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'more6' | 'hillstation' | 'spiritual' | 'wildlife' | 'heritage'>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filtered = ALL_DESTINATIONS.filter((d) => {
    let matchesCategory = true;
    if (activeCategory === 'more6') {
      matchesCategory = !HOME_DESTINATION_IDS.includes(d.id);
    } else if (activeCategory !== 'all') {
      matchesCategory = d.category === activeCategory;
    }

    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.aboutCity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination (e.g. Munnar, Mysore, Palani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
            />
          </div>
        </div>

        {/* Page Title & Sitelinks Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" /> All 10 Destinations from Coimbatore
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            EXPLORE SOUTH INDIA ROAD TRIPS
          </h1>
          <p className="text-sm text-slate-300">
            Select any destination below to view the complete travel itinerary, on-the-way sightseeing, nice hotels, clean restrooms, local food specialties, and fixed cab fares.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All 10 Destinations' },
            { id: 'more6', label: '★ 6 Additional Destinations (Munnar, Pollachi, Palani, Siruvani, Mysore, Yercaud)' },
            { id: 'hillstation', label: 'Hill Stations (Ooty, Kodai, Valparai, Munnar, Yercaud)' },
            { id: 'spiritual', label: 'Spiritual (Adiyogi, Palani, Marudhamalai)' },
            { id: 'wildlife', label: 'Wildlife (Topslip, Pollachi)' },
            { id: 'heritage', label: 'Heritage (Mysore Palace)' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count Indicator */}
        <div className="text-xs text-slate-400 text-center font-mono">
          Showing {filtered.length} destination itineraries
        </div>

        {/* Destinations Grid (10 Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((dest) => {
            const isExtended6 = !HOME_DESTINATION_IDS.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="bg-[#121A2E]/90 rounded-3xl border border-amber-500/20 hover:border-amber-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden"
              >
                <div>
                  
                  {/* Header Tag Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                      {dest.distanceFromCbe} · {dest.driveTime}
                    </span>
                    <div className="flex items-center gap-2">
                      {isExtended6 && (
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                          Extended Route
                        </span>
                      )}
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        {dest.isHillStation ? 'Hill Station Route' : 'Highway Route'}
                      </span>
                    </div>
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight group-hover:text-amber-400 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-500/90 mb-3">
                    {dest.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {dest.aboutCity}
                  </p>

                  {/* Fixed Fare Strip */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400">Executive Sedan: </span>
                      <strong className="text-amber-400 font-mono text-sm">₹{dest.fixedFareSedan.toLocaleString('en-IN')}</strong>
                    </div>
                    <div className="text-slate-600">|</div>
                    <div>
                      <span className="text-slate-400">Prime SUV: </span>
                      <strong className="text-amber-400 font-mono text-sm">₹{dest.fixedFareSUV.toLocaleString('en-IN')}</strong>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Highlights:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {dest.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Button: Directly opens individual itinerary & guide page */}
                <button
                  onClick={() => onSelectDestination(dest.id)}
                  className="w-full py-3.5 px-5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-98 cursor-pointer"
                >
                  <span>Explore Full Itinerary & Travel Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
