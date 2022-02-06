<template>
  <v-sheet id="sobre" class="py-16">
    <v-lazy min-height="300" :options="{ threshold: 1.0 }">
      <v-container>
        <v-row align="center">
          <v-col cols="12" lg="7">
            <transition appear name="slide-right">
              <div class="px-xl-16 mx-md-8">
                <v-img src="/team.jpg" class="rounded-xl" />
              </div>
            </transition>
          </v-col>
          <v-col>
            <div class="px-xl-16 mx-md-8">
              <transition appear name="fade">
                <h2 v-if="title" class="text-h2 mb-4 primary--text" v-text="title" />
              </transition>
              <transition appear name="slide-top">
                <div>
                  <div class="primary--text text--darken-4 text-h4 mb-4">
                    Solução de problemas e criação valores por meio de expertise em tecnologia
                  </div>
                  <p>A <strong>MELIGA</strong> é uma consultoria disposta a ajudar a sua empresa na arquitetura implantação e suporte de ambientes de Infra Estrutura que demandariam horas de recurso senior. Com profissionais certificados AWS, nós arquitetamos, implantamos, executamos e otimizamos cargas de trabalho com as melhores práticas de Cloud Computing</p>
                </div>
              </transition>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </v-sheet>
</template>

<script>
export default {
  name: 'Sobre',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
};
</script>
