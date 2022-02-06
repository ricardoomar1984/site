<template>
  <div>
    <!-- Components -->
    <component :is="item.id" v-for="item in navigationItems" :key="item.id" :title="item.title" />
  </div>
</template>

<script>
export default {
  computed: {
    navigationItems() {
      return this.$store.state.navigation;
    }
  },
};
</script>
