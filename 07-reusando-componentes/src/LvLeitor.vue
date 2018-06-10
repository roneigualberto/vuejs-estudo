
<template>
  <h4>Lendo {{'artigo X' | maiusculo}}</h4>
</template>

<script>
 import postagem from './postagem';

  export default {
    name: 'lv-leitor',
    mixins: [postagem]
  }
</script>

