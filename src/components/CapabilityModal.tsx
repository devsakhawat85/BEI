import React, { useState } from 'react';
import { COMPANY_DETAILS, NAICS_CODES } from '../data/companyData';
import { X, Copy, Check, Printer, Shield, Building2, Phone, Mail, MapPin } from 'lucide-react';

interface CapabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({ isOpen, onClose }) => {
  const [copiedCage, setCopiedCage] = useState(false);
  const [copiedUei, setCopiedUei] = useState(false);

  if (!isOpen) return null;

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#101315] border border-white/10 rounded-lg shadow-2xl p-6 md:p-8 my-8 text-[#ECEEEA] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#58694F]/30 text-[#9DB290] border border-[#58694F]/40">
                <Shield className="w-3.5 h-3.5" /> OFFICIAL CAPABILITY BRIEF
              </span>
              <span className="text-xs font-mono text-gray-400">FAR 19.1406 COMPLIANT</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-heading">
              BEI TACTICAL, LLC
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Service-Disabled Veteran-Owned Small Business (SDVOSB)
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-gray-400 hover:text-white rounded bg-white/5 hover:bg-white/10 transition-colors"
              title="Print Capability Brief"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded bg-white/5 hover:bg-white/10 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Identifiers Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#161A1D] border border-white/5 rounded-md mb-6 font-mono text-xs">
          <div className="border-r border-white/5 pr-3">
            <span className="text-gray-400 block text-[10px] uppercase">CAGE Code</span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white font-bold text-base">{COMPANY_DETAILS.cage}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_DETAILS.cage, 'cage')}
                className="text-gray-400 hover:text-[#9DB290]"
                title="Copy CAGE"
              >
                {copiedCage ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="border-r border-white/5 pr-3">
            <span className="text-gray-400 block text-[10px] uppercase">UEI Identifier</span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white font-bold text-sm truncate">{COMPANY_DETAILS.uei}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_DETAILS.uei, 'uei')}
                className="text-gray-400 hover:text-[#9DB290]"
                title="Copy UEI"
              >
                {copiedUei ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="border-r border-white/5 pr-3">
            <span className="text-gray-400 block text-[10px] uppercase">Primary NAICS</span>
            <span className="text-white font-bold text-sm block mt-1">611699</span>
            <span className="text-[10px] text-gray-400">Misc. Schools</span>
          </div>

          <div>
            <span className="text-gray-400 block text-[10px] uppercase">Facility Area</span>
            <span className="text-white font-bold text-sm block mt-1">6,477 SQ FT</span>
            <span className="text-[10px] text-gray-400">Virginia Beach HQ</span>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#9DB290] font-mono mb-2">
              Corporate Overview & Core Competencies
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2015 by a retired 23-year Navy SEAL officer, BEI Tactical, LLC is an active prime government contractor delivering turnkey training, vessel leasing, qualified staffing, and tactical products. Headquartered in Virginia Beach near Naval Station Norfolk and JEB Little Creek-Fort Story, BEI Tactical maintains a dedicated 6,477 sq. ft. trade training facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#14181B] border border-white/5 rounded">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#819774] rounded-full"></span>
                Specialized Military & Seabee Training
              </h4>
              <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                <li>Material Liaison Office (MLO) & Seabee Project Management</li>
                <li>Naval Construction Group 1 (NCG 1) Tech Trainer support</li>
                <li>Apprentice Trades: Carpentry, Electrical, Plumbing, Small Engines</li>
                <li>Antiterrorism Leadership (CENSECFOR / NETC) & Tactical Convoys</li>
              </ul>
            </div>

            <div className="p-4 bg-[#14181B] border border-white/5 rounded">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#819774] rounded-full"></span>
                Maritime Support & Vessel Leasing
              </h4>
              <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                <li>Hold $1M Single-Award Indefinite Delivery Contract (IDC) with USSOCOM</li>
                <li>Multiple-Award Blanket Purchase Agreement (BPA) for Crewed Vessels</li>
                <li>Bareboat & Fully Crewed Tactical Waterborne Training Platforms</li>
                <li>Open-water insertion/extraction & maritime perimeter security</li>
              </ul>
            </div>
          </div>

          {/* NAICS Codes Table */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#9DB290] font-mono mb-2">
              Registered NAICS Codes
            </h3>
            <div className="border border-white/10 rounded overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#161A1D] text-gray-300 font-mono">
                  <tr>
                    <th className="py-2.5 px-3">NAICS</th>
                    <th className="py-2.5 px-3">Title</th>
                    <th className="py-2.5 px-3 hidden sm:table-cell">Capability Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {NAICS_CODES.map((n) => (
                    <tr key={n.code} className="hover:bg-white/[0.02]">
                      <td className="py-2 px-3 font-mono font-semibold text-[#ECEEEA]">
                        {n.code} {n.isPrimary && <span className="ml-1 text-[10px] text-[#9DB290]">(Primary)</span>}
                      </td>
                      <td className="py-2 px-3 text-gray-300">{n.title}</td>
                      <td className="py-2 px-3 text-gray-400 hidden sm:table-cell">{n.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Details */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-gray-400">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-[#9DB290]" />
                <span>{COMPANY_DETAILS.headquarters}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#9DB290]" /> {COMPANY_DETAILS.phonePrimary}</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#9DB290]" /> {COMPANY_DETAILS.emailScott}</span>
              </div>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
