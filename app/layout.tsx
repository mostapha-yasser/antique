import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/fixed/Header";
import Footer from "../components/fixed/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antique | Tables & Mirrors Store",
  description: "Discover premium handcrafted tables and elegant mirrors at Antique. Stylish furniture for timeless spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-Background)] text-[var(--color-Text)]`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}