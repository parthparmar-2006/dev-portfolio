import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => (
  <section
    className="relative py-16 px-4 min-h-screen flex flex-col items-center justify-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
    }}
  >
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 w-full max-w-3xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          <FaDownload /> Download PDF
        </a>
      </div>
      {/* --- Resume Content Example --- */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-2">Parth Parmar</h3>
        <div className="text-gray-600 text-sm mb-1">Full Stack Developer | AI/ML Enthusiast</div>
        <div className="text-gray-500 text-sm">parth@email.com • github.com/your-github-id • linkedin.com/in/your-linkedin-id</div>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-blue-600 mb-1">Experience</h4>
        <div className="mb-2">
          <span className="font-bold">Software Engineer Intern</span> @ TechCorp (May 2024 – July 2024)
          <div className="text-gray-600 text-sm">Built scalable APIs and dashboards with React & Node.js.</div>
        </div>
        {/* Add more experience */}
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-blue-600 mb-1">Education</h4>
        <div>B.Tech in Computer Science, XYZ University, 2022–2026</div>
      </div>
      <div>
        <h4 className="font-semibold text-blue-600 mb-1">Skills</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">React</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
          {/* Add more skills */}
        </div>
      </div>
    </div>
    {/* Optional: PDF Preview */}
    {/* <iframe src="/resume.pdf" className="w-full max-w-3xl h-[600px] mt-10 rounded-xl shadow" /> */}
  </section>
);

export default Resume;