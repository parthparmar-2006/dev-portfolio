// src/sections/Contact.jsx
import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="relative py-16 px-4 min-h-screen flex items-center justify-center"
    style={{
      background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
    }}
  >
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 animate-pulse pointer-events-none" />

    <div className="relative z-10 w-full max-w-xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Get in Touch</h2>
      <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Say hello!"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
         </form>
    </div>
  </section>
);

export default Contact;
