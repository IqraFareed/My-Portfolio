"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="
        group relative
        max-w-[42rem]
          min-h-[25rem]
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(168,85,247,0.15)]
        overflow-hidden
        mb-6 sm:mb-10
        transition-all duration-500
        hover:shadow-[0_0_60px_rgba(219,39,119,0.35)]
      "
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-semibold text-white tracking-wide">
          {title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-300">{description}</p>

        <Link
          href={link?.startsWith("http") ? link : `https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            my-3 inline-block
            text-pink-400
            hover:text-pink-300
            underline underline-offset-4
            transition-colors
          "
          prefetch={false}
        >
          {link}
        </Link>

        <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="
                px-3 py-1 text-[0.7rem]
                rounded-full
                bg-gradient-to-r
                from-purple-600/30
                to-pink-600/30
                border border-white/10
                text-white/80
                backdrop-blur-md
              "
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="
          absolute hidden sm:block
          top-10 -right-40
          w-[28rem]
          rounded-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          transition-all duration-500

          group-hover:-translate-x-4
          group-hover:translate-y-4
          group-hover:-rotate-3
          group-hover:scale-105
        "
      />
    </motion.section>
  );
};

export default Project;
