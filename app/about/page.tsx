import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Heart,
  Palette,
  History,
  Target,
  Eye,
  Cross,
  Scale,
  Landmark,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Modern Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-wider uppercase">
                  Est. 1865
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  A Legacy of <span className="text-green-300">Excellence</span>
                </h1>
                <p className="text-xl opacity-90 leading-relaxed max-w-xl">
                  Over 160 years of shaping young minds through Faith, Morals,
                  and Culture. St. Benedict's College stands as a beacon of
                  holistic education in Colombo.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img
                    src="/img/Logoandschool.png"
                    alt="St. Benedict's College"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gloss overlay */}
                  <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-white/10 pointer-events-none" />
                </div>
                {/* Decorative blob behind */}
                <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Motto Section - Centered & Elegant */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Our Motto
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                "Religio – Mores – Cultura"
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-2xl text-muted-foreground font-light">
                Religion, Morality, and Culture
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Split Layout */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-blue-500 w-full" />
                <CardContent className="p-8 md:p-12">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To help students develop spiritually, academically and in
                    multiple skills to ever gain higher levels of excellence,
                    continuously.
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-2 bg-green-500 w-full" />
                <CardContent className="p-8 md:p-12">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To inculcate spiritual values, while imparting knowledge and
                    skills in young people from their early age to the stage of
                    pre-adulthood to make them competent human beings capable of
                    contributing their mite to change the face of the earth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History Section - Timeline Style */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              <div className="lg:w-1/3 sticky top-24">
                <h2 className="text-4xl font-bold mb-6">
                  Our Rich <br />
                  <span className="text-primary">History</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  From humble beginnings in 1865 to a premier educational
                  institution, our journey is a testament to faith and
                  perseverance.
                </p>
                <div className="flex items-center gap-4 text-sm font-semibold text-primary">
                  <History className="w-5 h-5" />
                  <span>Established 1865</span>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-12 border-l-2 border-muted pl-8 md:pl-12 relative">
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    St. Benedict's College, the oldest Catholic school in the
                    Archdiocese of Colombo, was founded over 160 years ago. It
                    has consistently maintained its reputation for providing
                    sound education grounded in Christian values.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Lasallian Legacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Administered by the Lasallian Brothers (F.S.C.), the college
                    continues its mission of comprehensive education. The
                    Brothers' dedication to teaching and spiritual guidance has
                    been the cornerstone of our success.
                  </p>
                </div>

                <div className="bg-muted/50 p-8 rounded-2xl border border-muted-foreground/10 italic relative">
                  <span className="text-6xl absolute top-4 left-4 text-primary/10 font-serif">
                    "
                  </span>
                  <p className="text-lg text-foreground/80 relative z-10 mb-4">
                    "At the head of our vast system of schools stands St.
                    Benedict's Institute... it has always maintained its
                    reputation for the sound education it imparts to its
                    pupils."
                  </p>
                  <footer className="text-sm font-semibold text-primary">
                    — Archbishop Christopher Ernest Bonjean (1892)
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The three pillars that uphold our educational philosophy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Religio",
                  eng: "Religion",
                  desc: "Spiritual development and Christian values form the foundation of our educational approach.",
                  color: "text-green-800",
                  bg: "bg-green-600 shadow-lg shadow-green-200 dark:shadow-none",
                },
                {
                  icon: Scale,
                  title: "Mores",
                  eng: "Morality",
                  desc: "We foster ethical development, integrity, and social responsibility in all our students.",
                  color: "text-green-800",
                  bg: "bg-green-600 shadow-lg shadow-green-200 dark:shadow-none",
                },
                {
                  icon: Landmark,
                  title: "Cultura",
                  eng: "Culture",
                  desc: "We celebrate intellectual growth, cultural awareness, and artistic expression.",
                  color: "text-green-800",
                  bg: "bg-green-600 shadow-lg shadow-green-200 dark:shadow-none",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-green-200"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${item.color} mb-4 block`}
                  >
                    {item.eng}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
