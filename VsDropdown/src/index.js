import VsDropdown from './Dropdown.vue'

const VsDropdownPlugin = {
  install(vueApp, _options) {
    vueApp.component('VsDropdown', VsDropdown);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
 window.Vue.use(VsDropdownPlugin);
}

export default VsDropdownPlugin;
