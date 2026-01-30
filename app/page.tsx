import { Navbar } from '@/components/navbar';
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NewsCarousel from "@/components/NewsCarousel";
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { BookOpen, Users, Trophy, Award } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* HERO */}
        <Hero />

        {/* About Highlight */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A Legacy of Excellence
                </h2>
                <p className="text-muted-foreground mb-6">
                  St. Benedict's College, established in 1865, is the oldest Catholic school in the Archdiocese of Colombo.
                </p>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <Award className="w-20 h-20 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Stats />

<NewsCarousel />

        {/* Life at SBC */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Life at SBC
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Academics", icon: BookOpen, href: "/academics" },
                { title: "Clubs & Societies", icon: Users, href: "/clubs-societies" },
                { title: "Sports", icon: Trophy, href: "/sports" },
                { title: "Board of Prefects", icon: Award, href: "/board-of-prefects" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6 text-center hover:shadow-xl transition">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <Button size="sm" variant="outline" asChild className="mt-4">
                      <Link href={item.href}>Explore</Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
