import React, { useState } from 'react';
import { ArrowRight, Compass, Clock, Car, ShieldCheck } from 'lucide-react';
import { POPULAR_ROUTES, HOURLY_RENTAL_PACKAGES, RoutePrice, HourlyPackage } from '../data/taxiData';

interface PopularRoutesTableProps {
  onSelectRoute: (route: RoutePrice) => void;
  onSelectHourlyPackage?: (pkg: HourlyPackage) => void;
}

export const PopularRoutesTable: React.FC<PopularRoutesTableProps> = ({ 
  onSelectRoute,
  onSelectHourlyPackage 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hillstation' | 'outstation' | 'local' | 'hourly'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredRoutes = POPULAR_ROUTES.filter((r) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'local') return r.category === 'local' || r.category === 'airport';
    return r.category === activeTab;
  });

  const displayedRoutes = showAll ? filteredRoutes : filteredRoutes.slice(0, 6);

  return (
    <section id="popular-routes" className="py-12 sm:py-16 bg-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Card Container */}
        <div className="bg-[#0E1526]/90 rounded-2xl border border-amber-500/20 shadow-2xl p-4 sm:p-8 overflow-hidden backdrop-blur-md">
          
          {/* Table Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display uppercase">
                  POPULAR ROUTES & PRICING
                </h2>
                <span className="hidden sm:inline-block text-xs text-amber-400 font-mono pl-3 border-l border-slate-700">
                  Fixed Final Fares
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Guaranteed upfront pricing for Coimbatore local, outstation, hill station & airport drops
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Routes
              </button>
              <button
                onClick={() => setActiveTab('hillstation')}
                className={`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'hillstation'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hill Stations
              </button>
              <button
                onClick={() => setActiveTab('outstation')}
                className={`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'outstation'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Outstation
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'local'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Local / Airport
              </button>
              <button
                onClick={() => setActiveTab('hourly')}
                className={`px-3 py-1.5 font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'hourly'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hourly Rentals
              </button>
            </div>
          </div>

          {/* Guarantee Notice */}
          <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>100% Fixed Fares:</strong> Final rounded trip fare with zero surprise meter charges.
              </span>
            </div>
            <div className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30 shrink-0">
              AC Sedan & SUV Rates
            </div>
          </div>

          {/* View Mode: Route Table or Hourly Rental Cards */}
          {activeTab === 'hourly' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {HOURLY_RENTAL_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-5 rounded-xl bg-slate-900/90 border border-amber-500/20 hover:border-amber-500/50 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        {pkg.hours} Hours Package
                      </span>
                      <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                        {pkg.freeKm} KM Included
                      </span>
                    </div>

                    <div className="text-2xl font-black text-amber-400 font-mono my-2">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </div>

                    <div className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                      {pkg.recommendedFor}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919080082942?text=${encodeURIComponent(
                      `Hello Taxi Kaaran! I would like to book the ${pkg.hours} Hours (${pkg.freeKm} KM Included) Hourly Rental Package in Coimbatore for ₹${pkg.price}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase rounded-lg text-center transition-all shadow-md active:scale-95"
                  >
                    Book Rental
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* MOBILE OPTIMIZED CARDS (Shown on screens < sm) */}
              <div className="block sm:hidden space-y-3 mt-4">
                {displayedRoutes.map((route) => (
                  <div
                    key={route.id}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-bold text-white leading-snug">
                          {route.from} <span className="text-amber-500">→</span> {route.to}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {route.distanceKm} KM · {route.duration}
                        </div>
                      </div>
                      {route.category === 'hillstation' && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                          Hill Route
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-medium">{route.fareType}</div>
                        <div className="text-xl font-black text-amber-400 font-mono">
                          ₹{route.calculatedPrice.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectRoute(route)}
                        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold uppercase rounded-lg shadow-md active:scale-95 cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP & TABLET TABLE (Shown on screens >= sm) */}
              <div className="hidden sm:block overflow-x-auto mt-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      <th className="py-4 px-3">Route</th>
                      <th className="py-4 px-3">Distance & Time</th>
                      <th className="py-4 px-3 text-amber-500">Fixed Fare</th>
                      <th className="py-4 px-3">Fare Type</th>
                      <th className="py-4 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-sm">
                    {displayedRoutes.map((route) => (
                      <tr 
                        key={route.id} 
                        className="hover:bg-amber-500/5 transition-colors group"
                      >
                        <td className="py-4 px-3 font-medium text-white">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                              <Compass className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                                {route.from}
                              </span>
                              <span className="text-slate-500 mx-1.5">to</span>
                              <span className="font-bold text-amber-400">
                                {route.to}
                              </span>
                              {route.category === 'hillstation' && (
                                <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                                  Hill Station
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-3 text-slate-300 font-mono text-xs">
                          <div className="flex items-center gap-2">
                            <span>{route.distanceKm} KM</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{route.duration}</span>
                          </div>
                        </td>

                        <td className="py-4 px-3 font-black text-amber-400 font-mono text-lg">
                          ₹{route.calculatedPrice.toLocaleString('en-IN')}
                        </td>

                        <td className="py-4 px-3 text-slate-300 text-xs">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                            {route.fareType}
                          </span>
                        </td>

                        <td className="py-4 px-3 text-right">
                          <button
                            onClick={() => onSelectRoute(route)}
                            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase rounded-lg shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
                          >
                            Book Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Table Bottom Action */}
          {activeTab !== 'hourly' && (
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-800 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <span>{showAll ? 'Show Fewer Routes' : 'View All Routes & Fares'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
