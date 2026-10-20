"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.25);

  return (
    <section ref={ref} id="experience" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading
        eyebrow="Professional experience"
        title="5+ years building production frontend software"
        description="Experience across travel, fintech, healthcare, SaaS, and data-driven products, with a focus on React, Next.js, TypeScript, UI architecture, and product delivery."
      />

      <div className="mt-12 border-t border-white/10">
        {experiencesData.map((item, index) => (
          <motion.article key={item.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[190px_1fr] md:gap-10">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">{item.date}</p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm font-medium text-blue-400">{item.company}</p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-500">{highlight}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
