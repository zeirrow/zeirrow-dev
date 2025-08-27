import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiRedux,
} from "react-icons/si";

export const github = "https://github.com/zeirrow";

export const allSections = [
  "home",
  "projects",
  "about",
  "faqs",
  "contact",
  "blog",
];

let projectId = 0;

export const myInfo = {
  name: "Nnodimele Udodirim",
  image: "/images/udodirim.jpg",
  art: "/images/udodirim-art.jpg",
  mobImage: "/images/mob-udo.jpg",
  mobArt: "/images/mob-udo-art.jpg",
  id: 1,
  title: "Frontend Developer",
  description: `Motivated and self-taught frontend developer with hands-on experience building responsive and interactive web applications. Passionate about turning ideas into functional, user-friendly interfaces. Eager to contribute to a professional development team and grow through real-world challenges.`,
  website: "zeirrow.dev",
  contact: {
    email: "udodirimwisdom@gmail.com",
    phone: "2349033951020",
    github: "zeirrow",
    linkedIn: "https://www.linkedin.com/in/zeirrow",
    twitter: "https://twitter.com/udodirim101",
  },
};

export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#264DE4" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F0DB4F" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "React Native", icon: FaReact, color: "#61DBFB" },
  { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express js", icon: SiExpress, color: "#000000" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
  { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
];

export const projects = [
  {
    id: projectId++,
    title: "Plumbing Solutions That Flow",
    description: "A slick landing page for a plumbing company.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "GSAP"],
    github: `${github}/plumber`,
    live: "https://plumber-kappa.vercel.app/",
    screenshot: "/screenshots/plumber-1.png",
  },
  {
    id: projectId++,
    title: "Your Plumber",
    description: "A slick landing page for a plumbing company.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: `${github}/plumber-2`,
    live: "https://zeirrow.github.io/plumber-2",
    screenshot: "/screenshots/plumber-2.png",
  },
  {
    id: projectId++,
    title: "Cinemate | Movie Discovery Platform",
    description: `A sleek movie discovery platform that enables users to browse, search, and explore a wide range of films. Built with React and styled using Tailwind CSS, it offers a responsive and intuitive user interface.`,
    tech: ["React", "Tailwind", "TMDb API"],
    github: `${github}/cinemate`,
    live: "https://cinemate-sepia.vercel.app",
    screenshot: "/screenshots/cinemate.png",
  },
  {
    id: projectId++,
    title: "Lumina",
    description: `A modern web application designed to showcase innovative UI components and responsive layouts. Developed using React and Vite, it emphasizes performance optimization and clean design principles.`,
    tech: ["React", "Tailwind"],
    github: `${github}/lumina`,
    live: "https://lumina-jade.vercel.app/",
    screenshot: "/screenshots/lumina.png",
  },
  {
    id: projectId++,
    title: "Code To Video ",
    description:
      "Convert code text into MP4 videos with typing animation and syntax highlighting.",
    tech: ["React", "Tailwind", "CodeMirror"],
    github: `${github}/codetovideo`,
    live: "https://code-to-video.vercel.app/",
    screenshot: "/screenshots/code2video.png",
  },
  {
    id: projectId++,
    title: "Task Flow | Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    github: `${github}/task-flow`,
    live: "https://task-flow-beta-pearl.vercel.app/",
    screenshot: "/screenshots/taskFlow.png",
  },
  {
    id: projectId++,
    title: "Pizza Delivery App",
    description:
      "Frontend that fetches pizza menu from backend API and sends orders via POST requests.",
    tech: ["React", "API Integration", "Tailwind", "Redux"],
    github: `${github}/pizza-delivery`,
    live: "https://pizza-menu-app-bay.vercel.app/",
    screenshot: "/screenshots/fast-pizza.png",
  },
];

export const experience = [
  {
    year: "2024 - Present",
    title: "Freelance Frontend Developer",
    company: "Zierrow.dev",
    description:
      "Developed responsive web applications using React, Next.js, and Tailwind CSS. Collaborated with clients to deliver high-quality projects on time.",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Developer",
    company: "Digital Solutions",
    description: "Built responsive UIs and implemented design systems.",
  },
];

export const education = [
  {
    degree: "Senior Secondary Certificate (SSC),",
    institution: "Udo Secondary Technical School",
    duration: "2009 - 2015",
  },
];

export const certifications = [
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    platform: "Udemy",
    url: "https://ude.my/UC-ec6ff245-864c-40c6-b7a5-613d52d3bb4b",
    year: "2024",
  },
  {
    name: "Full Stack Web Development with PHP",
    platform: "ApTech",
    url: "",
    year: "2023",
  },
];

export const testimonials = [
  {
    name: "Vanessa Ibeh",
    role: "Product Lead, AIverse",
    quote:
      "Working with Wisdom was a game changer. Every component felt intentional — no fluff, just sharp execution.",
    image: "/client-work/AIverse.png",
    emoji: "🧠",
    color: "bg-blue-500/10",
  },
  {
    name: "Tariq Bello",
    role: "Founder, Loopwave",
    quote:
      "Dude took our chaotic wireframes and turned them into a sleek, pixel-perfect UI. Clients noticed immediately.",
    image: "/client-work/cloth.png",
    emoji: "🛠️",
    color: "bg-green-500/10",
  },
  {
    name: "Leila Omotayo",
    role: "MD, Air Crew",
    quote:
      "We’ve worked with devs before, but this was the first time the frontend actually *felt* like design. It just clicked.",
    image: "/client-work/plumbing.png",
    emoji: "✨",
    color: "bg-pink-500/10",
  },
];

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I primarily work with modern web technologies including React, TypeScript, and TailwindCSS for building responsive, performant interfaces. For advanced visual effects, I incorporate GSAP for animations and Three.js for 3D elements when the project requires that extra dimension.",
  },
  {
    question: "Are you available for freelance or contract work?",
    answer:
      "Yes, I selectively take on freelance projects that align with my skills and interests. I particularly enjoy collaborations that involve creative problem-solving, innovative design, or technical challenges that push boundaries.",
  },
  {
    question: "Where can I view your professional background?",
    answer:
      "You'll find my detailed resume in the dedicated Resume section of this portfolio. For additional context or specific inquiries, feel free to use the Contact form - I'm happy to provide more information.",
  },
  {
    question: "What's the best way to get in touch?",
    answer:
      "The Contact section contains a direct messaging form, or you can connect via LinkedIn. I typically respond to professional inquiries within 24 hours during weekdays.",
  },
  {
    question: "What types of projects do you typically work on?",
    answer:
      "I focus on creating modern web applications with exceptional user experiences. My projects range from responsive marketing sites to complex web apps, always with an emphasis on clean code, intuitive interfaces, and thoughtful interactions.",
  },
  {
    question: "Do you collaborate with other developers or designers?",
    answer:
      "Absolutely. Some of my best work comes from collaborations with talented designers, developers, and creative professionals. I value teamwork and the unique perspectives it brings to projects.",
  },
  {
    question: "How do you approach new projects?",
    answer:
      "Every project begins with understanding the core objectives and user needs. I then develop a tailored solution balancing technical feasibility, visual appeal, and performance considerations - always keeping maintainability and scalability in mind.",
  },
];
