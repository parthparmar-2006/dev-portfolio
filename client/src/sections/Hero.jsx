import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import me from "../assets/me.jpeg";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Open Source Contributor",
  "DSA Solver",
];

const Hero = () => (
  <section
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-indigo-100 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors"
  >
    {/* Animated Gradient Circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 animate-pulse" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 dark:bg-blue-800 rounded-full opacity-20 animate-pulse" />

    {/* Profile Image with Animated Ring */}
    
    <div className="relative mb-6">
      <div className="absolute inset-0 rounded-full border-4 border-blue-400 dark:border-blue-700 animate-spin-slow" />
      <img
        src={me}
        alt="Parth Parmar"
        className="w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl relative z-10"
      />
    </div>

    {/* Name and Typewriter */}
    <h1 className="text-4xl font-sans md:text-6xl font-extrabold mb-3 tracking-tight text-gray-900 dark:text-white drop-shadow-lg">
      Parth Parmar
    </h1>
    <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-300 font-semibold mb-6 min-h-[2.5rem]">
      <Typewriter
        words={roles}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1200}
      />
    </h2>
    <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-8 text-lg">
      Turning ideas into production-ready applications with solid architecture, efficient code, and data-driven intelligence.
    </p>

    {/* Social Icons */}
    <div className="flex gap-6 justify-center mb-8">
      <a
        href="https://github.com/parthparmar-2006"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl transition"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/parthparmar06/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-2xl transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:parthbparmar06@email.com"
        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-2xl transition"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>

    {/* Call-to-action Buttons */}
    <div className="flex gap-4 justify-center">
      <a
        href="#projects"
        className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition font-semibold"
      >
        View Projects
      </a>
      <a
        href="/resume"
        className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition font-semibold"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default Hero;

// Add this to your CSS (e.g., in index.css or tailwind config) for slow spin:
// .animate-spin-slow { animation: spin 4s linear infinite; }