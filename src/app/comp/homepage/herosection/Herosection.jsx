"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/motion/motion";
import GlowCard from "@/components/helper/glow";

// ...existing code...
function HeroSection() {
  return (
    <section 
    id="home"
    
    className="relative flex flex-col items-center justify-between pt-20 md:pt-24 lg:pt-28 pb-4 md:py-8 lg:py-12 w-screen min-h-screen md:h-screen overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-full md:h-full w-full">
        <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-y-8 md:gap-y-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">

          {/* left text — animate from left */}
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1 lg:order-1 flex flex-col items-start justify-center pt-4 md:pt-6 lg:pt-10 p-2 md:p-4 pb-8 md:pb-10"
          >
            <h1 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold md:font-extrabold leading-8 md:leading-10 lg:leading-[3.5rem] text-white">
              Hello, <br />
              This is {' '}
              <span className=" text-[#EB38A3]">{personalData.name}</span>
              {` , I'm a Professional `}
              <span className=" text-[#06B5C3]">{personalData.designation}</span>
              .
            </h1>

            <div className="my-6 md:my-8 flex items-center gap-4 md:gap-5">
              <Link
                href={personalData.github}
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link>
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link>
              {/* <Link
                href={personalData.instagram}
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <FaInstagram className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </Link> */}
            </div>

            <div className="flex flex-row items-center justify-start gap-2 md:gap-3 w-full">
              <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 flex-shrink-0">
                <button className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-[#0d1224] rounded-full border-none text-center text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center justify-center gap-1 hover:gap-3 whitespace-nowrap">
                  <span>Contact</span>
                  <RiContactsFill className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </button>
              </Link>

              <Link className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-center text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold flex-shrink-0 whitespace-nowrap" role="button" target="_blank" href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </Link>
            </div>
          </motion.div>

         
          {/* right panel — animate from right */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full mt-10 md:mt-0"
          >
              <GlowCard identifier="hero-code">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-3 md:px-4 lg:px-8 py-3 md:py-4 lg:py-5">
              <div className="flex flex-row space-x-1.5 md:space-x-2">
                <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-400"></div>
                <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-orange-400"></div>
                <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-3 md:px-4 lg:px-8 py-3 md:py-4 lg:py-8">
              <code className="text-[10px] md:text-xs lg:text-sm xl:text-base break-words whitespace-pre-wrap">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Sivasankar</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 break-words">
                  <span className="text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300 inline-block">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">NodeJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">ExpressJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">Redux</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">Javascript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">MySql</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300 inline-block">AWS</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-2 md:ml-4 lg:ml-8 mr-1 md:mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-4 md:ml-8 lg:ml-16 mr-1 md:mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-6 md:ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-1 md:mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-6 md:ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-1 md:mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-6 md:ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-1 md:mr-2 text-white">skills.length</span>
                  <span className="mr-1 md:mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-4 md:ml-8 lg:ml-16 mr-1 md:mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-2 md:ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
            </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// ...existing code...