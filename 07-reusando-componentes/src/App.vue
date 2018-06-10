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



  </div>
</template>

<script>
import LvLista from "./LvLista.vue";
import LvCartao from "./LvCartao.vue";

export default {
  name: "app",
  components: { LvLista, LvCartao }
};
</script>

<style>
li {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  float: left;
}
</style>
