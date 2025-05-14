import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

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
			className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 px-6 py-20"
		>
			<div className="max-w-6xl mx-auto w-full min-h-screen flex flex-col">
				<motion.h2
					className="text-5xl font-bold text-center mb-12"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Contact Me
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Form */}
					<motion.form
						ref={form}
						onSubmit={sendEmail}
						className="space-y-6"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
							<input placeholder="Enter your name" type="text" name="name" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2" />
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
							<input placeholder='Enter your email' type="email" name="email" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2" />
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
							<input type="text" name="subject" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2"
								placeholder='Enter email subject' />
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
							<textarea name="message" rows="5" required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2"></textarea>
						</div>

						{ }<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
						>
							Send Message
						</button>

					</motion.form>

					{/* Info */}
					<motion.div
						className="space-y-6 text-left"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div>
							<h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
							<p className="text-gray-600 dark:text-gray-400">Feel free to reach out via email or LinkedIn!</p>
						</div>

						<div className="space-y-4">
							<div>
								<p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
								<a href="mailto:timothyfusanto@u.nus.edu" className="text-blue-600 dark:text-blue-400 hover:underline">
									timothyfusanto@u.nus.edu
								</a>
							</div>

							<div>
								<p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
								<p>+65 9053 0168</p>
							</div>

							<div>
								<p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
								<p>Singapore</p>
							</div>

							<div>
								<p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
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
				</div>
			</div>
			<div className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
				© {new Date().getFullYear()} Timothy Fusanto. All rights reserved.
			</div>
		</section>
	);
}