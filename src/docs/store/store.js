import Vue from 'vue';
import Vuex from 'vuex';
import globalModule from './global_module';
import docsModule from './docs_module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalModule,
    docsModule,
  },
});
