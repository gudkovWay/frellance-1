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
  title: "Kraken Market | Мониторинг лучшего маркетплейса",
  description: "Перейди на лучший маркетплейс страны прямо сейчас",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Kraken Market",
    title: "Kraken Shop | Мониторинг лучшего маркетплейса",
    description: "Закажи все что хочешь внутри 1 площадки",
    images: "https://imgur.com/2cduRit",
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
