import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  onPlanTripClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPlanTripClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'nav-discover', href: '#hero', label: 'Discover' },
    { id: 'nav-experiences', href: '#experiences', label: 'Experiences' },
    { id: 'nav-tours', href: '#tours', label: 'Tours' },
    { id: 'nav-why-us', href: '#why-us', label: 'The Difference' },
    { id: 'nav-contact', href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className="w-full pt-5 sm:pt-6 pb-2 px-6 sm:px-10 md:px-16 flex items-center justify-between relative z-30"
    >
      {/* Brand */}
      <a
        id="brand-logo-link"
        href="#"
        className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity z-10 shrink-0"
      >
        <MapPin className="w-5 h-5 text-white" />
        <span id="brand-name" className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase text-white">
          ParisÉlan
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center z-10 pointer-events-none">
        <nav
          id="desktop-nav"
          className="pointer-events-auto flex flex-nowrap items-center gap-7 px-7 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-sm whitespace-nowrap"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className="text-white text-xs font-normal tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop Right CTA */}
      <div className="hidden md:flex items-center z-10 shrink-0">
        <button
          id="header-plan-journey"
          type="button"
          onClick={onPlanTripClick}
          className="px-5 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-xs font-normal tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
        >
          Plan Journey
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center z-10">
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="absolute top-full left-0 w-full bg-black/90 border-b border-white/10 py-6 px-8 flex flex-col gap-5 md:hidden z-50 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-sm font-normal tracking-widest uppercase hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onPlanTripClick?.(); }}
            className="mt-2 w-full py-2.5 rounded-full text-xs font-normal tracking-widest uppercase text-white border border-white/40 bg-white/10 hover:bg-white hover:text-black transition-all"
          >
            Plan Journey
          </button>
        </div>
      )}
    </header>
  );
};
