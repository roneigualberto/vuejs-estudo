import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: (createElement) => {
      return createElement('header',
               {attrs: {id: 'elemento'}},
              [
                createElement('h1','Título do post'),
                createElement('p','Conteudo do post')
            ]);
  }
})
