(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.id="vs-autocomplete",a.appendChild(document.createTextNode(".v-tree-dropdown[data-v-ae216d09]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-ae216d09]{display:flex;flex-direction:column}#v-dd-label[data-v-ae216d09],.v-dd-option>.label[data-v-ae216d09]{font-weight:600;text-align:left}#v-dd-label[data-v-ae216d09],#v-dd-label+.v-dd-label-hint[data-v-ae216d09]{line-height:1.45}.v-tree-dropdown #v-dd-label+.v-dd-label-hint[data-v-ae216d09]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-ae216d09]{border-color:var(--primary-color)}.margin-0-auto[data-v-ae216d09]{margin:0 auto}.c-btn__icon[data-v-ae216d09]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-ae216d09]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-ae216d09]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-ae216d09]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-ae216d09]:active,.v-dd-search[data-v-ae216d09]:focus,.v-dd-search[data-v-ae216d09]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-ae216d09]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-ae216d09]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-ae216d09]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-ae216d09]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-ae216d09]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-ae216d09],.v-dd-search>div[data-v-ae216d09]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-ae216d09]{border:none;outline:none}.v-dd-input.hide[data-v-ae216d09]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-ae216d09]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-ae216d09 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-ae216d09]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}#v-dd-options-menu.compact>li[data-v-ae216d09]{padding:.5rem 1.25rem}#v-dd-options-menu>li.parent-option[data-v-ae216d09]{border-bottom:var(--border);padding:.5rem .75rem}#v-dd-options-menu.compact>li.parent-option[data-v-ae216d09]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-ae216d09],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-ae216d09]{position:absolute}.v-dd-option>span[data-v-ae216d09]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-ae216d09],.v-dd-option[disabled=disabled][data-v-ae216d09]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-ae216d09]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-ae216d09]:hover,.v-dd-option[data-v-ae216d09]:focus,.v-dd-option.active[data-v-ae216d09]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-ae216d09]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-ae216d09{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { openBlock as d, createElementBlock as p, createElementVNode as c, toDisplayString as u, resolveComponent as P, normalizeClass as h, createVNode as I, withDirectives as _, vModelText as M, vShow as S, createCommentVNode as O, Fragment as C, renderList as D, createBlock as g } from "vue";
const x = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
  return s;
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
}, L = T, z = ["color", "role", "aria-labelledby"], B = ["id"], V = ["innerHTML"];
function A(e, t, s, o, n, l) {
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
    }, u(e.name || e.icon) + " Icon", 9, B),
    c("desc", null, u(e.iconDescription || e.name), 1),
    (d(), p("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      innerHTML: e.paths[e.icon]
    }, null, 8, V))
  ], 8, z);
}
const q = /* @__PURE__ */ x(L, [["render", A]]);
const E = {
  components: {
    SvgIcon: q
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
      this.menuIsOpen ? (document.addEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("open", this.$refs.dropdown, this.$refs.menu)) : (document.removeEventListener("click", this.closeDropdownMenuOnBlur), this.$emit("close", this.$refs.dropdown, this.$refs.menu));
    },
    searchInput() {
      this.handleSearchInputChange();
    },
    selectedOptions: {
      handler(e, t) {
        console.log("selectedOptions", e, t);
        const s = t.map((n) => n.__identifier), o = e.map((n) => n.__identifier);
        (e.length !== t.length || !o.every((n) => s.includes(n))) && this.$emit(
          "input",
          this.selectedOptions.map(({ __identifier: n, __selected: l, ...r }) => r)
        );
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
          o > -1 && (this.selectedOptions = [
            ...this.selectedOptions.slice(0, o),
            ...this.selectedOptions.slice(o + 1)
          ]);
        } else
          this.selectedOptions = [];
        this.currentOptions[e].__selected = !1;
      } else
        this.multiple ? this.selectedOptions = [...this.selectedOptions, t] : (this.selectedOptions = [t], this.closeDropdownMenu()), this.currentOptions[e].__selected = !0;
    },
    handleKeyDown(e) {
      var s, o, n, l, r, f;
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
              const a = (o = this.selectedParent) == null ? void 0 : o.label;
              this.selectOption(i), a !== ((n = this.selectedParent) == null ? void 0 : n.label) && (this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
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
        !((l = this.currentOptions[i]) != null && l.disabled) && ((f = (r = this.currentOptions[i]) == null ? void 0 : r.children) != null && f.length) && (this.selectOption(i), this.selectedParent && (this.selectedIndex = 1));
      } else if (t === "ArrowDown") {
        const i = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? i : i - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        t === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}, N = {
  class: "v-tree-dropdown",
  ref: "dropdown"
}, R = { class: "v-dd" }, K = {
  for: "v-dd-search__input",
  id: "v-dd-label"
}, H = ["aria-expanded"], j = ["aria-controls", "aria-activedescendant"], J = ["innerHTML"], U = ["aria-multiselectable"], F = {
  key: 0,
  class: "v-dd-option no-data",
  role: "option"
}, G = { class: "u-truncate label" }, Q = ["id", "onClick", "aria-selected", "disabled"], W = { class: "u-truncate" };
function X(e, t, s, o, n, l) {
  var f;
  const r = P("svg-icon");
  return d(), p("div", N, [
    c("div", R, [
      c("label", K, u(s.label), 1),
      c("div", {
        class: h("v-dd-search" + (n.menuIsOpen ? " active" : "") + (s.compact ? " compact" : "")),
        onClick: t[3] || (t[3] = (...i) => l.toggleDropdownMenu && l.toggleDropdownMenu(...i)),
        "aria-haspopup": "listbox",
        "aria-expanded": "" + n.menuIsOpen,
        "aria-owns": "v-dd-options-menu",
        "aria-labelledby": "v-dd-label"
      }, [
        I(r, {
          icon: "zd-search",
          name: "Search"
        }),
        _(c("input", {
          ref: "searchInput",
          type: "text",
          autocomplete: "new-password",
          id: "v-dd-search__input",
          class: h("c-txt v-dd-input" + (n.menuIsOpen ? "" : " hide")),
          "onUpdate:modelValue": t[0] || (t[0] = (i) => n.searchInput = i),
          onClick: t[1] || (t[1] = (...i) => l.keepMenuOpen && l.keepMenuOpen(...i)),
          onKeydown: t[2] || (t[2] = (...i) => l.handleKeyDown && l.handleKeyDown(...i)),
          role: "combobox",
          "aria-labelledby": "v-dd-label",
          "aria-autocomplete": "list",
          "aria-controls": n.menuIsOpen ? "v-dd-options-menu" : !1,
          "aria-activedescendant": n.menuIsOpen ? "v-dd-option-" + n.selectedIndex : !1
        }, null, 42, j), [
          [M, n.searchInput]
        ]),
        _(c("div", {
          class: "c-txt u-truncate",
          innerHTML: n.selectedOptions.map((i) => i.label).join(", ")
        }, null, 8, J), [
          [S, !n.menuIsOpen]
        ]),
        I(r, {
          icon: "zd-down-pointer",
          name: n.menuIsOpen ? "Up arrow" : "Down arrow",
          class: h(n.menuIsOpen ? "open" : "close")
        }, null, 8, ["name", "class"])
      ], 10, H)
    ]),
    _(c("ul", {
      ref: "menu",
      id: "v-dd-options-menu",
      class: h(s.compact ? "compact" : ""),
      role: "listbox",
      "aria-labelledby": "v-dd-label",
      "aria-multiselectable": !!s.multiple
    }, [
      (f = n.currentOptions) != null && f.length ? O("", !0) : (d(), p("li", F, [
        c("span", null, u(s.noSearchResultsText), 1)
      ])),
      n.selectedParent ? (d(), p("li", {
        key: 1,
        id: "v-dd-option-0",
        class: h("v-dd-option parent-option" + (n.selectedIndex === 0 ? " active" : "")),
        onClick: t[4] || (t[4] = (i) => l.goToPreviousOptions()),
        role: "option"
      }, [
        I(r, {
          icon: "zd-down-pointer",
          name: "Left arrow",
          iconDescription: "Click to go back to previous menu",
          color: "#1f73b7"
        }),
        c("span", G, u(n.selectedParent.label), 1)
      ], 2)) : O("", !0),
      (d(!0), p(C, null, D(n.currentOptions, (i, a) => {
        var b, v, w, y, k;
        return d(), p("li", {
          key: i.label,
          id: "v-dd-option-" + (n.selectedParent ? a + 1 : a),
          class: h("v-dd-option" + (n.selectedIndex === (n.selectedParent ? a + 1 : a) ? " active" : "")),
          onClick: ($) => l.selectOption(a),
          role: "option",
          "aria-selected": n.selectedIndex === (n.selectedParent ? a + 1 : a),
          disabled: i.disabled || s.maxSelectableCount && ((b = n.selectedOptions) == null ? void 0 : b.length) >= s.maxSelectableCount && !((v = i.children) != null && v.length) && !l.isOptionSelected(i)
        }, [
          (w = i.children) != null && w.length && l.hasSelectedOptions(i.children) ? (d(), g(r, {
            key: 0,
            icon: "zd-contains",
            name: "Contains",
            color: "#1f73b7"
          })) : O("", !0),
          !((y = i.children) != null && y.length) && l.isOptionSelected(i) ? (d(), g(r, {
            key: 1,
            icon: "zd-check",
            name: "Selected",
            color: "#1f73b7"
          })) : O("", !0),
          c("span", W, u(i.label), 1),
          (k = i.children) != null && k.length ? (d(), g(r, {
            key: 2,
            icon: "zd-down-pointer",
            name: "Right arrow",
            iconDescription: "Click to open sub-menu options"
          })) : O("", !0)
        ], 10, Q);
      }), 128))
    ], 10, U), [
      [S, n.menuIsOpen]
    ])
  ], 512);
}
const Y = /* @__PURE__ */ x(E, [["render", X], ["__scopeId", "data-v-ae216d09"]]), Z = {
  install(e, t) {
    e.component("VsAutocomplete", Y);
  }
};
let m = null;
typeof window < "u" ? m = window.Vue : typeof global < "u" && (m = global.Vue);
m && m.use && m.use(Z);
export {
  Y as default
};
