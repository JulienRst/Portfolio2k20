<template>
	<div class="page home">
		<HomeAnimation />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HomeAnimation from '@/components/HomeAnimation.vue';

@Component({
	name: 'HomeComponent',
	components: { HomeAnimation }
})
export default class HomeComponent extends Vue {
}
</script>