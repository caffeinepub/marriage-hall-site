import { useState } from 'react';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile, useIsCallerAdmin } from './hooks/useQueries';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FacilitiesSection from './components/sections/FacilitiesSection';
import PackagesSection from './components/sections/PackagesSection';
import GallerySection from './components/sections/GallerySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactBookingSection from './components/sections/ContactBookingSection';
import AdminRequestsView from './components/admin/AdminRequestsView';
import ProfileSetupDialog from './components/auth/ProfileSetupDialog';

export default function App() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const { data: isAdmin, isLoading: adminLoading } = useIsCallerAdmin();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'public' | 'admin'>('public');

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const handleAdminClick = () => {
    setViewMode('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPublic = () => {
    setViewMode('public');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show admin view if user is authenticated, admin, and in admin mode
  if (viewMode === 'admin') {
    return (
      <div className="min-h-screen bg-background">
        <ProfileSetupDialog open={showProfileSetup} />
        <div className="border-b border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <button
                onClick={handleBackToPublic}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Website
              </button>
            </div>
          </div>
        </div>
        <main className="container mx-auto px-4 py-8">
          <AdminRequestsView />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProfileSetupDialog open={showProfileSetup} />
      <SiteHeader onAdminClick={handleAdminClick} />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <PackagesSection onPackageSelect={handlePackageSelect} />
        <GallerySection />
        <TestimonialsSection />
        <ContactBookingSection selectedPackage={selectedPackage} />
      </main>
      <SiteFooter onAdminClick={handleAdminClick} />
    </div>
  );
}
