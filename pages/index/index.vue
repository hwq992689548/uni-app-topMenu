<template>
	<view class="content">
		<view style="overflow: inherit; background-color: #333333; color: black; width: 100%;  position: fixed; z-index: 999;">
			<!-- #ifdef APP-PLUS -->
			<view style="width: 100%; height: 40upx; background-color: red;"></view>
			<!-- #endif --> 
			<mh_segmentbar  :curIndex=curMenuIndex :menuData = "topMenuDatas" style="width: 100%;overflow: hidden;" ref="segmentbar" @didSelectTopMenuItem="didSelectTopMenuItem" />
		</view>
	
		
		<view style="width: 100%; flex: 1;  position: absolute; top: 100upx; bottom: 0upx; z-index: 3;"> 
			<swiper style="width: 100%; height: 100%; background-color: #F5F5F5;" duration="300" :current="curMenuIndex" @change="changeSwipe">
				<swiper-item  v-for="(menuItem) in topMenuDatas" v-bind:key = "menuItem.id">					
					<view>
						<swiperContent/>
					</view>					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import mh_segmentbar from "../../components/mh_segmentbar.vue"
	import swiperContent from "../swiperContent/swiperContent.vue"
	// let topMenuResponse = "{\"code\":200,\"name\":\"OK\",\"message\":\"success\",\"data\":{\"fixTags\":[{\"fixid\":5,\"name\":\"推荐\"},{\"fixid\":3,\"name\":\"专题\"},{\"fixid\":1,\"name\":\"最新\"},{\"fixid\":2,\"name\":\"最热\"},{\"fixid\":6,\"name\":\"女优\"}],\"mytags\":[{\"id\":10055,\"name\":\"野外\"},{\"id\":10058,\"name\":\"厨房\"},{\"id\":10302,\"name\":\"酒店\"},{\"id\":10307,\"name\":\"泳池\"},{\"id\":10342,\"name\":\"中国大陆\"},{\"id\":10070,\"name\":\"女学生\"},{\"id\":10340,\"name\":\"无码\"}],\"orther\":[{\"id\":10293,\"name\":\"人妻\\/少妇\"},{\"id\":10187,\"name\":\"乳交\"},{\"id\":10291,\"name\":\"长腿\"},{\"id\":10278,\"name\":\"爆射\"},{\"id\":10170,\"name\":\"舔阴\"},{\"id\":10169,\"name\":\"吞精\"},{\"id\":10163,\"name\":\"口交\"},{\"id\":10161,\"name\":\"多P\"},{\"id\":10160,\"name\":\"69\"},{\"id\":10343,\"name\":\"中文字幕\"},{\"id\":10350,\"name\":\"欧美\"}]}}"
	export default {
		components: {
			mh_segmentbar,
			swiperContent
		},
		onLoad() {

		},
		
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},3000)
		},
		data() {
			return {
				topMenuDatas:[{"id":5,"name":"推荐"},{"id":3,"name":"专题"},{"id":1,"name":"最新"},{"id":2,"name":"最热"},{"id":10,"name":"最扣扣的"},{"id":11,"name":"最皮的"},{"id":12,"name":"最不要脸的"},{"id":13,"name":"最牛"},{"id":14,"name":"最经典"}],
				curMenuIndex: 0,

			}
		},
		
		methods: {
			/* 选中顶部菜单时 切换视图 */
			didSelectTopMenuItem(index){
				this.curMenuIndex = index
				console.log(index)
			},
			
			changeSwipe(event){
				//event.detail = {current: current, source: source}
				let cuIndex = event.detail.current
				this.curMenuIndex = cuIndex
				this.$refs.segmentbar.didSelectItem(cuIndex)
			},
			
		 	
						
			didSelectICelltem(item){ 
				uni.navigateTo({url:"../mhplayer/mhplayer"})},
			},
			
			
			
			
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
