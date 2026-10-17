import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Flame, ShieldCheck, Heart, Info, Check, MessageCircle } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';

interface MenuProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('signatures');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg' | 'jain' | 'chef'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary filter match
      let dietMatch = true;
      if (dietFilter === 'veg') dietMatch = item.diet === 'veg';
      if (dietFilter === 'non-veg') dietMatch = item.diet === 'non-veg';
      if (dietFilter === 'jain') dietMatch = item.isJainFriendly;
      if (dietFilter === 'chef') dietMatch = item.isChefSpecial;

      // Search query match
      const searchMatch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery));

      return categoryMatch && dietMatch && searchMatch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#0D1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Awadhi &amp; Mughlai Culinary Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Royal Dining &amp;{' '}
            <span className="gold-gradient-text">Pure Veg Delicacies</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Renowned as the leading <strong className="text-amber-300 font-medium">veg restaurant in Dwarka</strong> alongside authentic non-vegetarian tandoor specialties, our dual kitchen guarantees <strong className="text-emerald-400 font-medium">pure vegetarian and jain food options in Dwarka</strong> with zero cross-contamination.
          </p>
        </div>

        {/* Dietary Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#111827] p-3.5 rounded-2xl border border-zinc-800">
          
          {/* Dietary Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietFilter === 'all' ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:text-white'
              }`}
            >
              All Delicacies
            </button>

            <button
              onClick={() => setDietFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietFilter === 'veg' ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-emerald-400 hover:bg-zinc-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>100% Pure Veg</span>
            </button>

            <button
              onClick={() => setDietFilter('jain')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietFilter === 'jain' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-amber-400 hover:bg-zinc-700'
              }`}
            >
              <span>🌟 Jain Friendly (No Onion/Garlic)</span>
            </button>

            <button
              onClick={() => setDietFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietFilter === 'non-veg' ? 'bg-rose-600 text-white' : 'bg-zinc-800 text-rose-400 hover:bg-zinc-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Non-Veg</span>
            </button>

            <button
              onClick={() => setDietFilter('chef')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietFilter === 'chef' ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-amber-300 hover:bg-zinc-700'
              }`}
            >
              <span>👑 Chef Special</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Dal Bukhara, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0B0F19] text-xs text-zinc-100 placeholder-zinc-500 pl-9 pr-3 py-2 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

        </div>

        {/* Categories Carousel / Tabs */}
        <div className="flex overflow-x-auto gap-2.5 pb-4 mb-8 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-[#121826] text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#111827] rounded-2xl border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl"
            >
              {/* Dish Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} - best restaurant in Dwarka`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/30"></div>

                {/* Dietary badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                    item.diet === 'veg' ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-400' : 'bg-rose-950/80 border border-rose-500 text-rose-400'
                  }`}>
                    {item.diet === 'veg' ? '🟢' : '🔴'}
                  </span>

                  {item.isJainFriendly && (
                    <span className="bg-amber-950/90 border border-amber-500/60 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Jain Available
                    </span>
                  )}
                </div>

                {/* Chef Special Badge */}
                {item.isChefSpecial && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                    Chef's Signature
                  </div>
                )}

                {/* Price pill */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/40 text-amber-400 font-bold text-sm">
                  ₹{item.price}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {item.hindiName && (
                    <p className="text-xs text-amber-500/80 font-serif mb-1">{item.hindiName}</p>
                  )}
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer specs & actions */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    {item.calories && <span>{item.calories}</span>}
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-amber-400">
                      {'🔥'.repeat(item.spiceLevel)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDish(item)}
                      className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    
                    <a
                      href={`https://wa.me/919811039227?text=Hi%20Dwaar%20Dwarka%2C%20I%20would%20like%20to%20order%20or%20reserve%20table%20with%20dish:%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                      title="Inquire about dish on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">No dishes found matching your search or filters.</p>
            <button
              onClick={() => { setDietFilter('all'); setSearchQuery(''); setSelectedCategory('signatures'); }}
              className="mt-3 text-xs text-amber-400 underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Menu Action Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#111827] to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-serif font-bold text-white">
              Planning a family feast or looking for fine dining Dwarka?
            </h4>
            <p className="text-xs text-zinc-300">
              Our master Awadhi khansamas prepare fresh hand-ground spice blends daily. Table bookings enjoy zero wait times.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            Reserve Table for Dinner
          </button>
        </div>

      </div>

      {/* Dish Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121826] border border-amber-500/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl space-y-4">
            <div className="relative h-56">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 text-white hover:text-amber-400"
              >
                ✕
              </button>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">{selectedDish.name}</h3>
                  {selectedDish.hindiName && <p className="text-sm text-amber-400">{selectedDish.hindiName}</p>}
                </div>
                <span className="text-xl font-bold text-amber-400">₹{selectedDish.price}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">{selectedDish.description}</p>
              
              {selectedDish.pairing && (
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                  <span className="text-amber-400 font-semibold">Recommended Pairing: </span>
                  <span className="text-zinc-300">{selectedDish.pairing}</span>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedDish(null);
                    onOpenReservation();
                  }}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-bold py-2.5 rounded-xl text-xs"
                >
                  Book Table with This Dish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
