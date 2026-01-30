import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & News</h1>
            <p className="text-lg opacity-90">
              Stay updated with college news and access important resources
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* News Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-8">Latest News & Events</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    title: 'Annual Sports Day 2026',
                    date: 'March 15, 2026',
                    category: 'Sports',
                    excerpt:
                      'Join us for our annual sports day featuring inter-house competitions in cricket, football, athletics, and more.',
                    icon: Calendar,
                  },
                  {
                    title: 'Academic Excellence Awards',
                    date: 'February 28, 2026',
                    category: 'Events',
                    excerpt:
                      'Celebrating our top academic achievers and recognizing outstanding contributions to the school community.',
                    icon: FileText,
                  },
                  {
                    title: 'School Magazine Launch',
                    date: 'April 2, 2026',
                    category: 'News',
                    excerpt:
                      'The 2026 school magazine features student artwork, writings, and highlights from the academic year.',
                    icon: BookOpen,
                  },
                  {
                    title: 'Cultural Festival Planning',
                    date: 'May 10, 2026',
                    category: 'Events',
                    excerpt:
                      'Preparations underway for our annual cultural festival celebrating diverse talents and traditions.',
                    icon: Calendar,
                  },
                ].map((news) => {
                  const Icon = news.icon;
                  return (
                    <Card key={news.title} className="p-6 hover:shadow-lg transition">
                      <div className="flex gap-4 mb-4">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                            {news.category}
                          </div>
                          <h3 className="font-bold text-foreground mb-1">{news.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{news.date}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {news.excerpt}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Resources Section */}
            <div className="mb-20 pt-20 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Resources & Downloads</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'School Calendar 2026',
                    description: 'Academic calendar with important dates and holidays',
                    type: 'PDF',
                    size: '1.2 MB',
                  },
                  {
                    title: 'School Handbook',
                    description: 'Comprehensive guide to school policies and procedures',
                    type: 'PDF',
                    size: '2.8 MB',
                  },
                  {
                    title: 'Uniform & Dress Code Policy',
                    description: 'Details on school uniform requirements and dress code',
                    type: 'PDF',
                    size: '0.9 MB',
                  },
                  {
                    title: 'Parent-Teacher Meeting Schedule',
                    description: 'Schedule for parent-teacher meetings throughout the year',
                    type: 'PDF',
                    size: '0.5 MB',
                  },
                  {
                    title: 'Discipline Policy',
                    description: 'School discipline guidelines and procedures',
                    type: 'PDF',
                    size: '1.5 MB',
                  },
                  {
                    title: 'Extra-Curricular Activities Guide',
                    description: 'Information about clubs, sports, and other activities',
                    type: 'PDF',
                    size: '2.1 MB',
                  },
                ].map((resource) => (
                  <Card key={resource.title} className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{resource.title}</h3>
                        <p className="text-muted-foreground text-sm">{resource.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{resource.type} • {resource.size}</span>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Important Links */}
            <div className="pt-20 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Important Links</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Student Portal',
                    description: 'Access grades, assignments, and school announcements',
                  },
                  {
                    title: 'Parent Portal',
                    description: 'Track student progress and communicate with teachers',
                  },
                  {
                    title: 'Online Library',
                    description: 'Access digital resources and research materials',
                  },
                  {
                    title: 'Learning Management System',
                    description: 'Access online classes and course materials',
                  },
                  {
                    title: 'Alumni Network',
                    description: 'Connect with fellow alumni and school community',
                  },
                  {
                    title: 'Facilities Booking',
                    description: 'Book school facilities for events',
                  },
                ].map((link) => (
                  <Card key={link.title} className="p-6 hover:shadow-lg transition cursor-pointer">
                    <h3 className="font-bold text-foreground mb-2">{link.title}</h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
