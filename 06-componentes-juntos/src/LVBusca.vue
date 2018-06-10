<template>
    <div>
      <h3>Buscando rivais </h3>
      <label>Time: </label>
      <input type="text" v-model="busca">
      <p>Rival: {{rival(busca)}} </p>
    </div>
</template>

<script>
export default {
  name: "lv-busca",
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    rival(time) {
      switch (time.toLowerCase()) {
        case "corinthians":
          return "palmeiras";
          break;
        case "santos":
          return "são paulo";
          break;
        case "flamengo":
          return "vasco";
          break;
        case "cruzeiro":
          return "em minas é marmelada";
          break;
        default:
          return "não encontrado";
      }
    }
  }
};
</script>

<style>
</style>
