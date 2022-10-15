import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView,
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    component: () => import('../components/MainPage.vue')
  },
  {
    path: '/study/binding',
    component: () => import('../components/study/BindingPage.vue')
  },
  {
    path: '/study/directive',
    component: () => import('../components/study/DirectivePage.vue')
  },
  {
    path: '/study/event',
    component: () => import('../components/study/EventPage.vue')
  },
  {
    path: '/*',
    redirect: '/main',
  }
]

const router = new VueRouter({
  routes
})

export default router
