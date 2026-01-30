import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Users, Award, Shield } from 'lucide-react';

export default function BoardOfPrefectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Board of Prefects</h1>
            <p className="text-lg opacity-90">
              Student leaders committed to service and excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Leadership & Student Governance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Board of Prefects is a select group of senior students who have demonstrated exceptional leadership qualities, academic excellence, and commitment to the values of St. Benedict's College. They play a crucial role in maintaining school discipline, representing student interests, and fostering a positive school culture.
              </p>
            </div>

            {/* Leadership Roles */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Leadership Positions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Head Prefect',
                    description: 'Leads the prefect board and represents the student body',
                    icon: Shield,
                  },
                  {
                    title: 'Deputy Head Prefect',
                    description: 'Assists the head prefect and manages operations',
                    icon: Award,
                  },
                  {
                    title: 'Academic Prefect',
                    description: 'Oversees academic excellence and study initiatives',
                    icon: Users,
                  },
                ].map((role) => {
                  const Icon = role.icon;
                  return (
                    <Card key={role.title} className="p-6">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Responsibilities</h2>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Discipline & Order</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Maintaining school discipline</li>
                      <li>• Enforcing school rules</li>
                      <li>• Attending to student conduct</li>
                      <li>• Managing prefect duties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Student Representation</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Voicing student concerns</li>
                      <li>• Organizing student events</li>
                      <li>• Building school community</li>
                      <li>• Supporting school initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Academic Support</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Promoting academic excellence</li>
                      <li>• Organizing study sessions</li>
                      <li>• Supporting struggling students</li>
                      <li>• Encouraging learning initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Community Outreach</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Organizing service activities</li>
                      <li>• Community engagement</li>
                      <li>• Supporting charities</li>
                      <li>• Social responsibility</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Selection Process */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Selection Process</h2>
              <Card className="p-8">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Application & Nomination</h3>
                      <p className="text-muted-foreground text-sm">
                        Interested students submit applications and receive nominations from teachers
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Evaluation Criteria</h3>
                      <p className="text-muted-foreground text-sm">
                        Assessment based on academics, conduct, leadership, and commitment to values
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Interview Process</h3>
                      <p className="text-muted-foreground text-sm">
                        Candidates participate in interviews with school leadership
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Appointment</h3>
                      <p className="text-muted-foreground text-sm">
                        Selected prefects are appointed and formally installed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Benefits of Being a Prefect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Leadership development and experience',
                  'Recognition and honor within the school',
                  'Community impact and service opportunities',
                  'Development of responsibility and discipline',
                  'Networking with school leadership',
                  'Enhancement of university applications',
                  'Personal growth and confidence building',
                  'Lifelong friendships and connections',
                ].map((benefit) => (
                  <Card key={benefit} className="p-4">
                    <p className="text-muted-foreground flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </p>
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
