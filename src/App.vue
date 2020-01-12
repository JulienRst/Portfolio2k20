<template>
	<div id="app">
		<LogoComponent />
		<MenuComponent />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuComponent from '@/components/Menu.vue';
import LogoComponent from '@/components/Logo.vue';

@Component({
	name: 'App',
	components: { MenuComponent, LogoComponent }
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