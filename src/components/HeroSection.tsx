import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Banknote, 
  Clock, 
  Phone, 
  MessageSquare,
  Navigation,
  Send,
  Sparkles
} from 'lucide-react';
import { COIMBATORE_LOCATIONS, DESTINATION_LOCATIONS } from '../data/taxiData';

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
  onQuoteSubmit
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

  const phoneDisplay = '+91 90800 82942';
  const phoneTel = 'tel:+919080082942';
  const whatsappUrl = `https://wa.me/919080082942?text=${encodeURIComponent('Hello Taxi Kaaran! I would like to inquire about booking a taxi service in Coimbatore.')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuoteSubmit({ pickup, destination, date, time, vehicle });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0E1528] to-[#090D16] pt-6 sm:pt-10 pb-12 sm:pb-16 lg:py-20 border-b border-amber-500/10">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy, Buttons, Trust Badges & Scenic Media Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            <div className="space-y-4 sm:space-y-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-extrabold text-amber-300 tracking-wider uppercase font-mono">
                  COIMBATORE'S TRUSTED TAXI SERVICE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.1]">
                YOUR JOURNEY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  OUR DRIVE.
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Comfortable rides, professional drivers and transparent fares. From everyday travel to outstation journeys, we make every trip simple and hassle-free.
              </p>
            </div>



            {/* Exactly 3 Compact Trust Indicators */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-tight">PROFESSIONAL DRIVERS</h4>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-0.5">
                  <Banknote className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-tight">CLEAR PRICING</h4>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#131B2E]/90 border border-amber-500/20 flex flex-col items-center text-center space-y-1 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-tight">24/7 SERVICE</h4>
              </div>
            </div>

            {/* Premium Scenic Visual Banner (Modern Indian Taxi on Scenic Road) */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl min-h-[220px] sm:min-h-[260px] aspect-[16/9] flex items-end group">
              <img 
                src="/taxi-kaaran-night-hero.png" 
                alt="Taxi Kaaran sedan travelling through scenic Western Ghats road at night"
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/80 via-[#090D16]/15 to-transparent pointer-events-none"></div>
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between w-full">
                <div className="text-xs sm:text-sm text-amber-300 font-mono font-bold tracking-wider uppercase flex items-center gap-2 bg-[#090D16]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                  Reliable Rides Across Coimbatore & Western Ghats
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating "REQUEST A QUOTE" Card */}
          <div id="quote" className="lg:col-span-5 flex flex-col justify-center scroll-mt-24">
            
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-5 sm:p-7 relative border-2 border-amber-500/40 glow-orange-lg overflow-hidden">
              
              {/* Top Card Banner Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="text-amber-600 font-extrabold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> INSTANT BOOKING
                </span>
                <a href={phoneTel} className="text-slate-800 hover:text-amber-600 flex items-center gap-1 font-mono">
                  <Phone className="w-3 h-3 text-amber-600 inline" /> {phoneDisplay}
                </a>
              </div>

              {/* Card Title */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight uppercase">
                  REQUEST A QUOTE
                </h3>
                <p className="text-xs text-slate-500">Submit your trip details below for quick confirmation and best rate</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
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
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-2.5 font-medium"
                    />
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

                {/* Vehicle Type */}
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

                  <div className="mt-2 text-[11px] text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200">
                    <span className="font-bold">Need Innova Crysta or Urbania?</span> Please{' '}
                    <a href={phoneTel} className="underline font-bold text-amber-900">
                      call us directly
                    </a>{' '}
                    for custom rates & availability.
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

