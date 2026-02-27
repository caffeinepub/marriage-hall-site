import { Phone, Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { BRAND } from '@/constants/brand';
import BookingRequestForm from '../BookingRequestForm';

interface ContactBookingSectionProps {
  selectedPackage?: string | null;
}

export default function ContactBookingSection({ selectedPackage }: ContactBookingSectionProps) {
  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent('Hello! I would like to inquire about booking your venue.');
    window.open(`https://wa.me/${number.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact & Booking</h2>
          <p className="text-lg text-muted-foreground">
            Ready to make your event unforgettable? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-primary/20">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-primary/20">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-primary/20">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{BRAND.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsApp(BRAND.whatsapp)}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-semibold text-lg transition-colors shadow-lg"
              >
                <SiWhatsapp className="h-6 w-6" />
                WhatsApp: {BRAND.whatsapp}
              </button>
              <button
                onClick={() => handleWhatsApp(`91${BRAND.whatsappSecondary}`)}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-semibold text-lg transition-colors shadow-lg"
              >
                <SiWhatsapp className="h-6 w-6" />
                WhatsApp: +91 {BRAND.whatsappSecondary}
              </button>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <BookingRequestForm selectedPackage={selectedPackage} />
          </div>
        </div>
      </div>
    </section>
  );
}
