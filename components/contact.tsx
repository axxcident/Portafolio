"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at {""}
        <a className="underline" href="mailto:olivecrona.axel@gmail.com">
          olivecrona.axel@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg border borderBlack px-4"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Subject"
        />
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Send
          <FaPaperPlane className="opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
