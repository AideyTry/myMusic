import Vue from 'vue'
import App from './App'
import router from './router'
// import fastclick from 'fastclick'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
// 解决移动端点击的300ms延时问题
// fastclick.attach(document.body)
// Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('common/image/loading.gif')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
