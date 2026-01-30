'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              Get in touch with St. Benedict's College
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Quick Contact Cards */}
              <Card className="p-6">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+94112541234" className="hover:text-primary transition">
                    +94 (11) 254 1234
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+94112542567" className="hover:text-primary transition">
                    +94 (11) 254 2567
                  </a>
                </p>
              </Card>

              <Card className="p-6">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@stbenedictscollege.lk" className="hover:text-primary transition">
                    info@stbenedictscollege.lk
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:admissions@stbenedictscollege.lk" className="hover:text-primary transition">
                    admissions@stbenedictscollege.lk
                  </a>
                </p>
              </Card>

              <Card className="p-6">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Pickerings Road<br />
                  Colombo 13<br />
                  Sri Lanka
                </p>
              </Card>
            </div>

            {/* Contact Form & Map */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">
                        Thank you! Your message has been sent. We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Map & Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Visit Us</h2>
                <Card className="overflow-hidden mb-8 h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.348485943436!2d79.8545!3d6.927000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256f3e2b3e2b3%3A0x2b3e2b3e2b3e2b3e!2sSt.%20Benedict's%20College%2C%20Colombo%2013!5e0!3m2!1sen!2slk!4v1234567890"
                  />
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p>Monday – Friday: 8:00 AM – 4:00 PM</p>
                        <p>Saturday: 9:00 AM – 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Departments */}
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Department Contacts
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    dept: 'Admissions',
                    phone: '+94 (11) 254 1111',
                    email: 'admissions@stbenedictscollege.lk',
                  },
                  {
                    dept: 'Academic Affairs',
                    phone: '+94 (11) 254 2222',
                    email: 'academics@stbenedictscollege.lk',
                  },
                  {
                    dept: 'Sports & Activities',
                    phone: '+94 (11) 254 3333',
                    email: 'sports@stbenedictscollege.lk',
                  },
                ].map((dept) => (
                  <Card key={dept.dept} className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">{dept.dept}</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Phone: </span>
                        <a href={`tel:${dept.phone}`} className="hover:text-primary transition">
                          {dept.phone}
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Email: </span>
                        <a href={`mailto:${dept.email}`} className="hover:text-primary transition">
                          {dept.email}
                        </a>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
