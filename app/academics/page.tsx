"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Microscope,
  Calculator,
  Palette,
  Globe,
  Monitor,
  FlaskConical,
  Dna,
  Atom,
  Building2,
  Cpu,
  Sprout,
  Users,
  Library,
  Lightbulb,
} from "lucide-react";

export default function AcademicsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const facilities = [
    {
      title: "Science Laboratories",
      description:
        "Fully equipped Physics, Chemistry, and Biology labs for practical learning.",
      icon: FlaskConical,
      color: "text-blue-500",
    },
    {
      title: "Computer Laboratories",
      description:
        "State-of-the-art computer labs with high-speed internet and modern software.",
      icon: Monitor,
      color: "text-purple-500",
    },
    {
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources for research.",
      icon: Library,
      color: "text-amber-500",
    },
    {
      title: "Smart Classrooms",
      description:
        "Interactive learning environments with multimedia capabilities.",
      icon: Lightbulb,
      color: "text-yellow-500",
    },
    {
      title: "Auditorium",
      description:
        "A grand venue for academic gatherings, performances, and events.",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Sports Complex",
      description: "Facilities supporting physical education and team sports.",
      icon: Dna, // Using Dna as a placeholder for activity/movement if specific sports icon isn't imported
      color: "text-red-500",
    },
  ];

  const streams = {
    primary: [
      { name: "Mathematics", icon: Calculator },
      { name: "Languages (English, Sinhala, Tamil)", icon: Globe },
      { name: "Religion", icon: BookOpen },
      { name: "Environmental Studies", icon: Sprout },
    ],
    secondary: [
      { name: "Science", icon: Microscope },
      { name: "Mathematics", icon: Calculator },
      { name: "History & Civics", icon: BookOpen },
      { name: "English Literature", icon: Globe },
      { name: "Commerce", icon: Building2 },
      { name: "Information Technology", icon: Monitor },
    ],
    advanced: [
      {
        title: "Physical Science",
        subjects: ["Combined Mathematics", "Physics", "Chemistry / ICT"],
        icon: Atom,
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
      },
      {
        title: "Biological Science",
        subjects: ["Biology", "Chemistry", "Physics / Agriculture"],
        icon: Dna,
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
      },
      {
        title: "Commerce",
        subjects: ["Economics", "Business Studies", "Accounting"],
        icon: Building2,
        bg: "bg-amber-50 dark:bg-amber-900/20",
        border: "border-amber-200 dark:border-amber-800",
      },
      {
        title: "Arts",
        subjects: [
          "Languages",
          "Logic",
          "Geography",
          "History",
          "Pol. Science",
        ],
        icon: Palette,
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
      },
      {
        title: "Technology",
        subjects: ["Engineering Tech", "Bio Systems Tech", "Science for Tech"],
        icon: Cpu,
        bg: "bg-slate-50 dark:bg-slate-900/20",
        border: "border-slate-200 dark:border-slate-800",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-green-950">
          <div className="absolute inset-0 bg-[url('/img/Academics.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm uppercase tracking-widest border-none">
                Academic Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                Nurturing Future Leaders
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                A comprehensive curriculum designed to inspire critical
                thinking, innovation, and holistic growth.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          {/* Mission/Intro */}
          <motion.div
            {...fadeIn}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Academic Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At St. Benedict's College, we believe in an education that goes
              beyond textbooks. Our academic structure is meticulously designed
              to cater to students at every stage of their development,
              fostering intellectual curiosity and practical skills that prepare
              them for the challenges of the modern world.
            </p>
          </motion.div>

          {/* Academic Structure (Tabs) */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-center mb-10 text-green-800 dark:text-green-400 uppercase tracking-wide">
              Academic Structure
            </h3>
            <Tabs defaultValue="advanced" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto mb-12 h-auto p-1 bg-muted/50 rounded-full">
                <TabsTrigger
                  value="primary"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Primary & Lower Secondary
                </TabsTrigger>
                <TabsTrigger
                  value="secondary"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Upper Secondary (O/L)
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-full py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Collegiate (A/L)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {streams.primary.map((item, idx) => (
                    <Card
                      key={idx}
                      className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                          <item.icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                        </div>
                        <span className="font-semibold text-lg">
                          {item.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
                <p className="text-center mt-8 text-muted-foreground italic">
                  Focusing on foundational literacy, numeracy, and character
                  building in a nurturing environment.
                </p>
              </TabsContent>

              <TabsContent value="secondary">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {streams.secondary.map((item, idx) => (
                    <Card
                      key={idx}
                      className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          <item.icon className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                        </div>
                        <span className="font-semibold text-lg">
                          {item.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
                <p className="text-center mt-8 text-muted-foreground italic">
                  Prepare students for the G.C.E. Ordinary Level Examination
                  with a broad range of core and optional subjects.
                </p>
              </TabsContent>

              <TabsContent value="advanced">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {streams.advanced.map((stream, idx) => (
                    <Card
                      key={idx}
                      className={`overflow-hidden border-2 ${stream.border} ${stream.bg} shadow-md hover:shadow-lg transition-all`}
                    >
                      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-xl font-bold">
                          {stream.title}
                        </CardTitle>
                        <stream.icon className="w-6 h-6 text-muted-foreground opacity-70" />
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mt-4">
                          {stream.subjects.map((subject, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-center text-sm font-medium text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mr-2" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
                <p className="text-center mt-8 text-muted-foreground italic">
                  Advanced specialized streams preparing students for University
                  Entrance and Professional Careers.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Facilities Section */}
          <section>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              World-Class Facilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:border-green-500/50 transition-colors group">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div
                        className={`p-4 rounded-2xl bg-muted group-hover:bg-background transition-colors mb-6 border border-border group-hover:border-green-200 dark:group-hover:border-green-800`}
                      >
                        <facility.icon
                          className={`w-8 h-8 ${facility.color}`}
                        />
                      </div>
                      <h4 className="text-xl font-bold mb-3">
                        {facility.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
