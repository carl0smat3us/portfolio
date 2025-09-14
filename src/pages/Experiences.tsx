import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function Experiences() {
	return (
		<section className="custom-width">
			<Helmet>
				<title>Carlos | Experiences</title>
			</Helmet>

			<Header />

			<div className="mt-[7%]">
				<h1 className="font-semibold text-4xl mt-6">Work experiences</h1>
				<p className="text-gray-500">Peruse my employment background.</p>
			</div>

			<article className="mt-5">
				<h2 className="text-xl font-medium">Software Developer Freelancer</h2>
				<span className="text-gray-400 text-sm">2021 - Present</span>
				<p className="mt-3">
					As a freelance Full Stack Developer, I specialize in delivering
					tailored, end-to-end solutions for web and mobile applications. My
					work involves building robust, scalable, and user-centric systems that
					bridge the gap between business needs and cutting-edge technology.
				</p>
				<ul className="list-disc list-inside mt-3 leading-10">
					<li>
						Designed and implemented backend architectures using Node.js and
						Python (Django), ensuring high performance and scalability across
						applications.
					</li>
					<li>
						Prototyped intuitive user interfaces with tools like Adobe XD and
						Figma, aligning design principles with client objectives.
					</li>
					<li>
						Developed responsive websites and platforms using ReactJS, NextJS,
						and TypeScript, delivering seamless user experiences.
					</li>
					<li>
						Created cross-platform mobile applications with React Native and
						Expo, collaborating closely with design and product teams to build
						user-centric products.
					</li>
					<li>
						Built and integrated RESTful APIs to facilitate seamless
						communication between frontend and backend, leveraging tools like
						Node.js, Python, Supabase, and Firebase for efficient data
						management.
					</li>
					<li>
						Ensured application reliability and quality through unit and
						integration testing using Jest and React Testing Library.
					</li>
				</ul>
				<p className="mt-3">
					My expertise extends to UI/UX design, where I craft user-friendly
					interfaces that elevate the overall experience, ensuring the final
					product not only meets but exceeds client expectations.
				</p>
			</article>

			<article className="mt-5">
				<h2 className="text-xl font-medium">Software Developer at ADJ Pro</h2>
				<span className="text-gray-400 text-sm">08/2023 - 03/2024</span>
				<p className="mt-3">
					ADJ Pro is a dynamic startup specializing in website creation, mobile
					app development, and innovative digital marketing strategies. At ADJ
					Pro, I played a key role in designing and developing cutting-edge
					solutions that empowered businesses to enhance their digital presence
					and streamline operations.
				</p>
				<ul className="list-disc list-inside mt-3 leading-10">
					<li>
						Developed RESTful APIs and mobile app features using React Native,
						delivering scalable and robust solutions tailored to client needs.
					</li>
					<li>
						Built dynamic and responsive websites and platforms using modern
						frameworks like ReactJS, NextJS, and TypeScript, ensuring optimal
						user experiences.
					</li>
					<li>
						Led the creation of a comprehensive e-commerce platform,
						incorporating functionalities such as order management, advertising
						campaign creation, and automated invoicing, driving efficiency and
						client satisfaction.
					</li>
					<li>
						Enhanced data management and user authentication processes by
						integrating Supabase and Firebase, ensuring secure and efficient
						applications.
					</li>
					<li>
						Maintained high-quality code through rigorous testing, utilizing
						Jest (TypeScript, JavaScript) and Pytest (Python) for unit and
						integration tests.
					</li>
				</ul>
			</article>

			<div className="h-10" />
		</section>
	);
}
