import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface IFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const schema = z.object({
		name: z
			.string({ required_error: 'Name is required.' })
			.min(2, { message: 'Name must be at least 2 characters long.' })
			.max(50, { message: 'Name must be at most 50 characters long.' }),

		email: z
			.string({ required_error: 'Email is required.' })
			.email({ message: 'Invalid email format, please enter a valid email.' }),

		subject: z
			.string({ required_error: 'Subject is required.' })
			.min(5, { message: 'Subject must be at least 5 characters long.' })
			.max(100, { message: 'Subject must be at most 100 characters long.' }),

		message: z
			.string({ required_error: 'Message is required.' })
			.min(10, { message: 'Message must be at least 10 characters long.' })
			.max(500, { message: 'Message must be at most 500 characters long.' }),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<IFormData>({
		resolver: zodResolver(schema),
	});

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = async () => {
		if (form.current) {
			await emailjs
				.sendForm(
					import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
					import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
				)
				.then(
					() => {
						reset();
						alert('Your message has been sent successfully!');
					},
					(error) => {
						console.error(error);
					},
				);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(sendEmail)}
			ref={form}
			className="w-full mt-14 lg:w-[35vw] lg:mt-0 flex flex-col gap-6"
		>
			<div className="flex flex-col">
				<label htmlFor="name">Name</label>
				<input
					className="border border-black p-2 mt-2"
					placeholder="John Doe"
					id={register('name').name}
					{...register('name')}
				/>
				<p className="text-red-500 font-medium mt-1">{errors.name?.message}</p>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					className="border border-black p-2 mt-2"
					type="email"
					placeholder="johndoe@example.com"
					id={register('email').name}
					{...register('email')}
				/>
				<p className="text-red-500 font-medium mt-1">{errors.email?.message}</p>
			</div>
			<div className="flex flex-col">
				<label htmlFor="subject">Subject</label>
				<input
					className="border border-black p-2 mt-2"
					placeholder="Message title"
					id={register('subject').name}
					{...register('subject')}
				/>
				<p className="text-red-500 font-medium mt-1">
					{errors.subject?.message}
				</p>
			</div>
			<div className="flex flex-col">
				<label htmlFor="message">Message</label>
				<textarea
					className="border border-black p-2 mt-2 h-28 resize-none"
					placeholder="Your message"
					id={register('message').name}
					{...register('message')}
				/>
				<p className="text-red-500 font-medium mt-1">
					{errors.message?.message}
				</p>
			</div>

			<button
				type="submit"
				className={clsx(
					'bg-black text-white hover:bg-[#373737] active:bg-black p-2 transition-all duration-300 ease-in-out',
					{
						'cursor-not-allowed bg-gray-500 animate-pulse': isSubmitting,
					},
				)}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Sending...' : 'Send'}
			</button>
		</form>
	);
}
