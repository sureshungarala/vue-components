(function(){"use strict";try{if(typeof document<"u"){var d=document.createElement("style");d.id="vs-autocomplete",d.appendChild(document.createTextNode(".v-tree-dropdown[data-v-d927071d]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, rgb(31, 115, 183) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-d927071d]{display:flex;flex-direction:column}.v-dd>label[data-v-d927071d],.v-dd-option>.label[data-v-d927071d]{font-weight:600;text-align:left}.v-dd>label[data-v-d927071d],.v-dd>label+.v-dd-label-hint[data-v-d927071d]{line-height:1.45;text-align:left}.v-tree-dropdown .v-dd>label+.v-dd-label-hint[data-v-d927071d]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-d927071d]{border-color:var(--primary-color)}.c-btn__icon[data-v-d927071d]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-d927071d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-d927071d]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-d927071d]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-d927071d]:active,.v-dd-search[data-v-d927071d]:focus,.v-dd-search[data-v-d927071d]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color var(--animation-delay) ease-in-out,box-shadow var(--animation-delay) ease-in-out}.v-dd-search>svg[data-v-d927071d]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-d927071d]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-d927071d]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-d927071d]{transform:rotate(180deg);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-d927071d]{transform:rotate(0);transition:transform var(--animation-delay) ease-in-out}.v-dd-search>input[data-v-d927071d],.v-dd-search>div[data-v-d927071d]{font-size:1em;height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-d927071d]{border:none;outline:none}.v-dd-input.hide[data-v-d927071d]{position:absolute;width:0px;height:1px;padding:0}.v-dd+ul[data-v-d927071d]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-d927071d var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-d927071d]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}.v-dd+ul.compact>li[data-v-d927071d]{padding:.5rem 1.25rem}.v-dd+ul>li.parent-option[data-v-d927071d]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd+ul.compact>li.parent-option[data-v-d927071d]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-d927071d],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-d927071d]{position:absolute}.v-dd-option>span[data-v-d927071d]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-d927071d],.v-dd-option[disabled=disabled][data-v-d927071d]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-d927071d]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-d927071d]:hover,.v-dd-option[data-v-d927071d]:focus,.v-dd-option.active[data-v-d927071d]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-d927071d]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-d927071d{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(d)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as d, createElementBlock as p, createElementVNode as a, toDisplayString as h, defineComponent as C, resolveComponent as $, createCommentVNode as f, normalizeClass as O, createVNode as b, withDirectives as g, vModelText as D, vShow as M, Fragment as _, renderList as q, createBlock as v } from "vue";
const P = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of t)
    i[n] = s;
  return i;
}, T = {
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
}, L = T, z = ["color", "role", "aria-labelledby"], V = ["id"], B = ["innerHTML"];
function A(e, t, i, n, s, c) {
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
    }, h(e.name || e.icon) + " Icon", 9, V),
    a("desc", null, h(e.iconDescription || e.name), 1),
    (d(), p("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, B))
  ], 8, z);
}
const E = /* @__PURE__ */ P(L, [["render", A]]), N = C({
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
      handler(e, t) {
        const i = t.map((s) => s.__identifier), n = e.map((s) => s.__identifier);
        if (e.length !== t.length || !n.every((s) => i.includes(s)))
          try {
            this.$emit(
              "update:modelValue",
              this.selectedOptions.map(({ __identifier: s, __selected: c, ...r }) => r)
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
        const e = JSON.parse(JSON.stringify(this.options)), { formattedOptions: t, selectedOptions: i } = this.parseInputOptions(e);
        if (this.ddOptions = t, this.selectedOptions = i, this.searchInput) {
          const n = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = n, this.filteredOptions = n;
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
      return e.forEach((n) => {
        var c;
        const s = [...t, n.label];
        typeof n.value < "u" && s.push(n.value), n.__identifier = s.join("__"), (c = n.children) != null && c.length ? this.parseInputOptions(n.children, s, i) : n.selected && i.push(n);
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
      for (const n of t)
        if ((i = n.children) != null && i.length) {
          if (n.__identifier === this.selectedParent.__identifier && n.children.length === this.currentOptions.length) {
            this.currentOptions = t, this.selectedParent = e;
            return;
          }
          this.goToPreviousOptions(n, n.children);
        }
    },
    filterMatchingOptions(e, t) {
      var n;
      let i = [];
      for (const s of t) {
        const { __identifier: c, __selected: r, ...u } = s, o = this.searchOptionMatcher(e, u);
        if (typeof o == "boolean" ? o : s.label.toLowerCase().includes(e.toLowerCase()))
          i.push(s);
        else if ((n = s.children) != null && n.length) {
          const l = this.filterMatchingOptions(e, s.children);
          l.length && i.push({ ...s, children: l });
        }
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
          const n = this.selectedOptions.findIndex(
            (s) => s.__identifier === t.__identifier
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
            (s) => s.__selected === !0
          );
          n > -1 && (this.currentOptions[n].__selected = !1), this.selectedOptions = [t], this.closeDropdownMenu();
        }
        this.currentOptions[e].__selected = !0;
      }
    },
    handleKeyDown(e) {
      var i, n, s, c, r, u, o;
      const { key: t } = e;
      if (t === "Escape")
        this.closeDropdownMenu();
      else if (t === "Enter" || t.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(e), t === "Enter") {
          if (this.maxSelectableCount && ((i = this.selectedOptions) == null ? void 0 : i.length) >= this.maxSelectableCount)
            return;
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const l = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!((n = this.currentOptions[l]) != null && n.disabled)) {
              const I = (s = this.selectedParent) == null ? void 0 : s.label;
              this.selectOption(l), I !== ((c = this.selectedParent) == null ? void 0 : c.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
            }
          }
        }
      } else if (t === "ArrowUp")
        if (this.selectedIndex === 0) {
          const l = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? l : l - 1;
        } else
          this.selectedIndex--;
      else if (t === "ArrowRight") {
        const l = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((r = this.currentOptions[l]) != null && r.disabled) && ((o = (u = this.currentOptions[l]) == null ? void 0 : u.children) != null && o.length) && (this.selectOption(l), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const l = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? l : l - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        t === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}), H = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, R = { class: "v-dd" }, K = ["for", "id"], U = ["aria-labelledby"], j = ["aria-expanded", "aria-owns", "aria-labelledby"], J = ["id", "aria-labelledby", "aria-controls", "aria-activedescendant"], F = ["innerHTML"], G = ["id", "aria-labelledby", "aria-multiselectable"], Q = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, W = ["id"], X = { class: "u-truncate label" }, Y = ["id", "onClick", "aria-selected", "disabled"], Z = { class: "u-truncate" };
function x(e, t, i, n, s, c) {
  var u;
  const r = $("svg-icon");
  return d(), p("div", H, [
    a("div", R, [
      a("label", {
        for: "v-dd-search__input" + e.uniqueId,
        id: "v-dd-label" + e.uniqueId
      }, h(e.label), 9, K),
      e.labelHint ? (d(), p("div", {
        key: 0,
        class: "v-dd-label-hint",
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, h(e.labelHint), 9, U)) : f("", !0),
      a("div", {
        class: O("v-dd-search" + (e.menuIsOpen ? " active" : "") + (e.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...o) => e.toggleDropdownMenu && e.toggleDropdownMenu(...o)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + e.menuIsOpen,
        "aria-owns": "v-dd-options-menu" + e.uniqueId,
        "aria-labelledby": "v-dd-label" + e.uniqueId
      }, [
        b(r, {
          icon: "zd-search",
          name: "Search"
        }),
        g(a("input", {
          ref: "searchInput",
          type: "text",
          autocomplete: "off",
          id: "v-dd-search__input" + e.uniqueId,
          class: O("c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.searchInput = o),
          onClick: t[1] || (t[1] = (...o) => e.keepMenuOpen && e.keepMenuOpen(...o)),
          onKeydown: t[2] || (t[2] = (...o) => e.handleKeyDown && e.handleKeyDown(...o)),
          role: "combobox",
          "aria-labelledby": "v-dd-label" + e.uniqueId,
          "aria-autocomplete": "list",
          "aria-controls": e.menuIsOpen ? "v-dd-options-menu" + e.uniqueId : !1,
          "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
        }, null, 42, J), [
          [D, e.searchInput]
        ]),
        g(a("div", {
          class: "c-txt u-truncate",
          innerHTML: e.selectedOptions.map((o) => o.label).join(", ")
        }, null, 8, F), [
          [M, !e.menuIsOpen]
        ]),
        b(r, {
          icon: "zd-down-pointer",
          name: e.menuIsOpen ? "Up arrow" : "Down arrow",
          class: O(e.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, j)
    ]),
    g(a("ul", {
      ref: "menu",
      id: "v-dd-options-menu" + e.uniqueId,
      class: O(e.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label" + e.uniqueId,
      "aria-multiselectable": !!e.multiple
    }, [
      (u = e.currentOptions) != null && u.length ? f("", !0) : (d(), p("li", Q, [
        a("span", null, h(e.noSearchResultsText), 1)
      ])),
      e.selectedParent ? (d(), p("li", {
        key: 1,
        id: "v-dd-option-0" + e.uniqueId,
        class: O("v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : "")),
        onClick: t[4] || (t[4] = (o) => e.goToPreviousOptions()),
        role: "option"
      }, [
        b(r, {
          icon: "zd-down-pointer",
          name: "Left arrow",
          iconDescription: "Click to go back to previous menu",
          color: "#1f73b7"
        }),
        a("span", X, h(e.selectedParent.label), 1)
      ], 10, W)) : f("", !0),
      (d(!0), p(_, null, q(e.currentOptions, (o, l) => {
        var I, w, y, S, k;
        return d(), p("li", {
          key: o.label + "__" + (o.value ?? l),
          id: "v-dd-option-" + (e.selectedParent ? l + 1 : l) + e.uniqueId,
          class: O("v-dd-option" + (e.selectedIndex === (e.selectedParent ? l + 1 : l) ? " active" : "")),
          onClick: (ne) => e.selectOption(l),
          role: "option",
          "aria-selected": e.selectedIndex === (e.selectedParent ? l + 1 : l),
          disabled: o.disabled || e.maxSelectableCount && ((I = e.selectedOptions) == null ? void 0 : I.length) >= e.maxSelectableCount && !((w = o.children) != null && w.length) && !e.isOptionSelected(o) ? "disabled" : null
        }, [
          (y = o.children) != null && y.length && e.hasSelectedOptions(o.children) ? (d(), v(r, {
            key: 0,
            icon: "zd-contains",
            name: "Contains",
            color: "#1f73b7"
          })) : f("", !0),
          !((S = o.children) != null && S.length) && e.isOptionSelected(o) ? (d(), v(r, {
            key: 1,
            icon: "zd-check",
            name: "Selected",
            color: "#1f73b7"
          })) : f("", !0),
          a("span", Z, h(o.label), 1),
          (k = o.children) != null && k.length ? (d(), v(r, {
            key: 2,
            icon: "zd-down-pointer",
            name: "Right arrow",
            iconDescription: "Click to open sub-menu options"
          })) : f("", !0)
        ], 10, Y);
      }), 128))
    ], 10, G), [
      [M, e.menuIsOpen]
    ])
  ], 512);
}
const ee = /* @__PURE__ */ P(N, [["render", x], ["__scopeId", "data-v-d927071d"]]), te = {
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
