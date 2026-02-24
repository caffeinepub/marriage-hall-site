import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FacilitiesSection() {
  const facilities = [
    {
      category: 'Venue Features',
      items: [
        'Spacious main hall (up to 500 guests)',
        'Elegant stage with professional lighting',
        'Premium sound system',
        'Bridal suite and dressing rooms',
        'VIP lounge area',
      ],
    },
    {
      category: 'Amenities',
      items: [
        'Modern restroom facilities',
        'Backup power generator',
        'Wheelchair accessible',
      ],
    },
    {
      category: 'Services',
      items: [
        'Professional in-house catering',
        'Event planning assistance',
        'Décor setup and coordination',
        'Valet parking service',
        'Security personnel',
      ],
    },
    {
      category: 'Outdoor Spaces',
      items: [
        'Beautiful entrance courtyard',
        'Garden area for photos',
        'Covered parking for 100+ vehicles',
        'Outdoor lighting',
        'Landscaped surroundings',
      ],
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Facilities & Services</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for a perfect celebration, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{facility.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {facility.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
