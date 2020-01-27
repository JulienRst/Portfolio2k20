import Project from '@/models/project';

export const projects = [
	{
		id: 1,
		name: 'Sybel',
		slug: 'sybel',
		society: 'onepoint',
		tags: ['Angular', 'TypeScript'],
		date: '2019',
		descriptions: [
			'Sybel is a streaming platform dedicated to podcasts.',
			'I had the pleasure to craft the Alpha version of the webapp version while working for onepoint.',
			'The real challenge was to give the user an experiment where he can listen to one podcast and continue his journey within the app'
		],
		challenges: [
			'This webapp was crafted with Vue.js and use TypeScript. Within the cool futures you can spot :',
			'Neat animations, data interactions from Parse (you don’t want to know this), Facebook Login and HTMLAudioAPI'
		],
		images: {
			landing: '/assets/images/projects/sybel-landing.png',
			details: '/assets/images/projects/sybel-player.png'
		},
	},
	{
		id: 2,
		name: 'No Name',
		slug: 'no-name',
		society: '/////',
		tags: ['VueJS', 'Three.js', 'TypeScript'],
		date: '2019',
		descriptions: [],
		challenges: [],
		images: {
			landing: '/assets/images/projects/sybel-landing.png',
			details: '/assets/images/projects/sybel-player.png'
		},
	}
];

export const getProject = (slug: string): Project|null => {
	let result = null;
	projects.forEach((project) => {
		if (project.slug === slug) {
			result = project;
		}
	});

	return result;
};
