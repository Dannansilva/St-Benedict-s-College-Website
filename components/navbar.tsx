"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-sm bg-background/70 backdrop-blur-xl border-border/40 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg relative z-50"
          >
            <motion.div
              className="relative w-[200px] h-20"
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/img/logo.png"
                alt="St. Benedict's College Logo"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className="transition font-medium text-sm outline-none text-foreground/90 hover:text-primary"
              >
                Our Story
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-background/80 backdrop-blur-xl border-border/50"
              >
                <DropdownMenuItem asChild>
                  <Link href="/about">About SBC</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/directors-message">Director&apos;s Message</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/crest-flag-anthem">
                    Crest, Flag &amp; Anthem
                  </Link>
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
                className="transition font-medium text-sm outline-none text-foreground/90 hover:text-primary"
              >
                Life at SBC
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-background/80 backdrop-blur-xl border-border/50"
              >
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

            <NavLink href="/news">News</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              asChild
              className="transition-colors hover:bg-primary/10 hover:text-primary text-foreground"
            >
              <Link href="/admissions">Admissions</Link>
            </Button>
            <Button
              asChild
              className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Link href="/admissions#apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50 absolute top-full left-0 right-0 shadow-xl"
            >
              <div className="p-4 space-y-4">
                <MobileLink href="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </MobileLink>

                <div className="space-y-2">
                  <p className="font-semibold text-primary text-sm px-2">
                    Our Story
                  </p>
                  <div className="pl-2 border-l-2 border-primary/20 space-y-2">
                    <MobileLink
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About SBC
                    </MobileLink>
                    <MobileLink
                      href="/directors-message"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Director&apos;s Message
                    </MobileLink>
                    <MobileLink
                      href="/crest-flag-anthem"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Crest, Flag &amp; Anthem
                    </MobileLink>
                    <MobileLink
                      href="/academic-staff"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Academic Staff
                    </MobileLink>
                    <MobileLink
                      href="/history"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      College History
                    </MobileLink>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-primary text-sm px-2">
                    Life at SBC
                  </p>
                  <div className="pl-2 border-l-2 border-primary/20 space-y-2">
                    <MobileLink
                      href="/academics"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Academics
                    </MobileLink>
                    <MobileLink
                      href="/clubs-societies"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Clubs &amp; Societies
                    </MobileLink>
                    <MobileLink
                      href="/sports"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sports
                    </MobileLink>
                    <MobileLink
                      href="/board-of-prefects"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Board of Prefects
                    </MobileLink>
                  </div>
                </div>

                <MobileLink
                  href="/news"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </MobileLink>
                <MobileLink
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </MobileLink>
                <MobileLink
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </MobileLink>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/admissions">Admissions</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/admissions#apply">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="relative group px-2 py-1">
      <span className="relative z-10 text-sm font-medium transition-colors duration-300 text-foreground/90 group-hover:text-primary">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" />
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-2 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}
