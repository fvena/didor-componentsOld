import Vue from 'vue';
import Toast from './Toast.vue';

let showedToast = [];

function showToast(obj, type) {
  const ToastComponent = Vue.extend(Toast);
  const propsData = Object.assign(obj, { type });

  const component = new ToastComponent({
    el: document.createElement('div'),
    propsData,
  });

  showedToast.push(component);

  return component;
}

const ddToast = {
  info: (props = {}) => {
    props.icon = 'info';
    return showToast(props, 'info');
  },

  success: (props = {}) => {
    props.icon = 'success';
    return showToast(props, 'success');
  },

  warning: (props = {}) => {
    props.icon = 'warning';
    return showToast(props, 'warning');
  },

  error: (props = {}) => {
    props.icon = 'error';
    return showToast(props, 'error');
  },

  remove: () => {
    showedToast.forEach((item) => {
      item.hideToast();
    });

    showedToast = [];
  },
};

export default ddToast;
