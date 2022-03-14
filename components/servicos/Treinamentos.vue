<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2" v-text="title" />
      Contacte-nos para mais informações sobre nossos treinamentos em vários setores da Tecnologia da Informação
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Treinamentos',
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
