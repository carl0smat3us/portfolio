import type { ReactNode } from 'react';

interface IService {
	icon: ReactNode;
	title: string;
	description: string;
}

export default function Service(props: IService) {
	return (
		<div className="h-44 min-w-80 py-4 flex flex-col gap-y-2">
			{props.icon}
			<span className="text-lg font-medium">{props.title}</span>
			<p>{props.description}</p>
		</div>
	);
}
