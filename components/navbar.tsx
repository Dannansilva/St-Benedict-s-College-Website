'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              SB
            </div>
            <span className="hidden sm:inline text-foreground">St. Benedict&apos;s College</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className="text-foreground hover:text-primary transition"
              >
                Our Story
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about">About SBC</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/directors-message">Director&apos;s Message</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/crest-flag-anthem">Crest, Flag &amp; Anthem</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academic-staff">Academic Staff</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/history">College History</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className="text-foreground hover:text-primary transition"
              >
                Life at SBC
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/academics">Academics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/clubs-societies">Clubs &amp; Societies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sports">Sports</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/board-of-prefects">Board of Prefects</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/resources" className="text-foreground hover:text-primary transition">
              Resources
            </Link>

            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/admissions">Admissions</Link>
            </Button>
            <Button asChild>
              <Link href="/admissions#apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-foreground hover:text-primary py-2">
              Home
            </Link>

            <div>
              <p className="font-semibold text-foreground mb-2">Our Story</p>
              <div className="pl-4 space-y-2">
                <Link href="/about" className="block text-sm text-foreground hover:text-primary">
                  About SBC
                </Link>
                <Link
                  href="/directors-message"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Director&apos;s Message
                </Link>
                <Link
                  href="/crest-flag-anthem"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Crest, Flag &amp; Anthem
                </Link>
                <Link
                  href="/academic-staff"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Academic Staff
                </Link>
                <Link href="/history" className="block text-sm text-foreground hover:text-primary">
                  College History
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Life at SBC</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/academics"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Academics
                </Link>
                <Link
                  href="/clubs-societies"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Clubs &amp; Societies
                </Link>
                <Link href="/sports" className="block text-sm text-foreground hover:text-primary">
                  Sports
                </Link>
                <Link
                  href="/board-of-prefects"
                  className="block text-sm text-foreground hover:text-primary"
                >
                  Board of Prefects
                </Link>
              </div>
            </div>

            <Link href="/resources" className="block text-foreground hover:text-primary py-2">
              Resources
            </Link>

            <Link href="/contact" className="block text-foreground hover:text-primary py-2">
              Contact Us
            </Link>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <Link href="/admissions">Admissions</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/admissions#apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
