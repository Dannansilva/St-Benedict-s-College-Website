import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { newsData } from "@/lib/news-data";
import { NewsCard } from "@/components/news-card";

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              News & Events
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Stay up to date with the latest happenings, achievements, and
              upcoming events at St. Benedict&apos;s College.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {newsData.map((item, idx) => (
                <div key={idx} className="h-full">
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
