import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';

const sections = ['home', 'about', 'education', 'projects', 'contact'];

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
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-colors duration-300 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">Timothy</a>

        {/* Desktop Nav */}
        {isHomePage && (
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`transition ${activeSection === section
                    ? 'text-blue-500 dark:text-yellow-400 font-semibold'
                    : 'hover:text-blue-500 dark:hover:text-yellow-400'
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
            className="md:hidden text-gray-800 dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}


      </div>

      {/* Mobile Dropdown */}
      {isHomePage && menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 text-sm font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`block transition ${activeSection === section
                  ? 'text-blue-500 dark:text-yellow-400 font-semibold'
                  : 'hover:text-blue-500 dark:hover:text-yellow-400'
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}