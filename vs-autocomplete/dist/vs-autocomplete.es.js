(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="vs-autocomplete",e.appendChild(document.createTextNode(".v-tree-dropdown[data-v-1fc84ce9]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-1fc84ce9]{display:flex;flex-direction:column}.v-dd>label[data-v-1fc84ce9],.v-dd-option>.label[data-v-1fc84ce9]{font-weight:600;text-align:left}.v-dd>label[data-v-1fc84ce9],.v-dd>label+.v-dd-label-hint[data-v-1fc84ce9]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-1fc84ce9]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-1fc84ce9]{border-color:var(--primary-color)}.c-btn__icon[data-v-1fc84ce9]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-1fc84ce9]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-1fc84ce9]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-1fc84ce9]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-1fc84ce9]:active,.v-dd-search[data-v-1fc84ce9]:focus,.v-dd-search[data-v-1fc84ce9]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-1fc84ce9]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-1fc84ce9]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-1fc84ce9]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-1fc84ce9]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-1fc84ce9]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-1fc84ce9],.v-dd-search>div[data-v-1fc84ce9]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-search>div.placeholder[data-v-1fc84ce9]{color:#0000008a;text-align:left}.v-dd-input[data-v-1fc84ce9]{border:none;outline:none}.v-dd-input.hide[data-v-1fc84ce9]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-1fc84ce9]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-1fc84ce9 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-1fc84ce9]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-1fc84ce9]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-1fc84ce9]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-1fc84ce9]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-1fc84ce9],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-1fc84ce9]{position:absolute}.v-dd-option>span[data-v-1fc84ce9],.v-dd-option>div[data-v-1fc84ce9]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-1fc84ce9],.v-dd-option[disabled=disabled][data-v-1fc84ce9]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-1fc84ce9]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-1fc84ce9]:hover,.v-dd-option[data-v-1fc84ce9]:focus,.v-dd-option.active[data-v-1fc84ce9]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-1fc84ce9]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-1fc84ce9{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
function m(t, e, n, i, s, l, r, c) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), i && (a.functional = !0), l && (a._scopeId = "data-v-" + l);
  var o;
  if (r ? (o = function(h) {
    h = h || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !h && typeof __VUE_SSR_CONTEXT__ < "u" && (h = __VUE_SSR_CONTEXT__), s && s.call(this, h), h && h._registeredComponents && h._registeredComponents.add(r);
  }, a._ssrRegister = o) : s && (o = c ? function() {
    s.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), o)
    if (a.functional) {
      a._injectStyles = o;
      var d = a.render;
      a.render = function(f, O) {
        return o.call(O), d(f, O);
      };
    } else {
      var u = a.beforeCreate;
      a.beforeCreate = u ? [].concat(u, o) : [o];
    }
  return {
    exports: t,
    options: a
  };
}
const _ = {
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
}, I = _;
var v = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { staticClass: "c-btn__icon", attrs: { xmlns: "http://www.w3.org/2000/svg", color: e.color, role: e.role, "aria-labelledby": e.icon, focusable: "false", "aria-hidden": "true" } }, [n("title", { attrs: { id: e.name || e.icon } }, [e._v(e._s(e.name || e.icon) + " Icon")]), n("desc", [e._v(e._s(e.iconDescription || e.name))]), n("svg", { attrs: { width: "16", height: "16", viewBox: "0 0 16 16" }, domProps: { innerHTML: e._s(e.paths[e.icon]) } })]);
}, g = [], y = /* @__PURE__ */ m(
  I,
  v,
  g,
  !1,
  null,
  null,
  null,
  null
);
const b = y.exports;
const x = {
  components: {
    SvgIcon: b
  },
  props: {
    // v-model
    value: {
      type: Array,
      default: []
    },
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
    placeholder: {
      type: String,
      default: "",
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
    },
    searchOnInput: {
      type: [Function, Object],
      default: () => {
      },
      required: !1,
      validator: (t) => typeof t == "function" || typeof t == "object" && typeof t.handler == "function"
    },
    renderOption: {
      type: Function,
      default: (t) => (t == null ? void 0 : t.label) || "",
      required: !1
    }
  },
  emits: ["input", "update:modelValue", "open", "close"],
  data() {
    var t;
    return {
      ddOptions: [],
      // options(from prop) with identifier to be everywhere in the component
      searchInput: this.searchInputText,
      // The value of the search input
      menuIsOpen: !1,
      // true if the dropdown menu is open
      selectedParent: null,
      // Parent option of the current displayed options
      selectedOptions: this.value ?? [],
      // All selected options
      currentOptions: [],
      // Current options to display
      filteredOptions: [],
      // All options filtered by the search input
      filterDataExternally: {
        filterting: !1,
        // true if the options are being filtered externally via searchOnInput prop
        optionLabel: "Loading...",
        // Text to display when options are being filtered externally
        fireOnInitialMenuOpen: !1,
        // true if the options are to be fetched on initial menu open via searchOnInput prop
        debounceTime: 300,
        // Debounce time for search input
        minSearchLength: 0
        // Minimum search input length to start filtering
      },
      menuWasOpen: !1,
      // set to true when the menu is opened for the first time
      /* A11y */
      selectedIndex: -1,
      // Index of the selected option
      selectedIndices: [],
      currentIndex: -1,
      // Index of the current prog focussed option
      uniqueId: Math.random().toString(36).substring(2, 8),
      debouncedSearchInputChange: this.debounce(this.handleSearchInputChange, ((t = this.searchOnInput) == null ? void 0 : t.debounceTime) ?? 300)
    };
  },
  watch: {
    value: {
      handler(t = [], e) {
        if (this.areArraysEqual(this.selectedOptions, t))
          return;
        if (!t.length) {
          this.selectedOptions = [];
          return;
        }
        const [n, i] = this.findDifferenceInArrays(t, this.selectedOptions);
        let s = [...this.selectedOptions];
        i.forEach((l) => {
          const r = s.findIndex(
            (c) => c.__identifier === l.__identifier
          );
          r > -1 && (s = [
            ...s.slice(0, r),
            ...s.slice(r + 1)
          ]);
        }), n.forEach((l) => {
          const r = this.findOptionIdentifier(l, this.ddOptions);
          r && (s = [...s, {
            ...this.cloneOption(l),
            __identifier: r,
            __selected: !0
          }]);
        }), this.multiple || s.length && s[0], this.areArraysEqual(s, this.selectedOptions) || (this.selectedOptions = s);
      },
      deep: !0
    },
    menuIsOpen() {
      this.menuIsOpen ? (document.addEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("open", this.$refs.dropdown, this.$refs.menu, this.searchInput)) : (document.removeEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("close", this.$refs.dropdown, this.$refs.menu, this.searchInput));
    },
    searchInput() {
      this.debouncedSearchInputChange();
    },
    selectedOptions: {
      handler(t, e) {
        const n = e.map((s) => s.__identifier), i = t.map((s) => s.__identifier);
        if ((t.length !== e.length || !i.every((s) => n.includes(s))) && !this.areArraysEqual(t, this.value))
          try {
            this.$emit(
              "input",
              this.selectedOptions.map(({ __identifier: s, __selected: l, ...r }) => r)
            );
          } catch (s) {
            console.error("[vs-autocomplete]: Unknown Event ", s);
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
    this.constructCompData(), typeof this.searchOnInput == "object" && (this.filterDataExternally.optionLabel = this.searchOnInput.loadingOptionLabel || "Loading...", this.filterDataExternally.fireOnInitialMenuOpen = this.searchOnInput.fireOnInitialMenuOpen || !1, this.filterDataExternally.minSearchLength = this.searchOnInput.minSearchLength || 0), this.keepMenuOpenOnRender && this.keepMenuOpen();
  },
  methods: {
    debounce(t, e) {
      let n;
      return function(...i) {
        const s = this;
        clearTimeout(n), n = setTimeout(() => t.apply(s, i), e);
      };
    },
    cloneOption(t) {
      const e = { ...t };
      return t.children && (e.children = t.children.map((n) => this.cloneOption(n))), e;
    },
    // TODO: Check if all options under parent can be selected - [LATER]
    constructCompData(t = this.options) {
      try {
        const { formattedOptions: e, selectedOptions: n } = this.parseInputOptions(t);
        if (this.value.length) {
          const i = this.value.map((s) => {
            const l = this.findOptionIdentifier(s, e);
            return l ? {
              ...this.cloneOption(s),
              __identifier: l,
              __selected: !0
            } : null;
          }).filter(Boolean);
          this.selectedOptions = this.multiple ? i : i.length ? [i[0]] : [];
        } else
          this.selectedOptions = this.multiple ? n : n.length ? [n[0]] : [];
        if (this.ddOptions = e, this.selectedOptions = n, this.searchInput && !this.filterDataExternally.filterting) {
          const i = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = i, this.filteredOptions = i;
        } else
          this.currentOptions = e, this.filteredOptions = e;
      } catch {
        console.error("[vs-autocomplete]: Options must be a valid JSON Array");
      }
    },
    fetchDataExternally() {
      let t = !1, e = typeof this.searchOnInput == "function" ? this.searchOnInput : typeof this.searchOnInput == "object" ? this.searchOnInput.handler : null;
      if (e && this.searchInput.length >= this.filterDataExternally.minSearchLength) {
        const n = e(this.searchInput);
        n && typeof n.then == "function" && (t = !0, this.filterDataExternally.filterting = !0, n.then((i) => {
          Array.isArray(i) ? this.constructCompData(i) : console.error("[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options");
        }).catch((i) => {
          console.error("[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options", i), this.currentOptions = this.ddOptions, this.filteredOptions = this.ddOptions, this.selectedParent = null;
        }).finally(() => {
          this.filterDataExternally.filterting = !1;
        }));
      }
      return t;
    },
    handleSearchInputChange() {
      if (!this.searchInput) {
        this.currentOptions = this.ddOptions, this.filteredOptions = this.ddOptions, this.selectedParent = null;
        return;
      }
      this.fetchDataExternally() || (this.searchInput && (this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions)), this.filteredOptions = this.currentOptions, this.selectedParent = null);
    },
    focusSearchInput() {
      var t;
      (t = this.$refs.searchInput) == null || t.focus();
    },
    toggleDropdownMenu(t) {
      t.stopPropagation(), !this.menuIsOpen && !this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen && (this.menuWasOpen = !0, this.fetchDataExternally()), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var t;
      this.menuIsOpen = !1, (t = this.searchInput) != null && t.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.ddOptions, this.currentOptions = this.ddOptions, this.selectedIndex = -1);
    },
    keepMenuOpen(t) {
      t == null || t.stopPropagation(), this.menuIsOpen || (!this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen && (this.menuWasOpen = !0, this.fetchDataExternally()), this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(t) {
      var e;
      (e = t.path || t.composedPath()) != null && e.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(t = [], e = [], n = []) {
      const i = [];
      return t.forEach((s) => {
        var c;
        const l = [...e, s.id ?? s.label], r = this.cloneOption(s);
        if (r.__identifier = l.join("__"), i.push(r), (c = r.children) != null && c.length) {
          const { formattedOptions: a } = this.parseInputOptions(r.children, l, n);
          r.children = a;
        } else
          r.selected && n.push({
            ...r,
            __selected: !0
          });
      }), { formattedOptions: i, selectedOptions: n };
    },
    isOptionSelected(t) {
      return this.selectedOptions.findIndex((e) => e.__identifier === t.__identifier) > -1;
    },
    hasSelectedOptions(t) {
      return t.some(
        (e) => {
          var n;
          return (n = e.children) != null && n.length ? this.hasSelectedOptions(e.children) : this.isOptionSelected(e);
        }
      );
    },
    showPreviousOptions() {
      this.goToPreviousOptions(), this.selectedIndex = this.selectedParent ? 1 : 0, this.focusSearchInput();
    },
    goToPreviousOptions(t = null, e = this.filteredOptions) {
      var n;
      for (const i of e)
        if ((n = i.children) != null && n.length) {
          if (i.__identifier === this.selectedParent.__identifier && i.children.length === this.currentOptions.length) {
            this.currentOptions = e, this.selectedParent = t;
            return;
          }
          this.goToPreviousOptions(i, i.children);
        }
    },
    filterMatchingOptions(t, e) {
      var i;
      let n = [];
      for (const s of e) {
        const { __identifier: l, __selected: r, ...c } = s, a = this.searchOptionMatcher(t, c);
        if (typeof a == "boolean" ? a : s.label.toLowerCase().includes(t.toLowerCase()))
          n.push(s);
        else if ((i = s.children) != null && i.length) {
          const o = this.filterMatchingOptions(t, s.children);
          o.length && n.push({ ...s, children: o });
        }
      }
      return n;
    },
    selectOption(t) {
      var n;
      const e = this.currentOptions[t];
      if ((n = e.children) != null && n.length) {
        this.selectedParent = e, this.currentOptions = e.children, this.selectedIndex = 1;
        return;
      }
      if (e.__selected || this.isOptionSelected(e, this.selectedParent)) {
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
        this.currentOptions[t].__selected = !1;
      } else {
        if (this.multiple)
          this.selectedOptions = [...this.selectedOptions, e];
        else {
          const i = this.currentOptions.findIndex(
            (s) => s.__selected === !0
          );
          i > -1 && (this.currentOptions[i].__selected = !1), this.selectedOptions = [e], this.closeDropdownMenu();
        }
        this.currentOptions[t].__selected = !0;
      }
      this.selectedIndex = this.selectedParent ? t + 1 : t, this.focusSearchInput();
    },
    handleKeyDown(t) {
      var n, i, s, l, r, c, a;
      const { key: e } = t;
      if (e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(t), e === "Enter") {
          if (t.preventDefault(), t.stopPropagation(), this.maxSelectableCount && ((n = this.selectedOptions) == null ? void 0 : n.length) >= this.maxSelectableCount)
            return;
          if (this.selectedParent && this.selectedIndex === 0)
            this.showPreviousOptions();
          else if (this.selectedIndex !== -1) {
            const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((i = this.currentOptions[o]) != null && i.disabled)) {
              const d = (s = this.selectedParent) == null ? void 0 : s.label;
              this.selectOption(o), d !== ((l = this.selectedParent) == null ? void 0 : l.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (e === "ArrowUp") {
        if (this.selectedIndex === 0) {
          const d = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? d : d - 1;
        } else
          this.selectedIndex--;
        const o = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        o == null || o.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else if (e === "ArrowRight") {
        const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((r = this.currentOptions[o]) != null && r.disabled) && ((a = (c = this.currentOptions[o]) == null ? void 0 : c.children) != null && a.length) && (this.selectOption(o), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const o = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? o : o - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
        const d = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        d == null || d.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else
        e === "ArrowLeft" && this.selectedParent && this.showPreviousOptions();
    },
    /**
     * Returns the identifier of the matched option.
     * @param option Option from v-model. This doesn't have internal keys like __identifier
     * @param options constructed options
     */
    findOptionIdentifier(t, e) {
      var n;
      for (const i of e)
        if ((n = i.children) != null && n.length) {
          const s = this.findOptionIdentifier(t, i.children);
          if (s)
            return s;
        } else if (this.areObjectsEqual(i, t))
          return i.__identifier;
      return null;
    },
    /**
     * check if two objects are equal
     */
    areObjectsEqual(t, e) {
      if (t === e)
        return !0;
      if (typeof t != typeof e || t === null || e === null || Array.isArray(t) !== Array.isArray(e))
        return !1;
      if (Array.isArray(t))
        return t.length === e.length && t.every((l) => e.some((r) => this.areObjectsEqual(l, r)));
      const n = ["__identifier", "__selected", "children"], i = Object.keys(t).filter((l) => !n.includes(l)), s = Object.keys(e).filter((l) => !n.includes(l));
      if (i.length !== s.length)
        return !1;
      for (let l of i)
        if (s.includes(l)) {
          if (typeof t[l] == "object") {
            if (!this.areObjectsEqual(t[l], e[l]))
              return !1;
          } else if (t[l] !== e[l])
            return !1;
        } else
          return !1;
      return !0;
    },
    /**
     * check if two arrays are equal
     */
    areArraysEqual(t, e) {
      if (t === e)
        return !0;
      if (t.length !== e.length)
        return !1;
      const n = [...t].sort((s, l) => s.label.localeCompare(l.label)), i = [...e].sort((s, l) => s.label.localeCompare(l.label));
      for (let s = 0; s < n.length; s++)
        if (!this.areObjectsEqual(n[s], i[s]))
          return !1;
      return !0;
    },
    /**
     * Finds the difference between two arrays and returns the elements that are present in arr1 but not in arr2 and vice versa in a tuple.
     * Have to depend on areArraysEqual method & areObjecteEqual method as objects in arr1(from prop) wouldn't have internal keys like __indentifer to easily validate
     * @param newValue new value(v-model) prop value
     * @param selectedOptions current selectedOptions
     */
    findDifferenceInArrays(t, e) {
      const n = t.filter((s) => !e.some((l) => this.areObjectsEqual(s, l))), i = e.filter((s) => !t.some((l) => this.areObjectsEqual(l, s)));
      return [n, i];
    }
  }
};
var w = function() {
  var i, s, l;
  var e = this, n = e._self._c;
  return n("div", { ref: "dropdown", staticClass: "v-tree-dropdown" }, [n("div", { staticClass: "v-dd" }, [n("label", { attrs: { for: "v-dd-search__input" + e.uniqueId, id: "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.label) + " ")]), e.labelHint ? n("div", { staticClass: "v-dd-label-hint", attrs: { "aria-labelledby": "v-dd-label" + e.uniqueId } }, [e._v(" " + e._s(e.labelHint) + " ")]) : e._e(), n("div", { class: "v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : ""), attrs: { "aria-haspopup": "listbox", "aria-expanded": "" + e.menuIsOpen, "aria-owns": "v-dd-options-menu" + e.uniqueId, "aria-labelledby": "v-dd-label" + e.uniqueId }, on: { click: e.toggleDropdownMenu } }, [n("svg-icon", { attrs: { icon: "zd-search", name: "Search" } }), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.searchInput, expression: "searchInput" }], ref: "searchInput", class: "c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide"), attrs: { type: "text", placeholder: e.placeholder, autocomplete: "off", id: "v-dd-search__input" + e.uniqueId, role: "combobox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-autocomplete": "list", "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1, "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1 }, domProps: { value: e.searchInput }, on: { click: e.keepMenuOpen, keydown: e.handleKeyDown, input: function(r) {
    r.target.composing || (e.searchInput = r.target.value);
  } } }), n("div", { directives: [{ name: "show", rawName: "v-show", value: !e.menuIsOpen, expression: "!menuIsOpen" }], class: "c-txt u-truncate" + ((i = e.selectedOptions) != null && i.length ? "" : " placeholder"), domProps: { innerHTML: e._s((s = e.selectedOptions) != null && s.length ? e.selectedOptions.map((r) => r.label).join(", ") : e.placeholder) } }), n("svg-icon", { class: e.menuIsOpen ? "open" : "close", attrs: { icon: "zd-down-pointer", name: e.menuIsOpen ? "Up arrow" : "Down arrow" } })], 1)]), n("ul", { directives: [{ name: "show", rawName: "v-show", value: e.menuIsOpen, expression: "menuIsOpen" }], ref: "menu", class: e.compact ? "compact" : "", attrs: { id: "v-dd-options-menu" + e.uniqueId, role: "listbox", "aria-labelledby": "v-dd-label" + e.uniqueId, "aria-multiselectable": !!e.multiple } }, [e.filterDataExternally.filterting ? n("li", { staticClass: "v-dd-option", attrs: { disabled: "disabled" } }, [n("span", [e._v(e._s(e.filterDataExternally.optionLabel))])]) : [(l = e.currentOptions) != null && l.length ? e._e() : n("li", { staticClass: "v-dd-option no-data", attrs: { role: "option" } }, [n("span", [e._v(e._s(e.noSearchResultsText))])]), e.selectedParent ? n("li", { class: "v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : ""), attrs: { id: "v-dd-option-0" + e.uniqueId, role: "option" }, on: { click: function(r) {
    return e.showPreviousOptions();
  } } }, [n("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Left arrow", iconDescription: "Click to go back to previous menu", color: "#1f73b7" } }), n("span", { staticClass: "u-truncate label" }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(r, c) {
    var a, o, d, u, h;
    return n("li", { key: r.label + "__" + (r.value ?? c), class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? c + 1 : c) ? " active" : ""), attrs: { id: "v-dd-option-" + (e.selectedParent ? c + 1 : c) + e.uniqueId, role: "option", "aria-selected": e.selectedIndex === (e.selectedParent ? c + 1 : c), disabled: r.disabled || e.maxSelectableCount && ((a = e.selectedOptions) == null ? void 0 : a.length) >= e.maxSelectableCount && !((o = r.children) != null && o.length) && !e.isOptionSelected(r) ? "disabled" : null }, on: { click: function(f) {
      return e.selectOption(c);
    } } }, [(d = r.children) != null && d.length && e.hasSelectedOptions(r.children) ? n("svg-icon", { attrs: { icon: "zd-contains", name: "Contains", color: "#1f73b7" } }) : e._e(), !((u = r.children) != null && u.length) && e.isOptionSelected(r) ? n("svg-icon", { attrs: { icon: "zd-check", name: "Selected", color: "#1f73b7" } }) : e._e(), n("div", { staticClass: "u-truncate", domProps: { innerHTML: e._s(e.renderOption(r)) } }), (h = r.children) != null && h.length ? n("svg-icon", { attrs: { icon: "zd-down-pointer", name: "Right arrow", iconDescription: "Click to open sub-menu options" } }) : e._e()], 1);
  })]], 2)]);
}, S = [], P = /* @__PURE__ */ m(
  x,
  w,
  S,
  !1,
  null,
  "1fc84ce9",
  null,
  null
);
const C = P.exports, q = {
  install(t, e) {
    t.component("VsAutocomplete", C);
  }
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use && p.use(q);
export {
  C as default
};
