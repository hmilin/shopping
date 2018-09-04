import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Home from '../components/Home'
import Classify from '../components/Classify'
import ProductPage from '../components/ProductPage'
import Personage from '../components/Personage'
import SearchResult from '../components/SearchResult'
import Login from '../components/Login'
import ShoppingCart from '../components/ShoppingCart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'classify',
          component: Classify
        },
        {
          path: 'shopping_cart',
          component: ShoppingCart
        },
        {
          path: 'personage',
          component: Personage
        }
      ]
    },
    {
      name: 'product-page',
      path: '/product-page',
      component: ProductPage
    },
    {
      name: 'search-result',
      path: '/search-result',
      component: SearchResult
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
