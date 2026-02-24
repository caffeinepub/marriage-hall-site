import { useState } from 'react';
import { useSubmitBookingRequest } from '../hooks/useQueries';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import type { BookingRequestInput } from '../backend';

interface BookingRequestFormProps {
  selectedPackage?: string | null;
}

export default function BookingRequestForm({ selectedPackage }: BookingRequestFormProps) {
  const submitRequest = useSubmitBookingRequest();
  const [formData, setFormData] = useState<BookingRequestInput>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    guests: BigInt(0),
    package: selectedPackage || undefined,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    if (formData.guests <= 0) newErrors.guests = 'Number of guests must be greater than 0';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitRequest.mutateAsync(formData);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: '',
        guests: BigInt(0),
        package: undefined,
        message: '',
        consent: false,
      });
      setErrors({});
    } catch (error) {
      console.error('Failed to submit booking request:', error);
    }
  };

  const updateField = <K extends keyof BookingRequestInput>(
    field: K,
    value: BookingRequestInput[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Book Your Event</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                placeholder="Your full name"
                className={errors.fullName ? 'border-destructive' : 'border-primary/30 focus:border-primary'}
              />
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className={`pl-10 ${errors.phone ? 'border-destructive' : 'border-primary/30 focus:border-primary'}`}
                />
              </div>
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={formData.email || ''}
                onChange={(e) => updateField('email', e.target.value || undefined)}
                placeholder="your.email@example.com"
                className="pl-10 border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateField('eventDate', e.target.value)}
                  className={`pl-10 ${errors.eventDate ? 'border-destructive' : 'border-primary/30 focus:border-primary'}`}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              {errors.eventDate && <p className="text-sm text-destructive">{errors.eventDate}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests *</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests.toString()}
                  onChange={(e) => updateField('guests', BigInt(Math.max(0, parseInt(e.target.value) || 0)))}
                  placeholder="Expected guests"
                  className={`pl-10 ${errors.guests ? 'border-destructive' : 'border-primary/30 focus:border-primary'}`}
                />
              </div>
              {errors.guests && <p className="text-sm text-destructive">{errors.guests}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Select value={formData.eventType} onValueChange={(value) => updateField('eventType', value)}>
                <SelectTrigger className={errors.eventType ? 'border-destructive' : 'border-primary/30'}>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Wedding">Wedding</SelectItem>
                  <SelectItem value="Reception">Reception</SelectItem>
                  <SelectItem value="Engagement">Engagement</SelectItem>
                  <SelectItem value="Birthday">Birthday Party</SelectItem>
                  <SelectItem value="Anniversary">Anniversary</SelectItem>
                  <SelectItem value="Corporate">Corporate Event</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.eventType && <p className="text-sm text-destructive">{errors.eventType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Package (Optional)</Label>
              <Select
                value={formData.package || ''}
                onValueChange={(value) => updateField('package', value || undefined)}
              >
                <SelectTrigger className="border-primary/30">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Classic">Classic Package</SelectItem>
                  <SelectItem value="Premium">Premium Package</SelectItem>
                  <SelectItem value="Luxury">Luxury Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Any special requirements or questions?"
                className="pl-10 min-h-[100px] border-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => updateField('consent', checked === true)}
              className={errors.consent ? 'border-destructive' : ''}
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              I agree to be contacted regarding my booking inquiry and consent to the processing of my
              personal information for this purpose. *
            </Label>
          </div>
          {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}

          <Button type="submit" className="w-full" size="lg" disabled={submitRequest.isPending}>
            {submitRequest.isPending ? 'Submitting...' : 'Submit Booking Request'}
          </Button>

          {submitRequest.isSuccess && (
            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-sm text-primary text-center font-medium">
                Thank you! Your booking request has been submitted successfully. We'll contact you soon.
              </p>
            </div>
          )}

          {submitRequest.isError && (
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-sm text-destructive text-center">
                Failed to submit your request. Please try again or contact us directly.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
