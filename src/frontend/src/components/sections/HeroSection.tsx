import { ArrowRight, Users, Car, Wind, UtensilsCrossed, Sparkles, Calendar } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/constants/brand';

export default function HeroSection() {
  const highlights = [
    { icon: Users, label: 'Capacity up to 700 guests' },
    { icon: Car, label: 'Ample parking space' },
    { icon: Wind, label: 'Fully air-conditioned' },
    { icon: UtensilsCrossed, label: 'In-house catering' },
    { icon: Sparkles, label: 'Elegant décor options' },
    { icon: Calendar, label: 'Flexible booking' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about booking your marriage hall for an event.');
    window.open(`https://wa.me/919119960204?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/file_0000000095146243a4d78766e9007d41.png"
          alt="Avsarvatika marriage hall Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {BRAND.name}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            {BRAND.tagline}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Create unforgettable memories in our stunning venue. From intimate gatherings to grand celebrations, we provide the perfect setting for your special day.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{highlight.label}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppBooking}
              className="text-base bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Book via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('gallery')}
              className="text-base"
            >
              View Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
