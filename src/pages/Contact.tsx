import { GithubLogo, TwitterLogo } from '@phosphor-icons/react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

export default function Contact() {
	return (
		<section className="custom-width">
			<Helmet>
				<title>Carlos | Contact</title>
			</Helmet>
			<Header />

			<article
				id="contact"
				className="lg:flex flex-wrap justify-between py-12 mt-16"
			>
				<div className="flex flex-col gap-[25px]">
					<h2 className="font-semibold text-3xl lg:w-[520px]">
						Let's build an incredible project together.
					</h2>
					<p className="text-lg lg:w-[300px]">
						Fill in all the fields so i can contact you as quickly as possible.
					</p>
					<p className="text-lg lg:w-[300px]">
						Or simply send me a message at{' '}
						<a href={`mailto:${import.meta.env.VITE_DESTINATARY_EMAIL}`}>
							<u>{import.meta.env.VITE_DESTINATARY_EMAIL}</u>
						</a>
						.
					</p>
					<div>
						<h2 className="font-semibold text-xl w-[400px]">Networks</h2>
						<div className="flex gap-2 mt-2">
							<a
								href="https://x.com/carl0smat3us"
								target="_blank"
								rel="noopener"
							>
								<TwitterLogo size={25} />
							</a>
							<a
								href="https://github.com/carl0smat3us"
								target="_blank"
								rel="noopener"
							>
								<GithubLogo size={25} />
							</a>
						</div>
					</div>
				</div>
				<ContactForm />
			</article>
		</section>
	);
}
