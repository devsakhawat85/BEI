import React, { useState } from 'react';
import { PageId } from '../types';
import {
  COMPANY_DETAILS,
  STATS_STRIP,
  CORE_CAPABILITIES,
  TRAINING_PROGRAMS,
  VESSEL_FLEET,
  TACTICAL_PRODUCTS,
  NAICS_CODES,
  WHY_BEI_PILLARS,
  LEADERSHIP_TEAM,
} from '../data/companyData';
import {
  Shield,
  ArrowRight,
  ArrowDown,
  Award,
  CheckCircle2,
  Anchor,
  Users,
  Wrench,
  Radio,
  Copy,
  Check,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenCapability }) => {
  const [copiedCage, setCopiedCage] = useState(false);
  const [copiedUei, setCopiedUei] = useState(false);
  const [activeTrainingCategory, setActiveTrainingCategory] = useState<string>('All');

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

  const trainingCategories = ['All', 'Seabee & Construction', 'Technical Trades', 'Tactical & Maritime Security', 'Leadership'];
  const filteredTraining = activeTrainingCategory === 'All'
    ? TRAINING_PROGRAMS.slice(0, 4)
    : TRAINING_PROGRAMS.filter(p => p.category === activeTrainingCategory).slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* ==================================================
          SECTION 01 — HERO
          ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#08090A]">
        {/* Cinematic Background Image with Balanced High-Visibility Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-boat.jpg"
            alt="BEI Tactical maritime and defense operations"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-105 scale-100"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85';
            }}
          />
          {/* Balanced gradient overlay so text is 100% sharp while the boat and water are crisp and visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0E]/90 via-[#0B0D0E]/55 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-[#0B0D0E]/30"></div>
          <div className="absolute inset-0 bg-grid-tactical opacity-20 pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-12 sm:pt-20">
          <div className="max-w-4xl">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#58694F]/30 border border-[#819774]/50 text-[#9DB290] text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#819774] rounded-full animate-ping"></span>
              MISSION-READY SOLUTIONS • SDVOSB DEFENSE CONTRACTOR
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight uppercase leading-[0.95] mb-6 drop-shadow-md">
              BUILT FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                MISSION.
              </span> <br />
              READY FOR THE <br />
              <span className="text-[#9DB290]">
                CHALLENGE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8 font-normal drop-shadow">
              BEI Tactical delivers specialized Seabee and military trade training, cleared technical staffing, maritime vessel leasing, and tactical field solutions. Founded by a retired 23-year Navy SEAL officer with headquarters in Virginia Beach, VA.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <button
                onClick={() => onNavigate('capabilities')}
                className="w-full sm:w-auto px-8 py-4 bg-[#58694F] hover:bg-[#687C5D] active:bg-[#475540] text-white text-xs font-mono uppercase tracking-widest font-semibold rounded border border-[#819774]/50 shadow-lg shadow-[#58694F]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 active:bg-black/80 text-white text-xs font-mono uppercase tracking-widest font-medium rounded border border-white/20 backdrop-blur-md transition-all"
              >
                CONTACT BEI
              </button>

              <button
                onClick={onOpenCapability}
                className="w-full sm:w-auto px-5 py-4 text-xs font-mono text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 backdrop-blur-sm bg-black/20 rounded border border-white/10"
              >
                <FileText className="w-4 h-4 text-[#819774]" />
                <span>CAGE 7JWJ8 Brief</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 text-[#819774] animate-bounce" />
        </div>
      </section>

      {/* ==================================================
          SECTION 02 — TRUST / COMPANY SNAPSHOT
          ================================================== */}
      <section className="border-y border-white/10 bg-[#0E1113] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            {STATS_STRIP.map((stat, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4 sm:pl-6">
                <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-widest">
                  {stat.label}
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-white block mt-1 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 block mt-0.5 truncate">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 03 — WHO WE ARE
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0B0D0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Editorial Heading */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#819774] rounded-full"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290]">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight leading-[1.05]">
                BUILT ON <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                  EXPERIENCE.
                </span> <br />
                DRIVEN BY <br />
                <span className="text-[#9DB290]">
                  MISSION.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                BEI Tactical, LLC is a Service-Disabled Veteran-Owned Small Business based in Virginia Beach, founded in 2015 by retired Navy SEAL officer Scott Chierepko after 23 years of distinguished naval service.
              </p>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Operating under the core philosophy of <strong className="text-white font-semibold">“Solutions through Relationships,”</strong> BEI Tactical maintains an active 6,477 square-foot training complex and headquarters strategically situated minutes from Joint Expeditionary Base Little Creek-Fort Story and Naval Station Norfolk.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded transition-colors flex items-center gap-2"
                >
                  <span>READ OUR STORY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenCapability}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
                >
                  CAGE 7JWJ8 PROFILE
                </button>
              </div>
            </div>

            {/* Right: Large Editorial Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#121517] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="BEI Tactical technical and expeditionary training operations"
                  className="w-full h-96 sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#101315]/90 border border-white/10 backdrop-blur-md rounded">
                  <div className="flex items-center justify-between text-xs font-mono text-[#819774] mb-1">
                    <span>VIRGINIA BEACH, VA</span>
                    <span>CAGE: 7JWJ8</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    6,477 Sq. Ft. Training Complex & Corporate Headquarters
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Specialized trade training bays, technical simulation labs, and rapid-response staging.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 04 — CORE CAPABILITIES
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0E1113] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
                MISSION DOMAINS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
                ONE PARTNER. <br />
                <span className="text-[#9DB290]">MULTIPLE CAPABILITIES.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              Delivering cross-functional expertise across military training, maritime operations, technical staffing, and field gear under one trusted SDVOSB contractor.
            </p>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_CAPABILITIES.map((cap, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={cap.id}
                  onClick={() => {
                    onNavigate(cap.linkPage);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group relative bg-[#14181B] border border-white/10 rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#819774]/60 transition-all duration-300 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={cap.imageUrl}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14181B] via-transparent to-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono font-bold text-white bg-black/75 px-3 py-1 rounded border border-white/10">
                        {cap.number}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                        {cap.shortDesc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-400 group-hover:text-[#9DB290] transition-colors uppercase">
                        Explore Capability
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#58694F] flex items-center justify-center text-gray-300 group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Accent Line on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#819774] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 05 — TRAINING
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0B0D0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
                TECHNICAL & SEABEE CURRICULUM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
                TRAINING THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                  PERFORMS IN THE
                </span> <br />
                <span className="text-[#9DB290]">REAL WORLD.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <p className="text-xs sm:text-sm text-gray-400 max-w-sm text-left md:text-right leading-relaxed">
                Instruction delivered by Navy NEC 9502 qualified instructors, Special Operations veterans, and licensed tradesmen.
              </p>
              <button
                onClick={() => onNavigate('training')}
                className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider rounded"
              >
                VIEW FULL TRAINING CATALOG
              </button>
            </div>
          </div>

          {/* Interactive Category Chips */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            {trainingCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTrainingCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeTrainingCategory === cat
                    ? 'bg-[#58694F] text-white font-semibold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Training Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTraining.map((program) => (
              <div
                key={program.id}
                className="p-6 bg-[#14181B] border border-white/10 rounded-lg hover:border-[#819774]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#9DB290] border border-white/5">
                      {program.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      CENSECFOR / Seabee
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 mt-2.5 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <ul className="space-y-1.5">
                      {program.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="truncate max-w-[200px]">Audience: {program.audience}</span>
                  <button
                    onClick={() => onNavigate('training')}
                    className="text-[#9DB290] hover:text-white font-semibold flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 06 — GOVERNMENT STAFFING
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0E1113] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#121517] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                  alt="Government technical and trade workforce"
                  className="w-full h-80 sm:h-[420px] object-cover opacity-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101315] via-transparent to-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14181B]/95 border border-white/10 rounded">
                  <span className="text-[10px] font-mono text-[#819774] uppercase block">
                    CERTIFIED TALENT
                  </span>
                  <p className="text-xs text-white font-semibold mt-1">
                    Navy NEC 9502 Instructors & Master Tradesmen
                  </p>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    Cleared, trade-licensed, and expeditionary ready
                  </span>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block">
                SPECIALIZED WORKFORCE
              </span>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight leading-[1.05]">
                THE RIGHT PEOPLE. <br />
                <span className="text-[#9DB290]">THE RIGHT MISSION.</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                BEI Tactical provides cleared, highly specialized technical personnel who integrate directly into defense commands and prime contractor operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#14181B] border border-white/5 rounded">
                  <h4 className="text-sm font-semibold text-white mb-1">Navy Certified Instructors</h4>
                  <p className="text-xs text-gray-400">NEC 9502 qualified educators with Master Training Specialist certifications.</p>
                </div>
                <div className="p-4 bg-[#14181B] border border-white/5 rounded">
                  <h4 className="text-sm font-semibold text-white mb-1">Material Liaison Officers</h4>
                  <p className="text-xs text-gray-400">Naval construction warehouse, inventory, and supply chain managers.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('staffing')}
                  className="px-6 py-3 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded transition-colors"
                >
                  EXPLORE STAFFING
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider rounded"
                >
                  REQUEST LABOR PROFILE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 07 — VESSEL LEASING
          ================================================== */}
      <section className="relative py-24 sm:py-32 bg-[#08090A] border-t border-white/10 overflow-hidden">
        {/* Edge-to-Edge Maritime Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/container-vessel.jpg"
            alt="Tactical maritime vessel leasing operations"
            className="w-full h-full object-cover brightness-[0.70] contrast-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0E]/95 via-[#0B0D0E]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-[#0B0D0E]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#58694F]/40 border border-[#819774]/50 text-[#9DB290] text-xs font-mono uppercase tracking-wider backdrop-blur-md">
              <Anchor className="w-3.5 h-3.5" /> USSOCOM $1.0M PRIME CONTRACTOR
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tight leading-[1.05] drop-shadow-md">
              VESSEL LEASING <br />
              <span className="text-[#9DB290]">
                MISSION-READY MARITIME CAPABILITY.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow">
              BEI Tactical holds an active single-award $1,000,000 Indefinite Delivery Contract (IDC) with USSOCOM and multiple-award Blanket Purchase Agreements (BPAs) for bareboat and crewed maritime lease support.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2 font-mono text-xs">
              <div className="p-3 bg-[#101315]/90 border border-white/10 rounded backdrop-blur-sm">
                <span className="text-gray-400 block text-[10px] uppercase">CONTRACT STATUS</span>
                <span className="text-white font-bold text-sm">USSOCOM IDC Active</span>
              </div>
              <div className="p-3 bg-[#101315]/90 border border-white/10 rounded backdrop-blur-sm">
                <span className="text-gray-400 block text-[10px] uppercase">LEASING MODES</span>
                <span className="text-white font-bold text-sm">Crewed & Bareboat</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('vessels')}
                className="px-6 py-3.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded shadow-lg shadow-[#58694F]/20 flex items-center gap-2"
              >
                <span>VIEW VESSEL CAPABILITIES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 text-white text-xs font-mono uppercase tracking-wider rounded backdrop-blur-sm"
              >
                CHARTER INQUIRY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 08 — PRODUCTS & TECHNOLOGY
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0B0D0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
                FIELD GEAR & COMMUNICATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
                TECHNOLOGY BUILT <br />
                <span className="text-[#9DB290]">FOR THE FIELD.</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider rounded"
            >
              EXPLORE ALL PRODUCTS
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TACTICAL_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="p-6 bg-[#14181B] border border-white/10 rounded-lg flex flex-col justify-between group hover:border-[#819774]/40 transition-all"
              >
                <div>
                  <div className="relative h-44 rounded overflow-hidden mb-4 bg-black/40">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/80 text-[#9DB290]">
                        {prod.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    {prod.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 text-xs text-gray-400 space-y-1">
                    <span className="font-mono text-[10px] text-gray-500 uppercase block">Standards:</span>
                    <span>{prod.standards}</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5">
                  <button
                    onClick={() => onNavigate('products')}
                    className="w-full py-2 text-xs font-mono text-center text-white bg-white/5 hover:bg-[#58694F] rounded transition-colors"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 09 — GOVERNMENT CONTRACTING
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0E1113] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
              ACQUISITION PROFILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
              READY FOR <br />
              <span className="text-[#9DB290]">GOVERNMENT CONTRACTING.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3">
              Official federal contractor identifiers and direct acquisition data for Department of Defense Contracting Officers.
            </p>
          </div>

          {/* Data Blocks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                CAGE CODE
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-2xl font-bold font-mono text-white">{COMPANY_DETAILS.cage}</span>
                <button
                  onClick={() => copyToClipboard(COMPANY_DETAILS.cage, 'cage')}
                  className="text-gray-400 hover:text-[#9DB290]"
                  title="Copy CAGE"
                >
                  {copiedCage ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-[11px] font-mono text-[#819774] mt-1 block">Active on SAM.gov</span>
            </div>

            <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                UEI NUMBER
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-base font-bold font-mono text-white truncate">{COMPANY_DETAILS.uei}</span>
                <button
                  onClick={() => copyToClipboard(COMPANY_DETAILS.uei, 'uei')}
                  className="text-gray-400 hover:text-[#9DB290] shrink-0 ml-1"
                  title="Copy UEI"
                >
                  {copiedUei ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-[11px] font-mono text-gray-400 mt-1 block">Secondary: {COMPANY_DETAILS.secondaryUei}</span>
            </div>

            <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                SOCIOECONOMIC STATUS
              </span>
              <span className="text-lg font-bold font-heading text-[#9DB290] mt-1 block">
                SDVOSB
              </span>
              <span className="text-[11px] text-gray-400 mt-1 block">Service-Disabled Veteran-Owned</span>
            </div>

            <div className="p-5 bg-[#14181B] border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                PRIMARY NAICS
              </span>
              <span className="text-lg font-bold font-mono text-white mt-1 block">
                611699
              </span>
              <span className="text-[11px] text-gray-400 mt-1 block">Misc. Schools & Instruction</span>
            </div>
          </div>

          {/* Prime Vehicles Summary & CTA */}
          <div className="p-6 bg-[#14181B] border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-base font-bold font-heading text-white">
                FAR 19.1406 Sole-Source Eligibility
              </h3>
              <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
                Eligible for direct sole-source awards up to $4.0M for training and services, and up to $7.0M for manufacturing under Federal Acquisition Regulations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('contracting')}
                className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-mono uppercase tracking-wider rounded font-semibold"
              >
                FOR CONTRACTING OFFICERS
              </button>
              <button
                onClick={onOpenCapability}
                className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider rounded"
              >
                Capability Brief
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 10 — WHY BEI
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0B0D0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
              DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
              CAPABILITY IS ONLY <br />
              <span className="text-[#9DB290]">THE BEGINNING.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3">
              Founded on the front lines of Naval Special Warfare and built into an enduring prime government enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_BEI_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#14181B] border border-white/5 rounded-lg hover:border-[#819774]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#819774] bg-[#58694F]/20 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11 — TEAM / LEADERSHIP
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#0E1113] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-2">
                EXECUTIVE LEADERSHIP & INSTRUCTORS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
                PROVEN <span className="text-[#9DB290]">LEADERSHIP.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('team')}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider rounded"
            >
              MEET LEADERSHIP & CADRE
            </button>
          </div>

          {/* Scott Chierepko Featured Card with Real Image */}
          <div className="bg-[#14181B] border border-white/10 rounded-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 relative min-h-[340px] sm:min-h-[380px] bg-[#1A1F23]">
                <img
                  src="/scott-chierepko.jpg"
                  alt="Scott Chierepko - Founder and CEO"
                  className="w-full h-full object-cover object-top filter contrast-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                  <span className="text-[10px] font-mono text-[#9DB290] font-semibold uppercase">
                    FOUNDER & CEO
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#819774] uppercase tracking-wider">
                    FOUNDER & CHIEF EXECUTIVE OFFICER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    {LEADERSHIP_TEAM[0].name}
                  </h3>
                  <p className="text-xs font-mono text-[#9DB290] mt-1">
                    {LEADERSHIP_TEAM[0].credentials}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 mt-4 leading-relaxed">
                    {LEADERSHIP_TEAM[0].bio}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#819774]" />
                      <span>23-Year Navy Special Warfare Veteran</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#819774]" />
                      <span>M.S. Defense Analysis (NPS)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
                  <span>“Solutions through Relationships”</span>
                  <button
                    onClick={() => onNavigate('team')}
                    className="text-[#9DB290] hover:text-white font-semibold flex items-center gap-1"
                  >
                    View All Cadre <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Cadre Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_TEAM.slice(1).map((member, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#14181B] border border-white/10 rounded-lg flex gap-4 items-start"
              >
                <div className="w-20 h-24 sm:w-24 sm:h-28 shrink-0 rounded overflow-hidden bg-[#1A1F23] border border-white/10">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-[#819774] uppercase block">
                    {member.role}
                  </span>
                  <h4 className="text-base font-bold font-heading text-white mt-0.5">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-400 mt-0.5">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 12 — FINAL CTA
          ================================================== */}
      <section className="relative py-24 sm:py-32 bg-[#08090A] border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-boat.jpg"
            alt="Tactical operations"
            className="w-full h-full object-cover brightness-[0.45] contrast-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/75 to-[#08090A]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#819774] block mb-3">
            INITIATE ENGAGEMENT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white uppercase tracking-tight leading-[0.95] mb-6 drop-shadow">
            HAVE A MISSION <br />
            <span className="text-[#9DB290]">TO SOLVE?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed mb-8 drop-shadow">
            Let's discuss how BEI Tactical can support your next requirement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#58694F] hover:bg-[#687C5D] active:bg-[#475540] text-white text-xs font-mono uppercase tracking-widest font-semibold rounded border border-[#819774]/50 shadow-xl shadow-[#58694F]/20 transition-all flex items-center justify-center gap-2"
            >
              <span>CONTACT BEI</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('capabilities')}
              className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 text-white text-xs font-mono uppercase tracking-widest font-medium rounded border border-white/20 backdrop-blur-md transition-all"
            >
              EXPLORE CAPABILITIES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
