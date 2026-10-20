import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iqra Fareed | Front-End Engineer",
  description:
    "Front-End Engineer with 5+ years of experience building production web applications with React, Next.js, and TypeScript. M.S. Computer Science student at the University of Louisiana at Lafayette.",
  openGraph: {
    title: "Iqra Fareed | Front-End Engineer",
    description:
      "React, Next.js and TypeScript engineer building polished, scalable web experiences.",
    type: "website",
    url: "https://iqrafareed-portfolio-site.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} min-h-screen overflow-x-hidden pt-20 sm:pt-24`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
