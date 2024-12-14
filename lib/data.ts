import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { IoCodeWorkingSharp } from "react-icons/io5";
import tjuvgodsImg from "@/public/tjuvgods.jpg";
import kwitterImg from "@/public/kwitter.png";
import healtcheckinImg from "@/public/HealthCheckIn.png";
import mjTrainingCampImg from "@/public/MJtraingingcamp.png";
import gomokuGurusImg from "@/public/GomokuGurus.png";
import atomcollaborationImg from "@/public/atomcollaboration.jpg";
import weatherAppImg from "@/public/weatherApp.jpg";
import whiteHouseImg from "@/public/whiteHouse.png";
import AptomaIcon from "./aptomaIcon";

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
    title: "Front-End Developer",
    location: "Aptoma AS",
    description:
      "Working as a junior software engineer. Most tasks involve front-end development. The plattform I work on is Layoutpreview, DrEdition and ancillary customer repositories",
    icon: React.createElement(AptomaIcon),
    date: "2024 - present",
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
    title: "Internship Front-End Developer & Designer",
    location: "Atom Collaboration, Stockholm, Sweden",
    description:
      "I had an internship at Atom Collaboration where I worked as a front-end developer and designer. I primarly worked with Figma. I also upskilled in Flutter and backend development.",
    icon: React.createElement(CgWorkAlt),
    date: "Autumn 2023",
  },
  {
    title: "Frontend development studies",
    location: "ITHS",
    description:
      "Higher Vocational Studies, Stockholm, Sweden. I studied a 2-year program and graduated summer 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  }
] as const;

export const projectsData = [
  {
    title: "Vita huset Bokningssystem",
    description:
      "Booking system for the family's vacation house. Mobile-first and serverless.",
    tags: ["Nuxt.js", "Vue.js", "Typescript", "Tailwind", "PostgreSQL"],
    imageUrl: whiteHouseImg,
    projectLink: "https://vitahuset-olivecrowns-projects.vercel.app/",
  },
  {
    title: "Health Check-in",
    description:
      "Internship project at Bontouch (Framna) where I developed a web application for employees to check in on their work health status.",
    tags: ["Next.js", "Typescript", "Tailwind", "Auth0", "PostgreSQL"],
    imageUrl: healtcheckinImg,
    projectLink: "https://health-check-kappa.vercel.app/",
  },
  {
    title: "Tjuvgods",
    description:
      "School project on a retail mockup store. I created backend and frontend functions, components & parts of design.",
    tags: ["Vue.js", "Javascript", "Bootstrap", "Vuex", "Node.js"],
    imageUrl: tjuvgodsImg,
    projectLink: "https://axxcident.github.io/Tjuvgods/",
  },
  {
    title: "Kwitter",
    description:
      "School project on a mockup version of Twitter. I created pages, components, functions, the backend functionality & parts of the design.",
    tags: ["React", "Javascript", "PostgreSQL", "Node.js", "Express.js"],
    imageUrl: kwitterImg,
    projectLink: "https://github.com/axxcident/Kwitter",
  },
  {
    title: "Gomoku Gurus",
    description:
      "School project on an online Gomoku game. I created pages, components, functions, the backend functionality & parts of the design.",
    tags: ["React", "Javascript", "Firebase", "Jest"],
    imageUrl: gomokuGurusImg,
    projectLink: "https://github.com/axxcident/gomoku-gurus",
  },
  {
    title: "Weather App",
    description:
      "Side project from online course.",
    tags: ["Vue", "Javascript", "Tailwind"],
    imageUrl: weatherAppImg,
    projectLink: "https://axxcident.github.io/SMHI_app/",
  },
  {
    title: "MJ training camp",
    description:
      "Small project to customer who needed a travel & training static website",
    tags: ["Vue.js", "Javascript"],
    imageUrl: mjTrainingCampImg,
    projectLink: "https://axxcident.github.io/MJtrainingcamps/",
  },
  {
    title: "Atom Collaboration",
    description:
      "Ongoing project with creating a website for a customer that delivers learning plattforms for organizations",
    tags: ["Figma",],
    imageUrl: atomcollaborationImg,
    projectLink: "https://www.figma.com/design/ks1i7GehwdsLOt6X7wxNNI/Atom-webpage?node-id=0%3A1&t=8kCICQ8e2Hca1S3P-1/",
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
  "Nuxt.js",
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
