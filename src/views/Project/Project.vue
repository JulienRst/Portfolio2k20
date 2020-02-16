<template>
	<div class="page project grid-layout column" :class="{ active: isMounted }">
		<div class="grid-row row">
			<div class="grid-column">
				<h1>0{{project.id}} - {{project.name}}</h1>
				<section class="description">
					<p v-for="(description, key) in project.descriptions" :key="key">
						{{ description }}
					</p>
				</section>
			</div>
			<div class="grid-column column justify-end">
				<section class="challenges">
					<p v-for="(challenge, key) in project.challenges" :key="key">
						{{ challenge }}
					</p>
				</section>
			</div>
			<div class="grid-column double no-gutter column landing">
				<ImageViewerComponent :image="project.images.landing" />
			</div>
		</div>
		<div class="grid-row row">
			<div class="grid-column double no-gutter column details">
				<img :src="project.images.details" alt="">
			</div>
			<div class="grid-column"></div>
			<div class="grid-column column justify-end align-end">
				<a class="external-link" href="https://google.com" target="_blank" data-text="Visit this site">Visit this site</a>
			</div>
		</div>
		<div class="grid-row row">
			<div class="grid-column"></div>
			<div class="grid-column"></div>
			<div class="grid-column double column next-project">
				<div class="label">Next project</div>
				<ProjectTile :project="nextProject" :active="true" @go="goToProject(nextProject)" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getProject, getNextProject } from '@/utils/fakeData';
import Project from '@/models/project';
import ImageViewerComponent from '@/components/ImageViewer.vue';
import ProjectTile from '@/components/ProjectTile.vue';

@Component({
	name: 'ProjectComponent',
	components: { ImageViewerComponent, ProjectTile },
	data: () => {
		return {
			project: null
		};
	}
})
export default class ProjectComponent extends Vue {
	public isMounted: boolean = false;
	private project!: Project;

	public beforeMount () {
		this.initData();
	}

	@Watch('$route', { deep: true })
	public initData () {
		const project = getProject(this.$route.params.id);
		if (project) {
			this.project = project;
			window.scroll({ top: 0 });
		} else {
			this.$router.push({ name: 'error'});
		}
	}

	public mounted () {
		window.setTimeout(() => { this.isMounted = true; }, 100);
	}

	public goToProject (project: Project) {
		this.$router.push({ name: 'project', params: { id: project.slug }});
	}

	public beforeDestory () {
		this.isMounted = false;
	}

	get nextProject () {
		return getNextProject(this.project);
	}
}
</script>