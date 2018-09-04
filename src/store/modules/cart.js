const state = {
  title: '',
  footerList: [
    { title: '首页', route: '/home', icon: '&#xe641;' },
    { title: '分类', route: '/classify', icon: '&#xe669;' },
    { title:'购物车', route: '/shopping_cart', icon: '&#xe64f;'},
    { title: '我的', route: '/personage', icon: '&#xe645;' },
  ],
}

const actions = {
  setTitle({commit}, title) {
    commit('SET_TITLE', title)
  }
}

const mutations = {
  ['SET_TITLE'](state, title) {
    state.title = title;
  }
}
const getters = {
  title : (state) => state.title,
  footerList: (state) => state.footerList
}
export default {
  state,
  actions,
  mutations,
  getters
}
