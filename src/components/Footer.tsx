import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { TOP_15_KEYWORDS } from '../data/keywordsData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#060910] border-t border-amber-500/20 text-zinc-400 text-xs relative pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5">
                <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-amber-400">द्वार</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wide">
                  DWAAR HERITAGE
                </span>
                <p className="text-[10px] text-amber-400 tracking-wider uppercase font-semibold">&amp; SKY LOUNGE DWARKA</p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-xs">
              Ranked the <strong className="text-white font-medium">best restaurant in Dwarka</strong> for royal family dining and romantic rooftop sunsets. Savor authentic 24-hour slow-cooked Awadhi recipes, clay-tandoor specialties, and endless weekend buffets opposite Sector 12 Metro Station.
            </p>

            <div className="space-y-2 text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Plot 14, Sector 12 City Centre (Opp. Metro Pillar 1042), Dwarka, New Delhi 110078</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919811039227" className="hover:text-amber-300 font-semibold text-white">
                  +91 98110 DWAAR (39227) / 011-4567-8900
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:reservations@dwaardwarka.in" className="hover:text-amber-300">
                  reservations@dwaardwarka.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Experiences (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Dining Experiences
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Chef's Royal Signatures &amp; Kebabs
                </a>
              </li>
              <li>
                <a href="#rooftop" className="hover:text-amber-300 transition-colors">
                  Rooftop Sky Lounge &amp; Sunset Cabanas
                </a>
              </li>
              <li>
                <a href="#buffet" className="hover:text-amber-300 transition-colors">
                  Unlimited Lunch &amp; Weekend Dinner Buffet
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-amber-300 transition-colors">
                  Birthday Parties &amp; Banquet Celebrations
                </a>
              </li>
              <li>
                <a href="#competitor-analysis" className="hover:text-amber-300 transition-colors">
                  Why Dwaar Outshines Competitors
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Dwarka Sector 12 Metro Walking Route
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Direct Perks (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Timings &amp; Service
            </p>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-zinc-200 font-semibold">Lunch Hours:</p>
                <p>12:00 PM – 3:45 PM</p>
              </div>
              <div>
                <p className="text-zinc-200 font-semibold">Sky Lounge &amp; Dinner:</p>
                <p>6:00 PM – 11:45 PM</p>
              </div>
              <div>
                <p className="text-zinc-200 font-semibold">Acoustic &amp; Live Music:</p>
                <p>Wed, Fri, Sat, Sun (8 PM)</p>
              </div>
              <div>
                <p className="text-emerald-400 font-semibold">Complimentary Valet:</p>
                <p>150+ Covered Spaces</p>
              </div>
            </div>
          </div>

          {/* Col 4: High-Conversion Banquet & Reservation Card (3 cols) */}
          <div className="lg:col-span-3 space-y-3 bg-[#0C111E] p-4 rounded-2xl border border-amber-500/30 shadow-lg">
            <p className="font-serif font-bold text-sm text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Private Parties &amp; Dining</span>
            </p>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Host birthdays, anniversaries, kitty parties, and corporate banquets up to 180 guests with custom Awadhi menus and live music.
            </p>
            
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table Online</span>
              </button>

              <a
                href="https://wa.me/919811039227?text=Hi%20Dwaar%20Dwarka%2C%20I%20want%20to%20inquire%20about%20booking%20a%20private%20party%20or%20table."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat with Event Concierge</span>
              </a>
            </div>
          </div>

        </div>

        {/* Natural Search & Cuisine Highlights Cloud (Internal SEO keyword footprint without jargon) */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Popular Searches &amp; Dining Highlights in Dwarka:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {TOP_15_KEYWORDS.map((k) => (
              <a
                key={k.id}
                href={k.id === 3 || k.id === 9 || k.id === 14 || k.id === 15 ? '#rooftop' : k.id === 5 || k.id === 13 ? '#buffet' : k.id === 12 ? '#parties' : k.id === 10 ? '#location' : '#menu'}
                className="bg-[#111827] border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-amber-300 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                {k.keyword}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} Dwaar Heritage &amp; Sky Lounge. All rights reserved. Plot 14, Sector 12 City Centre, Dwarka, Delhi.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-300">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-zinc-300">Terms of Dining</span>
            <span>•</span>
            <span className="hover:text-zinc-300">FSSAI Certified Kitchen</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
