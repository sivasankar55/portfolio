"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  textVariant,
  staggerContainer,
} from "@/components/motion/motion";
import TargetCursor from "@/components/TargetCursor/TargetCursor";

type Skill = {
  name: string;
  icon: string;
  color: string;
  category: string;
};

const skills: Skill[] = [
  // Frontend Technologies
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  // { name: "Next.js", icon: "▲", color: "#fffff", category: "Frontend" },
  // { name: "TypeScript", icon: "🔷", color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5", icon: "🌐", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: "🎨", color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", color: "#06B6D4", category: "Frontend" },
  { name: "Redux", icon: "💎", color: "#CC6699", category: "Frontend" },
  
  // Backend Technologies
  { name: "Node.js", icon: "🟢", color: "#339933", category: "Backend" },
  { name: "Express.js", icon: "🚀", color: "#fffff", category: "Backend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Backend" },
  { name: "JAVA", icon: "🎯", color: "#CC6699", category: "Backend" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "Database" },
  { name: "MySQL", icon: "🐬", color: "#4479A1", category: "Database" },
  
  // Tools & Others
  { name: "Git", icon: "📚", color: "#F05032", category: "Tools" },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "Tools" },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "Cloud" },
  { name: "Numpy", icon: "🔥", color: "#FFCA28", category: "Cloud" },
  { name: "Pandas", icon: "🐼", color: "#339933", category: "Cloud" },
  { name: "Scikit-learn", icon: "🎨", color: "#F24E1E", category: "Design" },
  { name: "VS Code", icon: "💻", color: "#007ACC", category: "Tools" },
];

type SkillCardProps = {
  index: number;
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ index, skill }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className="relative rounded-xl p-[1px] transition-all duration-500 cursor-target group"
  >
    {/* Glow effect */}
    <div
      aria-hidden
      className="absolute inset-0 rounded-xl pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background: `radial-gradient(circle at 50% 50%, ${skill.color}20 0%, ${skill.color}10 50%, transparent 100%)`,
        filter: "blur(20px)",
      }}
    />

    {/* Main card */}
    <div 
      className="rounded-xl bg-[#100D25] backdrop-blur-md p-4 h-24 flex flex-col items-center justify-center gap-2 border border-white/5 transition-all duration-500 group-hover:border-opacity-60 group-hover:shadow-[0_12px_40px_-6px_rgba(0,0,0,0.5)]"
      style={{
        borderColor: `rgba(${hexToRgb(skill.color)}, 0.15)`,
        boxShadow: `0 0 22px ${skill.color}22, inset 0 0 12px ${skill.color}10`,
      }}
    >
      {/* Skill icon */}
      <div 
        className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-[1px]"
        style={{ filter: `drop-shadow(0 0 10px ${skill.color}66)` }}
      >
        {skill.icon}
      </div>
      
      {/* Skill name */}
      <h3 
        className="text-white text-sm font-semibold text-center transition-colors duration-300"
        style={{ color: skill.color }}
      >
        {skill.name}
      </h3>

      {/* Hover light ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 0 1px ${skill.color}33, 0 0 24px ${skill.color}33, 0 0 48px ${skill.color}22`
        }}
      />
    </div>
  </motion.div>
);

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return "255, 255, 255";
}

export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin to prevent flickering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {isInView && <TargetCursor targetSelector=".cursor-target" hideDefaultCursor={true} />}
      <section
        ref={sectionRef}
        id="skills"
        className="w-screen min-h-screen flex justify-center pt-5 pb-20"
      >
        <div className="w-[75%] ">
        {/* Section Header */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" mb-16"
        >
          <p className="sm:text-[25px] text-[20px] text-gray-400 uppercase tracking-wider py-3">
            What I Do
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[32px] leading-tight mb-4">
            Skills & Technologies
          </h2>
        
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              index={index}
              skill={skill}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium">
              Always learning new technologies
            </span>
            <span className="text-2xl animate-bounce">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
