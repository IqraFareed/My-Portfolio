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
      "In my last year of univeristy I started my internship in Naxxa consulting and then promoted to Associate engineer",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL APIS",
  "REST APIS",
  "Framer Motion",
  " Agile Methodologies",
] as const;
