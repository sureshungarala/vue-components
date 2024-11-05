## Vs Autocomplete Dropdown

Nested-Autocomplete-Multiselect-Dropdown for Vue 3, refer GitHub branch [v2](https://github.com/sureshungarala/vue-components/tree/v2/vs-autocomplete) for usage and installation in Vue 2
<img src="https://img.shields.io/npm/dt/vs-autocomplete" /> <img src="https://img.shields.io/jsdelivr/npm/hy/vs-autocomplete" />

- Ability to single/multi-select
- Ability to select same option from different groups/parents
- A11y compliant

#### :film_projector: [Demo](https://codesandbox.io/s/vs-autocomplete-vue3-n4f3lq) for Vue3.

#### :film_projector: [Demo](https://codesandbox.io/s/vs-autocomplete-vue2-9zfyf1) for Vue2.

#### :rocket: Usage

```html
<vs-autocomplete
  label="Select option(s)"
  :options="options"
  :multiple="true"
  placeholder="Search options"
  :maxSelectableCount="4"
  :searchInputText="searchInputText"
  :searchOptionMatcher="optionMatcher"
  :keepMenuOpenOnRender="false"
  :compact="false"
  noSearchResultsText="No results found"
  labelHint="Select up to 4 options"
  v-model="selectedOptions"
  @open="onOpen"
  @close="onClose"
  :searchOnInput="searchOnInput"
  :renderOption="renderOption"
/>
```

#### :paperclip: Install

##### npm

```bash
 npm install vs-autocomplete@latest
```

##### yarn

```bash
 yarn add vs-autocomplete@latest
```

##### UMD

```html
<script src="https://cdn.jsdelivr.net/npm/vs-autocomplete@latest/dist/vs-autocomplete.umd.min.js"></script>
OR
<script src="https://unpkg.com/vs-autocomplete@latest/dist/vs-autocomplete.umd.js"></script>
```

In [Vue 2](https://github.com/sureshungarala/vue-components/tree/v2/vs-autocomplete#npm), UMD component is auto-registered globally.

In Vue 3, you need to either register the component globally by calling

```js
app.component('vs-autocomplete', window.VsAutocomplete);

/* app is the Vue application instance(<App>). */
```

or

use it locally by [registering](https://vuejs.org/api/options-misc.html#components) it in the component.

```js
components: {
  VsAutocomplete: window.VsAutocomplete,
}
```

<br>

#### :gear: Props

| Name                   | Type                                 | Default                            | Required | Description                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------ | ---------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`              | Array<`option`>                      | `[]`                               | `true`   | Options to be displayed in the dropdown                                                                                                                                                                          |
| `label`                | String                               | -                                  | `false`  | Label of the option                                                                                                                                                                                              |
| `multiple`             | Boolean                              | `false`                            | `false`  | Whether to allow multiple selection                                                                                                                                                                              |
| `placeholder`          | String                               | `''`                               | `false`  | Placeholder text to display when no option is selected                                                                                                                                                           |
| `searchInputText`      | String                               | `''`                               | `false`  | Search input text to filter options                                                                                                                                                                              |
| `keepMenuOpenOnRender` | Boolean                              | `false`                            | `false`  | Whether to keep the menu open on render                                                                                                                                                                          |
| `compact`              | Boolean                              | `false`                            | `false`  | Whether to render the dropdown in compact mode                                                                                                                                                                   |
| `maxSelectableCount`   | Number                               | `0`                                | `false`  | Maximum number of options that can be selected                                                                                                                                                                   |
| `noSearchResultsText`  | String                               | `No results found`                 | `false`  | Text to display when no search results are found                                                                                                                                                                 |
| `labelHint`            | String                               | -                                  | `false`  | Hint text to display below the label                                                                                                                                                                             |
| `searchOptionMatcher`  | (searchInputText, option) => boolean | () => {}                           | `false`  | Custom search option matcher function compares `searchInputText` against each option. If defined, it must return a boolean indicating match; otherwise, defaults to matching option labels.                      |
| `searchOnInput`        | () => Promise<Array<`option`>>       | () => {}                           | `false`  | Custom search function to fetch options based on the input text. If defined, it must return a promise resolving to an array of options; otherwise, defaults to filtering options based on the search input text. |
| `renderOption`         | (option: `option`) => string         | (option: `option`) => option.label | `false`  | Custom render function to render HTML as label in dropdown option                                                                                                                                                |

<br>

#### :link: Events

| Name      | Type                                     | Description                         | Payload                         |
| --------- | ---------------------------------------- | ----------------------------------- | ------------------------------- |
| `v-model` | Array<`option`>                          | Emits the selected option(s)        | Selected options                |
| `open`    | (HTMLDivElement, HTMLUListElement) => {} | Emits when the dropdown-menu opens  | Dropdown element & Menu element |
| `close`   | (HTMLDivElement, HTMLUListElement) => {} | Emits when the dropdown-menu closes | Dropdown element & Menu element |

<br>

##### :nut_and_bolt: Type `option`

| Name       | Type            | Required | Description                              |
| ---------- | --------------- | -------- | ---------------------------------------- |
| `label`    | String          | `true`   | Label of the option                      |
| `id`       | Any             | `false`  | Unique identifier for the option         |
| `value`    | Any             | `false`  | Value of the option                      |
| `disabled` | Boolean         | `false`  | Whether the option is disabled           |
| `selected` | Boolean         | `false`  | Whether the option is selected initially |
| `children` | Array<`option`> | `false`  | Nested options                           |

<br>

##### :nail_care: CSS Variables for Styling

| Variable Name        | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `--primary-color `   | Primary border color on the combobox                   |
| `--background-color` | Background color of the option when focused or hovered |
| `--hint-color`       | Hint text color                                        |
| `--v-dropdown-width` | Width of the combobox                                  |
| `--max-width`        | Max width of the combobox                              |
| `--box-shadow`       | Box shadow of the combobox                             |
| `--bezier-curve`     | Menu toggle transition                                 |
| `--animation-delay`  | Transition delay                                       |

<br>

##### :clipboard: `options` prop example

```js
[
  {
    id: 1,
    label: 'Option 1',
    value: 'option1',
    children: [
      {
        id: 1.1,
        label: 'Option 1.1',
        value: 'option1.1',
        selected: true,
      },
      {
        id: 1.2,
        label: 'Option 1.2',
        value: 'option1.2',
      },
      {
        id: 1.3,
        label: 'Option 1.3',
        value: 'option1.3',
        children: [
          {
            id: 1.31,
            label: 'Option 1.3.1',
            value: 'option1.3.1',
          },
          {
            id: 1.32,
            label: 'Option 1.3.2',
            value: 'option1.3.2',
          },
        ],
      },
      {
        id: 1234,
        label: 'Option 1.4',
        value: 'option1.4',
      },
    ],
  },
  {
    id: 2,
    label: 'A long label. Should be truncated. Check in demo.(Option 2)',
    value: 'option2',
    selected: true,
    disabled: true,
  },
  {
    id: 3,
    label: 'A long label. Should be truncated. Check in demo.(Option 3)',
    value: 'option3',
    disabled: true,
    children: [
      {
        id: 3.1,
        label: 'Option 3.1',
        value: 'option3.1',
      },
      {
        id: 3.2,
        label: 'Option 3.2',
        value: 'option3.2',
      },
      {
        id: 3.3,
        label: 'Option 3.3',
        value: 'option3.3',
        children: [
          {
            id: 3.31,
            label: 'Option 3.3.1',
            value: 'option3.3.1',
          },
          {
            id: 3.32,
            label: 'Option 3.3.2',
            value: 'option3.3.2',
          },
        ],
      },
      {
        id: 4,
        label: 'Option 4.1',
        value: 'option4.1',
      },
    ],
  },
];
```

<br>

#### :bug: Feedback

If you find any issues, please create an issue [here](https://github.com/sureshUngarala/vue-components/issues/new).
