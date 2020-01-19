<template>
	<div class="page projects">
		<div class="ctn-projects column">
			<ProjectTile :project="project" v-for="(project, key) in projects" :key="key" :active="(key <= activeStyle)" @go="goToProject(project)"/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { projects } from '@/utils/fakeData';
import ProjectTile from '@/components/ProjectTile.vue';
import Project from '@/models/project';

@Component({
	name: 'ProjectsComponent',
	components: { ProjectTile }
})
export default class ProjectsComponent extends Vue {
	public activeProjectIndex: number = -1;
	public projects: Project[] = [];
	public activeStyle: number = -1;

	public beforeMount () {
		this.projects = projects;
	}

	public mounted () {
		this.projects.forEach((p, key) => {
			window.setTimeout(() => { this.activeStyle ++; }, (key + 1) * 200);
		});
	}

	public goToProject (project: Project) {
		this.projects.forEach((p, key) => {
			window.setTimeout(() => { this.activeStyle --; }, (key + 1) * 200);
		});
		window.setTimeout(() => {
			this.$router.push({ name: 'project', params: { id: project.slug }});
		}, this.projects.length * 200 + 500);
	}
}
</script>