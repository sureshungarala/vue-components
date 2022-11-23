import VsDropdown from './Dropdown.vue'

export default {
  install(vueApp, _options) {
    vueApp.component('VsDropdown', VsDropdown);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VsDropdown);
}