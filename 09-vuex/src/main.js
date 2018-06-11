import Vue from 'vue'
import App from './App.vue'
import loja from './loja/raiz'

new Vue({
  el: '#app',
  store: loja,
  mounted() {
    setTimeout(() => {
      console.log('teste');
      this.$store.state.nome = 'Novo nome';
    }, 1500)

  },
  render: h => h(App)
})
