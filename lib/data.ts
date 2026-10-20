import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ts from "@/public/tripshepherd.png";
import robor from "@/public/robor.png";
import coding from "@/public/coding.webp";
import matrix from "@/public/matrix-356024_1280.webp";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "May 2024 — Aug 2025",
    company: "TripShepherd",
    role: "Front-End Lead Developer",
    description:
      "Led frontend development for production travel and reservation experiences using React and Next.js. Worked across application architecture, reusable UI, state management, responsive workflows, Firebase integrations, and product delivery while collaborating with design, backend, QA, and product teams.",
    highlights: [
      "React and Next.js application development",
      "Reusable UI and state-management patterns",
      "Reservation, availability, and product workflows",
      "Firebase and API integration",
      "Figma-to-production implementation and QA collaboration",
    ],
    icon: React.createElement(FaReact),
    date: "May 2024 — Aug 2025",
  },
  {
    title: "Sep 2022 — Aug 2023",
    company: "Qisstpay",
    role: "Senior Front-End Developer",
    description:
      "Built fintech and commerce experiences with React, Next.js, and TypeScript. Contributed to merchant-facing products, reusable components, application state, REST integrations, and data-heavy interfaces including dashboard visualizations.",
    highlights: [
      "React, Next.js, and TypeScript development",
      "Redux Toolkit application state",
      "REST API integration with Java and Go services",
      "ApexCharts data visualization",
      "MUI and Tailwind-based responsive interfaces",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 — Aug 2023",
  },
  {
    title: "Nov 2020 — Aug 2022",
    company: "Naxxa Consulting",
    role: "Front-End Developer",
    description:
      "Developed interactive client applications and translated product designs into responsive interfaces. Worked across REST and GraphQL APIs, forms, animation, reusable components, and real-time application functionality.",
    highlights: [
      "React and Material UI application development",
      "REST and GraphQL API integration",
      "AWS AppSync real-time subscriptions",
      "Formik/Yup form workflows",
      "Framer Motion and GSAP interactions",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2020 — Aug 2022",
  },
] as const;

export const projectsData = [
  {
    number: "01",
    title: "BOAT — Maritime Reservation Platform",
    category: "Production · Travel / Reservations",
    description:
      "A centralized availability and reservation platform for maritime products, bringing inventory, availability, dynamic pricing, and capacity rules into a unified workflow.",
    role: "Front-End Lead Developer",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS", "AWS", "Axios"],
    imageUrl: ts,
    link: "https://boat.tripshepherd.com",
    kind: "engineering",
  },
  {
    number: "02",
    title: "Merchant Portal",
    category: "Production · Fintech",
    description:
      "A merchant-facing web platform supporting operational workflows, data management, and commerce operations. The frontend emphasized reusable components, state management, responsive UI, and API-driven workflows.",
    role: "Senior Front-End Developer",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "MUI", "REST APIs", "ApexCharts"],
    imageUrl: robor,
    link: "",
    kind: "engineering",
  },
  {
    number: "03",
    title: "TelyMD",
    category: "Production · Healthcare / Telemedicine",
    description:
      "A healthcare web application connecting patients and healthcare providers through remote consultation workflows and responsive user experiences.",
    role: "Front-End Developer",
    tags: ["React", "Material UI", "Redux", "Tailwind CSS", "Framer Motion"],
    imageUrl: coding,
    link: "",
    kind: "engineering",
  },
  {
    number: "04",
    title: "Robor",
    category: "SaaS · Marketing Website",
    description:
      "A responsive SaaS website focused on modern product presentation, responsive layouts, reusable sections, and motion-driven interactions.",
    role: "Front-End Developer",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: robor,
    link: "https://robor.systems/",
    kind: "engineering",
  },
  {
    number: "05",
    title: "Uncertainty Quantification in Large Language Models",
    category: "Research · LLM Reliability",
    description:
      "An ongoing survey of methods for detecting and quantifying uncertainty in Large Language Models. The work organizes literature across detection, mitigation, human alignment, evaluation, and open research challenges.",
    role: "Graduate Research / Survey Research",
    tags: ["LLMs", "Uncertainty Quantification", "Calibration", "Semantic Uncertainty", "Hallucination Detection", "Human-AI Interaction"],
    imageUrl: matrix,
    link: "",
    kind: "research",
  },
  {
    number: "06",
    title: "Graph Representation Learning & Node Classification",
    category: "Research Project · Machine Learning",
    description:
      "An academic investigation of graph representation learning using Cora and CiteSeer. The project compares DeepWalk and Graph Convolutional Networks for node classification and evaluates learned representations with accuracy and AUC.",
    role: "Graduate Machine Learning Project",
    tags: ["Python", "PyTorch Geometric", "DeepWalk", "GCN", "Word2Vec", "Cora", "CiteSeer"],
    imageUrl: matrix,
    link: "",
    kind: "research",
  },
  {
    number: "07",
    title: "Medical AI Research",
    category: "Research · Artificial Intelligence in Healthcare",
    description:
      "Current graduate research exploring the application of AI and machine learning to healthcare-related problems, with broader interests in reliable AI, uncertainty, and human-centered AI systems.",
    role: "Graduate Researcher",
    tags: ["Medical AI", "Machine Learning", "Reliable AI", "Uncertainty", "Human-AI Interaction"],
    imageUrl: coding,
    link: "",
    kind: "research",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Core technologies I use to build production interfaces and applications.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux Toolkit", "Framer Motion"],
  },
  {
    title: "UI, UX & Web Quality",
    description: "Practices that support polished, responsive, maintainable user experiences.",
    skills: ["Responsive Design", "Figma to UI", "Component Architecture", "Design Patterns", "Web Performance", "SEO", "Semantic HTML", "Accessibility Fundamentals", "Cross-browser UI"],
  },
  {
    title: "Data, APIs & Application State",
    description: "Connecting frontend applications to real-world product workflows and services.",
    skills: ["REST APIs", "GraphQL", "Axios", "Firebase", "AWS AppSync", "WebSockets", "Redux Toolkit", "Formik", "Yup", "ApexCharts"],
  },
  {
    title: "Cloud, Tools & Workflow",
    description: "Tools used across development, collaboration, deployment, and delivery.",
    skills: ["Git", "GitHub", "AWS", "Vercel", "Figma", "Jira / Agile", "Code Review", "AI-assisted Development"],
  },
  {
    title: "AI / Machine Learning",
    description: "Graduate-level research and project experience beyond my primary frontend specialization.",
    skills: ["Python", "Machine Learning", "PyTorch Geometric", "Graph Representation Learning", "Large Language Models", "Uncertainty Quantification", "Medical AI"],
  },
] as const;
