import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah & Michael',
      event: 'Wedding Reception',
      rating: 5,
      text: "Avsarvatika marriage hall made our wedding day absolutely perfect! The staff was incredibly helpful, the venue was stunning, and all our guests were impressed. We couldn't have asked for a better experience.",
      initials: 'SM',
    },
    {
      name: 'Priya Sharma',
      event: 'Anniversary Celebration',
      rating: 5,
      text: 'We celebrated our 25th anniversary here and it was magical. The attention to detail, the beautiful décor, and the professional service exceeded all our expectations. Highly recommended!',
      initials: 'PS',
    },
    {
      name: 'David Chen',
      event: 'Corporate Event',
      rating: 5,
      text: "Hosted our company's annual gala at Avsarvatika marriage hall. The venue is spacious, well-maintained, and the team was very accommodating. Our event was a huge success!",
      initials: 'DC',
    },
    {
      name: 'Maria Rodriguez',
      event: 'Quinceañera',
      rating: 5,
      text: "My daughter's quinceañera was a dream come true! The hall looked absolutely beautiful, and the staff helped us with every detail. Thank you for making it so special!",
      initials: 'MR',
    },
    {
      name: 'James & Emily',
      event: 'Engagement Party',
      rating: 5,
      text: "From the moment we walked in, we knew this was the place. The elegant atmosphere and excellent service made our engagement party unforgettable. We're already planning to book for our wedding!",
      initials: 'JE',
    },
    {
      name: 'Aisha Khan',
      event: 'Wedding Ceremony',
      rating: 5,
      text: 'The perfect venue for our special day! Everything was flawless - from the beautiful stage setup to the comfortable seating arrangements. Our families loved it and so did we!',
      initials: 'AK',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from couples and families who celebrated with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
