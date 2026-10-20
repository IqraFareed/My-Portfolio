"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { HiArrowUpRight } from "react-icons/hi2";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <section ref={ref} id="contact" className="section-shell scroll-mt-28 pb-16 sm:pb-24">
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:grid-cols-[.85fr_1.15fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s build something great.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">I&apos;m interested in Front-End Engineering and Software Engineering opportunities where I can contribute to high-quality products, scalable interfaces, and challenging technical problems.</p>
          <a href="mailto:iqrafareed56@gmail.com" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">iqrafareed56@gmail.com <HiArrowUpRight /></a>
        </div>

        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} action={async (formData) => { const res = await sendEmail(formData); toast.success(res as string); }} className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-medium text-zinc-400">Email<input type="email" required name="senderEmail" maxLength={500} placeholder="you@example.com" className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white placeholder:text-zinc-600" /></label>
            <label className="text-xs font-medium text-zinc-400">Name<input type="text" required name="senderName" maxLength={120} placeholder="Your name" className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white placeholder:text-zinc-600" /></label>
          </div>
          <label className="mt-5 block text-xs font-medium text-zinc-400">Message<textarea required name="message" maxLength={2000} placeholder="Tell me a little about the opportunity or project..." className="focus-ring mt-2 min-h-40 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600" /></label>
          <button type="submit" className="focus-ring mt-5 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">Send message <HiArrowUpRight /></button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
