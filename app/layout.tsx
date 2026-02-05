import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tommy Eder | Private Cooking & Kochkurse · Handelszentrum 16",
  description:
    "Tommy Eder — bekannt aus dem Hangar 7, jetzt im Handelszentrum 16. Private Cooking, exklusive Kochkurse, SOY & SOUL. Gourmetküche für jedermann. Österreich.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Tommy Eder | Private Cooking, Kochkurse, SOY & SOUL",
    description:
      "Private Cooking & Kochkurse im Handelszentrum 16. Spitzengastronomie für Events und alle Genießer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
