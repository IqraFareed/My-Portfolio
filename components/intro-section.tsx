"use client";

import React from "react";
import Image from "next/image";
import profile from "@/public/profile.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

const IntroSection = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id="home" className="section-shell scroll-mt-24 pb-24 pt-12 sm:pb-32 sm:pt-20 lg:pb-36 lg:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.6)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Front-End Engineer · Software Engineer</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Building production web experiences that are fast, scalable, and easy to use.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m Iqra Fareed, a Front-End Engineer with 5+ years of professional experience building production web applications with React, Next.js, and TypeScript. I focus on React and Next.js application architecture, responsive UI, API integration, reusable components, performance, and turning complex product requirements into intuitive user experiences.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
            Currently pursuing an M.S. in Computer Science at the University of Louisiana at Lafayette, where I&apos;m also developing AI/ML research interests in medical AI, Large Language Models, and reliable AI systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#projects" className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">
              View my work <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="/CV.pdf" target="_blank" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]">
              Resume <HiDownload />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span className="rounded-full border border-white/10 px-3 py-1.5">React</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">Next.js</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">TypeScript</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">UI Architecture</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">Performance</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="surface overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-900">
              <Image src={profile} alt="Portrait of Iqra Fareed" fill priority className="object-cover" sizes="(max-width: 1024px) 80vw, 360px" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-300">Current focus</p>
                <p className="mt-1 text-sm font-medium text-white">Frontend engineering + AI/ML research</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-2 pt-3">
              {[{ label: "React", Icon: FaReact }, { label: "Next.js", Icon: SiNextdotjs }, { label: "TypeScript", Icon: SiTypescript }].map(({ label, Icon }) => (
                <div key={label} className="flex items-center justify-center gap-1.5 rounded-xl bg-white/[0.04] px-2 py-2 text-[11px] text-zinc-400">
                  <Icon className="text-zinc-300" /> {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid grid-cols-2 border-y border-white/10 py-7 sm:grid-cols-4">
        {[
          ["5+", "Years of professional development"],
          ["React / Next.js", "Core frontend stack"],
          ["Production", "Real-world applications"],
          ["M.S. CS", "UL Lafayette · 2025–Present"],
        ].map(([value, label]) => (
          <div key={label} className="border-white/10 px-4 py-3 first:pl-0 sm:border-l sm:first:border-l-0">
            <p className="text-sm font-semibold text-white">{value}</p>
            <p className="mt-1 max-w-[12rem] text-xs leading-5 text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
