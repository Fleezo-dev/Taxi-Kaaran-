import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Compass, 
  Clock, 
  MapPin, 
  Car, 
  Hotel, 
  Coffee, 
  Utensils, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Sparkles,
  ChevronRight,
  Info,
  Calendar
} from 'lucide-react';
import { DestinationDetail, ALL_DESTINATIONS } from '../data/destinationsData';

interface DestinationDetailPageProps {
  destination: DestinationDetail;
  onBack: () => void;
  onSelectDestination: (destId: string) => void;
  onBookTrip: (details: { from: string; to: string; vehicle: string }) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onBack,
  onSelectDestination,
  onBookTrip
}) => {
  // Scroll to top upon mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [destination.id]);

  const whatsappUrl = `https://wa.me/919080082942?text=${encodeURIComponent(
    `Hello Taxi Kaaran! I would like to book a cab trip to ${destination.name} (Fixed Rate: ₹${destination.fixedFareSedan} for Sedan / ₹${destination.fixedFareSUV} for SUV). Please confirm cab availability.`
  )}`;

  const otherDestinations = ALL_DESTINATIONS.filter(d => d.id !== destination.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Destinations</span>
          </button>

          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Destinations</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">{destination.name}</span>
          </nav>
        </div>

        {/* Hero Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F1A34] via-[#0E1528] to-[#0A0F1D] border-2 border-amber-500/30 p-6 sm:p-10 shadow-2xl glow-orange">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {destination.distanceFromCbe} from Coimbatore · {destination.driveTime}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {destination.isHillStation ? 'Hill Station Route' : 'Highway Route'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              {destination.name}
            </h1>
            <p className="text-base sm:text-lg font-bold text-amber-400 font-display">
              {destination.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {destination.aboutCity}
            </p>

            {/* Fixed Cab Fares Card */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Executive Sedan (Dzire / Etios)</div>
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                  ₹{destination.fixedFareSedan.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-slate-400">Fixed Upfront Fare</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Prime SUV (Ertiga 6-7 Seater)</div>
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                  ₹{destination.fixedFareSUV.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-slate-400">Fixed Upfront Fare</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+919080082942"
                  className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 90800 82942</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 1. Curated Road Trip Itinerary */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                Curated Road Trip Itinerary
              </h2>
              <p className="text-xs text-slate-400">Suggested timetable curated by our experienced local drivers</p>
            </div>
          </div>

          <div className="space-y-4">
            {destination.itinerary.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 shrink-0 w-24 text-center">
                  {step.time}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-display">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. On-The-Way Sightseeing */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                On-The-Way Sightseeing & Photo Points
              </h2>
              <p className="text-xs text-slate-400">Scenic landmarks you can request your driver to stop by</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.onTheWaySightseeing.map((stop, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 bg-slate-800 px-2 py-0.5 rounded">
                  {stop.distance}
                </span>
                <h4 className="text-sm font-bold text-white">{stop.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{stop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Recommended Hotels & Stays */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                Recommended Hotels & Resorts
              </h2>
              <p className="text-xs text-slate-400">Verified luxury, heritage, and family stays near {destination.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destination.niceHotels.map((hotel, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {hotel.tier}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2">{hotel.name}</h4>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{hotel.area}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 border-t border-slate-800/80 pt-2">
                  {hotel.highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Clean Restrooms & Highway Food Plazas */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                Clean Restrooms & Highway Waypoints
              </h2>
              <p className="text-xs text-slate-400">Spotless restroom stops and dining plazas on the route from Coimbatore</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destination.restRoomsAndStops.map((stop, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white">{stop.name}</h4>
                <div className="text-xs text-amber-400">{stop.location}</div>
                <p className="text-xs text-slate-400">{stop.features}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Famous Foods & Culinary Specialties */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                Local Foods & Regional Delicacies
              </h2>
              <p className="text-xs text-slate-400">Iconic food specialties you must try during your visit</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destination.favoriteFoods.map((food, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white">{food.dish}</h4>
                <div className="text-xs text-amber-400 font-medium">Famous at: {food.famousAt}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{food.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Culture, Dress Codes & Travel Tips */}
        <section className="bg-[#0E1528]/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white uppercase">
                Local Culture, Etiquette & Travel Advice
              </h2>
              <p className="text-xs text-slate-400">Important local customs, dress regulations, and safety guidance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {destination.cultureAndTips.map((tip, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Booking Action Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border-2 border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-white font-display uppercase">
              Ready to visit {destination.name}?
            </h3>
            <p className="text-xs text-slate-300">
              Enjoy fixed transparent pricing, clean AC Cabs, and polite local drivers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href="tel:+919080082942"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch (+91 90800 82942)</span>
            </a>
          </div>
        </div>

        {/* Explore Other Destinations */}
        <div className="pt-6 border-t border-slate-800">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
            Explore Other Destinations from Coimbatore
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherDestinations.map((d) => (
              <button
                key={d.id}
                onClick={() => onSelectDestination(d.id)}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left transition-all group cursor-pointer"
              >
                <div className="text-[10px] text-amber-400 font-mono">{d.distanceFromCbe} · {d.driveTime}</div>
                <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{d.name}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{d.tagline}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
