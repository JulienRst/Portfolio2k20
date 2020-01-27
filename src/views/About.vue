<template>
	<div class="page about row grid-layout" :class="{ active: isMounted }">
		<div class="column grid-column center">
			<section class="content">
				<h1><span v-for="(title, key) in titleValues" :key="key">{{ title }}</span></h1>
				<article>
					<p>I'm a french <strong>creative developper</strong>, currently based in Paris 10.</p>
					<p>For now I'm working as a <strong>Confirmed Front Developer</strong> with <strong>OnePoint</strong>.</p>
				</article>
				<article>
					<p>I've studied <strong>design</strong> and <strong>code</strong> for five years until I find my way to combine those <strong>two worlds</strong>.</p>
				</article>
				<article>
					<p>When not working on cool side and main project, I love to defeat my friends on <strong>Smash</strong>, eat a lot of different kind of <strong>food</strong> an play loudly on my <strong>accoustic guitar</strong>.</p>
				</article>
			</section>
		</div>
		<div class="column grid-column social">
			<section class="content column">
				<a :href="social.link" v-for="(social, key) in socials" :key="key" target="blank">{{ social.name }}</a>
			</section>
		</div>
		<div class="column grid-column picture double no-gutter">
			<section class="content">
				<img :src="profilePicture" alt="">
			</section>
		</div>
		<div class="time">
			95 - {{ currentYear }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Me } from '@/assets/images';

@Component({
	name: 'AboutComponent',
	data: () => {
		return {
			profilePicture: Me,
			socials: [
				{ name: 'Linkedin', link: 'https://www.linkedin.com/in/julien-rousset-75a6a1b4/' },
				{ name: 'Twitter', link: 'https://twitter.com/JulienRst' },
				{ name: 'GitHub', link: 'https://github.com/JulienRst' }
			]
		};
	}
})
export default class AboutComponent extends Vue {

	public isMounted: boolean = false;
	public currentYear: string = '19';

	public titleValues: string[] = ['Hello There', 'General Kenobi'];

	public mounted () {
		window.setTimeout(() => { this.isMounted = true; }, 100);
		const year = new Date();
		this.currentYear = year.getFullYear().toString().substring(2, 4);
	}

	public beforeDestory () {
		this.isMounted = false;
	}
}
</script>