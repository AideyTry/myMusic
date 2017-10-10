import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import state from './state.js'
import mutations from './mutations.js'
// 为了修改state的时候方便的去看日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// 检测规范
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})