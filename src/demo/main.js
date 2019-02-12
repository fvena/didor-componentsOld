import Vue from 'vue';
import App from './App.vue';
import Demo from './components/Demo.component.vue';
import UtilDocs from '../docs/utils/docs.utils';
import docsConfig from '../../docs/docs.config';

import '../didor/_didor.scss';

Vue.config.productionTip = false;
Vue.component('Demo', Demo);
console.log('demo');
UtilDocs.loadComponentes(docsConfig.packagePath, true);

new Vue({
  render: h => h(App),
}).$mount('#app');
