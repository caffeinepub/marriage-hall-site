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
    { label: 'About Us', href: '#about' },
    { label: 'Our Banquet', href: '#banquet' },
    { label: 'Specialist', href: '#specialist' },
    { label: 'Decor', href: '#decor' },
    { label: 'Event', href: '#event' },
    { label: 'Seminar & Conference', href: '#seminar-conference' },
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
    <footer className="bg-primary text-primary-foreground border-t border-primary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="inline-block rounded-lg p-1 mb-4" style={{ background: 'oklch(0.75 0.10 145 / 0.25)' }}>
              <img
                src="/assets/1_20250905_191701_0000.png"
                alt="Avsarvatica Party & Benquet Hall"
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(70deg) brightness(1.4)' }}
              />
            </div>
            <p className="text-sm text-primary-foreground/70">
              Creating unforgettable memories for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary-foreground/60 flex-shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <SiWhatsapp className="h-4 w-4 text-green-300 flex-shrink-0" />
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp 1: {BRAND.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <SiWhatsapp className="h-4 w-4 text-green-300 flex-shrink-0" />
                <a
                  href={`https://wa.me/${BRAND.whatsappSecondary.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp 2: +91 {BRAND.whatsappSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary-foreground/60 flex-shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onAdminClick}
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Admin
            </button>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              Built with <Heart className="h-3 w-3 text-green-300 fill-green-300 mx-1" /> using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
