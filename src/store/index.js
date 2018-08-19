import Vue from 'vue'
import Vuex from 'vuex'
/*import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'*/
import cart from './modules/cart'
Vue.use(Vuex);


export default new Vuex.Store({
  modules:{
    cart
  }
})
