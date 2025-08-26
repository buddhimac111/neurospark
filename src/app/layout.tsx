import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NEUROSPARK - Premium Neurofuel Energy Bars",
  description: "Experience the power of natural nootropic energy bars designed to enhance brain function, improve focus, and boost energy levels with NEUROSPARK's Neurofuel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-950 text-white min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
