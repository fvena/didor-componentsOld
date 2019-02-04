import Vue from 'vue';
import Vuex from 'vuex';
import globalModule from './global_module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalModule,
  },
});
