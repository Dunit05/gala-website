import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "A Night in Monte Carlo: BITSoc x SciCo Gala 2026",
  description: "A Night in Monte Carlo: BITSoc x SciCo Gala 2026 is a cinematic gala experience inspired by Riviera glamour, presented by the Business & IT Society & Science Council, featuring a styled buffet dinner, awards, signature drinks, photo moments, entertainment, and a polished after-dark finale.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
