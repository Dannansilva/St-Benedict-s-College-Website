"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { newsData } from "@/lib/news-data";
import { NewsCard } from "@/components/news-card";

export default function NewsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              News & <span className="text-green-700">Events</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay connected with the heartbeat of St. Benedict&apos;s College.
              From academic milestones to sporting victories, here&apos;s
              what&apos;s happening on campus.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 group border-green-200 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-300"
            asChild
          >
            <Link href="/news">
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-green-700" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div
        className="container mx-auto px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {newsData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 md:pl-6 basis-[300px] md:basis-[380px]"
              >
                <NewsCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-20px] lg:left-[-40px]" />
            <CarouselNext className="right-[-20px] lg:right-[-40px]" />
          </div>
        </Carousel>
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <Button variant="outline" className="gap-2 group" asChild>
          <Link href="/news">
            View All News{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
