'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pakketten', label: 'Pakketten' },
    { href: '/lesinfo', label: 'Lestijden & Locaties' },
    { href: '/geslaagden', label: 'Geslaagden' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Brand Container - Vaste breedte zodat logo groter kan zonder menu te verschuiven */}
          <div className="w-[280px] flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Glanzend blauw logo op donkere achtergrond.png"
                alt="Drive Young Logo"
                width={100}
                height={100}
                className="h-24 w-auto max-w-[120px] object-contain flex-shrink-0"
              />
              <span className={`text-xl font-bold transition-colors duration-300 whitespace-nowrap -ml-2 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Drive <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isScrolled ? 'from-blue-600 to-blue-800' : 'from-blue-400 to-blue-600'
                }`}>Young</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - flex-1 voor resterende ruimte, gecentreerd */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-all duration-300 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Vaste breedte rechts (zelfde als brand voor balans) */}
          <div className="hidden lg:flex items-center justify-end space-x-3 w-[280px] flex-shrink-0">
            <Link
              href="/proefles"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-800 hover:bg-blue-50'
              }`}
            >
              Gratis Proefles
            </Link>
            <Link
              href="/aanmelden"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-blue-800'
              }`}
            >
              Aanmelden
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <Link
                href="/proefles"
                className="block w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gratis Proefles
              </Link>
              <Link
                href="/aanmelden"
                className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Aanmelden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
