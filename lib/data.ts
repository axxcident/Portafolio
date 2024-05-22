import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoCodeWorkingSharp } from "react-icons/io5";
import tjuvgodsImg from "@/public/tjuvgods.jpg";
import kwitterImg from "@/public/kwitter.png";
import healtcheckinImg from "@/public/HealthCheckIn.png";
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
    title: "Graduated ITHS",
    location: "Higher Vocational Studies, Stockholm, Sweden",
    description:
      "I completed my 2-year program and successfully graduated, and I'm now actively searching for opportunities as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Internship Front-End Developer & Designer",
    location: "Atom Collaboration, Stockholm, Sweden",
    description:
      "I had an internship at Atom Collaboration where I worked as a front-end developer and designer. I primarly worked with Figma. I also upskilled in Flutter and backend development.",
    icon: React.createElement(CgWorkAlt),
    date: "Autumn 2023",
  },
  {
    title: "Internship Front-End Developer",
    location: "Bontouch (Framna), Stockholm, Sweden",
    description:
      "I had an internship at Bontouch (currently called Framna) where I was given a project of my own to develop a web application. This web application was called 'health check-in' and was used by the employees at the company to check in on their health status (happiness, productivity and stress) by team and across time. Built using Next.js and React, TypeScript, Tailwind and uploaded via Vercel.",
    icon: React.createElement(IoCodeWorkingSharp),
    date: "Spring 2024",
  },
  {
    title: "Front-End Developer",
    location: "Company.com",
    description:
      "I'm now a front-end developer who aspires to get some profesional experience. My stack includes React, Next.js, Vue.js, TypeScript, Tailwind, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Health Check-in",
    description:
      "Internship project at Bontouch (Framna) where I developed a web application for employees to check in on their work health status. Built using Next.js, React, TypeScript, Tailwind and uploaded via Vercel.",
    tags: ["Next.js", "Typescript", "Tailwind", "Auth0", "PostgreSQL"],
    imageUrl: healtcheckinImg,
  },
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
  "Express.js",
  "Jest",
  "Slidev",
  "GraphQL",
  "Git",
  "Pinia",
  "Vuex",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "Flutter",
] as const;
