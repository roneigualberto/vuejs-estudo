<template>
  <div id="app">
    <p>{{total}}</p>

  <button @click="calcula('-')">-</button>
  <button @click="calcula('+')">+</button>

  <p> Nome Iniciado: {{nome}} </p>
  <p> Nome Filtrado: {{nome  | formataNome}} </p>

  <p>Nome Computado: {{nomeFormatado}}</p>
  <label>Input a computar</label>
  <input v-model="nome" type="text">

  </div>
</template>

<script>
export default {
  name: 'lv-contador',
  data () {
    return {
      total: 10,
      nome: "ronei macedo"
    }
  },
  methods: {
    calcula(sinal) {
      this.total = (sinal == '-') ? this.total -1 : this.total + 1;
    }
  },
  filters: {
    formataNome(valor) {
      console.log('executando filter');

      valor = valor.toLowerCase();
      let corta = valor.split(' ');
      let resultado = '';

      for(let nome of corta)
          resultado  += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '

      return resultado;
    }
  },
  computed: {
    nomeFormatado() {
      console.log('executando computed')
      return this.nome.toUpperCase();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
