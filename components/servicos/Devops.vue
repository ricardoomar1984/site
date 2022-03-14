<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2" v-text="title" />
      Melhore seus negócios com nossos serviços e soluções de consultoria em DevOps. Nossa empresa de consultoria em DevOps trabalha para quebrar a barreira entre Dev e Ops para a solução de problemas por meio de um esforço conjunto. E, ao mudar o foco para agilidade, ciclos de feedback mais apertados e iterações rápidas, ajudamos você a obter um processo que simplifica a entrega de software e maximiza sua velocidade.
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Devops',
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
