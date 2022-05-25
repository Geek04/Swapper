import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        title: "Binance торговый бот",
        description: "Binance торговый бот. Выбор торговых пар и автоматизированная помощь"
      }
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  router.afterEach((to) => {
    const DEFAULT_TITLE = "Binance торговый бот"
    Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
    });
  });
  
  export default router