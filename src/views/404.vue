<template>
	<div class="page error">
		Hello 404
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'ErrorComponent'
})
export default class ErrorComponent extends Vue {
	public mounted () {
		console.log('Hello Error');
	}
}
</script>