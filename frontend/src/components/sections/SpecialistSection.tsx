import { UserCheck, CalendarCheck, ChefHat } from 'lucide-react';

const specialists = [
  {
    icon: UserCheck,
    name: 'Event Coordinators',
    description:
      'Our experienced event coordinators work closely with you from planning to execution, ensuring every detail is perfect.',
    showImage: false,
  },
  {
    icon: CalendarCheck,
    name: 'Wedding Planners',
    description:
      'Dedicated wedding specialists who transform your dream ceremony into a flawless, memorable reality.',
    showImage: false,
  },
  {
    icon: ChefHat,
    name: 'Culinary Experts',
    description:
      'Skilled chefs and catering specialists craft exquisite menus tailored to your taste and dietary preferences.',
    showImage: true,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => {
            const Icon = specialist.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl bg-card border border-primary/20 hover:border-primary/60 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Card image — only shown for cards with showImage: true */}
                {specialist.showImage && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="/assets/generated/specialist-card-bg.dim_600x400.jpg"
                      alt={specialist.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                {/* Card content */}
                <div className="p-6 flex flex-col items-center">
                  <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 ${specialist.showImage ? '-mt-10 relative z-10 border-2 border-card shadow' : ''}`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{specialist.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{specialist.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
