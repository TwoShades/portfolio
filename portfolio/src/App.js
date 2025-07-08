// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// Placeholder imports for future pages
import About from "./pages/About";
// import Projects from './pages/Projects';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Main content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Future Routes */}
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
