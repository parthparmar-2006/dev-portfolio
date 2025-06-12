import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "DSA", href: "/dsa" },
  // { label: "System Design", href: "/system-design" },
  { label: "Experience", href: "/experience" },
  { label: "Hackathons", href: "/hackathon" },
  { label: "Resume", href: "/resume" },
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      setMenuOpen(false);
    }
    // else let anchor work for hash links
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between" style={{ minHeight: "68px" }}>
        <button
          className="text-2xl font-extrabold text-blue-600 tracking-tight focus:outline-none"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Parth Parmar
        </button>
        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap gap-6 text-gray-700 text-base font-medium">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-blue-600 transition"
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-blue-600 p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in z-50">
          <ul className="flex flex-col gap-2 py-4 px-6 text-gray-700 text-base font-medium">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-2 rounded hover:bg-blue-50 transition"
                  onClick={e => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// ...existing code...