<template>
	<view>
		<view v-for="(item, index) in datas" v-bind:key="item.id">
			<view  v-if="index != 0" style="width: 100%; height: 20upx; background-color: #EEEEEE;"></view>
			<view class="viewStyle" >
				<image src="../../static/logo.png" style="width: 100%; min-height: 480upx;" mode="aspectFit"></image>
				<view style="width: 100%; height: 2upx; background-color: #EEEEEE;"></view>
				<view class="bottomViewStyle">
					<view class="bottomTitleStyle">
						<view>
							<text>{{ item.title }}</text>
						</view>
						<view>
							<text>{{ item.sub_title }}</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>


</template>

<script>
	export default {
		name: "swiperContent",
		props: [
			"cellData"
		],
		data() {
			return {
				datas: [{
					"name": "",
					"url": "",
					"id": "123",
					"time": "200",
					"title": "标题",
					"sub_title": "副标题"
					
				}]

			};
		}
	}
</script>

<style>
	.viewStyle {
		flex: 1;
		margin-bottom: 20upx;
		width: 100%;
		height: 620upx;
		align-content: center;
		background-color: white;
	}

	.bottomViewStyle {
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		width: 100%;
		line-height: 120upx;
	}

	.bottomTitleStyle {
		line-height: 40upx;
		overflow: hidden;
		margin-top: 32upx;
		height: 80upx;
		float: left;
		font-size: 30upx;
		margin-left: 10upx;
	}
</style>
