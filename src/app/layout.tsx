import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/Header";
import "swiper/css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kraken Shop Monitoring",
  description: "All what u need in one place",
  openGraph: {
    title: "Kraken Shop | Мониторинг лучшего маркетплейса",
    description: "Закажи все что хочешь внутри 1 площадки",
    images: "https://imgur.com/d1c1eb31-417c-4f0b-90c2-3984d9904f35",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
