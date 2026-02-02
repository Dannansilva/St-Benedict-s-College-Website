import { Navbar } from "@/components/navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NewsCarousel from "@/components/NewsCarousel";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Trophy, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <Hero />

        {/* Director's Message */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/90">
                  Rev. Bro. Director&apos;s Message
                </h2>
                <div className="space-y-4 text-muted-foreground/90 leading-relaxed text-justify">
                  <p>
                    Welcome to St. Benedict&apos;s College! The oldest Catholic
                    private college in the Archdiocese of Colombo. Administered
                    and managed by the De La Salle Brothers, well known as
                    Lasallian educators, inspired by St. John Baptist de La
                    Salle, the Patron Saint of Teachers and Educators.
                  </p>
                  <p>
                    As the present Director/Principal of this great institution,
                    I am honored to lead the college with its rich history of
                    academic excellence and a commitment to fostering a
                    nurturing and inclusive environment for our students for the
                    past 160 years. Established in 1865, our college has been a
                    cornerstone of education in our country, dedicated to
                    shaping the minds and hearts of young individuals to become
                    responsible, compassionate, and knowledgeable members of
                    society.
                  </p>
                </div>
                <Button
                  className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8"
                  asChild
                >
                  <Link href="/directors-message">Read More</Link>
                </Button>
              </div>

              {/* Image */}
              <div className="relative">
                {/* Green accent background */}
                <div className="absolute top-4 right-4 w-full h-full bg-green-900 rounded-lg -z-10 transform translate-x-2 translate-y-2"></div>
                <div className="relative h-[600] w-full rounded-lg overflow-hidden shadow-xl bg-muted">
                  <Image
                    src="/img/Rev-bro-Pubudu-Rajapaksha.jpg"
                    alt="Rev. Bro. Director"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Stats />

        <NewsCarousel />

        {/* Life at SBC */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-800/30 hidden md:block"></div>

            <div className="space-y-24">
              {/* Academics */}
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <Image
                      src="/img/Academics.jpg"
                      alt="Academics at SBC"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10 opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full -z-10 opacity-50"></div>
                </div>
                <div className="order-1 md:order-2 text-center md:text-left relative">
                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-1/2 -left-12 w-6 h-6 bg-green-700 rounded-full border-4 border-background transform -translate-y-1/2 z-10"></div>

                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    Academics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Education at St. Benedict’s College is more than just
                    acquiring knowledge—it is about shaping individuals of
                    character and purpose. With outstanding educators and a
                    supportive learning environment, the College is committed to
                    nurturing students who will make a meaningful difference in
                    society.
                  </p>
                  <Button className="bg-green-800 hover:bg-green-900" asChild>
                    <Link href="/academics">Explore</Link>
                  </Button>
                </div>
              </div>

              {/* Clubs & Societies */}
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="order-1 text-center md:text-right relative">
                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-1/2 -right-12 w-6 h-6 bg-green-700 rounded-full border-4 border-background transform -translate-y-1/2 z-10"></div>

                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    Clubs & Societies
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    St. Benedict’s College empowers students with the freedom to
                    explore their passions and express themselves. Offering a
                    diverse array of clubs and societies, as well as the
                    opportunity to create new communities, the College
                    cultivates forward-thinking individuals eager to make a
                    difference.
                  </p>
                  <Button className="bg-green-800 hover:bg-green-900" asChild>
                    <Link href="/clubs-societies">Explore</Link>
                  </Button>
                </div>
                <div className="order-2 relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    <Image
                      src="/img/chess.jpg"
                      alt="Clubs & Societies"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full -z-10 opacity-50"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full -z-10 opacity-50"></div>
                </div>
              </div>

              {/* Sports */}
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <Image
                      src="/img/sports.jpg"
                      alt="Sports at SBC"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10 opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full -z-10 opacity-50"></div>
                </div>
                <div className="order-1 md:order-2 text-center md:text-left relative">
                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-1/2 -left-12 w-6 h-6 bg-green-700 rounded-full border-4 border-background transform -translate-y-1/2 z-10"></div>

                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    Sports
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Stepping onto the field with pride and determination, the
                    athletes of St. Benedict’s College embody humility in
                    victory and grace in defeat. Forged through dedication and
                    strengthened by adversity, they cultivate camaraderie and
                    resilience, always striving to achieve greater heights.
                  </p>
                  <Button className="bg-green-800 hover:bg-green-900" asChild>
                    <Link href="/sports">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
