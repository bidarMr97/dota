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
  themeColor: "#ffffff",
  icons: [{ rel: "icon", url: "/images/war.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
           <SWRegister />
        <img src="/images/war.jpg" alt="warcraft" className="absolute fixed -z-10 h-full w-full object-cover blur-[3px]" />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
