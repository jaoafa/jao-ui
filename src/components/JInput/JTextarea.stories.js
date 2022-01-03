import { ref } from 'vue'
import { JApp, JAppMain } from '@/components/JApp'
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
    'click:append': {
      action: 'click:append',
    },
    'click:append-outer': {
      action: 'click:append-outer',
    },
    'click:prepend': {
      action: 'click:prepend',
    },
    'click:prepend-inner': {
      action: 'click:prepend-inner',
    },
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
  components: { JApp, JAppMain, JTextarea },
  setup() {
    const value = ref('')
    return { args, value }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-textarea
          v-model:value="value"
          v-bind="args"
          @input="args.input"
          @click:prepend="args['click:prepend']"
          @click:prepend-inner="args['click:prepend-inner']"
          @click:append="args['click:append']"
          @click:append-outer="args['click:append-outer']"
        />
      </j-app-main>
    </j-app>
  `,
})
