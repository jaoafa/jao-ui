import { JApp, JAppMain } from '@/components/JApp'
import JButton from './JButton.vue'

export default {
  title: 'Components/Button',
  component: JButton,
  argTypes: {
    // props
    color: {},
    disabled: {},
    href: {},
    icon: {},
    loading: {},
    noDecoration: {},
    nuxt: {},
    outlined: {},
    size: {
      options: ['large', 'medium', 'small'],
      control: {
        type: 'select',
      },
    },
    tag: {},
    target: {},
    to: {},
    // events
    click: {
      action: 'click',
    },
    // slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
  },
  args: {
    size: 'medium',
    default: 'Button',
  },
}

export const Basic = (args) => ({
  components: { JApp, JAppMain, JButton },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-app-main>
        <j-button @click="args.click" v-bind="args">
          ${args.default}
        </j-button>
      </j-app-main>
    </j-app>
  `,
})
