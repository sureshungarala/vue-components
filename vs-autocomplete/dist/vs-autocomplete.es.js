(function(){"use strict";try{if(typeof document!="undefined"){var a=document.createElement("style");a.id="vs-autocomplete",a.appendChild(document.createTextNode(".v-tree-dropdown[data-v-af5e935a]{--primary-color: #1f73b7;--background-color: #1f73b714;--border: 1px solid #d8dcde;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:300px;max-width:var(--max-width);outline:none}.v-dd[data-v-af5e935a]{display:flex;flex-direction:column;row-gap:.5rem}.v-tree-dropdown #v-dd-label[data-v-af5e935a],.v-dd-option>.label[data-v-af5e935a]{font-weight:600;text-align:left}.v-dd:hover .v-dd-search[data-v-af5e935a]{border-color:var(--primary-color)}.margin-0-auto[data-v-af5e935a]{margin:0 auto}.c-btn__icon[data-v-af5e935a]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-af5e935a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-af5e935a]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.8rem .75rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search[data-v-af5e935a]:active,.v-dd-search[data-v-af5e935a]:focus,.v-dd-search[data-v-af5e935a]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-af5e935a]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-af5e935a]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-af5e935a]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-af5e935a]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-af5e935a]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-af5e935a],.v-dd-search>div[data-v-af5e935a]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-af5e935a]{border:none;outline:none}.v-dd-input.hide[data-v-af5e935a]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-af5e935a]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-data-v-af5e935a var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}#v-dd-options-menu>li[data-v-af5e935a]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-af5e935a],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-af5e935a]{position:absolute}.v-dd-option>span[data-v-af5e935a]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-af5e935a],.v-dd-option[disabled=disabled][data-v-af5e935a]{user-select:none;-webkit-user-select:none;pointer-events:none;opacity:.7}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-af5e935a]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-af5e935a]:hover,.v-dd-option[data-v-af5e935a]:focus,.v-dd-option.active[data-v-af5e935a]{background-color:var(--background-color)}.v-dd-option.parent-option[data-v-af5e935a]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd-option.parent-option>svg[data-v-af5e935a]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-data-v-af5e935a{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var I = function() {
  var t = this, e = t.$createElement, i = t._self._c || e;
  return i("svg", {
    staticClass: "c-btn__icon",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      color: t.color,
      role: t.role,
      "aria-labelledby": t.icon,
      focusable: "false",
      "aria-hidden": !t.focusable
    }
  }, [i("title", {
    attrs: {
      id: t.name || t.icon
    }
  }, [t._v(t._s(t.name || t.icon) + " Icon")]), i("desc", [t._v(t._s(t.iconDescription || t.name))]), i("svg", {
    attrs: {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    },
    domProps: {
      innerHTML: t._s(t.paths[t.icon])
    }
  })]);
}, g = [];
function O(t, e, i, n, s, o, r, d) {
  var l = typeof t == "function" ? t.options : t;
  e && (l.render = e, l.staticRenderFns = i, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o);
  var c;
  if (r ? (c = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), s && s.call(this, a), a && a._registeredComponents && a._registeredComponents.add(r);
  }, l._ssrRegister = c) : s && (c = d ? function() {
    s.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), c)
    if (l.functional) {
      l._injectStyles = c;
      var v = l.render;
      l.render = function(m, h) {
        return c.call(h), v(m, h);
      };
    } else {
      var u = l.beforeCreate;
      l.beforeCreate = u ? [].concat(u, c) : [c];
    }
  return {
    exports: t,
    options: l
  };
}
const w = {
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
}, b = w, f = {};
var x = /* @__PURE__ */ O(
  b,
  I,
  g,
  !1,
  y,
  null,
  null,
  null
);
function y(t) {
  for (let e in f)
    this[e] = f[e];
}
const C = /* @__PURE__ */ function() {
  return x.exports;
}();
var S = function() {
  var t, e = this, i = e.$createElement, n = e._self._c || i;
  return n("div", {
    ref: "dropdown",
    staticClass: "v-tree-dropdown"
  }, [n("div", {
    staticClass: "v-dd"
  }, [n("label", {
    attrs: {
      for: "v-dd-search__input",
      id: "v-dd-label"
    }
  }, [e._v(e._s(e.label))]), n("div", {
    class: "v-dd-search" + (e.menuIsOpen ? " active" : ""),
    attrs: {
      "aria-haspopup": "listbox",
      "aria-expanded": "" + e.menuIsOpen,
      "aria-owns": "v-dd-options-menu",
      "aria-labelledby": "v-dd-label"
    },
    on: {
      click: e.toggleDropdownMenu
    }
  }, [n("svg-icon", {
    attrs: {
      icon: "zd-search",
      name: "Search"
    }
  }), n("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.searchInput,
      expression: "searchInput"
    }],
    ref: "searchInput",
    class: "c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide"),
    attrs: {
      type: "text",
      autocomplete: "new-password",
      id: "v-dd-search__input",
      role: "combobox",
      "aria-labelledby": "v-dd-label",
      "aria-autocomplete": "list",
      "aria-controls": e.menuIsOpen ? "v-dd-options-menu" : !1,
      "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
    },
    domProps: {
      value: e.searchInput
    },
    on: {
      click: e.keepMenuOpen,
      keyup: e.handleKeyUp,
      input: function(s) {
        s.target.composing || (e.searchInput = s.target.value);
      }
    }
  }), n("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !e.menuIsOpen,
      expression: "!menuIsOpen"
    }],
    staticClass: "c-txt u-truncate",
    domProps: {
      innerHTML: e._s(e.selectedOptions.map(function(s) {
        return s.label;
      }).join(", "))
    }
  }), n("svg-icon", {
    class: e.menuIsOpen ? "open" : "close",
    attrs: {
      icon: "zd-down-pointer",
      name: e.menuIsOpen ? "Up arrow" : "Down arrow"
    }
  })], 1)]), n("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.menuIsOpen,
      expression: "menuIsOpen"
    }],
    ref: "menu",
    attrs: {
      id: "v-dd-options-menu",
      role: "listbox",
      "aria-labelledby": "v-dd-label",
      "aria-multiselectable": !!e.multiple
    }
  }, [(t = e.currentOptions) !== null && t !== void 0 && t.length ? e._e() : n("li", {
    staticClass: "v-dd-option no-data",
    attrs: {
      role: "option"
    }
  }, [n("span", [e._v("No options found.")])]), e.selectedParent ? n("li", {
    class: "v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : ""),
    attrs: {
      id: "v-dd-option-0",
      role: "option"
    },
    on: {
      click: function(s) {
        return e.goToPreviousOptions();
      }
    }
  }, [n("svg-icon", {
    attrs: {
      icon: "zd-down-pointer",
      name: "Left arrow",
      iconDescription: "Click to go back to previous menu",
      color: "#1f73b7"
    }
  }), n("span", {
    staticClass: "u-truncate label"
  }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(s, o) {
    var r, d, l;
    return n("li", {
      key: s.label,
      class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? o + 1 : o) ? " active" : ""),
      attrs: {
        id: "v-dd-option-" + (e.selectedParent ? o + 1 : o),
        role: "option",
        "aria-selected": e.selectedIndex === (e.selectedParent ? o + 1 : o),
        disabled: s.disabled
      },
      on: {
        click: function(c) {
          return e.selectOption(o);
        }
      }
    }, [(r = s.children) !== null && r !== void 0 && r.length && e.hasSelectedOptions(s.children) ? n("svg-icon", {
      attrs: {
        icon: "zd-contains",
        name: "Contains",
        color: "#1f73b7"
      }
    }) : e._e(), !((d = s.children) !== null && d !== void 0 && d.length) && e.isOptionSelected(s) ? n("svg-icon", {
      attrs: {
        icon: "zd-check",
        name: "Selected",
        color: "#1f73b7"
      }
    }) : e._e(), n("span", {
      staticClass: "u-truncate"
    }, [e._v(e._s(s.label))]), (l = s.children) !== null && l !== void 0 && l.length ? n("svg-icon", {
      attrs: {
        icon: "zd-down-pointer",
        name: "Right arrow",
        iconDescription: "Click to open sub-menu options"
      }
    }) : e._e()], 1);
  })], 2)]);
}, P = [];
const k = {
  components: {
    SvgIcon: C
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
    }
  },
  data() {
    return {
      ddOptions: [],
      searchInput: this.searchInputText,
      menuIsOpen: !1,
      selectedParent: null,
      selectedOptions: [],
      currentOptions: [],
      filteredOptions: [],
      selectedIndex: -1,
      selectedIndices: [],
      currentIndex: -1
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
        this.selectedOptions.map(({ __identifier: t, __selected: e, ...i }) => i)
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
    constructCompData() {
      try {
        const t = JSON.parse(JSON.stringify(this.options)), { formattedOptions: e, selectedOptions: i } = this.parseInputOptions(t);
        if (this.ddOptions = e, this.selectedOptions = i, this.searchInput) {
          const n = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = n, this.filteredOptions = n;
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
      t.path.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    parseInputOptions(t = [], e = [], i = []) {
      return t.forEach((n) => {
        var o;
        const s = [...e, n.label];
        n.__identifier = s.join("__"), (o = n.children) != null && o.length ? this.parseInputOptions(n.children, s, i) : n.selected && i.push(n);
      }), { formattedOptions: t, selectedOptions: i };
    },
    isOptionSelected(t) {
      return this.selectedOptions.findIndex((e) => e.__identifier === t.__identifier) > -1;
    },
    hasSelectedOptions(t) {
      return t.some(
        (e) => {
          var i;
          return (i = e.children) != null && i.length ? this.hasSelectedOptions(e.children) : this.isOptionSelected(e);
        }
      );
    },
    goToPreviousOptions(t = null, e = this.filteredOptions) {
      var i;
      for (const n of e)
        if ((i = n.children) != null && i.length) {
          if (n.__identifier === this.selectedParent.__identifier && n.children.length === this.currentOptions.length) {
            this.currentOptions = e, this.selectedParent = t;
            return;
          }
          this.goToPreviousOptions(n, n.children);
        }
    },
    filterMatchingOptions(t, e) {
      var n;
      let i = [];
      for (const s of e)
        if (s.label.toLowerCase().includes(t.toLowerCase()))
          i.push(s);
        else if ((n = s.children) != null && n.length) {
          const o = this.filterMatchingOptions(t, s.children);
          o.length && i.push({ ...s, children: o });
        }
      return i;
    },
    selectOption(t) {
      var i;
      const e = this.currentOptions[t];
      if ((i = e.children) != null && i.length)
        this.selectedParent = e, this.currentOptions = e.children;
      else if (e.__selected || this.isOptionSelected(e, this.selectedParent)) {
        if (this.multiple) {
          const n = this.selectedOptions.findIndex(
            (s) => s.__identifier === e.__identifier
          );
          n > -1 && this.selectedOptions.splice(n, 1);
        } else
          this.selectedOptions = [];
        this.currentOptions[t].__selected = !1;
      } else
        this.multiple ? this.selectedOptions.push(e) : (this.selectedOptions = [e], this.closeDropdownMenu()), this.currentOptions[t].__selected = !0;
    },
    handleKeyUp(t) {
      var i, n, s, o;
      const { key: e } = t;
      if (e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(t), e === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const r = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            (i = this.currentOptions[r]) != null && i.disabled || (this.selectOption(r), this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
          }
        }
      } else if (e === "ArrowUp")
        if (this.selectedIndex === 0) {
          const r = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? r : r - 1;
        } else
          this.selectedIndex--;
      else if (e === "ArrowRight") {
        const r = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        !((n = this.currentOptions[r]) != null && n.disabled) && ((o = (s = this.currentOptions[r]) == null ? void 0 : s.children) == null ? void 0 : o.length) && (this.selectOption(r), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const r = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? r : r - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        e === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}, _ = {};
var M = /* @__PURE__ */ O(
  k,
  S,
  P,
  !1,
  $,
  "af5e935a",
  null,
  null
);
function $(t) {
  for (let e in _)
    this[e] = _[e];
}
const D = /* @__PURE__ */ function() {
  return M.exports;
}(), T = {
  install(t, e) {
    t.component("VsAutocomplete", D);
  }
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use(T);
export {
  D as default
};
