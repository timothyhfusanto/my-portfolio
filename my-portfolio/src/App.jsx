import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { Toaster } from 'react-hot-toast';
import Skills from './components/Skills';

function App() {

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <main className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen">
          <Routes>
            {/* 🏠 Main Homepage */}
            <Route path="/" element={
              <>
                <div className='container mx-auto'>
                  <Hero />
                  <About />
                  <Education />
                  <Projects />
                  <Skills />
                  <Contact />
                </div>

              </>
            } />

            {/* 📄 Project Detail Page */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;