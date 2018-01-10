import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// modules
import counter from './counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		counter
	},
	plugins: [createPersistedState()]
})
