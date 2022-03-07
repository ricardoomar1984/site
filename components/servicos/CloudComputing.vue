<template>
  <v-row>
    <v-col md="4">
      <v-img :src="image" />
    </v-col>
    <v-col>
      <h2 v-text="title" />
    </v-col>
    <v-col cols="12">
      <!-- text -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CloudComputing',
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
