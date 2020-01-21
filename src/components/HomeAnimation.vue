<template>
	<div ref="container" class="ctn-home-animation" @click="add"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import homeAnimationService from '@/services/HomeAnimationService';

@Component({
	name: 'HomeAnimation'
})
export default class HomeAnimation extends Vue {

	public mounted () {
		if (this.$refs.container) {
			homeAnimationService.init(this.$refs.container as HTMLElement);
		}
	}

	public add () {
		homeAnimationService.generateNewPoint();
	}

	public beforeDestroy () {
		homeAnimationService.destroy();
	}
}
</script>

<style lang="scss">
.ctn-home-animation {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
	z-index: -1;
}
</style>