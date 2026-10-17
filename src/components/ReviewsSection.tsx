import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, GOOGLE_RATING_METRICS } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Family Dining', 'Rooftop & Couples', 'Unlimited Buffet', 'Party & Events'];

  const filteredReviews = selectedFilter === 'All'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.category === selectedFilter);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#090D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Google Local Guide Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Loved by 2,840+{' '}
            <span className="gold-gradient-text">Dwarka Food Lovers</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Read real feedback from families, couples, and food connoisseurs who chose Dwaar for authentic tastes and memorable gatherings in Dwarka Sector 12.
          </p>
        </div>

        {/* Rating Overview Scorecard */}
        <div className="bg-[#111827] border border-amber-500/30 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Big Rating */}
            <div className="md:col-span-4 text-center md:border-r border-zinc-800 md:pr-6 space-y-2">
              <span className="text-5xl sm:text-6xl font-bold font-serif text-amber-400">4.9</span>
              <div className="flex justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-400">Based on 2,840+ Google Reviews</p>
              <div className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>94% 5-Star Rating</span>
              </div>
            </div>

            {/* Sub category scores */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-[#0B0F19] p-3 rounded-xl border border-zinc-800">
                <p className="text-xs text-zinc-400">Food &amp; Taste</p>
                <p className="text-lg font-bold text-amber-400">4.9 / 5.0</p>
              </div>
              <div className="bg-[#0B0F19] p-3 rounded-xl border border-zinc-800">
                <p className="text-xs text-zinc-400">Rooftop Ambiance</p>
                <p className="text-lg font-bold text-amber-400">4.95 / 5.0</p>
              </div>
              <div className="bg-[#0B0F19] p-3 rounded-xl border border-zinc-800">
                <p className="text-xs text-zinc-400">Staff Hospitality</p>
                <p className="text-lg font-bold text-amber-400">4.88 / 5.0</p>
              </div>
              <div className="bg-[#0B0F19] p-3 rounded-xl border border-zinc-800">
                <p className="text-xs text-zinc-400">Buffet Value</p>
                <p className="text-lg font-bold text-amber-400">4.85 / 5.0</p>
              </div>
            </div>

          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#111827] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#111827] border border-zinc-800 hover:border-amber-500/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>

                {/* Highlight dish pill */}
                <div className="p-2 rounded-lg bg-[#0B0F19] border border-zinc-800 text-[11px] text-zinc-300">
                  <span className="text-amber-400 font-semibold">Ordered: </span>
                  <span>{rev.highlightDish}</span>
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-white">{rev.author}</p>
                    {rev.verifiedLocalGuide && (
                      <span title="Verified Local Guide">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400">{rev.location}</p>
                </div>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                  {rev.category}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
