<template>
  <div id="app">
    <h4>Lista um</h4>

    <lv-lista :lista="item in ['feijão','arroz', 'carne']"></lv-lista>

    <lv-lista :lista="item in ['arroz','carne', 'feijão']"></lv-lista>

    <br>

    <h4>Lista dois</h4>

    <lv-lista :lista="['leite','biscoito', 'bombom','aveia']"></lv-lista>

    <lv-lista :lista="['aveia','biscoito', 'bombom', 'leite']"></lv-lista>



  </div>
</template>

<script>
import LvLista from "./LvLista.vue";

export default {
  name: "app",
  components: { LvLista }
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
