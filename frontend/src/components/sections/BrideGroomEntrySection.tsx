import React from 'react';
import { Flower2, Crown, CloudSnow } from 'lucide-react';

const entryStyles = [
  {
    icon: Flower2,
    title: 'Grand Floral Entry',
    description:
      'Walk through a breathtaking tunnel of fresh flowers and petals, creating a magical and fragrant entrance that sets the tone for your special day.',
    highlight: 'Fresh Flowers',
  },
  {
    icon: Crown,
    title: 'Royal Chariot Entry',
    description:
      'Arrive in regal style aboard a beautifully decorated chariot, making a grand statement that your guests will remember for years to come.',
    highlight: 'Royal Style',
  },
  {
    icon: CloudSnow,
    title: 'Fog / Smoke Effect',
    description:
      'Create a dreamy, ethereal atmosphere with professional fog and smoke effects that transform your entrance into a cinematic, fairy-tale moment.',
    highlight: 'Dreamy Ambiance',
  },
];

export default function BrideGroomEntrySection() {
  return (
    <section id="bride-groom-entry" className="py-20 bg-background">
      {/* Section header */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/30">
          Special Moments
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
          Bride &amp; Groom Entry Styles
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Make your entrance unforgettable with our exclusive entry packages designed to create
          magical, once-in-a-lifetime moments.
        </p>
      </div>

      {/* Cards grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entryStyles.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary/70 mb-1">
                    {entry.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-foreground font-serif mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
