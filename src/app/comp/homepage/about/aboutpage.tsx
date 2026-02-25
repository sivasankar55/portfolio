"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  textVariant,
  staggerContainer,
} from "@/components/motion/motion";

import Tilt from "react-parallax-tilt";

type Service = {
  title: string;
  icon: string;
};

const services: Service[] = [
  { title: "Software Developer", icon: "/creator.png" },
  { title: "Fullstack Developer", icon: "/mobile.png" },
  { title: "Frontend Developer", icon: "/web.png" },
  { title: "Backend Developer", icon: "/backend.png" },
];

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// ...existing code...
// ...existing code...
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.35}   // reduced glare intensity
    scale={1.06}
    className="group w-full h-auto"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.12, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="relative rounded-2xl p-[2px] transition-all duration-400 w-full"
    >

      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-400 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(139,0,139,0.22) 0%, rgba(139,0,139,0.10) 18%, rgba(139,0,139,0.03) 40%, transparent 65%)",
          filter: "blur(28px)",
          mixBlendMode: "screen",
        }}
      />

      <div
        className="rounded-2xl bg-[#100D25] backdrop-blur-md p-3 md:p-4 h-auto min-h-[200px] sm:min-h-[220px] md:h-56 lg:h-64 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-400
                   group-hover:shadow-[0_16px_40px_-12px_#8B008B80] group-hover:border-[#8B008B]/45"
      >
        <div className="rounded-2xl bg-transparent p-2 md:p-3 lg:p-4 transition-transform duration-300 group-hover:scale-104">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="opacity-95 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px]"
          />
        </div>
        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-center px-2">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
// ...existing code...

export default function Aboutpage() {
  return (
    <section
      id="about"
      className="w-screen min-h-screen flex justify-center items-center py-8 md:py-12 lg:py-16 px-7 md:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .75 }}
          className="space-y-2 mb-4 md:mb-6"
        >
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-gray-400 uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
            Overview.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "tween", 0.5, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 md:mt-6 lg:mt-8 mb-8 md:mb-12 lg:mb-16 text-zinc-300/90 text-sm sm:text-base md:text-[17px] leading-6 sm:leading-7 md:leading-8 max-w-5xl"
        >
          I'm a Fullstack developer with a passion for building complete, product-focused applications. I have practical experience developing full-stack solutions from concept to deployment, working across technologies like React, Node.js, and Javascript, as well as various databases including MongoDB and MySQL.
          <br className="hidden sm:block" />
          <span className="sm:inline block mt-2 sm:mt-0">I enjoy tackling complex challenges, integrating AI APIs like Gemini, and implementing secure payment systems with Stripe. I'm focused on writing clean, high-performance code to turn complex problems into simple and intuitive user experiences</span>
        </motion.p>

        <motion.div
          variants={staggerContainer(0.25, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >


          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}

        </motion.div>
      </div>
    </section>
  );
}
