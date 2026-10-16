import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  X, 
  ShieldCheck, 
  MessageSquare, 
  Compass, 
  Car, 
  MapPin, 
  HelpCircle, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { TaxiLogo } from './TaxiLogo';

interface HeaderProps {
  onOpenBooking: (prefillRoute?: { from?: string; to?: string; vehicle?: string }) => void;
  onNavigate?: (page: string, paramId?: string) => void;
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenBooking, 
  onNavigate,
  currentPage = 'home'
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneDisplay = '+91 90800 82942';
  const phoneTel = 'tel:+919080082942';
  const whatsappUrl = `https://wa.me/919080082942?text=${encodeURIComponent('Hello Taxi Kaaran! I would like to inquire about booking a taxi service in Coimbatore.')}`;

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (page: string, anchor?: string) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
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

  const navItems = [
    {
      title: '10 Destination Itineraries',
      subtitle: 'Sightseeing, nice hotels, clean restrooms & foods',
      action: () => handleNavClick('all-destinations'),
      icon: Compass,
      tag: '10 Guides'
    },
    {
      title: 'Travel Blogs & Advisories',
      subtitle: 'Airport taxi tips, ghat safety & transparent fares',
      action: () => handleNavClick('blogs'),
      icon: BookOpen,
      tag: '4 Articles'
    },
    {
      title: 'Popular Routes & Pricing',
      subtitle: 'Fixed fares for Outstation, Hill Stations & Airport',
      action: () => handleNavClick('home', '#popular-routes'),
      icon: MapPin,
      tag: 'Fixed Fares'
    },
    {
      title: 'Vehicle Fleet',
      subtitle: 'Executive Sedan & Prime SUV',
      action: () => handleNavClick('home', '#fleet'),
      icon: Car,
      tag: 'Sedan & SUV'
    },
    {
      title: 'Our Standards',
      subtitle: 'Guaranteed upfront pricing & verified local drivers',
      action: () => handleNavClick('home', '#reviews'),
      icon: ShieldCheck,
      tag: '100% Safety'
    },
    {
      title: 'FAQ & Help',
      subtitle: 'Hill station permits, tolls & dispatch info',
      action: () => handleNavClick('home', '#faq'),
      icon: HelpCircle,
      tag: 'Helpdesk'
    },
    {
      title: 'Policies & Cancellation',
      subtitle: 'Free cancellation, privacy policy & terms',
      action: () => handleNavClick('policies'),
      icon: ShieldCheck,
      tag: 'Policies'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#090D16]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Zone 1: Logo & TAXI KAARAN Wordmark + Slogan */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 text-left cursor-pointer"
            >
              {/* Separate clean Taxi Logo artwork */}
              <TaxiLogo size="sm" className="sm:hidden" />
              <TaxiLogo size="md" className="hidden sm:flex" />

              {/* TAXI KAARAN Wordmark + Slogan below wordmark left-aligned */}
              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-base sm:text-2xl font-black tracking-tight text-white font-display leading-none">
                    TAXI <span className="text-amber-500">KAARAN</span>
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 px-1 sm:px-1.5 py-0.5 rounded border border-amber-500/30 shrink-0">
                    24/7
                  </span>
                </div>
                <div 
                  className="text-[10px] sm:text-[12px] font-black tracking-widest text-amber-400 uppercase leading-none mt-1"
                  style={{ fontFamily: "'Bebas Neue', 'Oswald', 'Outfit', sans-serif" }}
                >
                  THE OG BOYS TEAM
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors cursor-pointer ${currentPage === 'home' ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('all-destinations')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${currentPage === 'all-destinations' || currentPage === 'destination-detail' ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Destinations (10)</span>
              </button>
              <button
                onClick={() => handleNavClick('blogs')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${currentPage === 'blogs' || currentPage === 'blog-detail' ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Blogs (4)</span>
              </button>
              <button
                onClick={() => handleNavClick('home', '#popular-routes')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick('home', '#fleet')}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Fleet
              </button>
            </nav>

            {/* Zone 2: Compact Clickable Orange Phone Button & Compact Hamburger Menu */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Premium Signature Orange Phone Button */}
              <a
                href={phoneTel}
                className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 border border-amber-300/40 rounded-xl shadow-md shadow-orange-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
                title="Call Taxi Kaaran Now"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950 fill-slate-950 stroke-[2.5] shrink-0" />
                <span className="font-mono tracking-tight text-slate-950">{phoneDisplay}</span>
              </a>

              {/* Compact Hamburger Menu Icon (3 golden-yellow lines) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 active:scale-95 transition-all cursor-pointer shrink-0"
                aria-label="Open menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-amber-400" />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-1 w-5 h-5">
                    <span className="w-5 h-0.5 bg-amber-400 rounded-full"></span>
                    <span className="w-5 h-0.5 bg-amber-400 rounded-full"></span>
                    <span className="w-5 h-0.5 bg-amber-400 rounded-full"></span>
                  </div>
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* HAMBURGER DRAWER */}
      {/* ======================================================== */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99999] flex justify-end">
          
          {/* Dark Backdrop */}
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Container Panel */}
          <div 
            className="relative w-full max-w-md bg-[#0A101D] border-l-2 border-amber-500/40 text-white h-screen z-10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-[-10px_0_40px_rgba(0,0,0,0.8)]"
            style={{ minHeight: '100vh' }}
          >
            <div>
              {/* Drawer Top Header with Logo, Slogan and Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <TaxiLogo size="sm" />
                  <div className="flex flex-col text-left">
                    <div className="text-lg font-black text-white font-display leading-none">
                      TAXI <span className="text-amber-500">KAARAN</span>
                    </div>
                    <div 
                      className="text-[11px] text-amber-400 font-black uppercase tracking-widest leading-none mt-1"
                      style={{ fontFamily: "'Bebas Neue', 'Oswald', 'Outfit', sans-serif" }}
                    >
                      THE OG BOYS TEAM
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-500 hover:bg-amber-500/20 transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Notice Banner */}
              <div className="my-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2.5 text-xs text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>100% Fixed Fares:</strong> Upfront guaranteed rates with no surprise extras.
                </span>
              </div>

              {/* Navigation Items List */}
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Quick Navigation & Sitelinks
              </div>

              <nav className="space-y-2">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full text-left group flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 hover:bg-amber-500/15 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.tag && (
                          <span className="text-[10px] font-mono font-semibold bg-slate-800 text-amber-400 px-2 py-0.5 rounded border border-slate-700">
                            {item.tag}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Premium Fleets Notice in Menu */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-amber-400">Looking for Innova Crysta or Urbania?</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  For large groups, corporate VIPs and weddings, please call our Coimbatore desk directly for best custom rates.
                </p>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-2.5 mt-6">
              <a
                href={phoneTel}
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Call Us: {phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
              >
                <span>Request Cab Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
};

