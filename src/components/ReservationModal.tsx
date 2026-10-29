import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Heart, ShieldCheck, MapPin, Phone, MessageCircle, QrCode } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'details' | 'confirmation'>('details');

  // Form states
  const [area, setArea] = useState<'rooftop' | 'heritage' | 'private'>('rooftop');
  const [date, setDate] = useState<string>('Today');
  const [timeSlot, setTimeSlot] = useState<string>('8:00 PM (Dinner)');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Romantic Date');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '12:30 PM (Lunch Buffet)',
    '1:30 PM (Lunch)',
    '2:30 PM (Late Lunch)',
    '6:00 PM (Sunset Sundowner)',
    '7:30 PM (Dinner & Acoustics)',
    '8:15 PM (Prime Dinner)',
    '9:00 PM (Dinner)',
    '10:00 PM (Late Night Dining)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Generate realistic reservation reference
    const refCode = `DWR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(refCode);
    setStep('confirmation');
  };

  const whatsAppConfirmationText = `*DWAAR TABLE RESERVATION CONFIRMED*\nRef: ${bookingCode}\nGuest: ${name}\nArea: ${area.toUpperCase()}\nGuests: ${guests}\nDate: ${date}\nTime: ${timeSlot}\nOccasion: ${occasion}\n\nVenue: Dwaar Heritage & Sky Lounge, Sector 12 Dwarka (Opp. Pillar 1042)`;
  const whatsAppUrl = `https://wa.me/919811039227?text=${encodeURIComponent(whatsAppConfirmationText)}`;

  const handleModalClose = () => {
    onClose();
    setTimeout(() => {
      setStep('details');
    }, 300);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleModalClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#0F1422] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto text-zinc-100">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-950/70 via-[#131929] to-[#0F1422] border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                {step === 'details' ? 'Instant Table Reservation' : 'Reservation Confirmed!'}
              </h3>
              <p className="text-[11px] text-zinc-400">
                {step === 'details' ? '0% Booking Fee • Instant SMS & WhatsApp Pass' : 'Guaranteed VIP Table Allocated'}
              </p>
            </div>
          </div>

          <button
            onClick={handleModalClose}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Booking Form */}
        {step === 'details' && (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Dining Area Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                1. Select Ambiance Zone:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setArea('rooftop')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    area === 'rooftop'
                      ? 'bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-amber-500 text-amber-300'
                      : 'bg-[#090D18] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <p className="text-xs font-bold">Rooftop Sky Terrace</p>
                  <p className="text-[10px] text-zinc-400">Open-Air &amp; Cabanas</p>
                </button>

                <button
                  type="button"
                  onClick={() => setArea('heritage')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    area === 'heritage'
                      ? 'bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-amber-500 text-amber-300'
                      : 'bg-[#090D18] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <p className="text-xs font-bold">Heritage Hall (L1)</p>
                  <p className="text-[10px] text-zinc-400">Family &amp; Sitar Music</p>
                </button>

                <button
                  type="button"
                  onClick={() => setArea('private')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    area === 'private'
                      ? 'bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-amber-500 text-amber-300'
                      : 'bg-[#090D18] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <p className="text-xs font-bold">Private Darbar</p>
                  <p className="text-[10px] text-zinc-400">Group Dinners</p>
                </button>
              </div>
            </div>

            {/* Date, Guests & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Date</label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Today">Today (Oct 17)</option>
                  <option value="Tomorrow">Tomorrow (Oct 18)</option>
                  <option value="This Saturday">Saturday Evening</option>
                  <option value="This Sunday">Sunday Grand Buffet</option>
                  <option value="Next Week">Next Week</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Time Slot</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Mobile Number (For WhatsApp Pass) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98110 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Occasion & Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Special Occasion</label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Casual Dinner">Casual Family Dinner</option>
                  <option value="Romantic Date">Romantic Date / Candlelight</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Business Dinner">Corporate / Business Meet</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-400">Dietary / Seating Note</label>
                <input
                  type="text"
                  placeholder="e.g. Pure Jain Food, Cabana Seat"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-[#090D18] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Direct Booking Privilege Banner */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2.5 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Direct Web Privilege:</strong> Guaranteed window/cabana priority + Complimentary Chef's Shahi Dessert on arrival!
              </span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Confirm Reservation &amp; Get Pass
            </button>

          </form>
        )}

        {/* Step 2: Instant Confirmation Digital Pass */}
        {step === 'confirmation' && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-serif font-bold text-white">Your Table is Reserved!</h4>
              <p className="text-xs text-zinc-400">
                We have notified our Maître d'. Your VIP table has been held for 15 minutes past the slot.
              </p>
            </div>

            {/* Stylized Digital Table Pass */}
            <div className="bg-[#090D18] border-2 border-dashed border-amber-500/50 rounded-2xl p-5 text-left space-y-4 relative">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">BOOKING ID</span>
                  <p className="font-mono text-xl font-bold text-amber-400">{bookingCode}</p>
                </div>
                <div className="p-2 bg-white rounded-lg">
                  <QrCode className="w-7 h-7 text-black" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase">GUEST NAME</span>
                  <p className="font-bold text-white">{name}</p>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase">PARTY SIZE</span>
                  <p className="font-bold text-white">{guests} Guests</p>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase">AREA ALLOCATED</span>
                  <p className="font-bold text-amber-300 capitalize">{area === 'rooftop' ? 'Sky Lounge Rooftop' : area === 'heritage' ? 'Heritage Hall (L1)' : 'Private Darbar'}</p>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase">DATE &amp; TIME</span>
                  <p className="font-bold text-white">{date} • {timeSlot}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                <span>📍 Plot 14, Sec 12 Dwarka (Opp Pillar 1042)</span>
                <span className="text-emerald-400 font-semibold">Valet Included</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Save Pass &amp; Share to WhatsApp</span>
              </a>

              <button
                onClick={handleModalClose}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors cursor-pointer"
              >
                Close &amp; Return to Website
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
