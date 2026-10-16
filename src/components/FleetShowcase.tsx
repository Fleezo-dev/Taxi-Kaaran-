import React from 'react';
import { Users, Luggage, ShieldCheck, Car, Check, Phone, ArrowRight } from 'lucide-react';
import { VEHICLE_FLEET, VehicleOption } from '../data/taxiData';

interface FleetShowcaseProps {
  onSelectVehicle: (vehicle: VehicleOption) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-[#090D16] via-[#0D1426] to-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Car className="w-3.5 h-3.5" /> Taxi Kaaran Vehicle Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            CHOOSE YOUR VEHICLE
          </h2>
          <p className="text-sm text-slate-300">
            Comfortable Sedan & SUV options for personal, family and hill station trips.
          </p>
        </div>

        {/* Fleet Grid - NO PRICES REVEALED as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`bg-[#121A2E]/90 rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group ${
                vehicle.isSpecialFleet 
                  ? 'border-slate-800 hover:border-amber-500/30' 
                  : 'border-amber-500/30 hover:border-amber-500 hover:shadow-amber-500/10'
              }`}
            >
              
              {/* Tag Badge */}
              {vehicle.tag && (
                <div className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md inline-block mb-3 self-start ${
                  vehicle.isSpecialFleet
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/30'
                    : 'bg-amber-500 text-slate-950'
                }`}>
                  {vehicle.tag}
                </div>
              )}

              <div>
                {/* Vehicle Category & Name */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    {vehicle.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">
                    {vehicle.category}
                  </span>
                </div>

                {/* Capacity Badges */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 mb-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Luggage className="w-4 h-4 text-amber-400" />
                    <span>{vehicle.luggage} Bags</span>
                  </div>
                </div>

                {/* Recommended Use */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {vehicle.recommendedFor}
                </p>

                {/* Feature List */}
                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Sedan & SUV get "Request Quote"; Crysta & Urbania get "Call Us for Best Rates" */}
              {vehicle.isSpecialFleet ? (
                <a
                  href="tel:+919080082942"
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us For Best Rates</span>
                </a>
              ) : (
                <button
                  onClick={() => onSelectVehicle(vehicle)}
                  className="w-full py-3 px-4 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 hover:border-amber-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

            </div>
          ))}
        </div>

        {/* Special Fleet Guidance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-display">
              Looking for Toyota Innova Crysta, Hycross or Force Urbania?
            </h4>
            <p className="text-xs text-slate-400">
              We provide customized packages for luxury outstation travel, family tours, and group pilgrimages across South India.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919080082942"
              className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us for Best Rates</span>
            </a>
            <a
              href={`https://wa.me/919080082942?text=${encodeURIComponent('Hello Taxi Kaaran! I would like to inquire about Innova Crysta / Group Fleet availability.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
