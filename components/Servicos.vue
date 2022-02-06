<template>
  <v-sheet id="servicos" class="servicos py-16" dark>
    <v-lazy min-height="300" :options="{ threshold: 1.0 }">
      <v-container>
        <v-row align="center">
          <v-col>
            <div class="px-xl-16 mx-md-8">
              <transition appear name="fade">
                <h2 v-if="title" class="text-h2 mb-4" v-text="title" />
              </transition>
              <transition appear name="slide-top">
                <div>
                  <div class="grey--text text--lighten-2 text-h4 mb-4">
                    Suporte de TI Quando você mais precisa
                  </div>
                  <ul class="list-clean pl-0">
                    <li><v-icon small v-text="'mdi-check-bold'" /> Cabeamento estruturado</li>
                    <li><v-icon small v-text="'mdi-check-bold'" /> Wi-Fi como serviço. Wi-Fi gerenciado e Wi-Fi para eventos</li>
                    <li><v-icon small v-text="'mdi-check-bold'" /> Consultoria em Redes e segurança</li>
                    <li><v-icon small v-text="'mdi-check-bold'" /> Cloud Computing, SRE Site Reliability Engineering, DevOps</li>
                    <li><v-icon small v-text="'mdi-check-bold'" /> Treinamentos</li>
                  </ul>
                </div>
              </transition>
            </div>
          </v-col>
          <v-col cols="12" lg="7" class="text-right">
            <transition appear name="slide-left">
              <div class="px-xl-16 mx-md-8">
                <v-img src="/services.jpg" class="rounded-xl" />
              </div>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </v-sheet>
</template>

<script>
export default {
  name: 'Serviços',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
};
</script>

<style lang="scss">
  .list-clean {
    list-style: none;
  }
  .servicos {
    background: linear-gradient(130deg, #ad90c1 0%, rgb(3, 0, 84) 100%), linear-gradient(130deg, #09007b 0%, rgba(15, 0, 66, 0) 30%), linear-gradient(129.96deg, rgb(255, 47, 47) 10.43%, rgb(0, 4, 96) 92.78%), radial-gradient(100% 246.94% at 100% 0%, rgb(255, 255, 255) 0%, rgba(37, 0, 66, 0.8) 100%), linear-gradient(121.18deg, rgb(20, 0, 255) 0.45%, rgb(27, 0, 62) 100%), linear-gradient(154.03deg, rgb(206, 0, 0) 0%, rgb(255, 0, 61) 74.04%), linear-gradient(341.1deg, rgb(178, 91, 186) 7.52%, rgb(16, 0, 119) 77.98%), linear-gradient(222.34deg, rgb(169, 0, 0) 12.99%, rgb(0, 255, 224) 87.21%), linear-gradient(150.76deg, rgb(183, 213, 0) 15.35%, rgb(34, 0, 170) 89.57%);
    background-blend-mode: overlay, normal, overlay, color-burn, screen, overlay, difference, difference, normal;
  }
</style>
