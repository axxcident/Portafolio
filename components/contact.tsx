"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at {""}
        <a className="underline" href="mailto:axel.olivecrona@pm.me">
          axel.olivecrona@pm.me
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            console.log("haha error");
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg border borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Subject"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
