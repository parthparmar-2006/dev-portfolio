// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import ProjectPreview from "./sections/ProjectPreview";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Hackathon from "./pages/Hackathon";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import DSA from "./pages/DSA";

function App() {
  return (
    <Router>
      <div className="font-sans overflow-x-hidden">
        <Navbar />
        <main className="pt-[64px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero"><Hero /></section>
                  <section id="skills"><Skills /></section>
                  <section id="projects"><ProjectPreview /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/hackathon" element={<Hackathon />} />
            {/* Add other routes here */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/dsa" element={<DSA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
