<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <nav-drawer></nav-drawer>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>App OAS</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<!--
<template>
  <nav>

  </nav>
</template>
-->
<script>
import NavDrawer from "./components/NavDrawer.vue";
import { computed } from "vue";

export default {
  components: {
    NavDrawer,
  },
  data: () => ({ drawer: null }),
  provide() {
    return {
      drawer: computed(() => this.drawer),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
