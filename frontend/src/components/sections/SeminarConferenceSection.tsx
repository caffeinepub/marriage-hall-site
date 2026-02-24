import { Monitor, Wifi, Coffee, ClipboardList } from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'AV & Presentation Setup',
    description: 'High-definition projectors, large screens, and professional sound systems for impactful presentations.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Reliable high-speed Wi-Fi connectivity throughout the venue to keep your team connected.',
  },
  {
    icon: Coffee,
    title: 'Refreshment Services',
    description: 'Customized tea, coffee, and meal breaks to keep your attendees energized throughout the day.',
  },
  {
    icon: ClipboardList,
    title: 'Event Management',
    description: 'Dedicated on-site coordinators to manage logistics, registration, and smooth event flow.',
  },
];

export default function SeminarConferenceSection() {
  return (
    <section id="seminar-conference" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Corporate Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Seminar & Conference</h2>
          <p className="text-lg text-muted-foreground">
            Avsar Vatika offers a professional and well-equipped environment for corporate seminars, 
            conferences, training sessions, and business meetings. Our dedicated facilities ensure 
            a productive and seamless experience for all attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 p-7 rounded-2xl bg-secondary/30 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: '200+', label: 'Seating Capacity' },
            { value: 'Flexible', label: 'Hall Configurations' },
            { value: 'Full Day', label: 'Booking Options' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
