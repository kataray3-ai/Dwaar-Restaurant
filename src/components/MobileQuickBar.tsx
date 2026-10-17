import React from 'react';
import { Phone, MessageCircle, Calendar, Navigation, Utensils } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenReservation: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-lg border-t border-amber-500/30 px-3 py-2 flex items-center justify-around gap-2 shadow-2xl">
      <a
        href="tel:+919811039227"
        className="flex flex-col items-center justify-center p-1.5 rounded-lg text-zinc-300 hover:text-amber-400 text-[10px] font-medium"
      >
        <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919811039227?text=Hi%20Dwaar%20Restaurant%2C%20I%20want%20to%20reserve%20a%20table%20in%20Dwarka."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-1.5 rounded-lg text-zinc-300 hover:text-emerald-400 text-[10px] font-medium"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenReservation}
        className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 active:scale-95 text-black font-extrabold text-xs py-2.5 px-3 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Table</span>
      </button>

      <a
        href="#menu"
        className="flex flex-col items-center justify-center p-1.5 rounded-lg text-zinc-300 hover:text-amber-400 text-[10px] font-medium"
      >
        <Utensils className="w-4 h-4 text-amber-400 mb-0.5" />
        <span>Menu</span>
      </a>

      <a
        href="https://maps.google.com/?q=Dwaar+Heritage+Restaurant+Dwarka+Sector+12+New+Delhi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-1.5 rounded-lg text-zinc-300 hover:text-blue-400 text-[10px] font-medium"
      >
        <Navigation className="w-4 h-4 text-blue-400 mb-0.5" />
        <span>Map</span>
      </a>
    </div>
  );
};
