"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const IntroSection = () => {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[70rem] text-center
     sm:mb-0 "
    >
      <div
        className="flex items-center justify-center scroll-mt-[100rem]"
        id="home"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="flex justify-center"
          >
            {" "}
            <Image
              src={profile}
              alt=""
              width="292"
              height="292"
              quality="95"
              priority={true}
              className=" h-48 w-48 rounded-full object-cover border-[0.15rem] shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
          <motion.h1
            className="font-bold mt-4 px-4 text-2xl  !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Iqra Fareed
          </motion.h1>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-2 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello,</span> I am a{" "}
        <span className="font-bold">Software Engineer</span> based in the USA
        with <span className="font-bold">over 5 years</span> of experience
        building scalable web applications. I specialize in designing reliable,
        production-ready systems using modern JavaScript frameworks and backend
        services. My work spans front-end architecture, API integrations, and
        performance optimization. I am currently pursuing my Master’s in
        Computer Science at the University of Louisiana, where I continue
        strengthening my software engineering principles. My primary expertise
        includes{" "}
        <span className="underline">React.js, Next.js, and Node.js</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center px-4 text-md font-medium gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link> */}

        <Link
          href={
            "https://drive.google.com/file/d/1my6Gc6Rg6qJtlzmUvdgJsM5qW6eAhFT-/view?usp=sharing"
          }
          target="_blank"
          download
          className="group cursor-pointer borderBlack bg-white  text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110  active:scale-105 
           transition dark:bg-white/10"
        >
          Click here to view CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
