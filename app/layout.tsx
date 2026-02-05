import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St. Benedict's College | Colombo 13",
  description:
    "160 years of human & Christian education. A premier educational institution managed by the De La Salle Brothers.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/img/logo2.png",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#1b5e3c",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
