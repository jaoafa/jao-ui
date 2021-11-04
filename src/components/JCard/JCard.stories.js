import { JApp } from '@/components/JApp'
import JCard from './JCard.vue'

export default {
  title: 'Components/Card',
  component: JCard,
  argTypes: {
    // props
    color: {},
    flat: {},
    height: {
      control: {
        type: 'text',
      },
    },
    href: {},
    maxHeight: {
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      control: {
        type: 'text',
      },
    },
    minHeight: {
      control: {
        type: 'text',
      },
    },
    minWidth: {
      control: {
        type: 'text',
      },
    },
    nuxt: {},
    tag: {},
    target: {},
    tile: {},
    to: {},
    width: {
      control: {
        type: 'text',
      },
    },
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
    default: 'Card Content',
  },
}

export const Basic = (args) => ({
  components: { JApp, JCard },
  setup() {
    return { args }
  },
  template: `
    <j-app no-stretch>
      <j-card @click="args.click" v-bind="args">
        ${args.default}
      </j-card>
    </j-app>
  `,
})
