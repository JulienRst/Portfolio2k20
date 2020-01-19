<template>
	<div class="ctn-project row">
		<div class="key">0{{ project.id }}</div>
		<div class="content column">
			<div class="ctn-title row">
				<div class="title">
					{{ project.name }}
				</div>
				<div class="stroke"></div>
			</div>
			<div class="sub row">
				<div class="society">
					{{ project.society }}
				</div>
				<div class="tags row">
					<div class="tag" v-for="(tag, key) in project.tags" :key="key">{{ tag }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Project from '@/models/project';

@Component({
	name: 'ProjectTile'
})
export default class ProjectTile extends Vue {
	@Prop({ required: true })
	public project!: Project;

	public mounted () {
		console.log('ProjectTile has been properly mounted');
	}
}
</script>