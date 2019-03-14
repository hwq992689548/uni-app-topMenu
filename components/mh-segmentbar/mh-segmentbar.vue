<template>
	<view style="width: 100%; overflow: hidden;">
		<scroll-view
		scrollIndicator = "none"
		scroll-with-animation = true
			:scroll-left = scrollTo
			scroll-x="true"
			style="width: 100%; height: 100upx; background-color: white; overflow: hidden;"
		>
			<view style="height: 100upx; ">
				<block v-for="(item, index) in data" v-bind:key="item.id">
					<view style="font-size: 20upx; padding: 28upx 20upx; display: inline; white-space: nowrap; line-height: 90upx; "  @click.stop="didSelectItem(index)" >
						<text  v-bind:class="sg_curIndex == index ? 'fontLarge': 'fontNormal'">{{ item.name }}</text>
					</view> 
				</block>
			</view> 
			<!-- <view class="lineStyle" v-bind:style="{'margin-left': sg_curIndex * 120 + 'upx'}"></view> -->
		</scroll-view> 
		<view style="width: 100%; height: 2upx; background-color: #EEEEEE;"></view> 
	</view> 
</template>

<script>

export default {
	props: {
		menuData: {},
		curIndex: 0,
	},

	components: {
		
	},

	data() {
		return {
			scrollTo: 0,
			sg_curIndex: this.$props.curIndex,
			data: this.$props.menuData
		};
	},
	methods: {
		didSelectItem(index) {
			this.sg_curIndex = index;
			this.$emit('didSelectTopMenuItem', index)
			let padd = index * 60
			if (padd > 375/2) {
				let min = padd - 375/2
				this.scrollTo = min
			}else{
				this.scrollTo = 0
			}
		}
	}
};
</script>

<style>
	


.lineStyle {
	background-color: #ec6d2c;
	height: 4upx;
	width: 100upx;
	position: absolute;
	margin-left: 20upx;
	margin-top: -15upx;
	
}

.fontLarge{
	color: #EC6D2C;
	font-size: 20px;
}
.fontNormal{
	color: #666666;
	font-size: 16px;
}


</style>
 