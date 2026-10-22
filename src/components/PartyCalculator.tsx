import React, { useState } from 'react';
import { PartyPopper, Users, Sparkles, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

interface PartyProps {
  onOpenReservation: () => void;
}

export const PartyCalculator: React.FC<PartyProps> = ({ onOpenReservation }) => {
  const [guestCount, setGuestCount] = useState<number>(45);
  const [eventType, setEventType] = useState<'Birthday' | 'Anniversary' | 'Corporate' | 'Roka'>('Birthday');
  const [selectedTier, setSelectedTier] = useState<'silver' | 'gold' | 'platinum'>('gold');

  const tiers = {
    silver: {
      name: 'Royal Feast',
      pricePerPerson: 850,
      description: 'Perfect for intimate family birthdays and cozy milestone dinners.',
      features: [
        '3 Hot Starters (Veg & Non-Veg)',
        '24-Hour Dal Bukhara + 2 Shahi Curries',
        'Assorted Clay-Oven Naans & Rotis',
        'Nizami Dum Biryani & Burani Raita',
        '2 Royal Shahi Desserts'
      ]
    },
    gold: {
      name: 'Imperial Darbar (Most Popular)',
      pricePerPerson: 1150,
      description: 'Our signature banquet offering for memorable celebrations.',
      features: [
        '5 Sizzling Starters (Includes Kakori Galouti & Bhatti Tikka)',
        'Live Delhi 06 Chaat Counter',
        '24-Hr Dal Bukhara + 3 Heritage Curries',
        'Dum Pukht Biryani Handi',
        '4 Desserts + Live Matka Kulfi Counter',
        'Complimentary Welcome Mocktails'
      ]
    },
    platinum: {
      name: 'Sky Lounge Rooftop VIP',
      pricePerPerson: 1450,
      description: 'Exclusive open-air rooftop terrace with panoramic city views.',
      features: [
        'Exclusive Terrace Zone or Cabanas',
        '6 Gourmet Starters with live table grills',
        'Dedicated Bartender with Craft Mocktails/Cocktails',
        'Live Acoustic Singer or DJ Setup',
        'Customized Celebration Cake (2 Kg Included)',
        'Complimentary Balloon & Fairy Floral Decor'
      ]
    }
  };

  const currentTier = tiers[selectedTier];
  const totalCost = guestCount * currentTier.pricePerPerson;
  const whatsAppText = `Hi Dwaar Dwarka, I want to book a ${eventType} party for ${guestCount} guests under the ${currentTier.name} package (Est. ₹${totalCost.toLocaleString('en-IN')}). Please confirm date availability.`;
  const whatsAppUrl = `https://wa.me/919811039227?text=${encodeURIComponent(whatsAppText)}`;

  return (
    <section id="parties" className="py-20 md:py-28 bg-[#0D1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>Banquet Hall &amp; Sky Terrace Celebrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Preferred{' '}
            <span className="gold-gradient-text">Restaurant for Birthday Parties</span>
            {' '}in Dwarka
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Host grand milestone memories at the <strong className="text-amber-300 font-medium">best restaurant for birthday party celebration in Dwarka</strong>. Whether it is a 1st birthday, 50th anniversary, corporate gathering, or pre-wedding party, calculate your custom package instantly below.
          </p>
        </div>

        {/* Interactive Party Budget Calculator Box */}
        <div className="bg-[#111827] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders & Selectors */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Event Type */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                  1. Select Occasion:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Birthday', 'Anniversary', 'Corporate', 'Roka'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setEventType(type)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        eventType === type
                          ? 'bg-amber-500 text-black border-amber-400 font-bold'
                          : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-3 bg-[#0A0E18] p-4 rounded-2xl border border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Number of Guests:</span>
                  </span>
                  <span className="text-lg font-bold text-amber-400 font-mono">
                    {guestCount} Guests
                  </span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="180"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-zinc-700 rounded-lg cursor-pointer"
                />
                
                <div className="flex justify-between text-[11px] text-zinc-500">
                  <span>20 (Intimate)</span>
                  <span>80 (Banquet Hall)</span>
                  <span>180 (Full Grand Venue)</span>
                </div>
              </div>

              {/* Tier Selection */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                  2. Choose Package Tier:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['silver', 'gold', 'platinum'] as const).map((tierKey) => (
                    <button
                      key={tierKey}
                      onClick={() => setSelectedTier(tierKey)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedTier === tierKey
                          ? 'bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-amber-500 text-amber-300'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <p className="text-xs font-bold capitalize">{tierKey}</p>
                      <p className="text-sm font-bold text-white mt-1">₹{tiers[tierKey].pricePerPerson}</p>
                      <p className="text-[10px] text-zinc-400">/ person</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inclusions list */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-zinc-300">Package Inclusions:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {currentTier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Price Output & Instant WhatsApp Booking */}
            <div className="md:col-span-5 bg-gradient-to-b from-[#141B2D] to-[#0A0F1E] p-6 rounded-2xl border border-amber-500/40 space-y-6 text-center">
              
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
                  Estimated Celebration Quote
                </span>
                <p className="text-4xl font-serif font-bold text-white font-mono">
                  ₹{totalCost.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-zinc-400">
                  (₹{currentTier.pricePerPerson} × {guestCount} Guests • All Taxes Included)
                </p>
              </div>

              {/* Complimentary perks */}
              <div className="bg-black/40 p-3.5 rounded-xl border border-zinc-800 text-left space-y-1.5 text-xs text-zinc-300">
                <p className="font-bold text-amber-300">Free Event Inclusions:</p>
                <p>✓ Complimentary 150+ car valet parking</p>
                <p>✓ High-definition wireless mic &amp; audio system</p>
                <p>✓ Dedicated event host &amp; buffet steward team</p>
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lock Date &amp; Quote on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenReservation}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium py-2.5 px-4 rounded-xl border border-zinc-700 transition-colors text-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Schedule In-Person Venue Visit</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
