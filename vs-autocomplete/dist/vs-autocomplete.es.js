(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.id="vs-autocomplete",a.appendChild(document.createTextNode(".v-tree-dropdown[data-v-76494a1c]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-76494a1c]{display:flex;flex-direction:column}.v-dd>label[data-v-76494a1c],.v-dd-option>.label[data-v-76494a1c]{font-weight:600;text-align:left}.v-dd>label[data-v-76494a1c],.v-dd>label+.v-dd-label-hint[data-v-76494a1c]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-76494a1c]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-76494a1c]{border-color:var(--primary-color)}.c-btn__icon[data-v-76494a1c]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-76494a1c]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-76494a1c]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-76494a1c]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-76494a1c]:active,.v-dd-search[data-v-76494a1c]:focus,.v-dd-search[data-v-76494a1c]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-76494a1c]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-76494a1c]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-76494a1c]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-76494a1c]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-76494a1c]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-76494a1c],.v-dd-search>div[data-v-76494a1c]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-search>div.placeholder[data-v-76494a1c]{color:#0000008a;text-align:left}.v-dd-input[data-v-76494a1c]{border:none;outline:none}.v-dd-input.hide[data-v-76494a1c]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-76494a1c]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-76494a1c var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-76494a1c]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-76494a1c]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-76494a1c]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-76494a1c]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-76494a1c],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-76494a1c]{position:absolute}.v-dd-option>span[data-v-76494a1c],.v-dd-option>div[data-v-76494a1c]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-76494a1c],.v-dd-option[disabled=disabled][data-v-76494a1c]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-76494a1c]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-76494a1c]:hover,.v-dd-option[data-v-76494a1c]:focus,.v-dd-option.active[data-v-76494a1c]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-76494a1c]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-76494a1c{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { openBlock as d, createElementBlock as p, createElementVNode as c, toDisplayString as m, defineComponent as E, resolveComponent as C, createCommentVNode as I, normalizeClass as O, createVNode as g, withDirectives as b, vModelText as $, vShow as M, Fragment as q, renderList as A, createBlock as v } from "vue";
const _ = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, L = {
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
}, T = L, V = ["color", "role", "aria-labelledby"], z = ["id"], B = ["innerHTML"];
function H(e, t, s, n, i, l) {
  return d(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    color: e.color,
    role: e.role,
    "aria-labelledby": e.icon,
    focusable: "false",
    "aria-hidden": "true",
    class: "c-btn__icon"
  }, [
    c("title", {
      id: e.name || e.icon
    }, m(e.name || e.icon) + " Icon", 9, z),
    c("desc", null, m(e.iconDescription || e.name), 1),
    (d(), p("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, B))
  ], 8, V);
}
const K = /* @__PURE__ */ _(T, [["render", H]]), N = E({
  components: {
    SvgIcon: K
  },
  props: {
    // v-model
    modelValue: {
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
      validator: (e) => typeof e == "function" || typeof e == "object" && typeof e.handler == "function"
    },
    renderOption: {
      type: Function,
      default: (e) => (e == null ? void 0 : e.label) || "",
      required: !1
    }
  },
  emits: ["update:modelValue", "open", "close"],
  data() {
    var e;
    return {
      ddOptions: [],
      // options(from prop) with identifier to be everywhere in the component
      searchInput: this.searchInputText,
      // The value of the search input
      menuIsOpen: !1,
      // true if the dropdown menu is open
      selectedOptions: this.modelValue,
      // All selected options
      currentOptions: [],
      // Current options to display
      filteredOptions: [],
      // All options filtered by the search input
      selectedParent: null,
      // Parent option of the current displayed options
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
      debouncedSearchInputChange: this.debounce(this.handleSearchInputChange, ((e = this.searchOnInput) == null ? void 0 : e.debounceTime) ?? 300)
    };
  },
  watch: {
    modelValue: {
      handler(e = []) {
        if (this.areArraysEqual(this.selectedOptions, e))
          return;
        if (!e.length) {
          this.selectedOptions = [];
          return;
        }
        const [t, s] = this.findDifferenceInArrays(e, this.selectedOptions);
        let n = [...this.selectedOptions];
        s.forEach((i) => {
          const l = n.findIndex(
            (o) => o.__identifier === i.__identifier
          );
          l > -1 && (n = [
            ...n.slice(0, l),
            ...n.slice(l + 1)
          ]);
        }), t.forEach((i) => {
          const l = this.findOptionIdentifier(i, this.ddOptions);
          l && (n = [...n, {
            ...this.cloneOption(i),
            __identifier: l,
            __selected: !0
          }]);
        }), this.multiple || n.length && n[0], this.areArraysEqual(n, this.selectedOptions) || (this.selectedOptions = n);
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
      handler(e, t) {
        const s = t.map((i) => i.__identifier), n = e.map((i) => i.__identifier);
        if ((e.length !== t.length || !n.every((i) => s.includes(i))) && !this.areArraysEqual(e, this.modelValue))
          try {
            this.$emit(
              "update:modelValue",
              this.selectedOptions.map(({ __identifier: i, __selected: l, ...o }) => o)
            );
          } catch (i) {
            console.error("[vs-autocomplete]: Unknown Event ", i);
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
    debounce(e, t) {
      let s;
      return function(...n) {
        const i = this;
        clearTimeout(s), s = setTimeout(() => e.apply(i, n), t);
      };
    },
    cloneOption(e) {
      const t = { ...e };
      return e.children && (t.children = e.children.map((s) => this.cloneOption(s))), t;
    },
    // TODO: Check if all options under parent can be selected - [LATER]
    constructCompData(e = this.options) {
      try {
        const { formattedOptions: t, selectedOptions: s } = this.parseInputOptions(e);
        if (this.modelValue.length) {
          const n = this.modelValue.map((i) => {
            const l = this.findOptionIdentifier(i, t);
            return l ? {
              ...this.cloneOption(i),
              __identifier: l,
              __selected: !0
            } : null;
          }).filter(Boolean);
          this.selectedOptions = this.multiple ? n : n.length ? [n[0]] : [];
        } else
          this.selectedOptions = this.multiple ? s : s.length ? [s[0]] : [];
        if (this.ddOptions = t, this.selectedOptions = s, this.searchInput && !this.filterDataExternally.filterting) {
          const n = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = n, this.filteredOptions = n;
        } else
          this.currentOptions = t, this.filteredOptions = t;
      } catch {
        console.error("[vs-autocomplete]: Options must be a valid JSON Array");
      }
    },
    fetchDataExternally() {
      let e = !1, t = typeof this.searchOnInput == "function" ? this.searchOnInput : typeof this.searchOnInput == "object" ? this.searchOnInput.handler : null;
      if (t && this.searchInput.length >= this.filterDataExternally.minSearchLength) {
        const s = t(this.searchInput);
        s && typeof s.then == "function" && (e = !0, this.filterDataExternally.filterting = !0, s.then((n) => {
          Array.isArray(n) ? this.constructCompData(n) : console.error("[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options");
        }).catch((n) => {
          console.error("[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options", n), this.currentOptions = this.ddOptions, this.filteredOptions = this.ddOptions, this.selectedParent = null;
        }).finally(() => {
          this.filterDataExternally.filterting = !1;
        }));
      }
      return e;
    },
    handleSearchInputChange() {
      if (!this.searchInput) {
        this.currentOptions = this.ddOptions, this.filteredOptions = this.ddOptions, this.selectedParent = null;
        return;
      }
      this.fetchDataExternally() || (this.searchInput && (this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions)), this.filteredOptions = this.currentOptions, this.selectedParent = null);
    },
    focusSearchInput() {
      var e;
      (e = this.$refs.searchInput) == null || e.focus();
    },
    toggleDropdownMenu(e) {
      e.stopPropagation(), !this.menuIsOpen && !this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen && (this.menuWasOpen = !0, this.fetchDataExternally()), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var e;
      this.menuIsOpen = !1, (e = this.searchInput) != null && e.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.ddOptions, this.currentOptions = this.ddOptions, this.selectedIndex = -1);
    },
    keepMenuOpen(e) {
      e == null || e.stopPropagation(), this.menuIsOpen || (!this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen && (this.menuWasOpen = !0, this.fetchDataExternally()), this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(e) {
      var t;
      (t = e.path || e.composedPath()) != null && t.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(e = [], t = [], s = []) {
      const n = [];
      return e.forEach((i) => {
        var h;
        const l = [...t, i.id ?? i.label], o = this.cloneOption(i);
        if (o.__identifier = l.join("__"), n.push(o), (h = o.children) != null && h.length) {
          const { formattedOptions: u } = this.parseInputOptions(o.children, l, s);
          o.children = u;
        } else
          o.selected && s.push({
            ...o,
            __selected: !0
          });
      }), { formattedOptions: n, selectedOptions: s };
    },
    isOptionSelected(e) {
      return this.selectedOptions.findIndex((t) => t.__identifier === e.__identifier) > -1;
    },
    hasSelectedOptions(e) {
      return e.some(
        (t) => {
          var s;
          return (s = t.children) != null && s.length ? this.hasSelectedOptions(t.children) : this.isOptionSelected(t);
        }
      );
    },
    showPreviousOptions() {
      this.goToPreviousOptions(), this.selectedIndex = this.selectedParent ? 1 : 0, this.focusSearchInput();
    },
    goToPreviousOptions(e = null, t = this.filteredOptions) {
      var s;
      for (const n of t)
        if ((s = n.children) != null && s.length) {
          if (n.__identifier === this.selectedParent.__identifier && n.children.length === this.currentOptions.length) {
            this.currentOptions = t, this.selectedParent = e;
            return;
          }
          this.goToPreviousOptions(n, n.children);
        }
    },
    filterMatchingOptions(e, t) {
      var n;
      let s = [];
      for (const i of t) {
        const { __identifier: l, __selected: o, ...h } = i, u = this.searchOptionMatcher(e, h);
        if (typeof u == "boolean" ? u : i.label.toLowerCase().includes(e.toLowerCase()))
          s.push(i);
        else if ((n = i.children) != null && n.length) {
          const a = this.filterMatchingOptions(e, i.children);
          a.length && s.push({ ...i, children: a });
        }
      }
      return s;
    },
    selectOption(e) {
      var s;
      const t = this.currentOptions[e];
      if ((s = t.children) != null && s.length) {
        this.selectedParent = t, this.currentOptions = t.children, this.selectedIndex = 1;
        return;
      }
      if (t.__selected || this.isOptionSelected(t, this.selectedParent)) {
        if (this.multiple) {
          const n = this.selectedOptions.findIndex(
            (i) => i.__identifier === t.__identifier
          );
          n > -1 && (this.selectedOptions = [
            ...this.selectedOptions.slice(0, n),
            ...this.selectedOptions.slice(n + 1)
          ]);
        } else
          this.selectedOptions = [];
        this.currentOptions[e].__selected = !1;
      } else {
        if (this.multiple)
          this.selectedOptions = [...this.selectedOptions, t];
        else {
          const n = this.currentOptions.findIndex(
            (i) => i.__selected === !0
          );
          n > -1 && (this.currentOptions[n].__selected = !1), this.selectedOptions = [t], this.closeDropdownMenu();
        }
        this.currentOptions[e].__selected = !0;
      }
      this.selectedIndex = this.selectedParent ? e + 1 : e, this.focusSearchInput();
    },
    handleKeyDown(e) {
      var s, n, i, l, o, h, u;
      const { key: t } = e;
      if (t === "Escape")
        this.closeDropdownMenu();
      else if (t === "Enter" || t.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(e), t === "Enter") {
          if (e.preventDefault(), e.stopPropagation(), this.maxSelectableCount && ((s = this.selectedOptions) == null ? void 0 : s.length) >= this.maxSelectableCount)
            return;
          if (this.selectedParent && this.selectedIndex === 0)
            this.showPreviousOptions();
          else if (this.selectedIndex !== -1) {
            const a = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((n = this.currentOptions[a]) != null && n.disabled)) {
              const r = (i = this.selectedParent) == null ? void 0 : i.label;
              this.selectOption(a), r !== ((l = this.selectedParent) == null ? void 0 : l.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (t === "ArrowUp") {
        if (this.selectedIndex === 0) {
          const r = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? r : r - 1;
        } else
          this.selectedIndex--;
        const a = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        a == null || a.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else if (t === "ArrowRight") {
        const a = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((o = this.currentOptions[a]) != null && o.disabled) && ((u = (h = this.currentOptions[a]) == null ? void 0 : h.children) != null && u.length) && (this.selectOption(a), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const a = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? a : a - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
        const r = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        r == null || r.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else
        t === "ArrowLeft" && this.selectedParent && this.showPreviousOptions();
    },
    /**
     * Returns the identifier of the matched option.
     * @param option Option from v-model. This doesn't have internal keys like __identifier
     * @param options constructed options
     */
    findOptionIdentifier(e, t) {
      var s;
      for (const n of t)
        if ((s = n.children) != null && s.length) {
          const i = this.findOptionIdentifier(e, n.children);
          if (i)
            return i;
        } else if (this.areObjectsEqual(n, e))
          return n.__identifier;
      return null;
    },
    /**
     * check if two objects are equal
     */
    areObjectsEqual(e, t) {
      if (e === t)
        return !0;
      if (typeof e != typeof t || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
        return !1;
      if (Array.isArray(e))
        return e.length === t.length && e.every((l) => t.some((o) => this.areObjectsEqual(l, o)));
      const s = ["__identifier", "__selected", "children"], n = Object.keys(e).filter((l) => !s.includes(l)), i = Object.keys(t).filter((l) => !s.includes(l));
      if (n.length !== i.length)
        return !1;
      for (let l of n)
        if (i.includes(l)) {
          if (typeof e[l] == "object") {
            if (!this.areObjectsEqual(e[l], t[l]))
              return !1;
          } else if (e[l] !== t[l])
            return !1;
        } else
          return !1;
      return !0;
    },
    /**
     * check if two arrays are equal
     */
    areArraysEqual(e, t) {
      if (e === t)
        return !0;
      if (e.length !== t.length)
        return !1;
      const s = [...e].sort((i, l) => i.label.localeCompare(l.label)), n = [...t].sort((i, l) => i.label.localeCompare(l.label));
      for (let i = 0; i < s.length; i++)
        if (!this.areObjectsEqual(s[i], n[i]))
          return !1;
      return !0;
    },
    /**
     * Finds the difference between two arrays and returns the elements that are present in arr1 but not in arr2 and vice versa in a tuple.
     * Have to depend on areArraysEqual method & areObjecteEqual method as objects in arr1(from prop) wouldn't have internal keys like __indentifer to easily validate
     * @param newValue new value(v-model) prop value
     * @param selectedOptions current selectedOptions
     */
    findDifferenceInArrays(e, t) {
      const s = e.filter((i) => !t.some((l) => this.areObjectsEqual(i, l))), n = t.filter((i) => !e.some((l) => this.areObjectsEqual(l, i)));
      return [s, n];
    }
  }
}), R = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, F = { class: "v-dd" }, W = ["for", "id"], U = ["aria-labelledby"], G = ["aria-expanded", "aria-owns", "aria-labelledby"], J = ["placeholder", "id", "aria-labelledby", "aria-controls", "aria-activedescendant"], Q = ["innerHTML"], X = ["id", "aria-labelledby", "aria-multiselectable"], Y = {
  key: 0,
  class: "v-dd-option",
  disabled: "disabled"
}, Z = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, j = ["id"], x = { class: "u-truncate label" }, ee = ["id", "onClick", "aria-selected", "disabled"], te = ["innerHTML"];
function ne(e, t, s, n, i, l) {
  var h, u, a;
  const o = C("svg-icon");
  return d(), p("div", R, [
    c("div", F, [
      c("label", {
        for: "v-dd-search__input" + e.uniqueId,
        id: "v-dd-label" + e.uniqueId
      }, m(e.label), 9, W),
      e.labelHint ? (d(), p("div", {
        key: 0,
        class: "v-dd-label-hint",
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, m(e.labelHint), 9, U)) : I("", !0),
      c("div", {
        class: O("v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...r) => e.toggleDropdownMenu && e.toggleDropdownMenu(...r)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + e.menuIsOpen,
        "aria-owns": "v-dd-options-menu" + e.uniqueId,
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, [
        g(o, {
          icon: "zd-search",
          name: "Search"
        }),
        b(c("input", {
          ref: "searchInput",
          type: "text",
          placeholder: e.placeholder,
          autocomplete: "off",
          id: "v-dd-search__input" + e.uniqueId,
          class: O("c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.searchInput = r),
          onClick: t[1] || (t[1] = (...r) => e.keepMenuOpen && e.keepMenuOpen(...r)),
          onKeydown: t[2] || (t[2] = (...r) => e.handleKeyDown && e.handleKeyDown(...r)),
          role: "combobox",
          "aria-labelledby": "v-dd-label" + e.uniqueId,
          "aria-autocomplete": "list",
          "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1,
          "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
        }, null, 42, J), [
          [$, e.searchInput]
        ]),
        b(c("div", {
          class: O("c-txt u-truncate" + ((h = e.selectedOptions) != null && h.length ? "" : " placeholder")),
          innerHTML: (u = e.selectedOptions) != null && u.length ? e.selectedOptions.map((r) => r.label).join(", ") : e.placeholder
        }, null, 10, Q), [
          [M, !e.menuIsOpen]
        ]),
        g(o, {
          icon: "zd-down-pointer",
          name: e.menuIsOpen ? "Up arrow" : "Down arrow",
          class: O(e.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, G)
    ]),
    b(c("ul", {
      ref: "menu",
      id: "v-dd-options-menu" + e.uniqueId,
      class: O(e.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label" + e.uniqueId,
      "aria-multiselectable": !!e.multiple
    }, [
      e.filterDataExternally.filterting ? (d(), p("li", Y, [
        c("span", null, m(e.filterDataExternally.optionLabel), 1)
      ])) : (d(), p(q, { key: 1 }, [
        (a = e.currentOptions) != null && a.length ? I("", !0) : (d(), p("li", Z, [
          c("span", null, m(e.noSearchResultsText), 1)
        ])),
        e.selectedParent ? (d(), p("li", {
          key: 1,
          id: "v-dd-option-0" + e.uniqueId,
          class: O("v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : "")),
          onClick: t[4] || (t[4] = (r) => e.showPreviousOptions()),
          role: "option"
        }, [
          g(o, {
            icon: "zd-down-pointer",
            name: "Left arrow",
            iconDescription: "Click to go back to previous menu",
            color: "#1f73b7"
          }),
          c("span", x, m(e.selectedParent.label), 1)
        ], 10, j)) : I("", !0),
        (d(!0), p(q, null, A(e.currentOptions, (r, f) => {
          var S, w, k, D, P;
          return d(), p("li", {
            key: r.label + "__" + (r.value ?? f),
            id: "v-dd-option-" + (e.selectedParent ? f + 1 : f) + e.uniqueId,
            class: O("v-dd-option" + (e.selectedIndex === (e.selectedParent ? f + 1 : f) ? " active" : "")),
            onClick: (le) => e.selectOption(f),
            role: "option",
            "aria-selected": e.selectedIndex === (e.selectedParent ? f + 1 : f),
            disabled: r.disabled || e.maxSelectableCount && ((S = e.selectedOptions) == null ? void 0 : S.length) >= e.maxSelectableCount && !((w = r.children) != null && w.length) && !e.isOptionSelected(r) ? "disabled" : null
          }, [
            (k = r.children) != null && k.length && e.hasSelectedOptions(r.children) ? (d(), v(o, {
              key: 0,
              icon: "zd-contains",
              name: "Contains",
              color: "#1f73b7"
            })) : I("", !0),
            !((D = r.children) != null && D.length) && e.isOptionSelected(r) ? (d(), v(o, {
              key: 1,
              icon: "zd-check",
              name: "Selected",
              color: "#1f73b7"
            })) : I("", !0),
            c("div", {
              class: "u-truncate",
              innerHTML: e.renderOption(r)
            }, null, 8, te),
            (P = r.children) != null && P.length ? (d(), v(o, {
              key: 2,
              icon: "zd-down-pointer",
              name: "Right arrow",
              iconDescription: "Click to open sub-menu options"
            })) : I("", !0)
          ], 10, ee);
        }), 128))
      ], 64))
    ], 10, X), [
      [M, e.menuIsOpen]
    ])
  ], 512);
}
const ie = /* @__PURE__ */ _(N, [["render", ne], ["__scopeId", "data-v-76494a1c"]]), se = {
  install(e, t) {
    e.component("VsAutocomplete", ie);
  }
};
let y = null;
typeof window < "u" ? y = window.Vue : typeof global < "u" && (y = global.Vue);
y && y.use && y.use(se);
export {
  ie as default
};
