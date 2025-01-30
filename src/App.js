import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import MyJourney from './pages/MyJourney';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Myproject from './pages/Myproject';
import Footer from "./components/Footer"
import Resume from './pages/Resume';

function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <Router>
        <motion.div ref={ref} className="box"
          style={{
            x,
            y,
            zIndex: -1 // Ensure the box is behind other elements
          }} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<MyJourney />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Myproject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
