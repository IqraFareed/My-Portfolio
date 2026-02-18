import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software Engineer | React, Next.js, Full-Stack Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
           ${inter.className}
    relative min-h-screen
    bg-gradient-to-br
    from-[#1a0f38] via-[#24124a] to-[#613a9b]
    text-gray-100
    pt-28 sm:pt-36
    overflow-x-hidden
    dark:from-[#120826] dark:via-[#1b0f3a] dark:to-black
        `}
      >
        {/* Electric Pink Glow (Top Right) */}
        <div
          className="
            absolute top-[-10rem] right-[-5rem] -z-10
            h-[35rem] w-[35rem]
            rounded-full
            bg-pink-600/40
            blur-[140px]
            animate-pulse
          "
        />

        {/* Deep Purple Glow (Left Side) */}
        <div
          className="
            absolute top-[5rem] left-[-15rem] -z-10
            h-[40rem] w-[40rem]
            rounded-full
            bg-[#613a9b]
            blur-[150px]
            animate-pulse
          "
        />

        {/* Subtle Radial Overlay Texture */}
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(circle_at_30%_20%,rgba(219,39,119,0.15),transparent_40%)]
          "
        />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
