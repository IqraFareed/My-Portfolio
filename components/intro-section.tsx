"use client";
import React from "react";
import Image from "next/image";
import profile from "@/public/IMG-20210410-WA0004.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
const IntroSection = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {" "}
            <Image
              src={profile}
              alt=""
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
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
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Iqra. `}</span>
        {`I'm a `} <span className="font-bold"> front-end developer</span> with
        <span className="'font-bold"> 3 years</span> of experience. I enjoy
        building various kinds of sites. My focus is{" "}
        <span className="underline">React.js (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center px-4 text-md font-medium gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group cursor-pointer border border-black/10 bg-white  text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/iqra-fareed-2701871a5/"
          target="_blank"
          className="cursor-pointer bg-white  focus:scale-[1.15] hover:scale-[1.15]  active:scale-[105] transition border border-black/10 text-gray-700 p-4 flex items-center gap-2 rounded-full "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/IqraFareed"
          target="_blank"
          className="cursor-pointer bg-white focus:scale-[1.15] hover:scale-[1.15]  active:scale-[105] transition border  border-black/10 text-gray-700 p-4 flex items-center gap-2 text-[0.95rem] rounded-full"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default IntroSection;
