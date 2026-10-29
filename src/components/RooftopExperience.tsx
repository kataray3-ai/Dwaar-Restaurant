import React from 'react';
import { Sparkles, Moon, Flame, Wind, Music, Calendar, Heart, ShieldCheck } from 'lucide-react';

interface RooftopProps {
  onOpenReservation: () => void;
}

export const RooftopExperience: React.FC<RooftopProps> = ({ onOpenReservation }) => {
  return (
    <section id="rooftop" className="py-20 md:py-28 relative overflow-hidden bg-[#0A0E17]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with targeted H2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Moon className="w-3.5 h-3.5" />
            <span>Level 2 Open-Air Terrace • Sunset &amp; Night Sky</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Most Romantic{' '}
            <span className="gold-gradient-text">Rooftop Cafe in Dwarka</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Perched atop Sector 12 with unobstructed panoramic city vistas, our Sky Lounge Terrace is crowned the <strong className="text-amber-300 font-medium">romantic rooftop cafe in Dwarka Delhi</strong> and the <strong className="text-amber-300 font-medium">best cozy cafe for couples in Dwarka Sector 10 and 12</strong>. Unwind in private curtained cabanas, savor handcrafted botanical elixirs, and listen to acoustic guitarists under illuminated starry skies.
          </p>
        </div>

        {/* Feature Grid & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 group h-64 sm:h-72 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Romantic rooftop cafe in Dwarka Delhi - Dwaar Sky Lounge cabanas and sunset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs text-amber-400 font-semibold">Private Cabanas</p>
                  <p className="text-sm font-serif font-bold">Candlelight Couple Dining</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 group h-44 sm:h-52 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                  alt="Late night dining and cocktails in Dwarka Delhi rooftop bar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs text-amber-400 font-semibold">Artisan Cocktails &amp; Zero-Proof Elixirs</p>
                  <p className="text-sm font-serif font-bold">Smoked Saffron Old Fashioned</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 group h-44 sm:h-52 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
                  alt="Live music and acoustic guitar night Dwarka rooftop cafe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs text-amber-400 font-semibold">Live Acoustic Evenings</p>
                  <p className="text-sm font-serif font-bold">Soulful Unplugged Vibes</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 group h-64 sm:h-72 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
                  alt="Rooftop cafe Dwarka night lighting and cityscape"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs text-amber-400 font-semibold">360° Dwarka Skyline</p>
                  <p className="text-sm font-serif font-bold">Starry Open-Air Terrace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights & Couple Reservation Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#121826] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-rose-600 to-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Heart className="w-3 h-3 fill-white" />
                <span>#1 Couples Choice in Dwarka</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Rooftop Sky Lounge Amenities
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Curtained VIP Cabanas</h4>
                    <p className="text-xs text-zinc-300">
                      Intimate booth seating with plush velvet cushions, personalized candlelight, and dedicated table butler service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">All-Season Climate Comfort</h4>
                    <p className="text-xs text-zinc-300">
                      High-pressure micro-mist coolers in Delhi summers and radiant mushroom gas heaters with warm fleece throws in winter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Acoustic &amp; Sundowner Sessions</h4>
                    <p className="text-xs text-zinc-300">
                      Unplugged retro Hindi and English acoustics every Wednesday, Friday, and Saturday from 7:30 PM onwards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Late Night Dining in Dwarka Delhi</h4>
                    <p className="text-xs text-zinc-300">
                      Kitchen open until 11:45 PM for late evening food cravings, cocktails, and midnight dessert celebrations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Romantic Date Special Package */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/40 to-amber-950/30 border border-rose-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300">Rooftop Candlelight Date Package</span>
                  <span className="text-sm font-bold text-amber-300">₹2,499 for 2</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-snug">
                  Includes reserved VIP cabana, 2 handcrafted cocktails/mocktails, 3-course chef dinner, and complimentary rose petal decor with heart cake.
                </p>
              </div>

              {/* Conversion CTA */}
              <button
                onClick={onOpenReservation}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Rooftop Cabana Table</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
