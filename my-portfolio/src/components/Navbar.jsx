import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { motion } from 'framer-motion';

const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Scroll tracking (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-50 dark:bg-gray-950 duration-300 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        {isHomePage && (
          <nav className="hidden md:flex space-x-12 text-md">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`uppercase ${activeSection === section
                  ? 'text-blue-500'
                  : 'hover:text-sky-400'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Toggle Button */}
        {isHomePage && (
          <button
            className="md:hidden text-gray-800 dark:text-white cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}


      </div>

      {/* Mobile Dropdown */}
      {isHomePage && menuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-950 p-4 text-center">
          {sections.map((section, index) => (
            <motion.a
              key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-semibold ${activeSection === section
                ? 'text-blue-500'
                : 'hover:text-sky-400'
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {index < sections.length - 1 && (
                <hr className="border-t border-gray-400 dark:border-gray-600 m-3" />
              )}
            </motion.a>
          ))}
        </div>
      )}
    </header>
  );
}