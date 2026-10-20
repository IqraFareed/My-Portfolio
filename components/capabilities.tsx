"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const items = [
  ["Frontend architecture", "Reusable React components, clear application structure, state management, and maintainable patterns for growing products."],
  ["Product UI engineering", "Turning Figma designs and product requirements into responsive interfaces with thoughtful interaction, loading, empty, and error states."],
  ["API-driven applications", "REST and GraphQL integration, asynchronous workflows, forms, data visualization, Firebase, and real-time application features."],
  ["Performance & web quality", "A practical focus on responsive behavior, efficient rendering, image and asset handling, SEO, accessibility fundamentals, and polished UX."],
];

export default function Capabilities() {
  const { ref } = useSectionInView("Work", 0.25);
  return (
    <section ref={ref} id="capabilities" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading eyebrow="Frontend strengths" title="What I bring to a product team" description="The engineering areas where my professional experience has the most practical depth." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map(([title, text], i) => (
          <motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className="surface rounded-2xl p-6 sm:p-7">
            <span className="text-xs font-semibold text-blue-400">0{i+1}</span>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
