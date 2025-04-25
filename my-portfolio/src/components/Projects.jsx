import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../utils/projectData';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ChevronDown, ChevronUp, Search } from 'react-feather';
import { Input } from "../components/ui/input";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projects.length : 6;
  const [textQuery, setTextQuery] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(textQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(textQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(textQuery.toLowerCase())
  );

  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 py-20 px-6"
    >
      <div className="mx-auto text-center w-full min-h-screen px-6 justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="relative w-full max-w-7xl h-[calc(100vh-150px)] flex flex-col">
          {/* Search bar at the top */}
          <div className="relative w-full max-w-xl mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-12 py-5 rounded-full shadow-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              value={textQuery}
              onChange={(e) => setTextQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {textQuery && (
            <div className="mb-10 text-lg text-gray-600 dark:text-gray-400">
              Search results for: <span className="font-semibold">{textQuery}</span>
            </div>
          )}


          {/* Projects grid */}
          <div className="flex-1 px-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
              {filteredProjects.length > 0 ? (
                filteredProjects.slice(0, projectsToShow).map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 text-left border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link to={project.details}>
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className="w-full h-48 object-cover rounded-lg mb-4 transform-scale-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                      />
                    </Link>

                    <div className="text-sm justify-between flex items-center">
                      <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
                      <div className="text-gray-500 dark:text-gray-400">{project.date}</div>
                    </div>

                    <p className="text-gray-500 dark:text-gray-300 mb-5">{project.description}</p>

                    <div className="text-sm text-gray-500 dark:text-gray-400 justify-between flex">
                      <div className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full capitalize">
                        {project.category}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-gray-400 text-lg flex justify-center items-center">
                  No projects found.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 6 && (
          <div className="mt-12">
            <Button
              onClick={handleToggle}
              className="text-md  px-6 py-3 rounded-full"
            >
              {showAll ? ("Show Less") : "Show More"}
              {showAll ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
        )}
      </div>
    </section >
  );
}

