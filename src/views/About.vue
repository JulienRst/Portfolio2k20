<template>
	<div class="page about">
		This is about
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'AboutComponent'
})
export default class AboutComponent extends Vue {
	public mounted () {
		console.log('AboutComponent has been properly mounted');
	}
}
</script>