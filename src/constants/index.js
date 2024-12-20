import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio_3d,
  broschat,
  reactPicAPP,
  real_Estate,
  question,
  portfolio_3d_2,
  ShowGaBlog,
  foodwasteproject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Finding an intership position",
    company_name: "Your Company",
    icon: question,
    iconBg: "#383E56",
    date: "Get to work at any time",
    points: [
      "I'm now reaching for experiences as internship",
      "Great attitude, stronge desire for learning new things",
      "I hope I could build a big project with my skills and able to learn professional workflow, teamworks",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working alongside ShowGa has been an absolute pleasure. His dedication to self-learning and passion for software engineering is truly commendable. ShowGa consistently demonstrates a strong grasp of complex concepts and a relentless drive to improve his skills.",
    name: "ChatGPT",
    designation: "Chat-Bot",
    company: "Open AI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
];

const projects = [
  {
    name: "ShowGa 個人部落格",
    description:
      "因興趣而製作的個人部落格。登入、搜尋、留言、發文、編輯、刪除等基本功能。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: ShowGaBlog,
    source_code_link: "https://github.com/ShowGa/ShowGa_Blog",
  },
  {
    name: "吃不完兜著走(開發中)",
    description: "Java程式設計班期末專題，使用Java Spring Boot製作。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Java Spring Boot",
        color: "blue-text-gradient",
      },
    ],
    image: foodwasteproject,
    source_code_link: "https://github.com/ShowGa/ShowGa_Blog",
  },
  {
    name: "Midas Real-Estate",
    description:
      "A Website imitate the Real-Estate website, for practicing MERN Stack skills .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
    ],
    image: real_Estate,
    source_code_link: "https://github.com/ShowGa/Real-Estate-client",
  },
  {
    name: "BrosChat",
    description:
      "A Real-Time Chat App for practicing MERN Stack skills and real-time messaging technique .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: broschat,
    source_code_link: "https://github.com/ShowGa/BrosChat",
  },

  {
    name: "3D Portfolio Website - Island",
    description:
      "3D portfolio Website for practicing 3D render technique with Three.js base on React.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_3d,
    source_code_link: "https://github.com/ShowGa/3D_Portfolio",
  },
  {
    name: "3D Portfolio Website - Gamer Rig",
    description:
      "3D portfolio Website for practicing 3D render technique with Three.js base on React.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_3d_2,
    source_code_link: "https://github.com/ShowGa/3D_Portfolio2",
  },
];

export { services, technologies, experiences, testimonials, projects };
