import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
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
      <div className="h-full">
        <Card className="h-full border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:translate-y-[-8px] overflow-hidden bg-card">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Visual Header */}
            <div
              className={cn(
                "h-48 relative overflow-hidden flex items-center justify-center transition-colors duration-500",
                item.bg,
              )}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />

              <item.icon
                className={cn(
                  "w-16 h-16 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-3",
                  item.color,
                )}
              />

              {/* Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-background/90 backdrop-blur-md shadow-sm border border-border/50 text-foreground">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3 font-medium">
                <Calendar className="w-4 h-4 text-green-600" />
                {item.date}
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {item.summary}
              </p>

              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm font-semibold text-green-700 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
