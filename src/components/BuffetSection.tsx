import React from 'react';
import { Sparkles, Utensils, Music, Users, Clock, Flame, Calendar, CheckCircle2 } from 'lucide-react';

interface BuffetProps {
  onOpenReservation: () => void;
}

export const BuffetSection: React.FC<BuffetProps> = ({ onOpenReservation }) => {
  const buffetStations = [
    {
      title: 'Live Tandoor Skewers',
      desc: 'Table-served sizzling skewers: Bhatti Da Murgh, Malai Broccoli, Seekh Kebabs & Paneer Tikka.',
      badge: 'Unlimited At Table'
    },
    {
      title: 'Purani Dilli Chaat Bazaar',
      desc: 'Authentic Chandni Chowk style water-balls (Gol Gappe with 5 waters), Papdi Chaat, and Palak Patta Chaat.',
      badge: 'Live Counter'
    },
    {
      title: 'Shahi Awadhi Handis',
      desc: 'Slow-simmered 24-hr Dal Bukhara, Butter Chicken 1947, Paneer Kundan Qaliyan, and Subz Handi.',
      badge: 'Hot Handis'
    },
    {
      title: 'Clay Oven Breads',
      desc: 'Freshly puffed Garlic Naan, Chur Chur Naan, Laccha Paratha, and Tandoori Roti on order.',
      badge: 'Fresh To Table'
    },
    {
      title: 'Dum Pukht Biryani Pots',
      desc: 'Sealed brass degh biryanis (Murgh & Nizami Subz) with burani raita and mirch ka salan.',
      badge: 'Sealed Degh'
    },
    {
      title: 'Royal Halwai & Kulfi Bar',
      desc: 'Warm Moong Dal Halwa, Angoori Gulab Jamun, live Matka Kulfi Falooda & Belgian chocolate fountain.',
      badge: '12+ Desserts'
    }
  ];

  return (
    <section id="buffet" className="py-20 md:py-28 bg-[#090D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Utensils className="w-3.5 h-3.5" />
            <span>Grand Unlimited Feast • Over 55+ Dishes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Grandest{' '}
            <span className="gold-gradient-text">Buffet in Dwarka</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Indulge in the most lavish <strong className="text-amber-300 font-medium">unlimited buffet with live music in Dwarka</strong>. Featuring endless table-served tandoori skewers, authentic Awadhi curries, live street chaat, and artisan mithai counters in an imperial royal ambiance.
          </p>
        </div>

        {/* Pricing Cards: Weekday Lunch vs Weekend Grand Dinner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          
          {/* Weekday Lunch Buffet Card */}
          <div className="bg-[#111827] rounded-2xl border border-zinc-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl relative group hover:border-amber-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Monday - Friday</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>12:30 PM - 3:45 PM</span>
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Royal Executive Lunch Buffet
              </h3>

              <div className="flex items-baseline gap-4 py-2 border-y border-zinc-800">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-400">₹799</span>
                  <span className="text-xs text-zinc-400 block font-normal">Pure Veg / Jain</span>
                </div>
                <span className="text-zinc-600 font-light text-2xl">|</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-rose-400">₹899</span>
                  <span className="text-xs text-zinc-400 block font-normal">Non-Veg Special</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>4 Veg &amp; 3 Non-Veg Hot Tandoori Starters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-Hour Dal Bukhara &amp; Royal Handi Curries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live Chaat Counter &amp; Dum Biryani</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>6 Handcrafted Desserts &amp; Kulfi</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-amber-300 font-bold text-xs transition-colors cursor-pointer border border-zinc-700"
            >
              Book Lunch Buffet Table
            </button>
          </div>

          {/* Weekend Grand Dinner Buffet Card */}
          <div className="bg-gradient-to-b from-[#141B2D] to-[#101626] rounded-2xl border-2 border-amber-500/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Music className="w-3.5 h-3.5" />
              <span>Includes Live Sufi &amp; Ghazal</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-400">Friday - Sunday</span>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>7:00 PM - 11:30 PM</span>
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Grand Weekend Dinner Buffet
              </h3>

              <div className="flex items-baseline gap-4 py-2 border-y border-amber-500/20">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-400">₹999</span>
                  <span className="text-xs text-zinc-400 block font-normal">Pure Veg / Jain</span>
                </div>
                <span className="text-zinc-600 font-light text-2xl">|</span>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-rose-400">₹1,199</span>
                  <span className="text-xs text-zinc-400 block font-normal">Non-Veg Special</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Endless Table-Service Tandoor Grills &amp; Prawns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Live Sitar &amp; Bollywood Acoustic Band</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Awadhi Nalli Gosht, Butter Chicken &amp; Paneer Kundan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>12+ Shahi Desserts, Belgian Chocolate Fountain &amp; Kulfi</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              Book Grand Weekend Dinner Buffet
            </button>
          </div>

        </div>

        {/* 6 Live Counters Showcase */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold text-white">
              6 Interactive Live Counter Stations
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Cooked à la minute right before your eyes by master chefs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {buffetStations.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#111827] p-4 rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">{st.badge}</span>
                  <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">0{idx+1}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-white">{st.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kids & Group Policy Note */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          <p>
            * Children below 6 years dine <strong className="text-emerald-400">complimentary</strong>. Kids aged 6 to 10 enjoy a 50% discount. Prices inclusive of all taxes.
          </p>
        </div>

      </div>
    </section>
  );
};
