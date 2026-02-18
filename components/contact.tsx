"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import ButtonContact from "./Button";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-24 sm:mb-32 w-[min(100%,40rem)] text-center scroll-mt-[20rem]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Subtle glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 blur-3xl rounded-3xl" />

      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-300 -mt-4">
        Reach out directly at{" "}
        <a
          className="text-pink-400 hover:text-pink-300 underline transition"
          href="mailto:iqrafareed56@gmail.com"
        >
          iqrafareed56@gmail.com
        </a>{" "}
        or send a message below.
      </p>

      <form
        className="mt-12 flex flex-col gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
        action={async (formData) => {
          const res = await sendEmail(formData);
          toast.success(res as string);
        }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          placeholder="Your email"
          className="
            h-14 px-4 rounded-xl
            bg-white/10
            border border-white/10
            text-white placeholder-gray-400
            focus:outline-none
            focus:border-pink-500
            focus:ring-2 focus:ring-pink-500/40
            transition-all duration-300
          "
        />

        <textarea
          required
          name="message"
          maxLength={500}
          placeholder="Your message"
          className="
            h-52 px-4 py-3 rounded-xl
            bg-white/10
            border border-white/10
            text-white placeholder-gray-400
            focus:outline-none
            focus:border-purple-500
            focus:ring-2 focus:ring-purple-500/40
            transition-all duration-300
          "
        />

        <ButtonContact />
      </form>
    </motion.section>
  );
};

export default Contact;
