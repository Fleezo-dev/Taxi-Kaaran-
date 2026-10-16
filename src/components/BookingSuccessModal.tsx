import React from 'react';
import { CheckCircle2, MessageSquare, Phone, X } from 'lucide-react';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    from: string;
    to: string;
    vehicle: string;
    date?: string;
    time?: string;
    phone?: string;
    name?: string;
    tripType?: string;
  } | null;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  isOpen,
  onClose,
  bookingDetails
}) => {
  if (!isOpen || !bookingDetails) return null;

  const whatsappMessage = `Hello Taxi Kaaran! I just submitted a taxi quote request on your website:
📍 Pickup: ${bookingDetails.from}
🏁 Destination: ${bookingDetails.to} ${bookingDetails.tripType ? `(${bookingDetails.tripType})` : ''}
🚗 Vehicle: ${bookingDetails.vehicle}
📅 Date & Time: ${bookingDetails.date || 'As soon as possible'} ${bookingDetails.time || ''}
👤 Name: ${bookingDetails.name || 'Customer'}
📞 Phone: ${bookingDetails.phone || ''}

Please share the best quote and cab availability.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0E1528] border-2 border-emerald-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-white text-center overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900 border border-slate-800 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight mb-2">
          QUOTE REQUEST RECEIVED!
        </h3>
        <p className="text-xs text-slate-300 mb-6">
          Thank you <span className="font-bold text-amber-400">{bookingDetails.name || 'Customer'}</span>! Our 24/7 Coimbatore dispatch desk will provide the lowest rate for your trip immediately.
        </p>

        {/* Details Card - No explicit price shown */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-left text-xs space-y-2 mb-6 font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Route:</span>
            <span className="font-bold text-amber-400">{bookingDetails.from} ➔ {bookingDetails.to}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Vehicle:</span>
            <span className="text-white">{bookingDetails.vehicle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Date & Time:</span>
            <span className="text-slate-200">{bookingDetails.date} at {bookingDetails.time}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`https://wa.me/919080082942?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>

          <a
            href="tel:+919080082942"
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Dispatch (+91 90800 82942)</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2 text-xs text-slate-400 hover:text-white font-medium cursor-pointer"
          >
            Close & Return to Home
          </button>
        </div>

      </div>
    </div>
  );
};
