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
  title: "Midnight in Monte Carlo: SciCo x BITSoc Gala 2026",
  description: "Midnight in Monte Carlo: SciCo x BITSoc Gala 2026 is a cinematic gala experience inspired by Riviera glamour, presented by the Buisness & IT Society & Science Council, featuring a styled buffet dinner, awards, signature drinks, photo moments, entertainment, and a polished after-dark finale.",
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
