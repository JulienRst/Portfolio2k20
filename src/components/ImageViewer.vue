<template>
	<div class="image-viewer" ref="imgviewer">
		<div class="inner-image-viewer">
			<img :src="image" :style="{ top: offset + 'px' }" ref="img">
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

	@Component({
		name: 'ImageViewerComponent'
	})
	export default class ImageViewerComponent extends Vue {
		public offset = 0;

		@Prop({ required: true })
		public image!: string;

		private bindedHandleScroll!: (event: WheelEvent) => void;
		private bindedHandleResize!: () => void;
		private maxOffset = 0;

		public beforeMount () {
			this.bindedHandleScroll = this.handleScroll.bind(this);
			this.bindedHandleResize = this.initScroll.bind(this);
		}

		public mounted () {
			const ref = this.$refs.imgviewer as HTMLElement;
			ref.addEventListener('wheel', this.bindedHandleScroll, { passive: true });
			window.addEventListener('resize', this.bindedHandleResize);
			const img = this.$refs.img as HTMLImageElement;
			this.maxOffset = img.height - ref.offsetHeight;
			this.initScroll();
		}

		@Watch('image')
		public initScroll () {
			const ref = this.$refs.imgviewer as HTMLElement;
			const img = this.$refs.img as HTMLImageElement;

			const tmpImg = new Image();
			tmpImg.addEventListener('load', () => {
				this.maxOffset = img.height - ref.offsetHeight;
				this.checkBoundaries();
			});
			tmpImg.src = img.src;
		}

		public beforeDestroy () {
			const ref = this.$refs.imgviewer as HTMLDivElement;
			ref.removeEventListener('wheel', this.bindedHandleScroll);
			window.removeEventListener('resize', this.bindedHandleResize);
		}

		private handleScroll (event: WheelEvent) {
			// event.preventDefault();
			this.offset -= event.deltaY;
			this.checkBoundaries();
		}

		private checkBoundaries () {
			if (this.offset > 0) {
				this.offset = 0;
			} else if (this.offset < -this.maxOffset) {
				this.offset = -this.maxOffset;
			}
		}
	}
</script>