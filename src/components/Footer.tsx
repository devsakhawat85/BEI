import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, NAICS_CODES } from '../data/companyData';
import { Shield, MapPin, Phone, Mail, FileText, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCapability }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090A] border-t border-white/10 text-gray-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile & CAGE */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#819774] rounded-xs"></span>
              <span className="text-xl font-bold tracking-tight text-white font-heading font-black">
                BEI TACTICAL
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              BEI Tactical, LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) providing specialized technical training, cleared staffing, maritime vessel leasing, and tactical solutions to the Department of Defense, USSOCOM, and federal agencies.
            </p>

            <div className="p-3.5 bg-[#101315] border border-white/5 rounded font-mono text-xs space-y-1.5 max-w-sm">
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-gray-500 uppercase text-[10px]">CAGE Code:</span>
                <span className="text-white font-bold">{COMPANY_DETAILS.cage}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-gray-500 uppercase text-[10px]">UEI Number:</span>
                <span className="text-[#9DB290] font-bold">{COMPANY_DETAILS.uei}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-gray-500 uppercase text-[10px]">Status:</span>
                <span className="text-white">SDVOSB Certified</span>
              </div>
            </div>

            <button
              onClick={onOpenCapability}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#819774]" />
              DOWNLOAD CAPABILITY BRIEF
            </button>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="hover:text-white transition-colors text-left"
                >
                  Leadership & Cadre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contracting')}
                  className="hover:text-white transition-colors text-left"
                >
                  Government Contracting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact BEI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('training')}
                  className="hover:text-white transition-colors text-left"
                >
                  Military & Seabee Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('staffing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Government Staffing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('vessels')}
                  className="hover:text-white transition-colors text-left"
                >
                  Vessel Leasing (USSOCOM IDC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tactical & Comms Products
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.headquarters}
                  <br />
                  <span className="text-[11px] text-gray-400">
                    6,477 Sq. Ft. Training Complex
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#819774] shrink-0" />
                <a href="tel:7576851915" className="hover:text-white">
                  {COMPANY_DETAILS.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#819774] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.emailScott}`} className="hover:text-white">
                  {COMPANY_DETAILS.emailScott}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} BEI Tactical, LLC. All rights reserved. Registered SDVOSB Defense Contractor.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Hampton Roads Defense Corridor</span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors uppercase text-[11px] tracking-wider"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
