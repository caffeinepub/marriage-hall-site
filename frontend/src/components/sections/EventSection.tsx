import { Heart, PartyPopper, Gift, Camera } from 'lucide-react';

const eventTypes = [
  {
    icon: Heart,
    title: 'Weddings & Receptions',
    description: 'Create the wedding of your dreams with our comprehensive wedding packages and dedicated support team.',
    badge: 'Most Popular',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Celebrations',
    description: 'Make every birthday milestone unforgettable with customized themes, décor, and catering.',
    badge: null,
  },
  {
    icon: Gift,
    title: 'Engagement Ceremonies',
    description: 'Celebrate the beginning of a beautiful journey with an elegant and intimate engagement event.',
    badge: null,
  },
  {
    icon: Camera,
    title: 'Anniversary Parties',
    description: 'Honor your special milestones with a beautifully arranged anniversary celebration.',
    badge: null,
  },
];

export default function EventSection() {
  return (
    <section id="event" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Host
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Event</h2>
          <p className="text-lg text-muted-foreground">
            Avsar Vatika is the perfect venue for every occasion. Whether it's an intimate gathering 
            or a grand celebration, we provide the ideal setting, services, and support to make 
            your event a resounding success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="relative flex items-start gap-5 p-7 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all"
              >
                {event.badge && (
                  <span className="absolute top-4 right-4 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {event.badge}
                  </span>
                )}
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
