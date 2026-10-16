import React from 'react';
import { ShieldCheck, Banknote, Clock, Award, PhoneCall, Sparkles, MapPin, UserCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Local Drivers',
      desc: 'All Taxi Kaaran drivers are background-verified, polite Tamil/English speakers with 7+ years hill station driving experience.'
    },
    {
      icon: Banknote,
      title: 'Fixed Fare Guarantee',
      desc: 'Zero surge pricing, zero unexpected waiting fees. Transparent line-by-line fare breakdown before trip confirmation.'
    },
    {
      icon: Clock,
      title: 'On-Time Pickups',
      desc: 'Flight delayed at CJB Airport? Train running late at Coimbatore Junction? We track live statuses and adjust pickup times free of charge.'
    },
    {
      icon: UserCheck,
      title: 'Sanitized AC Cabs',
      desc: 'Every vehicle undergoes deep interior cleaning and sanitization prior to every departure. Pure comfort guaranteed.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#090D16] via-[#0E1528] to-[#090D16] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> The Taxi Kaaran Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            WHY TRAVEL WITH TAXI KAARAN?
          </h2>
          <p className="text-sm text-slate-300">
            Coimbatore’s top choice for airport taxi transfers, local drop-offs, and hill station family holidays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121A2E]/90 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 text-left space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
