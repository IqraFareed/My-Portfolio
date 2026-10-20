import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-t border-white/10 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p>© 2026 Iqra Fareed. All rights reserved.</p>
      <p className="mt-1">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
    </div>
    <div className="flex items-center gap-2">
      <a aria-label="GitHub" href="https://github.com/IqraFareed" target="_blank" rel="noreferrer" className="focus-ring rounded-lg p-2 transition hover:bg-white/5 hover:text-white"><FaGithub /></a>
      <a aria-label="LinkedIn" href="https://www.linkedin.com/in/iqra-fareed-2701871a5/" target="_blank" rel="noreferrer" className="focus-ring rounded-lg p-2 transition hover:bg-white/5 hover:text-white"><FaLinkedinIn /></a>
      <a href="mailto:iqrafareed56@gmail.com" className="focus-ring rounded-lg px-2 py-1 transition hover:text-white">Email</a>
    </div>
  </footer>
);

export default Footer;
