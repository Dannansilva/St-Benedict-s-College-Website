"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  const items = [
    { label: "Years of Excellence", value: 160, suffix: "+" },
    { label: "Students", value: 2800, suffix: "+" },
    { label: "Qualified Teachers", value: 136, suffix: "" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Card className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {inView ? <CountUp end={s.value} duration={2} /> : s.value}
                  {s.suffix}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.label}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
