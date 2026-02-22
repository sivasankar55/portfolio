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
  name: "Intern-Job",
  description:
    "A full-stack, dual-role (Student/Recruiter) MERN application. It features a responsive React/Tailwind UI with protected client-side routing, a Node.js/Express.js API for full CRUD operations, and secure, role-based authentication using JWT. Manages global state with Redux Toolkit and integrates Cloudinary/Multer for cloud-based resume uploads.",
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
      name: "redux",
      color: "blue-text-gradient",
    },
    {
      name: "cloudinary",
      color: "pink-text-gradient",
    },
   
  ],
  image: 'InternJob.png',
  source_code_link: "https://github.com/anmol1kush/Intern-Job",
},
 {
  name: "AIFusion",
  description:
    "An AI-powered SaaS platform for text and visual generation. I engineered the core AI functionality by integrating the Gemini and image.io APIs, and built a complete monetization model with Razorpay for payment processing and a credit-based system for feature access. The scalable MERN-stack backend (Node.js, Express, MongoDB) manages user accounts, authentication, subscription plans, and API usage tracking.",
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
  image: 'main2.png', // You will need to add a file with this name
  source_code_link: "https://github.com/anmol1kush/AIFusion",
},
  {
  name: "Hospital Management System",
  description:
    "A Java-based console application demonstrating strong OOP principles. It uses Inheritance and Polymorphism to model and manage Doctors, Patients, and Medicines, with Java Collections (ArrayList) for dynamic data handling. The app features a stable, menu-driven interface for core operations (billing, salary, inventory) and includes custom exception handling for invalid inputs and out-of-stock cases.",
  tags: [
    {
      name: "java",
      color: "blue-text-gradient",
    },
    {
      name: "oop",
      color: "green-text-gradient",
    },
    {
      name: "collections",
      color: "pink-text-gradient",
    },
  ],
  image: 'Hospital.png', // You will need to add a file with this name
  source_code_link: "https://github.com/anmol1kush/Hospital_Management_System", // Change this if it's in a different repo
},
 {
  name: "Hotel Management System",
  description:
    "A full-stack hotel management application built as a college DBMS project. It features user authentication, room selection, date-based booking, a payment system, and user reviews.The backend is a comprehensive RESTful API built with Node.js and Express.js, connected to a normalized MySQL database to manage users, rooms, and bookings.",
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
      name: "mysql",
      color: "pink-text-gradient",
    },
    {
      name: "expressjs",
      color: "green-text-gradient",
    },
  ],
  image: 'main.png', // You will need to add a file with this name
  source_code_link: "https://github.com/anmol1kush/Hotel-management-system", // Change this if it's in a different repo
},
//  {
//   name: "FAQ & Support Chatbot",
//   description:
//     "A custom chatbot built with React, Node.js, and MongoDB, designed to answer specific questions from a pre-defined knowledge base. Instead of using costly live AI, it intelligently matches user queries to a database of stored questions and answers, providing instant, accurate support. Features a responsive UI with smooth message animations and auto-scroll.",
//   tags: [
//     {
//       name: "react",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "nodejs",
//       color: "green-text-gradient",
//     },
//     {
//       name: "mongodb",
//       color: "green-text-gradient",
//     },
//     {
//       name: "tailwind",
//       color: "pink-text-gradient",
//     },
//     {
//       name: "expressjs",
//       color: "blue-text-gradient",
//     },
//   ],
//   image: 'Coming-Soon.jpg', // You will need to add a file with this name
//   source_code_link: "https://github.com/anmol1kush", // Change this if it's in a different repo
// },
];

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
       className="bg-[#100D25] p-4 rounded-2xl sm:w-[350px] w-full border border-white/5 flex flex-col h-[620px] sm:h-[580px]"

      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
              className={`text-[14px] ${
                tag.color === "blue-text-gradient"
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

