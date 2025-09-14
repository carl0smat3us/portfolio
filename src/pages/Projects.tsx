import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';
import DropDown from '../components/DropDown';
import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';
import { PROJECTS } from '../constants';

interface IOption {
	value: string;
	label: string;
}

interface IFormData {
	type: IOption;
	sorterBy: IOption;
}

export default function Projects() {
	const schema = z.object({
		type: z.object({
			value: z.string(),
			label: z.string(),
		}),
		sorterBy: z.object({
			value: z.string(),
			label: z.string(),
		}),
	});

	const { control } = useForm<IFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			sorterBy: {
				label: 'Newest',
				value: 'newest',
			},
			type: {
				label: 'All',
				value: 'all',
			},
		},
	});

	// Watch form values
	const typeFilter = useWatch({ control, name: 'type' });
	const sorterBy = useWatch({ control, name: 'sorterBy' });

	// Apply filters and sorting
	const filteredProjects = PROJECTS.filter((project) => {
		if (typeFilter?.value === 'all') return true;
		return project.type === typeFilter?.value;
	}).sort((a, b) => {
		if (sorterBy?.value === 'newest') {
			return (
				new Date(b.creationYear).getTime() - new Date(a.creationYear).getTime()
			);
		}
		if (sorterBy?.value === 'oldest') {
			return (
				new Date(a.creationYear).getTime() - new Date(b.creationYear).getTime()
			);
		}
		return 0;
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="custom-width">
			<Helmet>
				<title>Carlos | Projects</title>
			</Helmet>

			<Header />

			<article
				id="projects"
				className="flex flex-col justify-center py-12 mb-[20vh]"
			>
				<div className="w-full mb-8 flex justify-between lg:items-center max-lg:flex-col">
					<p className="text-lg">See what I've been working on lately</p>

					<div className="flex gap-3">
						<Controller
							name="type"
							control={control}
							render={({ field }) => (
								<DropDown
									label="Type"
									value={field.value.value}
									onChange={(value) =>
										field.onChange({
											value,
											label: field.value.label,
										})
									}
									options={[
										{ label: 'Website', value: 'web' },
										{ label: 'Mobile App', value: 'mobile' },
										{ label: 'All', value: 'all' },
									]}
								/>
							)}
						/>
						<Controller
							name="sorterBy"
							control={control}
							render={({ field }) => (
								<DropDown
									label="Sorter by"
									value={field.value.value}
									onChange={(value) =>
										field.onChange({
											value,
											label: field.value.label,
										})
									}
									options={[
										{ label: 'Newest', value: 'newest' },
										{ label: 'Oldest', value: 'oldest' },
									]}
								/>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-[10vh]">
					{filteredProjects.map((project) => (
						<ProjectItem {...project} key={project.id} />
					))}
				</div>
			</article>
		</section>
	);
}
