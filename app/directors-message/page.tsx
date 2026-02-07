"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, BookOpen, User, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DirectorsMessagePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Modern Hero Section */}
        <section className="relative bg-primary text-primary-foreground pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase mb-6">
                Leadership
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Director's Message
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                Guiding St. Benedict's College towards a future of holistic
                excellence tailored for the modern world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Split Layout */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              {/* Image Section (Sticky on Desktop) */}
              <motion.div
                className="lg:w-5/12 sticky top-24"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-green-600/20 rounded-4xl blur-2xl group-hover:bg-green-600/30 transition-all duration-500" />
                  <div className="relative rounded-4xl overflow-hidden border-8 border-white dark:border-zinc-800 shadow-2xl">
                    <img
                      src="/img/Rev-bro-Pubudu-Rajapaksha.jpg"
                      alt="Rev. Bro. Pubudu Rajapaksha"
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Name Tag overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h2 className="text-2xl font-bold mb-1">
                        Rev. Bro. Pubudu Rajapaksha
                      </h2>
                      <p className="text-green-300 font-medium tracking-wide text-sm uppercase">
                        Director, St. Benedict's College
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full blur-2xl opacity-40 z-[-1]" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 z-[-1]" />
                </div>
              </motion.div>

              {/* Message Content */}
              <motion.div
                className="lg:w-7/12 space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Introduction Quote */}
                <motion.div
                  variants={fadeInUp}
                  className="relative pl-8 border-l-4 border-green-500"
                >
                  <Quote className="absolute -top-2 -left-3 w-8 h-8 text-green-500 bg-background p-1" />
                  <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug italic">
                    "Education is about nurturing the whole person—spiritually,
                    academically, and socially."
                  </p>
                </motion.div>

                {/* Message Body */}
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed space-y-6">
                  <motion.p variants={fadeInUp}>
                    Dear Students, Parents, and Members of the St. Benedict's
                    College Community,
                  </motion.p>

                  <motion.p variants={fadeInUp}>
                    It is with great pride and privilege that I address you as
                    we continue our mission of providing holistic education
                    rooted in the values of{" "}
                    <strong>Religio, Mores, and Cultura</strong>.
                  </motion.p>

                  <motion.p variants={fadeInUp}>
                    At St. Benedict's College, we believe that education extends
                    far beyond the classroom. Our approach ensures that every
                    student develops the knowledge, skills, and character
                    necessary to become a responsible and compassionate member
                    of society.
                  </motion.p>

                  <motion.p variants={fadeInUp}>
                    Over our 160 years of existence, this institution has
                    produced countless leaders, professionals, and individuals
                    who have made significant contributions to their communities
                    and the nation. This legacy is a testament to the dedication
                    of our staff, the commitment of our students, and the
                    support of our families.
                  </motion.p>

                  <motion.p variants={fadeInUp}>
                    In today's rapidly changing world, we remain committed to
                    equipping our students with not only academic excellence but
                    also critical thinking skills, emotional intelligence, and a
                    strong moral compass.
                  </motion.p>

                  <motion.p variants={fadeInUp}>
                    Our clubs and societies, sports programs, and various
                    co-curricular activities provide avenues for students to
                    develop leadership qualities, foster friendships, and
                    discover their passions. We believe that these experiences
                    are just as crucial as academic learning.
                  </motion.p>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20 my-8"
                  >
                    <p className="font-medium text-green-800 dark:text-green-300 italic mb-0">
                      "To our students, I encourage you to make the most of your
                      time here... The foundation you build here will serve you
                      throughout your lives."
                    </p>
                  </motion.div>

                  <motion.p variants={fadeInUp}>
                    As we move forward, we remain steadfast in our commitment to
                    providing a nurturing environment that fosters both
                    intellectual and moral growth. We invite you to be part of
                    this beautiful journey.
                  </motion.p>
                </div>

                <motion.div variants={fadeInUp} className="pt-8">
                  <div className="font-serif text-xl font-bold">
                    Religio – Mores – Cultura
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Pillars Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Our Educational Pillars
              </h2>
              <p className="text-muted-foreground">
                The core principles that guide our directorship and educational
                philosophy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Holistic Growth",
                  desc: "Nurturing students spiritually, academically, and socially.",
                  icon: User,
                  color: "text-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                },
                {
                  title: "Academic Excellence",
                  desc: "Rigorous education combined with character development.",
                  icon: BookOpen,
                  color: "text-green-500",
                  bg: "bg-green-50 dark:bg-green-900/20",
                },
                {
                  title: "Community",
                  desc: "A strong partnership between school, families, and alumni.",
                  icon: Users,
                  color: "text-purple-500",
                  bg: "bg-purple-50 dark:bg-purple-900/20",
                },
                {
                  title: "Leadership",
                  desc: "Fostering moral courage and leadership in every student.",
                  icon: Star,
                  color: "text-amber-500",
                  bg: "bg-amber-50 dark:bg-amber-900/20",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      >
                        <item.icon className={`w-7 h-7 ${item.color}`} />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
