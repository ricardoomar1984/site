<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed right :app="drawer">
      <v-list>
        <v-list-item
          v-for="(item, key) in items"
          :key="`item-mobile-${key}`"
          :to="{ path: '/', hash:`#${item.id}`}"
          active-class="accent--text text--darken-2"
          nuxt exact
        >
          <v-list-item-icon>
            <v-icon :color="item.colorAlt">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-4" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :color="isIntersecting ? 'transparent' : 'white'" :elevation="isIntersecting ? 0 : 4" fixed app>
      <v-toolbar-title class="white--text pt-2">
        <!-- eslint-disable-next-line vue/max-attributes-per-line --><!-- eslint-disable-next-line vue/html-closing-bracket-spacing --><!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewbox="0 0 172 70" fill="none" :class="['logo', {'logo--alt': isIntersecting}]"><path fill="#000" d="M32.4479 20.1042V55h-4.6875V29.7396L16.9792 41.25h-1.25L4.6875 29.7396V55H0V20.1042h1.4583l14.8959 15.9896 14.6354-15.9896h1.4583Zm30.2188 10c3.736 2.3442 5.3125 6.7326 5.3125 10.9896v2.552h-20c.6476 4.5338 4.4112 7.9688 9.0625 7.9688 3.6327 0 6.9085-2.0398 9.375-4.5834l-.0521 4.6355c-2.141 2.5997-5.9822 4.1145-9.3229 4.1145-7.4699 0-13.5938-6.0928-13.5938-13.6458 0-4.6415 2.1306-9.2155 6.0417-11.8229 3.7501-2.4546 9.3509-2.6091 13.1771-.2083ZM56 32.6042c-4.222 0-7.2409 3.409-7.9167 7.3958h15.6771c-.4145-4.0625-3.4906-7.3958-7.7604-7.3958ZM81.9479 17.5V55h-4.2708V17.5h4.2708Zm18.3441 11.4583V55h-4.2712V32.9687h-4.1146v-4.0104h8.3858Zm31.156 3.4896v-3.4896h4.271v25.5209c0 8.0357-5.791 13.8021-13.698 13.8021-3.553 0-6.342-1.3563-9.167-3.4375v-4.5834c2.796 2.0505 5.594 3.8542 9.167 3.8542 4.7 0 9.427-2.8975 9.427-8.0729v-5.4688c-4.883 7.5127-15.432 6.1381-19.479-1.1979-2.276-4.2577-2.207-10.1552 0-14.4271 3.855-7.2294 14.079-8.5753 19.479-2.5Zm-15.625 5.2084c-1.371 2.8787-1.434 6.455 0 9.3229 4.089 8.1779 15.792 3.8237 15.625-5.0521l-.052-5c-4.091-5.1471-12.266-6.0433-15.573.7292Zm50.687-5.2084v-3.4896h4.271V55h-4.271v-4.4271c-4.831 7.4326-15.316 6.348-19.479-1.1979-2.275-4.2577-2.207-10.1552 0-14.4271 3.876-7.2678 13.987-8.6793 19.479-2.5Zm-15.625 5.2084c-1.383 2.9046-1.414 6.476 0 9.3749 4.427 8.8535 15.782 3.1937 15.625-5.1041l-.052-5c-4.209-5.2959-12.268-6.0377-15.573.7292Z"/><path fill="url(#a)" d="M112.976 7.7423c-8.737-8.1019-22.3251-8.099-31.0584 0-.3284.3046-.3348.8202-.0172 1.1362l1.6884 1.6795c.3028.3016.79.308 1.1046.0188 7.1957-6.6093 18.3096-6.6108 25.5066 0 .315.2892.802.2823 1.105-.0188l1.688-1.6795c.318-.316.311-.8316-.017-1.1362Zm-15.5293 9.7458c-1.7432 0-3.156 1.4165-3.156 3.1643 0 1.7477 1.4128 3.1642 3.156 3.1642s3.1563-1.4165 3.1563-3.1642c0-1.7478-1.4131-3.1643-3.1563-3.1643Zm9.9943-4.1327c-5.684-5.0396-14.3112-5.0341-19.9885 0-.3403.3015-.3511.8251-.0281 1.1445l1.6983 1.6805c.2959.2927.7722.3125 1.0873.0396 4.1398-3.588 10.343-3.5801 14.473 0 .315.2729.791.2536 1.087-.0396l1.698-1.6805c.324-.3194.313-.8434-.027-1.1445Z"/><defs><linearGradient id="a" x1="97.4467" x2="97.4467" y1="1.667" y2="23.8166" gradientUnits="userSpaceOnUse"><stop offset=".1733" stop-color="#5C04C0"/><stop offset=".5581" stop-color="#9948FA"/></linearGradient></defs></svg>
      </v-toolbar-title>
      <v-spacer />
      <div class="navigation d-none d-md-block">
        <v-btn
          v-for="(item, key) in items"
          :key="`item-desktop-${key}`"
          :to="{ path: '/', hash:`#${item.id}`}"
          :text="!item.button"
          :color="isIntersecting ? item.color : item.colorAlt"
          class="ml-1"
          nuxt exact rounded
          @click="$vuetify.goTo(`#${item.id}`, {duration: 0, easing: 'easeOutQuad'})"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" :dark="isIntersecting" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer color="secondary darken-2 d-block pa-0" absolute app dark>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text-center pa-4" v-html="`&copy; 2018 - ${new Date().getFullYear()} Me Liga &nbsp;-&nbsp; Todos os direitos reservados`" />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      isIntersecting: false,
      items: [
        {
          color: 'white',
          colorAlt: 'black',
          icon: 'mdi-home',
          title: 'Início',
          id: 'inicio',
          button: false,
        },
        {
          color: 'white',
          colorAlt: 'black',
          icon: 'mdi-account',
          title: 'Sobre',
          id: 'sobre',
          button: false,
        },
        {
          color: 'white',
          colorAlt: 'black',
          icon: 'mdi-hammer-wrench',
          title: 'Serviços',
          id: 'servicos',
          button: false,
        },
        {
          color: 'white',
          colorAlt: 'black',
          icon: 'mdi-briefcase',
          title: 'Implementação',
          id: 'implementacao',
          button: false,
        },
        {
          color: 'white',
          colorAlt: 'black',
          icon: 'mdi-account-multiple',
          title: 'Clientes',
          id: 'clientes',
          button: false,
        },
        {
          color: 'secondary darken-2',
          colorAlt: 'secondary darken-2',
          icon: 'mdi-chat',
          title: 'Contato',
          id: 'contato',
          button: true,
        }
      ],
      title: 'Me Liga'
    };
  },
  created () {
    this.$nuxt.$on('isintersecting', (event) => {
      this.isIntersecting = event;
    });
  },
  mounted() {
    this.$store.commit('setNavigation', this.items);
  },
};
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  .logo--alt {
    path {
      fill: white;
    }
  }
  .v-application {
    .v-toolbar {
      transition-property: none;
    }
    .list {
      &--flat {
        list-style-type: circle;
        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
