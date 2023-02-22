(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.id="vs-autocomplete",a.appendChild(document.createTextNode(".v-tree-dropdown[data-v-c9fe99a3]{--primary-color: #1f73b7;--background-color: #1f73b714;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-c9fe99a3]{display:flex;flex-direction:column;row-gap:.5rem}.v-tree-dropdown #v-dd-label[data-v-c9fe99a3],.v-dd-option>.label[data-v-c9fe99a3]{font-weight:600;text-align:left}.v-dd:hover .v-dd-search[data-v-c9fe99a3]{border-color:var(--primary-color)}.margin-0-auto[data-v-c9fe99a3]{margin:0 auto}.c-btn__icon[data-v-c9fe99a3]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-c9fe99a3]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-c9fe99a3]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-c9fe99a3]{padding:.5rem .75rem}.v-dd-search[data-v-c9fe99a3]:active,.v-dd-search[data-v-c9fe99a3]:focus,.v-dd-search[data-v-c9fe99a3]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-c9fe99a3]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-c9fe99a3]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-c9fe99a3]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-c9fe99a3]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-c9fe99a3]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-c9fe99a3],.v-dd-search>div[data-v-c9fe99a3]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-c9fe99a3]{border:none;outline:none}.v-dd-input.hide[data-v-c9fe99a3]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-c9fe99a3]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-c9fe99a3 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}#v-dd-options-menu>li[data-v-c9fe99a3]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}#v-dd-options-menu.compact>li[data-v-c9fe99a3]{padding:.5rem 1.25rem}#v-dd-options-menu>li.parent-option[data-v-c9fe99a3]{border-bottom:var(--border);padding:.5rem .75rem}#v-dd-options-menu.compact>li.parent-option[data-v-c9fe99a3]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-c9fe99a3],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-c9fe99a3]{position:absolute}.v-dd-option>span[data-v-c9fe99a3]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-c9fe99a3],.v-dd-option[disabled=disabled][data-v-c9fe99a3]{user-select:none;-webkit-user-select:none;pointer-events:none;opacity:.7}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-c9fe99a3]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-c9fe99a3]:hover,.v-dd-option[data-v-c9fe99a3]:focus,.v-dd-option.active[data-v-c9fe99a3]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-c9fe99a3]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-c9fe99a3{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { openBlock as c, createElementBlock as a, createElementVNode as r, toDisplayString as O, resolveComponent as S, normalizeClass as h, createVNode as I, withDirectives as _, vModelText as P, vShow as y, createCommentVNode as f, Fragment as M, renderList as x, createBlock as g, pushScopeId as C, popScopeId as D } from "vue";
const k = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
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
}, T = L, z = ["color", "role", "aria-labelledby", "aria-hidden"], A = ["id"], B = ["innerHTML"];
function V(e, t, s, o, n, l) {
  return c(), a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    color: e.color,
    role: e.role,
    "aria-labelledby": e.icon,
    focusable: "false",
    "aria-hidden": !e.focusable,
    class: "c-btn__icon"
  }, [
    r("title", {
      id: e.name || e.icon
    }, O(e.name || e.icon) + " Icon", 9, A),
    r("desc", null, O(e.iconDescription || e.name), 1),
    (c(), a("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, B))
  ], 8, z);
}
const E = /* @__PURE__ */ k(T, [["render", V]]);
const q = {
  components: {
    SvgIcon: E
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
    value: {
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
    keepMenuOpenOnRender: {
      type: Boolean,
      default: !1,
      required: !1
    },
    compact: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
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
      currentIndex: -1
      // Index of the current prog focussed option
    };
  },
  watch: {
    menuIsOpen() {
      this.menuIsOpen ? document.addEventListener("click", this.closeDropdownMenuOnBlur) : document.removeEventListener("click", this.closeDropdownMenuOnBlur);
    },
    searchInput() {
      this.handleSearchInputChange();
    },
    selectedOptions() {
      this.$emit(
        "input",
        this.selectedOptions.map(({ __identifier: e, __selected: t, ...s }) => s)
      );
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
    /**
     * Check if all options under parent can be selected - [LATER]
     */
    constructCompData() {
      try {
        const e = JSON.parse(JSON.stringify(this.options)), { formattedOptions: t, selectedOptions: s } = this.parseInputOptions(e);
        if (this.ddOptions = t, this.selectedOptions = s, this.searchInput) {
          const o = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = o, this.filteredOptions = o;
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
    parseInputOptions(e = [], t = [], s = []) {
      return e.forEach((o) => {
        var l;
        const n = [...t, o.label];
        o.__identifier = n.join("__"), (l = o.children) != null && l.length ? this.parseInputOptions(o.children, n, s) : o.selected && s.push(o);
      }), { formattedOptions: e, selectedOptions: s };
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
    goToPreviousOptions(e = null, t = this.filteredOptions) {
      var s;
      for (const o of t)
        if ((s = o.children) != null && s.length) {
          if (o.__identifier === this.selectedParent.__identifier && o.children.length === this.currentOptions.length) {
            this.currentOptions = t, this.selectedParent = e;
            return;
          }
          this.goToPreviousOptions(o, o.children);
        }
    },
    filterMatchingOptions(e, t) {
      var o;
      let s = [];
      for (const n of t)
        if (n.label.toLowerCase().includes(e.toLowerCase()))
          s.push(n);
        else if ((o = n.children) != null && o.length) {
          const l = this.filterMatchingOptions(e, n.children);
          l.length && s.push({ ...n, children: l });
        }
      return s;
    },
    selectOption(e) {
      var s;
      const t = this.currentOptions[e];
      if ((s = t.children) != null && s.length)
        this.selectedParent = t, this.currentOptions = t.children;
      else if (t.__selected || this.isOptionSelected(t, this.selectedParent)) {
        if (this.multiple) {
          const o = this.selectedOptions.findIndex(
            (n) => n.__identifier === t.__identifier
          );
          o > -1 && this.selectedOptions.splice(o, 1);
        } else
          this.selectedOptions = [];
        this.currentOptions[e].__selected = !1;
      } else
        this.multiple ? this.selectedOptions.push(t) : (this.selectedOptions = [t], this.closeDropdownMenu()), this.currentOptions[e].__selected = !0;
    },
    handleKeyUp(e) {
      var s, o, n, l, d, u;
      const { key: t } = e;
      if (t === "Escape")
        this.closeDropdownMenu();
      else if (t === "Enter" || t.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(e), t === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const i = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((s = this.currentOptions[i]) != null && s.disabled)) {
              const p = (o = this.selectedParent) == null ? void 0 : o.label;
              this.selectOption(i), p !== ((n = this.selectedParent) == null ? void 0 : n.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (t === "ArrowUp")
        if (this.selectedIndex === 0) {
          const i = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? i : i - 1;
        } else
          this.selectedIndex--;
      else if (t === "ArrowRight") {
        const i = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((l = this.currentOptions[i]) != null && l.disabled) && ((u = (d = this.currentOptions[i]) == null ? void 0 : d.children) != null && u.length) && (this.selectOption(i), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const i = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? i : i - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        t === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}, N = (e) => (C("data-v-c9fe99a3"), e = e(), D(), e), U = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, K = { class: "v-dd" }, H = {
  for: "v-dd-search__input",
  id: "v-dd-label"
}, R = ["aria-expanded"], j = ["aria-controls", "aria-activedescendant"], J = ["innerHTML"], F = ["aria-multiselectable"], G = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, Q = /* @__PURE__ */ N(() => /* @__PURE__ */ r("span", null, "No options found.", -1)), W = [
  Q
], X = { class: "u-truncate label" }, Y = ["id", "onClick", "aria-selected", "disabled"], Z = { class: "u-truncate" };
function $(e, t, s, o, n, l) {
  var u;
  const d = S("svg-icon");
  return c(), a("div", U, [
    r("div", K, [
      r("label", H, O(s.label), 1),
      r("div", {
        class: h("v-dd-search" + (n.menuIsOpen ? " active" : "") + (s.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...i) => l.toggleDropdownMenu && l.toggleDropdownMenu(...i)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + n.menuIsOpen,
        "aria-owns": "v-dd-options-menu",
        "aria-labelledby": "v-dd-label"
      }, [
        I(d, {
          icon: "zd-search",
          name: "Search"
        }),
        _(r("input", {
          ref: "searchInput",
          type: "text",
          autocomplete: "new-password",
          id: "v-dd-search__input",
          class: h("c-txt v-dd-input" + (n.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (i) => n.searchInput = i),
          onClick: t[1] || (t[1] = (...i) => l.keepMenuOpen && l.keepMenuOpen(...i)),
          onKeyup: t[2] || (t[2] = (...i) => l.handleKeyUp && l.handleKeyUp(...i)),
          role: "combobox",
          "aria-labelledby": "v-dd-label",
          "aria-autocomplete": "list",
          "aria-controls": n.menuIsOpen ? "v-dd-options-menu" : !1,
          "aria-activedescendant": n.menuIsOpen ? "v-dd-option-" + n.selectedIndex : !1
        }, null, 42, j), [
          [P, n.searchInput]
        ]),
        _(r("div", {
          class: "c-txt u-truncate",
          innerHTML: n.selectedOptions.map((i) => i.label).join(", ")
        }, null, 8, J), [
          [y, !n.menuIsOpen]
        ]),
        I(d, {
          icon: "zd-down-pointer",
          name: n.menuIsOpen ? "Up arrow" : "Down arrow",
          class: h(n.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, R)
    ]),
    _(r("ul", {
      ref: "menu",
      id: "v-dd-options-menu",
      class: h(s.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label",
      "aria-multiselectable": !!s.multiple
    }, [
      (u = n.currentOptions) != null && u.length ? f("", !0) : (c(), a("li", G, W)),
      n.selectedParent ? (c(), a("li", {
        key: 1,
        id: "v-dd-option-0",
        class: h("v-dd-option parent-option" + (n.selectedIndex === 0 ? " active" : "")),
        onClick: t[4] || (t[4] = (i) => l.goToPreviousOptions()),
        role: "option"
      }, [
        I(d, {
          icon: "zd-down-pointer",
          name: "Left arrow",
          iconDescription: "Click to go back to previous menu",
          color: "#1f73b7"
        }),
        r("span", X, O(n.selectedParent.label), 1)
      ], 2)) : f("", !0),
      (c(!0), a(M, null, x(n.currentOptions, (i, p) => {
        var v, b, w;
        return c(), a("li", {
          key: i.label,
          id: "v-dd-option-" + (n.selectedParent ? p + 1 : p),
          class: h("v-dd-option" + (n.selectedIndex === (n.selectedParent ? p + 1 : p) ? " active" : "")),
          onClick: (ne) => l.selectOption(p),
          role: "option",
          "aria-selected": n.selectedIndex === (n.selectedParent ? p + 1 : p),
          disabled: i.disabled
        }, [
          (v = i.children) != null && v.length && l.hasSelectedOptions(i.children) ? (c(), g(d, {
            key: 0,
            icon: "zd-contains",
            name: "Contains",
            color: "#1f73b7"
          })) : f("", !0),
          !((b = i.children) != null && b.length) && l.isOptionSelected(i) ? (c(), g(d, {
            key: 1,
            icon: "zd-check",
            name: "Selected",
            color: "#1f73b7"
          })) : f("", !0),
          r("span", Z, O(i.label), 1),
          (w = i.children) != null && w.length ? (c(), g(d, {
            key: 2,
            icon: "zd-down-pointer",
            name: "Right arrow",
            iconDescription: "Click to open sub-menu options"
          })) : f("", !0)
        ], 10, Y);
      }), 128))
    ], 10, F), [
      [y, n.menuIsOpen]
    ])
  ], 512);
}
const ee = /* @__PURE__ */ k(q, [["render", $], ["__scopeId", "data-v-c9fe99a3"]]), te = {
  install(e, t) {
    e.component("VsAutocomplete", ee);
  }
};
let m = null;
typeof window < "u" ? m = window.Vue : typeof global < "u" && (m = global.Vue);
m && m.use && m.use(te);
export {
  ee as default
};
