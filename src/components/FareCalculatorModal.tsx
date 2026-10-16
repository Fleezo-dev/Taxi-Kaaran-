import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Navigation, 
  Car, 
  X, 
  Clock, 
  Phone, 
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { COIMBATORE_LOCATIONS, DESTINATION_LOCATIONS } from '../data/taxiData';

interface FareCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFrom?: string;
  initialTo?: string;
  initialVehicle?: string;
  onConfirmBooking: (bookingDetails: {
    from: string;
    to: string;
    vehicle: string;
    phone: string;
    name: string;
    date: string;
    time: string;
    tripType: string;
  }) => void;
}

export const FareCalculatorModal: React.FC<FareCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialFrom,
  initialTo,
  initialVehicle,
  onConfirmBooking
}) => {
  const [fromLocation, setFromLocation] = useState(initialFrom || COIMBATORE_LOCATIONS[0]);
  const [toLocation, setToLocation] = useState(initialTo || DESTINATION_LOCATIONS[0]);
  
  // Only quote for Sedan and SUV
  const [selectedVehicle, setSelectedVehicle] = useState(() => {
    if (initialVehicle && initialVehicle.toLowerCase().includes('suv')) {
      return 'Prime SUV (Ertiga / 6-7 Seater)';
    }
    return 'Executive Sedan (Swift Dzire / Etios)';
  });

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [travelTime, setTravelTime] = useState('08:00');
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');

  if (!isOpen) return null;

  const handleWhatsAppDispatch = () => {
    const text = `Hello Taxi Kaaran! I would like to request a quote:
📍 Pickup: ${fromLocation}
🏁 Destination: ${toLocation} (${tripType === 'roundtrip' ? 'Round Trip' : 'One Way'})
🚗 Vehicle: ${selectedVehicle}
📅 Date & Time: ${travelDate} at ${travelTime}
👤 Name: ${userName || 'Customer'}
📞 Phone: ${userPhone || 'Provided in chat'}

Please share the best rate for this trip.`;

    window.open(`https://wa.me/919080082942?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmBooking({
      from: fromLocation,
      to: toLocation,
      vehicle: selectedVehicle,
      phone: userPhone,
      name: userName,
      date: travelDate,
      time: travelTime,
      tripType: tripType === 'roundtrip' ? 'Round Trip' : 'One Way'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0D1322] border-2 border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900 border border-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
              <Sparkles className="w-3 h-3" /> Quick Taxi Dispatch
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
              REQUEST A TAXI QUOTE
            </h3>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          
          {/* Trip Type Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setTripType('oneway')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                tripType === 'oneway'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              One Way Drop
            </button>
            <button
              type="button"
              onClick={() => setTripType('roundtrip')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                tripType === 'roundtrip'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Round Trip
            </button>
          </div>

          {/* Location Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                Pickup Location
              </label>
              <select
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
              >
                {COIMBATORE_LOCATIONS.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                Destination Location
              </label>
              <select
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
              >
                {DESTINATION_LOCATIONS.map((dest, idx) => (
                  <option key={idx} value={dest}>{dest}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vehicle Selection Grid - ONLY SEDAN AND SUV */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
              Select Vehicle Category (Sedan & SUV Only)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedVehicle('Executive Sedan (Swift Dzire / Etios)')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedVehicle.includes('Sedan')
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-sm font-bold text-white">Executive Sedan</div>
                <div className="text-xs text-amber-400">Swift Dzire / Toyota Etios</div>
                <div className="text-[10px] text-slate-500 mt-1">4 Seats · AC · Spacious Boot</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedVehicle('Prime SUV (Ertiga / 6-7 Seater)')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedVehicle.includes('SUV')
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-sm font-bold text-white">Prime SUV</div>
                <div className="text-xs text-amber-400">Ertiga / 6-7 Seater</div>
                <div className="text-[10px] text-slate-500 mt-1">6-7 Seats · Dual AC · Hill Friendly</div>
              </button>
            </div>

            {/* Note for Crysta & Urbania */}
            <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>For <strong>Innova Crysta</strong>, <strong>Hycross</strong> or <strong>Tempo Traveller</strong>:</span>
              </div>
              <a
                href="tel:+919080082942"
                className="text-amber-400 font-bold hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                <Phone className="w-3 h-3" /> Call Us for Best Rates
              </a>
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
                required
              />
            </div>
          </div>

          {/* Travel Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Pickup Time</label>
              <input
                type="time"
                value={travelTime}
                onChange={(e) => setTravelTime(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500 font-medium"
              />
            </div>
          </div>

          {/* Bottom Action Card (Does NOT explicitly reveal calculated price) */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-white">Direct Dispatch Quotation</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Our Coimbatore desk will share the lowest customized rate instantly.
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="flex-1 sm:flex-none px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                type="submit"
                className="flex-1 sm:flex-none px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                Submit Request
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
