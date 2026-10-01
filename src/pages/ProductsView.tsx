import React from 'react';
import { PageId } from '../types';
import { TACTICAL_PRODUCTS, COMPANY_DETAILS } from '../data/companyData';
import { Shield, Radio, CheckCircle2, Cpu, ArrowRight, Layers, FileCheck } from 'lucide-react';

interface ProductsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onNavigate, onOpenCapability }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">PRODUCTS</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            DoD & Tactical Field Equipment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            TECHNOLOGY BUILT FOR THE FIELD.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical provides advanced ballistic armor, mission-grade apparel, and secure communication systems tailored for military units, federal law enforcement, and first responders operating in unforgiving conditions.
          </p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TACTICAL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#121517] border border-white/10 rounded-lg overflow-hidden flex flex-col group hover:border-[#819774]/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-black/40">
                <img
                  src={prod.imageUrl}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/klas-product.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121517] via-transparent to-black/30"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase bg-black/80 backdrop-blur-sm text-[#9DB290] border border-white/10 px-2.5 py-1 rounded">
                    {prod.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-mono text-[#819774] mt-1">{prod.tagline}</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Technical Specifications:
                    </h4>
                    <ul className="space-y-1.5">
                      {prod.specifications.map((spec, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mb-4">
                    <FileCheck className="w-3.5 h-3.5 text-[#819774]" />
                    <span>{prod.standards}</span>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 px-4 bg-white/5 hover:bg-[#58694F] border border-white/10 hover:border-[#819774] text-white text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
                  >
                    Request Spec Sheet & Quote <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Support */}
        <div className="mt-16 p-8 bg-[#14181B] border border-white/10 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#819774]">01 / FIELD TESTING</span>
            <h4 className="text-base font-bold text-white font-heading">Rigorous Validation</h4>
            <p className="text-xs text-gray-400">
              Equipment evaluated against harsh environmental factors including saltwater immersion, abrasive grit, and high vibrations.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#819774]">02 / COMPLIANCE</span>
            <h4 className="text-base font-bold text-white font-heading">Berry & TAA Compliant</h4>
            <p className="text-xs text-gray-400">
              Procurement-ready items meeting domestic preference acts and Federal Acquisition Regulation requirements.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#819774]">03 / RAPID KITTING</span>
            <h4 className="text-base font-bold text-white font-heading">Turnkey Unit Packages</h4>
            <p className="text-xs text-gray-400">
              Kitted solutions customized for deployment teams, complete with integrated comms, tailored armor, and field accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
