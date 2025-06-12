import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiCplusplus, SiExpress, SiTensorflow, SiPytorch, SiMysql, SiPostgresql, SiRedux, SiSpringboot, SiJquery, SiPandas } from "react-icons/si";

const skillCategories = [
  {
    title: "MERN Stack",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-blue-500 text-4xl" />,
        profile: "Modern UI library for building fast, interactive web apps.",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />,
        profile: "Backend JavaScript runtime for scalable server-side apps.",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-800 text-4xl" />,
        profile: "Minimal and flexible Node.js web application framework.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-700 text-4xl" />,
        profile: "NoSQL database for flexible, scalable data storage.",
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-600 text-4xl" />,
        profile: "State management for predictable React apps.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
        profile: "Core language of the web, powering dynamic experiences.",
      },
      {
        name: "jQuery",
        icon: <SiJquery className="text-blue-400 text-4xl" />,
        profile: "Popular JavaScript library for DOM manipulation and AJAX.",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500 text-4xl" />,
        profile: "Markup standard for structuring web content.",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
        profile: "Styling language for beautiful, responsive layouts.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400 text-4xl" />,
        profile: "Utility-first CSS framework for rapid UI development.",
      },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      {
        name: "Python",
        icon: <FaPython className="text-yellow-500 text-4xl" />,
        profile: "Versatile language for scripting, automation, and AI/ML.",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-400 text-4xl" />,
        profile: "End-to-end open source platform for machine learning.",
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="text-red-500 text-4xl" />,
        profile: "Deep learning framework for flexible research and production.",
      },
      {
        name: "Pandas",
        icon: <SiPandas className="text-black text-4xl" />,
        profile: "Powerful Python library for data analysis and manipulation.",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-700 text-4xl" />,
        profile: "NoSQL database for flexible, scalable data storage.",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-700 text-4xl" />,
        profile: "Popular open-source relational database.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500 text-4xl" />,
        profile: "Advanced open-source relational database.",
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "Java",
        icon: <FaJava className="text-red-700 text-4xl" />,
        profile: "Robust, object-oriented language for enterprise applications.",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-green-700 text-4xl" />,
        profile: "Java framework for building production-ready web services.",
      },
      {
        name: "C++",
        icon: <SiCplusplus className="text-blue-700 text-4xl" />,
        profile: "High-performance language for systems and DSA.",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-red-500 text-4xl" />,
        profile: "Version control for collaborative development.",
      },
    ],
  },
];

// ...existing code...

const Skills = () => (
  <section
    id="skills"
    className="relative py-16 px-4 min-h-screen flex items-center justify-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
    }}
  >
    {/* Animated Gradient Circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">My Skillset</h2>
      {skillCategories.map((category, i) => (
        <div key={i}>
          <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">{category.title}</h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur rounded-2xl shadow-md flex flex-col items-center p-6 hover:shadow-xl transition"
              >
                {skill.icon}
                <h4 className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</h4>
                <p className="mt-2 text-sm text-gray-500 text-center">{skill.profile}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;