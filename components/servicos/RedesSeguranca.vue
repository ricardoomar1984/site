<template>
  <v-row>
    <v-col cols="12">
      <v-img :aspect-ratio="16/9" :src="image" />
    </v-col>
    <v-col cols="12">
      <h2 class="mb-2" v-text="title" />
      <p>A equipe da Meliga entende que os dados da sua empresa e do cliente, os portais da web e os programas estão no centro da sua organização. É por isso que nosso objetivo é ajudá-lo a entender os riscos que sua empresa enfrenta e como combatê-los.</p>
      <p>Ameaças e ataques à segurança cibernética vêm de várias formas, e pode ser difícil saber em quem - ou no que - confiar.</p>
      <p>Os ataques cibernéticos mais comuns são:</p>
      <ul class="mb-4">
        <li>Phishing</li>
        <li>Malware</li>
        <li>Ransomware</li>
        <li>Negação de serviço</li>
        <li>Tunelamento de DNS</li>
      </ul>
      <p>Quaisquer que sejam suas necessidades de segurança de rede, a equipe do Meliga poderá ajudar.</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RedesSeguranca',
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
