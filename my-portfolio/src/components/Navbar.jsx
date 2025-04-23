import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const sections = ['home', 'about', 'education', 'projects', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-colors duration-300 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-gray-900 dark:text-white">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Timothy</a>
        </div>

        {/* Only render nav links on homepage */}
        {isHomePage && (
          <nav className="space-x-6 text-sm font-medium hidden md:block">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`transition ${
                  activeSection === section
                    ? 'text-blue-500 dark:text-yellow-400 font-semibold'
                    : 'hover:text-blue-500 dark:hover:text-yellow-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}