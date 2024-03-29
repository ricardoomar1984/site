<template>
  <v-sheet id="implementacao" class="py-16">
    <div class="d-none d-md-block py-md-16" />
    <v-lazy min-height="300" :options="{ threshold: 1.0 }">
      <div>
        <v-container>
          <v-row align="center">
            <v-col cols="12" lg="7">
              <div class="px-xl-16 mx-md-8">
                <v-row>
                  <v-col v-for="(item, key) in services" :key="key" cols="6" md="4">
                    <v-card @click="openService(item.id, item.title, item.image)">
                      <v-img :src="item.image" :aspect-ratio="16/9" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.9)" class="white--text align-end">
                        <div class="title text-center pa-1" v-text="item.title" />
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col>
              <div class="px-xl-16 mx-md-8">
                <transition appear name="fade">
                  <h2 v-if="title" class="text-h4 text-md-h2 mb-4 primary--text" v-text="title" />
                </transition>
                <transition appear name="slide-top">
                  <div>
                    <div class="primary--text text--darken-4 text-h6 text-md-h4 mb-4">
                      Conheça nossos serviços realizados
                    </div>
                    <p>Estamos extremamente orgulhosos do nosso trabalho orientado a resultados e focado no cliente. Seja uma implementação simples ou uma solução corporativa sofisticada, nosso trabalho se destaca em engajamento e eficácia</p>
                  </div>
                </transition>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card color="grey lighten-4">
            <v-toolbar color="primary darken-2" dark>
              <v-btn icon @click="dialog = false">
                <v-icon v-text="'mdi-arrow-left'" />
              </v-btn>
              <v-toolbar-title v-text="servicesTitle" />
            </v-toolbar>
            <v-container class="py-16 white">
              <v-row justify="center">
                <v-col md="8">
                  <component :is="servicesId" :image="servicesImage" :title="servicesTitle" />
                  <v-divider class="my-8" />
                  <div class="text-center">
                    <v-btn color="primary darken-2" large @click="dialog = false">
                      <v-icon left v-text="'mdi-arrow-left'" />
                      Voltar
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
    </v-lazy>
    <div class="d-none d-md-block py-md-16" />
  </v-sheet>
</template>

<script>
import cabeamentoEstruturado from './servicos/CabeamentoEstruturado';
import wiFi from './servicos/WiFi';
import redesSeguranca from './servicos/RedesSeguranca';
import cloudComputing from './servicos/CloudComputing';
import devops from './servicos/Devops';
import treinamentos from './servicos/Treinamentos';

export default {
  name: 'Implementacao',
  components: { cabeamentoEstruturado, wiFi, redesSeguranca, cloudComputing, devops, treinamentos },
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      services: [
        { id: 'cabeamento-estruturado', title: 'Cabeamento estruturado', image: '/servicos/cabeamento-estruturado.jpg'},
        { id: 'wi-fi', title: 'Wi-Fi', image: '/servicos/wifi.jpg'},
        { id: 'redes-seguranca', title: 'Consultoria em Redes e segurança', image: '/servicos/redes-e-seguranca.jpg'},
        { id: 'cloud-computing', title: 'Cloud Computing', image: '/servicos/cloud-computing.jpg'},
        { id: 'devops', title: 'DevOps', image: '/servicos/devops.jpg'},
        { id: 'treinamentos', title: 'Treinamentos', image: '/servicos/treinamentos.jpg'},
      ],
      servicesId: '',
      servicesTitle: '',
      servicesImage: '',
      dialog: false,
    };
  },
  methods: {
    openService(id, title, image) {
      this.servicesId = id;
      this.servicesTitle = title;
      this.servicesImage = image;
      this.dialog = true;
    },
  },
};
</script>
