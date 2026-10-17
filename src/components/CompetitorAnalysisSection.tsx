import React from 'react';
import { ShieldCheck, Check, X, Star, Layers, Leaf, Flame, Train, Sparkles, Award } from 'lucide-react';
import { COMPETITOR_ANALYSIS, COMPETITOR_KEY_ADVANTAGES } from '../data/competitorData';

export const CompetitorAnalysisSection: React.FC = () => {
  return (
    <section id="competitor-analysis" className="py-20 md:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Dwarka Restaurant Benchmark &amp; Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Why Dwaar Outshines Other{' '}
            <span className="gold-gradient-text">Dwarka Restaurants</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            We conducted an objective market analysis of top dining destinations across Dwarka Sectors 10, 12, 13, and 14. Here is how Dwaar Heritage delivers unmatched culinary authenticity, ambiance variety, and value.
          </p>
        </div>

        {/* 4 Unfair Key Advantages Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {COMPETITOR_KEY_ADVANTAGES.map((adv, idx) => {
            const iconMap: Record<string, React.ReactNode> = {
              layers: <Layers className="w-5 h-5 text-amber-400" />,
              leaf: <Leaf className="w-5 h-5 text-emerald-400" />,
              flame: <Flame className="w-5 h-5 text-rose-400" />,
              train: <Train className="w-5 h-5 text-blue-400" />
            };

            return (
              <div
                key={idx}
                className="bg-[#111827] p-5 rounded-2xl border border-zinc-800 hover:border-amber-500/40 transition-all space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/60 w-fit">
                  {iconMap[adv.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                </div>
                <h3 className="font-serif font-bold text-base text-white">{adv.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{adv.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-[#101626] shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#090D18] text-zinc-300 uppercase tracking-wider text-[11px] border-b border-zinc-800">
              <tr>
                <th className="py-4 px-4 sm:px-6">Restaurant Name</th>
                <th className="py-4 px-3">Google Rating</th>
                <th className="py-4 px-3">Cost for 2</th>
                <th className="py-4 px-3 text-center">Open-Air Sky Lounge</th>
                <th className="py-4 px-3 text-center">Pure Veg &amp; Jain Station</th>
                <th className="py-4 px-3 text-center">Live Music / Ghazals</th>
                <th className="py-4 px-3">Metro Distance</th>
                <th className="py-4 px-4 sm:px-6">Direct Booking Perks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {COMPETITOR_ANALYSIS.map((comp, idx) => {
                const isDwaar = idx === 0;

                return (
                  <tr
                    key={comp.name}
                    className={`transition-colors ${
                      isDwaar
                        ? 'bg-amber-500/10 hover:bg-amber-500/15 font-medium'
                        : 'hover:bg-zinc-900/50'
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-2">
                        {isDwaar && <span className="text-amber-400 font-bold text-base">★</span>}
                        <div>
                          <p className={`font-serif font-bold ${isDwaar ? 'text-amber-300 text-sm sm:text-base' : 'text-zinc-200'}`}>
                            {comp.name}
                          </p>
                          <p className="text-[11px] text-zinc-400">{comp.sector}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-amber-400">{comp.rating}</span>
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-[10px] text-zinc-400">({comp.reviewsCount})</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-3 font-mono text-zinc-300">
                      {comp.avgCostForTwo}
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      {comp.rooftopSkyLounge ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )}
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      {comp.separateJainVegKitchen ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )}
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      {comp.liveAcousticGhazal ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )}
                    </td>

                    <td className="py-3.5 px-3 font-medium text-zinc-300">
                      {comp.metroWalkMinutes}
                    </td>

                    <td className="py-3.5 px-4 sm:px-6">
                      <span className={`text-xs ${isDwaar ? 'text-amber-300 font-bold' : 'text-zinc-400'}`}>
                        {comp.directBookingPerk}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Competitor Analysis Summary Callout */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between gap-4">
          <p>
            * Benchmark data gathered from public Google Business Profiles, Zomato listings, and customer surveys across Dwarka as of October 2026.
          </p>
          <span className="shrink-0 text-amber-400 font-semibold">100% Transparency</span>
        </div>

      </div>
    </section>
  );
};
