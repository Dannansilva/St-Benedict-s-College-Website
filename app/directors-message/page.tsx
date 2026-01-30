import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function DirectorsMessagePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rev. Brother Director's Message</h1>
            <p className="text-lg opacity-90">
              Leadership and vision for the college community
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Director Info */}
            <div className="flex gap-8 items-start mb-12">
              <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Rev. Brother Director</h2>
                <p className="text-muted-foreground mb-1">De La Salle Brothers (F.S.C.)</p>
                <p className="text-muted-foreground text-sm">St. Benedict's College, Colombo 13</p>
              </div>
            </div>

            {/* Message */}
            <Card className="p-8 mb-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Dear Students, Parents, and Members of the St. Benedict's College Community,
                </p>

                <p>
                  It is with great pride and privilege that I address you as we continue our mission of providing holistic education rooted in the values of Religio, Mores, and Cultura.
                </p>

                <p>
                  At St. Benedict's College, we believe that education extends far beyond the classroom. It is about nurturing the whole person—spiritually, academically, and socially. Our approach ensures that every student develops the knowledge, skills, and character necessary to become a responsible and compassionate member of society.
                </p>

                <p>
                  Over our 160 years of existence, this institution has produced countless leaders, professionals, and individuals who have made significant contributions to their communities and the nation. This legacy is a testament to the dedication of our staff, the commitment of our students, and the support of our families.
                </p>

                <p>
                  In today's rapidly changing world, we remain committed to equipping our students with not only academic excellence but also critical thinking skills, emotional intelligence, and a strong moral compass. We encourage our young people to embrace challenges, explore their talents, and pursue their dreams with integrity and purpose.
                </p>

                <p>
                  Our clubs and societies, sports programs, and various co-curricular activities provide avenues for students to develop leadership qualities, foster friendships, and discover their passions. We believe that these experiences are just as crucial as academic learning.
                </p>

                <p>
                  To our parents and guardians, thank you for entrusting us with the education and care of your children. Together, we form a partnership dedicated to their holistic development and success.
                </p>

                <p>
                  To our students, I encourage you to make the most of your time here at St. Benedict's. Take pride in your school, respect your teachers and peers, and strive for excellence in all that you do. The foundation you build here will serve you throughout your lives.
                </p>

                <p>
                  As we move forward, we remain steadfast in our commitment to providing a nurturing environment that fosters both intellectual and moral growth. We invite you to be part of this beautiful journey.
                </p>

                <p>
                  Religio – Mores – Cultura
                </p>

                <p className="font-semibold mt-8">
                  Rev. Brother Director<br />
                  St. Benedict's College
                </p>
              </div>
            </Card>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Holistic Development',
                  description: 'We nurture students spiritually, academically, and socially to create well-rounded individuals.',
                },
                {
                  title: 'Excellence in Education',
                  description: 'Academic rigor combined with character development prepares students for life success.',
                },
                {
                  title: 'Community Partnership',
                  description: 'We work together with families to provide the best support for student growth.',
                },
                {
                  title: 'Leadership Development',
                  description: 'Through various activities, we foster leadership qualities and moral courage in our students.',
                },
              ].map((point) => (
                <Card key={point.title} className="p-6">
                  <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
