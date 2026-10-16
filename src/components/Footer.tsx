import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, MessageSquare, Compass, BookOpen } from 'lucide-react';
import { TaxiLogo } from './TaxiLogo';
import { ALL_DESTINATIONS } from '../data/destinationsData';
import { BLOG_POSTS } from '../data/blogsData';

interface FooterProps {
  onNavigate?: (page: string, paramId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string, paramId?: string, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, paramId);
    }
    if (anchor && page === 'home') {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#060910] text-slate-400 border-t border-amber-500/20 pt-16 pb-32 sm:pb-28 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <TaxiLogo size="md" />
              <span className="text-xl font-black text-white font-display tracking-tight">
                TAXI <span className="text-amber-500">KAARAN</span>
              </span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              Coimbatore’s leading taxi & outstation cab provider. Safe, punctual, and transparent fixed fares for Ooty, Kodaikanal, Adiyogi, Valparai, Munnar, Mysore & South India.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Verified Drivers & Sanitized Cabs
            </div>
          </div>

          {/* Destination Itineraries (Google Ads Sitelinks Ready) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>10 Travel Itineraries</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {ALL_DESTINATIONS.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => handleNav('destination-detail', d.id)}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    {d.name} Itinerary & Guide
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('all-destinations')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                >
                  <span>View All 10 Destinations →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Travel Blogs & Advisories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Travel Advisories & Blogs</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {BLOG_POSTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => handleNav('blog-detail', p.id)}
                    className="hover:text-amber-400 transition-colors text-left line-clamp-1 cursor-pointer"
                    title={p.title}
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleNav('blogs')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>All Travel Blogs →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Contact Us</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Gandhipuram Central Bus Stand Area, Coimbatore, Tamil Nadu 641012</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919080082942" className="hover:text-amber-400 font-mono font-bold">+91 90800 82942</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919080082942" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-mono font-bold">+91 90800 82942 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>booking@taxikaaran.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sitelinks Strip for Google Ads */}
        <div className="py-6 border-b border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="font-bold text-slate-300 uppercase tracking-wider">Quick Sitelinks:</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button onClick={() => handleNav('destination-detail', 'ooty')} className="hover:text-amber-400 cursor-pointer">Ooty Cab</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'adiyogi')} className="hover:text-amber-400 cursor-pointer">Adiyogi Taxi</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'valparai')} className="hover:text-amber-400 cursor-pointer">Valparai Cabs</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'kodaikanal')} className="hover:text-amber-400 cursor-pointer">Kodaikanal Taxi</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'pollachi')} className="hover:text-amber-400 cursor-pointer">Pollachi Cabs</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'munnar')} className="hover:text-amber-400 cursor-pointer">Munnar Outstation</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'palani')} className="hover:text-amber-400 cursor-pointer">Palani Pilgrimage</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'siruvani')} className="hover:text-amber-400 cursor-pointer">Siruvani Day Trip</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'mysore')} className="hover:text-amber-400 cursor-pointer">Mysore Palace</button>
            <span>·</span>
            <button onClick={() => handleNav('destination-detail', 'yercaud')} className="hover:text-amber-400 cursor-pointer">Yercaud Tour</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Taxi Kaaran Coimbatore. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <button onClick={() => handleNav('home')} className="hover:text-amber-400 cursor-pointer">Home</button>
            <span>·</span>
            <button onClick={() => handleNav('all-destinations')} className="hover:text-amber-400 cursor-pointer">All Itineraries</button>
            <span>·</span>
            <button onClick={() => handleNav('blogs')} className="hover:text-amber-400 cursor-pointer">Travel Blogs</button>
            <span>·</span>
            <button onClick={() => handleNav('policies', 'privacy')} className="hover:text-amber-400 cursor-pointer">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => handleNav('policies', 'cancellation')} className="hover:text-amber-400 cursor-pointer">Cancellation & Refunds</button>
            <span>·</span>
            <button onClick={() => handleNav('policies', 'terms')} className="hover:text-amber-400 cursor-pointer">Terms & Conditions</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
