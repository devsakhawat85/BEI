export type PageId =
  | 'home'
  | 'about'
  | 'capabilities'
  | 'training'
  | 'staffing'
  | 'vessels'
  | 'products'
  | 'contracting'
  | 'team'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  imageUrl: string;
  linkPage: PageId;
}

export interface TrainingCategory {
  id: string;
  title: string;
  category: 'Seabee & Construction' | 'Technical Trades' | 'Tactical & Maritime Security' | 'Leadership';
  description: string;
  highlights: string[];
  audience: string;
  imageUrl: string;
}

export interface VesselCapability {
  id: string;
  category: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  useCases: string[];
  imageUrl: string;
}

export interface TacticalProduct {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  specifications: string[];
  standards: string;
  imageUrl: string;
}

export interface NaicsCode {
  code: string;
  title: string;
  isPrimary?: boolean;
  description: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  highlights: string[];
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  title?: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  procurementType?: string;
}
