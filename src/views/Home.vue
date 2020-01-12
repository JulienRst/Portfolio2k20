<template>
	<div class="page home">
		<h1>Hello Wolrd</h1>
		<div>This is some text</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'HomeComponent'
})
export default class HomeComponent extends Vue {
	public mounted () {
		console.log('Hello there');
	}
}
</script>