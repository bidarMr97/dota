import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SWRegister from "@/components/sw/sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "دستیار دوتا",
  description: "7.03b راهنمای آموزشی مپ وارکرفت",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://dota1.ir"), 
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="ltr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <SWRegister />
        <img src="/images/war.jpg" alt="warcraft" className="absolute fixed -z-10 h-full w-full object-cover blur-[3px]" />
        <head>
          <meta name="color-scheme" content="light" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
