import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false;

// 세 자릿수에 콤마 추가
Vue.filter('makeComma', val => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
