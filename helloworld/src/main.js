import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  mounted() {
    alert('Hello World!')
  },
  render: h => h(App)
})
