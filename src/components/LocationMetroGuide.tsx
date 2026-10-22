import React from 'react';
import { MapPin, Train, Car, Plane, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';

export const LocationMetroGuide: React.FC = () => {
  const travelDistances = [
    { sector: 'Dwarka Sector 12 Metro (Blue Line)', time: '2 Min Walk (200m)', note: 'Opposite Metro Pillar 1042 (Gate 2)', isMetro: true },
    { sector: 'Dwarka Sector 10 & 11', time: '3 - 4 Mins Drive', note: 'Direct Sector Road via Ashirwad Chowk' },
    { sector: 'Dwarka Sector 13 & 14 (Vegas Mall)', time: '5 - 6 Mins Drive', note: 'Straight down Road No. 201' },
    { sector: 'Dwarka Sector 21 (Metro Interchange)', time: '7 - 8 Mins Drive', note: 'Via Sector 22 & Dwarka Link Road' },
    { sector: 'Dwarka Expressway & Urban Extension II', time: '5 Mins Drive', note: 'Swift signal-free connectivity' },
    { sector: 'IGI Airport (T3 & Aerocity)', time: '12 Mins Drive', note: 'Via Northern Peripheral / Dwarka Tunnel' },
  ];

  return (
    <section id="location" className="py-20 md:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Train className="w-3.5 h-3.5" />
            <span>Prime Sector 12 City Centre Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Top-Rated Restaurant{' '}
            <span className="gold-gradient-text">Near Dwarka Metro</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Conveniently situated in the vibrant heart of Dwarka with unmatched Blue Line metro access, wide approach roads, and hassle-free valet parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Metro & Travel Matrix */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-[#111827] border border-amber-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-white">Dwarka Sector 12 Metro Station</h3>
                    <p className="text-xs text-emerald-400 font-semibold">200m Distance • 2 Minutes Walking</p>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">Blue Line</span>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Walking &amp; Driving Directions from Dwarka Hubs:
                </p>
                <div className="space-y-2">
                  {travelDistances.map((d, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        d.isMetro
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                          : 'bg-[#0B0F19] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-white">{d.sector}</p>
                        <p className="text-[11px] text-zinc-400">{d.note}</p>
                      </div>
                      <span className="font-mono font-bold text-amber-400 shrink-0 ml-2">
                        {d.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Dwaar+Heritage+Restaurant+Dwarka+Sector+12+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3 rounded-xl text-xs shadow-md transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Route on Google Maps</span>
                </a>

                <a
                  href="tel:+919811039227"
                  className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 px-4 rounded-xl border border-zinc-700 text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Valet Help</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Map Card & Parking Highlights */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-[#111827] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Simulated stylized map view */}
              <div className="relative h-64 sm:h-72 bg-[#1A2234] flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                  alt="Dwarka Delhi restaurant map location"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/40"></div>

                {/* Map Marker Pin */}
                <div className="absolute z-10 flex flex-col items-center animate-bounce">
                  <div className="bg-amber-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Dwaar Restaurant (Sec 12)</span>
                  </div>
                  <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-1.5 border-r border-b border-white"></div>
                </div>

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700 text-xs text-zinc-200">
                  <p className="font-bold text-amber-400">Plot 14, Sector 12 City Centre</p>
                  <p className="text-[10px] text-zinc-400">Opp. Metro Pillar 1042, Dwarka, Delhi</p>
                </div>
              </div>

              {/* Parking and Amenities Bar */}
              <div className="p-5 bg-[#0D1220] grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Free Valet Parking</p>
                    <p className="text-[11px] text-zinc-400">150+ covered slots with ticketed security</p>
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">12 Mins from IGI Airport</p>
                    <p className="text-[11px] text-zinc-400">Ideal layover &amp; business welcome diner</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
