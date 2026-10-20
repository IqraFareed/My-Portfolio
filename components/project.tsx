"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import type { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ number, title, category, description, role, tags, imageUrl, link, kind }: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isResearch = kind === "research";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className={`group grid overflow-hidden rounded-3xl border md:grid-cols-[1.05fr_.95fr] ${
        isResearch ? "border-blue-400/15 bg-blue-400/[0.025]" : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-zinc-950 md:min-h-[380px] md:border-b-0 md:border-r">
        <Image src={imageUrl} alt={`${title} project preview`} fill className="object-cover object-top opacity-80 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium text-zinc-200 backdrop-blur-md">
          {isResearch ? "Research" : `Project ${number}`}
        </span>
      </div>

      <div className="flex flex-col p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-400">{category}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{title}</h3>
          </div>
          {link && (
            <Link href={link} target="_blank" rel="noreferrer" aria-label={`Open ${title}`} className="focus-ring rounded-full border border-white/10 p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <HiArrowUpRight />
            </Link>
          )}
        </div>

        <p className="mt-5 text-sm leading-7 text-zinc-400">{description}</p>
        <p className="mt-5 text-xs font-medium text-zinc-500">Role: <span className="text-zinc-300">{role}</span></p>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400">{tag}</span>
          ))}
        </div>

        {!link && <span className="mt-5 text-xs text-zinc-600">{isResearch ? "Ongoing / academic work" : "Private / production application"}</span>}
      </div>
    </motion.article>
  );
};

export default Project;
