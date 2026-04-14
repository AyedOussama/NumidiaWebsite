import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://numidia.agency"),
  title: {
    default: "Numidia Agency | Marketing, web et IA",
    template: "%s | Numidia Agency",
  },
  description:
    "Numidia accompagne les entreprises ambitieuses avec des solutions digitales sur mesure en stratégie marketing, création web, branding, publicité et intelligence artificielle.",
  icons: {
    icon: [{ url: "/images/Numidia_logo.png", type: "image/png" }],
    apple: [{ url: "/images/Numidia_logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Numidia Agency | Marketing, web et IA",
    description:
      "Solutions digitales sur mesure en stratégie marketing, création web, branding, publicité et intelligence artificielle.",
    locale: "fr_FR",
    siteName: "Numidia Agency",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-gray-50 font-sans text-gray-900 flex flex-col selection:bg-amber-500 selection:text-emerald-950"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
