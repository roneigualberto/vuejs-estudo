import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Inicial from './Inicial.vue'
import Usuarios from './Usuarios.vue'
import NovoUsuario from './NovoUsuario.vue'
import Notificacao from './Notificacao.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Inicial },
    {
      path: '/usuarios',
      component: Usuarios,
      children: [
        { path: 'novo', component: NovoUsuario },
        { path: ':msg', component: Notificacao, props: true }
      ]
    },
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
