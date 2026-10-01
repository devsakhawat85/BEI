import React, { useState } from 'react';
import { PageId } from '../types';
import { TRAINING_PROGRAMS, COMPANY_DETAILS } from '../data/companyData';
import { Shield, CheckCircle2, Award, Users, BookOpen, Wrench, ArrowRight } from 'lucide-react';

interface TrainingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const TrainingView: React.FC<TrainingViewProps> = ({ onNavigate, onOpenCapability }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Seabee & Construction', 'Technical Trades', 'Tactical & Maritime Security', 'Leadership'];

  const filteredPrograms = selectedCategory === 'All'
    ? TRAINING_PROGRAMS
    : TRAINING_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">TRAINING</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            DoD & Seabee Technical Instruction
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            TRAINING THAT PERFORMS IN THE REAL WORLD.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Delivering high-fidelity technical instruction, trade apprenticeships, and combat support curriculum. Designed for U.S. Navy Seabees, Naval Special Warfare, and expeditionary defense forces at our 6,477 sq. ft. Virginia Beach training complex and on-site CONUS locations.
          </p>
        </div>

        {/* Facility & Instructor Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-[#14181B] border border-white/10 rounded flex items-start gap-3">
            <Award className="w-5 h-5 text-[#819774] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Navy NEC 9502 Instructors</h4>
              <p className="text-xs text-gray-400 mt-1">Master Training Specialists and Navy Enlisted Classification qualified instructor cadre.</p>
            </div>
          </div>

          <div className="p-4 bg-[#14181B] border border-white/10 rounded flex items-start gap-3">
            <Wrench className="w-5 h-5 text-[#819774] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">6,477 Sq. Ft. Training Complex</h4>
              <p className="text-xs text-gray-400 mt-1">Full construction bays, electrical troubleshooting simulators, and engine overhaul stations.</p>
            </div>
          </div>

          <div className="p-4 bg-[#14181B] border border-white/10 rounded flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#819774] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">FRTP Inspection Support</h4>
              <p className="text-xs text-gray-400 mt-1">Fleet Readiness Training Plan compliance for Naval Construction Group 1 units.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-gray-500 mr-2 uppercase">Filter By Track:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#58694F] text-white font-semibold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#121517] border border-white/10 rounded-lg overflow-hidden flex flex-col group hover:border-[#819774]/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero-boat.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121517] via-transparent to-black/40"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase bg-black/70 backdrop-blur-sm text-[#9DB290] border border-white/10 px-2.5 py-1 rounded">
                    {program.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#9DB290] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Key Curriculum Elements:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="truncate max-w-[240px]">Audience: {program.audience}</span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-[#9DB290] hover:text-white font-semibold flex items-center gap-1 shrink-0"
                  >
                    Request Syllabus <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-[#14181B] border border-white/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-white">Need Custom Military or Trade Curriculum?</h3>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              BEI Tactical regularly develops tailored programs of instruction (POI), curriculum packages, and mobile training teams (MTT) for commands across CONUS.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#58694F] hover:bg-[#687C5D] text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Discuss Requirements
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
