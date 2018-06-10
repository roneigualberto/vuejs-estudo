<template>
  <div>
    <small>{{nome}}:</small>
    <input type="text" v-model="mensagem">
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script>
  export default {
    name: 'lv-usuario',
    data() {
      return {
        mensagem: ''
      }
    },
    props: ['nome'],
    methods: {
      enviar() {
        this.$emit('novaMsg', this.nome + ': ' + this.mensagem);
        this.mensagem = '';
      }
    }
  }
</script>
