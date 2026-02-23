import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND } from '@/constants/brand';

interface SiteFooterProps {
  onAdminClick: () => void;
}

export default function SiteFooter({ onAdminClick }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'marriage-hall');

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BRAND.name}</h3>
            <p className="text-sm text-muted-foreground">
              {BRAND.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href={`https://wa.me/919119960204`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{BRAND.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => {
                  const element = document.querySelector('#about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#packages');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Packages
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#gallery');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={onAdminClick}
                className="block text-muted-foreground hover:text-foreground transition-colors text-xs"
              >
                Admin
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-rose-500 fill-rose-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
