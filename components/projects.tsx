"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Work", 0.25);

  return (
    <section ref={ref} id="projects" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading
        eyebrow="Selected work"
        title="Production engineering + research"
        description="A mix of production frontend work and graduate research projects. The first projects highlight my professional engineering experience; the later projects show my current direction in AI and machine learning."
      />

      <div className="mt-12 space-y-6">
        {projectsData.map((project) => (
          <Project key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
