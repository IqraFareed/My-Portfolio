"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-32 scroll-mt-28 text-center overflow-hidden"
    >
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="relative mt-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="
                px-6 py-3
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                text-white/90
                text-sm
                whitespace-nowrap
                shadow-[0_0_25px_rgba(168,85,247,0.15)]
              "
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
