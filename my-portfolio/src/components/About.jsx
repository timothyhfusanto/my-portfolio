import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/timothy.png';

export default function About() {
	return (
		<section
			id="about"
			className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300 p-6"
		>
			<div className="max-w-3xl mx-auto flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 text-center">
				<motion.div
					className="flex flex-col items-center"
					initial={{ opacity: 0, y: -60 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					viewport={{ once: true }}
				>
					<img
						src={profileImg}
						alt="Timothy"
						className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white from-purple-100 dark:from-purple-400 to-blue-100 dark:to-blue-900 bg-gradient-to-br mb-12"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -60 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold mb-4">About Me</h2>

					<p className="max-w-2xl text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
						I'm a penultimate year student at the National University of Singapore, majoring in Information Systems. I am deeply passionate about exploring the dynamic intersection of technology, business, and innovation.
						<br /><br />
						Currently navigating my academic journey at NUS, I am enthusiastic about leveraging my skills in information systems to tackle real-world challenges. Furthermore, I am actively seeking internship opportunities to gain practical experience and contribute to impactful projects.
					</p>
				</motion.div>


			</div>
		</section>
	);
}