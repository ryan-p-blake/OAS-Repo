<template>
  <v-navigation-drawer
    v-if="showDrawer"
    app
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    permanent
    theme="dark"
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-chart-donut"
        title="Data"
        value="data"
        to="/"
      ></v-list-item>
      <v-list-item
        to="/about"
        prepend-icon="mdi-account-supervisor-circle"
        title="About The Project"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    showDrawer() {
      return this.drawer.value;
    },
  },
  inject: ["drawer"],
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
