import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Menu, X, Shield, FileText, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCapability,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'WHO WE ARE' },
    { id: 'capabilities', label: 'CAPABILITIES' },
    { id: 'training', label: 'TRAINING' },
    { id: 'staffing', label: 'STAFFING' },
    { id: 'vessels', label: 'VESSEL LEASING' },
    { id: 'products', label: 'PRODUCTS' },
    { id: 'contracting', label: 'CONTRACTING' },
    { id: 'team', label: 'TEAM' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D0E]/92 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0D0E]/95 via-[#0B0D0E]/70 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left flex items-center gap-3 focus:outline-none shrink-0"
            >
              <img
                src="/bei-logo.png"
                alt="BEI Tactical"
                className="h-8 sm:h-9 w-auto object-contain filter drop-shadow"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-heading font-black">
                    BEI TACTICAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <span className="w-1.5 h-1.5 bg-[#819774] rounded-full"></span>
                  <span className="text-[9px] sm:text-[10px] tracking-wider text-[#9DB290] font-mono font-medium uppercase">
                    SDVOSB • CAGE {COMPANY_DETAILS.cage}
                  </span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              {navLinks.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2.5 py-1.5 text-[11px] xl:text-xs font-medium tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#819774] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right CTAs (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
              <button
                onClick={onOpenCapability}
                className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
                title="View Government Capability Statement"
              >
                <FileText className="w-3.5 h-3.5 text-[#819774]" />
                <span>CAPABILITY BRIEF</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center justify-center px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white bg-[#58694F] hover:bg-[#687C5D] active:bg-[#475540] border border-[#819774]/50 rounded transition-all shadow-sm shadow-[#58694F]/20"
              >
                CONTACT BEI
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex px-2.5 py-1.5 text-xs font-medium text-white bg-[#58694F] rounded border border-[#819774]/40"
              >
                CONTACT
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white focus:outline-none rounded bg-white/5 border border-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0D0E] flex flex-col xl:hidden pt-20 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                BEI TACTICAL
              </span>
              <p className="text-xs font-mono text-[#819774] mt-0.5">
                SDVOSB • CAGE 7JWJ8 • VIRGINIA BEACH, VA
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded bg-white/5 border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-6 flex-1 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full flex items-center justify-between py-3 text-base font-semibold tracking-wide text-left border-b border-white/5 ${
                currentPage === 'home' ? 'text-[#819774]' : 'text-gray-200'
              }`}
            >
              <span>HOME</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>

            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between py-3 text-base font-medium tracking-wide text-left border-b border-white/5 ${
                    isActive ? 'text-[#819774] font-bold' : 'text-gray-200'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          {/* Mobile Footer Area */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCapability();
              }}
              className="w-full py-3 px-4 rounded bg-[#161A1D] border border-white/10 text-xs font-mono font-medium text-gray-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#819774]" />
              OFFICIAL CAPABILITY BRIEF
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 px-4 rounded bg-[#58694F] hover:bg-[#687C5D] text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              CONTACT BEI TACTICAL
            </button>

            <p className="text-center text-[11px] font-mono text-gray-500 pt-2">
              Primary: {COMPANY_DETAILS.phonePrimary} | Virginia Beach, VA
            </p>
          </div>
        </div>
      )}
    </>
  );
};
