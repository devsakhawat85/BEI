import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { MapPin, Phone, Mail, Shield, CheckCircle2, Send, Building, Clock, FileText } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenCapability }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'Contracting & SDVOSB Procurement',
    message: '',
    procurementType: 'Direct Procurement / Sole Source',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">CONTACT</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Government & Defense Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            LET'S TALK ABOUT YOUR MISSION.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you are a contracting officer requiring fast-track SDVOSB vehicle execution, a military command seeking Seabee or tactical training, or an agency in need of vessel leasing, our team is ready to respond.
          </p>
        </div>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#121517] border border-white/10 rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-[#58694F]/30 text-[#9DB290] border border-[#58694F]/50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Requirement Submitted</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out to BEI Tactical. A member of our executive contracting team will review your specifications and respond promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono rounded"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Mission Consultation & RFQ Form
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Direct inquiry to BEI Tactical management and contracting directors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., CDR John Smith"
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      TITLE / MILITARY RANK
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Contracting Officer / Training Officer"
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      ORGANIZATION / COMMAND / AGENCY *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g., USSOCOM / NAVFAC / NMCB"
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      OFFICIAL EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@agency.mil or name@company.com"
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(757) 000-0000"
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      PRIMARY REQUIREMENT TRACK *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#819774]"
                    >
                      <option value="Contracting & SDVOSB Procurement">Contracting & SDVOSB Procurement</option>
                      <option value="Military & Seabee Training">Military & Seabee Training</option>
                      <option value="Vessel Leasing & Maritime Support">Vessel Leasing & Maritime Support</option>
                      <option value="Government Staffing & Instructors">Government Staffing & Instructors</option>
                      <option value="Tactical Products & Comms">Tactical Products & Comms</option>
                      <option value="General Mission Inquiry">General Mission Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">
                    MISSION SPECIFICATIONS / SOW / TIMELINE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your upcoming requirement, dates, personnel requirements, or NAICS target..."
                    className="w-full bg-[#181D20] border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#819774]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-[#58694F] hover:bg-[#687C5D] active:bg-[#475540] text-white font-semibold text-xs font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> SUBMIT MISSION INQUIRY
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Facility */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#121517] border border-white/10 rounded-lg p-6 space-y-4">
              <span className="text-xs font-mono text-[#819774] uppercase tracking-wider block">
                HEADQUARTERS & TRAINING COMPLEX
              </span>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#819774] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    BEI Tactical, LLC
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {COMPANY_DETAILS.headquarters}
                  </p>
                  <span className="text-[11px] font-mono text-gray-400 mt-1 block">
                    6,477 SQ. FT. Facility • Virginia Beach, VA 23454
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#819774] shrink-0" />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">Telephone:</span>
                    <a href="tel:7576851915" className="text-white hover:text-[#9DB290] font-mono">
                      {COMPANY_DETAILS.phonePrimary}
                    </a>
                    <span className="text-gray-500 mx-2">/</span>
                    <a href="tel:7573434476" className="text-white hover:text-[#9DB290] font-mono">
                      {COMPANY_DETAILS.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#819774] shrink-0" />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-mono">Direct Emails:</span>
                    <div className="space-x-2">
                      <a href={`mailto:${COMPANY_DETAILS.emailScott}`} className="text-white hover:text-[#9DB290] font-mono">
                        {COMPANY_DETAILS.emailScott}
                      </a>
                      <span className="text-gray-500">•</span>
                      <a href={`mailto:${COMPANY_DETAILS.emailTravis}`} className="text-white hover:text-[#9DB290] font-mono">
                        {COMPANY_DETAILS.emailTravis}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <button
                  onClick={onOpenCapability}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono rounded flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#819774]" /> View Official CAGE 7JWJ8 Brief
                </button>
              </div>
            </div>

            {/* Strategic Location Details */}
            <div className="bg-[#121517] border border-white/10 rounded-lg p-6 space-y-3">
              <span className="text-xs font-mono text-[#819774] uppercase tracking-wider block">
                STRATEGIC HAMPTON ROADS LOCATION
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                BEI Tactical is positioned within minutes of major Hampton Roads military installations:
              </p>
              <div className="space-y-1.5 text-xs font-mono text-gray-400">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>JEB Little Creek-Fort Story:</span>
                  <span className="text-white">~12 minutes</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Naval Station Norfolk:</span>
                  <span className="text-white">~20 minutes</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>NAS Oceana / Dam Neck:</span>
                  <span className="text-white">~15 minutes</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Norfolk International Airport (ORF):</span>
                  <span className="text-white">~20 minutes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
