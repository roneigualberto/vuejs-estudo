<template>
  <div>
    <h3>Perfil</h3>
    <p>Time: {{nome}}</p>
    <p>Estádio: {{estadio}}</p>
  </div>

</template>

<script>
export default {
  name: "lv-perfil",
  data() {
    return {
      nome: "Cruzeiro",
      estadio: "Mineirão"
    };
  }
};
</script>

<style>
</style>



