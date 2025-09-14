import type { Project } from '../@types';

export const PROJECTS: Project[] = [
	{
		id: 'kasaao',
		type: 'mobile',
		title: 'Kasa AO: A Real State App',
		creationYear: 2024,
		isFinished: false,
		description: `<p>Kasa AO is a mobile application designed to facilitate the search and rental of properties in Angola. Developed with React Native, Expo & Supabase, it offers an intuitive and efficient experience for finding and negotiating properties. So far, the main issues we have had are achieving performance and simplicity balance, implementing real-time data sync, and adjusting the interface to fit what Angolan users are used to.</p>`,
		skills: [
			'React',
			'React Native',
			'Expo',
			'Supabase',
			'Android',
			'PostgreSQL',
			'Figma',
			'Tailwind CSS',
			'NativeWind',
		],
		cover: '/projects/kasaao/cover.png',
		photos: [
			{
				path: '/projects/kasaao/home.png',
				label: 'Home',
			},
			{
				path: '/projects/kasaao/notifications.png',
				label: 'Notifications',
			},
			{
				path: '/projects/kasaao/residence_detail.png',
				label: 'Residence',
			},
			{
				path: '/projects/kasaao/residence_detail_2.png',
				label: 'Residence part two',
			},
			{
				path: '/projects/kasaao/create.png',
				label: 'Create',
			},
			{
				path: '/projects/kasaao/create-2.png',
				label: 'Create part two',
			},
			{
				path: '/projects/kasaao/saved.png',
				label: 'Saved',
			},
			{
				path: '/projects/kasaao/wishes.png',
				label: 'Wishes',
			},
			{
				path: '/projects/kasaao/settings.png',
				label: 'Settings',
			},
			{
				path: '/projects/kasaao/security.png',
				label: 'Security',
			},
		],
	},
	{
		id: 'autospotify',
		type: 'web',
		title: 'Autospotify: A bot for Spotify',
		creationYear: 2025,
		preview: 'https://github.com/carl0smat3us/autospotify',
		description: `AutoSpotify is python project for study puporses that automates a few actions on Spotify, such creating accounts, logging in, searching for tracks, playing music and more. It uses Selenium mainly, and it's designed to work with both Chrome and Microsoft Edge browsers. The bot is undetected and can bypass captchas using 2captcha service.`,
		skills: [
			'Python',
			'Selenium',
			'Automation',
			'Chrome',
			'Microsft Edge',
			'Captcha bypass',
			'Undetected',
		],
		cover: '/projects/autospotify/cover.png',
		photos: [
			{
				path: '/projects/autospotify/home.png',
				label: 'CLI - Main menu',
			},
		],
	},
];
