"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Users, Zap, Target } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function SportsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/img/sports.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

        <div className="relative z-10 container px-4 md:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="border-white/30 text-white mb-6 px-4 py-1 text-xs uppercase tracking-[0.3em]"
            >
              Est. 1865
            </Badge>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
              Forging <span className="text-green-500">Legends</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              A tradition of excellence. A future of dominance. <br />
              Welcome to the arena of Benedictine sports.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="text-white/50 w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-b border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200 dark:divide-zinc-800">
            <motion.div {...fadeInUp}>
              <span className="block text-4xl font-bold text-green-600 mb-1">
                15+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Sports
              </span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <span className="block text-4xl font-bold text-slate-900 dark:text-white mb-1">
                50+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Titles
              </span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <span className="block text-4xl font-bold text-slate-900 dark:text-white mb-1">
                100%
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Dedication
              </span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <span className="block text-4xl font-bold text-slate-900 dark:text-white mb-1">
                10+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Facilities
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Team Sports */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-zinc-800 group">
                {/* Placeholder for Team Sport Image */}
                <div className="absolute inset-0 bg-green-100 dark:bg-green-900/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <Users className="w-24 h-24 text-green-600/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-medium">
                    The Brotherhood of the Green & White
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
              <div className="flex items-center gap-2 mb-6 text-green-600">
                <Users className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Team Sports
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                Brotherhood <br /> Through Battle.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                It’s not just about the game; it’s about the person next to you.
                Our team sports program cultivates leadership, trust, and
                reckless selflessness.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Cricket",
                  "Rugby",
                  "Football",
                  "Basketball",
                  "Hockey",
                  "Volleyball",
                ].map((sport) => (
                  <div
                    key={sport}
                    className="flex items-center gap-3 py-3 border-b border-slate-100 dark:border-zinc-800"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {sport}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Individual Sports (Reversed) */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-900/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
              <div className="flex items-center gap-2 mb-6 text-blue-600">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Individual Sports
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                The Pursuit of <br /> Perfection.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Where character is tested in solitude. From the pool to the
                track, our athletes push the boundaries of human potential
                through discipline and focus.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Athletics",
                  "Swimming",
                  "Tennis",
                  "Badminton",
                  "Table Tennis",
                ].map((sport) => (
                  <div
                    key={sport}
                    className="flex items-center gap-3 py-3 border-b border-slate-200 dark:border-zinc-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {sport}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 group">
                {/* Placeholder for Individual Sport Image */}
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <Zap className="w-24 h-24 text-blue-600/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Combat & Mind (Standard) */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4 h-full aspect-[4/3]">
                <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-12 h-12 text-red-500/30" />
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl mt-8 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-amber-500/30" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
              <div className="flex items-center gap-2 mb-6 text-red-600">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Combat & Strategy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                Strength of Body, <br /> Acuity of Mind.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether on the mat or the chessboard, victory requires strategy,
                respect, and mental fortitude.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                    Combat Sports
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Karate</li>
                    <li>Wushu</li>
                    <li>Judo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                    Mind Sports
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Chess</li>
                    <li>Carrom</li>
                    <li>Scrabble</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-green-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/sports.jpg')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to make history?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join a legacy of champions. Discover your potential at St.
            Benedict's.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-green-50 text-lg px-8 py-6 rounded-full font-bold"
          >
            Contact Sports Council
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
