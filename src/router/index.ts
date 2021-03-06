import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import ErrorComponent from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeComponent,
	},
	{
		path: '/projects',
		name: 'project-root',
		component: () => import('@/views/Project/index.vue'),
		redirect: 'projects',
		children: [
			{
				path: '/',
				name: 'projects',
				component: () => import('@/views/Project/Projects.vue'),
			},
			{
				path: ':id',
				name: 'project',
				component: () => import('@/views/Project/Project.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
	},
	{
		path: '*/**',
		name: 'error',
		component: ErrorComponent
	}
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
