import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Laptop } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-lg opacity-90">
              Excellence in education through comprehensive curriculum
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Academic Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                St. Benedict's College offers a comprehensive and well-rounded academic program designed to develop critical thinking, analytical skills, and knowledge across multiple disciplines. Our curriculum aligns with national standards while incorporating innovative teaching methodologies and modern learning resources.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: 'Comprehensive Curriculum',
                  description: 'Well-structured curriculum covering sciences, humanities, languages, and mathematics.',
                },
                {
                  icon: Laptop,
                  title: 'Modern Facilities',
                  description: 'State-of-the-art laboratories, computer labs, and learning resources.',
                },
                {
                  icon: Users,
                  title: 'Expert Faculty',
                  description: '136 qualified and dedicated teachers committed to student success.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Subject Areas */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Subject Areas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Sciences</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Biology</li>
                    <li>• Chemistry</li>
                    <li>• Physics</li>
                    <li>• Computer Science</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Languages</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• English</li>
                    <li>• Sinhala</li>
                    <li>• Tamil</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Mathematics</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Pure Mathematics</li>
                    <li>• Applied Mathematics</li>
                    <li>• Statistics</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Humanities</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• History</li>
                    <li>• Geography</li>
                    <li>• Civics</li>
                    <li>• Religion</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Teaching Methodology */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Teaching Methodology</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We employ student-centered, interactive teaching methodologies that encourage active learning, critical thinking, and problem-solving. Our teachers utilize a blend of traditional and modern teaching approaches, including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Experiential learning through practical activities and experiments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Technology-enhanced learning using digital tools and resources</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Collaborative projects promoting teamwork and communication</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Assessment for learning focusing on progress and improvement</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
