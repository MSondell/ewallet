import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false




new Vue({

  data() {
    return {
      
      cardId: 1,
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
 

