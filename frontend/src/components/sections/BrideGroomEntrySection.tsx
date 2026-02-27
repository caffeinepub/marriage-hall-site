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
    <section
      id="bride-groom-entry"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(/assets/generated/section3-bg.dim_1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 container mx-auto px-4 mb-16 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4 border border-white/40 backdrop-blur-sm">
          Special Moments
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif drop-shadow-lg">
          Bride &amp; Groom Entry Styles
        </h2>
        <p className="text-white/85 max-w-2xl mx-auto text-base md:text-lg drop-shadow">
          Make your entrance unforgettable with our exclusive entry packages designed to create
          magical, once-in-a-lifetime moments.
        </p>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entryStyles.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    {entry.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
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
