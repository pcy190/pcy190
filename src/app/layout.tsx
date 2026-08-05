import type { Metadata } from "next";
import { Literata, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";
import { avatar } from "@/lib/profile";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ret2happy · security research",
    template: "%s | ret2happy",
  },
  description:
    "Ph.D. candidate at Zhejiang University working on systems and blockchain security: eBPF runtimes, browser engines, and smart contracts.",
  keywords: [
    "security research",
    "eBPF",
    "fuzzing",
    "browser security",
    "blockchain security",
    "vulnerability research",
  ],
  icons: {
    icon: [{ url: avatar }],
    apple: [{ url: avatar }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${literata.variable} ${plexSans.variable} ${plexMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
