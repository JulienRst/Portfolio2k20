<template>
	<nav>
		<div class="row">
			<router-link
				v-for="(item, key) in itemsNavigation"
				:key="key"
				:to="{ name: item.to }"
			>
				{{ item.name }}	
			</router-link>
		</div>
	</nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'MenuComponent',
	data: () => {
		return {
			itemsNavigation: [
				{ name: 'Projects', to: 'projects' },
				{ name: 'About me', to: 'about' }
			]
		};
	}
})
export default class MenuComponent extends Vue {
	public active: number = -1;

	public mounted () {
		console.log('MenuComponent has been properly mounted');
	}
}
</script>