import { UserCheck, Headphones, CalendarCheck, ChefHat } from 'lucide-react';

const specialists = [
  {
    icon: UserCheck,
    name: 'Event Coordinators',
    description:
      'Our experienced event coordinators work closely with you from planning to execution, ensuring every detail is perfect.',
  },
  {
    icon: Headphones,
    name: 'AV Technicians',
    description:
      'Professional audio-visual technicians manage sound, lighting, and multimedia to create the ideal ambiance.',
  },
  {
    icon: CalendarCheck,
    name: 'Wedding Planners',
    description:
      'Dedicated wedding specialists who transform your dream ceremony into a flawless, memorable reality.',
  },
  {
    icon: ChefHat,
    name: 'Culinary Experts',
    description:
      'Skilled chefs and catering specialists craft exquisite menus tailored to your taste and dietary preferences.',
  },
];

export default function SpecialistSection() {
  return (
    <section id="specialist" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Specialist</h2>
          <p className="text-lg text-muted-foreground">
            Behind every successful event at Avsar Vatika is a team of dedicated specialists 
            committed to delivering excellence. Our experts bring years of experience and passion 
            to make your celebration truly extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => {
            const Icon = specialist.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/60 hover:shadow-md transition-all"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{specialist.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{specialist.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
