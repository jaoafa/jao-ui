import { JApp, JAppMain } from '@/components/JApp'
import JInput from './JInput.vue'

export default {
  title: 'Components/Input',
  component: JInput,
  argTypes: {
    // props
    color: {},
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
    id: {},
    label: {},
    loading: {},
    required: {},
    success: {},
    successMessages: {
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    // events
    // slots
    default: {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'footer-append': {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    'footer-prepend': {
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    label: 'Input',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JInput },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-input v-bind="args" />
      </j-app-main>
    </j-app>
  `,
})
