import { MapPin, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { BRAND } from '@/constants/brand';

interface SiteFooterProps {
  onAdminClick: () => void;
}

export default function SiteFooter({ onAdminClick }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'avsarvatika-hall');

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <img 
              src="/assets/1_20250905_191701_0000.png" 
              alt="Avsarvatica Party & Benquet Hall"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Creating unforgettable memories for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <SiWhatsapp className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onAdminClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </button>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
