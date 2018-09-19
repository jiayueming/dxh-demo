// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import DxhUI from 'xf-ui'
import 'xf-ui/theme-default/lib/index.css'
Vue.use(DxhUI)
fastclick.attach(document.body)

Vue.component('blog-post', {
  render: function (createElement) {
    var header = this.$slots.header
    var body   = this.$slots.default
    var footer = this.$slots.footer
    var vNode = createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
    console.log(vNode)
    return vNode
  }
})

let obj = {
  a: 2
}
// Object.freeze(obj)
obj.a = 3
console.log(obj.a)

//测试环境还是正式环境　dev ：测试环境  build : 正式环境
const debug = process.env.NODE_ENV !== 'production';
global.hostUrl = debug ? '/api' : '/liquidatorplatformadmin'; // 本地调试接口的地址

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

Vue.use(VueLazyload, {
	loading: require('common/image/loading.gif')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
vm.$mount("#app")
