import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Main from '@/components/Main'
import Classified from '@/components/Classified'
import New_classifieds from '@/components/New_classifieds'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        forVisitors: true
      },
      component: Register
    },
    {
      path: '/main',
      name: 'Main',
      meta: {
        forAuth: true
      },
      component: Main
    },
    {
      path: '/classifieds/:id',
      name: 'Classifieds',
      meta: {
        forAuth: true
      },
      component: Classified
    },
    {
      path: '/new_classifieds/',
      name: 'New_classifieds',
      meta: {
        forAuth: true
      },
      component: New_classifieds
    },

  ]
})
