import VsAutocomplete from './Dropdown.vue'

const VsAutocompletePlugin = {
  install(vueApp, _options) {
    vueApp.component('VsAutocomplete', VsAutocomplete);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
 window.Vue.use(VsAutocompletePlugin);
}

export default VsAutocompletePlugin;
