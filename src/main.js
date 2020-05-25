import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myCards from './assets/myCards.json'

Vue.config.productionTip = false




new Vue({

  data() {
    return {
      cardArray: myCards.cards,
      cardId: 4
    };
  },
  methods: {
    IdCounter() {
      this.cardId++;
    },
  },
  router,
  render: h => h(App)
}).$mount('#app')
 

