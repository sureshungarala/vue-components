import VsDropdown from './Dropdown.vue'

const VsDropdownPlugin = {
  install(vueApp, _options) {
    vueApp.component('VsDropdown', VsDropdown);
  },
};

export default VsDropdownPlugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VsDropdownPlugin);
}