"use client";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function intro() {
  // const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      // ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/me.jpg"
              alt="Axel Olivecrona"
              width="192"
              height="192"
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-lg"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
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
          </motion.div>
        </div>
      </div>
      {/* h1 eller paragraf */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Axel.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> that aspires to
        get some professional experience. I enjoy designing & building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React</span> (Next.js).
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Axel_O_CV.pdf"
          download={true}
          className="group bg-white px-7 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/axel-olivecrona-077b17b8/"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full cursor-pointer border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/axxcident"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full cursor-pointer border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
