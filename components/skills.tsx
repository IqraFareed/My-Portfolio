"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 w-[73rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills I Have</SectionHeading>
      <ul
        className="  mt-12
  grid
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-6
  gap-4
  text-sm"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-2xl
        px-6 py-4
        text-white
        shadow-[0_0_30px_rgba(168,85,247,0.15)]
        hover:shadow-[0_0_40px_rgba(219,39,119,0.35)]
        transition-all duration-300
      "
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
