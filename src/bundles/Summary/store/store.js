import Vuex from 'vuex'
import Vue from 'vue'
import FireBase from './plugins/FireBase.js'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      FireBase
    }
  })