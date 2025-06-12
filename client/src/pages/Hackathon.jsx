import React from "react";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

import hack1 from '../assets/hack1.png';
import hack2 from '../assets/hack2.png';

const hackathons = [
  {
    name: "Smart India Hackathon 2024",
    role: "Finalist",
    period: "March 2024",
    images: [hack1, hack2],
    description:
      "Developed a Smart Route Optimizer for logistics using AI, MST, and clustering. Presented a working prototype to industry mentors and judges.",
    skills: ["AI/ML", "React", "Node.js", "MST", "Clustering"],
    link: "https://www.sih.gov.in/",
  },
  {
    name: "CodeStorm 2023",
    role: "Winner",
    period: "December 2023",
    images: [hack2],
    description:
      "Built a real-time collaborative blogging platform with authentication, markdown support, and live updates.",
    skills: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "",
  },
];

const Hackathon = () => {
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
          Hackathons
        </h2>
        {hackathons.map((hack, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden mb-10 hover:shadow-blue-200 transition"
          >
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6">
              <img
                src={hack.images[0]}
                alt={hack.name + " screenshot"}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow"
              />
            </div>
            {/* Info Section */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 sm:mb-3 flex items-center gap-2">
                  <FaTrophy className="text-yellow-500" /> {hack.name}
                </h3>
                <div className="text-blue-700 font-bold text-lg mb-1">{hack.role}</div>
                <div className="text-gray-500 text-sm mb-1">{hack.period}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hack.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">{hack.description}</p>
              </div>
              {hack.link && (
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-base sm:text-lg w-max"
                >
                  <FaExternalLinkAlt /> Event Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathon;