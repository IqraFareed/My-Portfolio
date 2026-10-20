"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0c0f]/85 px-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-4">
        <Link href="#home" className="focus-ring flex items-center gap-2 rounded-lg px-2 text-sm font-semibold tracking-tight text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/10 text-blue-400">IF</span>
          <span className="hidden sm:block">Iqra Fareed</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "relative rounded-lg px-3 py-2 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                    activeSection === link.name ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                >
                  {activeSection === link.name && (
                    <motion.span layoutId="active-nav" className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]" />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a aria-label="GitHub" href="https://github.com/IqraFareed" target="_blank" rel="noreferrer" className="focus-ring rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white">
            <FaGithub />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/iqra-fareed-2701871a5/" target="_blank" rel="noreferrer" className="focus-ring rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="/CV.pdf" target="_blank" className="focus-ring ml-1 hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-200 sm:flex">
            Resume <HiDownload />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
