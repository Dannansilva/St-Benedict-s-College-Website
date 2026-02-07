"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Palette,
  Brain,
  Heart,
  Music,
  Camera,
  Swords,
  Cross,
  Mic2,
  Globe,
  Gavel,
  Code,
} from "lucide-react";

export default function ClubsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const categories = {
    academic: [
      { name: "Science Society", icon: Brain },
      { name: "Commerce Society", icon: Users },
      { name: "Mathematics Club", icon: Brain },
      { name: "ICT Society", icon: Code },
      { name: "Debate Society (English/Sinhala/Tamil)", icon: Gavel },
      { name: "Aviation Club", icon: Globe },
    ],
    aesthetic: [
      { name: "Choir (Choral)", icon: Music },
      { name: "Western Band", icon: Music },
      { name: "Oriental Band", icon: Music },
      { name: "Drama Society", icon: Palette },
      { name: "Art Circle", icon: Palette },
      { name: "Photography Club", icon: Camera },
    ],
    religious_social: [
      { name: "Legion of Mary", icon: Cross },
      { name: "St. Vincent de Paul (SVP)", icon: Heart },
      { name: "Young Christian Students (YCS)", icon: Cross },
      { name: "Interact Club", icon: Users },
      { name: "Scouting", icon: Users },
      { name: "Cadeting", icon: Swords },
    ],
    special: [
      { name: "Chess Club", icon: Swords },
      { name: "Media Unit", icon: Mic2 },
      { name: "Library Council", icon: Users },
      { name: "Prefects' Guild", icon: Users },
      { name: "Environment Pioneer Brigade", icon: Globe },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-[url('/img/chess.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm uppercase tracking-widest border-none">
                Beyond the Classroom
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                Clubs & Societies
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                Discover your passion, build leadership skills, and make
                lifelong friendships through our diverse range of student
                organizations.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          {/* Intro */}
          <motion.div
            {...fadeIn}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Vibrant Student Life
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At St. Benedict's, we believe that education extends far beyond
              the four walls of a classroom. Our clubs and societies provide the
              perfect platform for students to explore their interests, develop
              character, and serve the community.
            </p>
          </motion.div>

          {/* Club Categories Tabs */}
          <Tabs defaultValue="academic" className="w-full mb-30">
            <div className="flex justify-center mb-16 px-4">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-5xl !h-auto p-4 bg-muted/80 rounded-full gap-4">
                <TabsTrigger
                  value="academic"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Academic
                </TabsTrigger>
                <TabsTrigger
                  value="aesthetic"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Aesthetic
                </TabsTrigger>
                <TabsTrigger
                  value="religious_social"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Religious & Social
                </TabsTrigger>
                <TabsTrigger
                  value="special"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Special Interest
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.academic.map((club, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="hover:border-green-500/50 transition-colors h-full">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                          <club.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg">
                          {club.name}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aesthetic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.aesthetic.map((club, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="hover:border-purple-500/50 transition-colors h-full">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                          <club.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg">
                          {club.name}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="religious_social">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.religious_social.map((club, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="hover:border-amber-500/50 transition-colors h-full">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
                          <club.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg">
                          {club.name}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.special.map((club, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="hover:border-red-500/50 transition-colors h-full">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                          <club.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg">
                          {club.name}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-green-900 text-white p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/img/logo-circle.png')] bg-contain bg-center opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join?
              </h3>
              <p className="text-green-100 max-w-2xl mx-auto mb-8">
                Membership for clubs is open at the beginning of each academic
                year. Look out for the "Clubs Day" announcements or contact the
                respective Master-in-Charge.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
