import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => (
  <section
  className="font-sans relative py-32 px-4 min-h-screen flex flex-col items-center justify-center"
  style={{
    background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
  }}
  >
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Download My Resume</h2>
      <a
        href="/resume.pdf"
        download="ParthParmar_Resume.pdf"
        className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg"
      >
        <FaDownload /> Download PDF
      </a>
    </div>
  </section>
);

export default Resume;