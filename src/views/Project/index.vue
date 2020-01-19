<template>
	<router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'ProjectRoot'
})
export default class ProjectRoot extends Vue {
}
</script>