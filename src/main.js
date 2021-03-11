import Vue from 'vue';
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
// 导入NProgress 包对应的js和css
import NProgress from 'nprogress';
import App from './App.vue';
import router from './router';
// import store from './store';
import './assets/font/iconfont.css';
import './assets/css/global.css';

import 'nprogress/nprogress.css';

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
// 在request拦截器中，展示进度条NProgress。start()
axios.interceptors.request.use((config) => {
  // eslint-disable-next-line no-console
  console.log(config);
  NProgress.start();
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});

// 在response拦截器中，隐藏进度条NProgress。done()
axios.interceptors.response.use((config) => {
  NProgress.done();
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
