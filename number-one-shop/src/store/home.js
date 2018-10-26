import Vue from 'vue'
// 引入vuex实现组件通信
import Vuex from 'vuex' //var Vuex = require('vuex')
Vue.use(Vuex)

// 公共仓库
export default new Vuex.Store({
	state: {
		isHeaderShow: true,
		isScrollShow: true,
		isGoodtypeShow: false,
		headerShowState2: false,
		footPage: 'Home'
	},
	mutations: {
		setChangeHeaderShow(state, data) {
			state.isHeaderShow = data;
		},
		setChangeScrollShow(state, data) {
			state.isScrollShow = data;
		},
		setChangeGoodtypeShow(state, data) {
			state.isGoodtypeShow = data;
		},
		setChangefootPage(state, data) {
			state.footPage = data;
		},
		setChangeheaderShowState2(state, data) {
			state.footPage = data;
		}
	},
	// 通过commit方法提交直接触发mutations
	actions: {
		setHeaderShow(context, data) {
			context.commit('setChangeHeaderShow', data);
		},
		setScrollShow(context, data) {
			context.commit('setChangeScrollShow', data);
		},
		setGoodtypeShow(context, data) {
			context.commit('setChangeGoodtypeShow', data);
		},
		setfootPage(context, data) {
			context.commit('setChangefootPage', data);
		},
		setheaderShowState2(context, data) {
			context.commit('setChangefootPage', data);
		}
	},
	// 只有在store中定义了getters方法，子组件才能配合computed计算属性动态获取state值
	getters: {
		getHeaderShow(state) {
			//处理数据
			return state.isHeaderShow
		},
		getScrollShow(state) {
			//处理数据
			return state.isScrollShow
		},
		getGoodtypeShow(state) {
			//处理数据
			return state.isGoodtypeShow
		},
		getfootPage(state) {
			//处理数据
			return state.footPage
		},
		getheaderShowState2(state) {
			//处理数据
			return state.footPage
		}
		
	}
})


