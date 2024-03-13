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
        <input ref="searchInput" type="text" autocomplete="off" :id="'v-dd-search__input' + uniqueId"
          :class="'c-txt v-dd-input' + (!menuIsOpen ? ' hide' : '')" v-model="searchInput" @click="keepMenuOpen"
          @keydown="handleKeyDown" role="combobox" :aria-labelledby="'v-dd-label' + uniqueId" aria-autocomplete="list"
          :aria-controls="menuIsOpen ? 'v-dd-options-menu' + uniqueId : false"
          :aria-activedescendant="menuIsOpen ? ('v-dd-option-' + selectedIndex) : false" />
        <div v-show="!menuIsOpen" class="c-txt u-truncate"
          v-html="selectedOptions.map(option => option.label).join(', ')">
        </div>
        <svg-icon icon="zd-down-pointer" :name="menuIsOpen ? 'Up arrow' : 'Down arrow'"
          :class="menuIsOpen ? 'open' : 'close'" />
      </div>
    </div>
    <ul ref="menu" :id="'v-dd-options-menu' + uniqueId" :class="compact ? 'compact' : ''" v-show="menuIsOpen"
      role="listbox" :aria-labelledby="'v-dd-label' + uniqueId" :aria-multiselectable="!!multiple">
      <li class="v-dd-option no-data" v-if="!currentOptions?.length" role="option">
        <span>{{ noSearchResultsText }}</span>
      </li>
      <li v-if="selectedParent" :id="'v-dd-option-0' + uniqueId"
        :class="'v-dd-option parent-option' + (selectedIndex === 0 ? ' active' : '')" @click="goToPreviousOptions()"
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
        <span class="u-truncate">{{ option.label }}</span>
        <svg-icon icon="zd-down-pointer" name="Right arrow" iconDescription="Click to open sub-menu options"
          v-if="option.children?.length" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SvgIcon from './shared/SvgIcon.vue';

export default defineComponent({
  components: {
    SvgIcon,
  },

  props: {
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
  },

  emits: ['update:modelValue', 'open', 'close'],

  data() {
    return {
      ddOptions: [], // options(from prop) with identifier to be everywhere in the component
      searchInput: this.searchInputText, // The value of the search input
      menuIsOpen: false, // true if the dropdown menu is open
      selectedParent: null, // Parent option of the current displayed options
      selectedOptions: [], // All selected options
      currentOptions: [], // Current options to display
      filteredOptions: [], // All options filtered by the search input

      /* A11y */
      selectedIndex: -1, // Index of the selected option
      selectedIndices: [],
      currentIndex: -1, // Index of the current prog focussed option
      uniqueId: Math.random().toString(36).substring(2, 8)
    };
  },

  watch: {
    menuIsOpen() {
      if (this.menuIsOpen) {
        document.addEventListener('click', this.closeDropdownMenuOnBlur);
        this.$emit('open', this.$refs.dropdown, this.$refs.menu);
      } else {
        document.removeEventListener('click', this.closeDropdownMenuOnBlur);
        this.$emit('close', this.$refs.dropdown, this.$refs.menu);
      }
    },

    searchInput() {
      this.handleSearchInputChange();
    },

    selectedOptions: {
      handler(newOptions, oldOptions) {
        const oldOptionIdentifiers = oldOptions.map(option => option.__identifier);
        const newOptionIdentifiers = newOptions.map(option => option.__identifier);
        if (
          newOptions.length !== oldOptions.length ||
          !newOptionIdentifiers.every(identifier => oldOptionIdentifiers.includes(identifier))
        ) {
          try {
            this.$emit(
              'update:modelValue',
              this.selectedOptions.map(({ __identifier, __selected, ...option }) => option),
            )
          } catch (error) {
            console.log('Unknown Event ', error);
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
    if (this.keepMenuOpenOnRender) {
      this.keepMenuOpen();
    }
  },

  methods: {
    // TODO: Check if all options under parent can be selected - [LATER]
    constructCompData() {
      try {
        const options = JSON.parse(JSON.stringify(this.options));
        const { formattedOptions, selectedOptions } = this.parseInputOptions(options);
        this.ddOptions = formattedOptions;
        this.selectedOptions = selectedOptions;
        if (this.searchInput) {
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

    handleSearchInputChange() {
      if (this.searchInput) {
        this.currentOptions = this.filterMatchingOptions(this.searchInput, this.ddOptions);
      } else {
        this.currentOptions = this.ddOptions;
      }
      this.filteredOptions = this.currentOptions;
      this.selectedParent = null;
    },

    focusSearchInput() {
      this.$refs.searchInput?.focus();
    },

    toggleDropdownMenu(event) {
      event.stopPropagation();
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
        this.menuIsOpen = true;
      }
      this.focusSearchInput();
    },

    closeDropdownMenuOnBlur(event) {
      if (!(event.path || event.composedPath())?.includes(this.$refs.dropdown)) this.closeDropdownMenu();
    },

    parseInputOptions(options = [], keys = [], selectedOptions = []) {
      options.forEach(option => {
        const newKeys = [...keys, option.label];
        if (typeof option.value !== 'undefined') {
          newKeys.push(option.value);
        }
        option.__identifier = newKeys.join('__');
        if (option.children?.length) {
          this.parseInputOptions(option.children, newKeys, selectedOptions);
        } else if (option.selected) {
          selectedOptions.push(option);
        }
      });
      return { formattedOptions: options, selectedOptions };
    },

    isOptionSelected(option) {
      return this.selectedOptions.findIndex(selectedOption => selectedOption.__identifier === option.__identifier) > -1;
    },

    hasSelectedOptions(options) {
      return options.some(option =>
        option.children?.length ? this.hasSelectedOptions(option.children) : this.isOptionSelected(option),
      );
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
      } else {
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
      }
    },

    handleKeyDown(event) {
      const { key } = event;
      if (key === 'Escape') {
        this.closeDropdownMenu();
      } else if (key === 'Enter' || key.length === 1) {
        if (!this.menuIsOpen) this.keepMenuOpen(event);
        if (key === 'Enter') {
          if (this.selectedParent && this.selectedIndex === 0) {
            this.goToPreviousOptions();
            this.selectedIndex = 0;
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
      } else if (key === 'ArrowLeft') {
        if (this.selectedParent) {
          this.goToPreviousOptions();
          this.selectedIndex = 0;
        }
      }
    },
  },
});
</script>

<style src="./Dropdown.css" scoped></style>