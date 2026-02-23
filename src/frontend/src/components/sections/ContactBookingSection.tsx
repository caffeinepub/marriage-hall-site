import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { BRAND } from '@/constants/brand';
import { Button } from '@/components/ui/button';
import BookingRequestForm from '../BookingRequestForm';

interface ContactBookingSectionProps {
  selectedPackage: string | null;
}

export default function ContactBookingSection({ selectedPackage }: ContactBookingSectionProps) {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about booking your marriage hall for an event.');
    window.open(`https://wa.me/919119960204?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to book your celebration? Fill out the form below or contact us directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href={`https://wa.me/919119960204`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${BRAND.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">{BRAND.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground">Mon-Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <Button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  size="lg"
                >
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingRequestForm selectedPackage={selectedPackage} />
          </div>
        </div>
      </div>
    </section>
  );
}
