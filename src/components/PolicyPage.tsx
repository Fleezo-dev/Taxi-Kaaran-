import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  FileText, 
  RefreshCw, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Car,
  ChevronRight
} from 'lucide-react';

export type PolicyTab = 'privacy' | 'cancellation' | 'terms';

interface PolicyPageProps {
  initialTab?: PolicyTab;
  onBack: () => void;
  onTabChange?: (tab: PolicyTab) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  initialTab = 'cancellation',
  onBack,
  onTabChange
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  const handleSelectTab = (tab: PolicyTab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold uppercase">Legal & Policies</span>
          </nav>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Official Company Policies
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            POLICIES & LEGAL TERMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Transparent guidelines governing Taxi Kaaran’s cab bookings, cancellation terms, data privacy, and customer satisfaction commitments.
          </p>
        </div>

        {/* Policy Tab Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-2xl mx-auto">
          <button
            onClick={() => handleSelectTab('cancellation')}
            className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'cancellation'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Cancellation & Refund</span>
          </button>

          <button
            onClick={() => handleSelectTab('privacy')}
            className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => handleSelectTab('terms')}
            className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: CANCELLATION & REFUND POLICY */}
        {/* ======================================================== */}
        {activeTab === 'cancellation' && (
          <div className="bg-[#10182B] rounded-3xl border border-amber-500/20 p-6 sm:p-10 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Zero Hidden Fees Guarantee</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-display">Cancellation & Refund Policy</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                Last Updated: March 2026
              </span>
            </div>

            {/* Key Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Free Cancellation</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Cancel up to 3 hours prior to city trip with zero charges.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Flight Delay Shield</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Free waiting time at CJB airport if your flight is delayed.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Instant 100% Refund</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Prepaid advances refunded within 24 hours back to source account.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">1</span>
                  Cancellation Windows & Charges
                </h3>
                <p>
                  At Taxi Kaaran Coimbatore, we understand that travel itineraries can change unexpectedly. We provide clear, customer-friendly cancellation terms:
                </p>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-slate-200 uppercase font-mono">
                      <tr>
                        <th className="p-3 border-b border-slate-800">Trip Category</th>
                        <th className="p-3 border-b border-slate-800">Cancellation Window</th>
                        <th className="p-3 border-b border-slate-800">Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      <tr>
                        <td className="p-3 font-semibold text-white">Local Coimbatore & Airport Transfers</td>
                        <td className="p-3 text-slate-300">More than 2 hours before scheduled pickup</td>
                        <td className="p-3 text-emerald-400 font-bold">₹0 (100% Free Cancellation)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Outstation Trips (Pollachi, Palani, Siruvani)</td>
                        <td className="p-3 text-slate-300">More than 4 hours before pickup</td>
                        <td className="p-3 text-emerald-400 font-bold">₹0 (100% Free Cancellation)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Hill Station Tours (Ooty, Valparai, Kodaikanal, Munnar)</td>
                        <td className="p-3 text-slate-300">More than 6 hours before scheduled pickup</td>
                        <td className="p-3 text-emerald-400 font-bold">₹0 (100% Free Cancellation)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Late Cancellation (Driver already dispatched)</td>
                        <td className="p-3 text-slate-300">Less than 1 hour before pickup time</td>
                        <td className="p-3 text-amber-400 font-bold">₹300 nominal driver mobilization fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">2</span>
                  Flight Delay Policy at Coimbatore Airport (CJB)
                </h3>
                <p>
                  If you provide your flight number during booking, our dispatch team actively monitors your flight status. If your flight is delayed or rescheduled by the airline:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Zero Waiting Charges:</strong> Your assigned driver adjusts arrival time according to updated runway landing times.</li>
                  <li><strong>Zero Cancellation Penalty:</strong> If the airline cancels your flight completely, you can cancel your cab with 100% zero fees.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">3</span>
                  How to Initiate a Cancellation
                </h3>
                <p>
                  To cancel or reschedule a booking, you can contact our 24/7 Coimbatore dispatch desk directly:
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://wa.me/919080082942?text=Hello%20Taxi%20Kaaran!%20I%20would%20like%20to%20cancel%20or%20reschedule%20my%20booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase"
                  >
                    <span>Instant WhatsApp: +91 90800 82942</span>
                  </a>
                  <a
                    href="tel:+919080082942"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 hover:text-white font-bold text-xs uppercase"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Dispatch: +91 90800 82942</span>
                  </a>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">4</span>
                  Refund Processing Timelines
                </h3>
                <p>
                  For bookings where an advance deposit was paid via UPI, Net Banking, or Credit/Debit Card:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>UPI Transfers: Processed within 2 to 4 hours directly back to your VPA.</li>
                  <li>Bank Accounts & Cards: Credited within 24 to 48 business hours depending on the beneficiary bank.</li>
                  <li>A confirmation transaction ID is shared immediately via SMS/WhatsApp.</li>
                </ul>
              </section>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: PRIVACY POLICY */}
        {/* ======================================================== */}
        {activeTab === 'privacy' && (
          <div className="bg-[#10182B] rounded-3xl border border-amber-500/20 p-6 sm:p-10 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Customer Data Protection</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-display">Privacy Policy</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                Effective: March 2026
              </span>
            </div>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">1</span>
                  Information We Collect
                </h3>
                <p>
                  Taxi Kaaran respects your privacy. When you request a quote or book a cab on our website, we only collect essential travel coordination details:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Contact Details:</strong> Your name and mobile phone number (to dispatch vehicle and driver details).</li>
                  <li><strong>Trip Details:</strong> Pickup address, destination, date, flight/train timing, and chosen vehicle category (Sedan or SUV).</li>
                  <li><strong>Technical Data:</strong> Standard browser session cookies strictly used for site navigation and Google Ads conversion tracking.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">2</span>
                  How We Use Your Information
                </h3>
                <p>
                  We strictly utilize your collected data for operational transit purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>To allocate the nearest verified driver and dispatch cab number plates before your pickup.</li>
                  <li>To coordinate airport arrivals and hill station forest checkpost clearances.</li>
                  <li>To send digital billing summaries and receipt invoices via WhatsApp/SMS.</li>
                  <li><strong>We NEVER sell, rent, or lease customer phone numbers to telemarketers or third-party brokers.</strong></li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">3</span>
                  Google Ads & Cookie Tracking
                </h3>
                <p>
                  Our website utilizes Google Ads tracking tags and Google Analytics to measure advertising performance and help prospective travelers locate our Coimbatore cab services. These cookies do not contain personally identifiable confidential data like passwords or credit card numbers. You may disable cookies in your browser settings at any time without disrupting your ability to call or WhatsApp us for taxi dispatch.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">4</span>
                  Data Security & Retention
                </h3>
                <p>
                  Customer records are stored securely on encrypted cloud servers. Booking records are retained solely for accounting and statutory legal compliance under the Motor Vehicles Act and GST rules, after which they are purged.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">5</span>
                  Privacy Inquiries
                </h3>
                <p>
                  For any questions regarding your data privacy, please write to our Data Officer at:
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1 font-mono text-slate-300">
                  <div><strong>Taxi Kaaran Privacy Desk</strong></div>
                  <div>Gandhipuram Central Bus Stand Area, Coimbatore - 641012</div>
                  <div>Email: <a href="mailto:privacy@taxikaaran.in" className="text-amber-400 underline">privacy@taxikaaran.in</a></div>
                  <div>Direct Phone: +91 90800 82942</div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: TERMS AND CONDITIONS */}
        {/* ======================================================== */}
        {activeTab === 'terms' && (
          <div className="bg-[#10182B] rounded-3xl border border-amber-500/20 p-6 sm:p-10 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Service Contract</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-display">Terms and Conditions</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                Effective: March 2026
              </span>
            </div>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">1</span>
                  Scope of Service
                </h3>
                <p>
                  Taxi Kaaran operates a licensed commercial taxi dispatch and car rental service headquartered in Coimbatore, Tamil Nadu. We provide chauffeured car rental services for point-to-point transfers, airport pickups, day rentals, and outstation tours to the Nilgiris, Palani Hills, Anamalais, Kerala, and Karnataka.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">2</span>
                  Transparent Pricing & Final Rounded Rates
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Final Upfront Fares:</strong> All destination fares quoted on our platform are final rounded figures based on standard per-km calculations (₹30/km base fare ₹300, hill charges ₹300 for mountain routes, ₹100 local base fare).</li>
                  <li><strong>Tolls & Interstate Permits:</strong> National highway toll plaza fees and interstate vehicle entry permits (e.g. Karnataka / Kerala entry tax) are settled directly or included transparently as stated in your booking confirmation without hidden surcharges.</li>
                  <li><strong>No Surge Multipliers:</strong> We do not practice algorithmic surge pricing during rainy weather or peak passenger demand.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">3</span>
                  Hill Station Safety & Forest Checkpoint Compliance
                </h3>
                <p>
                  Travelers bound for hill stations (Ooty, Valparai, Kodaikanal, Munnar) must observe statutory forest regulations:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Checkpost Timings:</strong> The Forest Department closes ghat entries after 6:00 PM at Aliyar (for Valparai) and 8:00 PM in Nilgiri wildlife corridors. Trips must be scheduled to clear checkpoints safely within daylight hours.</li>
                  <li><strong>Wildlife Etiquette:</strong> Stopping to feed wild animals or littering single-use plastic on ghat roads is strictly prohibited by law.</li>
                  <li><strong>Driver Speed Limits:</strong> Our drivers are mandated to adhere to strict ghat speed regulations (under 35 km/h on hairpin bends) for passenger safety.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">4</span>
                  Fleet & Luggage Capacity
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Executive Sedan:</strong> Swift Dzire / Toyota Etios (Maximum 4 passengers + 3 medium bags).</li>
                  <li><strong>Prime SUV:</strong> Maruti Ertiga / 6-7 Seater (Maximum 6 passengers + 5 bags).</li>
                  <li><strong>Commercial Luxury Vehicles:</strong> For Toyota Innova Crysta or Force Urbania, bookings are accepted via direct phone consultation.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">5</span>
                  Customer Care & Dispute Resolution
                </h3>
                <p>
                  Any service concerns or billing disputes are handled directly by our Coimbatore management team within 24 hours. Jurisdiction for any legal claims rests solely with the competent courts of Coimbatore, Tamil Nadu, India.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* Bottom Contact & Quick Support Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">Have Questions About Our Policies?</h4>
            <p className="text-xs text-slate-300">Our customer support team is available 24 hours a day to assist you.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919080082942"
              className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs uppercase rounded-xl shadow-md flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 90800 82942</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
