## Vs Autocomplete Dropdown

Nested-Autocomplete-Multiselect-Dropdown for Vue.js(2.6.12)
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

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | String | - | Label of the option |
| `options` | Array<`option`> | `[]` | Options to be displayed in the dropdown |
| `multiple` | Boolean | `false` | Whether to allow multiple selection |

<br>
#### :link: Events

| Name | Type | Description |
| --- | --- | --- |
|`v-model` | Array<`option`> |  Emits the selected option(s) |

<br>
##### :nut_and_bolt: Type `option`
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | Any | `false` | Unique identifier for the option |
| `label` | String | `true` | Label of the option |
| `value` | Any | `true` | Value of the option |
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
  },
  {
    id: 3,
    label: 'A long label. Should be truncated. Check in demo.(Option 3)',
    value: 'option3',
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