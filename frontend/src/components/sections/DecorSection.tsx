import { Flower2, Palette, Layers, Star } from 'lucide-react';

const decorThemes = [
  {
    icon: Flower2,
    title: 'Floral Elegance',
    description: 'Lush floral arrangements and garlands that bring natural beauty and fragrance to your celebration.',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description: 'Fully customizable color palettes and themes tailored to match your vision and personal style.',
  },
  {
    icon: Layers,
    title: 'Stage & Mandap',
    description: 'Stunning stage setups and mandap designs crafted with intricate detailing for a royal look.',
  },
  {
    icon: Star,
    title: 'Lighting Design',
    description: 'Ambient and decorative lighting solutions that transform the venue into a magical setting.',
  },
];

export default function DecorSection() {
  return (
    <section id="decor" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Decoration Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Decor</h2>
          <p className="text-lg text-muted-foreground">
            Transform your event into a visual masterpiece with our expert decoration services. 
            From traditional floral setups to contemporary themed décor, we bring your dream 
            aesthetic to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {decorThemes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden p-8 rounded-2xl bg-secondary/30 border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full" />
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{theme.title}</h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-lg font-medium text-foreground mb-2">
            Every decoration is crafted with love and attention to detail
          </p>
          <p className="text-muted-foreground">
            Our in-house decoration team works with you to create a setting that perfectly reflects your style and occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
