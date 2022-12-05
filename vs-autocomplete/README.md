## Vs Autocomplete Dropdown

Nested-Autocomplete-Multiselect-Dropdown for Vue.js(v2)
<img src="https://img.shields.io/npm/dt/vs-autocomplete" /> <img src="https://img.shields.io/jsdelivr/npm/hy/vs-autocomplete" />

- Ability to single/multi-select
- Ability to select same option from different groups/parents
- A11y compliant

#### :film_projector: [Demo](https://codesandbox.io/s/vs-autocomplete-9zfyf1?file=/src/App.vue)

#### :rocket: Usage

```html
  <vs-autocomplete
    label="Select option(s)"
    :options="options"
    :multiple="true"
    :searchInputText="searchInputText"
    :keepMenuOpenOnRender="false"
    v-model="selectedOptions"
  />
```

#### :paperclip: Install

##### npm
```bash
 npm install vs-autocomplete
```
##### yarn
```bash
 yarn add vs-autocomplete
```

##### UMD

```html
 <script src="https://cdn.jsdelivr.net/npm/vs-autocomplete@latest/dist/vs-autocomplete.umd.min.js"></script>
 OR
 <script src="https://unpkg.com/vs-autocomplete@latest/dist/vs-autocomplete.umd.js"></script>
```

#### :gear: Props

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `options` | Array<`option`> | `[]` | `true` | Options to be displayed in the dropdown |
| `label` | String | - | `false` | Label of the option |
| `multiple` | Boolean | `false` | `false` | Whether to allow multiple selection |
| `searchInputText` | String | `''` | `false` | Search input text to filter options |
| `keepMenuOpenOnRender` | Boolean | `false` | `false` | Whether to keep the menu open on render |
<br>

#### :link: Events

| Name | Type | Description |
| --- | --- | --- |
|`v-model` | Array<`option`> |  Emits the selected option(s) |

<br>

##### :nut_and_bolt: Type `option`
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | String | `true` | Label of the option |
| `id` | Any | `false` | Unique identifier for the option |
| `value` | Any | `false` | Value of the option |
| `disabled` | Boolean | `false` | Whether the option is disabled |
| `selected` | Boolean | `false` | Whether the option is selected |
| `children` | Array<`option`> | `false` | Nested options |

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
          }
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
          }
        ],
      },
      {
        id: 4,
        label: 'Option 4.1',
        value: 'option4.1',
      },
    ],
  },
]
```
<br>
#### Feedback
If you find any issues, please create an issue [here](https://github.com/sureshUngarala/vue-components/issues/new).