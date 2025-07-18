"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const About = () => {
	const { ref } = useSectionInView("About", 0.8);

	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			id="about"
			ref={ref}
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3 text-justify">
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
				<span className="font-medium">Javascript, React and Vue. </span>
				But I&apos;m also familiar with TypeScript, Java, and Python. I&apos;m
				always looking to learn new technologies and challenges. If you&apos;re
				looking to build your own website and want a
				<span className="font-medium"> custom tailor-made feel to it</span>,
				connect with me and let&apos;s build something{" "}
				<span className="italic">Great</span> together{" "}
			</p>
			<p>
				<span className="italic">When I&apos;m not coding</span>, I enjoy
				playing video games, watching movies, and walking with my dog. I enjoy
				learning new things and I try to read as much as possible. Let me know
				if you have any book recommendations! Send an{" "}
				<span className="font-medium">email</span> below ✉️
			</p>
		</motion.section>
	);
};

export default About;
