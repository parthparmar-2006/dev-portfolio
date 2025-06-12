import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ngo1 from '../assets/ngo1.png';
import ngo3 from '../assets/ngo3.png';
import ham1 from '../assets/ham1.png';
import ham2 from '../assets/ham2.png';
import sch1 from '../assets/sch1.png';
import sch2 from '../assets/sch2.png';

// Import 3 projects from Projects.jsx (manually copied for preview)
const projects = [
  {
    title: "No Code Data Analysis Tool",
    description: "A no code data analysis tool that transforms raw Excel data into dynamic charts, AI-generated insights, and exportable reports.",
    image: ngo1,
    link: "/projects", // or a specific project page if you have one
    try: "https://data-analysis-tool-eight.vercel.app/",
    view: "",
    topics: ["Generative AI", "React", "Node.js", "Plotly.js"],
  },
  {
    title: "Hamming Code Visualizer",
    description: "The concept of error detection and correction through Hamming Code from 4 to 16 bits is demonstrated here.",
    image: ham1,
    link: "/projects",
    try: "https://parthparmar-2006.github.io/Hamming-Code-Visualizer/",
    view: "https://github.com/parthparmar-2006/Hamming-Code-Visualizer",
    topics: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Guaranteed-Scheduling-Simulation",
    description: "A preemptive, ratio-based scheduling algorithm that dynamically prioritizes processes based on the ratio of their allocated to entitled CPU time.",
    image: sch1,
    link: "/projects",
    try: "https://parthparmar-2006.github.io/Guaranteed-Scheduling-Simulation/",
    view: "https://github.com/parthparmar-2006/Guaranteed-Scheduling-Simulation",
    topics: ["JavaScript", "CSS", "HTML"],
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
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.topics?.map((topic, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {project.view && (
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-700 text-sm font-medium"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.try && (
                <a
                  href={project.try}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
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

export default ProjectPreview;