import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import i18n from './locales/i18n';
import '../../packages/packages';
import '../didor/_didor.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
