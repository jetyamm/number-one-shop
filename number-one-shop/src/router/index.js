import Vue from 'vue'
import Router from 'vue-router'
import home from '../containers/Home'
import index from '../containers/Index'
import login from '../containers/Login'
import classify from '../containers/Classify'
import oneShop from '../containers/OneShop'
import shoppingCar from '../containers/ShoppingCar'
import my from '../containers/my'
import register from '../containers/Register'
import rgSecondStep from '../containers/Register_secondStep'
import gooddetail from '../containers/goodDetail'

import $ from 'jquery';
window.$ = $;
window.jQuery = $;
// 引入ui插件
import Mint from 'mint-ui';
Vue.use(Mint);

//import VueAxios from 'vue-axios'
import Axios from 'axios'
//Vue.use(Axios)
Vue.prototype.Axios = Axios;
//Axios.defaults.baseURL = 'api'
Vue.use(Router)
// 引入rem文件
import computed_rem from './rem.js';
computed_rem();


const routes = [{
	path: '/',
	component: home
}, {
	path: '/index',
	component: index
}, {
	path: '/login',
	component: login
}, {
	path: '/classify',
	component: classify
}, {
	path: '/oneShop',
	component: oneShop
}, {
	path: '/shoppingCar',
	component: shoppingCar
}, {
	path: '/my',
	component: my
}, {
	path: '/register',
	component: register
},{
	path: '/rgSecondStep',
	component: rgSecondStep
},{
	path: '/gooddetail',
	component: gooddetail
}]


export default new Router({
  routes,
  Mint
})