"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  fadeIn,
  textVariant,
  staggerContainer,
} from "@/components/motion/motion";
import AnimationLottie from "@/components/helper/animation-lottie";
import Particles from "@/components/Particles/Particles";
import Footer from "../../Footer";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // 1️⃣ Send to You
  emailjs
    .send(
      "service_s92a4is",
      "template_x3mprji",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: "Anmol",
      },
      "0tbEXV-PNSLRcEdYZ"
    )
    .then(() => {
      // 2️⃣ Send Auto Reply
      return emailjs.send(
        "service_s92a4is",
        "template_sqa36t9",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Anmol",
        },
        "0tbEXV-PNSLRcEdYZ"
      );
    })
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong. Please try again.");
    });
};


  return (
    <div className="w-screen min-h-screen">
      <section
        id="contact"
        className="flex justify-center items-center py-8 md:py-12 lg:py-16 px-7 md:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleCount={200}
            particleSpread={12}
            speed={0.3}
            particleColors={[
              "#8b5cf6",
              "#3b82f6",
              "#ec4899",
              "#06b6d4",
              "#f59e0b",
              "#10b981",
            ]}
            moveParticlesOnHover={true}
            particleHoverFactor={0.8}
            alphaParticles={true}
            particleBaseSize={120}
            sizeRandomness={1.2}
            cameraDistance={12}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        <div className="w-full max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-6 md:mb-8 lg:mb-10"
          >
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-gray-400 uppercase tracking-wider">
              Get in touch
            </p>
            <h2 className="text-white font-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight mb-4 md:mb-6">
              Contact.
            </h2>
          </motion.div>

          {/* Contact Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-20">
            {/* Contact Form - Third on mobile, Left Side on desktop */}
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex-[0.75] bg-[#100D25]/70 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 relative overflow-hidden order-2 lg:order-1"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 69, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(139, 69, 255, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 69, 255, 0.05))",
                    "linear-gradient(225deg, rgba(139, 69, 255, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(315deg, rgba(59, 130, 246, 0.05), rgba(139, 69, 255, 0.05))",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-1 flex flex-col gap-4 md:gap-5 relative z-10 h-auto"
              >
                <motion.label
                  className="flex flex-col group"
                  variants={fadeIn("up", "tween", 0.1, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-white font-medium mb-2 md:mb-3 lg:mb-4 text-sm sm:text-base"
                    animate={{
                      color: ["#ffffff", "#ffffff"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Your Name
                  </motion.span>
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      required
                      className="w-full bg-[#100D25] focus:bg-[#100D25] hover:bg-[#100D25] py-3 md:py-4 px-4 md:px-6 placeholder:text-zinc-400 text-white  rounded-lg outline-none border border-white/5 font-medium text-sm sm:text-base transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/10"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-purple-500/0 pointer-events-none"
                      whileFocus={{
                        borderColor: "rgba(168, 85, 247, 0.3)",
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                      }}
                    />
                  </motion.div>
                </motion.label>

                <motion.label
                  className="flex flex-col group"
                  variants={fadeIn("up", "tween", 0.2, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-white font-medium mb-2 md:mb-3 lg:mb-4 text-sm sm:text-base"
                    animate={{
                      color: ["#ffffff", "#ffffff"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    Your email
                  </motion.span>
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your web address?"
                      required
                      className="w-full bg-[#100D25] focus:bg-[#100D25] hover:bg-[#100D25] py-3 md:py-4 px-4 md:px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border border-white/5 font-medium text-sm sm:text-base transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/10"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-blue-500/0 pointer-events-none"
                      whileFocus={{
                        borderColor: "rgba(59, 130, 246, 0.3)",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                      }}
                    />
                  </motion.div>
                </motion.label>

                <motion.label
                  className="flex flex-col group"
                  variants={fadeIn("up", "tween", 0.3, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-white font-medium mb-2 md:mb-3 lg:mb-4 text-sm sm:text-base"
                    animate={{
                      color: ["#ffffff", "#ffffff"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Your Message
                  </motion.span>
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <textarea
                      rows={6}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What you want to say?"
                      required
                      className="w-full bg-[#100D25] focus:bg-[#100D25] hover:bg-[#100D25] py-3 md:py-4 px-4 md:px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border border-white/5 font-medium text-sm sm:text-base transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20 group-hover:shadow-md group-hover:shadow-blue-500/10 resize-none"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-pink-500/0 pointer-events-none"
                      whileFocus={{
                        borderColor: "rgba(236, 72, 153, 0.3)",
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                      }}
                    />
                  </motion.div>
                </motion.label>

                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto py-3 md:py-4 px-6 md:px-8 rounded-xl bg-[#100D25] border border-white/10 text-white font-semibold text-sm sm:text-base shadow-lg overflow-hidden hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-200"
                  >
                    {/* subtle magenta halo that appears on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-90"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 30%, rgba(139,0,139,0.30) 0%, rgba(139,0,139,0.14) 18%, rgba(139,0,139,0.06) 40%, transparent 65%)",
                        filter: "blur(20px)",
                        mixBlendMode: "screen",
                      }}
                    />

                    {/* sheen overlay */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 100%)",
                        mixBlendMode: "overlay",
                        opacity: 0.6,
                        transformOrigin: "left",
                      }}
                    />

                    <span className="relative z-10 flex items-center gap-3">
                      <span>{loading ? "Sending..." : "Send"}</span>
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Lottie Animation - Second on mobile, Right Side on desktop */}
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex justify-center items-center relative order-1 lg:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[420px] relative z-10">
                <AnimationLottie animationPath="/lottie/contact.json" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
