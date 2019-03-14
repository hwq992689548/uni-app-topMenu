# uni-app-topMenu

#自己写的顶部菜单切换 不喜勿喷

 mh-segmentbar.vue为顶部菜单
 
 #页面切换用了<swiper>
 
 index页引用时：

import mh_segmentbar from "../../components/mh-segmentbar/mh-segmentbar.vue" //顶部菜单
import swiperContent from "../swiperContent/swiperContent.vue"   //页面内容

#
components: {
    mh_segmentbar,
    swiperContent
},


####  选中顶部菜单时 切换视图 #### 
didSelectTopMenuItem(index){
    this.curMenuIndex = index
    console.log(index)
},

#### 滑动swiper时调用
changeSwipe(event){
    let cuIndex = event.detail.current
    this.curMenuIndex = cuIndex
    this.$refs.segmentbar.didSelectItem(cuIndex)
},



 
