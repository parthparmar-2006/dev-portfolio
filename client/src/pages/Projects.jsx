import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Chat App",
    topics: ["AI", "Chatbot", "OpenAI", "React", "Node.js"],
    where: "Personal Project",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A real-time chatbot using OpenAI API with user authentication and chat history. Built with MERN stack and deployed on Vercel.",
    view: "https://github.com/your-github-id/ai-chat-app",
    try: "https://ai-chat-app-demo.vercel.app/",
  },
  {
    title: "DSA Tracker",
    topics: ["DSA", "Analytics", "LeetCode", "GFG", "React"],
    where: "Hackathon",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Track your DSA progress across LeetCode and GFG with detailed analytics and streaks. Won 2nd prize at CodeSprint 2024.",
    view: "https://github.com/your-github-id/dsa-tracker",
    try: "",
  },
  {
    title: "DevConnect",
    topics: ["Community", "MERN", "Blog", "Collaboration"],
    where: "College Project",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A MERN-based developer community platform for blogs, profiles, and collaboration. Features real-time chat and markdown blog editor.",
    view: "https://github.com/your-github-id/devconnect",
    try: "",
  },
];

const Projects = () => {
  // Track main image index for each project
  const [mainImages, setMainImages] = useState(projects.map(() => 0));

  const handleThumbClick = (projectIdx, imgIdx) => {
    setMainImages((prev) =>
      prev.map((val, idx) => (idx === projectIdx ? imgIdx : val))
    );
  };

  return (
    <section
      className="relative py-16 px-4 min-h-screen flex flex-col items-center justify-center pt-28"
      style={{
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
      }}
    >
      {/* Animated Gradient Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
          All Projects
        </h2>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden mb-14 hover:shadow-blue-200 transition"
          >
            {/* Gallery Section (50%) */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
              <img
                src={project.images[mainImages[idx]]}
                alt={project.title + " screenshot"}
                className="w-full h-80 object-cover rounded-xl shadow"
              />
              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {project.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={project.title + " thumb " + (imgIdx + 1)}
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
            {/* Info Section (50%) */}
            <div className="md:w-1/2 w-full p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-blue-700 mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mb-3 text-base text-gray-500">
                  <span className="font-medium">Where:</span> {project.where}
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg"
                >
                  <FaGithub /> View Code
                </a>
                {project.try && (
                  <a
                    href={project.try}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-lg"
                  >
                    <FaExternalLinkAlt /> Try It
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;