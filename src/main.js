import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from './store/index'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueLazyload);
Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store: Store,
  render: h => h(App)
})
