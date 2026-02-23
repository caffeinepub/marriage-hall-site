import { Check, Sparkles } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PackagesSectionProps {
  onPackageSelect: (packageName: string) => void;
}

export default function PackagesSection({ onPackageSelect }: PackagesSectionProps) {
  const packages = [
    {
      name: 'Classic',
      description: 'Perfect for intimate celebrations',
      price: '₹35,000',
      features: [
        'Hall rental for 6 hours',
        'Seating for up to 150 guests',
        'Basic stage setup',
        'Standard sound system',
        'Tables and chairs',
        'Basic lighting',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      description: 'Our most popular choice',
      price: '₹50,000',
      features: [
        'Hall rental for 8 hours',
        'Seating for up to 300 guests',
        'Decorated stage with backdrop',
        'Premium sound & lighting',
        'Tables, chairs & linens',
        'Bridal suite access',
        'Event coordinator',
        'Complimentary parking',
      ],
      popular: true,
    },
    {
      name: 'Luxury',
      description: 'The ultimate celebration experience',
      price: '₹70,000',
      features: [
        'Hall rental for 10 hours',
        'Seating for up to 500 guests',
        'Custom stage & décor',
        'Professional AV system',
        'Premium furniture & linens',
        'VIP lounge access',
        'Dedicated event team',
        'Valet parking service',
        'Red carpet entrance',
        'Complimentary champagne toast',
      ],
      popular: false,
    },
  ];

  const handleWhatsAppInquiry = (packageName: string) => {
    const message = encodeURIComponent(`Hello! I would like to inquire about the ${packageName} package for my event.`);
    window.open(`https://wa.me/919119960204?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Packages & Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your celebration. All packages can be customized to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  className="w-full"
                  variant={pkg.popular ? 'default' : 'outline'}
                  onClick={() => onPackageSelect(pkg.name)}
                >
                  Inquire About {pkg.name}
                </Button>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  onClick={() => handleWhatsAppInquiry(pkg.name)}
                >
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom package? <button
              onClick={() => onPackageSelect('Custom')}
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </button> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
