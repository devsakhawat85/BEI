import React from 'react';
import { PageId } from '../types';
import { VESSEL_FLEET, COMPANY_DETAILS } from '../data/companyData';
import { Anchor, Shield, CheckCircle2, Navigation, Award, ArrowRight } from 'lucide-react';

interface VesselLeasingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const VesselLeasingView: React.FC<VesselLeasingViewProps> = ({ onNavigate, onOpenCapability }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">VESSEL LEASING</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            USSOCOM IDC Prime Contractor
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            MISSION-READY MARITIME CAPABILITY.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical delivers bareboat and crewed vessel charter solutions engineered for military, special operations, and maritime security training. Holding active prime contracts with the U.S. Special Operations Command (USSOCOM) and Department of Defense agencies.
          </p>
        </div>

        {/* Contract Performance Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg flex items-start gap-4">
            <Award className="w-6 h-6 text-[#819774] shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-heading">USSOCOM $1.0M Single-Award IDC</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#58694F]/30 text-[#9DB290]">PRIME VEHICLE</span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Indefinite Delivery Contract (IDC) awarded for dedicated vessel lease support, specialized maritime platforms, and exercise support.
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg flex items-start gap-4">
            <Anchor className="w-6 h-6 text-[#819774] shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-heading">$750K Crewed Vessel Leasing BPA</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">BLANKET PURCHASE</span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Multiple-award Blanket Purchase Agreement providing licensed captains, engineers, and rapid-response crewed platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Visual Banner */}
      <div className="relative my-8 border-y border-white/10 overflow-hidden h-72 sm:h-96">
        <img
          src="/container-vessel.jpg"
          alt="Tactical Maritime Vessel Operations"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0E]/90 via-[#0B0D0E]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-[#0B0D0E]/40"></div>
        <div className="absolute bottom-8 left-8 sm:left-12 max-w-lg">
          <span className="text-xs font-mono text-[#819774] uppercase tracking-wider block mb-1">
            Operational Theater
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white drop-shadow">
            Coastal, Offshore & Inland Waterway Readiness
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mt-2 drop-shadow">
            Operating from Hampton Roads waters with ready transit to Atlantic offshore ranges, Chesapeake Bay, and littoral testing zones.
          </p>
        </div>
      </div>

      {/* Fleet Capabilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-bold font-heading text-white mb-6">
          Vessel Categories & Mission Support
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VESSEL_FLEET.map((vessel) => (
            <div
              key={vessel.id}
              className="bg-[#121517] border border-white/10 rounded-lg overflow-hidden flex flex-col group hover:border-[#819774]/50 transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={vessel.imageUrl}
                  alt={vessel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121517] via-transparent to-black/30"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase bg-black/80 backdrop-blur-sm text-[#9DB290] border border-white/10 px-2.5 py-1 rounded">
                    {vessel.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                    {vessel.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {vessel.description}
                  </p>

                  {/* Specifications */}
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Key Charter Specifications:
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      {vessel.specs.map((s, i) => (
                        <div key={i} className="p-2 bg-[#161A1D] border border-white/5 rounded">
                          <span className="text-gray-400 block text-[10px]">{s.label}</span>
                          <span className="text-white font-semibold">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mission Uses */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Operational Applications:
                    </h5>
                    <ul className="space-y-1.5">
                      {vessel.useCases.map((u, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>NAICS: 483114 (Water Transportation)</span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-[#9DB290] hover:text-white font-semibold flex items-center gap-1"
                  >
                    Charter Inquiry <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contracting Officers note */}
        <div className="mt-16 p-8 bg-[#14181B] border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-heading text-white">Direct Vessel Contracting for Commands</h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              Commands can utilize BEI Tactical’s existing BPA and IDC vehicles or initiate sole-source SDVOSB procurement under CAGE 7JWJ8 for fast exercise fulfillment.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Contact Maritime Team
            </button>
            <button
              onClick={onOpenCapability}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono rounded"
            >
              Capability Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
