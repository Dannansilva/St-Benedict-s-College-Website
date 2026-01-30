'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Music } from 'lucide-react';
import { useState } from 'react';

export default function CrestFlagAnthemPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Crest, Flag & Anthem
            </h1>
            <p className="text-lg opacity-90">
              Symbols of our school identity and heritage
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="crest" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="crest">School Crest</TabsTrigger>
                <TabsTrigger value="flag">School Flag</TabsTrigger>
                <TabsTrigger value="anthem">School Anthem</TabsTrigger>
              </TabsList>

              {/* Crest Tab */}
              <TabsContent value="crest" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">School Crest</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The school crest is a distinctive symbol that represents the values and heritage of St. Benedict's College. It embodies the Lasallian tradition and our commitment to educational excellence.
                  </p>
                </div>

                <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-5xl font-bold text-primary">SB</span>
                    </div>
                    <p className="text-muted-foreground">St. Benedict's College Crest</p>
                  </div>
                </Card>

                <Card className="p-6 bg-secondary/50 border-secondary">
                  <h3 className="font-bold text-foreground mb-4">Symbolism</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The crest features the initials "SB" representing St. Benedict's College. The design reflects:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Excellence:</strong> A commitment to academic and personal achievement</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Heritage:</strong> Our 160-year legacy of Christian education</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Community:</strong> Unity and belonging within our school family</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Values:</strong> Religio, Mores, and Cultura</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              {/* Flag Tab */}
              <TabsContent value="flag" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">School Flag</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The school flag is proudly displayed at our campus and carried in processions. It represents the unity and spirit of the St. Benedict's College community.
                  </p>
                </div>

                <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <div className="w-64 h-48 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">SBC</span>
                    </div>
                    <p className="text-muted-foreground mt-4">St. Benedict's College Flag</p>
                  </div>
                </Card>

                <Card className="p-6 bg-secondary/50 border-secondary">
                  <h3 className="font-bold text-foreground mb-4">Design</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Color:</strong> Rich green representing growth, learning, and life</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Emblem:</strong> School initials prominently displayed</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Significance:</strong> Symbol of school pride and community spirit</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              {/* Anthem Tab */}
              <TabsContent value="anthem" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">School Anthem</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The school anthem is sung at morning assemblies and special events. It encapsulates the spirit, values, and aspirations of St. Benedict's College.
                  </p>
                </div>

                {/* Audio Player */}
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition"
                    >
                      {isPlaying ? (
                        <Music className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </button>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">School Anthem</h3>
                      <p className="text-sm text-muted-foreground">
                        {isPlaying ? 'Now playing...' : 'Click to play'}
                      </p>
                      <div className="w-full h-1 bg-border rounded-full mt-2 mt-4">
                        <div className="h-full bg-primary rounded-full" style={{ width: isPlaying ? '65%' : '0%' }} />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Lyrics */}
                <Card className="p-8">
                  <h3 className="font-bold text-foreground mb-6">Lyrics</h3>
                  <div className="space-y-6 text-muted-foreground leading-relaxed font-serif">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Verse 1</p>
                      <p>
                        Upon Pickerings Road of old,<br />
                        A college stands with heart of gold,<br />
                        Where truth and virtue light the way,<br />
                        And learning guides us every day.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Chorus</p>
                      <p>
                        Religio, Mores, Cultura true,<br />
                        Our motto guides all we do,<br />
                        St. Benedict's we hold so dear,<br />
                        With pride through every passing year.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Verse 2</p>
                      <p>
                        One hundred sixty years have passed,<br />
                        A legacy that will long last,<br />
                        We strive for excellence each day,<br />
                        Together showing Benedictine way.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Final Chorus</p>
                      <p>
                        Religio, Mores, Cultura true,<br />
                        Our motto guides all we do,<br />
                        St. Benedict's we hold so dear,<br />
                        Forever true, year after year.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
