import Vue from 'vue'
import VeeValidate from 'vee-validate';

import App from './App.vue'

import store from './store'

import '@/assets/scss/index.scss'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
