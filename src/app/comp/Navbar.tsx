"use client";
import React, { useState, useEffect } from "react";
import SparkleNavbar from "@/components/lightswind/sparkle-navbar";

const navLinks = [
  { id: "about", title: "ABOUT" },
  { id: "experience", title: "EXPERIENCE" },
  { id: "skills", title: "SKILLS" },
  { id: "projects", title: "PROJECTS" },
  { id: "contact", title: "CONTACT" },
 
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id: string, title: string) => {
  
    setActive(title);
    setToggle(false);
    
    const scrollToElement = () => {
      const element = document.getElementById(id);
    
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Additional scroll adjustment for navbar height
        setTimeout(() => {
          window.scrollBy({
            top: -80,
            behavior: "smooth",
          });
        }, 100);
      } else {
        console.log("Element not found for id:", id);
      }
    };
    
    // Try immediately
    scrollToElement();
    
    // Retry after delay in case element isn't ready
    setTimeout(scrollToElement, 200);
  };

const handleHomeClick = (e: any) => {
  
  e.preventDefault();
  e.stopPropagation();
  setActive("");
  setToggle(false);

  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      window.scrollBy({ top: -80, behavior: "smooth" });
    }, 100);
  } else {
    // fallback
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-lg ">

      <div className="flex items-center justify-between py-2 md:py-3 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Left Side - Name */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleHomeClick}
            className="text-[#EB38A3] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold tracking-wide hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            SIVASANKAR
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-6 lg:gap-8 items-center">
           <SparkleNavbar
            items={navLinks.map((link) => link.title)}
            color="#EB38A3"
            onItemClick={(item, index) => {
              const link = navLinks[index];
              if (link) {
            
                handleNavClick(link.id, link.title);
              }
            }}
          />
          {/* {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id, link.title)}
              className={`text-sm lg:text-base font-medium transition-colors duration-300 hover:text-[#EB38A3] ${
                active === link.title ? "text-[#EB38A3]" : "text-gray-300"
              }`}
            >
              {link.title}
            </button>
          ))} */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white text-2xl sm:text-3xl font-bold p-2 hover:scale-110 transition-transform duration-200 focus:outline-none  rounded"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {toggle ? (
              <span className="">✕</span>
            ) : (
              <span>☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } md:hidden flex-col bg-[#0E122B] backdrop-blur-xl rounded-b-2xl mx-4 sm:mx-6 mt-2 mb-2 py-4 px-4 border border-white/10 shadow-2xl transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-2 text-left">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id, link.title)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 text-sm font-medium ${
                  active === link.title
                    ? "text-[#EB38A3] bg-[#EB38A3]/10 border-l-4 border-[#EB38A3]"
                    : "text-gray-300 hover:text-[#EB38A3] hover:bg-white/5"
                }`}
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
