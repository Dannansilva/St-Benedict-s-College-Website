"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, MapPin, Users, Award } from "lucide-react";

export default function HistoryPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const historySections = [
    {
      title: "Before St. Benedict's College...",
      content: (
        <>
          <p className="mb-4">
            Sir Alexander Johnston encouraged the establishment of an English
            school for the Catholic community in Ceylon, but it wasn't until
            Ceylon became a new Vicariate Apostolic in 1834 that significant
            progress was made. The reorganization of education after the
            Colebrooke Reforms and the creation of the Colombo Vicariate sparked
            enthusiasm for English education among Catholics.
          </p>
          <p className="mb-4">
            In 1837, St Robert Wilmot Horton donated £50 to support the first
            Catholic English school. On May 15, 1839, the Roman Catholic
            Seminary, which would later become St. Benedict's College, was
            opened in Wolfendhal Street by Rt. Rev. Dr. Vicente do Rosario. The
            Seminary aimed to provide superior English education and had
            vice-patrons including Rev. Fathers Sebastian Pereira and Caetano
            Antonio.
          </p>
          <p>
            A school committee was formed with J.P. Misso as President and J.
            Sansoni as Vice President. The first principal was M. Lennon,
            assisted by Don Domingo and J. Andriesz. Initially, the Seminary had
            three teachers and eighty students, offering a curriculum that
            included English, reading, writing, grammar, arithmetic, algebra,
            geometry, history, geography, chronology, Greek, Latin, and
            Sinhalese.
          </p>
        </>
      ),
      icon: <BookOpen className="w-6 h-6" />,
      year: "1834 - 1839",
    },
    {
      title: "The Establishment of the College",
      content: (
        <>
          <p className="mb-4">
            During the Interregnum, the foundation stone for a new institution,
            St. Benedict's College, was laid. The Silvestro-Benedictines
            designed the college buildings in the style of an Italian
            Benedictine Monastery, featuring a rectangular structure with a
            ground floor enclosing a courtyard. This elegant, compact building
            served as both a monastery and an educational establishment.
          </p>
          <p>
            While the school was under construction, Silani traveled to Kotar,
            India, where he received his episcopal consecration from Dr.
            Valerga. The buildings were completed in 1866, and in 1868, H. P.
            Sules relocated with the Seminary pupils to the new facility. That
            year, the new buildings housed 300 boys and 170 girls from the
            English and Sinhalese schools.
          </p>
        </>
      ),
      icon: <MapPin className="w-6 h-6" />,
      year: "1866 - 1868",
    },
    {
      title: "Arrival of De La Salle Brothers",
      content: (
        <>
          <p className="mb-4">
            In December 1866, three De La Salle Brothers—Hidulphus, Ulfin
            Daniel, and Hermelord Leo—arrived at Galle during their return
            journey to France from Mangalore. Silani persuaded them to stay and
            manage St. Benedict's College. They informed Silani that another
            Brother, an Irishman who could serve as the "Professor of English,"
            was expected to arrive soon.
          </p>
          <p className="mb-4">
            Brother Hidulphus became the Director of the community of three
            Brothers and Headmaster of the College. He announced St. Benedict's
            Institution in the Colombo Examiner on January 16, 1867.
          </p>
          <p>
            On May 1, 1868, a new group of Brothers, led by Brother Pastoris,
            the Provincial for the Far East and temporary Director, officially
            took charge of St. Benedict's. According to the admission register,
            the College had 204 pupils enrolled.
          </p>
        </>
      ),
      icon: <Users className="w-6 h-6" />,
      year: "1866 - 1868",
    },
    {
      title: "First Official Director",
      content: (
        <>
          <p>
            Brother Pastoris returned to France on October 10, 1868. The first
            official Director of St. Benedict's was Brother Modeste Marie, a
            German who had arrived in the East in 1866 as a La Sallian
            Missionary.
          </p>
        </>
      ),
      icon: <Award className="w-6 h-6" />,
      year: "1868",
    },
    {
      title: "The Journey So Far...",
      content: (
        <>
          <p className="mb-4">
            <strong>1880:</strong> Brother Gabriel Archangel became Director,
            introducing new classrooms and achieving academic milestones in the
            Cambridge Junior Local Examination.
          </p>
          <p className="mb-4">
            <strong>1887:</strong> Brother Maurice Josephus, the first American
            Director, succeeded Brother Gabriel, overseeing the transition to
            'St. Benedict's College' and its first Cambridge Senior Examination
            successes. In 1888, he organized religious solemnities for the
            Beatification of John Baptist de La Salle.
          </p>
          <p className="mb-4">
            <strong>1909:</strong> Brother Camillus Eugene assumed duties,
            enhancing the College's prestige with impressive academic results,
            particularly in Science and Mathematics.
          </p>
          <p className="mb-4">
            <strong>1931:</strong> Brother Luke Gregory, the first Ceylonese
            Director, oversaw the construction of a three-story building and
            initiated work on a playground. Returning in 1943, he re-organized
            the College post-war, maintaining its reputation and ideals.
          </p>
        </>
      ),
      icon: <Calendar className="w-6 h-6" />,
      year: "1880 - 1943",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-green-950">
          <div className="absolute inset-0 opacity-85 bg-[url('/img/oldschool.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-b from-green-900/40 to-background/90" />

          <div className="container relative z-10 text-center px-4 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-white/20 px-4 py-1 text-sm uppercase tracking-widest backdrop-blur-sm">
                160+ Years of Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Our Rich Heritage
              </h1>
              <p className="text-lg md:text-xl dark:bg-green-900/30 max-w-2xl mx-auto font-light leading-relaxed">
                From humble beginnings in 1865 to a premier Catholic
                institution, rooted in Faith, Culture, and Morals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Narrative Content */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-green-100 dark:bg-green-900/30 -ml-0.5 md:ml-0 hidden md:block" />

            <div className="space-y-16 md:space-y-32">
              {historySections.map((section, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className={`flex flex-col md:flex-row gap-8 items-start relative ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 top-0 -ml-4 w-8 h-8 rounded-full bg-green-500 border-4 border-background z-10 hidden md:flex items-center justify-center text-white shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 w-full ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <span className="text-sm font-bold tracking-wider text-green-600 dark:text-green-400 uppercase bg-green-100 dark:bg-green-900/40 px-3 py-1 rounded-full">
                        {section.year}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                      {section.title}
                    </h2>

                    <div className="prose prose-green dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                      {section.content}
                    </div>
                  </div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>

            <div className="mt-24 text-center pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Sources: New York Old Bens Website
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
