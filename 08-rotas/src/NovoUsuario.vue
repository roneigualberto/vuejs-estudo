<template>
  <div>
    <h1>Novo Usuário</h1>
    asdfasd
    <button @click="falhou">Falha</button>
    <button @click="beleza">Sucesso</button>
 </div>

</template>

<script>
export default {
  name: 'lv-novo-usuario',
  methods: {
    falhou() {
      this.$router.replace('/usuarios/erro')
    },
    beleza() {
      this.$router.replace('/usuarios/leonardo')
    }
  }
};
</script>
