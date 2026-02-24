import { Users, Utensils, Music, Sparkles } from 'lucide-react';

export default function BanquetSection() {
  const features = [
    {
      icon: Users,
      title: 'Grand Capacity',
      description: 'Spacious hall accommodating up to 1000+ guests with comfortable seating arrangements.',
    },
    {
      icon: Utensils,
      title: 'Catering Excellence',
      description: 'Exquisite multi-cuisine catering with customizable menus for every palate.',
    },
    {
      icon: Music,
      title: 'Premium Sound & Light',
      description: 'State-of-the-art audio-visual systems and professional lighting setups.',
    },
    {
      icon: Sparkles,
      title: 'Elegant Ambiance',
      description: 'Beautifully designed interiors that create a warm and celebratory atmosphere.',
    },
  ];

  return (
    <section id="banquet" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Venue
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Banquet</h2>
          <p className="text-lg text-muted-foreground">
            Avsar Vatika's banquet hall is a magnificent space designed to host grand celebrations. 
            With its elegant décor, modern amenities, and impeccable service, it sets the perfect 
            stage for weddings, receptions, and all your cherished events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-xl bg-secondary/30 border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '1000+', label: 'Guest Capacity' },
            { value: '15+', label: 'Years of Service' },
            { value: '500+', label: 'Events Hosted' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
