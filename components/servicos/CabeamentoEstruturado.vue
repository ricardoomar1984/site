<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2" v-text="title" />
      Sistema de cabeamento estruturado ou cabeamento estruturado refere-se a todos os cabeamentos e componentes instalados de forma lógica e organizada. Ele é projetado para ser relativamente independente do tipo de equipamento que o utiliza.
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CabeamentoEstruturado',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
};
</script>
