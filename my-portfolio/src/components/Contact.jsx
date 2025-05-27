import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Card } from '@/components/ui/card';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Linkedin, PhoneCall } from 'react-feather';

export default function Contact() {
	const form = useRef();

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		const loadingToast = toast.loading("Sending your message...");

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
			)
			.then(
				(result) => {
					toast.success(
						<div>
							<p className="font-semibold">Message sent successfully!</p>
							<p className="text-sm text-gray-500 dark:text-gray-400">I'll get back to you via email.</p>
						</div>,
						{ id: loadingToast }
					);
					form.current.reset();
				},
				(error) => {
					toast.error("Failed to send message. Please try again. 😞", { id: loadingToast });
					console.log(error.text);
				}
			);
	};

	return (
		<section
			id="contact"
			className="transition-colors duration-300 px-6 py-20"
		>
			<div className="mx-auto w-full flex flex-col px-6">
				<div className='grid grid-cols-1 lg:grid-cols-2 w-full p-4 justify-between mb-10'>
					<motion.div
						initial={{ opacity: 0, y: -60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
						className='text-left'
					>
						<div className="text-lg font-light mb-4">CONTACT ME</div>

						<motion.div
							initial={{ opacity: 0, y: -60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							viewport={{ once: true }}
						>
							<p className="text-6xl uppercase leading-[1]">
								LET'S CONNECT <br></br>
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: -60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						viewport={{ once: true }}
						className="flex flex-col justify-end text-right mt-5 lg:mt-0">
						<p className="text-xl font-light uppercase leading-relaxed">
							Looking to build a website? <br/> I’m here to help bring your vision to life. <br />
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-12 w-full justify-between mb-10">
					{/* Form */}
					<motion.div
						className="space-y-6 text-left md:col-span-5 col-span-12 p-4"
						initial={{ opacity: 0, y: -60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						viewport={{ once: true }}
					>
						<p className="text-2xl uppercase leading-[1]">
							MY CONTACT INFO
						</p>

						<div className='justify-end flex flex-col'>
							<p className="text-sm font-light uppercase leading-relaxed ">
								Feel free to reach out via email or LinkedIn!
							</p>
						</div>

						<div className="space-y-8">
							<div>
								<div className='flex items-center mb-1'>
									<p className="text-sm flex items-center text-gray-500 dark:text-gray-400"><Mail className='mr-2' size={20} />Email</p>
								</div>
								<a href="mailto:timothyfusanto@u.nus.edu" className="text-blue-600 dark:text-blue-400 hover:underline">
									timothyfusanto@u.nus.edu
								</a>
							</div>

							<div>
								<div className='flex items-center mb-1'>
									<p className="text-sm flex text-gray-500 dark:text-gray-400"><MapPin className='mr-2' size={20} /> Location</p>
								</div>
								<p>Singapore</p>
							</div>

							<div>
								<div className='flex items-center mb-1'>
									<p className="text-sm flex text-gray-500 dark:text-gray-400"><Linkedin className='mr-2' size={20} />LinkedIn</p>
								</div>
								<a
									href="https://linkedin.com/in/timothy-fusanto"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 dark:text-blue-400 hover:underline"
								>
									linkedin.com/in/timothy-fusanto
								</a>
							</div>
						</div>

					</motion.div>
					<motion.form
						ref={form}
						onSubmit={sendEmail}
						initial={{ opacity: 0, y: -60 }}
						className="w-full flex flex-col gap-6 md:col-span-7 col-span-12"
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="p-4">
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
									<input
										placeholder="e.g. John Smith"
										type="text"
										name="name"
										required
										className="w-full border-b-2 outline-none py-2 px-4 transition-colors focus:border-blue-500"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
									<input
										placeholder="e.g. example@gmail.com"
										type="email"
										name="email"
										required
										className="w-full border-b-2 outline-none py-2 px-4 transition-colors focus:border-blue-500"
									/>
								</div>

							</div>

							<div className="grid grid-cols-1 mb-6">
								<label htmlFor="subject" className="block text-smfont-medium mb-1">Subject</label>
								<input
									type="text"
									name="subject"
									required
									placeholder="e.g. Inquiry about your portfolio"
									className="w-full border-b-2 outline-none py-2 px-4 transition-colors focus:border-blue-500"
								/>
							</div>

							<div className="mb-6">
								<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
								<textarea
									name="message"
									rows="6"
									required
									placeholder="Write your message here..."
									className="w-full rounded-md border  px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
								/>
							</div>

							<div className='flex w-full'>
								<div className="flex justify-between">
									<button
										type="submit"
										className="flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg py-2 px-8 rounded-lg transition w-full sm:w-fit"
									>
										Send Message
										<ArrowRight size={20} />
									</button>
								</div>

							</div>
						</div>
					</motion.form>
				</div>


			</div >
			<div className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
				© {new Date().getFullYear()} Timothy Fusanto. All rights reserved.
			</div>
		</section >
	);
}