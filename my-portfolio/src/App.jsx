import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './pages/ProjectDetails'; // 💡 create this file
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
          <Routes>
            {/* 🏠 Main Homepage */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Education />
                <Projects />
                <Contact />
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