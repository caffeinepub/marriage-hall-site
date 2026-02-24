import { Award, Heart, Shield, Star } from 'lucide-react';
import { BRAND } from '@/constants/brand';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Over 15 years of experience hosting memorable events',
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Dedicated team to make your vision come to life',
    },
    {
      icon: Shield,
      title: 'Trusted Venue',
      description: 'Hundreds of successful events and happy clients',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Top-notch facilities and attention to detail',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Our Hall</h2>
          <p className="text-lg text-muted-foreground">
            {BRAND.name} is more than just a venue—it's where your dreams take shape. 
            Our elegant space combines timeless architecture with modern amenities, creating 
            the perfect backdrop for weddings, receptions, and special celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-primary/20 hover:border-primary/60 transition-colors shadow-sm"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
