import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Banknote, 
  Clock, 
  Car, 
  Calendar, 
  Send, 
  Phone, 
  Sparkles,
  MapPin,
  CheckCircle2,
  Navigation,
  Compass
} from 'lucide-react';
import { COIMBATORE_LOCATIONS, DESTINATION_LOCATIONS } from '../data/taxiData';
import { TaxiLogo } from './TaxiLogo';

interface HeroSectionProps {
  onQuoteSubmit: (formData: {
    pickup: string;
    destination: string;
    date: string;
    time: string;
    vehicle: string;
  }) => void;
  onViewAllDestinations?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onQuoteSubmit,
  onViewAllDestinations 
}) => {
  const [pickup, setPickup] = useState(COIMBATORE_LOCATIONS[0]);
  const [destination, setDestination] = useState(DESTINATION_LOCATIONS[0]);
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('08:00');
  const [vehicle, setVehicle] = useState('Executive Sedan (Swift Dzire / Etios)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuoteSubmit({ pickup, destination, date, time, vehicle });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0E1528] to-[#090D16] pt-8 pb-16 lg:py-20 border-b border-amber-500/10">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Headline & Real Service Information (No fake claims!) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Badge Pill - Honest service statement */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-amber-300 tracking-wide uppercase">
                  Coimbatore Cabs & Outstation Travel
                </span>
              </div>

              {/* Headline matching screenshot layout */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.1]">
                BOOK YOUR TAXI <br />
                IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  COIMBATORE
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Comfortable and reliable journeys to Ooty, Kodaikanal, Isha Yoga Center, Valparai, Pollachi & outstation destinations across South India.
              </p>

              {onViewAllDestinations && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onViewAllDestinations}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-500/25 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>View 10 Sightseeing, Hotel & Food Itineraries →</span>
                  </button>
                </div>
              )}
            </div>

            {/* Vehicle Fleet Highlights Graphic - Sedan & SUV */}
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-r from-slate-950 via-[#10182A] to-slate-950 shadow-xl group">
              
              {/* Road lines animation effect */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900 border-t border-slate-700/50 flex items-center justify-around opacity-75">
                <div className="w-12 h-1 bg-amber-400/80 rounded"></div>
                <div className="w-12 h-1 bg-amber-400/80 rounded"></div>
                <div className="w-12 h-1 bg-amber-400/80 rounded"></div>
                <div className="w-12 h-1 bg-amber-400/80 rounded"></div>
              </div>

              {/* Nilgiri Mountains Graphic */}
              <svg className="absolute bottom-12 left-0 right-0 w-full h-24 text-slate-800/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,120 L0,60 L150,20 L300,70 L450,10 L600,80 L750,30 L900,90 L1050,40 L1200,80 L1200,120 Z" fill="currentColor"></path>
              </svg>

              {/* Overlay Content with Exact Design */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-900/95 border border-amber-500/30 shadow-2xl backdrop-blur-md">
                  <TaxiLogo size="md" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">TAXI KAARAN COIMBATORE</span>
                      <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-mono font-semibold">SEDAN & SUV FLEET</span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-display">Swift Dzire, Etios & Prime SUVs</h4>
                    <p className="text-xs text-slate-400">All AC Cabs · Experienced Hill Drivers · Transparent Distance Billing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Badges - Honest and practical */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Local Drivers</h4>
                <p className="text-[11px] text-slate-400">Polite & Experienced</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
                  <Banknote className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Clear Pricing</h4>
                <p className="text-[11px] text-slate-400">Guaranteed Fares</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">24/7 Availability</h4>
                <p className="text-[11px] text-slate-400">Day & Night Service</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Sedan & SUV</h4>
                <p className="text-[11px] text-slate-400">Clean Air-Conditioned</p>
              </div>
            </div>

            {/* Honest Service Summary Row (Replaced fake claims!) */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Base: <strong className="text-slate-200">Coimbatore</strong> (Airport, Junction & City)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Specialized in <strong className="text-slate-200">Ooty, Valparai & Kodaikanal Ghats</strong></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-amber-400">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Dispatch: +91 90800 82942</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating White "REQUEST A QUOTE" Card */}
          {/* Note: Price is NOT explicitly revealed here as requested; quotes are tailored on submission */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-7 relative border-2 border-amber-500/40 glow-orange-lg overflow-hidden">
              
              {/* Top Card Banner Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="text-amber-600 font-extrabold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> INSTANT BOOKING
                </span>
                <a href="tel:+919080082942" className="text-slate-800 hover:text-amber-600 flex items-center gap-1 font-mono">
                  <Phone className="w-3 h-3 text-amber-600 inline" /> +91 90800 82942
                </a>
              </div>

              {/* Card Title */}
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-950 font-display tracking-tight uppercase">
                    REQUEST A QUOTE
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-2">Submit your trip details below for quick confirmation and best rate</p>
                {onViewAllDestinations && (
                  <button
                    type="button"
                    onClick={onViewAllDestinations}
                    className="text-[11px] text-amber-700 hover:text-amber-900 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-600" />
                    <span>View Sightseeing, Hotel & Food Itineraries</span>
                  </button>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Pickup & Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Select Pickup
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                    >
                      {COIMBATORE_LOCATIONS.map((loc, idx) => (
                        <option key={idx} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Select Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                    >
                      {DESTINATION_LOCATIONS.map((dest, idx) => (
                        <option key={idx} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Select Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Select Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                    />
                  </div>
                </div>

                {/* Vehicle Type (Only Sedan and SUV quoted) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Vehicle Type
                  </label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                  >
                    <option value="Executive Sedan (Swift Dzire / Etios)">
                      Executive Sedan (Swift Dzire / Toyota Etios - 4 Seater AC)
                    </option>
                    <option value="Prime SUV (Ertiga / 6-7 Seater)">
                      Prime SUV (Ertiga / 6-7 Seater AC)
                    </option>
                  </select>

                  {/* Note for Crysta & Urbania fleets */}
                  <div className="mt-2 text-[11px] text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200">
                    <span className="font-bold">Need Innova Crysta or Urbania?</span> Please{' '}
                    <a href="tel:+919080082942" className="underline font-bold text-amber-900">
                      call us directly
                    </a>{' '}
                    for custom rates & availability.
                  </div>
                </div>

                {/* Request A Quote Orange Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </form>

              {/* Bottom 3 Highlights inside white card - Real honest guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-5 mt-5 border-t border-slate-200 text-center">
                <div className="flex flex-col items-center">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mb-1">
                    <Banknote className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Clear Rates</h5>
                  <span className="text-[9px] text-slate-500">Upfront Pricing</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mb-1">
                    <Car className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Sedan & SUV</h5>
                  <span className="text-[9px] text-slate-500">Clean & Well Kept</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Fast Dispatch</h5>
                  <span className="text-[9px] text-slate-500">Call / WhatsApp</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
