import Link from 'next/link';
import { Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">St. Benedict's College</h3>
            <p className="text-sm opacity-90">Established in 1865</p>
            <p className="text-sm opacity-90 mt-2">Religio – Mores – Cultura</p>
            <p className="text-xs opacity-75 mt-4">
              A premier educational institution managed by the De La Salle Brothers, providing 160 years of human & Christian education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:opacity-75 transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Pickerings Road</p>
              <p>Colombo 13, Sri Lanka</p>
              <p className="mt-4">
                <a href="tel:+94112541234" className="hover:opacity-75 transition">
                  +94 (11) 254 1234
                </a>
              </p>
              <p>
                <a href="mailto:info@stbenedictscollege.lk" className="hover:opacity-75 transition">
                  info@stbenedictscollege.lk
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-75">
            <p>Copyright © 2026 | St. Benedict's College, Colombo 13, Sri Lanka. | All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
