import React from 'react';
import { PageId } from '../types';
import { CORE_CAPABILITIES, COMPANY_DETAILS } from '../data/companyData';
import { ArrowRight, CheckCircle2, Shield, FileText } from 'lucide-react';

interface CapabilitiesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const CapabilitiesView: React.FC<CapabilitiesViewProps> = ({ onNavigate, onOpenCapability }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">CAPABILITIES</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Integrated Defense Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            ONE PARTNER. MULTIPLE CAPABILITIES.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical provides unified mission support across five core operational verticals—uniting military doctrine, technical industrial trades, maritime operations, and procurement agility under an active SDVOSB vehicle.
          </p>
        </div>
      </div>

      {/* Capabilities List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {CORE_CAPABILITIES.map((cap, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={cap.id}
              className={`p-8 bg-[#121517] border border-white/10 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-[#819774] bg-[#58694F]/20 px-2.5 py-1 rounded">
                    {cap.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                    CORE DISCIPLINE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {cap.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {cap.fullDesc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#9DB290] mb-2">
                    Scope of Work & Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    {cap.keyFeatures.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#819774] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      onNavigate(cap.linkPage);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                  >
                    Explore Discipline <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-lg overflow-hidden border border-white/10 group">
                  <img
                    src={cap.imageUrl}
                    alt={cap.title}
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121517] via-transparent to-black/30"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contracting Officer Quick Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 bg-[#14181B] border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-white">Need an Integrated Scope of Work?</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              BEI Tactical can bundle trade training, logistics staffing, and vessel leasing under a unified statement of work and single contracting instrument.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Contact BEI
            </button>
            <button
              onClick={onOpenCapability}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono rounded flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#819774]" /> Capability Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
