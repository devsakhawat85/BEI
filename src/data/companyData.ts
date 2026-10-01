import { CapabilityItem, TrainingCategory, VesselCapability, TacticalProduct, NaicsCode, LeadershipMember } from '../types';

export const COMPANY_DETAILS = {
  name: 'BEI Tactical',
  legalName: 'BEI Tactical, LLC',
  tagline: 'Built for the Mission. Ready for the Challenge.',
  subtagline: 'Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering specialized technical training, maritime vessel leasing, cleared staffing, and tactical solutions.',
  philosophy: 'Solutions through Relationships',
  cage: '7JWJ8',
  uei: 'KTKXQJNG3JQ3',
  secondaryUei: 'CNN9RHZW7C18',
  businessType: 'Service-Disabled Veteran-Owned Small Business (SDVOSB)',
  foundedYear: '2015',
  headquarters: '572 Central Drive, Suite 104, Virginia Beach, VA 23454',
  facilitySize: '6,477 sq. ft. Training Facility & Corporate Headquarters',
  facilityLocation: 'Virginia Beach, VA (Minutes from JEB Little Creek-Fort Story & Naval Station Norfolk)',
  phonePrimary: '(757) 685-1915',
  phoneSecondary: '(757) 343-4476',
  emailScott: 'scott@beitactical.com',
  emailTravis: 'travis@beitactical.com',
  website: 'https://beitactical.com',
};

export const STATS_STRIP = [
  { label: 'SBA DESIGNATION', value: 'SDVOSB', detail: 'Service-Disabled Veteran-Owned' },
  { label: 'CAGE CODE', value: '7JWJ8', detail: 'SAM.gov Registered & Active' },
  { label: 'TRAINING COMPLEX', value: '6,477 SQ FT', detail: 'Virginia Beach Facility' },
  { label: 'DEFENSE CUSTOMERS', value: 'USSOCOM & DoD', detail: 'Prime & Subcontract Vehicles' },
  { label: 'STRATEGIC HUB', value: 'HAMPTON ROADS', detail: 'Adjacent to Naval Station Norfolk' },
];

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'military-seabee-training',
    number: '01',
    title: 'MILITARY & SEABEE TRAINING',
    shortDesc: 'Comprehensive Seabee Tech Trainer instruction, MLO procedures, technical construction trades, and fleet readiness training.',
    fullDesc: 'BEI Tactical delivers specialized technical instruction to U.S. Navy Seabees, Naval Construction Group 1 (NCG 1), and defense personnel. From Material Liaison Office (MLO) operations and inventory management to trade apprenticeships in carpentry, electrical, plumbing, and small engine repair, our qualified instructors (NEC 9502) ensure mission readiness in expeditionary environments.',
    keyFeatures: [
      'Seabee Project Management Program & MLO Procedures',
      'Naval Construction Group 1 (NCG 1) Tech Trainer Support',
      'Expeditionary Trades: Carpentry, Electrical, Plumbing & Small Engines',
      'Fleet Readiness Training Plan (FRTP) Inspection Support',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    linkPage: 'training',
  },
  {
    id: 'government-staffing',
    number: '02',
    title: 'GOVERNMENT STAFFING',
    shortDesc: 'Cleared subject matter experts, certified Navy instructors (NEC 9502), and technical trade specialists for defense agencies.',
    fullDesc: 'We supply high-caliber, mission-ready professionals who integrate seamlessly into federal and military operations. Our roster features retired Special Operations Forces, certified master tradesmen, instructional system designers, and logistics coordinators with active security clearances and deep institutional knowledge.',
    keyFeatures: [
      'Navy NEC 9502 Certified Instructors',
      'Specialized Tradesmen & Expeditionary Engineers',
      'Material Liaison & Warehouse Inventory Managers',
      'Antiterrorism & Tactical Security Cadres',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    linkPage: 'staffing',
  },
  {
    id: 'tactical-products',
    number: '03',
    title: 'TACTICAL / COMMUNICATIONS PRODUCTS',
    shortDesc: 'Mission-grade ballistic protection, tactical apparel, and advanced communication equipment engineered for rigorous field operations.',
    fullDesc: 'BEI Tactical procures and integrates top-tier tactical gear and secure communication equipment for military units, federal law enforcement, and municipal first responders. Every product line meets rigid DoD testing specifications to withstand maritime, desert, and contested operational environments.',
    keyFeatures: [
      'Field-Tested Ballistic Armor & Protective Gear',
      'Expeditionary & Tactical High-Performance Apparel',
      'Advanced Tactical Communications & Intercom Systems',
      'Rapid Deployment Equipment Packages',
    ],
    imageUrl: '/klas-product.jpg',
    linkPage: 'products',
  },
  {
    id: 'vessel-leasing',
    number: '04',
    title: 'VESSEL LEASING',
    shortDesc: 'Crewed and bareboat maritime lease solutions supporting USSOCOM, Navy fleet exercises, and tactical waterborne training.',
    fullDesc: 'Holding a $1M prime single-award IDC with USSOCOM and multiple-award BPAs for crewed vessels, BEI Tactical provides flexible, mission-ready maritime platforms. Whether for interdiction exercises, open-ocean navigation, tactical boarding, or logistics support, our vessels and licensed crews meet strict naval operating standards.',
    keyFeatures: [
      'USSOCOM $1M Single-Award IDC Vessel Lease Contractor',
      '$750K Crewed Vessel Leasing Blanket Purchase Agreement',
      'Bareboat & Fully Crewed Tactical Charter Options',
      'Specialized Platforms for Maritime Security & NSW Exercises',
    ],
    imageUrl: '/hero-boat.jpg',
    linkPage: 'vessels',
  },
  {
    id: 'government-contracting',
    number: '05',
    title: 'GOVERNMENT CONTRACTING',
    shortDesc: 'Streamlined procurement under SDVOSB sole-source and competitive vehicles with proven past performance across DoD agencies.',
    fullDesc: 'Registered under CAGE 7JWJ8 and UEI KTKXQJNG3JQ3, BEI Tactical is an experienced prime contractor and trusted teaming partner. Contracting officers can leverage streamlined SDVOSB set-asides and sole-source thresholds to rapidly fulfill urgent operational requirements.',
    keyFeatures: [
      'Active CAGE 7JWJ8 & SAM.gov Registration',
      'SDVOSB Sole-Source Authority (FAR 19.1406)',
      'Primary NAICS 611699, 541330, 483114, 611513',
      'Experienced Prime & Joint-Venture Teaming Partner',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    linkPage: 'contracting',
  },
];

export const TRAINING_PROGRAMS: TrainingCategory[] = [
  {
    id: 'mlo-seabee',
    title: 'Material Liaison Office (MLO) & Seabee Project Management',
    category: 'Seabee & Construction',
    description: 'Specialized training for Naval Construction Force units in MLO procedures, warehouse and inventory control, construction management, and material tracking under expeditionary conditions.',
    highlights: [
      'Seabee Project Management System integration',
      'Expeditionary inventory tracking and warehouse operations',
      'Naval Construction Group 1 (NCG 1) Tech Trainer alignment',
      'Fleet Readiness Training Plan (FRTP) inspection prep',
    ],
    audience: 'U.S. Navy Seabees (NMCB), Naval Construction Regiments, Expeditionary Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'carpentry-framing',
    title: 'Expeditionary Carpentry & Structural Framing',
    category: 'Technical Trades',
    description: 'Hands-on construction trade instruction covering wood and metal stud framing, roofing, interior finishes, and rapid-assembly shelter systems for forward operating bases.',
    highlights: [
      'Blueprint reading, load calculation, and structural safety',
      'Rough and finish carpentry with commercial-grade tools',
      'Rapid deployment field shelter fabrication',
      'Quality control and military building code compliance',
    ],
    audience: 'Builder (BU) ratings, Military Engineers, Facilities Personnel',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical-systems',
    title: 'Electrical Distribution & Power Systems',
    category: 'Technical Trades',
    description: 'Comprehensive electrical instruction from primary distribution and generator integration to interior wiring, panel load balancing, and emergency power restoration.',
    highlights: [
      'Single and 3-phase power distribution circuits',
      'Generator synchronization, grounding, and transfer switches',
      'National Electrical Code (NEC) standards and troubleshooting',
      'Expeditionary power grid safety and maintenance',
    ],
    audience: 'Construction Electrician (CE) ratings, Base Operations Technicians',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plumbing-utilities',
    title: 'Plumbing & Pipefitting Systems',
    category: 'Technical Trades',
    description: 'Sanitary, potable water, drainage, and waste management system design, installation, and field repair for austere operating environments.',
    highlights: [
      'Water purification line piping and pressurized distribution',
      'Waste drainage, venting, and field sanitary systems',
      'Pipe fitting, soldering, and thermoplastic welding',
      'Cold-weather and contested environment line maintenance',
    ],
    audience: 'Utilitiesman (UT) ratings, Civil Engineering Personnel',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'engine-repair',
    title: 'Small Engine & Tactical Equipment Maintenance',
    category: 'Technical Trades',
    description: 'Diagnosing, overhauling, and repairing 2-stroke and 4-stroke small combustion engines, tactical generators, pumps, hydraulic systems, and pneumatic tools.',
    highlights: [
      'Fuel system diagnostics, carburetors, and fuel injection',
      'Ignition, electrical starter, and governor calibration',
      'Hydraulic power unit and pump system troubleshooting',
      'Preventive maintenance schedules in sand/saline environments',
    ],
    audience: 'Construction Mechanic (CM) ratings, Support Equipment Mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'antiterrorism-security',
    title: 'Antiterrorism Leadership & Tactical Security Tactics',
    category: 'Leadership',
    description: 'Curriculum development and instructional support for the Naval Education and Training Command and CENSECFOR, focusing on antiterrorism officer leadership, base security, and threat escalation.',
    highlights: [
      'Antiterrorism Officer (ATO) curriculum design & delivery',
      'Force protection conditions (FPCON) application',
      'Rules of engagement & escalation of force protocols',
      'Tactical convoy operations & ground security dynamics',
    ],
    audience: 'Antiterrorism Officers, Security Force Cadres, Federal Agents',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'maritime-convoy',
    title: 'Tactical Convoy & Maritime Security Tactics',
    category: 'Tactical & Maritime Security',
    description: 'Dynamic tactical convoy instruction, vehicle hardening, high-threat driving, escort procedures, and coastal waterborne security tactics.',
    highlights: [
      'Urban and rural convoy counter-ambush drills',
      'Vehicle recovery, communication discipline, and casualty care',
      'Tactical boat operations and perimeter security',
      'Joint maritime-to-shore integration exercises',
    ],
    audience: 'Naval Special Warfare units, First Responders, Military Police',
    imageUrl: '/hero-boat.jpg',
  },
];

export const VESSEL_FLEET: VesselCapability[] = [
  {
    id: 'tactical-support-vessels',
    category: 'Tactical Platforms',
    title: 'Tactical Support & High-Speed Intercept Craft',
    description: 'High-speed, ruggedized vessels configured for Special Operations training, waterborne insertion/extraction, and fleet surveillance exercises in coastal and inland waterways.',
    specs: [
      { label: 'Length Range', value: '28 – 45 Feet' },
      { label: 'Charter Options', value: 'Crewed (Licensed Captains) or Bareboat' },
      { label: 'Propulsion', value: 'Twin/Triple High-Output Outboards or Diesel Jets' },
      { label: 'Contract Coverage', value: 'USSOCOM IDC & BPA Prime Vehicle' },
    ],
    useCases: [
      'Naval Special Warfare & SEAL tactical exercise support',
      'Waterborne casualty evacuation and troop transport',
      'Fast-attack craft simulation and opposing force (OPFOR) roles',
      'Communications relay and electronic sensor testing',
    ],
    imageUrl: '/hero-boat.jpg',
  },
  {
    id: 'crewed-offshore-workboats',
    category: 'Maritime Operations',
    title: 'Offshore Support & Range Safety Workboats',
    description: 'Stable, deep-draft ocean-going platforms equipped for extended endurance, dive support, live-fire range clearing, and heavy equipment towing.',
    specs: [
      { label: 'Length Range', value: '45 – 110 Feet' },
      { label: 'Endurance', value: 'Extended multi-day coastal/offshore operations' },
      { label: 'Crewing', value: 'USCG-licensed master, marine engineer, deckhands' },
      { label: 'Equipment', value: 'Hydraulic cranes, heavy tow bits, dive ladders' },
    ],
    useCases: [
      'DoD offshore weapon test range containment & security',
      'Military dive training & underwater recovery operations',
      'Target deployment, towing, and telemetry retrieval',
      'Inter-facility equipment transfer across Hampton Roads waters',
    ],
    imageUrl: '/container-vessel.jpg',
  },
];

export const TACTICAL_PRODUCTS: TacticalProduct[] = [
  {
    id: 'comms-systems',
    category: 'Secure Communications',
    title: 'Klas Telecom & Tactical Deployable Communications',
    tagline: 'High-reliability, deployable networking and tactical communications modules.',
    description: 'Ruggedized tactical data packages, Klas Telecom deployable hardware, integrated intercoms, and secure radio interfaces designed for mobile headquarters and maritime command boats.',
    specifications: [
      'Ruggedized MIL-STD-810H environmental casing',
      'Klas Telecom modular chassis integration',
      'Interoperable with PRC-152, PRC-148, and tactical IP networks',
      'Fast-deployable power management for mobile field nodes',
    ],
    standards: 'MIL-STD-810G Environmental & MIL-STD-461F EMI/RFI',
    imageUrl: '/klas-product.jpg',
  },
  {
    id: 'ballistic-protection',
    category: 'Armor & Personal Defense',
    title: 'Modular Ballistic Protection Systems',
    tagline: 'NIJ-Certified multi-threat protection engineered for mobility and austere field resilience.',
    description: 'Lightweight ceramic and composite armor plates, scalable plate carriers, and ballistic helmets tailored for military, maritime boarding teams, and tactical law enforcement.',
    specifications: [
      'NIJ Level III, III+, and Level IV Stand-Alone ceramic options',
      'Quick-release emergency egress cable system for maritime operations',
      'Laser-cut lightweight hydrophobic Cordura materials',
      'Ergonomic multi-curve profile for unrestricted weapon handling',
    ],
    standards: 'NIJ Standard-0101.06 & Military Specification Compliant',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tactical-apparel',
    category: 'Protective Apparel',
    title: 'Expeditionary Mission & Tactical Apparel',
    tagline: 'Flame-resistant, moisture-wicking combat garments built for harsh environments.',
    description: 'High-durability uniforms, all-weather outer shells, and thermal management apparel designed for operators enduring extreme moisture, abrasion, and thermal threats.',
    specifications: [
      'No-Melt / No-Drip Ripstop and Cordura NyCo fabric blends',
      'Articulated knee and elbow reinforcement with pad pockets',
      'IR-reducing NIR compliant textile treatments',
      'Low-profile tactical cargo configurations',
    ],
    standards: 'Berry Amendment & MIL-SPEC compliant options',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
  },
];

export const NAICS_CODES: NaicsCode[] = [
  {
    code: '611699',
    title: 'All Other Miscellaneous Schools and Instruction',
    isPrimary: true,
    description: 'Primary code covering Seabee trade instruction, tactical training, MLO coursework, and antiterrorism instruction.',
  },
  {
    code: '541330',
    title: 'Engineering Services',
    description: 'Technical engineering consultation, curriculum design, and construction planning support for defense projects.',
  },
  {
    code: '483114',
    title: 'Coastal and Great Lakes Passenger Transportation',
    description: 'Crewed and bareboat vessel leasing, waterborne personnel transport, and maritime operational training platforms.',
  },
  {
    code: '611513',
    title: 'Apprenticeship Training',
    description: 'Vocational trade apprenticeships in carpentry, plumbing, electrical, and small engine mechanical trades.',
  },
  {
    code: '611430',
    title: 'Professional and Management Development Training',
    description: 'Leadership development, antiterrorism officer instruction, and mission management programs.',
  },
  {
    code: '561210',
    title: 'Facilities Support Services',
    description: 'Warehouse inventory management, material liaison operations, and training facility maintenance.',
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Scott Chierepko',
    role: 'Founder & Chief Executive Officer',
    credentials: 'Retired U.S. Navy Officer • 23 Years Naval Service • M.S. Defense Analysis (NPS)',
    bio: 'A retired Navy Officer & long time Virginia Beach resident. Scott founded BEI Tactical after 23 years of naval service and four years working for a major corporation. Under his leadership, BEI Tactical grew into a niche defense contracting enterprise with real estate, specialized training facilities, and maritime vessels operating on the philosophy of "Solutions through Relationships."',
    highlights: [
      '23-Year Decorated Navy SEAL & Naval Officer Career',
      'Master of Science in Defense Analysis (Naval Postgraduate School)',
      'USSOCOM & DoD Prime Contract Leadership',
      'Lifelong Virginia Beach Resident & Maritime Operations Leader',
    ],
    imageUrl: '/scott-chierepko.jpg',
  },
  {
    name: 'Todd Bernashe',
    role: 'Business Development',
    credentials: 'Retired NECC Operations Master Chief • U.S. Navy Seabee • VA Class A Building License',
    bio: 'Todd joined the Navy Seabees in 1994 and retired in 2019 as the Naval Expeditionary Combat Command (NECC) Operations Master Chief and Senior Enlisted Advisor. He holds a Virginia Class A Commercial Building License and leads business development and technical trade training integration.',
    highlights: [
      'Retired NECC Operations Master Chief & Senior Enlisted Advisor',
      '25 Years Navy Seabee Expeditionary Construction Service',
      'Virginia Class A Commercial Building License',
      'Seabee Tech Trainer & Trade Curriculum Specialist',
    ],
    imageUrl: '/todd.jpg',
  },
  {
    name: 'Craig Rosenburg',
    role: 'Instructor — Small Engine Repair',
    credentials: 'Master Mechanic • 40+ Years Engine Diagnostic & Mechanical Experience',
    bio: 'Craig has worked as a master mechanic for over 40+ years. When teaching Small Engine Repair for BEI Tactical, all class graduates master his three foundational principles in diagnosing and overhauling expeditionary equipment: "fuel, spark, and compression."',
    highlights: [
      'Over 40 Years of Master Mechanical Repair Experience',
      'Hands-On 2-Stroke & 4-Stroke Small Engine Overhaul',
      'Expeditionary Generator, Pump, and Hydraulic Troubleshooting',
      'Student-Praised "Fuel, Spark & Compression" Practical Instruction',
    ],
    imageUrl: '/craig.jpg',
  },
];

export const WHY_BEI_PILLARS = [
  {
    title: 'SOF & Navy SEAL Heritage',
    desc: 'Founded and directed by a retired 23-year Navy SEAL officer, BEI Tactical brings unmatched operational discipline, high-stakes problem solving, and firsthand insight into warfighter requirements.',
  },
  {
    title: 'Dual Trade & Operational Mastery',
    desc: 'We bridge tactical military doctrine with accredited industrial trades—delivering certified Seabee construction, electrical, mechanical, and maritime capabilities under a single trusted entity.',
  },
  {
    title: '"Solutions Through Relationships"',
    desc: 'Our corporate philosophy is rooted in long-term partnership with contracting officers, commands, and trade personnel. We listen, adapt quickly, and take complete ownership of outcomes.',
  },
  {
    title: 'Strategic Hampton Roads Footprint',
    desc: 'Our 6,477 sq. ft. Virginia Beach headquarters and training complex is situated minutes from JEB Little Creek-Fort Story and Naval Station Norfolk, ensuring immediate on-site responsiveness.',
  },
];
