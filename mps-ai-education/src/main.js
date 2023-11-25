import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL='http://localhost'
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')