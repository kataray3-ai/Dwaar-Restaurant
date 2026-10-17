import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, MapPin, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu & Signatures', href: '#menu' },
    { label: 'Rooftop Lounge', href: '#rooftop' },
    { label: 'Unlimited Buffet', href: '#buffet' },
    { label: 'Parties & Banquets', href: '#parties' },
    { label: 'Why Dwaar', href: '#competitor-analysis' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Location & Metro', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0F19]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#F59E0B]/20 py-3' : 'bg-gradient-to-b from-[#0B0F19]/90 to-transparent py-5'
    }`}>
      {/* Top micro-announcement banner */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 mb-2 text-xs text-amber-200/80 border-b border-amber-900/30 pb-1.5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open Today: 12:00 PM – 11:45 PM
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Opposite Metro Pillar 1042, Dwarka Sector 12
          </span>
          <span>•</span>
          <span className="text-emerald-400">Complimentary Valet Parking Available</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Web Privilege: Complimentary Chef Dessert</span>
          </span>
          <span>•</span>
          <a href="tel:+919811039227" className="hover:text-amber-300 transition-colors font-medium">
            +91 98110 DWAAR (39227)
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
              <span className="font-display font-bold text-lg sm:text-xl text-amber-400">द्वार</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-amber-300 transition-colors">
                DWAAR
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold px-1.5 py-0.5 bg-amber-500/10 rounded border border-amber-500/30">
                Dwarka Sec-12
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 tracking-wider">HERITAGE &amp; SKY LOUNGE</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919811039227?text=Hi%20Dwaar%20Restaurant%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20in%20Dwarka."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="tel:+919811039227"
            className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-amber-300 transition-colors"
            title="Call Restaurant Directly"
            aria-label="Call Restaurant"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-[#0B0F19] font-bold text-sm px-4 py-2.5 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenReservation}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-3 py-2 rounded-md shadow"
          >
            Book Table
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1422] border-b border-amber-900/40 px-5 pt-3 pb-6 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            <a
              href="https://wa.me/919811039227?text=Hi%20Dwaar%20Restaurant%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919811039227"
              className="flex items-center justify-center gap-1.5 text-xs text-zinc-200 bg-zinc-800 p-2.5 rounded-lg border border-zinc-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +91 98110</span>
            </a>
          </div>

          <div className="flex flex-col space-y-2.5 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded hover:bg-zinc-800 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-lg shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table Instantly</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
