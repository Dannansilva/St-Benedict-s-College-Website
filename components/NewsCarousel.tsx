"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const news = [
  { title: "Annual Sports Day", date: "March 15, 2026", category: "Sports" },
  { title: "School Magazine Launch", date: "April 2, 2026", category: "News" },
  { title: "Graduation Ceremony", date: "May 22, 2026", category: "Events" },
  { title: "Inter-House Athletic Meet", date: "June 10, 2026", category: "Sports" },
  { title: "Founders Day Celebration", date: "July 1, 2026", category: "Events" },
];

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            News & Events
          </h2>

          <div className="flex gap-2">
            <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Use padding-based spacing instead of gap */}
          <div className="flex -ml-4">
            {news.map((item, i) => (
              <div
                key={i}
                className="
                  pl-4
                  shrink-0
                  basis-[85%]
                  sm:basis-[60%]
                  md:basis-[45%]
                  lg:basis-[33.333%]
                "
              >
                <Card className="h-full p-6 hover:shadow-xl transition">
                  <div className="h-36 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-12 h-12 text-muted-foreground" />
                  </div>

                  <span className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
