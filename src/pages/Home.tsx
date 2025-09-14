import {
	Browsers,
	CaretRight,
	Cloud,
	DeviceMobile,
	Robot,
} from '@phosphor-icons/react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';
import Service from '../components/Service';
import { PROJECTS } from '../constants';

export default function Home() {
	return (
		<section className="custom-width">
			<Helmet>
				<title>Carlos</title>
				<meta
					name="description"
					content="I’m a Carlos, a software developer with years of experience creating high-quality applications. My passion lies in building intuitive and visually engaging user interfaces while ensuring scalable and seamless solutions tailored to client needs."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="Carlos Mateus" />
				<meta
					property="og:description"
					content="I’m a Carlos, a software developer with years of experience creating high-quality applications. My passion lies in building intuitive and visually engaging user interfaces while ensuring scalable and seamless solutions tailored to client needs."
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Carlos Mateus" />
				<meta
					name="twitter:description"
					content="I’m a Carlos, a software developer with years of experience creating high-quality applications. My passion lies in building intuitive and visually engaging user interfaces while ensuring scalable and seamless solutions tailored to client needs."
				/>
			</Helmet>

			<Header />

			<div className="mb-[20vh]" />

			<article className="h-[50vh] mb-[50vh] flex items-center">
				<div>
					<span>Hello I&rsquo;m</span>
					<h1 className="font-bold text-5xl mb-6">Carlos Mateus</h1>
					<p className="text-lg md:w-[60%] leading-10">
						Experienced software developer passionate about building
						high-quality applications with intuitive and visually appealing user
						interfaces. Skilled in creating scalable solutions that deliver
						seamless user experiences.
					</p>
				</div>
			</article>

			<article
				id="about"
				className="min-h-[50vh] mb-[20vh] flex flex-col items-center justify-center py-12"
			>
				<h2 className="font-semibold text-3xl text-center mb-12">
					What I Offer?
				</h2>

				<div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Service
						icon={<Browsers size={30} />}
						title="Website Development"
						description="Create fast, responsive, and modern websites with cutting-edge technologies and tailored designs."
					/>
					<Service
						icon={<DeviceMobile size={30} />}
						title="Mobile App Development"
						description="Build seamless and high-performance mobile applications that scale effortlessly for any app size."
					/>
					<Service
						icon={<Cloud size={30} />}
						title="Backend Solutions"
						description="Design and implement scalable, secure, and efficient backend systems tailored to your application's needs."
					/>
					<Service
						icon={<Robot size={30} />}
						title="Webscraping and Automation"
						description="Develop custom web scraping and automation solutions to streamline data collection and repetitive tasks."
					/>
				</div>
			</article>

			<article
				id="projects"
				className="flex flex-col justify-center py-12 mb-[10vh]"
			>
				<div className="mb-8 flex justify-between">
					<div>
						<h2 className="font-semibold text-3xl">My work</h2>
						<p className="text-lg">See what I've been working on lately</p>
					</div>
					<NavLink to="/projects" preventScrollReset={false}>
						<button
							type="button"
							className="flex items-center justify-center gap-2"
						>
							see more <CaretRight size={22} />
						</button>
					</NavLink>
				</div>

				{/* Rendering the projects */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-[10vh]">
					{Array.from(PROJECTS)
						.sort((a, b) => b.creationYear - a.creationYear)
						.slice(0, 4)
						.map((project) => (
							<ProjectItem {...project} key={project.id} />
						))}
				</div>
			</article>

			<article id="contact" className="lg:flex flex-wrap justify-center">
				<NavLink
					to="/contact"
					className="font-semibold text-center text-3xl hover:underline"
				>
					I'm convinced 😎✨ that you are the right one for my project 🚀💡
				</NavLink>
			</article>
			<Footer />
		</section>
	);
}
