(function(){"use strict";try{if(typeof document<"u"){var d=document.createElement("style");d.id="vs-autocomplete",d.appendChild(document.createTextNode(".v-tree-dropdown[data-v-82b9bf4d]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-82b9bf4d]{display:flex;flex-direction:column}#v-dd-label[data-v-82b9bf4d],.v-dd-option>.label[data-v-82b9bf4d]{font-weight:600;text-align:left}#v-dd-label[data-v-82b9bf4d],#v-dd-label+.v-dd-label-hint[data-v-82b9bf4d]{line-height:1.45;text-align:left}.v-tree-dropdown #v-dd-label+.v-dd-label-hint[data-v-82b9bf4d]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-82b9bf4d]{border-color:var(--primary-color)}.margin-0-auto[data-v-82b9bf4d]{margin:0 auto}.c-btn__icon[data-v-82b9bf4d]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-82b9bf4d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-82b9bf4d]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-82b9bf4d]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-82b9bf4d]:active,.v-dd-search[data-v-82b9bf4d]:focus,.v-dd-search[data-v-82b9bf4d]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-82b9bf4d]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-82b9bf4d]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-82b9bf4d]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-82b9bf4d]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-82b9bf4d]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-82b9bf4d],.v-dd-search>div[data-v-82b9bf4d]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-82b9bf4d]{border:none;outline:none}.v-dd-input.hide[data-v-82b9bf4d]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-82b9bf4d]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-82b9bf4d var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-82b9bf4d]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}#v-dd-options-menu.compact>li[data-v-82b9bf4d]{padding:.5rem 1.25rem}#v-dd-options-menu>li.parent-option[data-v-82b9bf4d]{border-bottom:var(--border);padding:.5rem .75rem}#v-dd-options-menu.compact>li.parent-option[data-v-82b9bf4d]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-82b9bf4d],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-82b9bf4d]{position:absolute}.v-dd-option>span[data-v-82b9bf4d]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-82b9bf4d],.v-dd-option[disabled=disabled][data-v-82b9bf4d]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-82b9bf4d]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-82b9bf4d]:hover,.v-dd-option[data-v-82b9bf4d]:focus,.v-dd-option.active[data-v-82b9bf4d]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-82b9bf4d]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-82b9bf4d{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(d)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as d, createElementBlock as p, createElementVNode as a, toDisplayString as h, defineComponent as C, resolveComponent as $, createCommentVNode as u, normalizeClass as f, createVNode as I, withDirectives as g, vModelText as D, vShow as P, Fragment as _, renderList as T, createBlock as b } from "vue";
const M = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, o] of t)
    i[s] = o;
  return i;
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
}, z = L, V = ["color", "role", "aria-labelledby"], B = ["id"], q = ["innerHTML"];
function A(e, t, i, s, o, l) {
  return d(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    color: e.color,
    role: e.role,
    "aria-labelledby": e.icon,
    focusable: "false",
    "aria-hidden": "true",
    class: "c-btn__icon"
  }, [
    a("title", {
      id: e.name || e.icon
    }, h(e.name || e.icon) + " Icon", 9, B),
    a("desc", null, h(e.iconDescription || e.name), 1),
    (d(), p("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, q))
  ], 8, V);
}
const E = /* @__PURE__ */ M(z, [["render", A]]), N = C({
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
      this.menuIsOpen ? (document.addEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("open", this.$refs.dropdown, this.$refs.menu)) : (document.removeEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("close", this.$refs.dropdown, this.$refs.menu));
    },
    searchInput() {
      this.handleSearchInputChange();
    },
    selectedOptions: {
      handler(e, t) {
        const i = t.map((o) => o.__identifier), s = e.map((o) => o.__identifier);
        if (e.length !== t.length || !s.every((o) => i.includes(o)))
          try {
            this.$emit(
              "update:modelValue",
              this.selectedOptions.map(({ __identifier: o, __selected: l, ...r }) => r)
            );
          } catch (o) {
            console.log("Unknown Event ", o);
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
        var l;
        const o = [...t, s.label];
        s.__identifier = o.join("__"), (l = s.children) != null && l.length ? this.parseInputOptions(s.children, o, i) : s.selected && i.push(s);
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
      for (const o of t)
        if (o.label.toLowerCase().includes(e.toLowerCase()))
          i.push(o);
        else if ((s = o.children) != null && s.length) {
          const l = this.filterMatchingOptions(e, o.children);
          l.length && i.push({ ...o, children: l });
        }
      return i;
    },
    selectOption(e) {
      var i;
      const t = this.currentOptions[e];
      if ((i = t.children) != null && i.length)
        this.selectedParent = t, this.currentOptions = t.children;
      else if (t.__selected || this.isOptionSelected(t, this.selectedParent)) {
        if (this.multiple) {
          const s = this.selectedOptions.findIndex(
            (o) => o.__identifier === t.__identifier
          );
          s > -1 && (this.selectedOptions = [
            ...this.selectedOptions.slice(0, s),
            ...this.selectedOptions.slice(s + 1)
          ]);
        } else
          this.selectedOptions = [];
        this.currentOptions[e].__selected = !1;
      } else
        this.multiple ? this.selectedOptions = [...this.selectedOptions, t] : (this.selectedOptions = [t], this.closeDropdownMenu()), this.currentOptions[e].__selected = !0;
    },
    handleKeyDown(e) {
      var i, s, o, l, r, O;
      const { key: t } = e;
      if (t === "Escape")
        this.closeDropdownMenu();
      else if (t === "Enter" || t.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(e), t === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const n = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((i = this.currentOptions[n]) != null && i.disabled)) {
              const c = (s = this.selectedParent) == null ? void 0 : s.label;
              this.selectOption(n), c !== ((o = this.selectedParent) == null ? void 0 : o.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (t === "ArrowUp")
        if (this.selectedIndex === 0) {
          const n = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? n : n - 1;
        } else
          this.selectedIndex--;
      else if (t === "ArrowRight") {
        const n = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((l = this.currentOptions[n]) != null && l.disabled) && ((O = (r = this.currentOptions[n]) == null ? void 0 : r.children) != null && O.length) && (this.selectOption(n), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const n = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? n : n - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        t === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}), H = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, R = { class: "v-dd" }, K = {
  for: "v-dd-search__input",
  id: "v-dd-label"
}, U = {
  key: 0,
  class: "v-dd-label-hint",
  "aria-labelledby": "v-dd-label"
}, j = ["aria-expanded"], J = ["aria-controls", "aria-activedescendant"], F = ["innerHTML"], G = ["aria-multiselectable"], Q = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, W = { class: "u-truncate label" }, X = ["id", "onClick", "aria-selected", "disabled"], Y = { class: "u-truncate" };
function Z(e, t, i, s, o, l) {
  var O;
  const r = $("svg-icon");
  return d(), p("div", H, [
    a("div", R, [
      a("label", K, h(e.label), 1),
      e.labelHint ? (d(), p("div", U, h(e.labelHint), 1)) : u("", !0),
      a("div", {
        class: f("v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...n) => e.toggleDropdownMenu && e.toggleDropdownMenu(...n)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + e.menuIsOpen,
        "aria-owns": "v-dd-options-menu",
        "aria-labelledby": "v-dd-label"
      }, [
        I(r, {
          icon: "zd-search",
          name: "Search"
        }),
        g(a("input", {
          ref: "searchInput",
          type: "text",
          autocomplete: "off",
          id: "v-dd-search__input",
          class: f("c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (n) => e.searchInput = n),
          onClick: t[1] || (t[1] = (...n) => e.keepMenuOpen && e.keepMenuOpen(...n)),
          onKeydown: t[2] || (t[2] = (...n) => e.handleKeyDown && e.handleKeyDown(...n)),
          role: "combobox",
          "aria-labelledby": "v-dd-label",
          "aria-autocomplete": "list",
          "aria-controls": e.menuIsOpen ? "v-dd-options-menu" : !1,
          "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
        }, null, 42, J), [
          [D, e.searchInput]
        ]),
        g(a("div", {
          class: "c-txt u-truncate",
          innerHTML: e.selectedOptions.map((n) => n.label).join(", ")
        }, null, 8, F), [
          [P, !e.menuIsOpen]
        ]),
        I(r, {
          icon: "zd-down-pointer",
          name: e.menuIsOpen ? "Up arrow" : "Down arrow",
          class: f(e.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, j)
    ]),
    g(a("ul", {
      ref: "menu",
      id: "v-dd-options-menu",
      class: f(e.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label",
      "aria-multiselectable": !!e.multiple
    }, [
      (O = e.currentOptions) != null && O.length ? u("", !0) : (d(), p("li", Q, [
        a("span", null, h(e.noSearchResultsText), 1)
      ])),
      e.selectedParent ? (d(), p("li", {
        key: 1,
        id: "v-dd-option-0",
        class: f("v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : "")),
        onClick: t[4] || (t[4] = (n) => e.goToPreviousOptions()),
        role: "option"
      }, [
        I(r, {
          icon: "zd-down-pointer",
          name: "Left arrow",
          iconDescription: "Click to go back to previous menu",
          color: "#1f73b7"
        }),
        a("span", W, h(e.selectedParent.label), 1)
      ], 2)) : u("", !0),
      (d(!0), p(_, null, T(e.currentOptions, (n, c) => {
        var v, w, y, k, S;
        return d(), p("li", {
          key: n.label,
          id: "v-dd-option-" + (e.selectedParent ? c + 1 : c),
          class: f("v-dd-option" + (e.selectedIndex === (e.selectedParent ? c + 1 : c) ? " active" : "")),
          onClick: (te) => e.selectOption(c),
          role: "option",
          "aria-selected": e.selectedIndex === (e.selectedParent ? c + 1 : c),
          disabled: n.disabled || e.maxSelectableCount && ((v = e.selectedOptions) == null ? void 0 : v.length) >= e.maxSelectableCount && !((w = n.children) != null && w.length) && !e.isOptionSelected(n) ? "disabled" : null
        }, [
          (y = n.children) != null && y.length && e.hasSelectedOptions(n.children) ? (d(), b(r, {
            key: 0,
            icon: "zd-contains",
            name: "Contains",
            color: "#1f73b7"
          })) : u("", !0),
          !((k = n.children) != null && k.length) && e.isOptionSelected(n) ? (d(), b(r, {
            key: 1,
            icon: "zd-check",
            name: "Selected",
            color: "#1f73b7"
          })) : u("", !0),
          a("span", Y, h(n.label), 1),
          (S = n.children) != null && S.length ? (d(), b(r, {
            key: 2,
            icon: "zd-down-pointer",
            name: "Right arrow",
            iconDescription: "Click to open sub-menu options"
          })) : u("", !0)
        ], 10, X);
      }), 128))
    ], 10, G), [
      [P, e.menuIsOpen]
    ])
  ], 512);
}
const x = /* @__PURE__ */ M(N, [["render", Z], ["__scopeId", "data-v-82b9bf4d"]]), ee = {
  install(e, t) {
    e.component("VsAutocomplete", x);
  }
};
let m = null;
typeof window < "u" ? m = window.Vue : typeof global < "u" && (m = global.Vue);
m && m.use && m.use(ee);
export {
  x as default
};
