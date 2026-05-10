import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ts from "@/public/tripshepherd.png";
import robor from "@/public/robor.png";
import coding from "@/public/coding.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    title: "Associate Software Engineer",
    company: "Naxxa consulting",
    description:
      "Contributed to TelyMd, a telehealth platform focused on patient-facing workflows, appointment systems, real-time interactions, and responsive healthcare interfaces.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2022",
  },
  {
    title: "Front-End Developer",
    company: "Qisst pay",
    description:
      " Worked on the Merchant portal, a CMS handling various operations and data records.Collaborated on the 1-click-checkout and Askari Mall ecommerce website",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Senior Front end Developer",
    company: "Tripshepherd",
    description:
      "Worked on product called BOAT App 	Central availability & reservation platform unifying inventory, dynamic pricing and capacity rules for maritime products",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "BOAT APP",
    description:
      "I worked as a next-js developer on this platform  that  provide Central availability & reservation platform unifying inventory, dynamic pricing and capacity rules for maritime products.",
    tags: ["firebase", "Next.js", "tailwind", "AWS", "Axios"],
    imageUrl: ts,
    link: "boat.tripshepherd.com",
  },
  {
    title: "Robor Website",
    description: "It's a responsive website for a saas based startup",
    tags: ["Next.js", "Tailwind", "framer motion"],
    imageUrl: robor,
    link: "https://robor.systems/",
  },
  {
    title: "Tely Md",
    description:
      "A public web app for Online medical consult . It connects doctors and pateints remotely. It's a new way of medicie",
    tags: ["React", "Material ui", "Redux", "Tailwind", "Framer"],
    imageUrl: coding,
    link: "",
  },
] as const;

export const skillsData = [
  // Languages
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  // Frontend
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux Toolkit",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Framer Motion",
    logo: "https://framerusercontent.com/images/EYJVyF4Kz8BFNDKzZ5V0WsqI.svg",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // APIs & Realtime
  {
    name: "REST APIs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "WebSockets",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "Axios",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
  },
  {
    name: "TanStack Query",
    logo: "https://tanstack.com/favicon.ico",
  },

  // Databases & Backend Services
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },

  // AI & Data
  {
    name: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "AI Systems",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  },
  {
    name: "Data Visualization",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
  },

  // Tools
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  // Core Concepts
  {
    name: "Data Structures",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Unit Testing",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Web Optimization",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  },
  {
    name: "Responsive Design",
    logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    name: "Agile/SCRUM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
] as const;
