import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    icon: <FaGithub className="text-3xl" />,
    href: "https://github.com/parthparmar-2006",
    color: "hover:text-gray-900 text-gray-700",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin className="text-3xl" />,
    href: "https://www.linkedin.com/in/parthparmar06/",
    color: "hover:text-blue-700 text-blue-600",
  },
  {
    label: "Email",
    icon: <FaEnvelope className="text-3xl" />,
    href: "mailto:parthbparmar06@email.com",
    color: "hover:text-red-700 text-red-500",
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative py-16 px-4 min-h-[300px] flex items-center justify-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
      marginTop: "48px",
      marginBottom: "48px",
    }}
  >
    {/* Animated Gradient Circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 w-full max-w-xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-lg p-10 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Let’s Connect</h2>
      <p className="text-center text-gray-600 mb-6 max-w-md">
        Want to collaborate, have a question, or just want to say hi? <br />
        Reach out via any platform below!
      </p>
      <div className="flex gap-5 justify-center mt-4 mb-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`transition ${s.color}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;