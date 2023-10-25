"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";

const About = () => {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Economics and Political Science</span>,
        After that, I decided to pursue my passion for programming. I enrolled
        in a Higher Vocational Education school called ITHS and learned{" "}
        <span className="font-medium">frontend web development</span> along with
        some backend/fullstack.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core
        technologies include{" "}
        <span className="font-medium">
          React, Next.js, Vue.js, Node.js, MongoDB and PostgreSQL{" "}
        </span>
        I am also familiar with TypeScript, Java, and Python. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a frontend
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I try to read
        a book <span className="font-medium">every 6 month</span> and I delight
        in good humoured discussions with family and friends.
      </p>
    </motion.section>
  );
};

export default About;
