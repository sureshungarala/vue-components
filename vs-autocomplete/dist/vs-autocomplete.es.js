(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="vs-autocomplete",e.appendChild(document.createTextNode(".v-tree-dropdown[data-v-fbcbbee3]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-fbcbbee3]{display:flex;flex-direction:column}.v-dd>label[data-v-fbcbbee3],.v-dd-option>.label[data-v-fbcbbee3]{font-weight:600;text-align:left}.v-dd>label[data-v-fbcbbee3],.v-dd>label+.v-dd-label-hint[data-v-fbcbbee3]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-fbcbbee3]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-fbcbbee3]{border-color:var(--primary-color)}.c-btn__icon[data-v-fbcbbee3]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-fbcbbee3]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-fbcbbee3]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-fbcbbee3]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-fbcbbee3]:active,.v-dd-search[data-v-fbcbbee3]:focus,.v-dd-search[data-v-fbcbbee3]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-fbcbbee3]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-fbcbbee3]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-fbcbbee3]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-fbcbbee3]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-fbcbbee3]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-fbcbbee3],.v-dd-search>div[data-v-fbcbbee3]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-fbcbbee3]{border:none;outline:none}.v-dd-input.hide[data-v-fbcbbee3]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-fbcbbee3]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-fbcbbee3 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-fbcbbee3]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-fbcbbee3]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-fbcbbee3]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-fbcbbee3]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-fbcbbee3],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-fbcbbee3]{position:absolute}.v-dd-option>span[data-v-fbcbbee3]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-fbcbbee3],.v-dd-option[disabled=disabled][data-v-fbcbbee3]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-fbcbbee3]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-fbcbbee3]:hover,.v-dd-option[data-v-fbcbbee3]:focus,.v-dd-option.active[data-v-fbcbbee3]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-fbcbbee3]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-fbcbbee3{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
function _(t, e, s, i, n, l, a, d) {
  var r = typeof t == "function" ? t.options : t;
  e && (r.render = e, r.staticRenderFns = s, r._compiled = !0), i && (r.functional = !0), l && (r._scopeId = "data-v-" + l);
  var o;
  if (a ? (o = function(u) {
    u = u || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), n && n.call(this, u), u && u._registeredComponents && u._registeredComponents.add(a);
  }, r._ssrRegister = o) : n && (o = d ? function() {
    n.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), o)
    if (r.functional) {
      r._injectStyles = o;
      var c = r.render;
      r.render = function(O, f) {
        return o.call(f), c(O, f);
      };
    } else {
      var h = r.beforeCreate;
      r.beforeCreate = h ? [].concat(h, o) : [o];
    }
  return {
    exports: t,
    options: r
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
}, I = m;
var v = function() {
  var e = this, s = e._self._c;
  return e._self._setupProxy, s("svg", { staticClass: "c-btn__icon", attrs: { xmlns: "http://www.w3.org/2000/svg", color: e.color, role: e.role, "aria-labelledby": e.icon, focusable: "false", "aria-hidden": "true" } }, [s("title", { attrs: { id: e.name || e.icon } }, [e._v(e._s(e.name || e.icon) + " Icon")]), s("desc", [e._v(e._s(e.iconDescription || e.name))]), s("svg", { attrs: { width: "16", height: "16", viewBox: "0 0 16 16" }, domProps: { innerHTML: e._s(e.paths[e.icon]) } })]);
}, b = [], g = /* @__PURE__ */ _(
  I,
  v,
  b,
  !1,
  null,
  null,
  null,
  null
);
const w = g.exports;
const S = {
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
      handler(t, e) {
        const s = e.map((n) => n.__identifier), i = t.map((n) => n.__identifier);
        if (t.length !== e.length || !i.every((n) => s.includes(n)))
          try {
            this.$emit(
              "input",
              this.selectedOptions.map(({ __identifier: n, __selected: l, ...a }) => a)
            );
          } catch (n) {
            console.log("Unknown Event ", n);
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
        const t = JSON.parse(JSON.stringify(this.options)), { formattedOptions: e, selectedOptions: s } = this.parseInputOptions(t);
        if (this.ddOptions = e, this.selectedOptions = s, this.searchInput) {
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
      var t;
      (t = this.$refs.searchInput) == null || t.focus();
    },
    toggleDropdownMenu(t) {
      t.stopPropagation(), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var t;
      this.menuIsOpen = !1, (t = this.searchInput) != null && t.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.ddOptions, this.currentOptions = this.ddOptions, this.selectedIndex = -1);
    },
    keepMenuOpen(t) {
      t == null || t.stopPropagation(), this.menuIsOpen || (this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(t) {
      var e;
      (e = t.path || t.composedPath()) != null && e.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(t = [], e = [], s = []) {
      return t.forEach((i) => {
        var l;
        const n = [...e, i.label];
        typeof i.value < "u" && n.push(i.value), i.__identifier = n.join("__"), (l = i.children) != null && l.length ? this.parseInputOptions(i.children, n, s) : i.selected && s.push(i);
      }), { formattedOptions: t, selectedOptions: s };
    },
    isOptionSelected(t) {
      return this.selectedOptions.findIndex((e) => e.__identifier === t.__identifier) > -1;
    },
    hasSelectedOptions(t) {
      return t.some(
        (e) => {
          var s;
          return (s = e.children) != null && s.length ? this.hasSelectedOptions(e.children) : this.isOptionSelected(e);
        }
      );
    },
    showPreviousOptions() {
      this.goToPreviousOptions(), this.selectedIndex = this.selectedParent ? 1 : 0, this.focusSearchInput();
    },
    goToPreviousOptions(t = null, e = this.filteredOptions) {
      var s;
      for (const i of e)
        if ((s = i.children) != null && s.length) {
          if (i.__identifier === this.selectedParent.__identifier && i.children.length === this.currentOptions.length) {
            this.currentOptions = e, this.selectedParent = t;
            return;
          }
          this.goToPreviousOptions(i, i.children);
        }
    },
    filterMatchingOptions(t, e) {
      var i;
      let s = [];
      for (const n of e) {
        const { __identifier: l, __selected: a, ...d } = n, r = this.searchOptionMatcher(t, d);
        if (typeof r == "boolean" ? r : n.label.toLowerCase().includes(t.toLowerCase()))
          s.push(n);
        else if ((i = n.children) != null && i.length) {
          const o = this.filterMatchingOptions(t, n.children);
          o.length && s.push({ ...n, children: o });
        }
      }
      return s;
    },
    selectOption(t) {
      var s;
      const e = this.currentOptions[t];
      if ((s = e.children) != null && s.length)
        this.selectedParent = e, this.currentOptions = e.children, this.selectedIndex = 1;
      else {
        if (e.__selected || this.isOptionSelected(e, this.selectedParent)) {
          if (this.multiple) {
            const i = this.selectedOptions.findIndex(
              (n) => n.__identifier === e.__identifier
            );
            i > -1 && (this.selectedOptions = [
              ...this.selectedOptions.slice(0, i),
              ...this.selectedOptions.slice(i + 1)
            ]);
          } else
            this.selectedOptions = [];
          this.currentOptions[t].__selected = !1;
        } else {
          if (this.multiple)
            this.selectedOptions = [...this.selectedOptions, e];
          else {
            const i = this.currentOptions.findIndex(
              (n) => n.__selected === !0
            );
            i > -1 && (this.currentOptions[i].__selected = !1), this.selectedOptions = [e], this.closeDropdownMenu();
          }
          this.currentOptions[t].__selected = !0;
        }
        this.selectedIndex = this.selectedParent ? t + 1 : t, this.focusSearchInput();
      }
    },
    handleKeyDown(t) {
      var s, i, n, l, a, d, r;
      const { key: e } = t;
      if (e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(t), e === "Enter") {
          if (this.maxSelectableCount && ((s = this.selectedOptions) == null ? void 0 : s.length) >= this.maxSelectableCount)
            return;
          if (this.selectedParent && this.selectedIndex === 0)
            this.showPreviousOptions();
          else if (this.selectedIndex !== -1) {
            const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((i = this.currentOptions[o]) != null && i.disabled)) {
              const c = (n = this.selectedParent) == null ? void 0 : n.label;
              this.selectOption(o), c !== ((l = this.selectedParent) == null ? void 0 : l.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (e === "ArrowUp") {
        if (this.selectedIndex === 0) {
          const c = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? c : c - 1;
        } else
          this.selectedIndex--;
        const o = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        o == null || o.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else if (e === "ArrowRight") {
        const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((a = this.currentOptions[o]) != null && a.disabled) && ((r = (d = this.currentOptions[o]) == null ? void 0 : d.children) != null && r.length) && (this.selectOption(o), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const o = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? o : o - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
        const c = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        c == null || c.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else
        e === "ArrowLeft" && this.selectedParent && this.showPreviousOptions();
    }
  }
};
var x = function() {
  var i;
  var e = this, s = e._self._c;
  return s("div", { ref: "dropdown", staticClass: "v-tree-dropdown" }, [s("div", { staticClass: "v-dd" }, [s("label", { attrs: { for: "v-dd-search__input" + e.uniqueId, id: "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.label) + " ")]), e.labelHint ? s("div", { staticClass: "v-dd-label-hint", attrs: { "aria-labelledby": "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.labelHint) + " ")]) : e._e(), s("div", { class: "v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : ""), attrs: { "aria-haspopup": "listbox", "aria-expanded": "" + e.menuIsOpen, "aria-owns": "v-dd-options-menu" + e.uniqueId, "aria-labelledby": "v-dd-label" + e.uniqueId }, on: { click: e.toggleDropdownMenu } }, [s("svg-icon", { attrs: { icon: "zd-search", name: "Search" } }), s("input", { directives: [{ name: "model", rawName: "v-model", value: e.searchInput, expression: "searchInput" }], ref: "searchInput", class: "c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide"), attrs: { type: "text", autocomplete: "off", id: "v-dd-search__input" + e.uniqueId, role: "combobox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-autocomplete": "list", "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1, "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1 }, domProps: { value: e.searchInput }, on: { click: e.keepMenuOpen, keydown: e.handleKeyDown, input: function(n) {
    n.target.composing || (e.searchInput = n.target.value);
  } } }), s("div", { directives: [{ name: "show", rawName: "v-show", value: !e.menuIsOpen, expression: "!menuIsOpen" }], staticClass: "c-txt u-truncate", domProps: { innerHTML: e._s(e.selectedOptions.map((n) => n.label).join(", ")) } }), s("svg-icon", { class: e.menuIsOpen ? "open" : "close", attrs: { icon: "zd-down-pointer", name: e.menuIsOpen ? "Up arrow" : "Down arrow" } })], 1)]), s("ul", { directives: [{ name: "show", rawName: "v-show", value: e.menuIsOpen, expression: "menuIsOpen" }], ref: "menu", class: e.compact ? "compact" : "", attrs: { id: "v-dd-options-menu" + e.uniqueId, role: "listbox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-multiselectable": !!e.multiple } }, [(i = e.currentOptions) != null && i.length ? e._e() : s("li", { staticClass: "v-dd-option no-data", attrs: { role: "option" } }, [s("span", [e._v(e._s(e.noSearchResultsText))])]), e.selectedParent ? s("li", { class: "v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : ""), attrs: { id: "v-dd-option-0" + e.uniqueId, role: "option" }, on: { click: function(n) {
    return e.showPreviousOptions();
  } } }, [s("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Left arrow", iconDescription: "Click to go back to previous menu", color: "#1f73b7" } }), s("span", { staticClass: "u-truncate label" }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(n, l) {
    var a, d, r, o, c;
    return s("li", { key: n.label + "__" + (n.value ?? l), class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? l + 1 : l) ? " active" : ""), attrs: { id: "v-dd-option-" + (e.selectedParent ? l + 1 : l) + e.uniqueId, role: "option", "aria-selected": e.selectedIndex === (e.selectedParent ? l + 1 : l), disabled: n.disabled || e.maxSelectableCount && ((a = e.selectedOptions) == null ? void 0 : a.length) >= e.maxSelectableCount && !((d = n.children) != null && d.length) && !e.isOptionSelected(n) ? "disabled" : null }, on: { click: function(h) {
      return e.selectOption(l);
    } } }, [(r = n.children) != null && r.length && e.hasSelectedOptions(n.children) ? s("svg-icon", { attrs: { icon: "zd-contains", name: "Contains", color: "#1f73b7" } }) : e._e(), !((o = n.children) != null && o.length) && e.isOptionSelected(n) ? s("svg-icon", { attrs: { icon: "zd-check", name: "Selected", color: "#1f73b7" } }) : e._e(), s("span", { staticClass: "u-truncate" }, [e._v(e._s(n.label))]), (c = n.children) != null && c.length ? s("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Right arrow", iconDescription: "Click to open sub-menu options" } }) : e._e()], 1);
  })], 2)]);
}, y = [], P = /* @__PURE__ */ _(
  S,
  x,
  y,
  !1,
  null,
  "fbcbbee3",
  null,
  null
);
const C = P.exports, k = {
  install(t, e) {
    t.component("VsAutocomplete", C);
  }
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use && p.use(k);
export {
  C as default
};
