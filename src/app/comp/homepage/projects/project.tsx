"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  fadeIn,
  textVariant,
  staggerContainer,
} from "@/components/motion/motion";

const projects = [
  {
    name: "E-Commerce-Store",
    description:
      "An advanced full-stack E-Commerce application built using Node.js, Express, MongoDB, Redis, and React. It includes secure JWT authentication with access/refresh tokens, a complete shopping workflow (cart, checkout, coupons), Stripe payment integration, and a powerful admin dashboard for managing products, orders, and analytics. Redis caching is used for performance optimization, while Cloudinary handles media storage. The system incorporates rate limiting, input validation, and sanitization for enhanced security and reliability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },

    ],
    image: 'ecommerce.png',
    source_code_link: "https://github.com/sivasankar55/E-Commerce-Store",
    live_link: "https://e-commerce-store-gjm4.onrender.com/",
  },
  {
    name: "Syncly",
    description:
      "A modern real-time collaboration platform combining team chat and video conferencing into a unified workspace. Built with React and Node.js, it integrates Stream Chat and Video SDKs for messaging, presence indicators, and secure video meetings with token-based room access. Authentication is handled with Clerk, while TanStack Query optimizes server-state management and caching. The application includes lazy-loaded routes, global Axios interceptors for token handling, and production-grade monitoring with Sentry for real-time error tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tanstack",
        color: "pink-text-gradient",
      },
      {
        name: "sentry",
        color: "blue-text-gradient",
      },
      {
        name: "inngest",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
    ],
    image: 'syncly.png', // You will need to add a file with this name
    source_code_link: "https://github.com/sivasankar55/Syncly", // Change this if it's in a different repo
    live_link: "https://syncly-frontend.vercel.app/",
  },
  {
    name: "Lingofy",
    description:
      "A full-stack real-time language exchange platform built with the MERN stack. It features instant messaging and video communication powered by Stream Chat and Video APIs, including typing indicators, reactions, and 1-on-1/group calls with screen sharing and recording. The system implements secure JWT authentication with protected routes, Zustand for global state management, and TanStack Query for efficient server data synchronization. Designed with scalable architecture, customizable multi-theme UI, and robust frontend/backend error handling for a smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stream",
        color: "blue-text-gradient",
      },
      {
        name: "TanStack Query",
        color: "blue-text-gradient",
      },
    ],
    image: '/lingofy.png?v=1', // You will need to add a file with this name
    source_code_link: "https://github.com/sivasankar55/Lingofy", // Change this if it's in a different repo
    live_link: "https://lingofy.onrender.com/",
  },
  {
    name: "AIFusion",
    description:
      "An AI-powered SaaS platform for multimodal content generation, enabling users to create text and visual outputs through integrated third-party AI services. Built using a scalable MERN-stack architecture, the system integrates Gemini APIs for intelligent text generation and external image generation APIs for visual content creation. The application implements secure authentication, subscription-based monetization with Razorpay payment integration, and a credit-based usage system to manage API consumption efficiently. The backend handles user management, billing workflows, and API orchestration, while the frontend delivers a responsive and interactive user experience. Designed with modular architecture and production-ready deployment practices, the platform demonstrates strong understanding of AI integration, SaaS system design, and payment infrastructure.",
    tags: [

      {
        name: "image.io API",
        color: "green-text-gradient",
      },
      {
        name: "gemini API",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: 'AiFusion.png', // You will need to add a file with this name
    source_code_link: "https://github.com/sivasankar55/AIFusion",
    live_link: "https://github.com/sivasankar55/AIFusion",
  },
  {
    name: "Chat-App",
    description:
      "A full-stack real-time messaging application built with the MERN stack, enabling users to communicate instantly through WebSocket-based bidirectional communication using Socket.IO. The platform includes secure JWT authentication, user presence detection, and dynamic chat interfaces for seamless conversations. It implements responsive UI components with modern styling and efficient state handling to ensure smooth real-time updates and user experience. The backend manages message persistence, user sessions, and event-driven communication, demonstrating scalable architecture for real-time systems. Real-time chat applications commonly rely on WebSockets to provide instant updates without page refreshes, improving responsiveness and user interaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "DaisyUI",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: 'chat-app.png', // You will need to add a file with this name
    source_code_link: "https://github.com/sivasankar55/Chat-App", // Change this if it's in a different repo
    live_link: "https://chat-app-clone-ph1r.onrender.com/login",
  },
  {
    name: "Twitter",
    description:
      "A full-stack social media platform inspired by Twitter, built using the MERN stack with a focus on scalable architecture and responsive user experience. The application implements secure JWT-based authentication, protected routes, and server-state synchronization using React Query for efficient data fetching and caching. Core features include post creation, likes, comments, user follow suggestions, notifications, and profile management with image uploads handled via Cloudinary. The backend manages user relationships, content persistence, and event-driven notification workflows, demonstrating strong understanding of RESTful API design, media handling, and state consistency across distributed components. The system is deployed with production-ready configuration, emphasizing performance, reliability, and modular design principles.",
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
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: 'twitter.png', // You will need to add a file with this name
    source_code_link: "https://github.com/sivasankar55/Twitter-App", // Change this if it's in a different repo
    live_link: "https://twitter-clone-yblh.onrender.com/login",
  },
];

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
  live_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        className="bg-[#100D25] p-4 rounded-2xl sm:w-[350px] w-full border border-white/5 flex flex-col min-h-[620px] sm:min-h-[580px] h-auto"

      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors duration-300"
              title="Live Link"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors duration-300"
              title="Source Code"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-3 text-zinc-300 text-[14px] leading-relaxed flex-grow">{description}</p>
        </div>


        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color === "blue-text-gradient"
                ? "text-blue-400"
                : tag.color === "green-text-gradient"
                  ? "text-green-400"
                  : tag.color === "pink-text-gradient"
                    ? "text-pink-400"
                    : "text-gray-400"
                }`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Project() {
  return (
    <section
      id="projects"
      className="w-screen min-h-screen flex justify-center items-center pt-5 pb-5"
    >
      <div className="w-[75%] max-w-6xl">
        {/* Section Header */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" mb-5"
        >
          <p className="sm:text-[25px] text-[20px] text-gray-400 uppercase tracking-wider">
            My work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[32px] leading-tight mb-4">
            Projects.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full flex justify-center mb-15"
        >

        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap gap-8 justify-center "
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


