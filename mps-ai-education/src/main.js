import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import ElementUI,{Message}from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {getToken} from '@/utils/localstorage'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL='http://localhost'
//请求拦截器
axios.interceptors.request.use((req) => {
  if(req.url != '/user/login'){
    req.headers.authorization= getToken();
  }
  return req;
});
//响应拦截器
axios.interceptors.response.use((res) => {
  if(res.data.code=='401'){
    Message({
      type:'error',
      center:true,
      message:'登录失效请重新登录!'
    })
    router.push('/loginFrom')
  }
  return res;
});
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')
