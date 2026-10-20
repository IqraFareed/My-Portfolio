"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About", 0.25);
  return (
    <section ref={ref} id="about" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading eyebrow="About me" title="Frontend engineering with a product mindset" description="I build interfaces that are maintainable for engineers and intuitive for the people using them." />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="surface rounded-3xl p-7 sm:p-9">
          <p className="text-base leading-8 text-zinc-300">I&apos;m a Front-End Engineer with 5+ years of professional experience building production web applications with React, Next.js, and TypeScript. I&apos;ve worked across travel, fintech, healthcare, SaaS, and data-driven products, turning product requirements and Figma designs into responsive, maintainable interfaces.</p>
          <p className="mt-5 text-base leading-8 text-zinc-400">My work spans reusable component architecture, state management, REST and GraphQL integration, forms, real-time experiences, data visualization, responsive UI, animation, SEO, and performance-conscious frontend development.</p>
          <p className="mt-5 text-base leading-8 text-zinc-400">I&apos;m currently pursuing an M.S. in Computer Science at the University of Louisiana at Lafayette. My graduate work has expanded my interests into machine learning, medical AI, Large Language Models, uncertainty quantification, and reliable AI systems.</p>
        </motion.div>
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.08}} className="rounded-3xl border border-blue-400/20 bg-blue-400/[0.05] p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">How I work</p>
          <ul className="mt-6 space-y-5 text-sm leading-6 text-zinc-300">
            <li><strong className="text-white">Product first:</strong> I think about the workflow and user outcome, not only the screen being implemented.</li>
            <li><strong className="text-white">Reusable by default:</strong> I prefer component patterns and application structure that can grow with the product.</li>
            <li><strong className="text-white">Quality matters:</strong> responsive behavior, accessibility fundamentals, performance, and clear UI states are part of the implementation.</li>
            <li><strong className="text-white">Collaborative delivery:</strong> I work closely with design, backend, QA, and product teams from requirements through release.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
