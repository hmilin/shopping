const state = {
  title: '',
  footerList: [
    { title: '首页', route: '/home', icon: '&#xe641;' },
    { title: '分类', route: '/classify', icon: '&#xe669;' },
    { title:'购物车', route: '/shopping_cart', icon: '&#xe64f;'},
    { title: '我的', route: '/personage', icon: '&#xe645;' },
  ],
  cartList: [],
  infor: {}
}

const actions = {
  setTitle({commit}, title) {
    commit('SET_TITLE', title)
  },
  setCart({commit}, cartList) {
    commit('SET_CART', cartList)
  },
  setInfor({commit}, infor) {
    commit('SET_INFOR', infor)
  }
}

const mutations = {
  ['SET_TITLE'](state, title) {
    state.title = title;
  },
  ['SET_CART'](state, cartList) {
    state.cartList = cartList;
  },
  ['SET_INFOR'](state, infor) {
    state.infor = infor;
  }
}
const getters = {
  title : (state) => state.title,
  footerList: (state) => state.footerList,
  cartList: (state) => state.cartList,
  infor: (state) => state.infor
}
export default {
  state,
  actions,
  mutations,
  getters
}
