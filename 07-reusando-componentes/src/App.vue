<template>
  <div id="app">
    <h4>Lista um</h4>

    <lv-lista :lista="item in ['feijão','arroz', 'carne']"></lv-lista>

    <lv-lista :lista="item in ['arroz','carne', 'feijão']"></lv-lista>

    <br>

    <h4>Lista dois</h4>

    <lv-lista :lista="['leite','biscoito', 'bombom','aveia']"></lv-lista>

    <lv-lista :lista="['aveia','biscoito', 'bombom', 'leite']"></lv-lista>

    <lv-cartao titulo="Preço">
      Aqui você encontra preços <strong>baixos</strong>

      <div slot="rodape">
          Meu  conteúdo do rodapé
      </div>

    </lv-cartao>

    <lv-cartao titulo="Qualidade">

      Temos os produtos com mais <strong>qualidade</strong> no mercado

    </lv-cartao>

    <lv-leitor></lv-leitor>
    <lv-comentarios></lv-comentarios>

    <lv-usuario nome="Filomena" @novaMsg="escrever"></lv-usuario>
    <lv-usuario nome="Amarildo" @novaMsg="escrever"></lv-usuario>


      <br>
      <div v-html="chat"></div>

  </div>
</template>

<script>
import LvLista from "./LvLista.vue";
import LvCartao from "./LvCartao.vue";
import LvLeitor from "./LvLeitor.vue";
import LvComentarios from "./LvComentarios.vue";
import LvUsuario from './LvUsuario.vue';

export default {
  name: "app",
  data: function() {
    return {
      chat: ''
    }
  },
  components: { LvLista, LvCartao, LvLeitor, LvComentarios, LvUsuario },
  methods: {
    escrever(mensagem) {
      this.chat = mensagem + '<hr>' + this.chat;
    }
  }
}

</script>

<style>
li {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  float: left;
}
</style>
