import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer
    className="relative w-full py-8 px-4 text-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
    }}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <a
          href="https://github.com/your-github-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 text-2xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-2xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-red-500 hover:text-red-700 text-2xl transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Parth Parmar. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;