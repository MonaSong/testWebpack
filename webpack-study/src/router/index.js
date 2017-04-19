import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'hello'
    },
    {
      path: '/hello',
      component: resolve => require(['../components/home.vue'], resolve)
    }
  ]
})