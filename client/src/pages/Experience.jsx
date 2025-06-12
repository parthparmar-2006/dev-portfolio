import React, { useState } from "react";
import { FaExternalLinkAlt, FaBuilding } from "react-icons/fa";

import efive1 from '../assets/efive1.png';
import efive2 from '../assets/efive2.png';
import ngo1 from '../assets/ngo1.png';
import ngo3 from '../assets/ngo3.png';

const experiences = [
  {
    role: "Java Software Developer Intern",
    company: "Emerging Five",
    period: "June 2025",
    location: "On-site",
    images: [
      efive1,
      efive2
    ],
    description:
      "Built robust RESTful APIs using Spring Boot. Focused on backend architecture, data modeling, and integrating secure, scalable endpoints for a full-stack application.",
    skills: ["Spring Boot", "jQuery", "PostgreSQL"],
    link: "https://emergingfive.com/",
  },
  {
    role: "Data Analyst Intern",
    company: "Saath Charitable Trust",
    period: "May 2025",
    location: "On-site",
    images: [
      ngo1,
      ngo3
    ],
    description:
      "Developed a custom no-code data analysis tool that transforms raw Excel data into dynamic charts, AI-generated insights, and exportable reports.",
    skills: ["React", "DeepSeek AI", "Plotly.js"],
    link: "https://saath.org/",
  },
];

const Experience = () => {
  const [mainImages, setMainImages] = useState(experiences.map(() => 0));

  const handleThumbClick = (expIdx, imgIdx) => {
    setMainImages((prev) =>
      prev.map((val, idx) => (idx === expIdx ? imgIdx : val))
    );
  };

  return (
    <section
      className="relative py-16 px-2 sm:px-4 min-h-screen flex flex-col items-center justify-center pt-28"
      style={{
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
      }}
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
          Experience
        </h2>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden mb-10 hover:shadow-blue-200 transition"
          >
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6">
              <img
                src={exp.images[mainImages[idx]]}
                alt={exp.company + " logo"}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow"
              />
              {exp.images.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {exp.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={exp.company + " thumb " + (imgIdx + 1)}
                      className={`w-12 h-12 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2 transition ${
                        mainImages[idx] === imgIdx
                          ? "border-blue-600 ring-2 ring-blue-300"
                          : "border-transparent"
                      }`}
                      onClick={() => handleThumbClick(idx, imgIdx)}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Info Section */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 sm:mb-3">
                  {exp.role}
                </h3>
                <div className="text-blue-700 font-bold text-lg mb-1 flex items-center gap-2">
                  <FaBuilding /> {exp.company}
                </div>
                <div className="text-gray-500 text-sm mb-1">{exp.location}</div>
                <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">{exp.description}</p>
              </div>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-base sm:text-lg w-max"
                >
                  <FaExternalLinkAlt /> Company Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;