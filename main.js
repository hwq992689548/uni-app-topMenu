import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.screenWidth = function(){
	const res = uni.getSystemInfoSync()
	return res.screenWidth
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
