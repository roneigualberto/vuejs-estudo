
<template>
  <h4>Comentários de {{'artigo X' | maiusculo}}</h4>
</template>

<script>
import postagem from "./postagem";

export default {
  name: "lv-comentarios",
  mixins: [postagem]
};
</script>

