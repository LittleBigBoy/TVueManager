// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // 全局引用 css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang'
//import './permission'
import './icons'

Vue.use(Element,{
  size:'medium',//设置elementui默认字体大小
  i18n:(key,value)=>i18n.t(key, value)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
