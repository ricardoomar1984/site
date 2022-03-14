<template>
  <v-sheet id="clientes" class="clientes py-16" dark>
    <div class="d-none d-md-block py-md-16" />
    <v-lazy min-height="300" :options="{ threshold: 1.0 }">
      <v-container>
        <v-row align="center">
          <v-col>
            <div class="px-xl-16 mx-md-8">
              <transition appear name="fade">
                <h2 v-if="title" class="text-h4 text-md-h2 mb-4" v-text="title" />
              </transition>
              <transition appear name="slide-top">
                <div>
                  <div class="text-h6 text-md-h4 grey--text text--lighten-2 mb-4">
                    Alguns de nossos clientes
                  </div>
                  <p class="grey--text text--lighten-2">
                    Suporte de alto nível para todos os nossos clientes, independentemente de seu tamanho e setor, é nossa prioridade. Aqui estão algumas Empresas que confiam na <strong>MELIGA</strong> para serviços de Infra-Estrutura e segurança.
                  </p>
                </div>
              </transition>
            </div>
          </v-col>
          <v-col cols="12" lg="7">
            <div class="px-xl-16 mx-md-8">
              <v-row>
                <v-col v-for="(item, key) in clients" :key="key" cols="6" md="4">
                  <v-card :color="item.color" class="pa-4" :href="item.href" target="_blank">
                    <v-img :src="item.image" :aspect-ratio="16/4" :alt="item.title" contain />
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
    <div class="d-none d-md-block py-md-16" />
  </v-sheet>
</template>

<script>
export default {
  name: 'Clientes',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      clients: [
        { title: 'Oktor', href: 'https://www.oktor.com.br/', image: '/clientes/oktor.png', color: 'white'},
        { title: 'Alinfo', href: 'http://alinfo.com.br/', image: '/clientes/alinfo.png', color: 'grey darken-4'},
        { title: 'Approuch', href: 'https://approachtec.com.br/', image: '/clientes/approach.png', color: 'white'},
        { title: 'Webjump', href: 'https://webjump.com.br/', image: '/clientes/webjump.png', color: 'white'},
        { title: 'Pede Pronto', href: 'https://www.pedepronto.com.br/', image: '/clientes/pede-pronto.png', color: 'purple darken-3'},
        { title: 'Intelipost', href: 'https://www.intelipost.com.br/', image: '/clientes/intelipost.png', color: 'white'},
        { title: 'Taking', href: 'https://www.taking.com.br/', image: '/clientes/taking.png', color: 'white'},
        { title: 'Fcamara', href: 'https://www.fcamara.com.br/', image: '/clientes/fcamara.png', color: 'white'},
        { title: 'Broker Tech', href: 'https://www.brokertech.com.br/', image: '/clientes/broker-tech.png', color: 'white'},
      ]
    };
  },
};
</script>

<style lang="scss">
  .clientes {
    background: linear-gradient(301.28deg, #630000 0%, #000000 100%), linear-gradient(121.28deg, #207A00 0%, #950000 100%), linear-gradient(238.72deg, #FFB800 0%, #000000 100%), linear-gradient(238.72deg, #00D1FF 0%, #A80000 100%), linear-gradient(58.72deg, #B80000 0%, #1B00C2 100%), linear-gradient(125.95deg, #00E0FF 10.95%, #87009D 100%), linear-gradient(263.7deg, #B60000 3.43%, #B100A0 96.57%), linear-gradient(320.54deg, #800000 0%, #00C2FF 72.37%), linear-gradient(130.22deg, #8FA600 18.02%, #5A31FF 100%);
    background-blend-mode: overlay, color-dodge, difference, lighten, difference, color-dodge, difference, difference, normal;
  }
</style>
