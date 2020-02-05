import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
