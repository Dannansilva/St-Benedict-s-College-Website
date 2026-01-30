import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SBC</h1>
            <p className="text-lg opacity-90">
              Understanding our mission and vision
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Motto Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Motto</h2>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <p className="text-3xl font-bold text-center text-primary mb-4">
                  Religio – Mores – Cultura
                </p>
                <p className="text-center text-muted-foreground">
                  Religion, Morality, and Culture
                </p>
              </Card>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help students develop spiritually, academically and in multiple skills to ever gain higher levels of excellence, continuously.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To inculcate spiritual values, while imparting knowledge and skills in young people from their early age to the stage of pre-adulthood to make them competent human beings capable of contributing their mite to change the face of the earth.
                </p>
              </Card>
            </div>

            {/* History */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our History</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  St. Benedict's College, established in 1865, is the oldest Catholic school in the Archdiocese of Colombo. Founded over 160 years ago, the college has maintained its reputation for sound education and Christian values throughout its long and distinguished history.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently under the administration of the Lasallian Brothers (F.S.C.), the college continues its mission of providing comprehensive education rooted in the values of Religio, Mores, and Cultura.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-8">
                  "At the head of our vast system of schools stands St. Benedict's Institute, the leading Catholic College of this Archdiocese. Founded in 1865, St. Benedict's has always maintained its reputation for the sound education it imparts to its pupils."
                  <p className="text-sm text-muted-foreground mt-2">
                    - Pastoral Letter of Christopher Ernest Bonjean, Archbishop of Colombo (6th January, 1892)
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Religio',
                    subtitle: 'Religion',
                    description: 'Spiritual development and Christian values form the foundation of our educational approach.',
                  },
                  {
                    title: 'Mores',
                    subtitle: 'Morality',
                    description: 'We foster ethical development and moral integrity in all our students.',
                  },
                  {
                    title: 'Cultura',
                    subtitle: 'Culture',
                    description: 'We celebrate intellectual growth, cultural awareness, and artistic expression.',
                  },
                ].map((value) => (
                  <Card key={value.title} className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{value.title}</div>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">{value.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
