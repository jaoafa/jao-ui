import { ref } from 'vue'
import { JApp } from '@/components/JApp'
import JTextField from './JTextField.vue'

export default {
  title: 'Components/TextField',
  component: JTextField,
  argTypes: {
    // props
    color: {},
    counter: {},
    counterLength: {},
    disabled: {},
    error: {},
    errorMessages: {
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    hint: {
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    label: {},
    loading: {},
    readonly: {},
    required: {},
    success: {},
    successMessages: {
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    type: {},
    value: {},
    // events
    input: {
      action: 'input',
    },
    'update:value': {
      table: {
        disable: true,
      },
    },
    // slots
    append: {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    prepend: {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    label: 'TextField',
  },
}

export const Basic = (args) => ({
  components: { JApp, JTextField },
  setup() {
    const value = ref('')
    return { args, value }
  },
  template: `
    <j-app no-stretch>
      <j-text-field v-model:value="value" @input="args.input" v-bind="args" />
    </j-app>
  `,
})
