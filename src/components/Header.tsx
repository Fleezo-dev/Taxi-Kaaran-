import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  MessageSquare, 
  Compass, 
  Car, 
  MapPin, 
  Clock, 
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
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Zone 1: Brand Wordmark with Front Face Car & Driver Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 sm:gap-3.5 group shrink-0 text-left cursor-pointer"
            >
              <TaxiLogo size="md" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-display">
                    TAXI <span className="text-amber-500">KAARAN</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30">
                    24/7
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-slate-400 uppercase hidden xs:block">
                  Coimbatore Cabs & Outstation
                </span>
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

            {/* Zone 2: Action Buttons & Hamburger Menu Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Phone Quick Call Pill */}
              <a
                href="tel:+919080082942"
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full transition-all duration-200 shrink-0"
                title="Call Taxi Kaaran Now"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="font-mono">{phoneDisplay}</span>
              </a>

              {/* Book Cab Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-xl shadow-md shadow-orange-500/20 active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
              >
                <span>Book Cab</span>
              </button>

              {/* Prominent Hamburger Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl bg-amber-500/15 border-2 border-amber-500/50 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-bold transition-all duration-200 shadow-md cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-current" />
                ) : (
                  <Menu className="w-5 h-5 text-current" />
                )}
                <span className="text-xs font-extrabold tracking-wider uppercase">
                  {menuOpen ? 'Close' : 'Menu'}
                </span>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* BULLETPROOF HAMBURGER DRAWER */}
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
              {/* Drawer Top Header with Logo and Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <TaxiLogo size="sm" />
                  <div>
                    <div className="text-lg font-black text-white font-display">
                      TAXI <span className="text-amber-500">KAARAN</span>
                    </div>
                    <div className="text-[10px] text-amber-400 font-mono font-semibold uppercase">
                      Coimbatore 24/7 Dispatch
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
                href="tel:+919080082942"
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
