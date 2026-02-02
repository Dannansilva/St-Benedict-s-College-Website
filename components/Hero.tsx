"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to{" "}
          <span className="text-green-400">St. Benedict’s College</span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-white/80">
          160 Years of Human & Christian Education
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#life-at-sbc">Explore Life at SBC</Link>
          </Button>

          <Button size="lg" variant="secondary" asChild>
            <Link href="/admissions">Admissions</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
