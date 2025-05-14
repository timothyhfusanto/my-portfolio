import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { projects } from '../utils/projectData';
import profileImg from '../assets/general/timothy.svg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function About() {
	const [emblaRef] = useEmblaCarousel();
	return (
		<section
			id="about"
			className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300 p-6"
		>
			<div className="mx-auto flex flex-col w-full min-h-screen px-6 py-16 text-center">
				<div className='grid grid-cols-1 lg:grid-cols-2 w-full p-4 justify-between mb-30'>
					<motion.div
						initial={{ opacity: 0, y: -60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						viewport={{ once: true }}
						className='text-left'
					>
						<h2 className="text-lg font-light mb-4">ABOUT ME</h2>
					</motion.div>
					<div
						className='text-right'
					>
						<p className="text-xl font-extralight leading-relaxed">
							"I'm a penultimate year student at the National University of Singapore, majoring in Information Systems. I am passionate about exploring the dynamic intersection of technology, business, and innovation.
							<br /><br />
							Currently navigating my academic journey at NUS, I am enthusiastic about leveraging my skills in information systems to tackle real-world challenges. Furthermore, I am actively seeking internship opportunities to gain practical experience and contribute to impactful projects."	
						</p>
					</div>
				</div>
				<div className="flex-1 px-4">
					<Swiper
						modules={[Autoplay]}
						slidesPerView={3}
						loop={true}
						spaceBetween={20}
						speed={8000}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						loopedSlides={projects.length}
						allowTouchMove={true}
						grabCursor={true}
						cssMode={false}
						breakpoints={{
							320: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						className="!transition-none [--swiper-navigation-color:#000] [--swiper-pagination-color:#000] [--swiper-theme-color:#000] swiper-wrapper"
					>
						{projects.slice(0, 5).map((project, index) => (
							<SwiperSlide key={index}>
								<div className="justify-between flex items-center mb-2">
									<div className="uppercase text-md font-light">
										{project.name}
									</div>
									<div className="uppercase text-xs font-light">
										{project.category}
									</div>
								</div>

								<div className="overflow-hidden">
									<a href={"#projects"}>
										<img
											src={project.images[0]}
											alt={project.name}
											className="w-full object-cover transform scale-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
										/>
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

			</div >
		</section >
	);
}