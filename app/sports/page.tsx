import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Zap } from "lucide-react";

export default function SportsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports</h1>
            <p className="text-lg opacity-90">
              Building character through athletic excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Sports Program
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                St. Benedict's College provides comprehensive sports programs
                that cater to students of all ability levels. Our sports
                department is committed to developing athletic excellence,
                teamwork, discipline, and sportsmanship among our students.
              </p>
            </div>

            {/* Sports Offered */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Sports Offered
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    category: "Team Sports",
                    sports: [
                      "Cricket",
                      "Football",
                      "Basketball",
                      "Volleyball",
                      "Badminton",
                    ],
                  },
                  {
                    category: "Individual Sports",
                    sports: [
                      "Athletics",
                      "Swimming",
                      "Tennis",
                      "Table Tennis",
                      "Squash",
                    ],
                  },
                  {
                    category: "Traditional Sports",
                    sports: [
                      "Martial Arts",
                      "Gymnastics",
                      "Chess",
                      "Archery",
                      "Weightlifting",
                    ],
                  },
                ].map((category) => (
                  <Card key={category.category} className="p-6">
                    <h3 className="font-bold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.sports.map((sport) => (
                        <li
                          key={sport}
                          className="text-muted-foreground text-sm flex gap-2"
                        >
                          <span className="text-primary font-bold">•</span>
                          <span>{sport}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: Trophy,
                  title: "Excellence",
                  description:
                    "Competitive programs that develop athletic excellence and championship mindset.",
                },
                {
                  icon: Users,
                  title: "Teamwork",
                  description:
                    "Emphasis on collaboration, communication, and collective achievement.",
                },
                {
                  icon: Zap,
                  title: "Fitness",
                  description:
                    "Modern facilities and professional coaching ensuring optimal physical development.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Facilities */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Sports Facilities
              </h2>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Multi-purpose indoor gymnasium",
                    "Cricket ground with practice nets",
                    "Football field",
                    "Basketball and volleyball courts",
                    "Swimming pool",
                    "Tennis courts",
                    "Badminton courts",
                    "Weight training center",
                    "Athletic track",
                    "Martial arts studio",
                  ].map((facility) => (
                    <li
                      key={facility}
                      className="text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Sports Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Fair Play",
                    description:
                      "Upholding the highest standards of integrity, honesty, and respect in all competitions.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "Striving for excellence through dedication, hard work, and continuous improvement.",
                  },
                  {
                    title: "Teamwork",
                    description:
                      "Valuing collaboration and understanding that success comes through team effort.",
                  },
                  {
                    title: "Discipline",
                    description:
                      "Developing self-discipline and respect for rules and authority.",
                  },
                ].map((value) => (
                  <Card key={value.title} className="p-6">
                    <h3 className="font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
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
