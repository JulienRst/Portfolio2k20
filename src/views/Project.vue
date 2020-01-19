<template>
	<div class="page projects">
		<div class="ctn-projects column">
			<ProjectTile :project="project" v-for="(project, key) in projects" :key="key"/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { projects } from '@/utils/fakeData';
import ProjectTile from '@/components/ProjectTile.vue';
import Project from '../models/project';

@Component({
	name: 'ProjectComponent',
	components: { ProjectTile }
})
export default class ProjectComponent extends Vue {
	public activeProjectIndex: number = -1;
	public projects: Project[] = [];
	public style: any = {};

	public beforeMount () {
		this.projects = projects;
	}
}
</script>