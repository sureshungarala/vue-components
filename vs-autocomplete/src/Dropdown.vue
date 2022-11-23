<!--
 * Ability to single/multi-select
 * Ability to select same option from different groups/parents
-->

<template>
 <div class="v-tree-dropdown" ref="dropdown">
   <div class="v-dd">
     <label for="v-dd-search__input" id="v-dd-label">{{ label }}</label>
     <div
       :class="'v-dd-search'+(menuIsOpen ? ' active': '')"
       @click="toggleDropdownMenu"
       aria-haspopup="listbox"
       :aria-expanded="''+menuIsOpen"
       aria-owns="v-dd-options-menu"
       aria-labelledby="v-dd-label"
     >
       <svg-icon icon="zd-search" name="Search" />
       <input
         ref="searchInput"
         type="text"
         autocomplete="off"
         id="v-dd-search__input"
         :class="'c-txt v-dd-input'+(!menuIsOpen ? ' hide': '')"
         v-model="searchInput"
         @click="keepMenuOpen"
         @keyup="handleKeyUp"
         role="combobox"
         aria-labelledby="v-dd-label"
         aria-autocomplete="list"
         :aria-controls="menuIsOpen ? 'v-dd-options-menu' : false"
         :aria-activedescendant="menuIsOpen ? ('v-dd-option-'+selectedIndex) : false"
       />
       <div
         v-show="!menuIsOpen"
         class="c-txt u-truncate"
         v-html="selectedOptions.map(option => option.label).join(', ')"
       ></div>
       <svg-icon icon="zd-down-pointer" :name="menuIsOpen ? 'Up arrow' : 'Down arrow'" :class="menuIsOpen ? 'open' : 'close'"/>
     </div>
   </div>
   <ul 
     ref="menu"
     id="v-dd-options-menu"
     v-show="menuIsOpen"
     role="listbox"
     aria-labelledby="v-dd-label"
     :aria-multiselectable="!!multiple"
   >
     <li class="v-dd-option no-data" v-if="!currentOptions?.length" role="option">
       <span>No options found.</span>
     </li>
     <li
       v-if="selectedParent"
       id="v-dd-option-0"
       :class="'v-dd-option parent-option'+ (selectedIndex === 0 ? ' active': '')"
       @click="goToPreviousOptions()"
       role="option"
     >
       <svg-icon icon="zd-down-pointer" name="Left arrow" iconDescription="Click to go back to previous menu" :focusable="true" color="#1f73b7" />
       <span class="u-truncate label">{{ selectedParent.label }}</span>
     </li>
     <li 
       v-for="(option, index) in currentOptions"
       :key="option.label"
       :id="'v-dd-option-'+(selectedParent ? index+1 : index)"
       :class="'v-dd-option'+ (selectedIndex === (selectedParent ? index+1 : index) ? ' active' : '')"
       @click="selectOption(index)"
       role="option"
       :aria-selected="selectedIndex === (selectedParent ? index+1 : index) ? true : false"
     >
       <svg-icon icon="zd-contains" name="Contains" color="#1f73b7" v-if="option.children?.length && hasSelectedOptions(option.children, option)" />
       <svg-icon icon="zd-check" name="Selected" color="#1f73b7" v-if="!option.children?.length && isOptionSelected(option)" />
       <span class="u-truncate">{{ option.label }}</span>
       <svg-icon icon="zd-down-pointer" name="Right arrow" iconDescription="Click to open sub-menu options" v-if="option.children?.length" />
     </li>
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
      label: {
        type: String,
        required: false,
      },
      options: {
        type: Array,
        default: [],
        required: true,
      },
      value: {
        type: Array,
        default: [],
        required: true,
      },
      multiple: {
        type: Boolean,
        default: false,
        required: false,
      },
      delimiter: {
        type: String,
        default: ', ',
        required: false,
      },
    },

    data() {
      return {
        searchInput: '', // The value of the search input
        menuIsOpen: false, // true if the dropdown menu is open
        selectedParent: null, // Parent option of the current displayed options
        selectedOptions: [], // All selected options
        currentOptions: this.options, // Current options to display
        filteredOptions: this.options, // All options filtered by the search input

        /* A11y */
        selectedIndex: -1, // Index of the selected option
        selectedIndices: [],
        currentIndex: -1, // Index of the current prog focussed option
      };
    },

    watch: {
      menuIsOpen() {
        if (this.menuIsOpen) {
          document.addEventListener('click', this.closeDropdownMenuOnBlur);
        } else {
          document.removeEventListener('click', this.closeDropdownMenuOnBlur);
        }
      },

      searchInput() {
        if (this.searchInput) {
          this.currentOptions = this.filterMatchingOptions(this.searchInput, this.options);
        } else {
          this.currentOptions = this.options;
        }
        this.filteredOptions = this.currentOptions;
        this.selectedParent = null;
      },

      selectedOptions() {
        this.$emit('input', this.selectedOptions);
      },
    },

    methods: {
      focusSearchInput() {
        this.$refs.searchInput.focus();
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
          this.filteredOptions = this.options;
          this.currentOptions = this.options;
          this.selectedIndex = -1;
        }
      },

      keepMenuOpen(event) {
        event.stopPropagation();
        if (!this.menuIsOpen) {
          this.menuIsOpen = true;
        }
        this.focusSearchInput();
      },

      closeDropdownMenuOnBlur(event) {
        if (!event.path.includes(this.$refs.dropdown)) this.closeDropdownMenu();
      },

      optionIdentifer(option, parent = this.selectedParent) {
        return [parent?.value, option.label, option.value].join('__');
      },

      isOptionSelected(option, parent) {
        const identifier = this.optionIdentifer(option, parent);
        return this.selectedOptions.findIndex(selectedOption => selectedOption.__identifier === identifier) > -1;
      },

      hasSelectedOptions(options, parent) {
        return options.some(option =>
          option.children?.length
            ? this.hasSelectedOptions(option.children, option)
            : this.isOptionSelected(option, parent),
        );
      },

      goToPreviousOptions(parent = null, options = this.filteredOptions) {
        for (const option of options) {
          if (option.children?.length) {
            if (option.label === this.selectedParent.label && option.children.length === this.currentOptions.length) {
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
          if (option.label.toLowerCase().includes(searchInput.toLowerCase())) {
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
          const identifier = this.optionIdentifer(option);
          if (option.selected) {
            // .selected is transient for current displayed options(`currentOptions`). Hence not used in `selected(Checked icon)` check in template.
            if (this.multiple) {
              const matchedIndex = this.selectedOptions.findIndex(
                selectedOption => selectedOption.__identifier === identifier,
              );
              this.selectedOptions.splice(matchedIndex, 1);
            } else {
              this.selectedOptions = [];
            }
            this.currentOptions[index].selected = false;
          } else {
            const selectedOption = { ...option, __identifier: identifier };
            if (this.multiple) {
              this.selectedOptions.push(selectedOption);
            } else {
              this.selectedOptions = [selectedOption];
              this.closeDropdownMenu();
            }
            this.currentOptions[index].selected = true;
          }
        }
      },

      handleKeyUp(event) {
        // event.preventDefault();
        const { key } = event;
        console.log('key ', key);
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
              this.selectOption(index);
              if (this.selectedParent) this.selectedIndex = 1;
              else this.selectedIndex = 0;
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
          if (this.currentOptions[index]?.children?.length) {
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
  };
</script>

<style src="./Dropdown.css" scoped></style>