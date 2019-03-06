import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import Demo from './components/Demo.component.vue';
import UtilDocs from '../docs/utils/docs.utils';
import docsConfig from '../../docs/docs.config';

import '../docs/assets/icons/sprite';
import '../docs/design/index.scss';

Vue.use(SvgIcon, {
  tagName: 'az-icon',
  classPrefix: 'az-icon',
});

Vue.config.productionTip = false;
Vue.component('Demo', Demo);
UtilDocs.loadComponentes(docsConfig.packagePath, true);

new Vue({
  render: h => h(App),
}).$mount('#app');
