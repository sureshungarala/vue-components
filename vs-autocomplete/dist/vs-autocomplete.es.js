(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.id="vs-autocomplete",a.appendChild(document.createTextNode(".v-tree-dropdown[data-v-831d23ca]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-831d23ca]{display:flex;flex-direction:column}.v-dd>label[data-v-831d23ca],.v-dd-option>.label[data-v-831d23ca]{font-weight:600;text-align:left}.v-dd>label[data-v-831d23ca],.v-dd>label+.v-dd-label-hint[data-v-831d23ca]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-831d23ca]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-831d23ca]{border-color:var(--primary-color)}.c-btn__icon[data-v-831d23ca]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-831d23ca]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-831d23ca]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-831d23ca]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-831d23ca]:active,.v-dd-search[data-v-831d23ca]:focus,.v-dd-search[data-v-831d23ca]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-831d23ca]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-831d23ca]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-831d23ca]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-831d23ca]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-831d23ca]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-831d23ca],.v-dd-search>div[data-v-831d23ca]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-search>div.placeholder[data-v-831d23ca]{color:#0000008a;text-align:left}.v-dd-input[data-v-831d23ca]{border:none;outline:none}.v-dd-input.hide[data-v-831d23ca]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-831d23ca]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-831d23ca var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-831d23ca]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-831d23ca]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-831d23ca]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-831d23ca]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-831d23ca],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-831d23ca]{position:absolute}.v-dd-option>span[data-v-831d23ca]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-831d23ca],.v-dd-option[disabled=disabled][data-v-831d23ca]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-831d23ca]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-831d23ca]:hover,.v-dd-option[data-v-831d23ca]:focus,.v-dd-option.active[data-v-831d23ca]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-831d23ca]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-831d23ca{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { openBlock as a, createElementBlock as p, createElementVNode as c, toDisplayString as m, defineComponent as C, resolveComponent as $, createCommentVNode as I, normalizeClass as O, createVNode as g, withDirectives as y, vModelText as D, vShow as P, Fragment as E, renderList as A, createBlock as v } from "vue";
const M = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, n] of t)
    i[s] = n;
  return i;
}, V = {
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
}, L = V, T = ["color", "role", "aria-labelledby"], z = ["id"], B = ["innerHTML"];
function N(e, t, i, s, n, o) {
  return a(), p("svg", {
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
    (a(), p("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, B))
  ], 8, T);
}
const H = /* @__PURE__ */ M(L, [["render", N]]), R = C({
  components: {
    SvgIcon: H
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
    }
  },
  emits: ["update:modelValue", "open", "close"],
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
      selectedOptions: this.modelValue,
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
    modelValue: {
      handler(e = []) {
        if (!this.areArraysEqual(this.selectedOptions, e))
          if (!e.length)
            this.selectedOptions = [];
          else {
            const [t, i] = this.findDifferenceInArrays(e, this.selectedOptions);
            let s = typeof structuredClone == "function" ? structuredClone(this.selectedOptions) : JSON.parse(JSON.stringify(this.selectedOptions));
            i.forEach((n) => {
              const o = s.findIndex(
                (d) => d.__identifier === n.__identifier
              );
              o > -1 && (s = [
                ...s.slice(0, o),
                ...s.slice(o + 1)
              ]);
            }), t.forEach((n) => {
              const o = this.findOptionIdentifier(n, this.ddOptions);
              o && (s = [...s, {
                ...n,
                __identifier: o,
                __selected: !0
              }]);
            }), this.areArraysEqual(s, this.selectedOptions) || (this.selectedOptions = s);
          }
      },
      deep: !0
    },
    menuIsOpen() {
      this.menuIsOpen ? (document.addEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("open", this.$refs.dropdown, this.$refs.menu)) : (document.removeEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("close", this.$refs.dropdown, this.$refs.menu));
    },
    searchInput() {
      this.handleSearchInputChange();
    },
    selectedOptions: {
      handler(e, t) {
        const i = t.map((n) => n.__identifier), s = e.map((n) => n.__identifier);
        if ((e.length !== t.length || !s.every((n) => i.includes(n))) && !this.areArraysEqual(e, this.modelValue))
          try {
            this.$emit(
              "update:modelValue",
              this.selectedOptions.map(({ __identifier: n, __selected: o, ...d }) => d)
            );
          } catch (n) {
            console.error("Unknown Event ", n);
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
        const e = JSON.parse(JSON.stringify(this.options)), { formattedOptions: t, selectedOptions: i } = this.parseInputOptions(e);
        if (this.ddOptions = t, this.selectedOptions = i, this.searchInput) {
          const s = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = s, this.filteredOptions = s;
        } else
          this.currentOptions = t, this.filteredOptions = t;
      } catch {
        console.error("[vs-autocomplete]: Options must be a valid JSON Array");
      }
    },
    handleSearchInputChange() {
      this.searchInput ? this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions) : this.currentOptions = this.ddOptions, this.filteredOptions = this.currentOptions, this.selectedParent = null;
    },
    focusSearchInput() {
      var e;
      (e = this.$refs.searchInput) == null || e.focus();
    },
    toggleDropdownMenu(e) {
      e.stopPropagation(), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var e;
      this.menuIsOpen = !1, (e = this.searchInput) != null && e.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.ddOptions, this.currentOptions = this.ddOptions, this.selectedIndex = -1);
    },
    keepMenuOpen(e) {
      e == null || e.stopPropagation(), this.menuIsOpen || (this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(e) {
      var t;
      (t = e.path || e.composedPath()) != null && t.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(e = [], t = [], i = []) {
      return e.forEach((s) => {
        var o;
        const n = [...t, s.label];
        typeof s.value < "u" && n.push(s.value), s.__identifier = n.join("__"), (o = s.children) != null && o.length ? this.parseInputOptions(s.children, n, i) : s.selected && i.push(s);
      }), { formattedOptions: e, selectedOptions: i };
    },
    isOptionSelected(e) {
      return this.selectedOptions.findIndex((t) => t.__identifier === e.__identifier) > -1;
    },
    hasSelectedOptions(e) {
      return e.some(
        (t) => {
          var i;
          return (i = t.children) != null && i.length ? this.hasSelectedOptions(t.children) : this.isOptionSelected(t);
        }
      );
    },
    showPreviousOptions() {
      this.goToPreviousOptions(), this.selectedIndex = this.selectedParent ? 1 : 0, this.focusSearchInput();
    },
    goToPreviousOptions(e = null, t = this.filteredOptions) {
      var i;
      for (const s of t)
        if ((i = s.children) != null && i.length) {
          if (s.__identifier === this.selectedParent.__identifier && s.children.length === this.currentOptions.length) {
            this.currentOptions = t, this.selectedParent = e;
            return;
          }
          this.goToPreviousOptions(s, s.children);
        }
    },
    filterMatchingOptions(e, t) {
      var s;
      let i = [];
      for (const n of t) {
        const { __identifier: o, __selected: d, ...f } = n, h = this.searchOptionMatcher(e, f);
        if (typeof h == "boolean" ? h : n.label.toLowerCase().includes(e.toLowerCase()))
          i.push(n);
        else if ((s = n.children) != null && s.length) {
          const r = this.filterMatchingOptions(e, n.children);
          r.length && i.push({ ...n, children: r });
        }
      }
      return i;
    },
    selectOption(e) {
      var i;
      const t = this.currentOptions[e];
      if ((i = t.children) != null && i.length)
        this.selectedParent = t, this.currentOptions = t.children, this.selectedIndex = 1;
      else {
        if (t.__selected || this.isOptionSelected(t, this.selectedParent)) {
          if (this.multiple) {
            const s = this.selectedOptions.findIndex(
              (n) => n.__identifier === t.__identifier
            );
            s > -1 && (this.selectedOptions = [
              ...this.selectedOptions.slice(0, s),
              ...this.selectedOptions.slice(s + 1)
            ]);
          } else
            this.selectedOptions = [];
          this.currentOptions[e].__selected = !1;
        } else {
          if (this.multiple)
            this.selectedOptions = [...this.selectedOptions, t];
          else {
            const s = this.currentOptions.findIndex(
              (n) => n.__selected === !0
            );
            s > -1 && (this.currentOptions[s].__selected = !1), this.selectedOptions = [t], this.closeDropdownMenu();
          }
          this.currentOptions[e].__selected = !0;
        }
        this.selectedIndex = this.selectedParent ? e + 1 : e, this.focusSearchInput();
      }
    },
    handleKeyDown(e) {
      var i, s, n, o, d, f, h;
      const { key: t } = e;
      if (t === "Escape")
        this.closeDropdownMenu();
      else if (t === "Enter" || t.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(e), t === "Enter") {
          if (this.maxSelectableCount && ((i = this.selectedOptions) == null ? void 0 : i.length) >= this.maxSelectableCount)
            return;
          if (this.selectedParent && this.selectedIndex === 0)
            this.showPreviousOptions();
          else if (this.selectedIndex !== -1) {
            const r = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((s = this.currentOptions[r]) != null && s.disabled)) {
              const l = (n = this.selectedParent) == null ? void 0 : n.label;
              this.selectOption(r), l !== ((o = this.selectedParent) == null ? void 0 : o.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (t === "ArrowUp") {
        if (this.selectedIndex === 0) {
          const l = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? l : l - 1;
        } else
          this.selectedIndex--;
        const r = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        r == null || r.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      } else if (t === "ArrowRight") {
        const r = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((d = this.currentOptions[r]) != null && d.disabled) && ((h = (f = this.currentOptions[r]) == null ? void 0 : f.children) != null && h.length) && (this.selectOption(r), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const r = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? r : r - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
        const l = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        l == null || l.scrollIntoView({
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
      var i;
      for (const s of t)
        if ((i = s.children) != null && i.length) {
          const n = this.findOptionIdentifier(e, s.children);
          if (n)
            return n;
        } else if (this.areObjectsEqual(s, e))
          return s.__identifier;
      return null;
    },
    /**
     * check if two objects are equal
     */
    areObjectsEqual(e, t) {
      if (e === t)
        return !0;
      if (typeof e != typeof t || e === null || t === null)
        return !1;
      const i = Object.keys(e).filter((n) => n !== "__identifier" && n !== "__selected" && n !== "children"), s = Object.keys(t).filter((n) => n !== "__identifier" && n !== "__selected" && n !== "children");
      if (i.length !== s.length)
        return !1;
      for (let n of i)
        if (!s.includes(n) || e[n] !== t[n])
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
      const i = [...e].sort((n, o) => n.label.localeCompare(o.label)), s = [...t].sort((n, o) => n.label.localeCompare(o.label));
      for (let n = 0; n < i.length; n++)
        if (!this.areObjectsEqual(i[n], s[n]))
          return !1;
      return !0;
    },
    /**
     * Finds the difference between two arrays and returns the elements that are present in arr1 but not in arr2 and vice versa in a tuple.
     * Have to depend to areArraysEqual method & areObjecteEqual method as objects in arr1(from prop) wouldn't have internal keys like __indentifer to easily validate
     * @param newValue new value(v-model) prop value
     * @param selectedOptions current selectedOptions
     */
    findDifferenceInArrays(e, t) {
      const i = e.filter((n) => !t.some((o) => this.areObjectsEqual(n, o))), s = t.filter((n) => !e.some((o) => this.areObjectsEqual(o, n)));
      return [i, s];
    }
  }
}), J = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, K = { class: "v-dd" }, U = ["for", "id"], j = ["aria-labelledby"], F = ["aria-expanded", "aria-owns", "aria-labelledby"], G = ["placeholder", "id", "aria-labelledby", "aria-controls", "aria-activedescendant"], Q = ["innerHTML"], W = ["id", "aria-labelledby", "aria-multiselectable"], X = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, Y = ["id"], Z = { class: "u-truncate label" }, x = ["id", "onClick", "aria-selected", "disabled"], ee = { class: "u-truncate" };
function te(e, t, i, s, n, o) {
  var f, h, r;
  const d = $("svg-icon");
  return a(), p("div", J, [
    c("div", K, [
      c("label", {
        for: "v-dd-search__input" + e.uniqueId,
        id: "v-dd-label" + e.uniqueId
      }, m(e.label), 9, U),
      e.labelHint ? (a(), p("div", {
        key: 0,
        class: "v-dd-label-hint",
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, m(e.labelHint), 9, j)) : I("", !0),
      c("div", {
        class: O("v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...l) => e.toggleDropdownMenu && e.toggleDropdownMenu(...l)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + e.menuIsOpen,
        "aria-owns": "v-dd-options-menu" + e.uniqueId,
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, [
        g(d, {
          icon: "zd-search",
          name: "Search"
        }),
        y(c("input", {
          ref: "searchInput",
          type: "text",
          placeholder: e.placeholder,
          autocomplete: "off",
          id: "v-dd-search__input" + e.uniqueId,
          class: O("c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (l) => e.searchInput = l),
          onClick: t[1] || (t[1] = (...l) => e.keepMenuOpen && e.keepMenuOpen(...l)),
          onKeydown: t[2] || (t[2] = (...l) => e.handleKeyDown && e.handleKeyDown(...l)),
          role: "combobox",
          "aria-labelledby": "v-dd-label" + e.uniqueId,
          "aria-autocomplete": "list",
          "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1,
          "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
        }, null, 42, G), [
          [D, e.searchInput]
        ]),
        y(c("div", {
          class: O("c-txt u-truncate" + ((f = e.selectedOptions) != null && f.length ? "" : " placeholder")),
          innerHTML: (h = e.selectedOptions) != null && h.length ? e.selectedOptions.map((l) => l.label).join(", ") : e.placeholder
        }, null, 10, Q), [
          [P, !e.menuIsOpen]
        ]),
        g(d, {
          icon: "zd-down-pointer",
          name: e.menuIsOpen ? "Up arrow" : "Down arrow",
          class: O(e.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, F)
    ]),
    y(c("ul", {
      ref: "menu",
      id: "v-dd-options-menu" + e.uniqueId,
      class: O(e.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label" + e.uniqueId,
      "aria-multiselectable": !!e.multiple
    }, [
      (r = e.currentOptions) != null && r.length ? I("", !0) : (a(), p("li", X, [
        c("span", null, m(e.noSearchResultsText), 1)
      ])),
      e.selectedParent ? (a(), p("li", {
        key: 1,
        id: "v-dd-option-0" + e.uniqueId,
        class: O("v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : "")),
        onClick: t[4] || (t[4] = (l) => e.showPreviousOptions()),
        role: "option"
      }, [
        g(d, {
          icon: "zd-down-pointer",
          name: "Left arrow",
          iconDescription: "Click to go back to previous menu",
          color: "#1f73b7"
        }),
        c("span", Z, m(e.selectedParent.label), 1)
      ], 10, Y)) : I("", !0),
      (a(!0), p(E, null, A(e.currentOptions, (l, u) => {
        var w, S, k, _, q;
        return a(), p("li", {
          key: l.label + "__" + (l.value ?? u),
          id: "v-dd-option-" + (e.selectedParent ? u + 1 : u) + e.uniqueId,
          class: O("v-dd-option" + (e.selectedIndex === (e.selectedParent ? u + 1 : u) ? " active" : "")),
          onClick: (ie) => e.selectOption(u),
          role: "option",
          "aria-selected": e.selectedIndex === (e.selectedParent ? u + 1 : u),
          disabled: l.disabled || e.maxSelectableCount && ((w = e.selectedOptions) == null ? void 0 : w.length) >= e.maxSelectableCount && !((S = l.children) != null && S.length) && !e.isOptionSelected(l) ? "disabled" : null
        }, [
          (k = l.children) != null && k.length && e.hasSelectedOptions(l.children) ? (a(), v(d, {
            key: 0,
            icon: "zd-contains",
            name: "Contains",
            color: "#1f73b7"
          })) : I("", !0),
          !((_ = l.children) != null && _.length) && e.isOptionSelected(l) ? (a(), v(d, {
            key: 1,
            icon: "zd-check",
            name: "Selected",
            color: "#1f73b7"
          })) : I("", !0),
          c("span", ee, m(l.label), 1),
          (q = l.children) != null && q.length ? (a(), v(d, {
            key: 2,
            icon: "zd-down-pointer",
            name: "Right arrow",
            iconDescription: "Click to open sub-menu options"
          })) : I("", !0)
        ], 10, x);
      }), 128))
    ], 10, W), [
      [P, e.menuIsOpen]
    ])
  ], 512);
}
const ne = /* @__PURE__ */ M(R, [["render", te], ["__scopeId", "data-v-831d23ca"]]), se = {
  install(e, t) {
    e.component("VsAutocomplete", ne);
  }
};
let b = null;
typeof window < "u" ? b = window.Vue : typeof global < "u" && (b = global.Vue);
b && b.use && b.use(se);
export {
  ne as default
};
