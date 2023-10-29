import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tjuvgodsImg from "@/public/tjuvgods.jpg";
import kwitterImg from "@/public/kwitter.png";
import mjTrainingCampImg from "@/public/MJtraingingcamp.png";
import gomokuGurusImg from "@/public/GomokuGurus.png";
import atomcollaborationImg from "@/public/atomcollaboration.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tjuvgods",
    description:
      "School project on a retail mockup store. I created backend and frontend functions, components & parts of design.",
    tags: ["Vue.js", "Javascript", "Bootstrap", "Vuex", "Node.js"],
    imageUrl: tjuvgodsImg,
  },
  {
    title: "Kwitter",
    description:
      "School project on a mockup version of Twitter. I created pages, components, functions, the backend functionality & parts of the design.",
    tags: ["React", "Javascript", "PostgreSQL", "Node.js"],
    imageUrl: kwitterImg,
  },
  {
    title: "Gomoku Gurus",
    description:
      "School project on an online Gomoku game. I created pages, components, functions, the backend functionality & parts of the design.",
    tags: ["React", "Javascript", "Firebase"],
    imageUrl: gomokuGurusImg,
  },
  {
    title: "MJ training camp",
    description:
      "Small project to customer who needed a travel & training static website",
    tags: ["Vue.js", "Javascript"],
    imageUrl: mjTrainingCampImg,
  },
  {
    title: "Atom Collaboration",
    description:
      "Ongoing project with creating a website for a customer that delivers learning plattforms for organizations",
    tags: ["Figma",],
    imageUrl: atomcollaborationImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Pinia",
  "Vuex",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "Python",
  "Java",
  "Framer Motion",
  "Flutter",
] as const;
