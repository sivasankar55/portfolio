// ...existing code...
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "@/components/motion/motion";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  duration: string;
 description: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Summer Intern: Full Stack Developer",
    company: "Trackpi Pvt Ltd",
    duration: "December 2025 - March 2026",
    description: "As a full-stack intern, I built and optimized responsive UIs with React and Tailwind, developed 10+ secure Node.js APIs with JWT and role-based access, and designed complex PostgreSQL schemas. I collaborated daily in an Agile team of 7, using Git for version control and code reviews."
  },
];

export default function Experience(): React.ReactElement {
  const [animationData, setAnimationData] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/lottie/code.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load lottie JSON");
        return res.json();
      })
      .then((json) => {
        if (mounted) setAnimationData(json);
      })
      .catch(() => {
        if (mounted) setAnimationData(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.div
      id="experience"
      className="w-screen flex justify-center items-center py-5 md:py-8 lg:py-12 px-7 md:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.75 }}
          className="space-y-2 my-4 md:my-5 lg:my-6"
        >
          <h2 className="text-white font-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
            Experience
          </h2>
        </motion.div>

        <motion.div
          className="py-4 md:py-8 lg:py-12"
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="flex justify-center items-center md:items-start order-1"
              variants={fadeIn("left", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-full max-w-md md:max-w-none"
                whileHover={{
                  scale: 1.02,
                  rotate: 2
                }}
                transition={{ duration: 0.3 }}
              >
                {animationData ? (
                  <AnimationLottie animationPath={animationData} />
                ) : (
                  <motion.div
                    className="w-full h-48 md:h-64 lg:h-80 flex items-center justify-center text-xs md:text-sm text-gray-400"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Loading animation...
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

          <motion.div
  variants={fadeIn("right", "tween", 0.2, 0.8)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="order-2"
>
  <motion.div
    className="flex flex-col gap-4 md:gap-6 w-full pt-6 md:pt-8 lg:pt-10"
    variants={staggerContainer(0.1, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    {experiences.map((experienceItem, index) => (
      <motion.div
        key={experienceItem.id}
        variants={fadeIn("up", "spring", index * 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <GlowCard identifier={`experience-${experienceItem.id}`}>

          {/* Increased height + adjusted padding */}
          <motion.div className="p-4 md:p-5 lg:p-6 relative min-h-[200px] md:min-h-[240px] lg:min-h-60 overflow-hidden">

            {/* ICON + COMPANY + ROLE + DATE */}
            <div className="flex flex-row justify-between items-start sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-start gap-3 md:gap-4 w-full sm:w-auto">
                <BsPersonWorkspace className="w-8 h-8 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] text-[#06B5C3] mt-0.5 md:mt-1 flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  {/* Company Name first */}
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-[#EB38A3] break-words">
                   {experienceItem.company}
                  </p>

                  {/* Role below */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 mt-1 break-words">
                   {experienceItem.title}
                  </p>
                </div>
              </div>

              {/* DATE RIGHT SIDE */}
              <p className="text-xs md:text-sm text-gray-400 whitespace-nowrap mt-0 flex-shrink-0">
                {experienceItem.duration}
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-4 md:mt-5 lg:mt-6">
              <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed break-words">
                {experienceItem.description}
              </p>
            </div>

          </motion.div>
        </GlowCard>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
// ...existing code...
