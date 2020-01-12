import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import ErrorComponent from '@/views/404.vue';
// import AboutComponent from '@/views/About.vue';
import ProjectComponent from '@/views/Project.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeComponent,
	},
	{
		path: '/project',
		name: 'project',
		component: ProjectComponent
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
