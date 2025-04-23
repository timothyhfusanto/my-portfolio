import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../utils/projectData';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center mt-20 text-lg">Project not found 😢</div>;
  }

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-sm font-medium px-4 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Screenshots / Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src={project.image}
              alt="Screenshot"
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>
        </motion.div>

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            View on GitHub
          </a>
        </motion.div>

        {/* Back Link */}
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 text-sm hover:underline block mt-10"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}