import React from "react";

type Props = { eyebrow?: string; title?: string; description?: string; children?: React.ReactNode };

const SectionHeading = ({ eyebrow, title, description, children }: Props) => (
  <div className="max-w-2xl">
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="section-title">{title ?? children}</h2>
    {description && <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">{description}</p>}
  </div>
);

export default SectionHeading;
