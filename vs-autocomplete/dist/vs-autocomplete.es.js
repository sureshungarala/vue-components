(function(){"use strict";try{if(typeof document<"u"){var d=document.createElement("style");d.id="vs-autocomplete",d.appendChild(document.createTextNode(".v-tree-dropdown[data-v-decd100a]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-decd100a]{display:flex;flex-direction:column}.v-dd>label[data-v-decd100a],.v-dd-option>.label[data-v-decd100a]{font-weight:600;text-align:left}.v-dd>label[data-v-decd100a],.v-dd>label+.v-dd-label-hint[data-v-decd100a]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-decd100a]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-decd100a]{border-color:var(--primary-color)}.c-btn__icon[data-v-decd100a]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-decd100a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-decd100a]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-decd100a]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-decd100a]:active,.v-dd-search[data-v-decd100a]:focus,.v-dd-search[data-v-decd100a]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-decd100a]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-decd100a]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-decd100a]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-decd100a]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-decd100a]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-decd100a],.v-dd-search>div[data-v-decd100a]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-decd100a]{border:none;outline:none}.v-dd-input.hide[data-v-decd100a]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-decd100a]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-decd100a var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-decd100a]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-decd100a]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-decd100a]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-decd100a]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-decd100a],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-decd100a]{position:absolute}.v-dd-option>span[data-v-decd100a]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-decd100a],.v-dd-option[disabled=disabled][data-v-decd100a]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-decd100a]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-decd100a]:hover,.v-dd-option[data-v-decd100a]:focus,.v-dd-option.active[data-v-decd100a]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-decd100a]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-decd100a{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(d)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
function _(n, e, t, i, s, r, a, d) {
  var o = typeof n == "function" ? n.options : n;
  e && (o.render = e, o.staticRenderFns = t, o._compiled = !0), i && (o.functional = !0), r && (o._scopeId = "data-v-" + r);
  var l;
  if (a ? (l = function(c) {
    c = c || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), s && s.call(this, c), c && c._registeredComponents && c._registeredComponents.add(a);
  }, o._ssrRegister = l) : s && (l = d ? function() {
    s.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), l)
    if (o.functional) {
      o._injectStyles = l;
      var u = o.render;
      o.render = function(O, f) {
        return l.call(f), u(O, f);
      };
    } else {
      var h = o.beforeCreate;
      o.beforeCreate = h ? [].concat(h, l) : [l];
    }
  return {
    exports: n,
    options: o
  };
}
const m = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String
    },
    role: {
      type: String,
      default: "presentation"
    },
    iconDescription: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      paths: {
        "zd-search": '<circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5"></path>',
        "zd-down-pointer": '<path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"></path>',
        "zd-check": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9l4 4L15 3"></path>',
        "zd-contains": '<path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.5h15"></path>'
      }
    };
  }
}, v = m;
var I = function() {
  var e = this, t = e._self._c;
  return e._self._setupProxy, t("svg", { staticClass: "c-btn__icon", attrs: { xmlns: "http://www.w3.org/2000/svg", color: e.color, role: e.role, "aria-labelledby": e.icon, focusable: "false", "aria-hidden": "true" } }, [t("title", { attrs: { id: e.name || e.icon } }, [e._v(e._s(e.name || e.icon) + " Icon")]), t("desc", [e._v(e._s(e.iconDescription || e.name))]), t("svg", { attrs: { width: "16", height: "16", viewBox: "0 0 16 16" }, domProps: { innerHTML: e._s(e.paths[e.icon]) } })]);
}, g = [], b = /* @__PURE__ */ _(
  v,
  I,
  g,
  !1,
  null,
  null,
  null,
  null
);
const w = b.exports;
const y = {
  components: {
    SvgIcon: w
  },
  props: {
    label: {
      type: String,
      required: !1
    },
    options: {
      type: Array,
      default: [],
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1,
      required: !1
    },
    searchInputText: {
      type: String,
      default: "",
      required: !1
    },
    searchOptionMatcher: {
      type: Function,
      default: () => {
      },
      required: !1
    },
    keepMenuOpenOnRender: {
      type: Boolean,
      default: !1,
      required: !1
    },
    maxSelectableCount: {
      type: Number,
      default: 0,
      required: !1
    },
    compact: {
      type: Boolean,
      default: !1,
      required: !1
    },
    noSearchResultsText: {
      type: String,
      default: "No options found",
      required: !1
    },
    labelHint: {
      type: String,
      default: "",
      required: !1
    }
  },
  emits: ["input", "update:modelValue", "open", "close"],
  data() {
    return {
      ddOptions: [],
      // options(from prop) with identifier to be everywhere in the component
      searchInput: this.searchInputText,
      // The value of the search input
      menuIsOpen: !1,
      // true if the dropdown menu is open
      selectedParent: null,
      // Parent option of the current displayed options
      selectedOptions: [],
      // All selected options
      currentOptions: [],
      // Current options to display
      filteredOptions: [],
      // All options filtered by the search input
      /* A11y */
      selectedIndex: -1,
      // Index of the selected option
      selectedIndices: [],
      currentIndex: -1,
      // Index of the current prog focussed option
      uniqueId: Math.random().toString(36).substring(2, 8)
    };
  },
  watch: {
    menuIsOpen() {
      this.menuIsOpen ? (document.addEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("open", this.$refs.dropdown, this.$refs.menu)) : (document.removeEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("close", this.$refs.dropdown, this.$refs.menu));
    },
    searchInput() {
      this.handleSearchInputChange();
    },
    selectedOptions: {
      handler(n, e) {
        const t = e.map((s) => s.__identifier), i = n.map((s) => s.__identifier);
        if (n.length !== e.length || !i.every((s) => t.includes(s)))
          try {
            this.$emit(
              "input",
              this.selectedOptions.map(({ __identifier: s, __selected: r, ...a }) => a)
            );
          } catch (s) {
            console.log("Unknown Event ", s);
          }
      },
      deep: !0
    },
    options: {
      handler() {
        this.constructCompData();
      },
      deep: !0
    },
    searchInputText() {
      this.searchInput = this.searchInputText, this.keepMenuOpen();
    }
  },
  created() {
    this.constructCompData(), this.keepMenuOpenOnRender && this.keepMenuOpen();
  },
  methods: {
    // TODO: Check if all options under parent can be selected - [LATER]
    constructCompData() {
      try {
        const n = JSON.parse(JSON.stringify(this.options)), { formattedOptions: e, selectedOptions: t } = this.parseInputOptions(n);
        if (this.ddOptions = e, this.selectedOptions = t, this.searchInput) {
          const i = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = i, this.filteredOptions = i;
        } else
          this.currentOptions = e, this.filteredOptions = e;
      } catch {
        console.error("[vs-autocomplete]: Options must be a valid JSON Array");
      }
    },
    handleSearchInputChange() {
      this.searchInput ? this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions) : this.currentOptions = this.ddOptions, this.filteredOptions = this.currentOptions, this.selectedParent = null;
    },
    focusSearchInput() {
      var n;
      (n = this.$refs.searchInput) == null || n.focus();
    },
    toggleDropdownMenu(n) {
      n.stopPropagation(), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var n;
      this.menuIsOpen = !1, (n = this.searchInput) != null && n.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.ddOptions, this.currentOptions = this.ddOptions, this.selectedIndex = -1);
    },
    keepMenuOpen(n) {
      n == null || n.stopPropagation(), this.menuIsOpen || (this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(n) {
      var e;
      (e = n.path || n.composedPath()) != null && e.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(n = [], e = [], t = []) {
      return n.forEach((i) => {
        var r;
        const s = [...e, i.label];
        typeof i.value < "u" && s.push(i.value), i.__identifier = s.join("__"), (r = i.children) != null && r.length ? this.parseInputOptions(i.children, s, t) : i.selected && t.push(i);
      }), { formattedOptions: n, selectedOptions: t };
    },
    isOptionSelected(n) {
      return this.selectedOptions.findIndex((e) => e.__identifier === n.__identifier) > -1;
    },
    hasSelectedOptions(n) {
      return n.some(
        (e) => {
          var t;
          return (t = e.children) != null && t.length ? this.hasSelectedOptions(e.children) : this.isOptionSelected(e);
        }
      );
    },
    goToPreviousOptions(n = null, e = this.filteredOptions) {
      var t;
      for (const i of e)
        if ((t = i.children) != null && t.length) {
          if (i.__identifier === this.selectedParent.__identifier && i.children.length === this.currentOptions.length) {
            this.currentOptions = e, this.selectedParent = n;
            return;
          }
          this.goToPreviousOptions(i, i.children);
        }
    },
    filterMatchingOptions(n, e) {
      var i;
      let t = [];
      for (const s of e) {
        const { __identifier: r, __selected: a, ...d } = s, o = this.searchOptionMatcher(n, d);
        if (typeof o == "boolean" ? o : s.label.toLowerCase().includes(n.toLowerCase()))
          t.push(s);
        else if ((i = s.children) != null && i.length) {
          const l = this.filterMatchingOptions(n, s.children);
          l.length && t.push({ ...s, children: l });
        }
      }
      return t;
    },
    selectOption(n) {
      var t;
      const e = this.currentOptions[n];
      if ((t = e.children) != null && t.length)
        this.selectedParent = e, this.currentOptions = e.children;
      else if (e.__selected || this.isOptionSelected(e, this.selectedParent)) {
        if (this.multiple) {
          const i = this.selectedOptions.findIndex(
            (s) => s.__identifier === e.__identifier
          );
          i > -1 && (this.selectedOptions = [
            ...this.selectedOptions.slice(0, i),
            ...this.selectedOptions.slice(i + 1)
          ]);
        } else
          this.selectedOptions = [];
        this.currentOptions[n].__selected = !1;
      } else
        this.multiple ? this.selectedOptions = [...this.selectedOptions, e] : (this.selectedOptions = [e], this.closeDropdownMenu()), this.currentOptions[n].__selected = !0;
    },
    handleKeyDown(n) {
      var t, i, s, r, a, d;
      const { key: e } = n;
      if (e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(n), e === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((t = this.currentOptions[o]) != null && t.disabled)) {
              const l = (i = this.selectedParent) == null ? void 0 : i.label;
              this.selectOption(o), l !== ((s = this.selectedParent) == null ? void 0 : s.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (e === "ArrowUp")
        if (this.selectedIndex === 0) {
          const o = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? o : o - 1;
        } else
          this.selectedIndex--;
      else if (e === "ArrowRight") {
        const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((r = this.currentOptions[o]) != null && r.disabled) && ((d = (a = this.currentOptions[o]) == null ? void 0 : a.children) != null && d.length) && (this.selectOption(o), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const o = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? o : o - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        e === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
};
var S = function() {
  var i;
  var e = this, t = e._self._c;
  return t("div", { ref: "dropdown", staticClass: "v-tree-dropdown" }, [t("div", { staticClass: "v-dd" }, [t("label", { attrs: { for: "v-dd-search__input" + e.uniqueId, id: "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.label) + " ")]), e.labelHint ? t("div", { staticClass: "v-dd-label-hint", attrs: { "aria-labelledby": "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.labelHint) + " ")]) : e._e(), t("div", { class: "v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : ""), attrs: { "aria-haspopup": "listbox", "aria-expanded": "" + e.menuIsOpen, "aria-owns": "v-dd-options-menu" + e.uniqueId, "aria-labelledby": "v-dd-label" + e.uniqueId }, on: { click: e.toggleDropdownMenu } }, [t("svg-icon", { attrs: { icon: "zd-search", name: "Search" } }), t("input", { directives: [{ name: "model", rawName: "v-model", value: e.searchInput, expression: "searchInput" }], ref: "searchInput", class: "c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide"), attrs: { type: "text", autocomplete: "off", id: "v-dd-search__input" + e.uniqueId, role: "combobox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-autocomplete": "list", "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1, "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1 }, domProps: { value: e.searchInput }, on: { click: e.keepMenuOpen, keydown: e.handleKeyDown, input: function(s) {
    s.target.composing || (e.searchInput = s.target.value);
  } } }), t("div", { directives: [{ name: "show", rawName: "v-show", value: !e.menuIsOpen, expression: "!menuIsOpen" }], staticClass: "c-txt u-truncate", domProps: { innerHTML: e._s(e.selectedOptions.map((s) => s.label).join(", ")) } }), t("svg-icon", { class: e.menuIsOpen ? "open" : "close", attrs: { icon: "zd-down-pointer", name: e.menuIsOpen ? "Up arrow" : "Down arrow" } })], 1)]), t("ul", { directives: [{ name: "show", rawName: "v-show", value: e.menuIsOpen, expression: "menuIsOpen" }], ref: "menu", class: e.compact ? "compact" : "", attrs: { id: "v-dd-options-menu" + e.uniqueId, role: "listbox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-multiselectable": !!e.multiple } }, [(i = e.currentOptions) != null && i.length ? e._e() : t("li", { staticClass: "v-dd-option no-data", attrs: { role: "option" } }, [t("span", [e._v(e._s(e.noSearchResultsText))])]), e.selectedParent ? t("li", { class: "v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : ""), attrs: { id: "v-dd-option-0" + e.uniqueId, role: "option" }, on: { click: function(s) {
    return e.goToPreviousOptions();
  } } }, [t("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Left arrow", iconDescription: "Click to go back to previous menu", color: "#1f73b7" } }), t("span", { staticClass: "u-truncate label" }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(s, r) {
    var a, d, o, l, u;
    return t("li", { key: s.label + "__" + (s.value ?? r), class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? r + 1 : r) ? " active" : ""), attrs: { id: "v-dd-option-" + (e.selectedParent ? r + 1 : r) + e.uniqueId, role: "option", "aria-selected": e.selectedIndex === (e.selectedParent ? r + 1 : r), disabled: s.disabled || e.maxSelectableCount && ((a = e.selectedOptions) == null ? void 0 : a.length) >= e.maxSelectableCount && !((d = s.children) != null && d.length) && !e.isOptionSelected(s) ? "disabled" : null }, on: { click: function(h) {
      return e.selectOption(r);
    } } }, [(o = s.children) != null && o.length && e.hasSelectedOptions(s.children) ? t("svg-icon", { attrs: { icon: "zd-contains", name: "Contains", color: "#1f73b7" } }) : e._e(), !((l = s.children) != null && l.length) && e.isOptionSelected(s) ? t("svg-icon", { attrs: { icon: "zd-check", name: "Selected", color: "#1f73b7" } }) : e._e(), t("span", { staticClass: "u-truncate" }, [e._v(e._s(s.label))]), (u = s.children) != null && u.length ? t("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Right arrow", iconDescription: "Click to open sub-menu options" } }) : e._e()], 1);
  })], 2)]);
}, x = [], P = /* @__PURE__ */ _(
  y,
  S,
  x,
  !1,
  null,
  "decd100a",
  null,
  null
);
const C = P.exports, k = {
  install(n, e) {
    n.component("VsAutocomplete", C);
  }
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use && p.use(k);
export {
  C as default
};
