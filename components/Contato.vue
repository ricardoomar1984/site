<template>
  <v-sheet id="contato" class="pt-16 mb-n2">
    <v-lazy min-height="900" :options="{ threshold: 0.2 }">
      <div>
        <v-container>
          <v-row align="center">
            <v-col class="text-center pb-16">
              <transition appear name="slide-bottom">
                <h2 v-if="title" class="text-h4 text-md-h2 mb-4 primary--text" v-text="title" />
              </transition>
              <transition appear name="fade">
                <div>
                  <div class="primary--text text--darken-4 text-h6 text-md-h4 mb-4">
                    Pronto para discutir o seu projeto?
                  </div>
                  <p class="mb-8">
                    Entre em contato agora mesmo
                  </p>
                </div>
              </transition>
              <v-row>
                <transition appear name="slide-right">
                  <v-col cols="12" sm="4" class="text-center">
                    <v-avatar color="secondary" size="48" class="mb-2">
                      <v-icon color="white" v-text="'mdi-cellphone'" />
                    </v-avatar>
                    <h2 class="text-h6 text-md-h5">
                      Telefone
                    </h2>
                    <a href="tel:+5511949013963" class="text-decoration-none" itemprop="telephone">
                      +55 (11) 94901-3963
                    </a>
                  </v-col>
                </transition>
                <transition appear name="fade">
                  <v-col cols="12" sm="4" class="text-center">
                    <v-avatar color="primary darken-2" size="48" class="mb-2">
                      <v-icon color="white" v-text="'mdi-email'" />
                    </v-avatar>
                    <h2 class="text-h6 text-md-h5">
                      Email
                    </h2>
                    <a href="mailto:meliga@gmail.com" class="text-decoration-none" itemprop="email">
                      suporte@meliga.com.br
                    </a>
                  </v-col>
                </transition>
                <transition appear name="slide-left">
                  <v-col cols="12" sm="4" class="text-center">
                    <v-avatar color="accent darken-2" size="48" class="mb-2">
                      <v-icon color="white" v-text="'mdi-forum'" />
                    </v-avatar>
                    <h2 class="text-h6 text-md-h5">
                      Fique Conectado
                    </h2>
                    <v-btn
                      v-for="(item, index) in socialItems"
                      :key="index"
                      :title="item.title"
                      :color="item.color"
                      :href="item.url"
                      fab dark small depressed
                      class="mr-1"
                      target="_blank"
                    >
                      <v-icon v-text="item.icon" />
                    </v-btn>
                  </v-col>
                </transition>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <transition appear name="slide-top">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.400377532649!2d-46.58963937803279!3d-23.55405969371421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eb44aa9c8af%3A0xb3a5a413ad461c22!2sR.%20Sapucaia%2C%20974%20-%20%C3%81gua%20Rasa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003170-050%2C%20Brazil!5e0!3m2!1sen!2sau!4v1643171089744!5m2!1sen!2sau"
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          />
        </transition>
      </div>
    </v-lazy>
  </v-sheet>
</template>

<script>
export default {
  name: 'Contato',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      socialItems: [
        // {
        //   color: 'pink darken-2',
        //   icon: 'mdi-instagram',
        //   title: 'Instagram',
        //   url: 'https://instagram.com/meliga',
        // },
        // {
        //   color: 'light-blue lighten-1',
        //   icon: 'mdi-twitter',
        //   title: 'Twitter',
        //   url: 'https://twiiter.com/meliga',
        // },
        // {
        //   color: 'blue darken-2',
        //   icon: 'mdi-linkedin',
        //   title: 'Linkedin',
        //   url: 'https://linkedin.com/meliga',
        // },
        {
          color: 'green lighten-1',
          icon: 'mdi-whatsapp',
          title: 'Whatsapp',
          url: 'https://wa.me/5511949013963',
        },
      ],
    };
  },
};
</script>
