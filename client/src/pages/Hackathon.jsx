import React, { useState } from "react";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

import mined1 from "../assets/mined1.png";

const hackathons = [
  {
    name: "MINeD Hackathon",
    award: "Participant",
    period: "Mar 2025",
    images: [
      mined1
    ],
    description:
      "Developed an AI-powered Smart Route Optimizer for Intech Creative Services, optimizing logistics through intelligent shipment clustering, EV vehicle assignment, MST-based routing, and data-driven visual insights—boosting efficiency, sustainability, and utilization.",
    skills: ["AI", "ML", "React", "Node.js"],
    link: "https://mined2025.tech/",
  },
];

const Hackathon = () => {
  const [mainImages, setMainImages] = useState(hackathons.map(() => 0));

  const handleThumbClick = (hackIdx, imgIdx) => {
    setMainImages((prev) =>
      prev.map((val, idx) => (idx === hackIdx ? imgIdx : val))
    );
  };

  return (
    <section
      className="relative py-16 px-4 min-h-screen flex flex-col items-center justify-center pt-28"
      style={{
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
      }}
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Hackathons</h2>
        {hackathons.map((hack, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden mb-14 hover:shadow-blue-200 transition"
          >
            {/* Gallery Section */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
              <img
                src={hack.images[mainImages[idx]]}
                alt={hack.name + " screenshot"}
                className="w-full h-80 object-cover rounded-xl shadow"
              />
              {hack.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {hack.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={hack.name + " thumb " + (imgIdx + 1)}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition ${
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
            <div className="md:w-1/2 w-full p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{hack.name}</h3>
                <div className="text-yellow-600 font-semibold flex items-center gap-2 mb-2">
                  <FaTrophy /> {hack.award}
                </div>
                <div className="text-gray-500 text-sm mb-2">{hack.period}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hack.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{hack.description}</p>
              </div>
              {hack.link && (
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-lg w-max"
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