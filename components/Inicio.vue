<template>
  <v-sheet id="inicio" color="primary" class="hero mt-n16 pt-16 pb-2 pb-md-8" dark>
    <v-container>
      <v-responsive :aspect-ratio="3/1" content-class="d-flex flex-column">
        <v-row v-intersect="onIntersect" justify="center" align="center">
          <v-col cols="12" md="8" class="text-center">
            <transition appear name="fade">
              <h1 class="text-h4 text-md-h2 mb-4 mb-md-16">
                Otimize sua Infra Estrutura
              </h1>
            </transition>
            <transition appear name="slide-top">
              <div class="text-md-h4">
                Explore nossos serviços e soluções de tecnologia para sua empresa
              </div>
            </transition>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn icon x-large :to="{ path: '/', hash: '#sobre'}" @click="$vuetify.goTo('#sobre', {duration: 0, easing: 'easeOutQuad'})">
            <v-icon v-text="'mdi-chevron-double-down'" />
          </v-btn>
        </div>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'Inicio',
  methods: {
    onIntersect (entries, observer) {
      this.$nuxt.$emit('isintersecting', entries[0].isIntersecting);
    },
  },
};
</script>

<style lang="scss">
  .hero {
    background: url('/hero.jpg') center center no-repeat;
    background-size: cover;
    position: relative;
    > .container {
      position: relative;
      z-index: 2;
    }
    &:before {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0,0,0,0.5);
    }
  }
</style>
