"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);
  return (
    <section ref={ref} id="education" className="section-shell scroll-mt-28 pb-28 sm:pb-36">
      <SectionHeading eyebrow="Education" title="Computer science & software engineering" description="Graduate study is expanding my engineering background into machine learning and AI research." />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="surface rounded-3xl p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">2025 — Present</p>
          <h3 className="mt-3 text-xl font-semibold text-white">M.S. Computer Science</h3>
          <p className="mt-1 text-sm text-zinc-400">University of Louisiana at Lafayette</p>
          <p className="mt-5 text-sm leading-7 text-zinc-400">Graduate study and research spanning artificial intelligence, machine learning, medical AI, Large Language Models, uncertainty quantification, graph representation learning, and reliable AI systems.</p>
        </article>
        <article className="surface rounded-3xl p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">2017 — 2021</p>
          <h3 className="mt-3 text-xl font-semibold text-white">B.S. Software Engineering</h3>
          <p className="mt-1 text-sm text-zinc-400">COMSATS University Islamabad</p>
          <p className="mt-5 text-sm leading-7 text-zinc-400">Foundation in software engineering, programming, application development, software design, and engineering practices that led into professional frontend development.</p>
        </article>
      </div>
    </section>
  );
}
