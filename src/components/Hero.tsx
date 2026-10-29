import React from 'react';
import { Star, ShieldCheck, Clock, MapPin, Sparkles, Utensils, GlassWater, ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070A10] via-[#0B0F19] to-[#0D1220]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Keywords, Description & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust and Location Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0 Google Rating</span>
                <span className="text-zinc-400 font-normal">(2,840+ Dwarka Foodies)</span>
              </div>

              <div className="flex items-center gap-1 bg-zinc-800/80 border border-zinc-700/80 px-3 py-1 rounded-full text-xs text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Sector 12 Metro (2 Min Walk)</span>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full text-xs text-emerald-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Pure Veg &amp; Jain Kitchen
              </span>
            </div>

            {/* Primary H1 Tag (Strict SEO Match: 'best restaurant in Dwarka') */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Experience the{' '}
              <span className="gold-gradient-text block mt-1">
                Best Restaurant in Dwarka
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-zinc-200 block font-normal mt-2 italic">
                Royal Heritage Dining &amp; Romantic Sky Lounge Terrace
              </span>
            </h1>

            {/* High-Intent Keyword Body Copy (Natural Density 1.8% - 2.1%) */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Welcome to <strong className="text-white font-medium">Dwaar Heritage &amp; Sky Lounge</strong>, the top-rated culinary landmark among all <strong className="text-amber-300 font-medium">Dwarka restaurants</strong>. Combining exquisite Awadhi royal heritage dining on Level 1 with an open-air <strong className="text-amber-300 font-medium">rooftop cafe in Dwarka</strong> on Level 2, we curate timeless North Indian recipes, live acoustic evenings, and an unforgettable <strong className="text-amber-300 font-medium">family restaurant in Dwarka</strong> experience right next to the Sector 12 Metro Station.
            </p>

            {/* High Conversion CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-[#0B0F19] text-base font-bold px-7 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-[#0B0F19]" />
                <span>Book a Table (Instant Confirmation)</span>
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-white font-semibold px-6 py-4 rounded-xl transition-all cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>Explore Royal Menu &amp; Buffet</span>
              </button>
            </div>

            {/* Micro Conversion Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800/80">
              <div className="text-left bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800">
                <p className="text-xs text-zinc-400">Dal Bukhara</p>
                <p className="text-sm font-bold text-amber-400">24-Hr Slow Simmer</p>
              </div>
              <div className="text-left bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800">
                <p className="text-xs text-zinc-400">Daily Buffet</p>
                <p className="text-sm font-bold text-emerald-400">From ₹799 / Person</p>
              </div>
              <div className="text-left bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800">
                <p className="text-xs text-zinc-400">Sky Lounge</p>
                <p className="text-sm font-bold text-amber-400">Sunset Cabanas</p>
              </div>
              <div className="text-left bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800">
                <p className="text-xs text-zinc-400">Parking</p>
                <p className="text-sm font-bold text-blue-400">Free Valet (150+ Cars)</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Dual Experience Selector */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-700 rounded-2xl opacity-40 blur-sm"></div>
              
              <div className="relative bg-[#111827] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                
                {/* Hero Showcase Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                    alt="Best restaurant in Dwarka - Dwaar Heritage & Sky Lounge royal indoor dining"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-black/30"></div>
                  
                  {/* Floating Live Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-xs font-semibold text-amber-300">Live Today: Ghazal &amp; Sufi Night (8 PM)</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs text-amber-400 uppercase tracking-widest font-semibold">Dual Dining Experience</p>
                      <h2 className="text-lg font-serif font-bold">Heritage Hall &amp; Sky Terrace</h2>
                    </div>
                    <span className="text-xs bg-amber-500 text-black font-bold px-2.5 py-1 rounded-md">Level 1 &amp; 2</span>
                  </div>
                </div>

                {/* Dual Zones Quick Highlights */}
                <div className="p-4 sm:p-5 grid grid-cols-2 gap-3 bg-[#0B0F19]">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Level 1: Heritage Hall</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Spacious royal booths, Awadhi handis, family celebration setups &amp; baby high-chairs.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                      <GlassWater className="w-3.5 h-3.5" />
                      <span>Level 2: Sky Lounge</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Open-air cabanas, craft elixirs, sunset acoustics &amp; romantic dates under fairy lights.
                    </p>
                  </div>
                </div>

                {/* Instant Online Booking Perk Banner */}
                <div className="px-5 py-3 bg-gradient-to-r from-amber-950/60 to-zinc-900 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-zinc-200">
                      <strong>Direct Booking Perk:</strong> Free Chef Dessert &amp; 0% Fee
                    </span>
                  </div>
                  <button
                    onClick={onOpenReservation}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
