import 'babel-polyfill'
import Vue from 'vue'
import App from './app.vue'
import router from './router'

new Vue({
  router,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
