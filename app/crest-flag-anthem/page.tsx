"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Music, Pause, Shield, Flag, Mic2 } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CrestFlagAnthemPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
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
                Identity & Heritage
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Crest, Flag & Anthem
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                The symbols that unite us and define our legacy as Benedictines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Crest Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div
                className="lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group p-8">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all duration-700" />
                  <img
                    src="/img/Crest_green-768x854.png"
                    alt="St. Benedict's College Crest"
                    className="relative w-full max-w-md h-auto drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div className="lg:w-1/2 space-y-8" {...fadeInUp}>
                <div className="flex items-center gap-4 text-green-600 dark:text-green-400">
                  <Shield className="w-8 h-8" />
                  <h2 className="text-3xl font-bold text-foreground">
                    School Crest
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The College Crest features a shield with two elephants lying
                  down, lifting a Cross with their trunks. The elephants, native
                  to Sri Lanka, symbolize strength and nature's reverence for
                  the Creator.
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      title: "The Cross",
                      desc: "A synergy of all the virtues sought after by humanity. And Religion, Christianity – the primary thrust of the motto.",
                    },
                    {
                      title: "The Star",
                      desc: "Hangs over the Cross, showing the 'onward view', the upward path to look up to, the aim, the reachable goal.",
                    },
                    {
                      title: "Mountain Peak",
                      desc: "To the left, pointing towards the pinnacle of achievement, the high ideals to strive for.",
                    },
                    {
                      title: "The Tree",
                      desc: "To the right, representing culture, respect for nature, the environment, and the ethos of loving our neighbour.",
                    },
                    {
                      title: "The Ribbons",
                      desc: "Above: Motto 'Religio, Mores, Cultura'. Below: College name and 'F.S.C.' (Brothers of the Christian Schools).",
                    },
                  ].map((item, idx) => (
                    <Card
                      key={idx}
                      className="border-none bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                        <div>
                          <span className="font-bold text-foreground block mb-1">
                            {item.title}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.desc}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/20 text-green-800 dark:text-green-200 text-sm italic text-center">
                    "A perfect unity, drawing Benedictines to the pinnacle of
                    spiritual and human endeavour."
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Flag Section */}
        <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div className="lg:w-1/2 space-y-8" {...fadeInUp}>
                <div className="flex items-center gap-4 text-green-600 dark:text-green-400">
                  <Flag className="w-8 h-8" />
                  <h2 className="text-3xl font-bold text-foreground">
                    School Flag
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  During the 1920s, Brother Wulton James, the new Irish
                  Director, decided to change the color scheme from the triad of
                  Blue, Gold, and Black to just two colors. He suggested using
                  the Irish colors Green and Sky Blue to symbolize hope. Later,
                  the Sky Blue was changed to White, and St. Benedict’s College
                  has embraced the Green and White color combination ever since.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white shrink-0">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                    </div>
                    <div>
                      <strong className="block text-foreground">Color</strong>
                      <span className="text-sm text-muted-foreground">
                        Rich green representing growth & life
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-primary shrink-0">
                      <span className="font-bold">SBC</span>
                    </div>
                    <div>
                      <strong className="block text-foreground">Emblem</strong>
                      <span className="text-sm text-muted-foreground">
                        School initials prominently displayed
                      </span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                  <img
                    src="/img/flag_Green.png"
                    alt="St. Benedict's College Flag"
                    className="w-full h-auto object-cover"
                  />
                  {/* Sheen effect */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Anthem Section */}
        <section className="py-20 lg:py-32 relative bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 ring-8 ring-primary/5">
                <Mic2 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                School Anthem
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                The melody that binds us together in spirit and song.
              </p>
            </motion.div>

            {/* Audio Player Card - Floating Design */}
            <motion.div
              className="bg-green-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl mb-20 relative overflow-hidden mx-auto max-w-4xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <button
                  onClick={togglePlay}
                  className="w-24 h-24 bg-white text-green-900 rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shrink-0 group"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 fill-current" />
                  ) : (
                    <Play className="w-10 h-10 fill-current ml-2 group-hover:scale-110 transition-transform" />
                  )}
                </button>

                <div className="flex-1 w-full text-center md:text-left space-y-2">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-2">
                    <h3 className="text-3xl font-bold">College Anthem</h3>
                    <span className="text-green-200 font-mono text-sm opacity-80">
                      St. Benedict's College
                    </span>
                  </div>

                  {/* Custom Progress Bar Visual */}
                  <div className="h-3 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-linear-to-r from-green-400 to-emerald-300"
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{
                        duration: isPlaying ? 165 : 0.5,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <p className="text-green-200 text-sm mt-2">
                    Performed by the College Choir & Band
                  </p>
                </div>
              </div>

              <audio
                ref={audioRef}
                src="/img/College_Anthem.mp3"
                onEnded={() => setIsPlaying(false)}
              />
            </motion.div>

            {/* Lyrics & History Split */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Lyrics Column */}
              <motion.div
                className="lg:col-span-7 bg-white dark:bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 dark:border-green-900/20 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-8 right-8 text-green-100 dark:text-green-900/20 select-none">
                  <Music className="w-24 h-24 rotate-12" />
                </div>

                <div className="relative z-10 space-y-10 font-serif text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 text-center">
                  <div className="space-y-4">
                    <p className="font-semibold text-green-700 dark:text-green-400 text-sm tracking-widest uppercase font-sans mb-4">
                      Verse 1
                    </p>
                    <p>
                      Boys of St. Benedict's young and old,
                      <br />
                      High be your aim in life's onward view !<br />
                      Leal and devoted be to the fold,
                      <br />
                      With rever'nce meet to your shepherds true!
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-green-50 dark:border-green-900/10">
                    <p className="font-semibold text-green-700 dark:text-green-400 text-sm tracking-widest uppercase font-sans mb-4">
                      Chorus
                    </p>
                    <p className="font-medium text-green-900 dark:text-green-100 italic text-2xl">
                      "Religio, Mores, Cultura true,
                      <br />
                      Our motto guides all we do,
                      <br />
                      St. Benedict's we hold so dear,
                      <br />
                      With pride through every passing year."
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-green-50 dark:border-green-900/10">
                    <p className="font-semibold text-green-700 dark:text-green-400 text-sm tracking-widest uppercase font-sans mb-4">
                      Verse 2
                    </p>
                    <p>
                      For Christ and Church, united we stand.
                      <br />
                      E'er loyal and staunch, or win we, or fall !<br />
                      The truth to sow broadcast o' er the land,
                      <br />
                      Promptly to rally at duty's call!
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-green-50 dark:border-green-900/10">
                    <p className="font-semibold text-green-700 dark:text-green-400 text-sm tracking-widest uppercase font-sans mb-4">
                      Verse 3
                    </p>
                    <p>
                      True to our God and true to all men,
                      <br />
                      Follow we ever life's holy plan!
                      <br />
                      Doing the duty that is to do
                      <br />
                      Bearing the cross with the crown in view.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* History Column */}
              <motion.div
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                      1915
                    </span>
                    Origins of Glory
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Anthem dates back to 1915, during the Directorship of{" "}
                    <strong className="text-foreground">
                      Brother Arsece Cyprian
                    </strong>
                    . It stands as a timeless testament to the spirit of St.
                    Benedict's.
                  </p>
                </div>

                <div className="space-y-6 pl-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary shrink-0 text-xl font-serif">
                      A
                    </div>
                    <div className="mb-8">
                      <h4 className="font-bold text-foreground">The Author</h4>
                      <p className="text-sm text-muted-foreground">
                        Written by{" "}
                        <strong className="text-foreground">
                          Proctor Mr. C.E.M. Jayawardene
                        </strong>
                        , who later served as a district judge.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start mb-8">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary shrink-0 text-xl font-serif">
                      C
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        The Composer
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Composed by{" "}
                        <strong className="text-foreground">
                          S. Norbert Rodrigo
                        </strong>
                        , a talented teenager who bested musical giants to win
                        the competition judged by Brother Lewis.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary shrink-0 text-xl font-serif">
                      µ
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        Musical Distinction
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Praised for its marching lilt and 6/8 chorus, themes of
                        Religion, Character, and Patriotism earn it a place
                        among the best school anthems in the island.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
