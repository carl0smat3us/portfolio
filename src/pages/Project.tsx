import { CaretLeft } from '@phosphor-icons/react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { PROJECTS } from '../constants';

export default function Project() {
	const { id } = useParams();

	const project = PROJECTS.find((p) => p.id === id);

	return (
		<section className="custom-width">
			<Helmet>
				<title>Carlos | {project?.title}</title>
				<meta name="description" content={project?.description} />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={`Carlos Mateus | ${project?.title}`}
				/>
				<meta property="og:description" content={project?.description} />
				<meta property="og:image" content={project?.cover} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`Carlos Mateus | ${project?.title}`}
				/>
				<meta name="twitter:description" content={project?.description} />
				<meta name="twitter:image" content={project?.cover} />
			</Helmet>

			<Header />

			<NavLink to="/projects">
				<button type="button" className="mb-8">
					<CaretLeft size={20} className="mt-12" />
				</button>
			</NavLink>

			<div className="mb-20">
				<article className="mb-10">
					<h1 className="font-semibold text-4xl mt-6">{project?.title}</h1>
					<p className="text-gray-500 mt-4">{project?.description}</p>
					<article className="mt-5">
						<h2 className="text-xl font-medium">Skills and deliverables</h2>
						<div className="mt-6 flex flex-wrap gap-2">
							{project?.skills.map((skill) => (
								<span
									key={skill}
									className="text-[#7B7B7B] bg-[#E5E5E5] h-[56px] px-4 flex items-center justify-center"
								>
									{skill}
								</span>
							))}
						</div>
					</article>

					<div className="mt-5 mb-10" />

					{project?.preview && (
						<article>
							<h2 className="text-xl font-medium">Preview</h2>
							<a
								className="mt-6 text-violet-400 underline"
								href={project?.preview}
								target="_blank"
							>
								{project?.preview}
							</a>
						</article>
					)}
				</article>

				<div>
					<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{project?.photos.map((photo, _) => (
							<div key={project.id} className="flex flex-col">
								<img
									className="mb-4 rounded-xl border-2 w-full sm:max-w-sm md:max-w-md lg:max-w-full object-cover"
									alt={photo.label}
									src={photo.path}
								/>
								<p className="text-gray-400">{photo.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
