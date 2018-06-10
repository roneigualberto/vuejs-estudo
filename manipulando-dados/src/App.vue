<template>
  <div id="app">
   <LVTime></LVTime>
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
    },
    recolheResposta() {
      let valor = this.busca

      setTimeout(()=> {
        if (valor == this.busca) {
          this.resultado = 'Terminou de digitar...'
        }
      }, 500)
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
    nomeFormatado: {
      get: function () {
        console.log('executando computed')
        return this.nome.toUpperCase();
      },
      set: function(novoValor) {
        this.nome = novoValor.substring(0,3);
      }
    }
  },
  watch: {
    busca() {
      this.resultado = 'Aguardando o término da digitação...'
      this.recolheResposta()
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
