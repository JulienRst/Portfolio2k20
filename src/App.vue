<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'App'
})
export default class App extends Vue {
	public mounted () {
		console.log('Hello');
	}
}
</script>

<style lang="scss">
@import './assets/sass/master.scss';
</style>