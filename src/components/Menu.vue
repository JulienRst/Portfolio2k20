<template>
	<nav>
		<ul class="row">
			<li v-for="(item, key) in itemsNavigation" :key="key" @click="toggleLink(key)" :class="{ active: key === active }">{{ item.name }}</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'MenuComponent',
	data: () => {
		return {
			itemsNavigation: [
				{ name: 'Projects' },
				{ name: 'About me' }
			]
		};
	}
})
export default class MenuComponent extends Vue {
	public active: number = -1;

	public mounted () {
		console.log('MenuComponent has been properly mounted');
	}

	public toggleLink (key: number): void {
		this.active = key;
	}
}
</script>