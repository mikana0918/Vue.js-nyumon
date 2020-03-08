import Vue from 'vue'
import App from './App.vue'
import store from './components/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
