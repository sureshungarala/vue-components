<!--
 * Ability to single/multi-select
 * Ability to select same option from different groups/parents
-->

<template>
  <div class="v-tree-dropdown" ref="dropdown">
    <div class="v-dd">
      <label :for="'v-dd-search__input' + uniqueId" :id="'v-dd-label' + uniqueId">
        {{ label }}
      </label>
      <div class="v-dd-label-hint" :aria-labelledby="'v-dd-label' + uniqueId" v-if="labelHint">
        {{ labelHint }}
      </div>
      <div :class="'v-dd-search' + (menuIsOpen ? ' active' : '') + (compact ? ' compact' : '')"
        @click="toggleDropdownMenu" aria-haspopup="listbox" :aria-expanded="'' + menuIsOpen"
        :aria-owns="'v-dd-options-menu' + uniqueId" :aria-labelledby="'v-dd-label' + uniqueId">
        <svg-icon icon="zd-search" name="Search" />
        <input ref="searchInput" type="text" :placeholder="placeholder" autocomplete="off"
          :id="'v-dd-search__input' + uniqueId" :class="'c-txt v-dd-input' + (!menuIsOpen ? ' hide' : '')"
          v-model="searchInput" @click="keepMenuOpen" @keydown="handleKeyDown" role="combobox"
          :aria-labelledby="'v-dd-label' + uniqueId" aria-autocomplete="list"
          :aria-controls="menuIsOpen ? 'v-dd-options-menu' + uniqueId : false"
          :aria-activedescendant="menuIsOpen ? ('v-dd-option-' + selectedIndex) : false" />
        <div v-show="!menuIsOpen" :class="'c-txt u-truncate' + (selectedOptions?.length ? '' : ' placeholder')"
          v-html="selectedOptions?.length ? selectedOptions.map(option => option.label).join(', ') : placeholder">
        </div>
        <svg-icon icon="zd-down-pointer" :name="menuIsOpen ? 'Up arrow' : 'Down arrow'"
          :class="menuIsOpen ? 'open' : 'close'" />
      </div>
    </div>
    <ul ref="menu" :id="'v-dd-options-menu' + uniqueId" :class="compact ? 'compact' : ''" v-show="menuIsOpen"
      role="listbox" :aria-labelledby="'v-dd-label' + uniqueId" :aria-multiselectable="!!multiple">
      <li class="v-dd-option" disabled="disabled" v-if="filterDataExternally.filterting">
        <span>{{ filterDataExternally.optionLabel }}</span>
      </li>
      <template v-else>
        <li class="v-dd-option no-data" v-if="!currentOptions?.length" role="option">
          <span>{{ noSearchResultsText }}</span>
        </li>
        <li v-if="selectedParent" :id="'v-dd-option-0' + uniqueId"
          :class="'v-dd-option parent-option' + (selectedIndex === 0 ? ' active' : '')" @click="showPreviousOptions()"
          role="option">
          <svg-icon icon="zd-down-pointer" name="Left arrow" iconDescription="Click to go back to previous menu"
            color="#1f73b7" />
          <span class="u-truncate label">{{ selectedParent.label }}</span>
        </li>
        <li v-for="(option, index) in currentOptions" :key="option.label + '__' + (option.value ?? index)"
          :id="'v-dd-option-' + (selectedParent ? index + 1 : index) + uniqueId"
          :class="'v-dd-option' + (selectedIndex === (selectedParent ? index + 1 : index) ? ' active' : '')"
          @click="selectOption(index)" role="option"
          :aria-selected="selectedIndex === (selectedParent ? index + 1 : index) ? true : false"
          :disabled="(option.disabled || (maxSelectableCount && selectedOptions?.length >= maxSelectableCount && !option.children?.length && !isOptionSelected(option))) ? 'disabled' : null">
          <svg-icon icon="zd-contains" name="Contains" color="#1f73b7"
            v-if="option.children?.length && hasSelectedOptions(option.children)" />
          <svg-icon icon="zd-check" name="Selected" color="#1f73b7"
            v-if="!option.children?.length && isOptionSelected(option)" />
          <div class="u-truncate" v-html="renderOption(option)"></div>
          <svg-icon icon="zd-down-pointer" name="Right arrow" iconDescription="Click to open sub-menu options"
            v-if="option.children?.length" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import SvgIcon from './shared/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },

  props: {
    // v-model
    value: {
      type: Array,
      default: [],
    },
    label: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      default: [],
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
      required: false,
    },
    searchInputText: {
      type: String,
      default: '',
      required: false,
    },
    searchOptionMatcher: {
      type: Function,
      default: () => { },
      required: false
    },
    keepMenuOpenOnRender: {
      type: Boolean,
      default: false,
      required: false,
    },
    maxSelectableCount: {
      type: Number,
      default: 0,
      required: false,
    },
    compact: {
      type: Boolean,
      default: false,
      required: false,
    },
    noSearchResultsText: {
      type: String,
      default: 'No options found',
      required: false,
    },
    labelHint: {
      type: String,
      default: '',
      required: false,
    },
    searchOnInput: {
      type: [Function, Object],
      default: () => { },
      required: false,
      validator: (value) => {
        if (typeof value === 'function' || (typeof value === 'object' && typeof value.handler === 'function')) return true;
        return false;
      },
    },
    renderOption: {
      type: Function,
      default: (option) => option?.label || '',
      required: false,
    }
  },

  emits: ['input', 'update:modelValue', 'open', 'close'],

  data() {
    return {
      ddOptions: [], // options(from prop) with identifier to be everywhere in the component
      searchInput: this.searchInputText, // The value of the search input
      menuIsOpen: false, // true if the dropdown menu is open
      selectedParent: null, // Parent option of the current displayed options
      selectedOptions: this.value ?? [], // All selected options
      currentOptions: [], // Current options to display
      filteredOptions: [], // All options filtered by the search input
      filterDataExternally: {
        filterting: false, // true if the options are being filtered externally via searchOnInput prop
        optionLabel: 'Loading...', // Text to display when options are being filtered externally
        fireOnInitialMenuOpen: false, // true if the options are to be fetched on initial menu open via searchOnInput prop
        debounceTime: 300, // Debounce time for search input
        minSearchLength: 0, // Minimum search input length to start filtering
      },
      menuWasOpen: false, // set to true when the menu is opened for the first time

      /* A11y */
      selectedIndex: -1, // Index of the selected option
      selectedIndices: [],
      currentIndex: -1, // Index of the current prog focussed option
      uniqueId: Math.random().toString(36).substring(2, 8),
      debouncedSearchInputChange: this.debounce(this.handleSearchInputChange, this.searchOnInput?.debounceTime ?? 300),
    };
  },

  watch: {

    value: {
      handler(newOptions = [], oldOptions) {
        if (this.areArraysEqual(this.selectedOptions, newOptions)) return;
        if (!newOptions.length) {
          // Reset the selected options if the value is empty
          this.selectedOptions = [];
          return;
        }
        const [newlySelectedOptions, deselectedOptions] = this.findDifferenceInArrays(newOptions, this.selectedOptions);
        let updatedSelectedOptions = [...this.selectedOptions];
        deselectedOptions.forEach(option => {
          const matchedIndex = updatedSelectedOptions.findIndex(
            selectedOption => selectedOption.__identifier === option.__identifier,
          );
          if (matchedIndex > -1) {
            updatedSelectedOptions = [
              ...updatedSelectedOptions.slice(0, matchedIndex),
              ...updatedSelectedOptions.slice(matchedIndex + 1),
            ];
          }
        });
        newlySelectedOptions.forEach(option => {
          const identifier = this.findOptionIdentifier(option, this.ddOptions);
          if (identifier) {
            updatedSelectedOptions = [...updatedSelectedOptions, {
              ...this.cloneOption(option),
              __identifier: identifier,
              __selected: true,
            }];
          }
        });
        const finalSelectedOptions = this.multiple ? updatedSelectedOptions : updatedSelectedOptions.length ? [updatedSelectedOptions[0]] : [];
        if (!this.areArraysEqual(updatedSelectedOptions, this.selectedOptions))
          this.selectedOptions = updatedSelectedOptions;
      },
      deep: true,
    },

    menuIsOpen() {
      if (this.menuIsOpen) {
        document.addEventListener('click', this.closeDropdownMenuOnBlur);
        this.$emit('open', this.$refs.dropdown, this.$refs.menu, this.searchInput);
      } else {
        document.removeEventListener('click', this.closeDropdownMenuOnBlur);
        this.$emit('close', this.$refs.dropdown, this.$refs.menu, this.searchInput);
      }
    },

    searchInput() {
      this.debouncedSearchInputChange();
    },

    selectedOptions: {
      handler(newOptions, oldOptions) {
        const oldOptionIdentifiers = oldOptions.map(option => option.__identifier);
        const newOptionIdentifiers = newOptions.map(option => option.__identifier);
        if (
          (newOptions.length !== oldOptions.length ||
            !newOptionIdentifiers.every(identifier => oldOptionIdentifiers.includes(identifier)))
          && !this.areArraysEqual(newOptions, this.value)
        ) {
          try {
            this.$emit(
              'input',
              this.selectedOptions.map(({ __identifier, __selected, ...option }) => option),
            );
          } catch (error) {
            console.error('[vs-autocomplete]: Unknown Event ', error);
          }
        }
      },
      deep: true,
    },

    options: {
      handler() {
        this.constructCompData();
      },
      deep: true,
    },

    searchInputText() {
      this.searchInput = this.searchInputText;
      this.keepMenuOpen();
    },
  },

  created() {
    this.constructCompData();
    if (typeof this.searchOnInput === 'object') {
      this.filterDataExternally.optionLabel = this.searchOnInput.loadingOptionLabel || 'Loading...';
      this.filterDataExternally.fireOnInitialMenuOpen = this.searchOnInput.fireOnInitialMenuOpen || false;
      this.filterDataExternally.minSearchLength = this.searchOnInput.minSearchLength || 0;
    }
    if (this.keepMenuOpenOnRender) {
      this.keepMenuOpen();
    }
  },

  methods: {
    debounce(fn, wait) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(context, args), wait);
      };
    },

    cloneOption(option) {
      // Shallow clone for basic properties
      const clone = { ...option };
      // Only deep clone children
      if (option.children) {
        clone.children = option.children.map(child => this.cloneOption(child));
      }
      return clone;
    },

    // TODO: Check if all options under parent can be selected - [LATER]
    constructCompData(options = this.options) {
      try {
        const { formattedOptions, selectedOptions } = this.parseInputOptions(options);
        // prioritize modelValue over selectedOptions(via selected: true in options prop)
        if (this.value.length) {
          const modelValueSelections = this.value.map(option => {
            const identifier = this.findOptionIdentifier(option, formattedOptions);
            return identifier ? {
              ...this.cloneOption(option),
              __identifier: identifier,
              __selected: true
            } : null;
          }).filter(Boolean);
          this.selectedOptions = this.multiple ? modelValueSelections :
            modelValueSelections.length ? [modelValueSelections[0]] : [];
        } else {
          this.selectedOptions = this.multiple ? selectedOptions :
            selectedOptions.length ? [selectedOptions[0]] : [];
        }
        this.ddOptions = formattedOptions;
        this.selectedOptions = selectedOptions;
        if (this.searchInput && !this.filterDataExternally.filterting) {
          const filteredOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions);
          this.currentOptions = filteredOptions;
          this.filteredOptions = filteredOptions;
        } else {
          this.currentOptions = formattedOptions;
          this.filteredOptions = formattedOptions;
        }
      } catch (_e) {
        console.error('[vs-autocomplete]: Options must be a valid JSON Array');
      }
    },

    fetchDataExternally() {
      let validSearchOnInputProp = false;
      let caller = typeof this.searchOnInput === 'function' ? this.searchOnInput : typeof this.searchOnInput === 'object' ? this.searchOnInput.handler : null;
      if (caller && this.searchInput.length >= this.filterDataExternally.minSearchLength) {
        const result = caller(this.searchInput);
        if (result && typeof result.then === 'function') {
          validSearchOnInputProp = true;
          this.filterDataExternally.filterting = true;
          result.then((options) => {
            if (Array.isArray(options)) {
              this.constructCompData(options);
            } else {
              console.error('[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options');
            }
          }).catch((e) => {
            console.error('[vs-autocomplete]: searchOnInput prop must return a Promise<Array> of options', e);
            this.currentOptions = this.ddOptions;
            this.filteredOptions = this.ddOptions;
            this.selectedParent = null;
          }).finally(() => {
            this.filterDataExternally.filterting = false;
          });
        }
      }
      return validSearchOnInputProp;
    },

    handleSearchInputChange() {
      if (!this.searchInput) {
        this.currentOptions = this.ddOptions;
        this.filteredOptions = this.ddOptions;
        this.selectedParent = null;
        return;
      }
      const validSearchOnInputProp = this.fetchDataExternally();
      if (!validSearchOnInputProp) {
        if (this.searchInput) {
          this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions);
        }
        this.filteredOptions = this.currentOptions;
        this.selectedParent = null;
      }
    },

    focusSearchInput() {
      this.$refs.searchInput?.focus();
    },

    toggleDropdownMenu(event) {
      event.stopPropagation();
      if (!this.menuIsOpen && !this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen) {
        this.menuWasOpen = true;
        this.fetchDataExternally();
      }
      this.menuIsOpen = !this.menuIsOpen;
      this.focusSearchInput();
    },

    closeDropdownMenu() {
      this.menuIsOpen = false;
      if (!this.searchInput?.trim().length) {
        this.searchInput = '';
        this.selectedParent = null;
        this.filteredOptions = this.ddOptions;
        this.currentOptions = this.ddOptions;
        this.selectedIndex = -1;
      }
    },

    keepMenuOpen(event) {
      event?.stopPropagation();
      if (!this.menuIsOpen) {
        if (!this.menuWasOpen && this.filterDataExternally.fireOnInitialMenuOpen) {
          this.menuWasOpen = true;
          this.fetchDataExternally();
        }
        this.menuIsOpen = true;
      }
      this.focusSearchInput();
    },

    closeDropdownMenuOnBlur(event) {
      if (!(event.path || event.composedPath())?.includes(this.$refs.dropdown)) this.closeDropdownMenu();
    },

    parseInputOptions(options = [], keys = [], selectedOptions = []) {
      const formattedOptions = [];
      options.forEach(option => {
        // Use option' id if available
        const newKeys = [...keys, option.id ?? option.label];
        const clonedOption = this.cloneOption(option);
        clonedOption.__identifier = newKeys.join('__');
        formattedOptions.push(clonedOption);
        if (clonedOption.children?.length) {
          const { formattedOptions: childFormattedOptions } = this.parseInputOptions(clonedOption.children, newKeys, selectedOptions);
          clonedOption.children = childFormattedOptions;
        } else if (clonedOption.selected) {
          selectedOptions.push({
            ...clonedOption,
            __selected: true,
          });
        }
      });
      return { formattedOptions, selectedOptions };
    },

    isOptionSelected(option) {
      return this.selectedOptions.findIndex(selectedOption => selectedOption.__identifier === option.__identifier) > -1;
    },

    hasSelectedOptions(options) {
      return options.some(option =>
        option.children?.length ? this.hasSelectedOptions(option.children) : this.isOptionSelected(option),
      );
    },

    showPreviousOptions() {
      this.goToPreviousOptions();
      this.selectedIndex = this.selectedParent ? 1 : 0;
      this.focusSearchInput();
    },

    goToPreviousOptions(parent = null, options = this.filteredOptions) {
      for (const option of options) {
        if (option.children?.length) {
          if (
            option.__identifier === this.selectedParent.__identifier &&
            option.children.length === this.currentOptions.length
          ) {
            this.currentOptions = options;
            this.selectedParent = parent;
            return;
          }
          this.goToPreviousOptions(option, option.children);
        }
      }
    },

    filterMatchingOptions(searchInput, options) {
      let matchedOptions = [];
      for (const option of options) {
        const { __identifier, __selected, ...rawOption } = option;
        const optionMatched = this.searchOptionMatcher(searchInput, rawOption);
        if (typeof optionMatched === 'boolean' ? optionMatched : option.label.toLowerCase().includes(searchInput.toLowerCase())) {
          matchedOptions.push(option);
        } else if (option.children?.length) {
          const matchedSubOptions = this.filterMatchingOptions(searchInput, option.children);
          if (matchedSubOptions.length) {
            matchedOptions.push({ ...option, children: matchedSubOptions });
          }
        }
      }
      return matchedOptions;
    },

    selectOption(index) {
      const option = this.currentOptions[index];
      if (option.children?.length) {
        this.selectedParent = option;
        this.currentOptions = option.children;
        // replace keyboard focussed index with the clicked index
        this.selectedIndex = 1;
        return;
      }
      if (option.__selected || this.isOptionSelected(option, this.selectedParent)) {
        // this __selected is transient for current displayed options(`currentOptions`). 
        // Not to be confused with `selected` prop for `option` type.
        if (this.multiple) {
          const matchedIndex = this.selectedOptions.findIndex(
            selectedOption => selectedOption.__identifier === option.__identifier,
          );
          if (matchedIndex > -1) {
            this.selectedOptions = [
              ...this.selectedOptions.slice(0, matchedIndex),
              ...this.selectedOptions.slice(matchedIndex + 1),
            ];
          }
        } else {
          this.selectedOptions = [];
        }
        this.currentOptions[index].__selected = false;
      } else {
        if (this.multiple) {
          this.selectedOptions = [...this.selectedOptions, option];
        } else {
          const prevSelectedOptionIndex = this.currentOptions.findIndex(
            option => option.__selected === true,
          );
          if (prevSelectedOptionIndex > -1) this.currentOptions[prevSelectedOptionIndex].__selected = false;
          this.selectedOptions = [option];
          this.closeDropdownMenu();
        }
        this.currentOptions[index].__selected = true;
      }
      // replace keyboard focussed index with the clicked index
      this.selectedIndex = this.selectedParent ? index + 1 : index;
      this.focusSearchInput();
    },

    handleKeyDown(event) {
      const { key } = event;
      if (key === 'Escape') {
        this.closeDropdownMenu();
      } else if (key === 'Enter' || key.length === 1) {
        if (!this.menuIsOpen) this.keepMenuOpen(event);
        if (key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxSelectableCount && this.selectedOptions?.length >= this.maxSelectableCount) return;
          if (this.selectedParent && this.selectedIndex === 0) {
            this.showPreviousOptions();
          } else if (this.selectedIndex !== -1) {
            // initial dropdown open state
            const index = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            if (!this.currentOptions[index]?.disabled) {
              const previousParentLabel = this.selectedParent?.label;
              this.selectOption(index);
              if (previousParentLabel !== this.selectedParent?.label) {
                if (this.selectedParent) this.selectedIndex = 1;
                else this.selectedIndex = 0;
              }
            }
          }
        }
      } else if (key === 'ArrowUp') {
        if (this.selectedIndex === 0) {
          const totalOptions = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? totalOptions : totalOptions - 1;
        } else {
          this.selectedIndex--;
        }
        const selectedOption = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        selectedOption?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      } else if (key === 'ArrowRight') {
        const index = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        if (!this.currentOptions[index]?.disabled && this.currentOptions[index]?.children?.length) {
          this.selectOption(index);
          if (this.selectedParent) this.selectedIndex = 1;
        }
      } else if (key === 'ArrowDown') {
        const totalOptions = this.currentOptions.length;
        if (this.selectedIndex === (this.selectedParent ? totalOptions : totalOptions - 1)) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex++;
        }
        const selectedOption = this.$refs.menu.querySelector(`#v-dd-option-${this.selectedIndex}${this.uniqueId}`);
        selectedOption?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      } else if (key === 'ArrowLeft') {
        if (this.selectedParent) {
          this.showPreviousOptions();
        }
      }
    },

    /**
     * Returns the identifier of the matched option.
     * @param option Option from v-model. This doesn't have internal keys like __identifier
     * @param options constructed options
     */
    findOptionIdentifier(option, options) {
      for (const opt of options) {
        if (opt.children?.length) {
          const matchedOptionIdentifer = this.findOptionIdentifier(option, opt.children);
          if (matchedOptionIdentifer) return matchedOptionIdentifer;
        } else if (this.areObjectsEqual(opt, option)) {
          return opt.__identifier;
        }
      }
      return null;
    },

    /**
     * check if two objects are equal
     */
    areObjectsEqual(obj1, obj2) {
      if (obj1 === obj2) return true;
      if (typeof obj1 !== typeof obj2 || obj1 === null || obj2 === null) return false;

      if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
      if (Array.isArray(obj1)) {
        return obj1.length === obj2.length &&
          obj1.every(item1 => obj2.some(item2 => this.areObjectsEqual(item1, item2)));
      }
      const excludedKeys = ['__identifier', '__selected', 'children'];
      const keys1 = Object.keys(obj1).filter(key => !excludedKeys.includes(key));
      const keys2 = Object.keys(obj2).filter(key => !excludedKeys.includes(key));
      if (keys1.length !== keys2.length) return false;

      for (let key of keys1) {
        if (!keys2.includes(key)) return false
        else if (typeof obj1[key] === 'object') {
          if (!this.areObjectsEqual(obj1[key], obj2[key])) return false;
        }
        else if (obj1[key] !== obj2[key]) return false;
      }
      return true;
    },

    /**
     * check if two arrays are equal
     */
    areArraysEqual(arr1, arr2) {
      if (arr1 === arr2) return true;
      if (arr1.length !== arr2.length) return false;
      const sortedArr1 = [...arr1].sort((a, b) => a.label.localeCompare(b.label));
      const sortedArr2 = [...arr2].sort((a, b) => a.label.localeCompare(b.label));
      for (let i = 0; i < sortedArr1.length; i++) {
        if (!this.areObjectsEqual(sortedArr1[i], sortedArr2[i])) return false;
      }
      return true;
    },

    /**
     * Finds the difference between two arrays and returns the elements that are present in arr1 but not in arr2 and vice versa in a tuple.
     * Have to depend on areArraysEqual method & areObjecteEqual method as objects in arr1(from prop) wouldn't have internal keys like __indentifer to easily validate
     * @param newValue new value(v-model) prop value
     * @param selectedOptions current selectedOptions
     */
    findDifferenceInArrays(newValue, selectedOptions) {
      const diff1 = newValue.filter(option => !selectedOptions.some(selectedOption => this.areObjectsEqual(option, selectedOption)));
      const diff2 = selectedOptions.filter(selectedOption => !newValue.some(option => this.areObjectsEqual(option, selectedOption)));
      return [diff1, diff2];
    },

  },
};
</script>

<style src="./Dropdown.css" scoped></style>