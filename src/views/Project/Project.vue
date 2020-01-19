<template>
	<div>ProjectComponent is working !</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'ProjectComponent'
})
export default class ProjectComponent extends Vue {
	public mounted () {
		console.log('ProjectComponent has been properly mounted');
	}
}
</script>