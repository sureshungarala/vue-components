import VsAutocomplete from './Dropdown.vue';

const VsAutocompletePlugin = {
  install(vueApp, _options) {
    vueApp.component('VsAutocomplete', VsAutocomplete);
  },
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue && GlobalVue.use) {
  GlobalVue.use(VsAutocompletePlugin);
}

export default VsAutocomplete;
