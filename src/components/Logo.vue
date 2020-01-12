<template>
	<div class="logo-container" @click="goToHome">
		Julien <strong>Rousset</strong>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'LogoComponent'
})
export default class LogoComponent extends Vue {
	public goToHome () {
		this.$router.push({ name: 'home' });
	}
}
</script>