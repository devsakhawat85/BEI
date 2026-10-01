import React from 'react';
import { PageId } from '../types';
import { LEADERSHIP_TEAM, COMPANY_DETAILS } from '../data/companyData';
import { Shield, Award, CheckCircle2, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

interface TeamViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCapability: () => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate, onOpenCapability }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#819774] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">HOME</button>
          <span>/</span>
          <span className="text-gray-400">TEAM</span>
        </div>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB290] bg-[#58694F]/20 border border-[#58694F]/30 px-3 py-1 rounded">
            Leadership & Cadre
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-4 mb-6">
            LED BY EXPERIENCE. COMMITTED TO EXCELLENCE.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BEI Tactical is anchored by seasoned military special operators, certified master tradesmen, and veteran naval instructors. We combine decades of frontline defense service with corporate acquisition discipline.
          </p>
        </div>
      </div>

      {/* Founder Profile Editorial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#121517] border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[380px] bg-[#161A1D]">
              <img
                src={LEADERSHIP_TEAM[0].imageUrl}
                alt={LEADERSHIP_TEAM[0].name}
                className="w-full h-full object-cover object-top filter contrast-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/scott-chierepko.jpg';
                }}
              />
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm px-3 py-1 rounded border border-white/10">
                <span className="text-xs font-mono text-[#9DB290] font-semibold uppercase">
                  FOUNDER & CEO
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-[#819774] uppercase tracking-wider">
                    EXECUTIVE LEADERSHIP
                  </span>
                </div>
                <h2 className="text-3xl font-bold font-heading text-white">
                  {LEADERSHIP_TEAM[0].name}
                </h2>
                <p className="text-sm font-semibold text-[#9DB290] mt-1 font-mono">
                  {LEADERSHIP_TEAM[0].role}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  {LEADERSHIP_TEAM[0].credentials}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mt-6">
                  {LEADERSHIP_TEAM[0].bio}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                    Key Distinctions:
                  </h4>
                  {LEADERSHIP_TEAM[0].highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#819774] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-xs">
                <span className="font-mono text-gray-400">Direct: {COMPANY_DETAILS.emailScott}</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#9DB290] hover:text-white font-semibold flex items-center gap-1 font-mono"
                >
                  Contact Leadership <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cadre & Team Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-2xl font-bold font-heading text-white mb-6">
          Operational Leadership & Cadre
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_TEAM.slice(1).map((member, idx) => (
            <div
              key={idx}
              className="bg-[#121517] border border-white/10 rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-28 h-36 sm:w-32 sm:h-40 shrink-0 rounded overflow-hidden bg-[#161A1D] border border-white/10">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="flex-1 space-y-2">
                <span className="text-xs font-mono text-[#819774] uppercase tracking-wider block">
                  {member.role}
                </span>
                <h4 className="text-xl font-bold font-heading text-white">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-[#9DB290]">
                  {member.credentials}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
                  {member.bio}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  {member.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#819774] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cadre Standards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-[#819774] uppercase tracking-wider">
            Operational Cadre
          </span>
          <h3 className="text-2xl font-bold font-heading text-white mt-1">
            Our Instructor & Specialist Standards
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Every BEI Tactical trainer brings documented operational pedigree and certified subject matter authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#14181B] border border-white/10 rounded-lg">
            <Award className="w-6 h-6 text-[#819774] mb-3" />
            <h4 className="text-base font-bold font-heading text-white">Navy NEC 9502 Certified</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Qualified as Master Training Specialists and formal Navy instructors equipped to teach to official programs of instruction and curriculum guides.
            </p>
          </div>

          <div className="p-6 bg-[#14181B] border border-white/10 rounded-lg">
            <Shield className="w-6 h-6 text-[#819774] mb-3" />
            <h4 className="text-base font-bold font-heading text-white">SOF & Combat Veteran Pedigree</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Real-world operational perspective across high-risk environments, ensuring students learn practical survivability and mission execution.
            </p>
          </div>

          <div className="p-6 bg-[#14181B] border border-white/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-[#819774] mb-3" />
            <h4 className="text-base font-bold font-heading text-white">Master Licensed Tradesmen</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Industry-credentialed builders, electricians, plumbers, and mechanics with decades of commercial and expeditionary military construction mastery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
