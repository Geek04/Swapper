import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.component("v-select", vSelect);
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

// createApp(App).mount('#app')
