import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, STATS_STRIP, WHY_BEI_PILLARS } from '../data/companyData';
import { Shield, MapPin, Award, CheckCircle2, ArrowRight, Building, Anchor } from 'lucide-react';

interface WhoWeAreViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const WhoWeAreView: React.FC<WhoWeAreViewProps> = ({ onNavigate, onOpenCapability }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">WHO WE ARE</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Service-Disabled Veteran-Owned Small Business
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            BUILT ON EXPERIENCE. DRIVEN BY MISSION.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical was founded in 2015 by a retired 23-year Navy SEAL officer with a singular focus: delivering elite technical training, cleared operational staffing, maritime vessel platforms, and field equipment that federal and defense agencies can count on.
          </p>
        </div>
      </div>

      {/* Verified Stats Strip */}
      <div className="border-y border-white/10 bg-[#0E1113] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {STATS_STRIP.map((stat, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4">
                <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-wider">
                  {stat.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-heading text-white block mt-1">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 block mt-0.5">{stat.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Narrative Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              The Guiding Philosophy: <br />
              <span className="text-[#9DB290]">“Solutions through Relationships”</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              At BEI Tactical, contracting is not a transactional exchange—it is a mission partnership. Founded after decades of Naval Special Warfare operational experience, our leadership understands that real-world defense operations demand agile, dependable, and technically superior solutions.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              We operate an active 6,477 square-foot training complex and corporate headquarters in Virginia Beach, Virginia. Located in immediate proximity to Joint Expeditionary Base Little Creek-Fort Story, Naval Station Norfolk, and NAS Oceana, we provide the military and government community with rapid deployment capabilities and local accountability.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#14181B] border border-white/10 rounded">
                <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#819774]" />
                  SDVOSB Certified
                </h4>
                <p className="text-xs text-gray-400">
                  Registered under CAGE 7JWJ8 with verified active status in SAM.gov for direct sole-source and set-aside contracting.
                </p>
              </div>

              <div className="p-4 bg-[#14181B] border border-white/10 rounded">
                <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#819774]" />
                  6,477 SQ. FT. Facility
                </h4>
                <p className="text-xs text-gray-400">
                  Dedicated hands-on trade training bays, technical simulation labs, classrooms, and warehouse staging.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contracting')}
                className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Government Contracting Info
              </button>
              <button
                onClick={onOpenCapability}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
              >
                View Capability Statement
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-white/10 rounded-lg overflow-hidden bg-[#101315] shadow-2xl">
              <img
                src="/scott-chierepko.jpg"
                alt="Scott Chierepko, Founder and CEO of BEI Tactical"
                className="w-full h-84 object-cover object-top filter contrast-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                }}
              />
              <div className="p-6 bg-gradient-to-t from-[#101315] via-[#101315]/95 to-transparent">
                <span className="text-[10px] font-mono text-[#819774] uppercase tracking-wider block mb-1">
                  FOUNDER & CEO
                </span>
                <h3 className="text-lg font-bold text-white font-heading">
                  Scott Chierepko
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Retired Navy Officer • 23 Years Naval Service • M.S. Defense Analysis
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9DB290]">
                  <span>Virginia Beach Headquarters</span>
                  <span>CAGE: 7JWJ8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why BEI Core Pillars */}
      <div className="bg-[#0E1113] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#819774] uppercase tracking-wider">
              Core Differentiators
            </span>
            <h2 className="text-3xl font-bold font-heading text-white mt-2">
              WHY ORGANIZATIONS CHOOSE BEI TACTICAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_BEI_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#14181B] border border-white/5 rounded hover:border-[#819774]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#819774] bg-[#58694F]/20 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white font-heading">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
