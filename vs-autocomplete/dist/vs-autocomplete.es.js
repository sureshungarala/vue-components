(function(){"use strict";try{if(typeof document!="undefined"){var d=document.createElement("style");d.id="vs-autocomplete",d.appendChild(document.createTextNode(".v-tree-dropdown[data-v-d64d6ffc]{--primary-color: #1f73b7;--background-color: #1f73b714;--border: 1px solid #d8dcde;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:300px;max-width:var(--max-width);outline:none}.v-dd[data-v-d64d6ffc]{display:flex;flex-direction:column;row-gap:.5rem}.v-tree-dropdown #v-dd-label[data-v-d64d6ffc],.v-dd-option>.label[data-v-d64d6ffc]{font-weight:600;text-align:left}.v-dd:hover .v-dd-search[data-v-d64d6ffc]{border-color:var(--primary-color)}.margin-0-auto[data-v-d64d6ffc]{margin:0 auto}.c-btn__icon[data-v-d64d6ffc]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-d64d6ffc]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-d64d6ffc]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.8rem .75rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search[data-v-d64d6ffc]:active,.v-dd-search[data-v-d64d6ffc]:focus,.v-dd-search[data-v-d64d6ffc]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-d64d6ffc]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-d64d6ffc]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-d64d6ffc]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-d64d6ffc]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-d64d6ffc]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-d64d6ffc],.v-dd-search>div[data-v-d64d6ffc]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-d64d6ffc]{border:none;outline:none}.v-dd-input.hide[data-v-d64d6ffc]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-d64d6ffc]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-data-v-d64d6ffc var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}#v-dd-options-menu>li[data-v-d64d6ffc]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-d64d6ffc],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-d64d6ffc]{position:absolute}.v-dd-option>span[data-v-d64d6ffc]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-d64d6ffc],.v-dd-option[disabled=disabled][data-v-d64d6ffc]{user-select:none;-webkit-user-select:none;pointer-events:none;opacity:.7}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-d64d6ffc]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-d64d6ffc]:hover,.v-dd-option[data-v-d64d6ffc]:focus,.v-dd-option.active[data-v-d64d6ffc]{background-color:var(--background-color)}.v-dd-option.parent-option[data-v-d64d6ffc]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd-option.parent-option>svg[data-v-d64d6ffc]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-data-v-d64d6ffc{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(d)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
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
function v(t, e, i, n, s, r, o, a) {
  var l = typeof t == "function" ? t.options : t;
  e && (l.render = e, l.staticRenderFns = i, l._compiled = !0), n && (l.functional = !0), r && (l._scopeId = "data-v-" + r);
  var c;
  if (o ? (c = function(d) {
    d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), s && s.call(this, d), d && d._registeredComponents && d._registeredComponents.add(o);
  }, l._ssrRegister = c) : s && (c = a ? function() {
    s.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), c)
    if (l.functional) {
      l._injectStyles = c;
      var m = l.render;
      l.render = function(O, h) {
        return c.call(h), m(O, h);
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
var P = /* @__PURE__ */ v(
  b,
  I,
  g,
  !1,
  x,
  null,
  null,
  null
);
function x(t) {
  for (let e in f)
    this[e] = f[e];
}
const y = /* @__PURE__ */ function() {
  return P.exports;
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
  }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(s, r) {
    var o, a, l;
    return n("li", {
      key: s.label,
      class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? r + 1 : r) ? " active" : ""),
      attrs: {
        id: "v-dd-option-" + (e.selectedParent ? r + 1 : r),
        role: "option",
        "aria-selected": e.selectedIndex === (e.selectedParent ? r + 1 : r),
        disabled: s.disabled
      },
      on: {
        click: function(c) {
          return e.selectOption(r);
        }
      }
    }, [(o = s.children) !== null && o !== void 0 && o.length && e.hasSelectedOptions(s.children, s) ? n("svg-icon", {
      attrs: {
        icon: "zd-contains",
        name: "Contains",
        color: "#1f73b7"
      }
    }) : e._e(), !((a = s.children) !== null && a !== void 0 && a.length) && e.isOptionSelected(s) ? n("svg-icon", {
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
}, C = [];
const k = {
  components: {
    SvgIcon: y
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
    delimiter: {
      type: String,
      default: ", ",
      required: !1
    }
  },
  data() {
    return {
      searchInput: "",
      menuIsOpen: !1,
      selectedParent: null,
      selectedOptions: this.setInitialSelectedOptions(this.options, null, []),
      currentOptions: this.options,
      filteredOptions: this.options,
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
      this.searchInput ? this.currentOptions = this.filterMatchingOptions(this.searchInput, this.options) : this.currentOptions = this.options, this.filteredOptions = this.currentOptions, this.selectedParent = null;
    },
    selectedOptions() {
      this.$emit(
        "input",
        this.selectedOptions.map(({ __identifier: t, __selected: e, ...i }) => i)
      );
    }
  },
  methods: {
    focusSearchInput() {
      this.$refs.searchInput.focus();
    },
    toggleDropdownMenu(t) {
      t.stopPropagation(), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var t;
      this.menuIsOpen = !1, (t = this.searchInput) != null && t.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.options, this.currentOptions = this.options, this.selectedIndex = -1);
    },
    keepMenuOpen(t) {
      t.stopPropagation(), this.menuIsOpen || (this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(t) {
      (t.path || t.composedPath && t.composedPath()).includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    optionIdentifer(t, e = this.selectedParent) {
      return [e == null ? void 0 : e.label, t.label, t.value].join("__");
    },
    isOptionSelected(t, e) {
      const i = this.optionIdentifer(t, e);
      return this.selectedOptions.findIndex((n) => n.__identifier === i) > -1;
    },
    hasSelectedOptions(t, e) {
      return t.some(
        (i) => {
          var n;
          return (n = i.children) != null && n.length ? this.hasSelectedOptions(i.children, i) : this.isOptionSelected(i, e);
        }
      );
    },
    goToPreviousOptions(t = null, e = this.filteredOptions) {
      var i;
      for (const n of e)
        if ((i = n.children) != null && i.length) {
          if (n.label === this.selectedParent.label && n.children.length === this.currentOptions.length) {
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
          const r = this.filterMatchingOptions(t, s.children);
          r.length && i.push({ ...s, children: r });
        }
      return i;
    },
    setInitialSelectedOptions(t, e, i) {
      var n;
      for (const s of t)
        (n = s.children) != null && n.length ? this.setInitialSelectedOptions(s.children, s, i) : s.selected && (s.__identifier = this.optionIdentifer(s, e), i.push(s));
      return i;
    },
    selectOption(t) {
      var i;
      const e = this.currentOptions[t];
      if ((i = e.children) != null && i.length)
        this.selectedParent = e, this.currentOptions = e.children;
      else {
        const n = this.optionIdentifer(e);
        if (e.__selected || this.isOptionSelected(e, this.selectedParent)) {
          if (this.multiple) {
            const s = this.selectedOptions.findIndex(
              (r) => r.__identifier === n
            );
            s > -1 && this.selectedOptions.splice(s, 1);
          } else
            this.selectedOptions = [];
          this.currentOptions[t].__selected = !1;
        } else {
          const s = { ...e, __identifier: n };
          this.multiple ? this.selectedOptions.push(s) : (this.selectedOptions = [s], this.closeDropdownMenu()), this.currentOptions[t].__selected = !0;
        }
      }
    },
    handleKeyUp(t) {
      var i, n, s, r;
      const { key: e } = t;
      if (e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(t), e === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const o = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            (i = this.currentOptions[o]) != null && i.disabled || (this.selectOption(o), this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0);
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
        !((n = this.currentOptions[o]) != null && n.disabled) && ((r = (s = this.currentOptions[o]) == null ? void 0 : s.children) == null ? void 0 : r.length) && (this.selectOption(o), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const o = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? o : o - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        e === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}, _ = {};
var M = /* @__PURE__ */ v(
  k,
  S,
  C,
  !1,
  $,
  "d64d6ffc",
  null,
  null
);
function $(t) {
  for (let e in _)
    this[e] = _[e];
}
const D = /* @__PURE__ */ function() {
  return M.exports;
}(), z = {
  install(t, e) {
    t.component("VsAutocomplete", D);
  }
};
let p = null;
typeof window < "u" ? p = window.Vue : typeof global < "u" && (p = global.Vue);
p && p.use(z);
export {
  D as default
};
