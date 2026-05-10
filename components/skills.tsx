"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  const duplicatedSkills = [...skillsData];

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-32 scroll-mt-28 text-center overflow-hidden"
    >
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="relative mt-12 w-full">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6">
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative flex items-center justify-center"
            >
              {/* Logo Container */}
              <div
                className="
          w-16 h-16 md:w-20 md:h-20
          rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
          backdrop-blur-xl
          flex items-center justify-center
          shadow-[0_0_25px_rgba(168,85,247,0.15)]
          hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
          transition-all duration-300
          cursor-pointer
        "
              >
                {/* Replace with actual logo component/image */}
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>

              {/* Tooltip on Hover */}
              <div
                className="
          absolute bottom-full mb-3
          px-3 py-1.5
          bg-white/95
          text-gray-900
          text-xs md:text-sm
          font-medium
          rounded-lg
          whitespace-nowrap
          opacity-0 scale-75
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200
          pointer-events-none
          shadow-lg
          z-50
        "
              >
                {skill.name}
                {/* Tooltip Arrow */}
                <div
                  className="
            absolute top-full left-1/2 transform -translate-x-1/2
            border-4 border-transparent border-t-white/95
          "
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
