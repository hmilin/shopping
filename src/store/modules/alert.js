const state = {
  alertState: false,
  alertContent: ''
};

const actions = {
  setAlert({commit}, alertState) {
    commit('SET_ALERT', alertState);
  },
  setContent({commit}, alertContent) {
    commit('SET_CONTENT', alertContent)
  }
};

const mutations = {
  ['SET_ALERT'](state, alertState) {
    state.alertState = alertState
  },
  ['SET_CONTENT'](state, alertContent) {
    state.alertContent = alertContent
  }
};

const getters = {
  alertState: (state) => state.alertState,
  alertContent: (state) => state.alertContent
}
export default {
  state,
  actions,
  mutations,
  getters
}
