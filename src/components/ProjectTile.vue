<template>
	<div class="ctn-project row" :class="{ active: active }" @click="$emit('go')">
		<div class="key">0{{ project.id }}</div>
		<div class="content column">
			<div class="ctn-title row">
				<div class="title" :data-text="project.name">
					{{ project.name }}
				</div>
				<div class="stroke"></div>
				<div class="date">{{ project.date }}</div>
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

	@Prop({ required: true })
	public active!: boolean;
}
</script>