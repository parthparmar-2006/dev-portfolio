import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    // Persist theme in localStorage
    return localStorage.getItem("theme") === "dark";
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
    // else let anchor work for hash links
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center" style={{ minHeight: "68px" }}>
        <button
          className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight focus:outline-none"
          onClick={() => navigate("/")}
        >
          Parth Parmar
        </button>
        <div className="flex flex-1 justify-end items-center">
          <ul className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-200 text-sm font-medium mr-4">
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "DSA", href: "/dsa" },
              // { label: "System Design", href: "/system-design" },
              { label: "Experience", href: "/experience" },
              { label: "Hackathon", href: "/hackathon" },
              { label: "Resume", href: "/resume" },
              // { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={e => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <button
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;