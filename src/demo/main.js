import Vue from 'vue';
import App from './App.vue';
import Demo from './components/Demo.component.vue';

import '../../packages/demo';
import '../didor/_didor.scss';

Vue.config.productionTip = false;
Vue.component('Demo', Demo);

new Vue({
  render: h => h(App),
}).$mount('#app');
