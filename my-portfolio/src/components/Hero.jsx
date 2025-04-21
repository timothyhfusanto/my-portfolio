import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'react-feather';

export default function Hero() {
	return (
		<section 
		id='home' 
		className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
		style={{backgroundImage: `url('/src/assets/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
		>
			<div className="max-w-7xl mx-auto flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 text-center">

				<motion.h1
					className="text-5xl font-bold mb-8"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Hi, I’m Timothy 👋
				</motion.h1>

				<motion.p
					className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-md "
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					I’m a student <span className="text-yellow-400 font-semibold">full-stack developer</span> who loves building beautiful and functional application systems
				</motion.p>

				<motion.a
					href="#about"
					className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-2xl font-bold"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					Contact Me <ChevronRight className="inline-block ml-2" />
				</motion.a>
			</div>
		</section>
	);
}