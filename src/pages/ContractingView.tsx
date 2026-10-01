import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, NAICS_CODES } from '../data/companyData';
import { Shield, Copy, Check, FileText, ExternalLink, Download, CheckCircle2, Building2, MapPin, Phone, Mail } from 'lucide-react';

interface ContractingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const ContractingView: React.FC<ContractingViewProps> = ({ onNavigate, onOpenCapability }) => {
  const [copiedCage, setCopiedCage] = useState(false);
  const [copiedUei, setCopiedUei] = useState(false);

  const copyToClipboard = (text: string, type: 'cage' | 'uei') => {
    navigator.clipboard.writeText(text);
    if (type === 'cage') {
      setCopiedCage(true);
      setTimeout(() => setCopiedCage(false), 2000);
    } else {
      setCopiedUei(true);
      setTimeout(() => setCopiedUei(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">CONTRACTING</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Government Acquisition Profile
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            READY FOR GOVERNMENT CONTRACTING.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical is an active prime contractor registered in SAM.gov as a Service-Disabled Veteran-Owned Small Business. We offer contracting officers direct, streamlined acquisition paths under federal set-aside and sole-source authorities.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={onOpenCapability}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider rounded flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Download Capability Statement
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Contact Contracting Officer Rep
            </button>
          </div>
        </div>
      </div>

      {/* Contracting Identifiers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* CAGE */}
          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              CAGE CODE
            </span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-2xl font-bold font-mono text-white">{COMPANY_DETAILS.cage}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_DETAILS.cage, 'cage')}
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
                title="Copy CAGE"
              >
                {copiedCage ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <span className="text-xs text-gray-400 mt-2 block">Active in SAM.gov</span>
          </div>

          {/* UEI */}
          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              UNIQUE ENTITY ID (UEI)
            </span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold font-mono text-white truncate">{COMPANY_DETAILS.uei}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_DETAILS.uei, 'uei')}
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white shrink-0 ml-2"
                title="Copy UEI"
              >
                {copiedUei ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <span className="text-xs text-gray-400 mt-2 block">Secondary: {COMPANY_DETAILS.secondaryUei}</span>
          </div>

          {/* SBA Status */}
          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              BUSINESS CLASSIFICATION
            </span>
            <span className="text-lg font-bold font-heading text-[#9DB290] mt-2 block">
              SDVOSB
            </span>
            <span className="text-xs text-gray-400 mt-2 block">Service-Disabled Veteran-Owned</span>
          </div>

          {/* Location */}
          <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
              PRIMARY LOCATION
            </span>
            <span className="text-base font-bold font-heading text-white mt-2 block">
              Virginia Beach, VA
            </span>
            <span className="text-xs text-gray-400 mt-2 block">Hampton Roads Defense Corridor</span>
          </div>
        </div>
      </div>

      {/* SDVOSB Procurement Authority & Prime Contracts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sole Source FAR */}
          <div className="p-6 bg-[#121517] border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#819774]" />
              <h3 className="text-lg font-bold font-heading text-white">
                FAR 19.1406 Sole-Source Authority
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              Federal contracting officers are authorized to award sole-source contracts to Service-Disabled Veteran-Owned Small Businesses under FAR Subpart 19.1406, enabling rapid procurement without lengthy open-market delays:
            </p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#819774] shrink-0 mt-0.5" />
                <span>Up to $7.0M for manufacturing requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#819774] shrink-0 mt-0.5" />
                <span>Up to $4.0M for all other service contracts (training, staffing, leasing)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#819774] shrink-0 mt-0.5" />
                <span>Fair and reasonable price determination by the Contracting Officer</span>
              </li>
            </ul>
          </div>

          {/* Prime Vehicles */}
          <div className="p-6 bg-[#121517] border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-[#819774]" />
              <h3 className="text-lg font-bold font-heading text-white">
                Documented Prime Contracting Performance
              </h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#161A1D] border border-white/5 rounded">
                <span className="font-semibold text-white block">USSOCOM $1.0M Single-Award IDC</span>
                <span className="text-gray-400 block mt-1">Prime Indefinite Delivery Contract for vessel leasing and maritime operational support.</span>
              </div>
              <div className="p-3 bg-[#161A1D] border border-white/5 rounded">
                <span className="font-semibold text-white block">$750K Crewed Vessel Leasing BPA</span>
                <span className="text-gray-400 block mt-1">Multiple-award blanket purchase agreement for crewed tactical maritime operations.</span>
              </div>
              <div className="p-3 bg-[#161A1D] border border-white/5 rounded">
                <span className="font-semibold text-white block">U.S. Navy Seabee Tech Trainer Support</span>
                <span className="text-gray-400 block mt-1">Instructional support for Naval Construction Group 1 (NCG 1) and subordinate battalions.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAICS Codes Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121517] border border-white/10 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                North American Industry Classification System (NAICS)
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Active registered NAICS codes under CAGE 7JWJ8
              </p>
            </div>
            <button
              onClick={onOpenCapability}
              className="px-3.5 py-1.5 text-xs font-mono text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded"
            >
              Export Full Sheet
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#161A1D] text-gray-300 font-mono border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">NAICS Code</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Scope & Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {NAICS_CODES.map((n) => (
                  <tr key={n.code} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">
                      {n.code} {n.isPrimary && <span className="ml-2 text-[10px] text-[#9DB290] font-sans font-semibold bg-[#58694F]/30 px-2 py-0.5 rounded">PRIMARY</span>}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-200">{n.title}</td>
                    <td className="py-3.5 px-4 text-gray-400">{n.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
