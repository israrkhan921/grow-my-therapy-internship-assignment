import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 min-h-[80px] transition-all duration-700 ease-out ${
      isScrolled
        ? 'bg-white/96 backdrop-blur-xl shadow-2xl border-b border-gray-100/50'
        : 'bg-black/80 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-4 group relative">
            <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 ${
              isScrolled
                ? 'bg-gradient-to-br from-accent to-accent-dark shadow-xl shadow-accent/30'
                : 'bg-white/20 backdrop-blur-sm shadow-lg shadow-black/20'
            }`}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

           <Image
  src="/images/office/DrMayaReynolds.png" // Path to your image in the public folder
  alt="Dr. Maya Reynolds Logo"
  className=" relative z-10 transition-all duration-300 rounded-full"
  width={28}
  height={28}
/>


              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isScrolled ? 'shadow-2xl shadow-accent/40' : 'shadow-2xl shadow-white/20'
              }`}></div>
            </div>

            <div className="flex flex-col">
              <span className={`font-bold text-2xl sm:text-3xl bg-gradient-to-r from-current to-current bg-clip-text transition-all duration-300 group-hover:from-accent group-hover:to-accent-dark ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Dr. Maya Reynolds
              </span>
              <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                isScrolled ? 'text-primary' : 'text-white/90'
              }`}>
                PsyD • Licensed Clinical Psychologist
              </span>
            </div>

            {/* Subtle underline animation */}
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-500 ${
              isScrolled ? 'w-0 group-hover:w-full' : 'w-full group-hover:w-0'
            }`}></div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/contact"
              className={`relative px-4 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 transform ${
                isScrolled
                  ? 'bg-gradient-to-r from-accent to-accent-dark text-primary hover:from-accent-dark hover:to-accent'
                  : 'bg-white text-primary hover:bg-white/90 shadow-lg'
              }`}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-accent hover:scale-105 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full hover:left-0"></div>
            </Link>
            <Link
              href="/services"
              className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-accent hover:scale-105 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full hover:left-0"></div>
            </Link>
            <Link
              href="/approach"
              className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-accent hover:scale-105 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="relative z-10">Approach</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full hover:left-0"></div>
            </Link>
            <Link
              href="/office"
              className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-accent hover:scale-105 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="relative z-10">Our Office</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full hover:left-0"></div>
            </Link>
            <Link
              href="/faq"
              className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-accent hover:scale-105 rounded-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-dark/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full hover:left-0"></div>
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? 'text-gray-700 hover:bg-accent/10 hover:text-accent'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="relative w-6 h-6">
              <svg className="w-6 h-6 absolute inset-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-0 rotate-45 scale-75'
                      : 'opacity-100 rotate-0 scale-100'
                  }`}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg className="w-6 h-6 absolute inset-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 -rotate-45 scale-75'
                  }`}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className={`mt-4 mx-2 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
            isScrolled ? 'bg-white/95 border-gray-200/50 shadow-xl' : 'bg-white/10 border-white/20 shadow-2xl'
          }`}>
            <div className="space-y-1">
              <Link
                href="/contact"
                className={`flex items-center justify-center w-full px-4 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-accent to-accent-dark text-primary shadow-accent/20'
                    : 'bg-white text-primary shadow-lg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="pt-2 border-t border-current/10">
                <Link href="/about" className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/services" className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/approach" className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                  Approach
                </Link>
                <Link href="/office" className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                  Our Office
                </Link>
                <Link href="/faq" className={`block w-full px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
                }`} onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
