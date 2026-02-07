"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, UserCheck, Star } from "lucide-react";

export default function AcademicStaffPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const sectionalHeads = [
    "Rev. Bro. Piumal Senevirathne (Middle School Headmaster)",
    "Mr. Titus Vithanage (Upper Middle School Principal)",
    "Rev. Bro. Niran N. Perera (Advanced Level Principal)",
    "Beverly M. Fernando (Sectional Head - A/L Arts)",
    "Mr. Siril Vithanage (Sectional Head - A/L Commerce)",
    "Mr. Tyrone Perera (Sectional Head - A/L Science)",
  ];

  const supervisors = [
    "Grade 1: Mrs. Venushka Silva",
    "Grade 2: Mrs. Nilanga Perera",
    "Grade 3: Mrs. Ruwani Prasadini",
    "Grade 4: Mrs. Erasha Rodrigo",
    "Grade 5: Mrs. Thyaga Perera",
    "Grade 6: Rev. Sr. Mary Joanne",
    "Grade 7: Mr. Pathum Perin",
    "Grade 8: Mr. Kanishka Liyanage",
    "Grade 9: Mr. Damitha Perera",
    "Grade 10: Mr. Tharaka Silva",
    "Grade 11: Mr. Titus Vithanage",
  ];

  const fullStaffList = [
    "Bro. Dr. Pubudu Rajapaksha",
    "Bro. H. Niran N. Perera",
    "Bro. Pravin Vas",
    "Bro. Piumal Senevirathne",
    "Bro. A. D. Mervin R. Lambert",
    "Sr. Anne Carmeline",
    "Sr. Mary Anjalini",
    "Sr. Mary Joanne",
    "Rev Sr. Marie Kaluarachchi",
    "Sr. M. Wasanthini Dionysius",
    "Mr. H. Leonard Udaya",
    "Yamuna Abeygunawardene",
    "Marcia Missier",
    "Nirmala Fernando",
    "Mr. Maximus Perera",
    "K.P. Nilmini Perera",
    "Hemaline Loyala",
    "Krishani Mirando",
    "Mr. L.A.D.C. Priyadarshana",
    "Mr. A.V.L Amaraweara",
    "Mr. S. Suthakaran",
    "Samanthi Dias",
    "Mrs. J.A.D.A. Lokmali Kumari",
    "Mr. Senthilnathan",
    "S. Yasoda",
    "Logini Baskaran",
    "Nilanga S. Perera",
    "Niluka S. Fernando",
    "Mr. Titus Vithanage",
    "Mr. D.A. Darshana N. Dias",
    "Mr. Tyrone Perera",
    "Mr. Dushantha De AlwisKr.",
    "Mr. Sanjeewa Werapitiya",
    "Nilmini Kumari",
    "Vichithra Harshani",
    // Add more names here as needed
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/img/staff.png"
              alt="Academic Staff Background"
              className="w-full h-full object-cover opacity-20 scale-105 blur-sm"
            />
            <div className="absolute inset-0 bg-linear-to-b from-green-900/90 to-green-800/90 mix-blend-multiply" />
          </div>

          <div className="container relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-white/20 px-4 py-1 text-sm uppercase tracking-widest backdrop-blur-sm">
                Excellence in Education
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Academic Staff
              </h1>
              <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-light leading-relaxed">
                Guiding the future leaders of St. Benedict's College with
                wisdom, dedication, and faith.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Staff Group Photo Section */}
        <section className="py-16 md:py-24 relative -mt-20 z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-green-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/img/staff.png"
                alt="St. Benedict's College Academic Staff 2024"
                className="w-full h-auto object-cover"
              />
              <div className="bg-green-900 text-white p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                  St. Benedict's College - Academic Staff (2024)
                </h2>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Hierarchy */}
        <section className="py-12 md:py-20 bg-green-50/50 dark:bg-green-900/5">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-12">
            {/* Principal */}
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="inline-block p-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 mb-2">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100">
                Principal / Director
              </h3>
              <p className="text-xl md:text-2xl font-serif text-foreground font-medium">
                Rev. Bro. Dr. Pubudu Rajapaksha F.S.C.
              </p>
            </motion.div>

            <div className="w-24 h-1 bg-green-200 dark:bg-green-800 mx-auto rounded-full" />

            {/* Sub-Directors */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Sub-Director (Primary Section)
                </h4>
                <p className="text-lg font-serif text-foreground">
                  Rev. Bro. Pravin Vas F.S.C.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Sub-Director (Upper School)
                </h4>
                <p className="text-lg font-serif text-foreground">
                  Rev. Bro. Niran N. Perera F.S.C.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Roles Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl space-y-20">
            {/* Sectional Heads */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-green-700 dark:text-green-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Sectional Heads
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionalHeads.map((head, idx) => (
                  <Card
                    key={idx}
                    className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow h-full"
                  >
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                      <span className="text-foreground font-medium text-lg leading-snug">
                        {head}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Supervisors */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <UserCheck className="w-6 h-6 text-green-700 dark:text-green-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Supervisors
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {supervisors.map((supervisor, idx) => (
                  <Card
                    key={idx}
                    className="border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow h-full"
                  >
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span className="text-foreground font-medium text-lg leading-snug">
                        {supervisor}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Staff List (Sample) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Dedicated Faculty
              </h3>
              <p className="text-muted-foreground">
                The pillars of academic excellence at St. Benedict's College.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fullStaffList.map((name, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.02 }} // Staggered slightly
                  className="bg-background rounded-lg p-3 text-sm text-center border hover:border-green-300 hover:shadow-sm transition-all cursor-default"
                >
                  {name}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground italic text-sm">
                * Complete staff list continues...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
