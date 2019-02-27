import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import i18n from './locales/i18n';
import ApiService from './services/api.service';
import 'nprogress/nprogress.css';
import UtilDocs from './utils/docs.utils';
import docsConfig from '../../docs/docs.config';

import './design/index.scss';

// Inicializamos nuesta API
ApiService.init(process.env.VUE_APP_API_URL, process.env.VUE_APP_API_TIMEOUT);
UtilDocs.loadComponentes(docsConfig.packagePath);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
