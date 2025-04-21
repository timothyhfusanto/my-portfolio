import React from 'react';
import { motion } from 'framer-motion';
import nusLogo from '../assets/nus.png';
import sutomoLogo from '../assets/sutomo.png';

export default function Education() {
	const schools = [
		{
			name: "Sutomo 1 Senior High School",
			duration: "2019 – 2022",
			degree: "Science Stream",
			skills: ["Mathematics", "Logical Thinking", "Problem Solving", "Chemistry", "Physics", "Biology"],
			logo: sutomoLogo
		},
		{
			name: "National University of Singapore (NUS)",
			duration: "2022 – Present",
			degree: "Bachelor of Computing in Information Systems",
			skills: ["Web Development", "Application Development", "Data Presentation", "Database Management", "UX/UI", "Solution Architecture", "Business Process Management", "Product Management"],
			logo: nusLogo
		},
	];

	return (
		<section
			id="education"
			className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 py-20 px-6 p-8"
		>
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-12">Education</h2>

				<div className="grid gap-10 md:grid-cols-2">
					{schools.map((school, index) => (
						<motion.div
							key={index}
							className="p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex flex-col items-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.5 }}
							viewport={{ once: true }}
						>
							<img
								src={school.logo}
								alt={`${school.name} logo`}
								className="w-32 h-32 object-contain mb-4"
							/>

							<h3 className="text-2xl font-semibold mb-1">{school.name}</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{school.duration}</p>
							<p className="text-md font-medium mb-3">{school.degree}</p>

							<div className="flex flex-wrap justify-center gap-2">
								{school.skills.map((skill, i) => (
									<span
										key={i}
										className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full transform-scale-100 hover:scale-105 transition duration-300 ease-in-out"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}