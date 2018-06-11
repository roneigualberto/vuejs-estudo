import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Inicial from './Inicial.vue'
import Usuarios from './Usuarios.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Inicial },
    { path: '/usuarios', component: Usuarios },
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
