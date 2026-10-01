import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Users, Award, Shield, CheckCircle2, UserCheck, Briefcase, ArrowRight } from 'lucide-react';

interface StaffingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const StaffingView: React.FC<StaffingViewProps> = ({ onNavigate, onOpenCapability }) => {
  const staffingRoles = [
    {
      title: 'Navy Certified Instructors (NEC 9502)',
      scope: 'Instructional design, classroom delivery, and hands-on laboratory evaluation for military commands.',
      qualifications: ['NEC 9502 / Master Training Specialist', 'Secret or Top Secret Clearance', 'Navy Training Management System (NTMS) proficient'],
    },
    {
      title: 'Expeditionary Construction & Trade Masters',
      scope: 'Journeyman and master-level builders, electricians, plumbers, and engine mechanics delivering trade training.',
      qualifications: ['Licensed trade certifications / Seabee BU/CE/UT/CM rating veterans', 'Hands-on tool safety and curriculum enforcement', 'OSHA 30 / USACE EM 385-1-1 compliance'],
    },
    {
      title: 'Material Liaison Office (MLO) Specialists',
      scope: 'Inventory control, warehouse management, project material packaging, and expeditionary supply line coordination.',
      qualifications: ['Naval Seabee MLO & Project Management experience', 'Warehouse operations & hazardous material handling', 'Fleet Readiness Training Plan (FRTP) inspection mastery'],
    },
    {
      title: 'Antiterrorism & Tactical Security Cadres',
      scope: 'High-threat convoy driving, perimeter defense tactics, and antiterrorism officer instructional support.',
      qualifications: ['Special Operations Forces or Naval Security Force veteran background', 'Certified law enforcement / tactical instructors', 'Active DoD Security Clearance'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">STAFFING</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Cleared Defense & Technical Workforce
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            THE RIGHT PEOPLE. THE RIGHT MISSION.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical supplies mission-critical personnel, certified military instructors, and specialized trade technicians to defense agencies and prime contractor teams. We cultivate a high-standard culture where professionals thrive and commands receive dependable expertise.
          </p>
        </div>
      </div>

      {/* Philosophy Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 bg-[#121517] border border-white/10 rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-[#819774]">Workforce Philosophy</span>
            <h2 className="text-2xl font-bold font-heading text-white">
              “A TEAM where people WANT to work.”
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We empower our staff to think independently, solve problems on the ground, and build enduring relationships with the units they support. Our leadership comprises retired Military Special Operations Forces and seasoned trade professionals who lead by example.
            </p>
          </div>
          <div className="p-4 bg-[#181D20] border border-white/5 rounded space-y-2 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 text-white font-semibold">
              <UserCheck className="w-4 h-4 text-[#819774]" /> Rapid Surge Deployment
            </div>
            <p className="text-gray-400">
              Ability to mobilize cleared instructor teams across CONUS and OCONUS locations on short-notice task orders.
            </p>
          </div>
        </div>
      </div>

      {/* Staffing Roles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold font-heading text-white mb-6">
          Core Cleared Personnel Profiles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staffingRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#14181B] border border-white/10 rounded-lg hover:border-[#819774]/40 transition-all"
            >
              <span className="text-xs font-mono text-[#819774] block mb-2">CATEGORY 0{idx + 1}</span>
              <h4 className="text-lg font-bold font-heading text-white mb-2">{role.title}</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">{role.scope}</p>

              <div className="pt-3 border-t border-white/5 space-y-1.5">
                <span className="text-[11px] font-mono text-gray-400 uppercase">Typical Baseline:</span>
                {role.qualifications.map((q, i) => (
                  <div key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#14181B] to-[#101315] border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-heading text-white">Need Qualified Personnel for an Upcoming Task Order?</h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Connect with our staffing directors to discuss labor categories, active security clearances, and teaming opportunities.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Request Staffing Profile
            </button>
            <button
              onClick={onOpenCapability}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono rounded"
            >
              CAGE 7JWJ8 Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
