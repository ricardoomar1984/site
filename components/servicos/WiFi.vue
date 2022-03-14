<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2">
        {{ title }}
        <span class="body-2">
          (Wi-Fi como serviço. Wi-Fi gerenciado e Wi-Fi para eventos)
        </span>
      </h2>
      Nossos especialistas em rede estão à disposição para ajudá-lo em tudo, desde configurar sua rede sem fio, instalar e configurar WAPs e outros dispositivos ou apenas solucionar problemas de configuração existente. Com relacionamentos próximos com fornecedores como Extreme Networks, Aruba e Cisco, podemos trabalhar com você para avaliar facilmente suas necessidades e fornecer a conectividade que você deseja.
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WiFi',
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
