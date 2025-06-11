import React, { useState } from "react";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

const hackathons = [
  {
    name: "CodeSprint 2024",
    award: "2nd Prize",
    period: "March 2024",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Built a DSA Tracker app with analytics and streaks. Presented to a panel of judges and won 2nd prize among 100+ teams.",
    skills: ["React", "Analytics", "LeetCode API"],
    link: "https://codesprint.com",
  },
  {
    name: "AI Hackathon",
    award: "Finalist",
    period: "Jan 2024",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Developed an AI chatbot using OpenAI API. Selected as a finalist for innovative use of AI in education.",
    skills: ["OpenAI", "Node.js", "UI/UX"],
    link: "",
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
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Hackathon</h2>
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