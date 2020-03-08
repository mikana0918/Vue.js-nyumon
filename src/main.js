import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  //コンポーネンとからストアを利用できるようにする
  store,

}).$mount('#app')
