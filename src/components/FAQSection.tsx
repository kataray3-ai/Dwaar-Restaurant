import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_DATA, FAQItem } from '../data/faqData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General & Location', 'Dining & Rooftop', 'Buffet & Prices', 'Diets & Parties'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#090D18] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions • Guest Information</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="gold-gradient-text">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Answers to common questions regarding table reservations, rooftop seating, buffet menus, Jain dietary options, and private celebrations in Dwarka.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setOpenIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#111827] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#111827] border border-zinc-800 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full bg-zinc-800 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 bg-[#0B0F19]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live WhatsApp help card */}
        <div className="mt-12 text-center p-6 bg-[#111827] rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific dietary question or large gathering request?</h4>
            <p className="text-xs text-zinc-400">Our concierge team is available on WhatsApp daily from 11 AM to 11 PM.</p>
          </div>
          <a
            href="https://wa.me/919811039227?text=Hi%20Dwaar%20Dwarka%2C%20I%20have%20a%20question%20regarding%20dining."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
