<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2" v-text="title" />
      <p>Cloud Computing é a entrega de serviços de computação sob demanda - de aplicativos a armazenamento e poder de processamento - normalmente pela Internet e com base no pagamento conforme o uso.</p>
      <p>Em vez de possuir sua própria infraestrutura de computação ou data centers, as empresas podem alugar acesso a qualquer coisa, de aplicativos a armazenamento de um provedor de serviços em nuvem. Um benefício de usar serviços de computação em nuvem é que as empresas podem evitar o custo inicial e a complexidade de possuir e manter sua própria infraestrutura de TI e, em vez disso, simplesmente pagar pelo que usam, quando o usam.</p>
      <p>Por sua vez, os provedores de serviços de computação em nuvem podem se beneficiar de economias de escala significativas ao fornecer os mesmos serviços a uma ampla gama de clientes.</p>
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
