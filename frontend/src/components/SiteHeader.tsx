import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { BRAND } from '@/constants/brand';

interface SiteHeaderProps {
  onAdminClick: () => void;
}

export default function SiteHeader({ onAdminClick }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Banquet', href: '#banquet' },
    { label: 'Specialist', href: '#specialist' },
    { label: 'Bride & Groom Entry', href: '#bride-groom-entry' },
    { label: 'Decor', href: '#decor' },
    { label: 'Event', href: '#event' },
    { label: 'Seminar & Conference', href: '#seminar-conference' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-lg text-primary-foreground tracking-wide">
            {BRAND.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary border-primary/30">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 border-b border-primary-foreground/10"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
