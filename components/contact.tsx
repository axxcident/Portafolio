"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
	const { ref } = useSectionInView("Contact", 0.5);
	const formRef = useRef<HTMLFormElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current) return;

		setIsLoading(true);

		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formRef.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			toast.success("Email sent successfully!");
			formRef.current.reset();
		} catch (error) {
			console.error("Email sending error:", error);
			toast.error("Failed to send email. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
		>
			<SectionHeading>contact me</SectionHeading>
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at {""}
				<a className="underline" href="mailto:spotify.mango287@passinbox.com">
					axel.olivecrona@proton.me
				</a>{" "}
				or through this form.
			</p>
			<form
				className="mt-10 flex flex-col dark:text-black"
				ref={formRef}
				onSubmit={sendEmail}
			>
				<input
					className="h-14 rounded-lg border borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="from_email"
					type="email"
					required
					maxLength={500}
					placeholder="Email"
					disabled={isLoading}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="message"
					placeholder="Subject"
					required
					maxLength={500}
					disabled={isLoading}
				/>
				<SubmitBtn isLoading={isLoading} />
			</form>
		</motion.section>
	);
}
