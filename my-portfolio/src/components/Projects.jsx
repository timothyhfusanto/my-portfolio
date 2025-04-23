import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../utils/projectData';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 py-20 px-6"
    >
      <div className="mx-auto text-center w-full min-h-screen px-6 justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 text-left border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to={project.details}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform-scale-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                />
              </Link>

              <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-5">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 justify-between flex">
                <div className='bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full capitalize'>{project.category}</div>
                <div>{project.date}</div>
              </p>
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full transform-scale-100 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    {tech.name}
                  </span>
                ))}
              </div> */}
              {/* {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}