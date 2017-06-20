// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/plus'

import VueResource from 'vue-resource';
import Auth from './packages/auth/Auth.js'

import Navbar from '@/components/Navbar'
import New_classifieds_preview from '@/components/New_classifieds_preview'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)




Vue.use(Auth);
Vue.use(VueResource);
Vue.use(BootstrapVue);


Vue.config.productionTip = false;

Vue.component('navbar',Navbar);
Vue.component('icon', Icon);
Vue.component('new-classifieds-preview', New_classifieds_preview);


//Middleware/Navigation guard.
router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/Main'
        })
      } else next()
    } else if(to.matched.some(record => record.meta.forAuth)){
      if(!Vue.auth.isAuthenticated()){
        next({
          path: '/register'
        })
      } else next()
    }else next()
  }
)

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer '+Vue.auth.getToken())
  request.headers.set('Accept', 'application/json')
  next()
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
