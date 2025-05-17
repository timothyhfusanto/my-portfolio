import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'react-feather';
import background from '../assets/general/background.jpg';
import profileImg from '../assets/general/timothy-transparent.svg';
import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
		<section
			id='home'
			className="transition-colors duration-300 p-4"
		>
			<div className="mx-auto flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 lg:py-0 text-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 w-full p-4">
					<div className='text-center lg:text-left justify-center flex flex-col items-center lg:items-start'>
						<motion.h1
							className="text-7xl md:text-9xl font-bold mb-8"
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							Software Engineer
						</motion.h1>

						<motion.p
							className="text-lg text-gray-600 dark:text-gray-300 mb-10 uppercase font-light"
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							I’m Timothy - a student <span className="text-blue-500 font-semibold">software developer</span> & <span className="text-blue-500 font-semibold">product manager</span>  who loves planning and building functional application systems
						</motion.p>

						<motion.a
							href="#contact"
							className="rounded-full"
							initial={{ opacity: 0, x: -80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<Button className="bg-blue-500 text-white text-3xl !py-8 !px-8 rounded-full cursor-pointer">
								Contact Me <ChevronRight className="inline-block" />
							</Button>
						</motion.a>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						viewport={{ once: true }}
						className="flex justify-center lg:justify-end lg:ml-4 p-4 mt-10"
					>
						<img
							src={profileImg}
							alt="Timothy"
							className="lg:h-screen h-[50vh] object-cover rounded-xl"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}