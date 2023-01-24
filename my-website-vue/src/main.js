import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import MainContent from './components/MainContent.vue'
import NavDrawer from './components/NavDrawer.vue'
import router from './router'
// import { apply } from 'core-js/fn/reflect' s

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .component("main-content", MainContent)
  .component("nav-drawer", NavDrawer)
  .mount('#app')
