'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Users, Search } from 'lucide-react';

export default function AcademicStaffPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const staff = [
    {
      name: 'Dr. Rajapaksha',
      position: 'Principal',
      department: 'Administration',
      email: 'principal@stbenedictscollege.lk',
    },
    {
      name: 'Fr. Anthonysamy',
      position: 'Vice Principal',
      department: 'Administration',
      email: 'vp@stbenedictscollege.lk',
    },
    {
      name: 'Mrs. Silva',
      position: 'Head of Sciences',
      department: 'Science',
      email: 'sciences@stbenedictscollege.lk',
    },
    {
      name: 'Mr. Jayawardena',
      position: 'Head of Languages',
      department: 'Languages',
      email: 'languages@stbenedictscollege.lk',
    },
    {
      name: 'Prof. Fernando',
      position: 'Head of Mathematics',
      department: 'Mathematics',
      email: 'maths@stbenedictscollege.lk',
    },
    {
      name: 'Dr. Perera',
      position: 'Head of Humanities',
      department: 'Humanities',
      email: 'humanities@stbenedictscollege.lk',
    },
  ];

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Staff</h1>
            <p className="text-lg opacity-90">
              136 dedicated educators committed to excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our faculty comprises highly qualified educators with expertise across all subject areas. Dedicated to both academic excellence and student development, our teachers create a supportive learning environment that nurtures intellectual growth and personal character development.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, position, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {staff.slice(0, 2).map((member) => (
                  <Card key={member.name} className="p-8">
                    <div className="flex gap-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                        <p className="text-primary font-semibold text-sm mb-3">{member.position}</p>
                        <p className="text-muted-foreground text-sm">
                          <a href={`mailto:${member.email}`} className="hover:text-primary transition">
                            {member.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Departments & Faculty */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Faculty Directory</h2>
              {filteredStaff.length > 0 ? (
                <div className="space-y-4">
                  {filteredStaff.map((member) => (
                    <Card key={member.name} className="p-6 hover:shadow-md transition">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                          <p className="text-primary font-semibold text-sm mb-2">{member.position}</p>
                          <p className="text-muted-foreground text-sm">{member.department}</p>
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-primary hover:text-primary/80 transition text-sm font-medium whitespace-nowrap"
                        >
                          Contact
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">No staff members found matching your search.</p>
                </Card>
              )}
            </div>

            {/* Departments */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Science Department',
                  desc: 'Comprehensive science education through modern labs',
                  faculty: '28 educators',
                },
                {
                  name: 'Languages Department',
                  desc: 'Multilingual education and language development',
                  faculty: '18 educators',
                },
                {
                  name: 'Mathematics Department',
                  desc: 'Advanced mathematics and analytical thinking',
                  faculty: '15 educators',
                },
              ].map((dept) => (
                <Card key={dept.name} className="p-6">
                  <h3 className="font-bold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{dept.desc}</p>
                  <p className="text-primary text-xs font-semibold">{dept.faculty}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
