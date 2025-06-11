// src/sections/ProjectPreview.jsx
import React from "react";

// ...existing code...
const projects = [
  {
    title: "AI Chat App",
    description: "A real-time chatbot using OpenAI API with user authentication and chat history.",
    link: "/projects/ai-chat",
    icon: "🤖",
  },
  {
    title: "DSA Tracker",
    description: "Track your DSA progress across LeetCode and GFG with detailed analytics and streaks.",
    link: "/projects/dsa-tracker",
    icon: "📈",
  },
  {
    title: "DevConnect",
    description: "A MERN-based developer community platform for blogs, profiles, and collaboration.",
    link: "/projects/devconnect",
    icon: "🌐",
  },
];

const ProjectPreview = () => {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Project Highlights</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition transform"
          >
            <div>
              <div className="text-4xl mb-3">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
            <a
              href={project.link}
              className="mt-6 text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition font-semibold"
        >
          View More Projects
        </a>
      </div>
    </div>
  );
};
// ...existing code...

export default ProjectPreview;
