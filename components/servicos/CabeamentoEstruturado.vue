<template>
  <v-row>
    <v-col md="4">
      <v-img :src="image" />
    </v-col>
    <v-col>
      <h2>Cabeamento Estruturado</h2>
      <p>Proident sunt pariatur enim mollit sunt ea ad. Adipisicing laboris sint anim sit Lorem ad mollit officia quis in aliquip et exercitation. Culpa enim tempor reprehenderit quis. Officia est et eu exercitation nostrud culpa ut aliquip amet eiusmod anim. Veniam fugiat labore laboris labore sunt. Occaecat irure ea anim voluptate qui nulla aute labore.</p>
      <p>Lorem dolor quis ullamco laboris officia non ut qui commodo laborum magna dolor. Occaecat tempor incididunt fugiat occaecat anim irure. Consectetur elit non duis cillum laborum sint deserunt et voluptate officia est irure commodo. Aliquip consectetur mollit labore dolor magna officia aute eu labore nisi. Esse officia adipisicing anim eu pariatur aliqua ipsum do consectetur sunt pariatur. Lorem officia aliqua fugiat consectetur consequat nulla.</p>
    </v-col>
    <v-col cols="12">
      <p>Mollit minim veniam consequat sunt qui officia. Officia Lorem veniam do cupidatat tempor anim nostrud. Dolor officia amet do non nulla quis Lorem voluptate anim. Culpa incididunt aliquip qui aliquip et. Magna aliquip fugiat commodo laborum nisi magna irure consectetur voluptate velit amet anim commodo.</p>
      <p>Laborum consequat Lorem laborum nulla sunt. Ea nisi do fugiat consectetur. Anim et adipisicing ad fugiat voluptate. Aliqua do in aliqua ut fugiat ad officia magna laboris adipisicing pariatur velit eiusmod ex. Do ad laborum sit enim ut quis cillum. Dolor do labore laborum do sit est sunt ut eu.</p>
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
  },
};
</script>
