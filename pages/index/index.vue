<template>
	<view class="content">
		<view style="overflow: inherit; background-color: #333333; color: black; width: 100%;  position: fixed; z-index: 999;">
			<mh_segmentbar v-bind:curIndex=curMenuIndex :menuData="topMenuDatas" style="width: 100%;overflow: hidden;" ref="segmentbar"
			 @didSelectTopMenuItem="didSelectTopMenuItem" />
		</view>


		<view style="width: 100%; flex: 1;  height: 100%; z-index: 3;">
			<swiper style="width: 100%; height: 100%; background-color: #F5F5F5;  position: absolute; top: 140upx; " duration="300" :current="curMenuIndex" @change="changeSwipe">
				<swiper-item  v-for="(menuItem) in topMenuDatas" v-bind:key="menuItem.id" style="overflow-y: scroll;">
					<view style="flex: 1;">
						<swiperContent ref="childView" @onStartRefreash="onStartRefreash" @onEndRefreash="onEndRefreash"> </swiperContent>
					</view>
				</swiper-item>
			</swiper>
			<!-- <scroll-view style=" flex: 1; overflow-y: scroll;  min-width: 100%; position: absolute; top: 140upx; "> 
				<view style="flex: 1;"> 
					<swiperContent ref="childView" @onStartRefreash="onStartRefreash" @onEndRefreash="onEndRefreash"> </swiperContent>
				</view>
			</scroll-view> -->
		</view>
	</view>
</template>

<script>
	import mh_segmentbar from "../../components/mh-segmentbar/mh-segmentbar.vue"
	import swiperContent from "../swiperContent/swiperContent.vue"
	export default {
		components: {
			mh_segmentbar,
			swiperContent
		},
		onLoad() {
			
		},
		onShow() {
			
		},
// 		onPageScroll: function(Object) {  
// 			console.log("index页")
// 			conole.log(Object.scrollTop);//实时获取到滚动的值  
// 		},
		  
		data() {
			return {
				topMenuDatas: [{
					"id": 5,
					"name": "推荐"
				}, {
					"id": 3,
					"name": "专题"
				}, {
					"id": 1,
					"name": "最新"
				}, {
					"id": 2,
					"name": "最热"
				}, {
					"id": 10,
					"name": "最扣扣的"
				}, {
					"id": 11,
					"name": "最皮的"
				}, {
					"id": 12,
					"name": "最不要脸的"
				}, {
					"id": 13,
					"name": "最牛"
				}, {
					"id": 14,
					"name": "最经典"
				}],
				curMenuIndex: 0,

			}
		},

		/* 刷新  将刷新的页面索引传到content子页面中 在子页面进行请求*/
		onPullDownRefresh() {
			this.$refs.childView[this.curMenuIndex].refreashData(this.curMenuIndex) //传入页面 
		},

		methods: {
			/* 点击顶部菜单时 切换视图 */
			didSelectTopMenuItem(index) {
				if (this.curMenuIndex !== index) {
					this.curMenuIndex = index
				}
			},


			/* 手机滑动切换视图 */
			changeSwipe(event) {
				let cuIndex = event.detail.current
				this.$refs.segmentbar.didSelectItem(cuIndex) //改变顶部
				
				//在页面切换的时候停止刷新 
				this.onEndRefreash()
				this.$refs.childView[cuIndex].willShowPage(cuIndex)  //如果不想在子页面请求数据， 在本页请求数据后再传入子页面也行  
			},
			
			
			/* 子页面主动请求刷新 */
			onStartRefreash(){
				uni.startPullDownRefresh()
			},
			
			/* 停止刷新 */
			onEndRefreash() {
				uni.stopPullDownRefresh()
			},
		}

	}
</script>


<style>
	
	.content {
		flex: 1;
		display: flex;
		width: 100%;
		background-color: green;
	}
</style>
