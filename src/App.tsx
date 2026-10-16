import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PopularRoutesTable } from './components/PopularRoutesTable';
import { FleetShowcase } from './components/FleetShowcase';
import { CoimbatoreDestinations } from './components/CoimbatoreDestinations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { FareCalculatorModal } from './components/FareCalculatorModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';

// Sitelinks Individual Pages
import { AllDestinationsPage } from './components/AllDestinationsPage';
import { DestinationDetailPage } from './components/DestinationDetailPage';
import { BlogListPage } from './components/BlogListPage';
import { BlogDetailPage } from './components/BlogDetailPage';
import { PolicyPage, PolicyTab } from './components/PolicyPage';

// Data models
import { RoutePrice, VehicleOption, DestinationCard } from './data/taxiData';
import { ALL_DESTINATIONS, DestinationDetail } from './data/destinationsData';
import { BLOG_POSTS, BlogPost } from './data/blogsData';

type PageView = 'home' | 'all-destinations' | 'destination-detail' | 'blogs' | 'blog-detail' | 'policies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedDestId, setSelectedDestId] = useState<string>('ooty');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('coimbatore-airport-to-ooty-taxi-guide');
  const [destinationsFilter, setDestinationsFilter] = useState<'all' | 'more6'>('all');
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTab>('cancellation');

  const [isFareCalcOpen, setIsFareCalcOpen] = useState(false);
  const [calcPrefill, setCalcPrefill] = useState<{ from?: string; to?: string; vehicle?: string }>({});

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeBooking, setActiveBooking] = useState<{
    from: string;
    to: string;
    vehicle: string;
    date?: string;
    time?: string;
    phone?: string;
    name?: string;
    totalPrice?: number;
  } | null>(null);

  // Sync hash routing for Google Ads sitelinks and direct bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      
      if (hash.startsWith('destination/')) {
        const destId = hash.replace('destination/', '');
        const exists = ALL_DESTINATIONS.find(d => d.id === destId);
        if (exists) {
          setSelectedDestId(destId);
          setCurrentPage('destination-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('blog/')) {
        const blogId = hash.replace('blog/', '');
        const exists = BLOG_POSTS.find(b => b.id === blogId);
        if (exists) {
          setSelectedBlogId(blogId);
          setCurrentPage('blog-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash === 'destinations' || hash === 'all-destinations') {
        setCurrentPage('all-destinations');
        setDestinationsFilter('all');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === 'more-destinations') {
        setCurrentPage('all-destinations');
        setDestinationsFilter('more6');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === 'blogs' || hash === 'blog') {
        setCurrentPage('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Legal & Policies
      if (hash === 'privacy-policy' || hash === 'privacy') {
        setActivePolicyTab('privacy');
        setCurrentPage('policies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === 'cancellation-policy' || hash === 'cancellation' || hash === 'refund-policy') {
        setActivePolicyTab('cancellation');
        setCurrentPage('policies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === 'terms-and-conditions' || hash === 'terms' || hash === 'terms-of-service') {
        setActivePolicyTab('terms');
        setCurrentPage('policies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Default home
      if (hash === '' || hash === 'home' || hash === 'popular-routes' || hash === 'fleet' || hash === 'reviews' || hash === 'faq') {
        setCurrentPage('home');
        if (hash && hash !== 'home') {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on initial load
    handleHashChange();

    // Listen to browser navigation (back/forward)
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation dispatcher
  const navigateTo = (page: PageView, paramId?: string) => {
    if (page === 'home') {
      window.location.hash = '';
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'all-destinations') {
      window.location.hash = '/destinations';
      setCurrentPage('all-destinations');
      setDestinationsFilter('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'destination-detail') {
      const destId = paramId || 'ooty';
      window.location.hash = `/destination/${destId}`;
      setSelectedDestId(destId);
      setCurrentPage('destination-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'blogs') {
      window.location.hash = '/blogs';
      setCurrentPage('blogs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'blog-detail') {
      const blogId = paramId || BLOG_POSTS[0].id;
      window.location.hash = `/blog/${blogId}`;
      setSelectedBlogId(blogId);
      setCurrentPage('blog-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'policies') {
      const tab = (paramId as PolicyTab) || 'cancellation';
      setActivePolicyTab(tab);
      if (tab === 'privacy') window.location.hash = '/privacy-policy';
      else if (tab === 'terms') window.location.hash = '/terms-and-conditions';
      else window.location.hash = '/cancellation-policy';
      setCurrentPage('policies');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (prefill?: { from?: string; to?: string; vehicle?: string }) => {
    if (prefill) {
      setCalcPrefill(prefill);
    } else {
      setCalcPrefill({});
    }
    setIsFareCalcOpen(true);
  };

  const handleHeroQuoteSubmit = (formData: {
    pickup: string;
    destination: string;
    date: string;
    time: string;
    vehicle: string;
  }) => {
    setActiveBooking({
      from: formData.pickup,
      to: formData.destination,
      date: formData.date,
      time: formData.time,
      vehicle: formData.vehicle,
      name: 'Valued Traveller',
      phone: ''
    });
    setIsSuccessModalOpen(true);
  };

  const handleSelectRouteFromTable = (route: RoutePrice) => {
    handleOpenBooking({
      from: route.from,
      to: route.to,
      vehicle: 'Swift Dzire / Toyota Etios'
    });
  };

  const handleSelectVehicleFromFleet = (vehicle: VehicleOption) => {
    handleOpenBooking({
      vehicle: vehicle.name
    });
  };

  const handleBookDestination = (dest: DestinationCard) => {
    handleOpenBooking({
      from: 'Coimbatore Airport (CJB)',
      to: dest.name
    });
  };

  const handleConfirmModalBooking = (bookingDetails: {
    from: string;
    to: string;
    vehicle: string;
    phone: string;
    name: string;
    date: string;
    time: string;
    tripType: string;
  }) => {
    setIsFareCalcOpen(false);
    setActiveBooking({
      from: bookingDetails.from,
      to: bookingDetails.to,
      vehicle: bookingDetails.vehicle,
      date: bookingDetails.date,
      time: bookingDetails.time,
      phone: bookingDetails.phone,
      name: bookingDetails.name
    });
    setIsSuccessModalOpen(true);
  };

  const currentDestinationDetail = ALL_DESTINATIONS.find(d => d.id === selectedDestId) || ALL_DESTINATIONS[0];
  const currentBlogPost = BLOG_POSTS.find(b => b.id === selectedBlogId) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        onNavigate={(page, paramId) => navigateTo(page as PageView, paramId)}
        currentPage={currentPage}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection 
              onQuoteSubmit={handleHeroQuoteSubmit}
              onViewAllDestinations={() => navigateTo('all-destinations')}
            />

            {/* Popular Routes & Pricing Table */}
            <PopularRoutesTable onSelectRoute={handleSelectRouteFromTable} />

            {/* Vehicle Fleet Showcase */}
            <FleetShowcase onSelectVehicle={handleSelectVehicleFromFleet} />

            {/* Top 4 Destinations on Home Page with View More for 6 more */}
            <CoimbatoreDestinations 
              onBookDestination={handleBookDestination}
              onViewAllDestinations={() => {
                setDestinationsFilter('more6');
                navigateTo('all-destinations');
              }}
              onViewDestinationDetail={(destId) => navigateTo('destination-detail', destId)}
            />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Customer Reviews & Standards */}
            <CustomerReviews />

            {/* FAQ Section */}
            <FAQSection />
          </>
        )}

        {currentPage === 'all-destinations' && (
          <AllDestinationsPage
            onBack={() => navigateTo('home')}
            onSelectDestination={(destId) => navigateTo('destination-detail', destId)}
            initialFilter={destinationsFilter}
          />
        )}

        {currentPage === 'destination-detail' && (
          <DestinationDetailPage
            destination={currentDestinationDetail}
            onBack={() => navigateTo('all-destinations')}
            onSelectDestination={(destId) => navigateTo('destination-detail', destId)}
            onBookTrip={(details) => handleOpenBooking(details)}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogListPage
            onBack={() => navigateTo('home')}
            onSelectPost={(blogId) => navigateTo('blog-detail', blogId)}
          />
        )}

        {currentPage === 'blog-detail' && (
          <BlogDetailPage
            post={currentBlogPost}
            onBack={() => navigateTo('blogs')}
            onSelectPost={(blogId) => navigateTo('blog-detail', blogId)}
            onSelectDestination={(destId) => navigateTo('destination-detail', destId)}
          />
        )}

        {currentPage === 'policies' && (
          <PolicyPage
            initialTab={activePolicyTab}
            onBack={() => navigateTo('home')}
            onTabChange={(tab) => {
              setActivePolicyTab(tab);
              if (tab === 'privacy') window.location.hash = '/privacy-policy';
              else if (tab === 'terms') window.location.hash = '/terms-and-conditions';
              else window.location.hash = '/cancellation-policy';
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(page, paramId) => navigateTo(page as PageView, paramId)} />

      {/* Mobile Sticky Quick Bar */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Fare Estimator & Interactive Booking Modal */}
      <FareCalculatorModal
        isOpen={isFareCalcOpen}
        onClose={() => setIsFareCalcOpen(false)}
        initialFrom={calcPrefill.from}
        initialTo={calcPrefill.to}
        initialVehicle={calcPrefill.vehicle}
        onConfirmBooking={handleConfirmModalBooking}
      />

      {/* Success Confirmation Toast Modal */}
      <BookingSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        bookingDetails={activeBooking}
      />

    </div>
  );
}
