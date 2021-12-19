import { ref } from 'vue'
import { JApp } from '@/components/JApp'
import JTextarea from './JTextarea.vue'

export default {
  title: 'Components/Textarea',
  component: JTextarea,
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
    resize: {},
    rows: {},
    success: {},
    successMessages: {
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
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
    'append-outer': {
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
    'prepend-inner': {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    label: 'Textarea',
  },
}

export const Basic = (args) => ({
  components: { JApp, JTextarea },
  setup() {
    const value = ref('')
    return { args, value }
  },
  template: `
    <j-app no-stretch>
      <j-textarea v-model:value="value" @input="args.input" v-bind="args" />
    </j-app>
  `,
})
