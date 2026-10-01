import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CapabilityModal } from './components/CapabilityModal';
import { HomeView } from './pages/HomeView';
import { WhoWeAreView } from './pages/WhoWeAreView';
import { CapabilitiesView } from './pages/CapabilitiesView';
import { TrainingView } from './pages/TrainingView';
import { StaffingView } from './pages/StaffingView';
import { VesselLeasingView } from './pages/VesselLeasingView';
import { ProductsView } from './pages/ProductsView';
import { ContractingView } from './pages/ContractingView';
import { TeamView } from './pages/TeamView';
import { ContactView } from './pages/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [capabilityModalOpen, setCapabilityModalOpen] = useState(false);

  // Sync with URL hash for bookmarking and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'capabilities',
        'training',
        'staffing',
        'vessels',
        'products',
        'contracting',
        'team',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title dynamically
    const titleMap: Record<PageId, string> = {
      home: 'BEI Tactical | Defense & Government Solutions | SDVOSB',
      about: 'Who We Are | BEI Tactical | SDVOSB Defense Contractor',
      capabilities: 'Capabilities | BEI Tactical | Integrated Defense Solutions',
      training: 'Military & Seabee Training | BEI Tactical',
      staffing: 'Government Staffing & Instructors | BEI Tactical',
      vessels: 'Vessel Leasing & Maritime Operations | BEI Tactical (USSOCOM IDC)',
      products: 'Tactical & Comms Products | BEI Tactical',
      contracting: 'Government Contracting Profile | CAGE 7JWJ8 | BEI Tactical',
      team: 'Leadership & Cadre | BEI Tactical',
      contact: 'Contact BEI Tactical | Virginia Beach, VA',
    };
    document.title = titleMap[page] || 'BEI Tactical | Defense & Government Solutions';
  };

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#ECEEEA] flex flex-col font-sans selection:bg-[#58694F] selection:text-white">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCapability={() => setCapabilityModalOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <WhoWeAreView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'capabilities' && (
          <CapabilitiesView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'training' && (
          <TrainingView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'staffing' && (
          <StaffingView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'vessels' && (
          <VesselLeasingView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'products' && (
          <ProductsView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'contracting' && (
          <ContractingView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'team' && (
          <TeamView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenCapability={() => setCapabilityModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCapability={() => setCapabilityModalOpen(true)}
      />

      {/* Interactive Official Capability Modal */}
      <CapabilityModal
        isOpen={capabilityModalOpen}
        onClose={() => setCapabilityModalOpen(false)}
      />
    </div>
  );
}
