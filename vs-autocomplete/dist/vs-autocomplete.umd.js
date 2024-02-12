(function () {
  'use strict';
  try {
    if (typeof document < 'u') {
      var a = document.createElement('style');
      (a.id = 'vs-autocomplete'),
        a.appendChild(
          document.createTextNode(
            '.v-tree-dropdown[data-v-ae216d09]{--primary-color: #1f73b7;--background-color: #1f73b714;--hint-color: #828485;--border: 1px solid #d8dcde;--v-dropdown-width: 300px;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:var(--v-dropdown-width);max-width:var(--max-width);outline:none}.v-dd[data-v-ae216d09]{display:flex;flex-direction:column}#v-dd-label[data-v-ae216d09],.v-dd-option>.label[data-v-ae216d09]{font-weight:600;text-align:left}#v-dd-label[data-v-ae216d09],#v-dd-label+.v-dd-label-hint[data-v-ae216d09]{line-height:1.45}.v-tree-dropdown #v-dd-label+.v-dd-label-hint[data-v-ae216d09]{color:var(--hint-color)}.v-dd:hover .v-dd-search[data-v-ae216d09]{border-color:var(--primary-color)}.margin-0-auto[data-v-ae216d09]{margin:0 auto}.c-btn__icon[data-v-ae216d09]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-ae216d09]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-ae216d09]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.75rem;margin-top:.5rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search.compact[data-v-ae216d09]{padding:.5rem .75rem;margin-top:.25rem}.v-dd-search[data-v-ae216d09]:active,.v-dd-search[data-v-ae216d09]:focus,.v-dd-search[data-v-ae216d09]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-ae216d09]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-ae216d09]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-ae216d09]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-ae216d09]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-ae216d09]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-ae216d09],.v-dd-search>div[data-v-ae216d09]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-ae216d09]{border:none;outline:none}.v-dd-input.hide[data-v-ae216d09]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-ae216d09]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-ae216d09 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}.v-dd-option[data-v-ae216d09]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}#v-dd-options-menu.compact>li[data-v-ae216d09]{padding:.5rem 1.25rem}#v-dd-options-menu>li.parent-option[data-v-ae216d09]{border-bottom:var(--border);padding:.5rem .75rem}#v-dd-options-menu.compact>li.parent-option[data-v-ae216d09]{padding:.35rem .75rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-ae216d09],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-ae216d09]{position:absolute}.v-dd-option>span[data-v-ae216d09]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-ae216d09],.v-dd-option[disabled=disabled][data-v-ae216d09]{-webkit-user-select:none;user-select:none;pointer-events:none;opacity:.7;cursor:not-allowed}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-ae216d09]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-ae216d09]:hover,.v-dd-option[data-v-ae216d09]:focus,.v-dd-option.active[data-v-ae216d09]{background-color:var(--background-color)}.v-dd-option.parent-option>svg[data-v-ae216d09]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-ae216d09{0%{transform:translateY(2px)}to{transform:translateY(0)}}'
          )
        ),
        document.head.appendChild(a);
    }
  } catch (d) {
    console.error('vite-plugin-css-injected-by-js', d);
  }
})();
(function (e, a) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = a(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], a)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self),
      (e.VsAutocomplete = a(e.Vue)));
})(this, function (e) {
  'use strict';
  const a = (t, n) => {
      const i = t.__vccOpts || t;
      for (const [l, s] of n) i[l] = s;
      return i;
    },
    g = {
      props: {
        icon: { type: String, default: '' },
        color: { type: String },
        role: { type: String, default: 'presentation' },
        iconDescription: { type: String, default: '' },
        name: { type: String, default: '' },
      },
      data() {
        return {
          paths: {
            'zd-search':
              '<circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5"></path>',
            'zd-down-pointer':
              '<path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"></path>',
            'zd-check':
              '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9l4 4L15 3"></path>',
            'zd-contains':
              '<path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.5h15"></path>',
          },
        };
      },
    },
    k = ['color', 'role', 'aria-labelledby'],
    w = ['id'],
    b = ['innerHTML'];
  function y(t, n, i, l, s, r) {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          color: t.color,
          role: t.role,
          'aria-labelledby': t.icon,
          focusable: 'false',
          'aria-hidden': 'true',
          class: 'c-btn__icon',
        },
        [
          e.createElementVNode(
            'title',
            { id: t.name || t.icon },
            e.toDisplayString(t.name || t.icon) + ' Icon',
            9,
            w
          ),
          e.createElementVNode(
            'desc',
            null,
            e.toDisplayString(t.iconDescription || t.name),
            1
          ),
          (e.openBlock(),
          e.createElementBlock(
            'svg',
            {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              innerHTML: t.paths[t.icon],
            },
            null,
            8,
            b
          )),
        ],
        8,
        k
      )
    );
  }
  const S = a(g, [['render', y]]),
    K = '',
    x = {
      components: { SvgIcon: S },
      props: {
        label: { type: String, required: !1 },
        options: { type: Array, default: [], required: !0 },
        multiple: { type: Boolean, default: !1, required: !1 },
        searchInputText: { type: String, default: '', required: !1 },
        keepMenuOpenOnRender: { type: Boolean, default: !1, required: !1 },
        maxSelectableCount: { type: Number, default: 0, required: !1 },
        compact: { type: Boolean, default: !1, required: !1 },
        noSearchResultsText: {
          type: String,
          default: 'No options found',
          required: !1,
        },
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
          currentIndex: -1,
        };
      },
      watch: {
        menuIsOpen() {
          this.menuIsOpen
            ? (document.addEventListener('click', this.closeDropdownMenuOnBlur),
              this.$emit('open', this.$refs.dropdown, this.$refs.menu))
            : (document.removeEventListener(
                'click',
                this.closeDropdownMenuOnBlur
              ),
              this.$emit('close', this.$refs.dropdown, this.$refs.menu));
        },
        searchInput() {
          this.handleSearchInputChange();
        },
        selectedOptions: {
          handler(t, n) {
            console.log('selectedOptions', t, n);
            const i = n.map((s) => s.__identifier),
              l = t.map((s) => s.__identifier);
            (t.length !== n.length || !l.every((s) => i.includes(s))) &&
              this.$emit(
                'input',
                this.selectedOptions.map(
                  ({ __identifier: s, __selected: r, ...c }) => c
                )
              );
          },
          deep: !0,
        },
        options: {
          handler() {
            this.constructCompData();
          },
          deep: !0,
        },
        searchInputText() {
          (this.searchInput = this.searchInputText), this.keepMenuOpen();
        },
      },
      created() {
        this.constructCompData(),
          this.keepMenuOpenOnRender && this.keepMenuOpen();
      },
      methods: {
        constructCompData() {
          try {
            const t = JSON.parse(JSON.stringify(this.options)),
              { formattedOptions: n, selectedOptions: i } =
                this.parseInputOptions(t);
            if (
              ((this.ddOptions = n),
              (this.selectedOptions = i),
              this.searchInput)
            ) {
              const l = this.filterMatchingOptions(
                this.searchInput,
                this.ddOptions
              );
              (this.currentOptions = l), (this.filteredOptions = l);
            } else (this.currentOptions = n), (this.filteredOptions = n);
          } catch {
            console.error(
              '[vs-autocomplete]: Options must be a valid JSON Array'
            );
          }
        },
        handleSearchInputChange() {
          this.searchInput
            ? (this.currentOptions = this.filterMatchingOptions(
                this.searchInput,
                this.ddOptions
              ))
            : (this.currentOptions = this.ddOptions),
            (this.filteredOptions = this.currentOptions),
            (this.selectedParent = null);
        },
        focusSearchInput() {
          var t;
          (t = this.$refs.searchInput) == null || t.focus();
        },
        toggleDropdownMenu(t) {
          t.stopPropagation(),
            (this.menuIsOpen = !this.menuIsOpen),
            this.focusSearchInput();
        },
        closeDropdownMenu() {
          var t;
          (this.menuIsOpen = !1),
            ((t = this.searchInput) != null && t.trim().length) ||
              ((this.searchInput = ''),
              (this.selectedParent = null),
              (this.filteredOptions = this.ddOptions),
              (this.currentOptions = this.ddOptions),
              (this.selectedIndex = -1));
        },
        keepMenuOpen(t) {
          t == null || t.stopPropagation(),
            this.menuIsOpen || (this.menuIsOpen = !0),
            this.focusSearchInput();
        },
        closeDropdownMenuOnBlur(t) {
          var n;
          ((n = t.path || t.composedPath()) != null &&
            n.includes(this.$refs.dropdown)) ||
            this.closeDropdownMenu();
        },
        parseInputOptions(t = [], n = [], i = []) {
          return (
            t.forEach((l) => {
              var r;
              const s = [...n, l.label];
              (l.__identifier = s.join('__')),
                (r = l.children) != null && r.length
                  ? this.parseInputOptions(l.children, s, i)
                  : l.selected && i.push(l);
            }),
            { formattedOptions: t, selectedOptions: i }
          );
        },
        isOptionSelected(t) {
          return (
            this.selectedOptions.findIndex(
              (n) => n.__identifier === t.__identifier
            ) > -1
          );
        },
        hasSelectedOptions(t) {
          return t.some((n) => {
            var i;
            return (i = n.children) != null && i.length
              ? this.hasSelectedOptions(n.children)
              : this.isOptionSelected(n);
          });
        },
        goToPreviousOptions(t = null, n = this.filteredOptions) {
          var i;
          for (const l of n)
            if ((i = l.children) != null && i.length) {
              if (
                l.__identifier === this.selectedParent.__identifier &&
                l.children.length === this.currentOptions.length
              ) {
                (this.currentOptions = n), (this.selectedParent = t);
                return;
              }
              this.goToPreviousOptions(l, l.children);
            }
        },
        filterMatchingOptions(t, n) {
          var l;
          let i = [];
          for (const s of n)
            if (s.label.toLowerCase().includes(t.toLowerCase())) i.push(s);
            else if ((l = s.children) != null && l.length) {
              const r = this.filterMatchingOptions(t, s.children);
              r.length && i.push({ ...s, children: r });
            }
          return i;
        },
        selectOption(t) {
          var i;
          const n = this.currentOptions[t];
          if ((i = n.children) != null && i.length)
            (this.selectedParent = n), (this.currentOptions = n.children);
          else if (
            n.__selected ||
            this.isOptionSelected(n, this.selectedParent)
          ) {
            if (this.multiple) {
              const l = this.selectedOptions.findIndex(
                (s) => s.__identifier === n.__identifier
              );
              l > -1 &&
                (this.selectedOptions = [
                  ...this.selectedOptions.slice(0, l),
                  ...this.selectedOptions.slice(l + 1),
                ]);
            } else this.selectedOptions = [];
            this.currentOptions[t].__selected = !1;
          } else
            this.multiple
              ? (this.selectedOptions = [...this.selectedOptions, n])
              : ((this.selectedOptions = [n]), this.closeDropdownMenu()),
              (this.currentOptions[t].__selected = !0);
        },
        handleKeyDown(t) {
          var i, l, s, r, c, h;
          const { key: n } = t;
          if (n === 'Escape') this.closeDropdownMenu();
          else if (n === 'Enter' || n.length === 1) {
            if ((this.menuIsOpen || this.keepMenuOpen(t), n === 'Enter')) {
              if (this.selectedParent && this.selectedIndex === 0)
                this.goToPreviousOptions(), (this.selectedIndex = 0);
              else if (this.selectedIndex !== -1) {
                const o = this.selectedParent
                  ? this.selectedIndex - 1
                  : this.selectedIndex;
                if (!((i = this.currentOptions[o]) != null && i.disabled)) {
                  const d =
                    (l = this.selectedParent) == null ? void 0 : l.label;
                  this.selectOption(o),
                    d !==
                      ((s = this.selectedParent) == null ? void 0 : s.label) &&
                      (this.selectedParent
                        ? (this.selectedIndex = 1)
                        : (this.selectedIndex = 0));
                }
              }
            }
          } else if (n === 'ArrowUp')
            if (this.selectedIndex === 0) {
              const o = this.currentOptions.length;
              this.selectedIndex = this.selectedParent ? o : o - 1;
            } else this.selectedIndex--;
          else if (n === 'ArrowRight') {
            const o = this.selectedParent
              ? this.selectedIndex - 1
              : this.selectedIndex;
            !((r = this.currentOptions[o]) != null && r.disabled) &&
              (h =
                (c = this.currentOptions[o]) == null ? void 0 : c.children) !=
                null &&
              h.length &&
              (this.selectOption(o),
              this.selectedParent && (this.selectedIndex = 1));
          } else if (n === 'ArrowDown') {
            const o = this.currentOptions.length;
            this.selectedIndex === (this.selectedParent ? o : o - 1)
              ? (this.selectedIndex = 0)
              : this.selectedIndex++;
          } else
            n === 'ArrowLeft' &&
              this.selectedParent &&
              (this.goToPreviousOptions(), (this.selectedIndex = 0));
        },
      },
    },
    C = { class: 'v-tree-dropdown', ref: 'dropdown' },
    D = { class: 'v-dd' },
    P = { for: 'v-dd-search__input', id: 'v-dd-label' },
    M = ['aria-expanded'],
    V = ['aria-controls', 'aria-activedescendant'],
    B = ['innerHTML'],
    E = ['aria-multiselectable'],
    N = { key: 0, class: 'v-dd-option no-data', role: 'option' },
    T = { class: 'u-truncate label' },
    z = ['id', 'onClick', 'aria-selected', 'disabled'],
    L = { class: 'u-truncate' };
  function A(t, n, i, l, s, r) {
    var h;
    const c = e.resolveComponent('svg-icon');
    return (
      e.openBlock(),
      e.createElementBlock(
        'div',
        C,
        [
          e.createElementVNode('div', D, [
            e.createElementVNode('label', P, e.toDisplayString(i.label), 1),
            e.createElementVNode(
              'div',
              {
                class: e.normalizeClass(
                  'v-dd-search' +
                    (s.menuIsOpen ? ' active' : '') +
                    (i.compact ? ' compact' : '')
                ),
                onClick:
                  n[3] ||
                  (n[3] = (...o) =>
                    r.toggleDropdownMenu && r.toggleDropdownMenu(...o)),
                'aria-haspopup': 'listbox',
                'aria-expanded': '' + s.menuIsOpen,
                'aria-owns': 'v-dd-options-menu',
                'aria-labelledby': 'v-dd-label',
              },
              [
                e.createVNode(c, { icon: 'zd-search', name: 'Search' }),
                e.withDirectives(
                  e.createElementVNode(
                    'input',
                    {
                      ref: 'searchInput',
                      type: 'text',
                      autocomplete: 'new-password',
                      id: 'v-dd-search__input',
                      class: e.normalizeClass(
                        'c-txt v-dd-input' + (s.menuIsOpen ? '' : ' hide')
                      ),
                      'onUpdate:modelValue':
                        n[0] || (n[0] = (o) => (s.searchInput = o)),
                      onClick:
                        n[1] ||
                        (n[1] = (...o) =>
                          r.keepMenuOpen && r.keepMenuOpen(...o)),
                      onKeydown:
                        n[2] ||
                        (n[2] = (...o) =>
                          r.handleKeyDown && r.handleKeyDown(...o)),
                      role: 'combobox',
                      'aria-labelledby': 'v-dd-label',
                      'aria-autocomplete': 'list',
                      'aria-controls': s.menuIsOpen ? 'v-dd-options-menu' : !1,
                      'aria-activedescendant': s.menuIsOpen
                        ? 'v-dd-option-' + s.selectedIndex
                        : !1,
                    },
                    null,
                    42,
                    V
                  ),
                  [[e.vModelText, s.searchInput]]
                ),
                e.withDirectives(
                  e.createElementVNode(
                    'div',
                    {
                      class: 'c-txt u-truncate',
                      innerHTML: s.selectedOptions
                        .map((o) => o.label)
                        .join(', '),
                    },
                    null,
                    8,
                    B
                  ),
                  [[e.vShow, !s.menuIsOpen]]
                ),
                e.createVNode(
                  c,
                  {
                    icon: 'zd-down-pointer',
                    name: s.menuIsOpen ? 'Up arrow' : 'Down arrow',
                    class: e.normalizeClass(s.menuIsOpen ? 'open' : 'close'),
                  },
                  null,
                  8,
                  ['name', 'class']
                ),
              ],
              10,
              M
            ),
          ]),
          e.withDirectives(
            e.createElementVNode(
              'ul',
              {
                ref: 'menu',
                id: 'v-dd-options-menu',
                class: e.normalizeClass(i.compact ? 'compact' : ''),
                role: 'listbox',
                'aria-labelledby': 'v-dd-label',
                'aria-multiselectable': !!i.multiple,
              },
              [
                (h = s.currentOptions) != null && h.length
                  ? e.createCommentVNode('', !0)
                  : (e.openBlock(),
                    e.createElementBlock('li', N, [
                      e.createElementVNode(
                        'span',
                        null,
                        e.toDisplayString(i.noSearchResultsText),
                        1
                      ),
                    ])),
                s.selectedParent
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'li',
                      {
                        key: 1,
                        id: 'v-dd-option-0',
                        class: e.normalizeClass(
                          'v-dd-option parent-option' +
                            (s.selectedIndex === 0 ? ' active' : '')
                        ),
                        onClick:
                          n[4] || (n[4] = (o) => r.goToPreviousOptions()),
                        role: 'option',
                      },
                      [
                        e.createVNode(c, {
                          icon: 'zd-down-pointer',
                          name: 'Left arrow',
                          iconDescription: 'Click to go back to previous menu',
                          color: '#1f73b7',
                        }),
                        e.createElementVNode(
                          'span',
                          T,
                          e.toDisplayString(s.selectedParent.label),
                          1
                        ),
                      ],
                      2
                    ))
                  : e.createCommentVNode('', !0),
                (e.openBlock(!0),
                e.createElementBlock(
                  e.Fragment,
                  null,
                  e.renderList(s.currentOptions, (o, d) => {
                    var f, m, O, I, _;
                    return (
                      e.openBlock(),
                      e.createElementBlock(
                        'li',
                        {
                          key: o.label,
                          id: 'v-dd-option-' + (s.selectedParent ? d + 1 : d),
                          class: e.normalizeClass(
                            'v-dd-option' +
                              (s.selectedIndex ===
                              (s.selectedParent ? d + 1 : d)
                                ? ' active'
                                : '')
                          ),
                          onClick: (j) => r.selectOption(d),
                          role: 'option',
                          'aria-selected':
                            s.selectedIndex === (s.selectedParent ? d + 1 : d),
                          disabled:
                            o.disabled ||
                            (i.maxSelectableCount &&
                              ((f = s.selectedOptions) == null
                                ? void 0
                                : f.length) >= i.maxSelectableCount &&
                              !((m = o.children) != null && m.length) &&
                              !r.isOptionSelected(o)),
                        },
                        [
                          (O = o.children) != null &&
                          O.length &&
                          r.hasSelectedOptions(o.children)
                            ? (e.openBlock(),
                              e.createBlock(c, {
                                key: 0,
                                icon: 'zd-contains',
                                name: 'Contains',
                                color: '#1f73b7',
                              }))
                            : e.createCommentVNode('', !0),
                          !((I = o.children) != null && I.length) &&
                          r.isOptionSelected(o)
                            ? (e.openBlock(),
                              e.createBlock(c, {
                                key: 1,
                                icon: 'zd-check',
                                name: 'Selected',
                                color: '#1f73b7',
                              }))
                            : e.createCommentVNode('', !0),
                          e.createElementVNode(
                            'span',
                            L,
                            e.toDisplayString(o.label),
                            1
                          ),
                          (_ = o.children) != null && _.length
                            ? (e.openBlock(),
                              e.createBlock(c, {
                                key: 2,
                                icon: 'zd-down-pointer',
                                name: 'Right arrow',
                                iconDescription:
                                  'Click to open sub-menu options',
                              }))
                            : e.createCommentVNode('', !0),
                        ],
                        10,
                        z
                      )
                    );
                  }),
                  128
                )),
              ],
              10,
              E
            ),
            [[e.vShow, s.menuIsOpen]]
          ),
        ],
        512
      )
    );
  }
  const u = a(x, [
      ['render', A],
      ['__scopeId', 'data-v-ae216d09'],
    ]),
    q = {
      install(t, n) {
        t.component('VsAutocomplete', u);
      },
    };
  let p = null;
  return (
    typeof window < 'u'
      ? (p = window.Vue)
      : typeof global < 'u' && (p = global.Vue),
    p && p.use && p.use(q),
    u
  );
});
