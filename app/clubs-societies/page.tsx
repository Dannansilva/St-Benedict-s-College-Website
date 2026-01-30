import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Users, Palette, Brain, Heart } from 'lucide-react';

export default function ClubsPage() {
  const categories = [
    {
      icon: Palette,
      title: 'Aesthetic Clubs',
      clubs: [
        'Drama Club',
        'Music Society',
        'Art & Design Club',
        'Photography Club',
        'Literary Society',
      ],
      description: 'Clubs focused on creative expression and the arts',
    },
    {
      icon: Brain,
      title: 'Educational Clubs',
      clubs: [
        'Science Club',
        'Debate Society',
        'Math Club',
        'Computer Society',
        'Language Club',
      ],
      description: 'Clubs promoting intellectual growth and learning',
    },
    {
      icon: Heart,
      title: 'Community Service',
      clubs: [
        'Social Work Club',
        'Environmental Society',
        'Health & Wellness Club',
        'Charity Initiative',
        'Community Outreach',
      ],
      description: 'Clubs dedicated to serving the community',
    },
    {
      icon: Users,
      title: 'Leadership & Development',
      clubs: [
        'Student Council',
        'Prefects',
        'Leadership Academy',
        'Mentorship Program',
        'Public Speaking Society',
      ],
      description: 'Clubs fostering leadership and personal development',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Clubs & Societies</h1>
            <p className="text-lg opacity-90">
              Explore diverse opportunities for personal growth and interests
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                St. Benedict's College offers a wide variety of clubs and societies that cater to diverse interests and talents. These organizations provide students with opportunities to pursue their passions, develop new skills, and make meaningful connections with their peers.
              </p>
            </div>

            {/* Club Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.title} className="p-8">
                    <div className="flex gap-4 mb-6">
                      <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {category.clubs.map((club) => (
                        <li key={club} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{club}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Benefits of Club Participation
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Skill Development',
                    description: 'Develop new talents and refine existing skills in a supportive environment.',
                  },
                  {
                    title: 'Friendships',
                    description: 'Build meaningful relationships with peers who share similar interests.',
                  },
                  {
                    title: 'Leadership',
                    description: 'Take on leadership roles and develop management and communication skills.',
                  },
                  {
                    title: 'Campus Engagement',
                    description: 'Participate in events and activities that enhance school spirit.',
                  },
                  {
                    title: 'Resume Building',
                    description: 'Gain experiences that strengthen university and job applications.',
                  },
                  {
                    title: 'Personal Growth',
                    description: 'Discover passions and build confidence through new experiences.',
                  },
                ].map((benefit) => (
                  <Card key={benefit.title} className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
