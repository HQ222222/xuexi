import Vue from 'vue';
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue';
import router from './router';
// import store from './store';
import './assets/font/iconfont.css';
import './assets/css/global.css';

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
axios.interceptors.request.use((config) => {
  // eslint-disable-next-line no-console
  console.log(config);
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});

Vue.prototype.$http = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
