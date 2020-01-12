<template>
	<div id="app">
		<MenuComponent />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuComponent from '@/components/Menu.vue';

@Component({
	name: 'App',
	components: { MenuComponent }
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