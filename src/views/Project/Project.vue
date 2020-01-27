<template>
	<div class="page project grid-layout row" :class="{ active: isMounted }">
		<div class="grid-column">
			<h1>#0{{project.id}} - {{project.name}}</h1>
			<section class="description">
				<p v-for="(description, key) in project.descriptions" :key="key">
					{{ description }}
				</p>
			</section>
		</div>
		<div class="grid-column column center">
			<section class="challenges">
				<p v-for="(challenge, key) in project.challenges" :key="key">
					{{ challenge }}
				</p>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getProject } from '@/utils/fakeData';
import Project from '../../models/project';

@Component({
	name: 'ProjectComponent'
})
export default class ProjectComponent extends Vue {
	public isMounted: boolean = false;
	public project!: Project;

	public beforeMount () {
		const project = getProject(this.$route.params.id);
		if (project) {
			this.project = project;
		} else {
			this.$router.push({ name: 'error'});
		}
	}

	public mounted () {
		window.setTimeout(() => { this.isMounted = true; }, 100);
	}

	public beforeDestory () {
		this.isMounted = false;
	}
}
</script>