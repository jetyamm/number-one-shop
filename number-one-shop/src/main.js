// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)


// 引入其他的路由
import router from './router/index.js'
// 引入vuex仓库实现组件通信
import store from './store/home.js'

import './lib/cityChoose/css/cityselect.css'

import './lib/bootstrap-3.3.7-dist/css/bootstrap.css'

//import common from'./html/js/common.js'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box')