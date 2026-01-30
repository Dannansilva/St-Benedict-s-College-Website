import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

export default function HistoryPage() {
  const milestones = [
    {
      year: '1865',
      title: 'Foundation',
      description: 'St. Benedict\'s College is established as a Catholic educational institution in Colombo.',
    },
    {
      year: '1900',
      title: 'Early Growth',
      description: 'The college expands facilities and establishes itself as a premier educational institution.',
    },
    {
      year: '1950',
      title: 'Post-War Development',
      description: 'Continued growth and modernization following independence of Sri Lanka.',
    },
    {
      year: '1980',
      title: 'Academic Excellence',
      description: 'Recognition for academic excellence and consistent production of high achievers.',
    },
    {
      year: '2000',
      title: 'Millennium Growth',
      description: 'Introduction of modern technology and contemporary teaching methodologies.',
    },
    {
      year: '2025',
      title: 'Modern Era',
      description: 'Continuing tradition of excellence with state-of-the-art facilities and innovative education.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">College History</h1>
            <p className="text-lg opacity-90">
              160 years of educational excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                St. Benedict's College has been a beacon of educational excellence for over 160 years. From its humble beginnings in 1865 to its present status as a premier Catholic institution, the college has maintained an unwavering commitment to holistic education and Christian values.
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Timeline</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20" />

                {/* Timeline items */}
                <div className="space-y-8 md:space-y-12">
                  {milestones.map((milestone, idx) => (
                    <div
                      key={milestone.year}
                      className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div className="flex-1 md:flex-1">
                        <Card className="p-6">
                          <p className="text-sm font-bold text-primary mb-1">{milestone.year}</p>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{milestone.description}</p>
                        </Card>
                      </div>
                      <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-16 pt-16 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Oldest Catholic school in the Archdiocese of Colombo',
                  'Consistent production of national achievers and leaders',
                  'Established strong sports and cultural programs',
                  'Recognized for academic excellence across decades',
                  'Developed innovative teaching methodologies',
                  'Built modern educational facilities and infrastructure',
                  'Strong alumni network across professions',
                  'Maintained Christian values and moral education',
                ].map((achievement) => (
                  <Card key={achievement} className="p-6">
                    <p className="text-muted-foreground flex gap-3">
                      <span className="text-primary font-bold text-xl flex-shrink-0">★</span>
                      <span>{achievement}</span>
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Heritage */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Heritage</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 160 years, St. Benedict's College has stood as a symbol of educational excellence and Christian values in Sri Lanka. Built on the foundation of the Lasallian tradition, the college continues to shape young minds and hearts.
                </p>
                <p>
                  The college's commitment to Religio, Mores, and Cultura has remained constant through changing times. Each generation of students has benefited from the dedication of our educators and the supportive school community.
                </p>
                <p>
                  Today, St. Benedict's College remains true to its founding principles while embracing modern education methodologies and technologies. Our heritage is not just about celebrating the past, but about building an even stronger future for our students.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
