import React from 'react';
import { motion } from 'framer-motion';
import nusLogo from '../assets/general/nus.png';
import sutomoLogo from '../assets/general/sutomo.png';

export default function Education() {
	const schools = [
		{
			name: "National University of Singapore (NUS)",
			duration: "2022 – Present",
			degree: "Bachelor of Computing in Information Systems",
			skills: ["Web Development", "Application Development", "Data Presentation", "Database Management", "UX/UI", "Solution Architecture", "Business Process Management", "Product Management"],
			logo: nusLogo
		},
		{
			name: "Sutomo 1 Senior High School",
			duration: "2019 – 2022",
			degree: "Science Stream",
			skills: ["Mathematics", "Logical Thinking", "Problem Solving", "Chemistry", "Physics", "Biology"],
			logo: sutomoLogo
		}
	];

	return (
		<section
			id="education"
			className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 py-20 px-6"
		>
			<div className="max-w-5xl mx-auto text-center w-full min-h-screen px-6 justify-center items-center flex flex-col">
				<h2 className="text-4xl font-bold mb-16">Education</h2>

				<div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4">
					{schools.map((school, index) => (
						<motion.div
							key={index}
							className="relative mb-16 pl-8 ml-8"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.5 }}
							viewport={{ once: true }}
						>
							{/* Dot marker */}
							<div className="absolute left-[-12px] top-2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-950"></div>

							<div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md text-left">
								<div className="flex items-center gap-4 mb-3">
									<img
										src={school.logo}
										alt={`${school.name} logo`}
										className="w-12 h-12 object-contain"
									/>
									<div>
										<h3 className="text-xl font-semibold">{school.name}</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">{school.duration}</p>
									</div>
								</div>

								<p className="text-md font-medium mb-3">{school.degree}</p>

								<div className="flex flex-wrap gap-2">
									{school.skills.map((skill, i) => (
										<span
											key={i}
											className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}