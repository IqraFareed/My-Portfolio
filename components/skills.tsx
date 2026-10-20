"use client";

import React from "react";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.35);

  return (
    <section ref={ref} id="skills" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading
        eyebrow="Technical skills"
        title="A production-focused frontend toolkit"
        description="My strongest area is frontend engineering. The stack below reflects the technologies and practices I have used across professional applications, plus the AI/ML tools I am developing through graduate work."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="surface rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white">{group.title}</h3>
            <p className="mt-2 text-xs leading-5 text-zinc-500">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-xs text-zinc-400">{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">Current engineering focus</p>
        <div className="mt-4 grid gap-4 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-4">
          <p><strong className="text-white">Architecture:</strong> reusable components, state and data flow, maintainable UI structure.</p>
          <p><strong className="text-white">UX:</strong> responsive interfaces, design fidelity, clear loading/error states, and polished interaction.</p>
          <p><strong className="text-white">Quality:</strong> semantic markup, accessibility fundamentals, performance, SEO, and production readiness.</p>
          <p><strong className="text-white">Delivery:</strong> Git workflows, Agile collaboration, code review, API integration, and deployment.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
