import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/element'
import {post} from './api/https'

Vue.config.productionTip = false;
//定义全局变量
Vue.prototype.$post = post;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
