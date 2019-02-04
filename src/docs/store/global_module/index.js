import state from './global.state';
import actions from './global.actions';
import getters from './global.getters';
import mutations from './global.mutations';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
