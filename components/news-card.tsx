import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type NewsItem } from "@/lib/news-data";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={item.link || "#"}
      className="block h-full group focus:outline-none"
    >
      <Card className="h-[400px] border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl relative isolate">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div
              className={cn(
                "w-full h-full flex items-center justify-center bg-gray-900",
                item.bg,
              )}
            >
              {/* Pattern for fallback */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-black to-transparent" />
              <item.icon className={cn("w-32 h-32 opacity-20 text-white")} />
            </div>
          )}

          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
        </div>

        <CardContent className="p-0 h-full relative z-10 flex flex-col justify-end">
          {/* Top Badges */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-sm">
              {item.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="p-6 md:p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
            <div className="flex items-center gap-2 text-white/80 text-xs font-bold tracking-widest uppercase mb-3">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white group-hover:text-primary-foreground transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-0 group-hover:text-white transition-colors duration-300">
              {item.summary}
            </p>

            {/* Hover indicator line */}
            <div className="mt-4 w-12 h-1 bg-primary/80 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
